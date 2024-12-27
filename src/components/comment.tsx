import React, { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

interface Comment {
    id: string;
    author: string;
    text: string;
}

interface CommentSectionProps {
    postId: string;
}

export default function CommentSection({ }: CommentSectionProps) {
    const [Comments, setComments] = useState<Comment[]>([]);
    const [newComment, setNewComment] = useState('');
    const [authorName, setAuthorName] = useState('');
    const [editingCommentId, setEditingCommentId] = useState<string | null>(null);

    const handleAddComment = () => {
        if (newComment.trim() && authorName.trim()) {
            const newCommentObj: Comment = {
                id: new Date().toISOString(),
                author: authorName,
                text: newComment, // <-- Use newComment instead of textName
            };
            setComments([...Comments, newCommentObj]);
            setNewComment('');
            setAuthorName('');
        }
    };

    const handleEditComment = (commentID: string) => {  // <-- Change from String to string
        const commentToEdit = Comments.find((comment) => comment.id === commentID);
        if (commentToEdit) {
            setNewComment(commentToEdit.text);
            setAuthorName(commentToEdit.author);
            setEditingCommentId(commentID);
        }
    };
    

    const handleSaveEditComment = () => {
        if (newComment.trim() && authorName.trim() && editingCommentId) {
            const updatedComments = Comments.map((comment) =>
                comment.id === editingCommentId
                    ? { ...comment, text: newComment, author: authorName }
                    : comment
            );
            setComments(updatedComments); // <-- Use setComments instead of setComment
            setNewComment('');
            setAuthorName('');
            setEditingCommentId(null);
        }
    };

    return (
        <div className=" mt-8">
            <h2 className="text-2xl font-semibold">Comments</h2>
            <div className="mt-4 space-y-4">
                {Comments.length > 0 ? (
                    Comments.map((comment) => (
                        <Card key={comment.id}>
                            <CardContent className="p-4">
                                <div className="font-semibold">{comment.author}</div>
                                <p>{comment.text}</p>
                                <Button onClick={() => handleEditComment(comment.id)} className="mt-2 text-white bg-blue-500">
                                    Edit
                                </Button>
                            </CardContent>
                        </Card>
                    ))
                ) : (
                    <p className="text-slate-600">No comment yet</p>
                )}
            </div>

            <div className="mt-6">
                <Input
                    type="text"
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    placeholder="Your name"
                    className="w-full mb-2"
                />
                <Input
                    type="text"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Add a comment"
                    className="w-full mb-2"
                />

                <Button onClick={editingCommentId ? handleSaveEditComment : handleAddComment} className="mt-4 bg-blue-500 text-white">
                    {editingCommentId ? "Save" : "Submit"}
                </Button>
            </div>
        </div>
    );
}
