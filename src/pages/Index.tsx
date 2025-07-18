import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ResumeSection from "@/components/ResumeSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ResumeSection />
      <EducationSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-ios-gray text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm opacity-80">
            © {new Date().getFullYear()} Vedant Laheri. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
