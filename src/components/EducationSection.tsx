// import { Card, CardContent } from "@/components/ui/card";
// import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

// const EducationSection = () => {
//   const education = [
//     {
//       degree: "Master of Computer Applications",
//       shortForm: "MCA",
//       university: "[Your University Name]",
//       year: "[MCA Completion Year]",
//       location: "[University Location]",
//       description: "Advanced studies in computer applications with focus on software engineering, algorithms, and modern development methodologies. Specialized coursework in mobile application development and system design.",
//       highlights: ["Software Engineering", "Mobile Development", "System Design", "Advanced Algorithms"]
//     },
//     {
//       degree: "Bachelor of Computer Applications",
//       shortForm: "BCA",
//       university: "[Your University Name]",
//       year: "[BCA Completion Year]",
//       location: "[University Location]",
//       description: "Comprehensive foundation in computer science principles, programming languages, and software development. Built strong analytical and problem-solving skills essential for modern software development.",
//       highlights: ["Programming Fundamentals", "Database Systems", "Web Development", "Software Testing"]
//     }
//   ];

//   return (
//     <section id="education" className="py-20 bg-ios-gray-lighter">
//       <div className="container mx-auto px-6">
//         <div className="max-w-4xl mx-auto">
//           {/* Section Header */}
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
//               Education
//             </h2>
//             <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//               Academic foundation that provided the theoretical knowledge and 
//               practical skills for my journey in software development.
//             </p>
//           </div>

//           {/* Education Timeline */}
//           <div className="space-y-8">
//             {education.map((edu, index) => (
//               <Card 
//                 key={edu.degree}
//                 className="bg-gradient-card shadow-medium hover:shadow-large transition-all duration-300 hover:scale-105 group"
//               >
//                 <CardContent className="p-8">
//                   <div className="flex flex-col lg:flex-row lg:items-start gap-6">
//                     {/* Icon and Timeline */}
//                     <div className="flex-shrink-0">
//                       <div className="relative">
//                         <div className="p-4 bg-gradient-primary rounded-xl text-white group-hover:scale-110 transition-transform duration-300">
//                           <GraduationCap className="w-8 h-8" />
//                         </div>
//                         {index !== education.length - 1 && (
//                           <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-ios-blue-light"></div>
//                         )}
//                       </div>
//                     </div>

//                     {/* Content */}
//                     <div className="flex-1 space-y-4">
//                       {/* Header */}
//                       <div className="space-y-2">
//                         <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
//                           <h3 className="text-2xl font-bold text-foreground group-hover:text-ios-blue transition-colors duration-300">
//                             {edu.degree}
//                           </h3>
//                           <div className="flex items-center text-ios-blue bg-ios-blue-light px-3 py-1 rounded-full text-sm font-medium">
//                             <Award className="w-4 h-4 mr-2" />
//                             {edu.shortForm}
//                           </div>
//                         </div>
                        
//                         <div className="flex flex-col sm:flex-row gap-4 text-muted-foreground">
//                           <div className="flex items-center">
//                             <MapPin className="w-4 h-4 mr-2 text-ios-blue" />
//                             {edu.university}
//                           </div>
//                           <div className="flex items-center">
//                             <Calendar className="w-4 h-4 mr-2 text-ios-blue" />
//                             {edu.year}
//                           </div>
//                         </div>
//                       </div>

//                       {/* Description */}
//                       <p className="text-muted-foreground leading-relaxed">
//                         {edu.description}
//                       </p>

//                       {/* Highlights */}
//                       <div className="space-y-2">
//                         <h4 className="text-sm font-semibold text-foreground">Key Areas of Study:</h4>
//                         <div className="flex flex-wrap gap-2">
//                           {edu.highlights.map((highlight) => (
//                             <span 
//                               key={highlight}
//                               className="px-3 py-1 bg-ios-blue-light text-ios-blue text-sm rounded-full border border-ios-blue/20"
//                             >
//                               {highlight}
//                             </span>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>

//           {/* Additional Achievement */}
//           <Card className="mt-12 bg-gradient-primary text-white shadow-large">
//             <CardContent className="p-8 text-center">
//               <div className="flex items-center justify-center mb-4">
//                 <div className="p-3 bg-white/20 rounded-full">
//                   <Award className="w-8 h-8" />
//                 </div>
//               </div>
//               <h3 className="text-xl font-bold mb-4">Academic Excellence</h3>
//               <p className="text-lg opacity-90 max-w-2xl mx-auto">
//                 Successfully completed both degrees with strong academic performance, 
//                 building a solid foundation in computer science principles that directly 
//                 supports my current work in iOS development.
//               </p>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default EducationSection;
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      degree: "Master of Computer Applications",
      shortForm: "MCA",
      university: "Dharmsinh Desai University",
      year: "2024",
      location: "Nadiad, Gujarat",
      description:
        "Completed MCA with a strong focus on mobile application development, system design, and modern software methodologies. Coursework emphasized iOS development fundamentals and applied computer science.",
      highlights: [
        "Mobile Development",
        "System Design",
        "Software Engineering",
        "MVVM Architecture",
      ],
    },
    {
      degree: "Bachelor of Computer Applications",
      shortForm: "BCA",
      university: "Bhavnagar University",
      year: "2022",
      location: "Bhavnagar, Gujarat",
      description:
        "Established a foundation in core computer science subjects including programming, database systems, and web technologies. Built critical thinking and problem-solving skills that led to a strong start in iOS development.",
      highlights: [
        "Programming Fundamentals",
        "Database Systems",
        "Web Technologies",
        "Software Testing",
      ],
    },
  ];

  return (
    <section id="education" className="py-20 bg-ios-gray-lighter">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Education
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Academic foundation that provided the theoretical knowledge and 
              practical skills for my journey in software development.
            </p>
          </div>

          {/* Education Timeline */}
          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card 
                key={edu.degree}
                className="bg-gradient-card shadow-medium hover:shadow-large transition-all duration-300 hover:scale-105 group"
              >
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Icon and Timeline */}
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className="p-4 bg-gradient-primary rounded-xl text-white group-hover:scale-110 transition-transform duration-300">
                          <GraduationCap className="w-8 h-8" />
                        </div>
                        {index !== education.length - 1 && (
                          <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-ios-blue-light"></div>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-4">
                      {/* Header */}
                      <div className="space-y-2">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <h3 className="text-2xl font-bold text-foreground group-hover:text-ios-blue transition-colors duration-300">
                            {edu.degree}
                          </h3>
                          <div className="flex items-center text-ios-blue bg-ios-blue-light px-3 py-1 rounded-full text-sm font-medium">
                            <Award className="w-4 h-4 mr-2" />
                            {edu.shortForm}
                          </div>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-4 text-muted-foreground">
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2 text-ios-blue" />
                            {edu.university}, {edu.location}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2 text-ios-blue" />
                            {edu.year}
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed">
                        {edu.description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-foreground">Key Areas of Study:</h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.highlights.map((highlight) => (
                            <span 
                              key={highlight}
                              className="px-3 py-1 bg-ios-blue-light text-ios-blue text-sm rounded-full border border-ios-blue/20"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Achievement */}
          <Card className="mt-12 bg-gradient-primary text-white shadow-large">
            <CardContent className="p-8 text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 bg-white/20 rounded-full">
                  <Award className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">Academic Excellence</h3>
              <p className="text-lg opacity-90 max-w-2xl mx-auto">
                Successfully completed both degrees with solid academic performance, 
                laying a strong theoretical and technical foundation for my iOS development career.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
