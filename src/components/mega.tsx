
import React from "react";
import BlogCard from "./blogcard";
import { Merriweather } from "next/font/google";


const myFonts = Merriweather({ subsets: ["latin"], weight: "400" });

export default function Mega() {
  const posts = [
    {
      id: '1',
      title: "Eat a Balanced Diet",
      description:
        "Fuel your body with the perfect mix of essential nutrients like proteins, healthy fats, and carbohydrates. A balanced diet is key to feeling energized, maintaining a healthy weight, and boosting overall well-being. Prioritize whole foods and make conscious choices to nourish your body every day!",
      date: "2024-12-26",
      Image: "/eatclean.avif",
      height: 192,
      width: 1000,
    },
    {
      id: '2',
      title: "Stay Hydrated",
      description:
        "Unlock the secret to glowing skin, boosted energy, and improved brain function with the power of hydration! Drinking enough water throughout the day can help you maintain your body’s natural balance, detoxify, and support mental clarity. Hydration is a simple yet powerful habit for enhancing your health and vitality.",
      date: "2024-12-25",
      Image: "/water.avif",
      height: 192,
      width: 1000,
    },
    {
      id: '3',
      title: "Better Mental Health",
      description:
        "Take control of your mind and discover simple, effective ways to achieve emotional balance and mental clarity. Practicing mindfulness, reducing stress, and nurturing positive thoughts can transform your emotional health. Prioritize your mental well-being with healthy habits and a compassionate approach to self-care.",
      date: "2024-12-23",
      Image: "/mentalhealth.avif",
      height: 192,
      width: 1000,
    },
    {
      id: '4',
      title: "Boost Your Immunity System",
      description:
        "Discover proven ways to strengthen your immune system and protect your body from illnesses year-round. Incorporating nutrient-rich foods, exercise, proper sleep, and stress management can enhance your body’s natural defense system. A strong immune system is the foundation of long-term health and vitality.",
      date: "2024-12-22",
      Image: "/immunity.avif",
      height: 192,
      width: 1000,
    },
    {
      id: '5',
      title: "Maintain a Healthy Weight",
      description:
        "Achieve and maintain your ideal weight with effective, sustainable strategies that promote long-term success. Combining regular physical activity with a balanced diet and mindful eating habits can help you maintain a healthy weight. Focus on progress rather than perfection for a fulfilling and sustainable approach to health.",
      date: "2024-12-21",
      Image: "/weightloss.avif",
      height: 192,
      width: 1000,
    },
    {
      id: '6',
      title: "Medicine & Remedies for Better Health",
      description:
        "Explore the perfect blend of science-backed medicine and natural remedies for a healthier lifestyle. From herbal treatments to modern medical advancements, you can support your body’s natural healing process. Learn about safe and effective ways to enhance your health with both conventional and alternative methods.",
      date: "2024-12-20",
      Image: "/medicine.jpg",
      height: 192,
      width: 1000,
    },
    {
      id: '7',
      title: "Exercise Regularly",
      description:
        "Unlock your full potential with the transformative benefits of regular exercise for both body and mind. Whether it’s cardio, strength training, or flexibility exercises, movement helps to improve your cardiovascular health, build muscle, reduce stress, and improve mental clarity. Make exercise a non-negotiable part of your routine.",
      date: "2024-12-18",
      Image: "/fitn.avif",
      height: 192,
      width: 1000,
    },
    {
      id: '8',
      title: "Limit Sugar Intake",
      description:
        "Cut down on sugar and feel the difference – better health, more energy, and a clearer mind await you! Excess sugar can lead to weight gain, fatigue, and a host of health issues. By reducing your sugar intake, you can stabilize your blood sugar levels and improve your long-term health.",
      date: "2024-12-17",
      Image: "/sugar.avif",
      height: 192,
      width: 1000,
    },
    {
      id: '9',
      title: "Limit Screen Time",
      description:
        "Reclaim your time and health – discover how limiting screen time can boost your focus, productivity, and overall well-being. Reducing your exposure to screens can lead to better sleep, less eye strain, and more time for activities that truly enrich your life. Set boundaries with technology for a healthier, balanced lifestyle.",
      date: "2024-12-15",
      Image: "/screen.jpg",
      height: 192,
      width: 1000,
    },
  ];

  return (
    <div className="my-8">
      <h1 className={`${myFonts.className} text-4xl font-bold text-center my-12 text-green-600`}>
        The Path to Better Health Starts Here
      </h1>
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <div className="fade-in " key={post.id}>
            <div className="blog-card">
              <BlogCard post={post} isDarkBackground={index % 2 === 0} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
