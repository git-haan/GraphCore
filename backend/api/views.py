from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.

@api_view(['GET'])
def candlestick_data(request):
    data = [
        # Hardcoded data for candlestick chart
        {"x": "2023-01-01", "open": 30, "high": 40, "low": 25, "close": 35},
        {"x": "2023-01-02", "open": 35, "high": 45, "low": 30, "close": 40},
        {"x": "2023-01-03", "open": 40, "high": 50, "low": 35, "close": 45},
        {"x": "2023-01-04", "open": 45, "high": 55, "low": 40, "close": 50},
        {"x": "2023-01-05", "open": 50, "high": 60, "low": 45, "close": 55},
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