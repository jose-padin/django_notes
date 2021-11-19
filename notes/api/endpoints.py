from pprint import PrettyPrinter

from rest_framework import status
from rest_framework.permissions import AllowAny
# from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
# from rest_framework.views import APIView

from ..models import Note
from .serializer import NoteSerializer

print = PrettyPrinter(indent=4).pprint


# class NoteList(APIView):
class NoteList(ModelViewSet):
    serializer_class = NoteSerializer
    permission_classes = (AllowAny,)
    
    # TODO: improve this QS
    def get_queryset(self):
        return Note._default_manager.filter(is_deleted=False)


class NoteDetails(ModelViewSet):
    serializer_class = NoteSerializer
    permission_classes = (AllowAny,)

    # TODO: improve this QS
    def get_queryset(self):
        return Note._default_manager.filter(is_deleted=False)
