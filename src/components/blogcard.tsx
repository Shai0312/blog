import React from "react";
import { Card, CardContent, CardTitle } from "../components/ui/card";
import Image from 'next/image';

interface BlogCardProps {
    post: { id: string; title: string; description: string; date: string; Image: string; width: number; height: number };
    isDarkBackground: boolean;
}

const formatDate = (date: string) => {
    const d = new Date(date);
    const month = String(d.getMonth() + 1).padStart(2, '0'); // Get month and pad to 2 digits
    const day = String(d.getDate()).padStart(2, '0'); // Get day and pad to 2 digits
    const year = d.getFullYear(); // Get full year
    return `${month}-${day}-${year}`; // Format as MM-DD-YYYY
};

export default function BlogCard({ post, isDarkBackground }: BlogCardProps) {
    return (
        <Card 
            className={`p-4 ${isDarkBackground ? 'bg-zinc-800 text-white' : 'text-slate-800'} rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out transform`}
        >
            {/* Rendering Image with dynamic width and height */}
            <Image
                src={post.Image}
                alt={post.title}
                width={post.width}  // Dynamic width from post
                height={post.height} // Dynamic height from post
                className='object-cover rounded-t-lg' 
            />
            
            <CardTitle className='text-xl font-normal mt-4 text-center'>{post.title}</CardTitle>
            <br />
            
            <CardContent className='text-center'>
                <p>{post.description}</p>
            </CardContent>
            
            <div className='flex flex-col items-center mt-4'>
                <p className={`text-sm mb-2 ${isDarkBackground ? 'text-slate-400' : 'text-slate-500'}`}>
                    Published on: {formatDate(post.date)} {/* Displaying formatted date */}
                </p>
                
                <a href={`/posts/${post.id}`}
                    className={`w-full px-6 text-center py-4 text-white bg-yellow-500 rounded hover:bg-green-500`}>
                    Read More
                </a>
            </div>
        </Card>
    );
}
