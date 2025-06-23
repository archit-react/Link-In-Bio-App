import React from "react";

interface LinkButtonProps {
  href: string;
  text: string;
}

// Generic button for external links
const LinkButton: React.FC<LinkButtonProps> = ({ href, text }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-black text-white text-center py-2 px-4 rounded shadow hover:bg-gray-800 transition duration-200"
    >
      {text}
    </a>
  );
};

export default LinkButton;
