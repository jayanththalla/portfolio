"use client";

import React, { useState } from "react";
import Heading from "@/components/Heading";
import StackBtn from "@/components/StackBtn";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { RiArrowDropDownLine } from "react-icons/ri";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaDocker,
  FaAws,
  FaLinux,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiShadcnui,
  SiExpress,
  SiMongodb,
  SiCloudinary,
  SiC,
  SiCplusplus,
  SiVite,
  SiSupabase,
  SiPostgresql,
  SiVercel,
  SiPostman,
  SiSocketdotio,
  SiPython,
  SiFastapi,
  SiDjango,
  SiFlask,
  SiLangchain,
  SiGooglegemini,
  SiMeta,
  SiScikitlearn,
  SiPytorch,
  SiTensorflow,
  SiMysql,
  SiRedis,
  SiN8N,
  SiZapier,
  SiGithubcopilot,
} from "react-icons/si";
import {
  TbSql,
  TbGitBranch,
  TbSearch,
  TbRobot,
  TbPlugConnected,
  TbMessageChatbot,
  TbSparkles,
  TbCursorText,
  TbTerminal2,
  TbApi,
} from "react-icons/tb";

interface StackItem {
  title: string;
  icon: React.ReactNode;
  url: string;
  type:
    "language" | "frontend" | "backend" | "ai" | "database" | "design" | "tool";
}

const stackItems: StackItem[] = [
  // Languages
  {
    title: "Python",
    icon: <SiPython />,
    url: "https://www.python.org/",
    type: "language",
  },
  {
    title: "Java",
    icon: <FaJava />,
    url: "https://www.java.com/",
    type: "language",
  },
  {
    title: "JavaScript",
    icon: <SiJavascript />,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    type: "language",
  },
  {
    title: "TypeScript",
    icon: <SiTypescript />,
    url: "https://www.typescriptlang.org/",
    type: "language",
  },
  {
    title: "SQL",
    icon: <TbSql />,
    url: "https://en.wikipedia.org/wiki/SQL",
    type: "language",
  },
  {
    title: "C",
    icon: <SiC />,
    url: "https://en.wikipedia.org/wiki/C_(programming_language)",
    type: "language",
  },
  {
    title: "C++",
    icon: <SiCplusplus />,
    url: "https://isocpp.org/",
    type: "language",
  },

  // Frontend
  {
    title: "React.js",
    icon: <FaReact />,
    url: "https://react.dev/",
    type: "frontend",
  },
  {
    title: "Next.js",
    icon: <SiNextdotjs />,
    url: "https://nextjs.org/",
    type: "frontend",
  },
  {
    title: "Tailwind CSS",
    icon: <SiTailwindcss />,
    url: "https://tailwindcss.com/",
    type: "frontend",
  },
  {
    title: "HTML5",
    icon: <FaHtml5 />,
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    type: "frontend",
  },
  {
    title: "CSS3",
    icon: <FaCss3Alt />,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    type: "frontend",
  },
  {
    title: "Vite",
    icon: <SiVite />,
    url: "https://vitejs.dev/",
    type: "frontend",
  },
  {
    title: "Shadcn UI",
    icon: <SiShadcnui />,
    url: "https://ui.shadcn.com/",
    type: "frontend",
  },

  // Backend
  {
    title: "FastAPI",
    icon: <SiFastapi />,
    url: "https://fastapi.tiangolo.com/",
    type: "backend",
  },
  {
    title: "Node.js",
    icon: <FaNodeJs />,
    url: "https://nodejs.org/",
    type: "backend",
  },
  {
    title: "Express.js",
    icon: <SiExpress />,
    url: "https://expressjs.com/",
    type: "backend",
  },
  {
    title: "Django",
    icon: <SiDjango />,
    url: "https://www.djangoproject.com/",
    type: "backend",
  },
  {
    title: "Flask",
    icon: <SiFlask />,
    url: "https://flask.palletsprojects.com/",
    type: "backend",
  },
  {
    title: "REST APIs",
    icon: <TbApi />,
    url: "https://en.wikipedia.org/wiki/REST",
    type: "backend",
  },
  {
    title: "WebSockets",
    icon: <SiSocketdotio />,
    url: "https://socket.io/",
    type: "backend",
  },
  {
    title: "Cloudinary",
    icon: <SiCloudinary />,
    url: "https://cloudinary.com/",
    type: "backend",
  },

  // AI / ML
  {
    title: "LangChain",
    icon: <SiLangchain />,
    url: "https://www.langchain.com/",
    type: "ai",
  },
  {
    title: "LangGraph",
    icon: <TbGitBranch />,
    url: "https://www.langchain.com/langgraph",
    type: "ai",
  },
  {
    title: "RAG",
    icon: <TbSearch />,
    url: "https://en.wikipedia.org/wiki/Retrieval-augmented_generation",
    type: "ai",
  },
  {
    title: "AI Agents",
    icon: <TbRobot />,
    url: "https://en.wikipedia.org/wiki/Intelligent_agent",
    type: "ai",
  },
  {
    title: "MCP",
    icon: <TbPlugConnected />,
    url: "https://modelcontextprotocol.io/",
    type: "ai",
  },
  {
    title: "Prompt Engineering",
    icon: <TbMessageChatbot />,
    url: "https://en.wikipedia.org/wiki/Prompt_engineering",
    type: "ai",
  },
  {
    title: "OpenAI GPT",
    icon: <TbSparkles />,
    url: "https://openai.com/",
    type: "ai",
  },
  {
    title: "Gemini",
    icon: <SiGooglegemini />,
    url: "https://gemini.google.com/",
    type: "ai",
  },
  {
    title: "Llama",
    icon: <SiMeta />,
    url: "https://www.llama.com/",
    type: "ai",
  },
  {
    title: "Scikit-learn",
    icon: <SiScikitlearn />,
    url: "https://scikit-learn.org/",
    type: "ai",
  },
  {
    title: "PyTorch",
    icon: <SiPytorch />,
    url: "https://pytorch.org/",
    type: "ai",
  },
  {
    title: "TensorFlow",
    icon: <SiTensorflow />,
    url: "https://www.tensorflow.org/",
    type: "ai",
  },

  // Databases
  {
    title: "PostgreSQL",
    icon: <SiPostgresql />,
    url: "https://www.postgresql.org/",
    type: "database",
  },
  {
    title: "MongoDB",
    icon: <SiMongodb />,
    url: "https://www.mongodb.com/",
    type: "database",
  },
  {
    title: "MySQL",
    icon: <SiMysql />,
    url: "https://www.mysql.com/",
    type: "database",
  },
  {
    title: "Redis",
    icon: <SiRedis />,
    url: "https://redis.io/",
    type: "database",
  },
  {
    title: "Supabase",
    icon: <SiSupabase />,
    url: "https://supabase.com/",
    type: "database",
  },

  // DevOps & Tools
  {
    title: "Docker",
    icon: <FaDocker />,
    url: "https://www.docker.com/",
    type: "tool",
  },
  {
    title: "Git",
    icon: <FaGitAlt />,
    url: "https://git-scm.com/",
    type: "tool",
  },
  {
    title: "GitHub",
    icon: <FaGithub />,
    url: "https://github.com/",
    type: "tool",
  },
  {
    title: "Postman",
    icon: <SiPostman />,
    url: "https://www.postman.com/",
    type: "tool",
  },
  {
    title: "AWS",
    icon: <FaAws />,
    url: "https://aws.amazon.com/",
    type: "tool",
  },
  {
    title: "Linux",
    icon: <FaLinux />,
    url: "https://www.linux.org/",
    type: "tool",
  },
  {
    title: "n8n",
    icon: <SiN8N />,
    url: "https://n8n.io/",
    type: "tool",
  },
  {
    title: "Zapier",
    icon: <SiZapier />,
    url: "https://zapier.com/",
    type: "tool",
  },
  {
    title: "Cursor",
    icon: <TbCursorText />,
    url: "https://cursor.com/",
    type: "tool",
  },
  {
    title: "GitHub Copilot",
    icon: <SiGithubcopilot />,
    url: "https://github.com/features/copilot",
    type: "tool",
  },
  {
    title: "Claude Code",
    icon: <TbTerminal2 />,
    url: "https://claude.com/product/claude-code",
    type: "tool",
  },
  {
    title: "Vercel",
    icon: <SiVercel />,
    url: "https://vercel.com/",
    type: "tool",
  },

  // Design
  {
    title: "Figma",
    icon: <FaFigma />,
    url: "https://www.figma.com/",
    type: "design",
  },
];

const filters = [
  { label: "All", value: "all" },
  { label: "Languages", value: "language" },
  { label: "Frontend", value: "frontend" },
  { label: "Backend", value: "backend" },
  { label: "AI/ML", value: "ai" },
  { label: "Database", value: "database" },
  { label: "Design", value: "design" },
  { label: "Tools", value: "tool" },
];

export default function TechStack() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const filteredItems =
    activeFilter === "all"
      ? stackItems
      : stackItems.filter((item) => item.type === activeFilter);

  return (
    <>
      <Heading title="Tech Stack">
        <div className="relative">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="mr-3 flex h-7 items-center gap-1.5 px-2.5 py-1 text-xs font-semibold"
          >
            <span>{filters.find((f) => f.value === activeFilter)?.label}</span>
            <span className="text-[10px]">
              <RiArrowDropDownLine />
            </span>
          </Button>
          {dropdownOpen && (
            <div className="bg-popover text-popover-foreground absolute right-0 z-50 mt-1 w-40 overflow-hidden rounded-md border font-mono text-xs shadow-md">
              {filters.map((filter) => (
                <button
                  key={filter.value}
                  onClick={() => {
                    setActiveFilter(filter.value);
                    setDropdownOpen(false);
                  }}
                  className={cn(
                    "hover:bg-muted block w-full cursor-pointer px-3 py-2 text-left font-semibold transition-colors",
                    activeFilter === filter.value &&
                      "bg-muted/80 text-foreground",
                  )}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </Heading>
      <div className="relative flex flex-wrap gap-1 px-8 py-5 md:px-12">
        {filteredItems.map((item, index) => (
          <StackBtn
            key={index}
            icon={item.icon}
            text={item.title}
            url={item.url}
          />
        ))}
      </div>
    </>
  );
}
