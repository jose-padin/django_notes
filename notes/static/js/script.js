/*
TODO:
1 - Add style to the text input (new note)
2 - Add a new page with the trash: the deleted notes
3 - Add support to recovery deleted notes
4 - Improve the page style
5 - Add support to log in
6 - Add support to store data related with a user
7 - Add flake-8 support
8 - Add support to multiple notes containers (with title)
*/


const note_txt = document.getElementById("add_note_txt");


note_txt.addEventListener("keydown", event => {
    if (event.key === 'Enter') {
        addNote();
    }
})


// Validate that the note has some text inside
function validate_note_text() {
    if (note_txt.value) {
        return note_txt.value;
    }
    return false;
}


// Adding a note
function addNote() {
    let note_text = validate_note_text();

    if (note_text) {
        fetch(
            "http://127.0.0.1:8000/api/v1/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "title": note_text
                })
            })
            .then(response => {
                if (response.ok) {
                    fetch("http://127.0.0.1:8000/api/v1/")
                    .then(response => {
                        response.json()
                        .then(data => {
                            window.location.href = window.location.href
                            return data;
                        })
                    })
                }
                return response.json();
            })
        }
    }


// Deleting note
function deleteNote(note_id) {
    fetch(
        `http://127.0.0.1:8000/api/v1/${note_id}`, {
            method: "DELETE",
        })
        .then(response => {
        })
        .then(data => {
            window.location.href = window.location.href
    })
}


// Check / uncheck a note and change its status in DB
function changeStyle(event, note_id) {
    if (event.target.checked) {
        event.target.nextElementSibling.style["text-decoration-line"] = "line-through"
        fetch(
            `http://127.0.0.1:8000/api/v1/${note_id}`, {
                method: "PATCH",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    is_done: true
                }),
            })
    } else {
        event.target.nextElementSibling.style["text-decoration-line"] = "none"
        fetch(`http://127.0.0.1:8000/api/v1/${note_id}`, {
            method: "PATCH",
            body: JSON.stringify({
                is_done: false
            }),
            headers: {
                "Content-Type": "application/json",
            },
        })
    }
}
