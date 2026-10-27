



import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter 
} from "./card";

import { Button } from "./Button";
import { Star, ShoppingCart } from "lucide-react";
export default function PropertyCard({ item }) {
  if (!item) return null;

  return (
    <Card className="w-full max-w-sm overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 bg-white">
      
      {/* Property Image / Carousel area */}
      <div className="relative h-64 w-full bg-slate-100 overflow-hidden">
        <img 
          src={item.images?.[0]?.image || item.image} 
          alt={item.title} 
          className="w-full h-full object-cover rounded-t-3xl"
        />
        {/* Badge */}
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold shadow-md text-gray-800">
          {item.badge || "Guest favorite"}
        </div>
      </div>

      {/* Card Header & Content (Shadcn components use karte huay) */}
      <CardHeader className="p-4 pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="font-bold text-base text-slate-900 truncate max-w-200px">
            {item.title}
          </CardTitle>
          <div className="flex items-center gap-1 text-sm font-semibold">
            <Star className="w-4 h-4 fill-black stroke-black" />
            <span>{item.rating || "5.0"}</span>
          </div>
        </div>
        <CardDescription className="text-xs text-gray-500 line-clamp-1 pt-1">
          {item.description}
        </CardDescription>
      </CardHeader>

      {/* Card Footer: Price & Add to Cart / Details Button */}
      <CardFooter className="p-4 pt-2 flex items-center justify-between border-t border-gray-100 mt-2">
        <div className="flex flex-col">
          <span className="text-xs text-gray-400">Price</span>
          <span className="text-sm font-bold text-slate-900">
            {item.price || "Rs 55,000"} <span className="text-xs font-normal text-gray-500">/ night</span>
          </span>
        </div>

        <Button 
          onClick={(e) => {
            e.stopPropagation();
            console.log("Added to cart:", item.title);
          }} 
          className="bg-rose-600 hover:bg-rose-700 text-white flex items-center gap-1.5 rounded-xl px-3 py-2 h-9 text-xs font-semibold cursor-pointer transition-all"
        >
          <ShoppingCart className="w-3.5 h-3.5" />
          Add to Cart
        </Button>
      </CardFooter>

    </Card>
  );
}