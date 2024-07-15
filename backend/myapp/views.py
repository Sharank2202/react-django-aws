from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Item
import json

@csrf_exempt
def item_list(request):
    if request.method == 'GET':
        items = Item.objects.all()
        items_list = list(items.values())
        return JsonResponse(items_list, safe=False)
    elif request.method == 'POST':
        data = json.loads(request.body)
        item = Item.objects.create(name=data['name'], description=data['description'])
        return JsonResponse({'id': item.id, 'name': item.name, 'description': item.description})

@csrf_exempt
def item_detail(request, id):
    item = get_object_or_404(Item, id=id)
    if request.method == 'GET':
        return JsonResponse({'id': item.id, 'name': item.name, 'description': item.description})
