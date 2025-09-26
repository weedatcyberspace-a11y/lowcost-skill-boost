import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, Users, Award } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
              🏆 Certified Training Programs
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Professional Training & 
              <span className="block text-secondary-glow">Certification</span>
            </h1>
            
            <p className="text-xl mb-8 text-white/90 max-w-lg">
              Advance your career with legitimate, industry-recognized certifications. 
              Quality training programs starting from just <strong>KSH 1,500</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 shadow-elegant"
                onClick={() => window.location.href = '/enroll'}
              >
                Browse Courses
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                Learn More
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-6 text-white/80">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <span>5,000+ Students</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5" />
                <span>15+ Certifications</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 fill-current" />
                <span>4.9/5 Rating</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-8 shadow-glow animate-float">
              <h3 className="text-2xl font-bold mb-6 text-center">Why Choose CertifyPro?</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-secondary-glow flex-shrink-0" />
                  <span>Industry-recognized certificates</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-secondary-glow flex-shrink-0" />
                  <span>Expert instructors with 10+ years experience</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-secondary-glow flex-shrink-0" />
                  <span>Affordable pricing under KSH 2,000</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-secondary-glow flex-shrink-0" />
                  <span>24/7 support and lifetime access</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-secondary-glow flex-shrink-0" />
                  <span>Job placement assistance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;