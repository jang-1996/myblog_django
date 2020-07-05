from django.shortcuts import render

# Create your views here.
def mise(request):
    return render(request, 'introduction/mise.html')