# Generated by Django 3.2 on 2021-10-01 14:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('notes', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='note',
            name='is_deleted',
            field=models.BooleanField(default=False),
        ),
    ]