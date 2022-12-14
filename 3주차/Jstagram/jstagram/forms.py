from django import forms
from .models import Post, Comment


class PostForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = ['title', 'photo', 'caption', 'location']
        widgets = {
            'caption': forms.Textarea
        }


class CommentForm(forms.ModelForm):
    class Meta:
        model = Comment
        fields = ['message']
        widgets = {
            "message": forms.Textarea(attrs={"rows": 2}),
        }
        # 위젯 -> 칸 크기를 임의로 지정
