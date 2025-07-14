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
              ✨ Hey there, tech explorer!
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Welcome to my little digital space where Swift meets soul. 💙<br/><br/>
              I'm Vedant Laheri — an iOS Developer who loves turning code into magical experiences. 
              Over the past year, I've been lucky to build apps that not only work, but feel right. 
              Whether it's tracking your health, navigating virtual flights, or just making you smile — 
              I put my heart into every pixel and function.
            </p>
          </div>

          {/* Experience Cards */}
          <div className="space-y-8 mb-16">
            <Card className="bg-gradient-card shadow-medium hover:shadow-large transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-primary rounded-lg mr-4">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">💼 What I've Been Up To:</h3>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-ios-blue pl-6">
                    <h4 className="text-lg font-semibold text-foreground flex items-center">
                      🔹 Inventyv – iOS Developer
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">Jun 2024 – Mar 2025</p>
                    <p className="text-muted-foreground leading-relaxed">
                      Crafted features, crushed bugs, and created two fitness apps that help users live better, healthier lives.
                      Teamwork, clean code, and a bit of SwiftUI magic — that's how I roll.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-ios-blue pl-6">
                    <h4 className="text-lg font-semibold text-foreground flex items-center">
                      🔹 Inventyv – iOS Intern
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">Dec 2023 – Jun 2024</p>
                    <p className="text-muted-foreground leading-relaxed">
                      Where it all began. From UIKit puzzles to CoreData triumphs — I built, broke, learned, and laughed. 
                      This is where the passion took off. 🚀
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-medium hover:shadow-large transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-primary rounded-lg mr-4">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">📱 Projects I Poured My Heart Into:</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 border border-border rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">💖 HealthCoach</h4>
                    <p className="text-muted-foreground">
                      Your personal wellness tracker. I redesigned flows, added Bluetooth syncing, and made data export as easy as a tap. Health made beautiful.
                    </p>
                  </div>
                  
                  <div className="p-4 border border-border rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">💧 HealthForYou</h4>
                    <p className="text-muted-foreground">
                      From water intake to oxygen levels — this app helps you stay in tune with your body. I helped bring the data to life.
                    </p>
                  </div>
                  
                  <div className="p-4 border border-border rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">✈️ Flight Simulator</h4>
                    <p className="text-muted-foreground">
                      A fun SwiftUI project with maps, mods, and dropbox magic. Built with love for curious minds and explorers at heart.
                    </p>
                  </div>
                </div>
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
                <h3 className="text-2xl font-semibold text-foreground">💡 What Makes Me Tick:</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="text-muted-foreground leading-relaxed">
                    <p className="mb-4">
                      Swift. SwiftUI. Clean code. Clean UI. Real impact.<br/>
                      If it helps people and looks smooth doing it — I'm in. 🙌
                    </p>
                    
                    <h4 className="text-lg font-medium text-foreground mb-4 flex items-center">
                      <Sparkles className="w-5 h-5 text-ios-blue mr-2" />
                      Core Technologies
                    </h4>
                    <ul className="space-y-3">
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