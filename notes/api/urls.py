from django.urls import re_path

from .endpoints import NoteDetails, NoteList


urlpatterns = [
    re_path("^$", NoteList.as_view({"get": "list", "post": "create"})),
    re_path("^(?P<pk>\d+)$", NoteDetails.as_view({
        "get": "retrieve",
        "patch": "partial_update",
        "delete": "destroy",
    })),
]
