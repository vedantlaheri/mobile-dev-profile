import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Briefcase, Code, Sparkles } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My journey into iOS development combines academic excellence with 
              practical experience in building modern mobile applications.
            </p>
          </div>

          {/* Bio Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="bg-gradient-card shadow-medium hover:shadow-large transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-primary rounded-lg mr-4">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Education Journey</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Completed my <strong>Bachelor of Computer Applications (BCA)</strong> in [Your BCA Completion Year], 
                  followed by <strong>Master of Computer Applications (MCA)</strong> in [Your MCA Completion Year]. 
                  This solid academic foundation provided me with comprehensive knowledge of 
                  software development principles and computer science fundamentals.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-medium hover:shadow-large transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-primary rounded-lg mr-4">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Professional Path</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Currently working as a <strong>Junior iOS Developer</strong>, where I'm applying my 
                  academic knowledge to real-world projects. This role has allowed me to deepen 
                  my understanding of iOS development best practices and collaborate with 
                  experienced developers in building production-ready applications.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Technical Foundation */}
          <Card className="bg-gradient-card shadow-medium">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-primary rounded-lg mr-4">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">Technical Foundation</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-medium text-foreground mb-4 flex items-center">
                    <Sparkles className="w-5 h-5 text-ios-blue mr-2" />
                    Core Technologies
                  </h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-ios-blue rounded-full mr-3"></div>
                      <strong>Swift</strong> - Modern iOS programming language
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-ios-blue rounded-full mr-3"></div>
                      <strong>SwiftUI</strong> - Declarative UI framework
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-ios-blue rounded-full mr-3"></div>
                      <strong>MVVM Architecture</strong> - Clean code organization
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-ios-blue rounded-full mr-3"></div>
                      <strong>Core Data</strong> - Local data management
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium text-foreground mb-4 flex items-center">
                    <Sparkles className="w-5 h-5 text-ios-blue mr-2" />
                    Advanced Skills
                  </h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-ios-blue rounded-full mr-3"></div>
                      <strong>Firebase</strong> - Backend services integration
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-ios-blue rounded-full mr-3"></div>
                      <strong>RESTful APIs</strong> - Network communication
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-ios-blue rounded-full mr-3"></div>
                      <strong>iOS Animations</strong> - Engaging user experiences
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-ios-blue rounded-full mr-3"></div>
                      <strong>AI Integration</strong> - Modern app capabilities
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;