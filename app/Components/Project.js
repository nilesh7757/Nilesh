"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ title, image, description, demoUrl, codeUrl }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.3 }}
    className="transform-gpu"
  >
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="relative h-48 w-full group">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          className="object-cover transition-transform duration-300 group-hover:scale-110 transform-gpu will-change-transform"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          quality={75}
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LS0yMi4qLjgyPjA+OjU1RUVHSkdKTEtMTjw2Uj5AS0pLTEr/2wBDAR"
        />
      </div>

      <CardContent className="p-6 flex-grow">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      </CardContent>

      <CardFooter className="p-6 pt-0 flex gap-4">
        <Button asChild className="transform-gpu">
          <Link href={demoUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" />
            Live Demo
          </Link>
        </Button>
        <Button variant="outline" asChild className="transform-gpu">
          <Link href={codeUrl} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" />
            Code
          </Link>
        </Button>
      </CardFooter>
    </Card>
  </motion.div>
);

const Project = () => {
  const projects = [
    {
      title: "PassOP",
      description:
        "A secure password generator and manager with advanced encryption.",
      image: "https://raw.githubusercontent.com/nilesh7757/Portfolio-Nilesh-Mori/main/public/PassOP.png",
      demoUrl: "https://nilesh7757.github.io/PassOP/",
      codeUrl: "https://github.com/nilesh7757/passop",
    },
    {
      title: "TodoList",
      description:
        "A feature-rich task management application with local storage.",
      image: "https://raw.githubusercontent.com/nilesh7757/Portfolio-Nilesh-Mori/main/public/Todo.png",
      demoUrl: "https://nilesh7757.github.io/TodoList/",
      codeUrl: "https://github.com/nilesh7757/TodoList",
    },
    {
      title: "Spotify Clone",
      description: "A responsive music player interface inspired by Spotify.",
      image: "https://raw.githubusercontent.com/nilesh7757/Portfolio-Nilesh-Mori/main/public/Spotify.png",
      demoUrl: "https://nilesh7757.github.io/Spotify-Clone-HTML/",
      codeUrl: "https://github.com/nilesh7757/Spotify-Clone-HTML",
    },
    {
      title: "Notify",
      description: "A modern note-taking application with rich text editing.",
      image: "https://raw.githubusercontent.com/nilesh7757/Portfolio-Nilesh-Mori/main/public/Notify.png",
      demoUrl: "https://nilesh7757.github.io/Notify/",
      codeUrl: "https://github.com/nilesh7757/Notify",
    },
  ];

  return (
    <div className="min-h-screen w-full px-4 py-8 md:py-12 lg:py-16">
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
      >
        <motion.h2
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-center flex items-center justify-center gap-2 mb-8 md:mb-12 transform-gpu"
          whileHover={{ scale: 1.05 }}
        >
          <Code className="w-6 h-6 md:w-8 md:h-8" />
          Featured{" "}
          <span className="bg-gradient-to-r from-blue-500 to-blue-200 bg-clip-text text-transparent">
            Projects
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 content-visibility-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Button variant="default" className="flex items-center gap-2 transform-gpu" asChild>
            <Link href="/projects">
              View All Projects
              <ExternalLink className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default Project;
