import { ShoppingCart, Plus } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Badge } from "./ui/badge";

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  category: string;
  inStock: boolean;
}

const ProductCard = ({ name, price, image, category, inStock }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-hover transition-all duration-300 hover:-translate-y-1">
      <div className="relative overflow-hidden aspect-square bg-accent">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {!inStock && (
          <div className="absolute inset-0 bg-foreground/60 flex items-center justify-center">
            <Badge variant="secondary" className="text-sm">Out of Stock</Badge>
          </div>
        )}
        <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
          {category}
        </Badge>
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-1">{name}</h3>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-primary">${price.toFixed(2)}</span>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button 
          className="w-full gap-2 bg-primary hover:bg-primary/90 text-primary-foreground"
          disabled={!inStock}
        >
          <ShoppingCart className="h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
