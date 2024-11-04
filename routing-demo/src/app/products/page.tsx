import Link from "next/link";

export default function ProductList() {
    const productsId = 10;
    return (
        <>
            <div className="m-5">
                <Link href="/">Home</Link> <br />
                <h1>
                    <Link href="products/1">Product 1</Link>
                </h1>
                <h1>
                    <Link href="products/2">Product 2</Link>
                </h1>
                <h1>
                    <Link href="products/3">Product 3</Link>
                </h1>
                <h1>
                    <Link href={"products/${productsId}"}>Product  {productsId}</Link>
                </h1>
            </div>
        </>
    );
  }
  