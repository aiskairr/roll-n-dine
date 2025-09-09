import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/de6b3c99-57eb-43fd-9dcf-928d4c354f9f.png" 
              alt="Sakura Premium Logo" 
              className="h-12 w-auto"
            />
          </div>
          
          <div className="flex items-center gap-6">
            <Button
              variant="ghost"
              onClick={() => scrollToSection('pizza')}
              className="text-foreground hover:text-primary"
            >
              Пицца
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection('sushi')}
              className="text-foreground hover:text-primary"
            >
              Суши
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary"
            >
              Контакты
            </Button>
            <Button className="gradient-sakura text-primary-foreground shadow-sakura">
              Заказать
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;