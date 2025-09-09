import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SushiMenu = () => {
  const sushiRolls = [
    {
      name: "Филадельфия",
      weight: "265г",
      price: 420,
      ingredients: ["Нори", "Рис (135г)", "Творожный сыр (50г)", "Огурцы (20г)", "Лосось (60г)"],
      isPopular: true
    },
    {
      name: "Калифорния",
      weight: "225г",
      price: 360,
      ingredients: ["Нори", "Рис (135г)", "Краб микс (50г)", "Авокадо (10г)", "Огурцы (10г)", "Оранж мосаго (20г)"]
    },
    {
      name: "Темпура с лососем",
      weight: "265г",
      price: 480,
      ingredients: ["Нори", "Рис (135г)", "Творожный сыр (20г)", "Лосось (30г)", "Огурцы (15г)", "Зеленый лук (5г)", "Кляр, панировка (60г)"]
    },
    {
      name: "Канада с угрем",
      weight: "265г",
      price: 520,
      ingredients: ["Нори", "Рис (135г)", "Сыр творожный (50г)", "Огурцы (20г)", "Угорь (40г)", "Соус унаги (10г)", "Кунжут (10г)"]
    },
    {
      name: "Аляска",
      weight: "225г",
      price: 380,
      ingredients: ["Нори", "Рис (135г)", "Лосось (40г)", "Майонез (10г)", "Авокадо (10г)", "Огурцы (10г)", "Мосаго (20г)"]
    },
    {
      name: "Филадельфия Лайт",
      weight: "245г",
      price: 380,
      ingredients: ["Нори", "Рис (135г)", "Творожный сыр (50г)", "Огурцы (20г)", "Лосось (40г)"]
    },
    {
      name: "Кани Темпура",
      weight: "265г",
      price: 420,
      ingredients: ["Нори", "Рис (135г)", "Творожный сыр (20г)", "Краб микс (30г)", "Огурцы (15г)", "Мосаго (5г)", "Кляр, панировка (60г)"]
    },
    {
      name: "Темпура с угрем",
      weight: "275г",
      price: 550,
      ingredients: ["Нори", "Рис (135г)", "Творожный сыр (20г)", "Угорь (30г)", "Авокадо (20г)", "Кляр, панировка (60г)", "Унаги соус, кунжут (10г)"]
    },
    {
      name: "Запеченный вулкан",
      weight: "255г",
      price: 480,
      ingredients: ["Рис (135г)", "Творожный сыр (20г)", "Огурцы (10г)", "Омлет (20г)", "Дайкон (10г)", "Смесь шапка лосось (60г)"]
    },
    {
      name: "Бонито",
      weight: "225г",
      price: 340,
      ingredients: ["Нори", "Рис (135г)", "Творожный сыр (40г)", "Лосось (30г)", "Зеленый лук (10г)", "Стружка тунца (10г)"]
    },
    {
      name: "Криспи креветка",
      weight: "215г",
      price: 390,
      ingredients: ["Нори", "Рис (135г)", "Креветки в кляре (2шт, 40г)", "Спайси соус (15г)", "Огурцы (15г)", "Черный мосаго (10г)"]
    },
    {
      name: "Ясай (овощной)",
      weight: "190г",
      price: 280,
      ingredients: ["Нори", "Рис (135г)", "Салат айсберг (15г)", "Чука (15г)", "Перец болгарский (10г)", "Кунжут (15г)"],
      isVegetarian: true
    }
  ];

  return (
    <section id="sushi" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Суши & Роллы
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Свежие ингредиенты, традиционные рецепты
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sushiRolls.map((roll, index) => (
            <Card key={index} className="menu-section hover:shadow-elegant transition-all duration-300 relative">
              {roll.isPopular && (
                <Badge className="absolute -top-2 -right-2 bg-primary text-primary-foreground shadow-sakura">
                  Популярное
                </Badge>
              )}
              {roll.isVegetarian && (
                <Badge className="absolute -top-2 -right-2 bg-green-500 text-white">
                  Вегетарианское
                </Badge>
              )}
              
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-foreground flex items-center justify-between">
                  {roll.name}
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">{roll.price}₽</div>
                    <div className="text-sm text-muted-foreground">{roll.weight}</div>
                  </div>
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-3">
                  <h4 className="font-medium text-foreground">Состав:</h4>
                  <div className="space-y-1">
                    {roll.ingredients.map((ingredient, idx) => (
                      <div key={idx} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        {ingredient}
                      </div>
                    ))}
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

export default SushiMenu;