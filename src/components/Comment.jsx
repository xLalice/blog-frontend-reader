import React from "react";

export default function Comment({author, content, createdAt}) {
    return (
        <div className="text-white shadow-md rounded-md p-4 mb-4">
            <h2 className="text-lg font-semibold">{author}</h2>
            <p className="mb-2">{content}</p>
            <p>{createdAt}</p>
        </div>
    )
}