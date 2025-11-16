import { GraduationCap, Code2, Briefcase } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

export function About() {
  const skills = {
    "Programming Languages": [
      "Go",
      "Java",
      "Python",
      "C",
      "Dart/Flutter",
      "HTML",
      "CSS",
    ],
    "Backend Development": [
      "Fiber (Go)",
      "Spring Boot",
      "Flask",
      "Django",
      "PostgreSQL",
      "MySQL",
      "Redis",
    ],
    "Cloud & DevOps": [
      "AWS (EC2, S3)",
      "Docker",
      "Kubernetes",
      "Linux",
      "CI/CD",
      "nginx",
      "LXC",
    ],
    "Tools & Technologies": [
      "Git",
      "JWT",
      "Postman",
      "SOAPUI",
      "Mininet",
      "REST APIs",
      "Networking",
    ],
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-slate-900 mb-4">About Me</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Learn more about my background, skills, and education
          </p>
        </div>

        <div className="grid grid-cols-12 gap-8 mb-16">
          <div className="col-span-12 lg:col-span-4">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600 rounded-2xl transform rotate-3"></div>
              <img
                src={`${import.meta.env.BASE_URL}assets/azd.jpeg`}
                alt="About Ali Zekai Deveci"
                className="relative rounded-2xl shadow-xl w-full object-cover aspect-square"
              />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <h3 className="text-slate-900 mb-4">My Journey</h3>
            <div className="space-y-4 text-slate-600">
              <p>
                I'm a senior-year Software Engineering student at Mugla Sitki Kocman University, 
                currently participating in the Erasmus exchange program at West Pomeranian University 
                of Technology in Szczecin, Poland. My passion for technology, backend engineering, 
                and system design drives me to continuously learn and excel academically.
              </p>
              <p>
                Throughout my journey, I've worked on diverse projects ranging from AI-powered 
                educational platforms to SDN-based video streaming systems. I lead a 6-person 
                backend development team at Virtus RnD, where I develop scalable backend systems 
                and APIs using Go and cloud-native patterns.
              </p>
              <p>
                I'm actively involved in student communities, serving as a board member for the 
                Mugla Blockchain Student Community and Mugla Cinema Student Community. I'm highly 
                disciplined, motivated, and eager to contribute to impactful software engineering 
                projects that solve real-world problems.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <Card className="p-6 border-slate-200 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <GraduationCap className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h4 className="text-slate-900 mb-1">Education</h4>
                    <p className="text-slate-600">
                      B.S. Software Engineering
                    </p>
                    <p className="text-slate-500">Mugla Sitki Kocman University • GPA: 3.50</p>
                    <p className="text-slate-500">Sep 2022 - Present</p>
                    <p className="text-slate-600 mt-2">
                      B.S. Computer Science (Erasmus)
                    </p>
                    <p className="text-slate-500">West Pomeranian University of Technology</p>
                    <p className="text-slate-500">Sep 2025 - Present • Szczecin, Poland</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-slate-200 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Briefcase className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h4 className="text-slate-900 mb-1">Experience</h4>
                    <p className="text-slate-600">Go Backend Developer</p>
                    <p className="text-slate-500">
                      Virtus RnD • Feb 2025 - Present
                    </p>
                    <p className="text-slate-500">Remote</p>
                    <p className="text-slate-600 mt-2">Software Development Intern</p>
                    <p className="text-slate-500">
                      Mono Bilisim • July 2024 - Aug 2024
                    </p>
                    <p className="text-slate-500">Istanbul, Turkey</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="flex items-center gap-3 mb-8">
            <Code2 className="text-blue-600" size={32} />
            <h3 className="text-slate-900">Skills & Technologies</h3>
          </div>
          <div className="grid grid-cols-12 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="col-span-12 sm:col-span-6 lg:col-span-3">
                <h4 className="text-slate-900 mb-4">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-slate-100 text-slate-700 hover:bg-blue-100 hover:text-blue-700 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
