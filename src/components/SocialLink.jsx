import React from "react";
import { Link } from "react-router-dom";

const SocialLink = ({ icon, url, text, alt = "social link" }) => {
  return (
    <Link
      to={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex flex-col items-center justify-center transition-transform hover:scale-110"
    >
      <img src={icon} alt={alt} className="w-8 h-8 object-contain" />
      <p className="text-sm text-slate-500">{text}</p>
    </Link>
  );
};

export default SocialLink;
