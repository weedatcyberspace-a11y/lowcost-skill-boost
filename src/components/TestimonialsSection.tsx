import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Wanjiku",
      role: "Digital Marketing Manager",
      company: "Safaricom",
      rating: 5,
      content: "The Digital Marketing course transformed my career completely. Within 2 months of completing the program, I landed my dream job at Safaricom. The instructors were incredibly knowledgeable and the course content was up-to-date with industry trends.",
      course: "Digital Marketing Fundamentals",
    },
    {
      name: "John Kiprotich",
      role: "Data Analyst",
      company: "Kenya Commercial Bank",
      rating: 5,
      content: "I had no prior experience with data analysis, but the Excel course made everything so clear and practical. The step-by-step approach and real-world projects helped me build confidence. Now I'm working as a data analyst at KCB!",
      course: "Data Analysis with Excel",
    },
    {
      name: "Grace Achieng",
      role: "Project Coordinator",
      company: "World Vision Kenya",
      rating: 5,
      content: "The Project Management course was exactly what I needed to advance in my NGO career. The certification gave me credibility and the skills I learned are invaluable in my daily work. Highly recommend CertifyPro!",
      course: "Project Management Professional",
    },
    {
      name: "David Muthomi",
      role: "Small Business Owner",
      company: "Tech Solutions Ltd",
      rating: 5,
      content: "As a small business owner, I needed to understand my finances better. The Financial Accounting course was perfect - practical, affordable, and taught by experts. Now I manage my business finances with confidence.",
      course: "Financial Accounting",
    },
    {
      name: "Mary Njeri",
      role: "Customer Service Lead",
      company: "Equity Bank",
      rating: 5,
      content: "The Customer Service Excellence course helped me get promoted to team lead. The techniques I learned improved my performance ratings dramatically. The investment in this course paid off within months!",
      course: "Customer Service Excellence",
    },
    {
      name: "Peter Ochieng",
      role: "Junior Developer",
      company: "iHub Nairobi",
      rating: 5,
      content: "Starting from zero programming knowledge, the Web Development course gave me the foundation I needed. The hands-on projects and supportive community made learning enjoyable. Now I'm building websites professionally!",
      course: "Web Development Basics",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-success text-success-foreground">
            Success Stories
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-6">
            What Our Graduates Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Hear from real graduates who have transformed 
            their careers with CertifyPro training programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gradient-card border-border/50 shadow-card hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <Quote className="h-6 w-6 text-primary mb-4" />
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center space-x-3 mb-4">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-sm text-primary font-medium">{testimonial.company}</div>
                  </div>
                </div>

                <Badge variant="outline" className="text-xs">
                  {testimonial.course}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-accent rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-accent-foreground mb-4">
              Join 5,000+ Successful Graduates
            </h3>
            <p className="text-accent-foreground/80 mb-6">
              Our graduates work at leading companies including Safaricom, Equity Bank, KCB, 
              World Vision, and hundreds of other organizations across Kenya.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-accent-foreground/60">
              <span>• 94% course completion rate</span>
              <span>• 85% job placement within 3 months</span>
              <span>• Average salary increase of 40%</span>
              <span>• Lifetime career support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;