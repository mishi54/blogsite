"use client";
import { useState, useEffect } from "react";
import Link from 'next/link';

export default function CardList() {
  const [data, setData] = useState([]);
  const [visibleCards, setVisibleCards] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("/post.json")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setVisibleCards(json.slice(0, 3));
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleSeeMore = () => {
    setVisibleCards(data);
    setShowAll(true);
  };
  const createSlug = (title) => {
    return encodeURIComponent(
      title.toLowerCase().replace(/\s+/g, '-')
    );
  };

  return (
    <div className="p-2">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-1">
        {visibleCards.map((item, index) => (
          <div
            key={index}
            className="p-2 text-center transition-transform transform hover:scale-105"
          >
            <Link href={`/blog/${createSlug(item.title)}`}>
              <h2 className="text-xl font-semibold text-white">{item.title}</h2>
            </Link>
          </div>
        ))}
      </div>
      {!showAll && (
        <button
          onClick={handleSeeMore}
          className="flex justify-center mx-auto my-4 mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          See More
        </button>
      )}
    </div>
  );
}