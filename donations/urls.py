from django.urls import path
from . import views

app_name = 'donations'

urlpatterns = [
    # Страница пожертвований
    path('', views.donation_list, name='donation_list'),
    
    # Создание пожертвования
    path('create/', views.donation_create, name='donation_create'),
    
    # Успешное пожертвование
    path('success/<int:donation_id>/', views.donation_success, name='donation_success'),
]