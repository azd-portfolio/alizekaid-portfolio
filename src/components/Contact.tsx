import { Mail, Github, Linkedin, Twitter, MapPin, Phone } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "alizekaid@gmail.com",
      href: "mailto:alizekaid@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+49 572 179 960",
      href: "tel:+49572179960",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Poland / Turkey",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      username: "@alizekaid",
      href: "https://github.com/alizekaid",
      color: "hover:bg-slate-900 hover:text-white",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      username: "alizekaid",
      href: "https://linkedin.com/in/alizekaid",
      color: "hover:bg-blue-600 hover:text-white",
    },
    
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-slate-900 mb-4">Get In Touch</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            I'm currently looking for full-time opportunities. Whether you have a
            question or just want to say hi, feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-12 gap-8 max-w-5xl mx-auto">
          {/* Contact Information */}
          <div className="col-span-12 lg:col-span-6">
            <h3 className="text-slate-900 mb-6">Contact Information</h3>
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <Card
                  key={item.label}
                  className="p-6 border-slate-200 hover:border-blue-300 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <item.icon className="text-blue-600" size={24} />
                    </div>
                    <div className="flex-1">
                      <p className="text-slate-500 mb-1">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-slate-900 hover:text-blue-600 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-slate-900">{item.value}</p>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Social Media Links */}
          <div className="col-span-12 lg:col-span-6">
            <h3 className="text-slate-900 mb-6">Connect With Me</h3>
            <div className="space-y-4">
              {socialLinks.map((social) => (
                <Card
                  key={social.label}
                  className="p-6 border-slate-200 hover:border-blue-300 transition-colors"
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`p-3 bg-slate-100 rounded-lg transition-all ${social.color}`}
                      >
                        <social.icon className="text-slate-700" size={24} />
                      </div>
                      <div>
                        <p className="text-slate-900 mb-1">{social.label}</p>
                        <p className="text-slate-500">{social.username}</p>
                      </div>
                    </div>
                    <div className="text-slate-400 group-hover:text-blue-600 transition-colors">
                      →
                    </div>
                  </a>
                </Card>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl border border-blue-100">
              <h4 className="text-slate-900 mb-2">Download Resume</h4>
              <p className="text-slate-600 mb-4">
                Get a copy of my resume to learn more about my experience and
                qualifications.
              </p>
              <a
                href="/src/assets/CV_ali_zekai_deveci.pdf"
                download="CV_ali_zekai_deveci.pdf"
                className="block w-full"
              >
                <Button className="bg-blue-600 hover:bg-blue-700 w-full">
                  Download CV
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
