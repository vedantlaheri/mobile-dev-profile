import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Smartphone, 
  Database, 
  Cloud, 
  Palette, 
  GitBranch,
  Settings,
  Zap,
  Brain
} from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      icon: <Code className="w-6 h-6" />,
      skills: ["Swift", "SwiftUI", "UIKit", "Objective-C"],
      color: "bg-blue-500"
    },
    {
      title: "Architecture & Patterns",
      icon: <Settings className="w-6 h-6" />,
      skills: ["MVVM", "MVC", "Clean Architecture", "Design Patterns"],
      color: "bg-purple-500"
    },
    {
      title: "Data & Storage",
      icon: <Database className="w-6 h-6" />,
      skills: ["Core Data", "UserDefaults", "Keychain", "SQLite"],
      color: "bg-green-500"
    },
    {
      title: "Backend & APIs",
      icon: <Cloud className="w-6 h-6" />,
      skills: ["Firebase", "RESTful APIs", "JSON", "URLSession"],
      color: "bg-orange-500"
    },
    {
      title: "UI & Animation",
      icon: <Palette className="w-6 h-6" />,
      skills: ["iOS Animations", "Auto Layout", "Interface Builder", "Human Interface Guidelines"],
      color: "bg-pink-500"
    },
    {
      title: "Development Tools",
      icon: <GitBranch className="w-6 h-6" />,
      skills: ["Xcode", "Git & GitHub", "TestFlight", "Instruments"],
      color: "bg-indigo-500"
    },
    {
      title: "Advanced Features",
      icon: <Zap className="w-6 h-6" />,
      skills: ["Push Notifications", "Location Services", "Camera & Photos", "Biometric Authentication"],
      color: "bg-yellow-500"
    },
    {
      title: "AI & ML",
      icon: <Brain className="w-6 h-6" />,
      skills: ["ML Kit", "Core ML", "AI Integration", "Vision Framework"],
      color: "bg-teal-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Technical Skills
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building modern iOS applications, 
              from user interface design to backend integration.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <Card 
                key={category.title}
                className="bg-gradient-card shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105 group"
              >
                <CardContent className="p-6 space-y-4">
                  {/* Category Header */}
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`p-2 ${category.color} rounded-lg text-white group-hover:scale-110 transition-transform duration-300`}>
                      {category.icon}
                    </div>
                    <h3 className="font-semibold text-foreground text-sm leading-tight">
                      {category.title}
                    </h3>
                  </div>
                  
                  {/* Skills Badges */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill}
                        variant="secondary"
                        className="text-xs bg-ios-gray-lighter text-ios-gray hover:bg-ios-blue-light hover:text-ios-blue transition-colors duration-300 cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Learning Section */}
          <div className="mt-16">
            <Card className="bg-gradient-primary text-white shadow-large">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Continuous Learning</h3>
                <p className="text-lg opacity-90 max-w-2xl mx-auto">
                  I'm constantly exploring new iOS technologies and best practices. 
                  Currently learning about Combine framework, async/await patterns, 
                  and advanced SwiftUI techniques to stay at the forefront of iOS development.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;