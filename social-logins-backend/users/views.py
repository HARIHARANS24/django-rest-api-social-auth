from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .serializers import UserProfileSerializer
from .models import UserProfile

class UserProfileView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        # Get user profile for the authenticated user
        profile = UserProfile.objects.get(user=request.user)
        serializer = UserProfileSerializer(profile)
        return Response(serializer.data)
