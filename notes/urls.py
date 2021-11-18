from django.urls import re_path

from .views import NotesListView


urlpatterns = [
    re_path("^$", NotesListView.as_view()),
]
