from django.urls import path
from . import views

urlpatterns = [
    path('api/items/', views.item_list, name='item_list'),
    path('api/items/<int:id>/', views.item_detail, name='item_detail'),
]
