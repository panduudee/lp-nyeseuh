import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rizki Ahmad",
    role: "Mahasiswa",
    text: "Laundry kilat beneran cepat! Baju pagi dikasih, sore udah beres. Wangi banget!",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rizki"
  },
  {
    name: "Siti Nurhaliza",
    role: "Ibu Rumah Tangga",
    text: "Praktis banget ada layanan antar jemput. Harga juga masuk akal untuk kualitas yang didapat.",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Siti"
  },
  {
    name: "Budi Santoso",
    role: "Karyawan",
    text: "Sudah langganan 6 bulan, gak pernah telat. Pelayanan ramah, hasil selalu memuaskan.",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Budi"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
      <div className="bubble w-20 h-20 top-20 left-10 opacity-20" style={{ animationDelay: '0s' }} />
      <div className="bubble w-16 h-16 bottom-20 right-20 opacity-25" style={{ animationDelay: '3s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-foreground mb-4">
            Kata Pelanggan Kami
          </h2>
          <p className="text-lg text-muted-foreground font-inter max-w-2xl mx-auto">
            Ribuan pelanggan puas telah mempercayakan laundry mereka kepada kami
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-300 hover:scale-105 border border-border/50 fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full border-2 border-primary/30"
                />
                <div>
                  <h3 className="font-bold font-poppins text-foreground">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground font-inter">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              
              <p className="text-muted-foreground font-inter leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
