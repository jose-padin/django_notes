from django.shortcuts import render
from django.views.generic import ListView

from .models import Note

MODULE_NAME = "Notes"


class NotesListView(ListView):
    """List all notes"""
    def get(self, request, *args, **kwargs):
        notes = Note._default_manager.filter(is_deleted=False)
        return render(
            request,
            "hello.html",
            {
                "notes": notes,
                "title": MODULE_NAME
            })