import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center p-24">
      <span className="text-5xl">Hello World!!!</span>
      <Link href={'/about'}>About Page</Link>
    </main>
  );
}
