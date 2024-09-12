from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.

@api_view(['GET'])
def candlestick_data(request):
    data = [
        # Hardcoded data for candlestick chart
        {"x": 1672617600000, "o": 30, "h": 40, "l": 25, "c": 35},
        {"x": 1672704000000, "o": 35, "h": 45, "l": 30, "c": 40},
        {"x": 1672790400000, "o": 40, "h": 50, "l": 35, "c": 45},
    ]
    return Response(data)

@api_view(['GET'])
def line_chart_data(request):
    data = {
        # Hardcoded data for line chart
        "labels": ["Jan", "Feb", "Mar", "Apr"],
        "data": [10, 20, 30, 40]
    }
    return Response(data)

@api_view(['GET'])
def bar_chart_data(request):
    data = {
        # Hardcoded data for bar chart
        "labels": ["Product A", "Product B", "Product C"],
        "data": [100, 150, 200]
    }
    return Response(data)

@api_view(['GET'])
def pie_chart_data(request):
    data = {
        # Hardcoded data for pie chart
        "labels": ["Red", "Blue", "Yellow"],
        "data": [300, 50, 100]
    }
    return Response(data)