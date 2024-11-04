import Link from "next/link";

export default function F4() {
    return (
        <>
            <h1>F4 Page</h1>
            <div>
                <Link href="/about">F3 Page</Link>
            </div>
        </>
    );
}