import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CreditCard, User, Phone, Mail, MapPin, BookOpen } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface Course {
  id: string;
  title: string;
  price: string;
  duration: string;
}

const EnrollmentPage = () => {
  const { toast } = useToast();
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    education: "",
    experience: "",
    motivation: "",
    agreeTerms: false,
    agreeMarketing: false,
  });

  const courses = [
    { id: "dm", title: "Digital Marketing Fundamentals", price: "KSH 1,500", duration: "6 weeks" },
    { id: "da", title: "Data Analysis with Excel", price: "KSH 1,800", duration: "4 weeks" },
    { id: "pm", title: "Project Management Professional", price: "KSH 2,000", duration: "8 weeks" },
    { id: "wd", title: "Web Development Basics", price: "KSH 1,750", duration: "10 weeks" },
    { id: "fa", title: "Financial Accounting", price: "KSH 1,650", duration: "6 weeks" },
    { id: "cs", title: "Customer Service Excellence", price: "KSH 1,200", duration: "3 weeks" },
  ];

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCourseSelect = (course: Course) => {
    setSelectedCourse(course);
    setCurrentStep(2);
  };

  const handleNextStep = () => {
    if (currentStep === 2) {
      // Validate form
      const requiredFields = ['firstName', 'lastName', 'email', 'phone'];
      const missingFields = requiredFields.filter(field => !formData[field]);
      
      if (missingFields.length > 0) {
        toast({
          title: "Required Fields Missing",
          description: "Please fill in all required fields to continue.",
          variant: "destructive",
        });
        return;
      }

      if (!formData.agreeTerms) {
        toast({
          title: "Terms & Conditions",
          description: "Please agree to the terms and conditions to proceed.",
          variant: "destructive",
        });
        return;
      }

      setCurrentStep(3);
      toast({
        title: "Details Submitted",
        description: "Please proceed with payment to complete your enrollment.",
      });
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Button variant="ghost" onClick={() => window.history.back()} className="mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Courses
          </Button>
          <h1 className="text-3xl font-bold text-foreground mb-2">Course Enrollment</h1>
          <p className="text-muted-foreground">Complete your enrollment in 3 simple steps</p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center space-x-4">
            <div className={`flex items-center justify-center w-10 h-10 rounded-full ${currentStep >= 1 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
              <BookOpen className="h-5 w-5" />
            </div>
            <div className={`h-1 w-16 ${currentStep >= 2 ? 'bg-primary' : 'bg-muted'}`}></div>
            <div className={`flex items-center justify-center w-10 h-10 rounded-full ${currentStep >= 2 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
              <User className="h-5 w-5" />
            </div>
            <div className={`h-1 w-16 ${currentStep >= 3 ? 'bg-primary' : 'bg-muted'}`}></div>
            <div className={`flex items-center justify-center w-10 h-10 rounded-full ${currentStep >= 3 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
              <CreditCard className="h-5 w-5" />
            </div>
          </div>
        </div>

        {/* Step 1: Course Selection */}
        {currentStep === 1 && (
          <Card>
            <CardHeader>
              <CardTitle>Step 1: Select Your Course</CardTitle>
              <CardDescription>Choose the course you'd like to enroll in</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {courses.map((course) => (
                  <Card 
                    key={course.id} 
                    className="cursor-pointer hover:shadow-card transition-all border-2 hover:border-primary"
                    onClick={() => handleCourseSelect(course)}
                  >
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">{course.title}</h3>
                      <div className="flex justify-between items-center">
                        <Badge variant="secondary">{course.duration}</Badge>
                        <span className="text-2xl font-bold text-primary">{course.price}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 2: Student Details */}
        {currentStep === 2 && selectedCourse && (
          <Card>
            <CardHeader>
              <CardTitle>Step 2: Your Details</CardTitle>
              <CardDescription>
                Enrolling in: <strong>{selectedCourse.title}</strong> - {selectedCourse.price}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Personal Information */}
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  Contact Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="+254 700 123 456"
                    />
                  </div>
                </div>
              </div>

              {/* Address Information */}
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  Address Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="address">Street Address</Label>
                    <Input
                      id="address"
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      placeholder="Enter your address"
                    />
                  </div>
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      value={formData.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      placeholder="Enter your city"
                    />
                  </div>
                </div>
              </div>

              {/* Background Information */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Background Information</h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="education">Education Level</Label>
                    <Select onValueChange={(value) => handleInputChange('education', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your education level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="high-school">High School</SelectItem>
                        <SelectItem value="diploma">Diploma</SelectItem>
                        <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                        <SelectItem value="master">Master's Degree</SelectItem>
                        <SelectItem value="phd">PhD</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="experience">Relevant Experience</Label>
                    <Textarea
                      id="experience"
                      value={formData.experience}
                      onChange={(e) => handleInputChange('experience', e.target.value)}
                      placeholder="Briefly describe any relevant work experience or skills"
                      rows={3}
                    />
                  </div>
                  <div>
                    <Label htmlFor="motivation">Why do you want to take this course?</Label>
                    <Textarea
                      id="motivation"
                      value={formData.motivation}
                      onChange={(e) => handleInputChange('motivation', e.target.value)}
                      placeholder="Tell us about your goals and what you hope to achieve"
                      rows={3}
                    />
                  </div>
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="space-y-4 pt-6 border-t">
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="terms"
                    checked={formData.agreeTerms}
                    onCheckedChange={(checked) => handleInputChange('agreeTerms', checked)}
                  />
                  <Label htmlFor="terms" className="text-sm leading-relaxed">
                    I agree to the <a href="#" className="text-primary hover:underline">Terms and Conditions</a> and 
                    <a href="#" className="text-primary hover:underline ml-1">Privacy Policy</a> *
                  </Label>
                </div>
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="marketing"
                    checked={formData.agreeMarketing}
                    onCheckedChange={(checked) => handleInputChange('agreeMarketing', checked)}
                  />
                  <Label htmlFor="marketing" className="text-sm leading-relaxed">
                    I would like to receive updates about new courses and special offers
                  </Label>
                </div>
              </div>

              <div className="flex justify-between pt-6">
                <Button variant="outline" onClick={handleBack}>
                  Back
                </Button>
                <Button onClick={handleNextStep} className="bg-gradient-primary">
                  Continue to Payment
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 3: Payment */}
        {currentStep === 3 && selectedCourse && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Order Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">{selectedCourse.title}</h3>
                      <p className="text-sm text-muted-foreground">Duration: {selectedCourse.duration}</p>
                    </div>
                    <span className="font-bold">{selectedCourse.price}</span>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center font-bold text-lg">
                      <span>Total</span>
                      <span className="text-primary">{selectedCourse.price}</span>
                    </div>
                  </div>

                  <div className="bg-accent rounded-lg p-4 mt-4">
                    <h4 className="font-semibold mb-2">Student Details:</h4>
                    <p className="text-sm">{formData.firstName} {formData.lastName}</p>
                    <p className="text-sm">{formData.email}</p>
                    <p className="text-sm">{formData.phone}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment */}
            <Card>
              <CardHeader>
                <CardTitle>Complete Payment</CardTitle>
                <CardDescription>
                  Secure payment powered by Pesapal
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-muted rounded-lg p-4">
                    <h4 className="font-semibold mb-2 flex items-center">
                      <CreditCard className="h-5 w-5 mr-2" />
                      Payment Options
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Pay securely using M-Pesa, Airtel Money, Credit/Debit Cards, or Bank Transfer
                    </p>
                    
                    {/* Pesapal Embed */}
                    <div className="border rounded-lg overflow-hidden">
                      <iframe 
                        width="100%" 
                        height="400" 
                        src="https://store.pesapal.com/embed-code?pageUrl=https://store.pesapal.com/usarichesportal" 
                        frameBorder="0" 
                        allowFullScreen
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="text-center">
                    <Button variant="outline" onClick={handleBack}>
                      Back to Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default EnrollmentPage;