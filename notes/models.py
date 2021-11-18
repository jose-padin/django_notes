from django.db import models
from django.utils.translation import ugettext as _

from mixins.models import AbstractBaseModel


class Note(AbstractBaseModel):

    # CHOICES = [
    #     ("BASIC", "Basic"),
    #     ("LIST", "List")
    # ]
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=100, blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    is_done = models.BooleanField(default=False)
    is_deleted = models.BooleanField(default=False)
    # IDEA: different types of notes
    # type = models.CharField(max_length=100, choices=CHOICES)

    def __str__(self) -> str:
        return self.title

    class Meta:
        db_table = "notes"
        verbose_name = _("Note")
        verbose_name_plural = _("Notes")