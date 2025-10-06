import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import croissantImage from "@/assets/croissant.jpg";
import breadImage from "@/assets/bread.jpg";
import cakeImage from "@/assets/cake.jpg";
import macaronsImage from "@/assets/macarons.jpg";

const Products = () => {
  const products = [
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
    {
      id: 5,
      name: "Almond Croissant",
      price: 5.99,
      image: croissantImage,
      category: "Pastry",
      inStock: true,
    },
    {
      id: 6,
      name: "Whole Wheat Bread",
      price: 7.99,
      image: breadImage,
      category: "Bread",
      inStock: false,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1">
        {/* Header */}
        <section className="bg-gradient-hero py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4">Our Products</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our full collection of freshly baked goods, made with love and the finest ingredients
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Products;
