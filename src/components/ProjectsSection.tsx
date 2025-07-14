import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Smartphone, Heart, Droplets, Plane } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "HealthCoach App",
      description: "A smart health tracking app with support for Bluetooth devices, manual health data entry, and PDF/CSV export. I revamped core features and implemented reusable UI components for seamless navigation.",
      icon: <Heart className="w-6 h-6" />,
      technologies: ["Swift", "SwiftUI", "Bluetooth", "CoreData", "PDF Export"],
      githubUrl: null,
      appStoreUrl: "https://apps.apple.com/app/healthcoach",
      featured: true
    },
    {
      title: "HealthForYou App",
      description: "A comprehensive health companion that monitors sleep, steps, oxygen levels, and more. I contributed to key modules for vital tracking and hydration/temperature monitoring.",
      icon: <Droplets className="w-6 h-6" />,
      technologies: ["SwiftUI", "HealthKit", "Core Data", "Monitoring", "Charts"],
      githubUrl: null,
      appStoreUrl: "https://apps.apple.com/app/healthforyou",
      featured: true
    },
    {
      title: "Flight Simulator",
      description: "A SwiftUI-based utility app that features Maps integration, Mods support, and nickname generation. Includes Dropbox integration and editable profiles via CoreData.",
      icon: <Plane className="w-6 h-6" />,
      technologies: ["SwiftUI", "MapKit", "Dropbox API", "Core Data", "Mods"],
      githubUrl: "https://github.com/vedantlaheri/flight-simulator",
      appStoreUrl: null,
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-ios-gray-lighter">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              📱 Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real apps that help real people. Here's where my code meets the world and makes a difference.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.title}
                className={`bg-gradient-card shadow-medium hover:shadow-large transition-all duration-500 hover:scale-105 group ${
                  project.featured ? 'lg:col-span-2 xl:col-span-1' : ''
                }`}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-gradient-primary rounded-lg text-white group-hover:scale-110 transition-transform duration-300">
                      {project.icon}
                    </div>
                    {project.featured && (
                      <Badge className="bg-ios-blue text-white">Featured</Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground group-hover:text-ios-blue transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary" 
                        className="text-xs bg-ios-blue-light text-ios-blue border-none"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    {project.githubUrl && (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1 border-ios-blue text-ios-blue hover:bg-ios-blue-light transition-all duration-300"
                        asChild
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          GitHub
                        </a>
                      </Button>
                    )}
                    {project.appStoreUrl && (
                      <Button 
                        size="sm" 
                        className={`${project.githubUrl ? 'flex-1' : 'w-full'} bg-gradient-primary hover:shadow-medium transition-all duration-300`}
                        asChild
                      >
                        <a href={project.appStoreUrl} target="_blank" rel="noopener noreferrer">
                          <Smartphone className="w-4 h-4 mr-2" />
                          App Store
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              className="border-ios-blue text-ios-blue hover:bg-ios-blue-light transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="https://github.com/vedantlaheri" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;