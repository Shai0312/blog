"use client"; 
import React from "react";
import CommentSection from "@/components/comment";
import Image from "next/image";


const posts = [
  {
    id: '1',
    title: "Eat a Balanced Diet",
    description: "Fuel your body with the perfect mix of essential nutrients like proteins, healthy fats, and carbohydrates. A balanced diet is key to feeling energized, maintaining a healthy weight, and boosting overall well-being. Prioritize whole foods and make conscious choices to nourish your body every day!",
    Image: "/eatclean.avif",
    height:192,
    width:1000,
  },
  {
    id: '2',
    title: "Stay Hydrated",
    description: "Unlock the secret to glowing skin, boosted energy, and improved brain function with the power of hydration! Drinking enough water throughout the day can help you maintain your body’s natural balance, detoxify, and support mental clarity. Hydration is a simple yet powerful habit for enhancing your health and vitality.",
    Image: "/water.avif",
    height:192,
    width:1000,
  },
  {
    id: '3',
    title: "Better Mental Health",
    description: "Take control of your mind and discover simple, effective ways to achieve emotional balance and mental clarity. Practicing mindfulness, reducing stress, and nurturing positive thoughts can transform your emotional health. Prioritize your mental well-being with healthy habits and a compassionate approach to self-care.",
    Image: "/mentalhealth.avif",
    height:192,
    width:1000,
  },
  {
    id: '4',
    title: "Boost Your Immunity System",
    description: "Discover proven ways to strengthen your immune system and protect your body from illnesses year-round. Incorporating nutrient-rich foods, exercise, proper sleep, and stress management can enhance your body’s natural defense system. A strong immune system is the foundation of long-term health and vitality.",
    Image: "/immunity.avif",
    height:192,
    width:1000,
  },
  {
    id: '5',
    title: "Maintain a Healthy Weight",
    description: "Achieve and maintain your ideal weight with effective, sustainable strategies that promote long-term success. Combining regular physical activity with a balanced diet and mindful eating habits can help you maintain a healthy weight. Focus on progress rather than perfection for a fulfilling and sustainable approach to health.",
    Image: "/weightloss.avif",
    height:192,
    width:1000,
  },
  {
    id: '6',
    title: "Medicine & Remedies for Better Health",
    description: "Explore the perfect blend of science-backed medicine and natural remedies for a healthier lifestyle. From herbal treatments to modern medical advancements, you can support your body’s natural healing process. Learn about safe and effective ways to enhance your health with both conventional and alternative methods.",
    Image: "/medicine.jpg",
    height:192,
    width:1000,
  },
  {
    id: '7',
    title: "Exercise Regularly",
    description: "Unlock your full potential with the transformative benefits of regular exercise for both body and mind. Whether it’s cardio, strength training, or flexibility exercises, movement helps to improve your cardiovascular health, build muscle, reduce stress, and improve mental clarity. Make exercise a non-negotiable part of your routine.",
    Image: "/fitn.avif",
    height:192,
    width:1000,
  },
  {
    id: '8',
    title: "Limit Sugar Intake",
    description: "Cut down on sugar and feel the difference – better health, more energy, and a clearer mind await you! Excess sugar can lead to weight gain, fatigue, and a host of health issues. By reducing your sugar intake, you can stabilize your blood sugar levels and improve your long-term health.",
    Image: "/sugar.avif",
    height:192,
    width:1000,
  },
  {
    id: '9',
    title: "Limit Screen Time",
    description: "Reclaim your time and health – discover how limiting screen time can boost your focus, productivity, and overall well-being. Reducing your exposure to screens can lead to better sleep, less eye strain, and more time for activities that truly enrich your life. Set boundaries with technology for a healthier, balanced lifestyle.",
    Image: "/screen.jpg",
    height:192,
    width:1000,
  },
];


export default function Post({ params }: { params: Promise<{ id: string }> }) {
  const [resolvedParams, setResolvedParams] = React.useState<{ id: string } | null>(null);

  // Unwrap params (await the promise)
  React.useEffect(() => {
      const fetchParams = async () => {
          const resolved = await params;
          setResolvedParams(resolved);
      };

      fetchParams();
  }, [params]);

  // Handle case where params is still being resolved
  if (!resolvedParams) {
      return (
          <div className="text-center">
              <h2 className="text-2xl font-bold mt-10">Loading...</h2>
          </div>
      );
  }

  const { id } = resolvedParams;
  const post = posts.find((p) => p.id === id);

  if (!post) {
      return (
          <div className="text-center">
              <h2 className="text-2xl font-bold text-center mt-10">Post Not Found</h2>
          </div>
      );
  }

  const renderParagraphs = (description: string) => {
      return description.split("\n").map((para, index) => (
          <p key={index} className="mt-4 text-justify">{para.trim()}</p>
      ));
  };

  return (
      <div className="max-w-3xl mx-auto p-6 mt-6">
          <h1 className="md:text-4xl text-3xl font-bold text-red-600 text-center">{post.title}</h1>
          {post.Image && (
              <Image
                  src={post.Image} 
                  alt={post.title}
                  width={post.width}  // Dynamic width from post
                height={post.height}
                  className="w-full h-auto rounded-md mt-4"
              />
          )}
          <div className="mt-6 text-lg text-slate-700">
              {renderParagraphs(post.description)}
          </div>
          <CommentSection postId={post.id} />
      </div>
  );
}