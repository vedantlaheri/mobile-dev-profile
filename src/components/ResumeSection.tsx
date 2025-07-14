import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, MapPin, Mail, Phone, Linkedin, Github, Calendar, Award } from "lucide-react";

const ResumeSection = () => {
  const experiences = [
    {
      title: "iOS Developer",
      company: "Inventyv",
      period: "Jun 2024 – Mar 2025",
      location: "Ahmedabad, Gujarat",
      description: "Crafted features, crushed bugs, and created two fitness apps that help users live better, healthier lives. Teamwork, clean code, and a bit of SwiftUI magic — that's how I roll.",
      achievements: [
        "Developed and maintained two production fitness applications",
        "Implemented Bluetooth device integration for health tracking",
        "Created reusable UI components for seamless navigation",
        "Added PDF/CSV export functionality for health data"
      ]
    },
    {
      title: "iOS Intern",
      company: "Inventyv",
      period: "Dec 2023 – Jun 2024",
      location: "Ahmedabad, Gujarat",
      description: "Where it all began. From UIKit puzzles to CoreData triumphs — I built, broke, learned, and laughed. This is where the passion took off. 🚀",
      achievements: [
        "Built core features using UIKit and SwiftUI",
        "Mastered Core Data for local data management",
        "Collaborated with senior developers on production apps",
        "Learned iOS development best practices and patterns"
      ]
    }
  ];

  const skills = {
    "Programming Languages": ["Swift", "Objective-C", "Python", "JavaScript"],
    "iOS Frameworks": ["SwiftUI", "UIKit", "Core Data", "HealthKit", "MapKit"],
    "Architecture": ["MVVM", "MVC", "Clean Architecture", "Design Patterns"],
    "APIs & Integration": ["RESTful APIs", "Bluetooth LE", "Firebase", "Dropbox API"],
    "Tools & Platforms": ["Xcode", "Git", "TestFlight", "App Store Connect"],
    "Soft Skills": ["Problem Solving", "Team Collaboration", "Clean Code", "User Experience"]
  };

  const projects = [
    {
      name: "HealthCoach App",
      description: "Smart health tracking with Bluetooth integration and data export",
      technologies: ["SwiftUI", "Bluetooth", "Core Data", "PDF Export"]
    },
    {
      name: "HealthForYou App",
      description: "Comprehensive health monitoring for vital signs and wellness",
      technologies: ["SwiftUI", "HealthKit", "Charts", "Core Data"]
    },
    {
      name: "Flight Simulator",
      description: "Maps integration with mods support and profile management",
      technologies: ["SwiftUI", "MapKit", "Dropbox API", "Core Data"]
    }
  ];

  return (
    <section id="resume" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              📄 Resume
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              A comprehensive overview of my journey, skills, and achievements in iOS development.
            </p>
            <a href="/Vedant_Laheri_Resume_main.pdf" download>
              <Button 
                size="lg" 
                className="bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 hover:scale-105"
              >
                <Download className="w-5 h-5 mr-2" />
                Download My Resume
              </Button>
            </a>
          </div>

          {/* Personal Info Card */}
          <Card className="bg-white shadow-md hover:shadow-lg transition-all duration-300 mb-12">
            <CardContent className="p-6 sm:p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Vedant Laheri</h3>
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-5 h-5 mr-3 text-blue-600" />
                      <span>Ahmedabad, Gujarat, India</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Mail className="w-5 h-5 mr-3 text-blue-600" />
                      <a href="mailto:laherits46@gmail.com" className="hover:text-blue-600 transition-colors">
                        laherits46@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Linkedin className="w-5 h-5 mr-3 text-blue-600" />
                      <a 
                        href="https://linkedin.com/in/vedantlaheri1311" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 transition-colors"
                      >
                        linkedin.com/in/vedantlaheri1311
                      </a>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Github className="w-5 h-5 mr-3 text-blue-600" />
                      <a 
                        href="https://github.com/vedantlaheri" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 transition-colors"
                      >
                        github.com/vedantlaheri
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Professional Summary</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Passionate iOS Developer with over a year of experience creating beautiful and intuitive mobile applications. 
                    Specialized in Swift, SwiftUI, and modern iOS development practices. Proven track record of delivering 
                    production-ready health and fitness applications that improve users' lives.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Experience Section */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <Award className="w-8 h-8 mr-3 text-blue-600" />
              Professional Experience
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="bg-white shadow-md hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900">{exp.title}</h4>
                        <p className="text-lg text-blue-600 font-medium">{exp.company}</p>
                      </div>
                      <div className="mt-2 lg:mt-0 text-right">
                        <div className="flex items-center text-gray-600 mb-1 lg:justify-end">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span className="text-sm font-medium">{exp.period}</span>
                        </div>
                        <div className="flex items-center text-gray-600 lg:justify-end">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-3">Key Achievements:</h5>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start text-gray-600">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Technical Skills</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(skills).map(([category, skillList]) => (
                <Card key={category} className="bg-white shadow-md hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-gray-900 mb-4">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <Badge 
                          key={skill} 
                          variant="secondary" 
                          className="text-xs bg-blue-100 text-blue-600 border-none"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Projects Highlight */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Featured Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <Card key={index} className="bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-gray-900 mb-3">{project.name}</h4>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="outline" 
                          className="text-xs border-blue-600 text-blue-600"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Card className="bg-white shadow-md">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Let's Build Something Amazing Together!
                </h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Ready to bring your iOS app idea to life? I'd love to hear about your project 
                  and discuss how we can create something that users will love.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 hover:scale-105"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Get In Touch
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-blue-600 text-blue-600 hover:bg-blue-100 transition-all duration-300 hover:scale-105"
                    asChild
                  >
                    <a href="https://linkedin.com/in/vedantlaheri1311" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-5 h-5 mr-2" />
                      Connect on LinkedIn
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
