import React from 'react';
import { Facebook, Twitter, Mail } from 'lucide-react';

function ShareButtons({ jokeText }) {
  if (!jokeText) return null;

  const encodedJoke = encodeURIComponent(jokeText);

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodedJoke}%20%F0%9F%98%82`,
    facebook: `https://www.facebook.com/sharer/sharer.php?quote=${encodedJoke}`,
    email: `mailto:?subject=Check%20out%20this%20joke!&body=${encodedJoke}`,
  };

  return (
    <div className="flex gap-3 justify-center">
      <a
        href={shareLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-small bg-blue-400 text-white hover:bg-blue-500 flex items-center gap-2"
      >
        <Twitter size={18} /> Tweet
      </a>
      <a
        href={shareLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-small bg-blue-600 text-white hover:bg-blue-700 flex items-center gap-2"
      >
        <Facebook size={18} /> Share
      </a>
      <a
        href={shareLinks.email}
        className="btn-small bg-gray-600 text-white hover:bg-gray-700 flex items-center gap-2"
      >
        <Mail size={18} /> Email
      </a>
    </div>
  );
}

export default ShareButtons;
