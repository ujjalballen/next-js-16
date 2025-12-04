import { Suspense } from "react";
import Posts from "./posts";

export default function BlogTwo() {
    console.log("server component")

    const promise = fetch("https://jsonplaceholder.typicode.com/posts").then(res=> res.json())

  return <Suspense fallback={<div>Loading...</div>}>
    <Posts promise={promise} />
  </Suspense>;
}
