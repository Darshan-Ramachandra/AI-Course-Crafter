import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const Header = () => {
  return (
    <>
      <Head>
        <title>AI Course Crafter - Personalized AI Courses</title>
        <meta
          name="description"
          content="Generate personalized AI courses with AI-driven learning paths."
        />
        <meta
          name="keywords"
          content="AI, Online Learning, AI Courses, Machine Learning"
        />
      </Head>

      <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50 px-5 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" width={40} height={40} alt="Logo" />
          <span className="font-bold text-lg text-gray-800">
            AI Course <span className="text-indigo-500">Crafter</span>
          </span>
        </Link>

        {/* Navigation Links */}
        <nav className="flex gap-6 text-gray-700 text-lg">
        <Link href="/dashboard" className="hover:text-indigo-500 transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-indigo-500 transition">
            About Us
          </Link>
          <Link href="/contact" className="hover:text-indigo-500 transition">
            Contact Us
          </Link>
          <Link href="/terms" className="hover:text-indigo-500 transition">
            Terms & Conditions
          </Link>
        </nav>

        {/* Buttons */}
        <Link href="/dashboard">
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-md transition">
            Get Started
          </Button>
        </Link>
      </div>
    </>
  );
};

export default Header;
