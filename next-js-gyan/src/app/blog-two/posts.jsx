"use client"
import Link from "next/link";
import { use } from "react";

export default function Posts({promise}) {


    const posts = use(promise)

    console.log("Client Component")
  return (
    <div className="grid grid-cols-5 gap-2 mt-3">
      {posts.map((post) => {
        return (
          <div key={post.id} className="border p-4">
            <Link href={`/blog/${post.id}`} className="text-green-500">
              <h2>{post.title}</h2>
            </Link>
            <p>{post.body}</p>
          </div>
        );
      })}
    </div>
  );
}
