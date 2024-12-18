"use client";
import { useState, useEffect } from "react";
import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

export function Search() {
  const placeholders = [
    "Enter Youtube Video Url",
    "Enter Instagram Video Url",
    "Enter Facebook Video Url",
    "Enter Twitter Video Url",
    "Enter Snapchat Video Url",
  ];

  const [url, setUrl] = useState(null);
  const [isClient, setIsClient] = useState(false); 

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSubmit = () => {
    if (url) {
      window.location.href = `/url=${url}`;
    }
  };

  if (!isClient) return null;

  return (
    <div className="flex flex-col items-center pt-20">
      {/* Input and Button */}
      <div className="flex flex-col  sm:flex-row gap-10 py-10 items-center justify-center ">
        <PlaceholdersAndVanishInput
          type="text"
          name="url"
          placeholders={placeholders}
          className="p-2 border rounded "
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
        <HoverBorderGradient
        containerClassName="rounded-full"
        onClick={handleSubmit}
        as="button"
        className="bg-black text-white flex items-center space-x-2 "
      >
        <DownloadLogo />
        <span className="font-bold">Download Now</span>
      </HoverBorderGradient>
      </div>
    </div>
  );
}

const DownloadLogo = () => {
    return (
        <svg
        width="48"
        height="46" 
        viewBox="0 0 24 23"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-white" 
      >
        <path d="M16 4C16.5523 4 17 4.44772 17 5V9.2L22.2133 5.55071C22.4395 5.39235 22.7513 5.44737 22.9096 5.6736C22.9684 5.75764 23 5.85774 23 5.96033V18.0397C23 18.3158 22.7761 18.5397 22.5 18.5397C22.3974 18.5397 22.2973 18.5081 22.2133 18.4493L17 14.8V19C17 19.5523 16.5523 20 16 20H2C1.44772 20 1 19.5523 1 19V5C1 4.44772 1.44772 4 2 4H16ZM15 6H3V18H15V6ZM10 8V12H13L9 16L5 12H8V8H10ZM21 8.84131L17 11.641V12.359L21 15.1587V8.84131Z"></path>
      </svg>
    );
  };