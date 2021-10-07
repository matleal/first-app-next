import Link from 'next/link';

const Index = () => {
    return (
        <div>
            <h1>Hello motherfucker</h1>
            <Link href="/about">
                <a>About</a>
            </Link>

            <br />

            <Link href="/category/products">
                <a>Products</a>
            </Link>
        </div>
    );
};

export default Index;