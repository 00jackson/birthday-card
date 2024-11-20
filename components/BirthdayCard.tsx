"use client"
import React, { useState, useRef } from "react";

const BirthdayCard = () => {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Toggle play/pause on button click
  const handleToggleMusic = () => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause(); 
        setIsMusicPlaying(false); 
      } else {
        audioRef.current.play(); 
        setIsMusicPlaying(true); 
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 px-4">
      <div className="max-w-md p-6 bg-white rounded-lg shadow-xl">
        <h1 className="text-6xl font-allura text-center text-pink-600 animate-bounce">
          🎉 Happy Birthday! 🎂
        </h1>

        <p className="mt-4 text-xl font-allura text-center text-gray-700">
          May your day be as beautiful and magical as you are. Hope this year brings you all the happiness you deserve! 🥳
        </p>
        
        <div className="flex justify-center mt-6">
          <button
            onClick={handleToggleMusic}
            className="px-4 py-2 text-lg font-semibold text-white bg-purple-600 rounded hover:bg-purple-700 font-allura transition transform hover:scale-105"
          >
            {isMusicPlaying ? "Stop 🎵" : "Celebrate 🎁"}
          </button>
        </div>

        {/* Audio element to play kids' birthday music */}
        <audio
          ref={audioRef}
          src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" // Example of kids' birthday music
          preload="auto"
        />
      </div>
    </div>
  );
};

export default BirthdayCard;
