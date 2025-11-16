import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const projects = [
    {
      title: "TUTOR AI — AI-Powered Educational Platform",
      description:
        "Developed REST API backend with AI integration for document summarization, quiz generation, and Q&A chat functionality. Implemented JWT-based authentication with Redis session management, Google OAuth, and progress tracking system with XP, levels, and multi-tier leaderboards.",
      image:
        "https://images.unsplash.com/photo-1553678324-f84674bd7b24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MzI2Mjk0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["Go", "Fiber", "PostgreSQL", "Redis", "Docker", "React", "Tailwind CSS", "JWT", "Google OAuth"],
      githubUrl: "https://github.com/alizekaid",
    },
    {
      title: "SDN-Mininet DASH — Intelligent Video Streaming Platform",
      description:
        "Architected SDN-based load balancing system with Ryu controller and Mininet, implementing dynamic server discovery and multi-algorithm traffic distribution. Developed QoS management system with priority-based traffic classification and DASH video streaming with adaptive quality selection.",
      image:
        "https://images.unsplash.com/photo-1643116774075-acc00caa9a7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGV8ZW58MXx8fHwxNzYzMjI1MDY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["Python", "Ryu SDN Controller", "Mininet", "OpenFlow", "NetworkX", "Flask", "JavaScript"],
      githubUrl: "https://github.com/alizekaid",
    },
    {
      title: "CardApp — Business Card Management Platform",
      description:
        "Architected RESTful API backend with JWT authentication and Redis-based session management supporting multi-device access. Implemented business card CRUD operations with favorites system, view tracking, and secure authentication flow with email verification and Google OAuth.",
      image:
        "https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYzMjUyOTY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["Go", "Fiber", "PostgreSQL", "GORM", "Redis", "JWT", "Email Services"],
      githubUrl: "https://github.com/alizekaid",
    },
    {
      title: "ExercEase — Injury Recovery Mobile App",
      description:
        "Developed RESTful backend API using Go and Fiber framework for injury tracking and personalized recovery progress management. Implemented PostgreSQL database with GORM ORM, Redis for session management, and integrated Firebase Authentication with JWT-based authentication system.",
      image:
        "https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjMyOTE2OTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["Go", "Fiber", "PostgreSQL", "Redis", "Firebase Authentication", "JWT", "Flutter/Dart"],
      githubUrl: "https://github.com/alizekaid",
    },
    {
      title: "SpeedScroll — Time-Based Navigation App",
      description:
        "Designed route-calculation algorithms for shortest path and time-based optimization. Developed backend services integrating external navigation APIs for efficient route planning and navigation.",
      image:
        "https://images.unsplash.com/photo-1643116774075-acc00caa9a7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGV8ZW58MXx8fHwxNzYzMjI1MDY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["Python", "Flask", "Dart/Flutter", "External Navigation APIs", "Algorithm Design"],
      githubUrl: "https://github.com/alizekaid",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-slate-900 mb-4">Featured Projects</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A selection of projects showcasing my technical skills and problem-solving
            abilities
          </p>
        </div>

        <div className="grid grid-cols-12 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="col-span-12 sm:col-span-6 lg:col-span-4"
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
