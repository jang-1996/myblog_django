from django.shortcuts import render

# Create your views here.
def bicycle(request):
    return render(request, 'bicycle/bicycle.html')