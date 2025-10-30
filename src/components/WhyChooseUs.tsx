import { Droplet, Clock, Truck, Sparkles } from "lucide-react";

const features = [
  {
    icon: Droplet,
    title: "Bersih & Wangi",
    description: "Menggunakan deterjen premium untuk hasil maksimal",
    color: "from-primary/20 to-primary/10",
    delay: "0s"
  },
  {
    icon: Clock,
    title: "Tepat Waktu",
    description: "Garansi selesai sesuai jadwal yang dijanjikan",
    color: "from-secondary/20 to-secondary/10",
    delay: "0.1s"
  },
  {
    icon: Truck,
    title: "Antar Jemput",
    description: "Layanan pickup dan delivery gratis area tertentu",
    color: "from-accent/20 to-accent/10",
    delay: "0.2s"
  },
  {
    icon: Sparkles,
    title: "Deterjen Premium",
    description: "Produk berkualitas tinggi untuk pakaian Anda",
    color: "from-primary/30 to-primary/20",
    delay: "0.3s"
  }
];

export const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
      {/* Floating Icons Background */}
      <div className="bubble w-20 h-20 top-10 right-20 opacity-20" style={{ animationDelay: '1s' }} />
      <div className="bubble w-16 h-16 bottom-20 left-10 opacity-25" style={{ animationDelay: '2s' }} />
      <div className="bubble w-24 h-24 top-1/2 right-1/4 opacity-15" style={{ animationDelay: '4s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-foreground mb-4">
            Kenapa Pilih <span className="text-secondary">SuganLaundry</span>?
          </h2>
          <p className="text-lg text-muted-foreground font-inter max-w-2xl mx-auto">
            Kami berkomitmen memberikan layanan terbaik untuk pakaian Anda
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group text-center fade-in-up"
                style={{ animationDelay: feature.delay }}
              >
                <div className="relative mb-6">
                  <div className={`w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-soft`}>
                    <Icon className="w-12 h-12 text-foreground" />
                  </div>
                  <div className="absolute inset-0 w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-primary/5 to-transparent blur-xl group-hover:blur-2xl transition-all duration-300" />
                </div>
                
                <h3 className="text-xl font-bold font-poppins text-foreground mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground font-inter leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
