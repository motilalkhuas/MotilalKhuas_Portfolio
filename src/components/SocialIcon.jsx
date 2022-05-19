import React from 'react'
import { FaGithub, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const SocialIcon = () => {
  return (
    <div className="fixed left-2 sm:left-4 bottom-5 text-3xl sm:text-4xl space-y-2">
        <FaLinkedinIn className="text-[rgb(47,46,65)] hover:text-[rgb(108,99,255)] duration-500" />
        <FaGithub className="text-[rgb(47,46,65)] hover:text-[rgb(108,99,255)] duration-500" />
        <FaInstagram className="text-[rgb(47,46,65)] hover:text-[rgb(108,99,255)] duration-500" />
        <FaTwitter className="text-[rgb(47,46,65)] hover:text-[rgb(108,99,255)] duration-500" />
        <HiMail className="text-[rgb(47,46,65)] hover:text-[rgb(108,99,255)] duration-500" />
    </div>
  )
}

export default SocialIcon