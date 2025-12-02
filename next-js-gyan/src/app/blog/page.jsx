import Link from "next/link";

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      heading: "Post one Heading",
      paragraph: "This is Post one Paragraph",
    },
    {
      id: 2,
      heading: "Post two Heading",
      paragraph: "This is Post two Paragraph",
    },
    {
      id: 3,
      heading: "Post three Heading",
      paragraph: "This is Post three Paragraph",
    },
  ];

  return (
    <div className="p-2">
      <h1>Blog Posts</h1>
      <div className="grid grid-cols-5 gap-2 mt-3">
        {posts.map((post) => {
          return (
            <div key={post.id} className="border p-4">
              <Link href={`/blog/${post.id}`} className="text-green-500"><h2>{post.heading}</h2></Link>
              <p>{post.paragraph}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
