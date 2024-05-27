import { useState, useEffect } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Link } from "react-router-dom";

export default function Card({ author, date, content, title, id }) {
    const editor = useEditor({
        extensions: [StarterKit],
        content: content,
        editable: false,
    });

    return (
        <div className="flex flex-col h-full">
            <h3 className="text-xl font-bold mb-2 w-full ">{title}</h3>
            <div className="flex-grow overflow-hidden">
                <EditorContent editor={editor} />
            </div>
            <div className="mt-4">
                <div className="text-sm">{author}</div>
                <div className="text-sm">{date}</div>
            </div>
            <Link to={`/post/${id}`} className="mt-4 text-blue-500 hover:underline self-end">Read More</Link>
        </div>
    );
}
