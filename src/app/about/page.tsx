import React from 'react';

export default function AboutPage() {
  return (
    <div className="bg-gray-50 p-8 min-h-screen flex items-center justify-center">
      <div className="text-center max-w-3xl text-zinc-800">
        {/* Header Section */}
        <h1 className="text-4xl font-bold mb-4">
          About Me
        </h1>

        {/* Short Introduction */}
        <p className="text-lg mb-6 opacity-80">
          Hi, I’m <strong className="font-semibold text-blue-500">Shaista</strong>, a passionate web developer with a love for creating clean and functional websites. Through this health blog, I aim to share helpful wellness tips and promote a healthy lifestyle for my readers.
        </p>

        {/* Call to Action Button */}
        <div>
          <a
            href="/contact"
            className="bg-blue-500 text-white py-3 px-8 rounded-full text-lg hover:bg-blue-600 transition duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}
