import { createRoot } from "react-dom/client";
import Coffee from "./Coffee";

const App = () => {
  return (
    <div>
      <h1>Metal & Lattes ☕️ – Order Now</h1>
      <Coffee
        name="Classic Americano"
        description="Bold espresso shots diluted with hot water for a smooth, rich flavor"
      />
      <Coffee
        name="Vanilla Latte"
        description="Creamy steamed milk combined with espresso and vanilla syrup, topped with foam"
      />
      <Coffee
        name="Cappuccino"
        description="Equal parts espresso, steamed milk, and velvety microfoam for a balanced cup"
      />
      <Coffee
        name="Caramel Macchiato"
        description="Vanilla-flavored latte with caramel drizzle and a crosshatch pattern on top"
      />
      <Coffee
        name="Flat White"
        description="Velvety microfoam poured over a double shot of espresso for a strong, smooth taste"
      />
      <Coffee
        name="Mocha"
        description="Rich chocolate and espresso blended with steamed milk and topped with whipped cream"
      />
      <Coffee
        name="Cortado"
        description="Equal parts espresso and warm milk, reducing acidity while retaining coffee strength"
      />
      <Coffee
        name="Café au Lait"
        description="French-style coffee with equal parts brewed coffee and steamed milk"
      />
      <Coffee
        name="Turkish Coffee"
        description="Finely ground coffee simmered in a special pot, served unfiltered with grounds"
      />
      <Coffee
        name="Hazelnut Latte"
        description="Espresso and steamed milk sweetened with hazelnut syrup for a nutty twist"
      />
    </div>
  );
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
