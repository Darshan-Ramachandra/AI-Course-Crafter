import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center text-center text-white px-6"
      style={{
        background: "linear-gradient(to right, #a084ca, #6f9ceb)" // Rich pastel purple to deeper blue
      }}
      
      
      
    >
      {/* Title */}
      <h1 className="text-5xl font-bold pt-32">
        AI Course Crafter 🚀
      </h1>

      {/* Catchy Subtitle */}
      <p className="text-lg mt-4 max-w-2xl">
      "Infinite possibilities await! 
       Create, explore, and master new skills effortlessly with AI-powered courses.
      Start your journey today!
      </p>

      {/* Image */}
      <div className="mt-6">
        <Image
          src="/hero.png" // Ensure this file exists in the public folder
          alt="AI Learning"
          width={500}
          height={300}
          className="w-auto h-auto"
        />
      </div>

      {/* CTA Button */}
      <a
        href="/explore-course"
        className="mt-6 px-6 py-3 bg-white text-gray-800 rounded-lg text-lg font-semibold hover:bg-gray-200 transition"
      >
        🔍 Explore Now
      </a>
    </section>
  );
}
