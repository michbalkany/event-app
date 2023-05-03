import Link from "next/link";
export const Header = () => {
  return (
    <header>
      <nav>
        <Link href="/" passHref>
          <h2> Home</h2>
        </Link>
        <Link href="/events" passHref>
          <h2> Events</h2>
        </Link>
        <Link href="/about-us" passHref>
          <h2> About Us</h2>
        </Link>
      </nav>
    </header>
  );
};
