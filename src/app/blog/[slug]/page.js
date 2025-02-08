"use client";
import * as React from 'react';
import { useState, useEffect } from 'react';

const Page = ({ params }) => {
  const { slug } = React.use(params);
  const decodedSlug = decodeURIComponent(slug).replace(/-/g, ' ');
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    fetch("/post.json")
      .then((response) => response.json())
      .then((data) => {
        const foundPost = data.find(item => 
          createSlug(item.title) === slug
        );
        setPostData(foundPost);
      })
      .catch((error) => console.error("Error fetching post:", error));
  }, [slug]);

  const createSlug = (title) => {
    return encodeURIComponent(
      title.toLowerCase().replace(/\s+/g, '-')
    );
  };

  if (!postData) {
    return <div className="p-4 max-w-2xl mx-auto">Loading...</div>;
  }

  return (
    <div className="p-4 mx-auto mt-8">
       <div className="flex flex-col items-center">
       <h1 className="text-3xl font-bold mt-12 mb-2">{postData.title}</h1>
       <div className="mt-6 prose prose-invert">
        {postData.body && (
          typeof postData.body === 'string' 
            ? postData.body.split('\n').map((line, i) => (
                <p key={i} className="my-4 text-gray-300">{line}</p>
              ))
            : <p className="text-gray-300 font-bold max-w-lg text-center">{postData.body}</p>
        )}
      </div>
        {/* <p className="text-gray-300 font-bold max-w-lg text-center">
          {postData.body}
        </p> */}
      </div>
    </div>
  );
};

export default Page;