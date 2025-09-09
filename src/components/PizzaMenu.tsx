import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const PizzaMenu = () => {
  const pizzas = [
    {
      name: "РИО-25",
      basePrice: [25, 30, 35],
      ingredients: [
        { name: "Тесто", price: [240, 340, 440] },
        { name: "Соус Ранч", price: [20, 30, 40] },
        { name: "Цыпленок", price: [40, 60, 80] },
        { name: "Сыр моцарелла", price: [80, 110, 150] },
        { name: "Пепперони", price: [20, 30, 40] },
        { name: "Томаты", price: [25, 35, 45] },
        { name: "Красный лук", price: [15, 20, 25] },
        { name: "Бургер соус", price: [20, 30, 40] }
      ]
    },
    {
      name: "Четыре сезона",
      basePrice: [25, 30, 35],
      ingredients: [
        { name: "Тесто", price: [240, 340, 440] },
        { name: "Пицца соус", price: [30, 50, 70] },
        { name: "Сыр моцарелла", price: [80, 110, 150] },
        { name: "Пепперони", price: [20, 30, 40] },
        { name: "Цыпленок", price: [15, 20, 30] },
        { name: "Томаты", price: [20, 25, 40] },
        { name: "Ветчина и грибы", price: [25, 30, 40] }
      ]
    },
    {
      name: "Огненная Пеппер",
      basePrice: [25, 30, 35],
      ingredients: [
        { name: "Тесто", price: [240, 340, 440] },
        { name: "Пицца соус", price: [30, 50, 70] },
        { name: "Сыр моцарелла", price: [80, 110, 150] },
        { name: "Пепперони", price: [50, 80, 110] },
        { name: "Красный лук", price: [10, 20, 30] },
        { name: "Халапеньо", price: [30, 40, 60] }
      ]
    },
    {
      name: "Маргарита",
      basePrice: [25, 30, 35],
      ingredients: [
        { name: "Тесто", price: [240, 340, 440] },
        { name: "Пицца соус", price: [30, 50, 70] },
        { name: "Сыр моцарелла", price: [80, 110, 150] },
        { name: "Томаты", price: [50, 80, 110] },
        { name: "Прованс/травы", price: [3, 4, 5] }
      ]
    },
    {
      name: "Пепперони",
      basePrice: [25, 30, 35],
      ingredients: [
        { name: "Тесто", price: [240, 340, 440] },
        { name: "Пицца соус", price: [30, 50, 70] },
        { name: "Сыр моцарелла", price: [80, 110, 150] },
        { name: "Пепперони", price: [50, 80, 110] },
        { name: "Прованс/травы", price: [2, 3, 4] }
      ]
    },
    {
      name: "Цыпленок BBQ",
      basePrice: [25, 30, 35],
      ingredients: [
        { name: "Пицца соус", price: [30, 50, 70] },
        { name: "Цыпленок", price: [50, 80, 110] },
        { name: "Сыр моцарелла", price: [80, 110, 150] },
        { name: "Красный лук", price: [15, 20, 25] },
        { name: "Соус BBQ", price: [15, 20, 25] }
      ]
    }
  ];

  const sizes = ["Маленькая", "Средняя", "Большая"];

  const calculateTotalPrice = (pizza: any, sizeIndex: number) => {
    const basePrice = pizza.basePrice[sizeIndex];
    const ingredientsTotal = pizza.ingredients.reduce((sum: number, ingredient: any) => 
      sum + ingredient.price[sizeIndex], 0
    );
    return basePrice + ingredientsTotal;
  };

  return (
    <section id="pizza" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Пицца
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Итальянские традиции с японским качеством
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pizzas.map((pizza, index) => (
            <Card key={index} className="menu-section hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-foreground flex items-center justify-between">
                  {pizza.name}
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    от {pizza.basePrice[0]}₽
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {sizes.map((size, sizeIndex) => (
                    <div key={sizeIndex} className="flex justify-between items-center p-3 rounded-lg bg-secondary/50">
                      <span className="font-medium text-foreground">{size}</span>
                      <span className="font-bold text-primary">
                        {calculateTotalPrice(pizza, sizeIndex)}₽
                      </span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-3 border-t border-border">
                  <h4 className="font-medium text-foreground mb-2">Состав:</h4>
                  <div className="flex flex-wrap gap-1">
                    {pizza.ingredients.slice(0, 5).map((ingredient, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {ingredient.name}
                      </Badge>
                    ))}
                    {pizza.ingredients.length > 5 && (
                      <Badge variant="outline" className="text-xs">
                        +{pizza.ingredients.length - 5}
                      </Badge>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PizzaMenu;