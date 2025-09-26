import CourseCard from "./CourseCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter } from "lucide-react";

const CoursesSection = () => {
  const courses = [
    {
      title: "Digital Marketing Fundamentals",
      description: "Master the basics of digital marketing including SEO, social media, and email marketing. Perfect for beginners looking to start their marketing career.",
      price: "KSH 1,500",
      duration: "6 weeks",
      students: "2,341",
      rating: "4.9",
      level: "Beginner" as const,
      category: "Marketing",
    },
    {
      title: "Data Analysis with Excel",
      description: "Learn advanced Excel techniques for data analysis, visualization, and reporting. Essential skills for any business professional.",
      price: "KSH 1,800",
      duration: "4 weeks",
      students: "1,892",
      rating: "4.8",
      level: "Intermediate" as const,
      category: "Business",
    },
    {
      title: "Project Management Professional",
      description: "Comprehensive project management course covering methodologies, tools, and best practices. Prepare for PMP certification.",
      price: "KSH 2,000",
      duration: "8 weeks",
      students: "987",
      rating: "4.9",
      level: "Advanced" as const,
      category: "Management",
    },
    {
      title: "Web Development Basics",
      description: "Introduction to HTML, CSS, and JavaScript. Build your first website and understand modern web development practices.",
      price: "KSH 1,750",
      duration: "10 weeks",
      students: "3,456",
      rating: "4.7",
      level: "Beginner" as const,
      category: "Technology",
    },
    {
      title: "Financial Accounting",
      description: "Learn fundamental accounting principles, financial statements, and bookkeeping. Perfect for small business owners and finance professionals.",
      price: "KSH 1,650",
      duration: "6 weeks",
      students: "1,234",
      rating: "4.8",
      level: "Beginner" as const,
      category: "Finance",
    },
    {
      title: "Customer Service Excellence",
      description: "Develop exceptional customer service skills, handle complaints, and build customer loyalty. Essential for service industry professionals.",
      price: "KSH 1,200",
      duration: "3 weeks",
      students: "2,567",
      rating: "4.9",
      level: "Beginner" as const,
      category: "Business",
    },
  ];

  return (
    <section id="courses" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Professional Training Programs
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our comprehensive selection of industry-recognized certification courses. 
            All programs include expert instruction, hands-on projects, and official certificates.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 max-w-4xl mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search courses..." 
              className="pl-10"
            />
          </div>
          <Select>
            <SelectTrigger className="w-full md:w-48">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="marketing">Marketing</SelectItem>
              <SelectItem value="business">Business</SelectItem>
              <SelectItem value="technology">Technology</SelectItem>
              <SelectItem value="finance">Finance</SelectItem>
              <SelectItem value="management">Management</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Levels</SelectItem>
              <SelectItem value="beginner">Beginner</SelectItem>
              <SelectItem value="intermediate">Intermediate</SelectItem>
              <SelectItem value="advanced">Advanced</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View All Courses
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;