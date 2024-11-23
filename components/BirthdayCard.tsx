"use client";
import React, { useState } from "react";
import Image from "next/image";

const cards = [
  {
    img: "/1.jpg",
    message: "Through every storm and every struggle, we have stood by each other with unshakable strength. You’ve been my rock, my safe harbor, and my constant reminder that together, we can overcome anything. 💪",
  },
  {
    img: "/2.jpg",
    message: "Even when distance tried to pull us apart, our trust and love only grew stronger. No matter the miles, you’ve always been close to my heart, proving that love truly knows no boundaries. 🌍❤️",
  },
  {
    img: "/3.jpeg",
    message: "You really light up my life in ways words could never fully capture, filling every day with joy and hope. You’re the reason I smile a little brighter and dream a little bigger. 🌟",
  },
  {
    img: "/4.jpeg",
    message: "Thank you for being my strength when I felt weak and my laughter when life felt heavy. You are my partner, my confidant, and my greatest blessing in every sense of the word. 💖",
  },
  {
    img: "/5.jpeg",
    message: "Today is not just about celebrating your birthday, but celebrating YOU and all the love and light you bring to the world. You are truly one of a kind, my treasure and my forever gem. 🎉💎",
  },
];

const BirthdayCard = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const handleSwipe = (direction: "left" | "right") => {
    if (direction === "right") {
      setCurrentCard((prev) => (prev + 1) % cards.length);
    } else {
      setCurrentCard((prev) => (prev - 1 + cards.length) % cards.length);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 px-3">
      <div className="max-w-md p-4 bg-white rounded-lg shadow-xl relative">
        <h1 className="text-5xl font-allura text-center text-pink-600 shine-effect mb-2">
          Happy Birthday! 🎂
        </h1>

        {/* Image */}
        <div className="relative mt-4 w-full h-80 overflow-hidden rounded-lg shadow-lg">
          <Image
            src={cards[currentCard].img}
            alt="Birthday Memory"
            fill
            className="object-cover"
          />
        </div>

        {/* Message */}
        <p className="mt-3 text-xl font-allura text-center text-gray-700">
          {cards[currentCard].message}
        </p>

        {/* Navigation Arrows */}
        <div className="mt-4 flex justify-between items-center">
          <button
            onClick={() => handleSwipe("left")}
            className="text-2xl font-bold text-pink-600 hover:scale-125 transition-transform"
          >
            ⬅️
          </button>
          <span className="text-lg text-gray-600">
            {currentCard + 1}/{cards.length}
          </span>
          <button
            onClick={() => handleSwipe("right")}
            className="text-2xl font-bold text-pink-600 hover:scale-125 transition-transform"
          >
            ➡️
          </button>
        </div>
      </div>
    </div>
  );
};

export default BirthdayCard;
