import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog"
};


export default function Blog() {
    return (
      <h1 className="text-center p-6">Blog Page</h1>
    );
  }
  