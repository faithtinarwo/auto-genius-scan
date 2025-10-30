import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, Car, Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Booking = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    vehicle: "",
    service: "",
    date: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to a backend
    toast({
      title: "Booking Request Sent!",
      description: "We'll contact you shortly to confirm your appointment.",
    });
    setFormData({
      name: "",
      phone: "",
      email: "",
      vehicle: "",
      service: "",
      date: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="booking" className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
              BOOK YOUR <span className="text-primary">SERVICE</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Schedule your car diagnostics appointment today
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <Card className="p-8 space-y-6 bg-card shadow-[var(--shadow-card)] border-2">
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Phone</p>
                    <a href="tel:+263780567523" className="text-muted-foreground hover:text-primary transition-colors">
                      +263 78 056 7523
                    </a>
                    <br />
                    <a href="tel:+263772123789" className="text-muted-foreground hover:text-primary transition-colors">
                      077 212 3789
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <a href="mailto:Josephtishashe@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                      Josephtishashe@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Location</p>
                    <p className="text-muted-foreground">Harare, Zimbabwe</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Business Hours</p>
                    <p className="text-muted-foreground">Mon - Fri: 8:00 AM - 5:00 PM</p>
                    <p className="text-muted-foreground">Sat: 8:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <Button 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold"
                  asChild
                >
                  <a href="tel:+263780567523">
                    <Phone className="mr-2 h-5 w-5" />
                    CALL NOW
                  </a>
                </Button>
              </div>
            </Card>

            {/* Booking Form */}
            <Card className="p-8 bg-card shadow-[var(--shadow-card)] border-2">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background border-2"
                  />
                </div>
                
                <div>
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="bg-background border-2"
                  />
                </div>

                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-background border-2"
                  />
                </div>

                <div>
                  <Input
                    name="vehicle"
                    placeholder="Vehicle Make & Model"
                    value={formData.vehicle}
                    onChange={handleChange}
                    required
                    className="bg-background border-2"
                  />
                </div>

                <div>
                  <Input
                    name="service"
                    placeholder="Service Needed"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="bg-background border-2"
                  />
                </div>

                <div>
                  <Input
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="bg-background border-2"
                  />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Additional Details"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="bg-background border-2"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  BOOK APPOINTMENT
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
