import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comment from "../components/Comment";

export default function Post() {
    const { id } = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const postResponse = await fetch(`https://blog-backend-api-production-2c23.up.railway.app/api/posts/${id}`, { mode: 'cors' });
            if (postResponse.ok) {
              const postData = await postResponse.json();
              setPost(postData);
            } else {
              throw new Error(`${postResponse.status} ${postResponse.statusText}`);
            }
    
            const commentsResponse = await fetch(`https://blog-backend-api-production-2c23.up.railway.app/api/posts/${id}/comments`, { mode: 'cors' });
            if (commentsResponse.ok) {
              const commentsData = await commentsResponse.json();
              setComments(commentsData);
            } else {
              throw new Error(`${commentsResponse.status} ${commentsResponse.statusText}`);
            }
          } catch (error) {
            console.log(error);
          }
        };
    
        fetchData();
      }, []);

    

    return (
        <div className="max-w-2xl mx-auto mt-16 px-4 py-8 text-center">
            <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
            <p className="text-white mb-4">{post.content}</p>
            <p className="text-gray-400 mb-2">Author: {post.author}</p>
            <p className="text-gray-400 mb-2">Date: {post.date}</p>
            <h3 className="text-xl font-semibold my-14">Comments</h3>
            {comments.map(comment => (
                <Comment key={comment._id} author={comment.author} content={comment.content} createdAt={comment.createdAt} />
            ))}
        </div>
    )
}