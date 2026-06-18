from django.shortcuts import render, redirect
from django.contrib import messages
from .forms import SubscriptionForm

def subscribe_view(request):
    if request.method == 'POST':
        form = SubscriptionForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'Вы успешно подписались на рассылку!')
            return redirect('index')
    else:
        form = SubscriptionForm()
    return render(request, 'newsletter/subscribe.html', {'form': form})