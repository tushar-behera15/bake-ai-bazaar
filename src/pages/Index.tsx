import { ArrowRight, Clock, Shield, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import heroImage from "@/assets/hero-bakery.jpg";
import croissantImage from "@/assets/croissant.jpg";
import breadImage from "@/assets/bread.jpg";
import cakeImage from "@/assets/cake.jpg";
import macaronsImage from "@/assets/macarons.jpg";

const Index = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Butter Croissant",
      price: 4.99,
      image: croissantImage,
      category: "Pastry",
      inStock: true,
    },
    {
      id: 2,
      name: "Sourdough Bread",
      price: 8.99,
      image: breadImage,
      category: "Bread",
      inStock: true,
    },
    {
      id: 3,
      name: "Chocolate Cake",
      price: 24.99,
      image: cakeImage,
      category: "Cake",
      inStock: true,
    },
    {
      id: 4,
      name: "French Macarons",
      price: 12.99,
      image: macaronsImage,
      category: "Dessert",
      inStock: true,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                  ✨ Fresh Daily Since 2025
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Artisan Bakery
                <br />
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Delivered Fresh
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-lg">
                Experience the perfect blend of traditional baking methods and modern convenience. 
                Order your favorite baked goods online and enjoy them fresh at your doorstep.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/products">
                  <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground shadow-soft hover:shadow-hover transition-all">
                    Browse Products
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button size="lg" variant="outline" className="gap-2">
                    Learn More
                  </Button>
                </Link>
              </div>

              {/* Features */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-2">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-sm font-medium">Fresh Daily</p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-2">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-sm font-medium">Quality Assured</p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-2">
                    <Sparkles className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-sm font-medium">Handcrafted</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video rounded-3xl overflow-hidden shadow-hover">
                <img 
                  src={heroImage} 
                  alt="Artisan Bakery" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary/20 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Products</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our most loved baked goods, made fresh daily with premium ingredients
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/products">
              <Button size="lg" variant="outline" className="gap-2">
                View All Products
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-warm">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl font-bold">Ready to Order?</h2>
            <p className="text-xl text-muted-foreground">
              Create an account to start ordering delicious baked goods delivered to your door
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/signup">
                <Button size="lg" className="gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                  Sign Up Now
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/login">
                <Button size="lg" variant="outline">
                  Login
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
