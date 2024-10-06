import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px', position: 'relative' }}>
      {/* Logo on the left */}
      <div style={{ position: 'absolute', left: '10px' }}>
        <Image src="/images/logo.png" alt="Logo" width={50} height={50} />
      </div>
      {/* Centered list of links */}
      <ul style={{ display: 'flex', listStyle: 'none', justifyContent: 'center', alignItems: 'center', margin: 0, padding: 0 }}>
        <li style={{ marginRight: '20px' }}>
          <Link href="/">Home</Link>
        </li>
        <li style={{ marginRight: '20px' }}>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
