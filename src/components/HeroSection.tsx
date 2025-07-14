import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Download } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-ios-gray-lighter">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Profile Image */}
          <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden shadow-large animate-scale-in">
            <img 
              src="/lovable-uploads/927141e5-8097-4444-8b6c-1d7f1eb27423.png" 
              alt="Your Name - iOS Developer" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Hero Text */}
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-slide-up">
            Hi, I'm{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Vedant Laheri
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-ios-gray-light mb-4 animate-slide-up [animation-delay:200ms]">
            iOS Developer
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 animate-slide-up [animation-delay:300ms]">
            📍 Based in Ahmedabad, Gujarat, India
          </p>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-slide-up [animation-delay:400ms]">
            Passionate about crafting beautiful and intuitive iOS applications. 
            Recently transitioned into iOS development with a strong foundation in 
            Swift, SwiftUI, and modern app architecture.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up [animation-delay:600ms]">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-medium transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-ios-blue text-ios-blue hover:bg-ios-blue-light transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 animate-slide-up [animation-delay:800ms]">
            <a 
              href="mailto:laherits46@gmail.com" 
              className="p-3 rounded-full bg-card hover:bg-ios-blue-light transition-all duration-300 hover:scale-110 shadow-soft"
            >
              <Mail className="w-6 h-6 text-ios-blue" />
            </a>
            <a 
              href="https://github.com/vedantlaheri" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-ios-blue-light transition-all duration-300 hover:scale-110 shadow-soft"
            >
              <Github className="w-6 h-6 text-ios-blue" />
            </a>
            <a 
              href="https://linkedin.com/in/vedantlaheri1311" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-ios-blue-light transition-all duration-300 hover:scale-110 shadow-soft"
            >
              <Linkedin className="w-6 h-6 text-ios-blue" />
            </a>
            <a 
              href="/resume.pdf" 
              download
              className="p-3 rounded-full bg-card hover:bg-ios-blue-light transition-all duration-300 hover:scale-110 shadow-soft"
            >
              <Download className="w-6 h-6 text-ios-blue" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-ios-blue rounded-full flex justify-center">
          <div className="w-1 h-3 bg-ios-blue rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;