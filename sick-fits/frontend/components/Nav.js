import Link from 'next/link';

export default function Nav() {
  return (
    <nav>
      <Link href="/product">Products</Link>
      <Link href="/sell">Sells</Link>
      <Link href="/order">Orders</Link>
      <Link href="/account">Account</Link>
      sell orders account
    </nav>
  );
}
