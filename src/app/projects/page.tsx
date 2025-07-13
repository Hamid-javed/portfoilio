"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import "@splidejs/react-splide/css";

const PROJECTS = [
  {
    id: 1,
    name: "Project E-Learning",
    description: `Developed a full-stack learning platform where users can browse and access courses uploaded by mentors. Built with React.js, Node.js, and MongoDB Atlas, the platform is responsive (Tailwind CSS) and optimized for user experience.`,
    link: "https://elearnportal.uno/login",
    images: ["/assets/elearn.png", "/assets/elearn.png", "/assets/elearn.png"],
  },
  {
    id: 2,
    name: "Neuromail - Gmail Alternative",
    description: `Neuromail is a Gmail-like email platform built with React.js and Tailwind CSS. It supports mobile-first design, RESTful API integration, and is deployed for fast, cloud-based usage.`,
    link: "https://mailing.neuromail.digital/",
    images: [
      "/assets/NeuroMail.png",
      "/assets/NeuroMail.png",
      "/assets/NeuroMail.png",
    ],
  },
  {
    id: 3,
    name: "NeuroDrive - Secure Cloud Storage",
    description: `NeuroDrive is a Google Drive alternative that features file encryption, password-protected sharing, and in-browser PDF/Doc editing. Frontend built in React.js with Tailwind CSS.`,
    link: "https://dashboard.neurodrive.me/",
    images: [
      "/assets/neuroDrive.png",
      "/assets/neuroDrive.png",
      "/assets/neuroDrive.png",
    ],
  },
  {
    id: 4,
    name: "E-Learning Admin Panel",
    description: `Admin panel for managing courses, mentors, users, and platform analytics. Fully responsive, built using HTML5, CSS3, JavaScript, and Tailwind CSS.`,
    link: "https://e-learn-admin.netlify.app/",
    images: [
      "/assets/E-learn-admin.png",
      "/assets/E-learn-admin.png",
      "/assets/E-learn-admin.png",
    ],
  },
  {
    id: 5,
    name: "ChatBot (AI)",
    description: `Real-time AI chatbot built with Vite and TypeScript. Integrates NLP APIs, responsive design, and state management for interactive, intelligent conversations.`,
    link: "https://hamids-chatbot.netlify.app/",
    images: [
      "/assets/chatbot.png",
      "/assets/chatbot.png",
      "/assets/chatbot.png",
    ],
  },
  {
    id: 6,
    name: "Link Up Landing Page",
    description: `Landing page for a social media platform built with React.js and Tailwind CSS from Figma designs. Fully responsive with clean layout and animations.`,
    link: "https://link-upsocial.netlify.app/",
    images: ["/assets/linkup.png", "/assets/linkup.png", "/assets/linkup.png"],
  },
  {
    id: 7,
    name: "Social Media Backend",
    description: `RESTful API backend for a full-fledged social media platform built with Node.js and MongoDB. Supports authentication, posts, likes, comments, notifications, and chat system.`,
    link: "https://github.com/Hamid-javed/link-up.git",
    images: [
      "/assets/socialmedia.png",
      "/assets/socialmedia.png",
      "/assets/socialmedia.png",
    ],
  },
];

function Page() {
  return (
    <div className="container mx-auto md:px-[50px] xl:px-[150px] text-zinc-300 h-full">
      <h1 className="text-4xl pt-[100px] mb-[50px]">Projects</h1>
      <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 place-content-around">
        {PROJECTS.map((project) => (
          <li
            className="w-[300px] h-[400px] border-[.5px] rounded-md border-zinc-600"
            key={project.id}
            style={{ backdropFilter: "blur(2px)" }}
          >
            <div className="h-[200px]">
              <Splide
                options={{
                  type: "loop",
                  interval: 3000,
                  autoplay: true,
                  speed: 2000,
                  perMove: 1,
                  rewind: true,
                  easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                  arrows: false,
                }}
                aria-label="My Favorite Images"
              >
                {project.images.map((image, index) => (
                  <SplideSlide key={index}>
                    <Image
                      src={image}
                      alt={`screenshot of ${project.name}`}
                      className="w-[300px] h-[200px] rounded-md bg-zinc-900"
                      width={300}
                      height={200}
                    />
                  </SplideSlide>
                ))}
              </Splide>
            </div>
            <div className="p-4 text-zinc-300">
              <h2 className="text-xl">{project.name}</h2>
              <p className="mt-2 text-xs text-zinc-500">
                {project.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Page;
