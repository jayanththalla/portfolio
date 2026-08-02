import PageContainer from "@/components/PageContainer";
import { Metadata } from "next";
import ProjectCard, { ProjectCardProps } from "@/components/ProjectCard";
import PageNavbar from "@/components/PageNavbar";
import { cn } from "@/lib/utils";
import Footer from "@/app/sections/Footer";
import PageHeading from "@/components/PageHeading";
import Divider from "@/components/Divider";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Browse projects built by Jayanth Thalla, including multi-agent RAG systems, AI-powered healthcare tools, machine learning apps, and full-stack applications built with Python, FastAPI, React, and TypeScript.",

  keywords: [
    "Jayanth Thalla",
    "Projects",
    "Portfolio",
    "Full Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Express",
    "WebSockets",
    "MongoDB",
    "AI Projects",
    "Developer Portfolio",
  ],

  alternates: {
    canonical: "/projects",
  },

  openGraph: {
    title: "Projects | Jayanth Thalla",
    description:
      "Explore my collection of full-stack applications, AI tools, and developer projects.",
    url: "https://thallajayanth.vercel.app/projects",
    images: [
      {
        url: "/og-projects.jpg",
        width: 1200,
        height: 630,
        alt: "Jayanth Thalla Projects",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Projects | Jayanth Thalla",
    description:
      "Explore my collection of full-stack applications, AI tools, and developer projects.",
    images: ["/og-projects.jpg"],
  },
};

const projectsList: ProjectCardProps[] = [
  {
    title: "AI Manufacturing Quality Copilot",
    description:
      "A multi-agent manufacturing quality assistant that combines RAG pipelines, MCP, and AI agents to analyze production defects, retrieve historical manufacturing knowledge, and assist engineers with intelligent recommendations.",
    image: "/canvasflow.jpg",
    tags: ["Python", "RAG", "MCP", "AI Agents", "FastAPI"],
    githubLink:
      "https://github.com/jayanththalla/AI-Manufacturing-Quality-Copilot",
    isLive: false,
    isBuilding: true,
  },
  {
    title: "BoneAI – Clinical Triage Platform",
    description:
      "An AI-powered healthcare platform for clinical symptom triage and fracture detection using NLP and an EfficientNet-B4 deep learning model, designed to assist healthcare professionals with faster diagnosis.",
    image: "/textly.jpg",
    tags: ["Python", "NLP", "EfficientNet-B4", "FastAPI", "React.JS"],
    githubLink: "https://github.com/jayanththalla/boneai",
    isLive: false,
    isBuilding: true,
  },
  {
    title: "Diabetes Predictor",
    description:
      "A machine learning application that predicts diabetes risk using ensemble learning models with an interactive dashboard and REST API for real-time predictions.",
    image: "/diabetes.png",
    tags: ["Python", "Scikit-learn", "REST API", "Dashboard"],
    liveLink: "https://github.com/jayanththalla/diabetes-predictor",
    githubLink: "https://github.com/jayanththalla/diabetes-predictor",
    isLive: true,
  },
  {
    title: "Android App Security Analyzer",
    description:
      "A security analysis platform that reverse engineers Android APKs to identify permissions, trackers, vulnerabilities, and security risks while supporting large file uploads.",
    image: "/goalkeeper.jpg",
    tags: ["Python", "Android", "Security", "FastAPI", "React.JS"],
    liveLink: "https://github.com/jayanththalla/androidApp",
    githubLink: "https://github.com/jayanththalla/androidApp",
    isLive: true,
  },
];

export default function Page() {
  const total = projectsList.length;

  return (
    <>
      <PageContainer>
        <PageNavbar title="Home" backHref="/" />
        <PageHeading
          title="Projects"
          className="text-4xl"
          subtitle="A collection of projects which i've built!"
        />
        <div className="relative">
          <div className="grid w-full grid-cols-1 md:grid-cols-2">
            {projectsList.map((project, idx) => (
              <div
                key={idx}
                className={cn(
                  "px-8 py-6 md:px-16 md:py-8",
                  idx % 2 === 0 ? "md:pr-8 md:pl-16" : "md:pr-16 md:pl-8",
                  idx === total - 1 ? "border-b-0" : "border-b",
                  idx < 2 ? "md:border-b" : "md:border-b-0",
                  idx % 2 === 0 ? "md:border-r" : "md:border-r-0",
                )}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
        <Divider />
        <Footer />
      </PageContainer>
    </>
  );
}
