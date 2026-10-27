import React from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "./ui/carousel";
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardFooter 
} from "./ui/card";
import { Heart, Star } from "lucide-react";

export default function PropertyCarousel({ item, onSelect }) {
  if (!item) return null;

  return (
    <Card 
      onClick={() => onSelect(item)} // Card par click karne se detail view khulega
      className="w-full max-w-sm overflow-hidden rounded-l shadow-md hover:shadow-xl transition-all duration-300 border border-gray-50 bg-white cursor-pointer group p-0 gap-0"
    >
      {/* Image Slider Carousel */}
      <Carousel className="w-full relative">
        <CarouselContent>
          {item.images?.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative flex h-64 items-center justify-center bg-slate-200 overflow-hidden">
                <img 
                  src={slide.image} 
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover" 
                />
                
                {/* Badge */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold shadow-md text-gray-800 z-10">
                  {slide.badge || item.badge || "Guest favorite"}
                </div>

                {/* Heart Button */}
                <button 
                  onClick={(e) => e.stopPropagation()} 
                  className="absolute top-3 right-3 text-white hover:scale-110 transition-transform duration-200 z-10"
                >
                  <Heart className="w-6 h-6 fill-slate-700 stroke-white stroke-2" />
                </button>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious onClick={(e) => e.stopPropagation()} className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-black border-none shadow-md z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <CarouselNext onClick={(e) => e.stopPropagation()} className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-black border-none shadow-md z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </Carousel>

      {/* Card Header */}
      <CardHeader className="p-4 pb-1">
        <div className="flex justify-between items-start">
          <CardTitle className="font-bold text-base text-slate-900 truncate max-w-200px">
            {item.title}
          </CardTitle>
          <div className="flex items-center gap-1 text-sm font-semibold shrink-0">
            <Star className="w-4 h-4 fill-black stroke-black" />
            <span>{item.rating || "5.0"}</span>
          </div>
        </div>
        <CardDescription className="text-xs text-gray-500 line-clamp-1 pt-0.5">
          {item.description}
        </CardDescription>
      </CardHeader>

      {/* Card Footer */}
      <CardFooter className="p-4 pt-2 flex items-center justify-between border-t border-gray-100 mt-2">
        <div className="flex flex-col">
          <span className="text-xs text-gray-400">Price</span>
          <span className="text-sm font-bold text-slate-900">
            {item.price || "Rs 55,000"} <span className="text-xs font-normal text-gray-500">/ night</span>
          </span>
        </div>
      </CardFooter>
    </Card>
  );
}