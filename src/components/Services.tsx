import { Clock, Zap, Rocket, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    name: "Normal",
    duration: "3 Hari",
    price: "8.000",
    icon: Clock,
    color: "from-primary/20 to-primary/10",
    delay: "0s"
  },
  {
    name: "Fast",
    duration: "2 Hari",
    price: "10.000",
    icon: Zap,
    color: "from-accent/20 to-accent/10",
    delay: "0.1s"
  },
  {
    name: "Ngebut",
    duration: "1 Hari",
    price: "12.000",
    icon: Rocket,
    color: "from-secondary/20 to-secondary/10",
    delay: "0.2s"
  },
  {
    name: "Kilat",
    duration: "3 Jam",
    price: "20.000",
    icon: Sparkles,
    color: "from-accent/30 to-accent/20",
    delay: "0.3s"
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Background Bubbles */}
      <div className="bubble w-32 h-32 top-10 right-10 opacity-20" style={{ animationDelay: '1s' }} />
      <div className="bubble w-24 h-24 bottom-20 left-20 opacity-25" style={{ animationDelay: '3s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-foreground mb-4">
            Pilih Paket Laundry
          </h2>
          <p className="text-lg text-muted-foreground font-inter max-w-2xl mx-auto">
            Sesuaikan dengan kebutuhan kamu. Semua paket dijamin bersih dan wangi!
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.name}
                className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-300 hover:scale-105 hover:-translate-y-2 border border-border/50 fade-in-up"
                style={{ animationDelay: service.delay }}
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-foreground" />
                </div>
                
                <h3 className="text-2xl font-bold font-poppins text-foreground mb-2">
                  {service.name}
                </h3>
                
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground font-inter">{service.duration}</span>
                </div>
                
                <div className="text-3xl font-bold font-poppins text-secondary mb-6">
                  Rp {service.price}
                  <span className="text-sm text-muted-foreground font-normal">/kg</span>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-secondary group-hover:text-secondary-foreground group-hover:border-secondary"
                  onClick={() => {
                    const calculator = document.getElementById('calculator');
                    calculator?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Pilih Paket
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
