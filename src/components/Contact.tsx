import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Контакты
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Мы всегда рады видеть вас в Sakura Premium
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="menu-section text-center hover:shadow-elegant transition-all duration-300">
            <CardHeader>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-xl">Телефон</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">Звоните для заказа или бронирования</p>
              <Button variant="outline" className="w-full">
                +7 (999) 123-45-67
              </Button>
            </CardContent>
          </Card>

          <Card className="menu-section text-center hover:shadow-elegant transition-all duration-300">
            <CardHeader>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-xl">Адрес</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">Приходите к нам в гости</p>
              <p className="font-medium">ул. Сакура, 25</p>
              <p className="text-muted-foreground">г. Москва, 101000</p>
            </CardContent>
          </Card>

          <Card className="menu-section text-center hover:shadow-elegant transition-all duration-300 md:col-span-2 lg:col-span-1">
            <CardHeader>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-xl">Время работы</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Пн-Чт:</span>
                  <span className="font-medium">11:00 - 23:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Пт-Сб:</span>
                  <span className="font-medium">11:00 - 01:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Воскресенье:</span>
                  <span className="font-medium">12:00 - 23:00</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="gradient-sakura text-primary-foreground shadow-sakura px-8 py-3">
            Забронировать столик
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;