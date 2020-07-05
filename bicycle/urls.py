from django.urls import path
from . import views

app_name='bicycle'
urlpatterns=[
    path('',views.bicycle, name="bicycle"),
]