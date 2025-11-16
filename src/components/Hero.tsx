import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 pt-16"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 lg:col-span-7 text-center lg:text-left">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-6">
              Available for Part-Time or Full-Time Opportunities
            </div>
            <h1 className="text-slate-900 mb-6">
              Hi, I'm Ali Zekai Deveci
              <span className="block text-blue-600 mt-2">
                Software Engineering Student
              </span>
            </h1>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Dedicated senior-year Software Engineering student at Mugla Sitki Kocman University, 
              currently participating in the Erasmus exchange program at West Pomeranian University 
              of Technology in Szczecin, Poland. Passionate about backend engineering, system design, 
              and cloud-native technologies. Highly disciplined and motivated to contribute to impactful 
              software engineering projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button
                onClick={() => scrollToSection("projects")}
                className="bg-blue-600 hover:bg-blue-700"
                size="lg"
              >
                View My Work
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                size="lg"
                className="border-slate-300"
              >
                Contact Me
              </Button>
            </div>
            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="https://github.com/alizekaid"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow text-slate-700 hover:text-blue-600"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/alizekaid"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow text-slate-700 hover:text-blue-600"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:alizekaid@gmail.com"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow text-slate-700 hover:text-blue-600"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600 rounded-full blur-3xl opacity-20"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <img
                  src={`${import.meta.env.BASE_URL}assets/Ekran Resmi 2025-11-16 22.19.30.png`}
                  alt="Ali Zekai Deveci"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
