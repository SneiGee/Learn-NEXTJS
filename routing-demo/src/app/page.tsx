import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-center p-6">Welcome to Home Page</h1>
      <br />
      <Link href="/about" className="m-5">About Me</Link>
      <Link href="/blog" className="m-5">Blog Page</Link>
      <Link href="/products" className="m-5">Product List</Link>
      <Link href="/login" className="m-5">Login</Link>
    </>
  );
}
