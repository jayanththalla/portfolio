import Heading from "@/components/Heading";
import ScaleX from "@/components/ScaleX";
import ProjectCard, { ProjectCardProps } from "@/components/ProjectCard";
import { cn } from "@/lib/utils";
import HeadingButton from "@/components/HeadingButton";

const projectsList: ProjectCardProps[] = [
  {
    title: "Jyntra – AI Career Intelligence",
    description:
      "An open, modern career platform designed to help developers and job seekers find verified startup opportunities, understand their role fit, prepare for interviews, and manage applications in a single unified workspace.",
    image: "/jyntra.png",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "Groq API"],
    liveLink: "https://jyntra.vercel.app",
    githubLink: "https://github.com/jayanththalla/jyntra",
    isLive: true,
  },
  {
    title: "AI Manufacturing Quality Copilot",
    description:
      "A multi-agent manufacturing quality assistant that combines RAG pipelines, MCP, and AI agents to analyze production defects, retrieve historical manufacturing knowledge, and assist engineers with intelligent recommendations.",
    image: "/qualitycopliot.png",
    tags: ["Python", "RAG", "MCP", "AI Agents", "FastAPI"],
    liveLink: "https://qualitycopilot.vercel.app/",
    githubLink:
      "https://github.com/jayanththalla/AI-Manufacturing-Quality-Copilot",
    isLive: true,
    // isBuilding: true,
  },
  {
    title: "BoneAI – Clinical Triage Platform",
    description:
      "An AI-powered healthcare platform for clinical symptom triage and fracture detection using NLP and an EfficientNet-B4 deep learning model, designed to assist healthcare professionals with faster diagnosis.",
    image: "/boneai.png",
    tags: ["Python", "NLP", "EfficientNet-B4", "FastAPI", "React.JS"],
    liveLink: "https://boneaitriage.vercel.app/",
    githubLink: "https://github.com/jayanththalla/boneai",

    isLive: true,
    // isBuilding: true,
  },
  {
    title: "Diabetes Predictor",
    description:
      "A machine learning application that predicts diabetes risk using ensemble learning models with an interactive dashboard and REST API for real-time predictions.",
    image: "/diabetes.png",
    tags: ["Python", "Scikit-learn", "React Js", "Tailwind CSS"],
    liveLink: "https://diabetespredictr.vercel.app/",
    githubLink: "https://github.com/jayanththalla/diabetes-predictor",
    isLive: true,
  },
  {
    title: "Android App Security Analyzer",
    description:
      "A security analysis platform that reverse engineers Android APKs to identify permissions, trackers, vulnerabilities, and security risks while supporting large file uploads.",
    image: "/andriodapp.png",
    tags: ["Python", "Flask", "React.JS", "Tailwind CSS"],
    liveLink: "https://androidappsecurity.vercel.app/",
    githubLink: "https://github.com/jayanththalla/androidApp",
    isLive: true,
  },
];

export default function Projects() {
  const total = projectsList.length;
  return (
    <div className="relative">
      <Heading title="Projects" />
      <div className="grid w-full grid-cols-1 md:grid-cols-2">
        {projectsList.map((project, idx) => {
          const isLastRow =
            Math.floor(idx / 2) === Math.ceil(total / 2) - 1;
          return (
            <div
              key={idx}
              className={cn(
                "px-8 py-6 md:px-16 md:py-8",
                idx % 2 === 0 ? "md:pr-8 md:pl-16" : "md:pr-16 md:pl-8",
                idx === total - 1 ? "border-b-0" : "border-b",
                !isLastRow ? "md:border-b" : "md:border-b-0",
                idx % 2 === 0 ? "md:border-r" : "md:border-r-0",
              )}
            >
              <ProjectCard {...project} />
            </div>
          );
        })}
      </div>
      <HeadingButton title={"View All Projects"} href={"/projects"} />
    </div>
  );
}
