import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Head from 'next/head';

const teamMembers = [
  {
    name: 'Darshan RK',
    role: 'Developer',
    image: 'darshan.jpg', // Update with actual image path
    email: 'darshanrk.sit24@rvce.edu.in',
  },
  {
    name: 'Shreya Rasale',
    role: 'Developer',
    image: 'shreya2.jpg', // Update with actual image path
    email: 'rasaleshreya.sit24@rvce.edu.in',
  },
  
];

const AboutUs = () => {
  return (
    <>
      <Header />
      <Head>
        <title>About Us | AI Course Generator</title>
        <meta
          name="description"
          content="Discover AI Course Generator, a cutting-edge platform designed to create personalized AI courses tailored to every learner's needs."
        />
        <meta
          name="keywords"
          content="AI courses, online learning, artificial intelligence, personalized education, course automation"
        />
        <link rel="canonical" href="https://www.yourwebsite.com/about-us" />
      </Head>

      <div className="container mx-auto px-6 pt-24 pb-12">
        {/* About Us Section */}
        <h1 className="text-2xl font-semibold text-center mb-4">About Us</h1>
        <div className="max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed text-justify">
          <p className="mb-5">
            Welcome to AI Course Generator, the ultimate platform for creating AI-driven educational experiences. Our goal is to revolutionize learning by leveraging cutting-edge artificial intelligence to deliver tailored courses that adapt to your learning style and needs.
          </p>
          <p className="mb-5">
            Whether you're a beginner exploring AI fundamentals or an expert diving into advanced topics, our platform provides dynamically generated courses powered by the Gemini API. We bridge the gap between quality education and accessibility, ensuring everyone can learn, grow, and innovate in the world of artificial intelligence.
          </p>
        </div>

        {/* Meet the Team Section */}
        <h2 className="text-xl font-semibold text-center mt-10 mb-4">Meet Our Team</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 text-center w-64 transition-transform transform hover:scale-105"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-3 border-2 border-gray-300 object-cover"
              />
              <h3 className="text-lg font-medium">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.role}</p>
              <a
                href={`mailto:${member.email}`}
                className="text-blue-600 text-sm mt-2 inline-block"
              >
                {member.email}
              </a>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AboutUs;
