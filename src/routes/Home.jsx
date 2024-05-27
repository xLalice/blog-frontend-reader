import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from "../components/Card";

export default function Home(){
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`https://blog-backend-api-production-2c23.up.railway.app/api/posts`, { mode: 'cors' })
          .then(response => {
            if (response.ok)
              return response.json()
            else
              throw new Error(`${response.status} ${response.statusText}`);
          })
          .then(response => { setPosts(response) })
          .catch(error => { console.log(error); });
      }, []);

    console.log(posts);

    return (
        <>
          <section className="py-16 text-left">
              <div className="container mx-auto pl-4">
                <h2 className="text-9xl font-bold font-lobster">CARPE DIEM</h2>
                <p className="mt-4 text-lg font-salium">An Odin Project Assignment</p>
              </div>
          </section>
          <section className="container mx-auto py-8 flex flex-wrap justify-center">
            {posts.length ? (
                posts.map(post => (
                  <div key={post._id} className="w-72 h-96 bg-gray-900 rounded-md p-6 m-2 text-white flex flex-col justify-between">
                    <Card 
                      author={post.author}
                      date={post.date}
                      content={post.content}
                      title={post.title}
                      id={post._id} />
                  </div>
                ))
                ) : (
                <p className="text-center mt-8">Loading...</p>
                )}
          </section>
        </>
    )
}
