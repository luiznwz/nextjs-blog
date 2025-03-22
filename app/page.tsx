import { BlogPostCard } from "@/components/general/BlogPostCard";
import { Suspense } from "react";
import { prisma } from "./utils/db";

async function getData() {
  const data = await prisma.blogPost.findMany({
    select: {
      title: true,
      imageUrl: true,
      content: true,
      authorImage: true,
      authorId: true,
      authorName: true,
      id: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return data;
}

export default function Home() {
  return (
    <div className="py-6">
      <h1 className="text-3xl font-bold tracking-tight mb-8">Latest Posts </h1>

      <Suspense fallback={<div>Loading...</div>}>
        <BlogPosts />
      </Suspense>
    </div>
  );
}

async function BlogPosts() {
  const data = await getData();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((item) => (
        <BlogPostCard key={item.id} data={item} />
      ))}
    </div>
  );
}
