from django.shortcuts import render, redirect
from django.contrib.auth import login, logout
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from .forms import CustomUserCreationForm, CustomAuthenticationForm
from .models import CustomUser
from newsletter.models import Subscriber

def register_view(request):
    if request.method == 'POST':
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('accounts:login')
    else:
        form = CustomUserCreationForm()
    return render(request, 'accounts/register.html', {'form': form})

def login_view(request):
    if request.method == 'POST':
        form = CustomAuthenticationForm(request, data=request.POST)
        if form.is_valid():
            login(request, form.get_user())
            return redirect('accounts:dashboard')
    else:
        form = CustomAuthenticationForm()
    return render(request, 'accounts/login.html', {'form': form})

def logout_view(request):
    logout(request)
    return redirect('index')

@login_required
def dashboard_view(request):
    is_subscribed = Subscriber.objects.filter(email=request.user.email).exists()
    
    if request.method == 'POST':
        if 'avatar' in request.FILES:
            request.user.avatar = request.FILES['avatar']
            request.user.save()
            messages.success(request, 'Аватар успешно обновлён!')
            return redirect('accounts:dashboard')

        if request.POST.get('update_profile'):
            new_email = request.POST.get('email', '')

            if CustomUser.objects.filter(email=new_email).exclude(pk=request.user.pk).exists():
                messages.error(request, 'Этот email уже используется другим пользователем.')
                return redirect('accounts:dashboard')
            
            request.user.first_name = request.POST.get('first_name', '')
            request.user.last_name = request.POST.get('last_name', '')
            request.user.email = new_email
            request.user.phone = request.POST.get('phone', '')
            request.user.bio = request.POST.get('bio', '')
            request.user.save()
            messages.success(request, 'Профиль успешно обновлён!')
            return redirect('accounts:dashboard')
    
    context = {
        'is_subscribed': is_subscribed,
    }
    return render(request, 'accounts/dashboard.html', context)