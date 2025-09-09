import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToMenu = () => {
    const element = document.getElementById('pizza');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-background to-secondary">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <img 
            src="/lovable-uploads/de6b3c99-57eb-43fd-9dcf-928d4c354f9f.png" 
            alt="Sakura Premium" 
            className="h-32 w-auto mx-auto mb-8"
          />
          
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
            Добро пожаловать в
            <span className="block text-primary">SAKURA PREMIUM</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Уникальное сочетание японской кухни и итальянской пиццы. 
            Откройте для себя вкус совершенства.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              onClick={scrollToMenu}
              className="gradient-sakura text-primary-foreground shadow-sakura px-8 py-3 text-lg"
            >
              Посмотреть меню
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-3 text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Забронировать столик
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;