import { Caveat } from "next/font/google";

const styleFont = Caveat({ subsets: ["latin"] });

export default function Banner() {
  return (
    <div className="relative bg-[url('/leaf.avif')] h-[300px] sm:h-[400px] md:h-96 lg:h-[400px] w-full bg-cover bg-center mt-12">
      <div className="absolute inset-0 bg-slate-500 opacity-50 backdrop-blur-sm"></div>
      <h1
        className={`${styleFont.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gradient text-center absolute top-1/4 left-1/2 transform -translate-x-1/2`}
        style={{
          background: "linear-gradient(90deg, #ff7e5f, #feb47b)",
          WebkitBackgroundClip: "text",
          color: "white"
        }}
      >
        "Empower Your Health, Energize Your Life"
      </h1>
      <p
        className="text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl text-white text-center absolute top-2/3 left-1/2 transform -translate-x-1/2"
        style={{
          background: "linear-gradient(90deg, #ff7e5f, #feb47b)",
          WebkitBackgroundClip: "text",
          color: "white"
        }}
      >
        Embrace a journey of wellness with balanced living, nutritious choices, and a mindful mindset.
      </p>
    </div>
  );
}
