import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-laundry.jpg";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/20 via-background to-background">
      {/* Floating Bubbles */}
      <div className="bubble w-16 h-16 top-20 left-10 opacity-40" style={{ animationDelay: '0s' }} />
      <div className="bubble w-24 h-24 top-40 right-20 opacity-30" style={{ animationDelay: '2s' }} />
      <div className="bubble w-20 h-20 bottom-32 left-1/4 opacity-35" style={{ animationDelay: '4s' }} />
      <div className="bubble w-12 h-12 top-1/3 right-1/3 opacity-40" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="slide-in-left space-y-8">
            <div className="inline-flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-full border border-accent/30">
              <Sparkles className="w-4 h-4 text-accent-foreground" />
              <span className="text-sm font-inter font-medium text-accent-foreground">Laundry Modern & Terpercaya</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-poppins leading-tight text-foreground">
              Baju Wangi,<br />
              <span className="text-secondary">Hari Jadi Happy</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground font-inter leading-relaxed">
              Laundry modern dengan layanan cepat, bersih, dan wangi. Dari anak kos sampai keluarga, semua bisa.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => scrollToSection('services')}
              >
                Order Now
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('calculator')}
              >
                Check Prices
              </Button>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative fade-in-up">
            <div className="relative rounded-3xl overflow-hidden shadow-card hover:shadow-xl transition-shadow duration-300">
              <img 
                src={heroImage} 
                alt="Fresh clean laundry service" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-secondary text-secondary-foreground px-6 py-4 rounded-2xl shadow-card animate-bounce-gentle">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
                <span className="font-poppins font-semibold">Siap Melayani 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
