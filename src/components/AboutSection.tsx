import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Award, BookOpen, Users, Trophy, CheckCircle, Globe } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { icon: Users, label: "Students Trained", value: "5,000+" },
    { icon: Award, label: "Certifications Issued", value: "3,500+" },
    { icon: BookOpen, label: "Course Completion Rate", value: "94%" },
    { icon: Trophy, label: "Industry Partnerships", value: "25+" },
  ];

  const accreditations = [
    "Kenya Association of Training Institutes (KATI)",
    "Technical and Vocational Education and Training Authority (TVETA)",
    "Kenya Bureau of Standards (KEBS)",
    "International Organization for Standardization (ISO 9001:2015)",
  ];

  return (
    <section id="about" className="py-20 bg-accent/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary text-primary-foreground">
            About CertifyPro
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Trusted Training Institution
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Since 2018, CertifyPro has been Kenya's leading provider of professional training and certification programs. 
            We are committed to delivering quality education that empowers individuals and transforms careers.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center bg-gradient-card border-border/50 shadow-card">
              <CardContent className="p-6">
                <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - About Content */}
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Why CertifyPro is Your Best Choice
            </h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground">Government Recognized</h4>
                  <p className="text-muted-foreground">All our programs are approved by TVETA and meet national standards.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground">Industry Expert Instructors</h4>
                  <p className="text-muted-foreground">Learn from professionals with 10+ years of real-world experience.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground">Affordable Excellence</h4>
                  <p className="text-muted-foreground">Premium quality training at prices that won't break the bank.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground">Job Placement Support</h4>
                  <p className="text-muted-foreground">85% of our graduates find employment within 3 months of completion.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Accreditations */}
          <div>
            <Card className="bg-gradient-card border-border/50 shadow-elegant">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Globe className="h-8 w-8 text-primary" />
                  <h3 className="text-2xl font-bold text-foreground">Accredited & Certified</h3>
                </div>
                
                <p className="text-muted-foreground mb-6">
                  CertifyPro is officially accredited by leading educational and industry bodies:
                </p>
                
                <div className="space-y-3">
                  {accreditations.map((accreditation, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Award className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground font-medium">{accreditation}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-accent rounded-lg">
                  <p className="text-sm text-accent-foreground">
                    <strong>Certificate Validity:</strong> All certificates are digitally verifiable and 
                    recognized by employers across Kenya and East Africa.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;