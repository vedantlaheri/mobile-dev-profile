import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Smartphone, Camera, Bot } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "SocialMediaOn",
      description: "An image-based social media feed app featuring modern SwiftUI design with MVVM architecture, infinite pagination, and elegant shimmer loading effects. Users can browse, like, and share photos in a Instagram-like interface.",
      icon: <Smartphone className="w-6 h-6" />,
      technologies: ["SwiftUI", "MVVM", "Pagination", "Animations", "Firebase"],
      githubUrl: "https://github.com/yourusername/socialmediaon",
      appStoreUrl: "https://apps.apple.com/app/socialmediaon",
      featured: true
    },
    {
      title: "GujjuTextScanner",
      description: "A powerful Gujarati OCR scanner app that leverages ML Kit for accurate text recognition. Supports both camera capture and gallery image selection, making it easy to digitize Gujarati text from various sources.",
      icon: <Camera className="w-6 h-6" />,
      technologies: ["Swift", "ML Kit", "OCR", "Camera API", "Core Image"],
      githubUrl: "https://github.com/yourusername/gujjutextscanner",
      appStoreUrl: "https://apps.apple.com/app/gujjutextscanner",
      featured: false
    },
    {
      title: "AI Resume Bot",
      description: "An intelligent job application automation tool that uses AI to analyze user resumes and automatically apply to relevant job postings. Features smart matching algorithms and personalized application generation.",
      icon: <Bot className="w-6 h-6" />,
      technologies: ["SwiftUI", "AI Integration", "API", "Core Data", "Automation"],
      githubUrl: "https://github.com/yourusername/ai-resume-bot",
      appStoreUrl: "https://apps.apple.com/app/ai-resume-bot",
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-20 bg-ios-gray-lighter">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of iOS applications I've built, demonstrating various 
              technologies and development approaches.
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
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 border-ios-blue text-ios-blue hover:bg-ios-blue-light transition-all duration-300"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button 
                      size="sm" 
                      className="flex-1 bg-gradient-primary hover:shadow-medium transition-all duration-300"
                      asChild
                    >
                      <a href={project.appStoreUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        App Store
                      </a>
                    </Button>
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
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
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