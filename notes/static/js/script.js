// TODO: use vanilla js replacing this
$(document).ready(function() {
    $('input[type=checkbox]').change(function() {
        if (this.checked) {
        $(this).next(".label-text").css("text-decoration-line", "line-through");
        } else {
        $(this).next(".label-text").css("text-decoration-line", "none");
        }
    });
});


const add_note_btn = document.getElementById("add_note_btn");
// const del_note_btn = document.getElementById("");


function validate_note_text() {
    // validates that the note has some text inside
    let note_txt = document.getElementById("add_note_txt");
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


add_note_btn.addEventListener("click", addNote());
