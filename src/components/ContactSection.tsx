import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Download, MessageCircle, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "laherits46@gmail.com",
      href: "mailto:laherits46@gmail.com",
      description: "Send me an email for project inquiries"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn",
      value: "linkedin.com/in/vedantlaheri1311",
      href: "https://linkedin.com/in/vedantlaheri1311",
      description: "Connect with me professionally"
    },
    {
      icon: <Github className="w-6 h-6" />,
      title: "GitHub",
      value: "github.com/vedantlaheri",
      href: "https://github.com/vedantlaheri",
      description: "Check out my code repositories"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Let's Connect
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always interested in discussing new opportunities, 
              collaborations, or just chatting about iOS development.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method) => (
              <Card 
                key={method.title}
                className="bg-gradient-card shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105 group cursor-pointer"
              >
                <CardContent className="p-6 text-center">
                  <a 
                    href={method.href}
                    target={method.title !== "Email" ? "_blank" : undefined}
                    rel={method.title !== "Email" ? "noopener noreferrer" : undefined}
                    className="block"
                  >
                    <div className="p-4 bg-gradient-primary rounded-full text-white mx-auto mb-4 w-fit group-hover:scale-110 transition-transform duration-300">
                      {method.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-ios-blue transition-colors duration-300">
                      {method.title}
                    </h3>
                    <p className="text-sm text-ios-blue font-medium mb-2">
                      {method.value}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {method.description}
                    </p>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <Card className="bg-gradient-primary text-white shadow-large">
            <CardContent className="p-8 text-center space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-center">
                  <div className="p-3 bg-white/20 rounded-full">
                    <MessageCircle className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold">Ready to Start a Project?</h3>
                <p className="text-lg opacity-90 max-w-2xl mx-auto">
                  Whether you have a specific project in mind or want to explore 
                  possibilities, I'd love to hear from you. Let's build something amazing together!
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button 
                  size="lg"
                  variant="secondary"
                  className="bg-white text-ios-blue hover:bg-white/90 transition-all duration-300 hover:scale-105"
                  asChild
                >
                  <a href="mailto:laherits46@gmail.com">
                    <Mail className="w-5 h-5 mr-2" />
                    Send Email
                  </a>
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 transition-all duration-300 hover:scale-105"
                  asChild
                >
                  <a href="/resume.pdf" download>
                    <Download className="w-5 h-5 mr-2" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Additional Info */}
          <div className="mt-12 text-center space-y-4">
            <div className="flex items-center justify-center text-muted-foreground">
              <MapPin className="w-4 h-4 mr-2 text-ios-blue" />
              <span className="text-sm">Currently based in Ahmedabad, Gujarat, India</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Open to remote opportunities and collaborative projects
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;