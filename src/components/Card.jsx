import React from "react";
import { Link } from "react-router-dom";

export default function Card({id, title, content, author, date}) {
    return (
        <>
            <h1 className="text-2xl font-bold mb-2">{title}</h1>
            <p className="mb-6">By {author} on {date}</p> 
            <p>{content}</p>
            <button className="mt-4 text-gray-800 bg-white hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded">
                <Link to={`/post/${id}`} >
                    View Post
                </Link>
            </button>
        </>
            
    );
}
