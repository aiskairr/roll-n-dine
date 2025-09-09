import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PizzaMenu from "@/components/PizzaMenu";
import SushiMenu from "@/components/SushiMenu";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <PizzaMenu />
        <SushiMenu />
        <Contact />
      </main>
      <footer className="bg-accent text-accent-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <img 
              src="/lovable-uploads/de6b3c99-57eb-43fd-9dcf-928d4c354f9f.png" 
              alt="Sakura Premium" 
              className="h-8 w-auto mr-3"
            />
            <span className="text-lg font-semibold">SAKURA PREMIUM</span>
          </div>
          <p className="text-sm text-accent-foreground/70">
            © 2024 Sakura Premium. Все права защищены.
          </p>
          <p className="text-xs text-accent-foreground/50 mt-2">
            Японская кухня и итальянская пицца в одном месте
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;