from django.shortcuts import render

# Create your views here.

def index(request):
    #return HttpResponse("Index")
    return render(request, "index.html")

def login(request):
    return render(request, "login.html")