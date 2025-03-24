"use client";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-6">
      <div className="text-center text-gray-600 text-sm">
        <p>
          &copy; {new Date().getFullYear()} AI Course Crafter. All rights
          reserved.
        </p>
        <div className="flex justify-center gap-6 mt-2">
          {/* <Link href="/about" className="hover:text-indigo-500 transition">
            About Us
          </Link>
          <Link href="/contact" className="hover:text-indigo-500 transition">
            Contact
          </Link>
          <Link href="/terms" className="hover:text-indigo-500 transition">
            Terms & Conditions
          </Link> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
