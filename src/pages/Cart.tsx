import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

const Cart = () => {
  // Placeholder for cart items - will be managed with state/backend
  const cartItems = [];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 bg-background">
        <section className="bg-gradient-hero py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center">Shopping Cart</h1>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-16">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-accent mb-6">
                  <ShoppingBag className="h-12 w-12 text-muted-foreground" />
                </div>
                <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
                <p className="text-muted-foreground mb-8">Start adding some delicious baked goods!</p>
                <Link to="/products">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    Browse Products
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Cart Items */}
                <div className="lg:col-span-2 space-y-4">
                  {/* Cart items will be rendered here */}
                </div>

                {/* Order Summary */}
                <div>
                  <Card className="p-6 sticky top-24">
                    <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span className="font-medium">$0.00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Delivery</span>
                        <span className="font-medium">$5.00</span>
                      </div>
                      <div className="border-t pt-3 flex justify-between">
                        <span className="font-semibold text-lg">Total</span>
                        <span className="font-bold text-lg text-primary">$5.00</span>
                      </div>
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      Proceed to Checkout
                    </Button>
                  </Card>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
