import Link from "next/link";

export default async function BlogPage() {

    const data = await fetch("https://jsonplaceholder.typicode.com/posts", { cache: 'no-store' });
    const posts = await data.json();


  return (
    <div className="p-4">
      <h1>Blog Posts</h1>
      <div className="grid grid-cols-5 gap-2 mt-3">
        {posts.map((post) => {
          return (
            <div key={post.id} className="border p-4">
              <Link href={`/blog/${post.id}`} className="text-green-500"><h2>{post.title}</h2></Link>
              <p>{post.body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
