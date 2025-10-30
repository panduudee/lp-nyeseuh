import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { PriceCalculator } from "@/components/PriceCalculator";
import { OrderTracking } from "@/components/OrderTracking";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background font-inter">
      <Hero />
      <Services />
      <PriceCalculator />
      <OrderTracking />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default Index;
