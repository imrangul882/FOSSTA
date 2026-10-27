import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/ui/Navbar";
import PropertyCarousel from "./components/PropertyCarousel";
import SearchBar from "./components/SearchBar";
import { Button } from "./components/ui/button";
import { Star, Gem, ArrowLeft } from "lucide-react";
import ReserveModal from "./components/ui/ReserveModal";

// Property objects (same as before)
const property1 = {
  title: "Super Car",
  description: "Those with a big heart and a taste for the finer things will buy this; it is a hallmark of a regal lifestyle.",
  badge: "Guest favorite",
  price: "Rs 5500000",
  images: [
    { image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=464&auto=format&fit=crop" },
    { image: "https://plus.unsplash.com/premium_photo-1686730540270-93f2c33351b6?q=80&w=1032&auto=format&fit=crop" }
  ]
};

const property2 = {
  title: "Modern Car Fast and easy",
  description: "Designed for ultimate comfort with high-speed connectivity and pristine panoramic views.",
  badge: "Guest favorite",
  price: "Rs 2500000",
  images: [
    { image: "https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=870&auto=format&fit=crop" }
  ]
};
const property3 = {
  title: "Modern Car Fast and easy",
  description: "Designed for ultimate comfort with high-speed connectivity and pristine panoramic views.",
  badge: "Guest favorite",
  price: "Rs 2500000",
  images: [
    { image: "https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=870&auto=format&fit=crop" }
  ]
};
const property4 = {
  title: "Modern Car Fast and easy",
  description: "Designed for ultimate comfort with high-speed connectivity and pristine panoramic views.",
  badge: "Guest favorite",
  price: "Rs 2500000",
  images: [
    { image: "https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=870&auto=format&fit=crop" }
  ]
};
const property5 = {
  title: "Modern Car Fast and easy",
  description: "Designed for ultimate comfort with high-speed connectivity and pristine panoramic views.",
  badge: "Guest favorite",
  price: "Rs 2500000",
  images: [
    { image: "https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=870&auto=format&fit=crop" }
  ]
};
const property6 = {
  title: "Modern Car Fast and easy",
  description: "Designed for ultimate comfort with high-speed connectivity and pristine panoramic views.",
  badge: "Guest favorite",
   price: "Rs 3200000",
  images: [
    { image: "https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=870&auto=format&fit=crop", heartColor: "fill-blue-400" },
    { image: "https://images.unsplash.com/photo-1608341089966-92c09e62214f?q=80&w=869&auto=format&fit=crop", heartColor: "fill-amber-400" }
  ]
};

const property7 = {
  title: "Modern Car Fast and easy",
  description: "Designed for ultimate comfort with high-speed connectivity and pristine panoramic views.",
  badge: "Guest favorite",
   price: "Rs 50 00000",
  images: [
    { image: "https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=870&auto=format&fit=crop", heartColor: "fill-blue-400" },
    { image: "https://images.unsplash.com/photo-1608341089966-92c09e62214f?q=80&w=869&auto=format&fit=crop", heartColor: "fill-amber-400" }
  ]
};

const property8 = {
  title: "Modern Car Fast and easy",
  description: "Designed for ultimate comfort with high-speed connectivity and pristine panoramic views.",
  badge: "Guest favorite",
   price: "Rs 5500000",
  images: [
    { image: "https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=870&auto=format&fit=crop", heartColor: "fill-blue-400" },
    { image: "https://images.unsplash.com/photo-1608341089966-92c09e62214f?q=80&w=869&auto=format&fit=crop", heartColor: "fill-amber-400" }
  ]
};

const property9 = {
  title: "Modern Car Fast and easy",
  description: "Designed for ultimate comfort with high-speed connectivity and pristine panoramic views.",
  badge: "Guest favorite",
   price: "Rs 6500000",
  images: [
    { image: "https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=870&auto=format&fit=crop", heartColor: "fill-blue-400" },
    { image: "https://images.unsplash.com/photo-1608341089966-92c09e62214f?q=80&w=869&auto=format&fit=crop", heartColor: "fill-amber-400" }
  ]
};

const property10 = {
  title: "Modern Car Fast and easy",
  description: "Designed for ultimate comfort with high-speed connectivity and pristine panoramic views.",
  badge: "Guest favorite",
   price: "Rs 4400000",
  images: [
    { image: "https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=870&auto=format&fit=crop", heartColor: "fill-blue-400" },
    { image: "https://images.unsplash.com/photo-1608341089966-92c09e62214f?q=80&w=869&auto=format&fit=crop", heartColor: "fill-amber-400" }
  ]
};

const property11 = {
  title: "Modern Car Fast and easy",
  description: "Designed for ultimate comfort with high-speed connectivity and pristine panoramic views.",
  badge: "Guest favorite",
   price: "Rs 6500000",
  images: [
    { image: "https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=870&auto=format&fit=crop", heartColor: "fill-blue-400" },
    { image: "https://images.unsplash.com/photo-1608341089966-92c09e62214f?q=80&w=869&auto=format&fit=crop", heartColor: "fill-amber-400" }
  ]
};
const property12 = {
  title: "Modern Car Fast and easy",
  description: "Designed for ultimate comfort with high-speed connectivity and pristine panoramic views.",
  badge: "Guest favorite",
   price: "Rs 9500000",
  images: [
    { image: "https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=870&auto=format&fit=crop", heartColor: "fill-blue-400" },
    { image: "https://images.unsplash.com/photo-1608341089966-92c09e62214f?q=80&w=869&auto=format&fit=crop", heartColor: "fill-amber-400" }
  ]
};
const property13 = {
  title: "Modern Car Fast and easy",
  description: "Designed for ultimate comfort with high-speed connectivity and pristine panoramic views.",
  badge: "Guest favorite",
   price: "Rs 9500000",
  images: [
    { image: "https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=870&auto=format&fit=crop", heartColor: "fill-blue-400" },
    { image: "https://images.unsplash.com/photo-1608341089966-92c09e62214f?q=80&w=869&auto=format&fit=crop", heartColor: "fill-amber-400" }
  ]
};
const property14 = {
  title: "Modern Car Fast and easy",
  description: "Designed for ultimate comfort with high-speed connectivity and pristine panoramic views.",
  badge: "Guest favorite",
   price: "Rs 9500000",
  images: [
    { image: "https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=870&auto=format&fit=crop", heartColor: "fill-blue-400" },
    { image: "https://images.unsplash.com/photo-1608341089966-92c09e62214f?q=80&w=869&auto=format&fit=crop", heartColor: "fill-amber-400" }
  ]
};
const property15 = {
  title: "Modern Car Fast and easy",
  description: "Designed for ultimate comfort with high-speed connectivity and pristine panoramic views.",
  badge: "Guest favorite",
   price: "Rs 9500000",
  images: [
    { image: "https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=870&auto=format&fit=crop", heartColor: "fill-blue-400" },
    { image: "https://images.unsplash.com/photo-1608341089966-92c09e62214f?q=80&w=869&auto=format&fit=crop", heartColor: "fill-amber-400" }
  ]
};

const priceProperty = {
  title: "Exclusive Villa Listing",
  description: "Premium investment opportunity featuring top-tier architectural mastery.",
  images: [
    { image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=464&auto=format&fit=crop", price: "Rs 2600000", heartColor: "fill-teal-400" },
    { image: "https://plus.unsplash.com/premium_photo-1686730540270-93f2c33351b6?q=80&w=1032&auto=format&fit=crop", price: "Rs 4800000", heartColor: "fill-teal-950" }
  ]
};



function App() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [selectedProperty, setSelectedProperty] = useState(null); // Detail page ke liye state

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsExpanded(false);
      } else {
        setIsExpanded(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // AGAR KOI PROPERTY CLICK HUI HAI, TOH AIRBNB STYLE DETAIL PAGE DIKHAYEIN
  if (selectedProperty) {
    return (
      <div className="min-h-screen bg-white">
        {/* Navbar */}
        <Navbar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />

        {/* Back Button */}
        <div className="max-w-6xl mx-auto px-6 pt-24 pb-4">
          <Button 
            onClick={() => setSelectedProperty(null)}
            variant="ghost" 
            className="flex items-center gap-2 text-slate-800 font-semibold cursor-pointer hover:bg-gray-100 rounded-xl"
          >
            <ArrowLeft className="w-4 h-4" /> Back to list
          </Button>
        </div>

        {/* Airbnb Detail Container */}
        <div className="max-w-6xl mx-auto px-6 pb-12">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">{selectedProperty.title} in Karachi, Pakistan</h1>
          
          {/* Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 min-h-svh rounded-3xl overflow-hidden mb-8">
           <ReserveModal>
            <div className="md:col-span-2 h-full pb-20 pt-20 cursor-pointer overflow-hidden rounded-full">
              <img 
              src={selectedProperty.images?.[0]?.image} 
              alt="" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            </ReserveModal>

            <div className="hidden md:flex flex-col gap-4 md:col-span-2 h-full">
               <ReserveModal>
              <div className="h-1/3 mt-20 ml-10 overflow-hidden rounded-full">
                <img src={selectedProperty.images?.[1]?.image || selectedProperty.images?.[0]?.image} alt="" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              </ReserveModal>
              
               <ReserveModal>
              <div className="h-1/3  mt-20 ml-10 cursor-pointer overflow-hidden rounded-full">
                <img src={selectedProperty.images?.[0]?.image} alt=""
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              </ReserveModal>
            </div>
          </div>

          {/* Details & Reserve Section (2 Columns) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Left Info */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <div>
                <h2 className="text-xl font-bold text-slate-900">Entire rental unit hosted by FOSTTA</h2>
                <p className="text-sm text-gray-500 mt-1">3 guests · 1 bedroom · 2 beds · 2 baths</p>
              </div>

              <div className="border border-gray-200 rounded-2xl p-4 flex items-center justify-between bg-gray-50/50">
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12">
                    <img 
                    src={selectedProperty?.images?.[0]?.image || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=250&auto=format&fit=crophttps://media.istockphoto.com/id/961916182/photo/light-car-colorful.webp?s=1024x1024&w=is&k=20&c=dFtnw9_7zFKTk-0rEsKCk6wTTJPHEIfB3gtpRmIFJL8="} 
                    alt={selectedProperty?.title || "Property"}
                    className="w-full h-full rounded-full object-cover border border-gray-300" />
                  <div className="absolute -bottom-1 -right-1 bg-gray-500 text-white p-1 rounded-full text-10px shadow-md flex item-center justify-center w-5 h-5 border-2 border-white">
                    🏆
                    </div>
                    </div>
                  <div>
                    <p className="font-semibold text-sm">Guest favorite</p>
                    <p className="text-xs text-gray-500">One of the most loved homes on FOSTTA</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-lg font-bold">5.0 ★</span>
                  <p className="text-xs text-gray-500">20 Reviews</p>
                </div>
              </div>
              

              <p className="text-base text-gray-700 leading-relaxed">{selectedProperty.description}</p>
            </div>

            {/* Right Reserve Box (Airbnb Style) */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 border border-gray-200 rounded-3xl p-6 shadow-2xl bg-white flex flex-col gap-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-purple-700 bg-purple-50 p-3 rounded-xl">
                  <Gem className="w-4 h-4 text-rose-500" />
                  <span>Rare find! This place is usually booked</span>
                </div>

                <div>
                  <span className="text-3xl font-extrabold text-slate-900">{selectedProperty.price}</span>
                  <span className="text-sm text-gray-500"> / night</span>
                </div>

                {/* Check-in / Checkout box */}
                <div className="border border-gray-300 rounded-2xl overflow-hidden text-xs">
                  <div className="grid grid-cols-2 border-b border-gray-300">
                    <div className="p-3 border-r border-gray-300 bg-gray-50">
                      <p className="font-bold text-[10px] uppercase text-gray-500">CHECK-IN</p>
                      <p className="font-medium mt-1">11/6/2026</p>
                    </div>
                    <div className="p-3 bg-gray-50">
                      <p className="font-bold text-[10px] uppercase text-gray-500">CHECKOUT</p>
                      <p className="font-medium mt-1">11/8/2026</p>
                    </div>
                  </div>
                  <div className="p-3 bg-gray-50">
                    <p className="font-bold text-[10px] uppercase text-gray-500">GUESTS</p>
                    <p className="font-medium mt-1">1 guest</p>
                  </div>
                </div>

                {/* Reserve Button */}
                <Button 
                  onClick={() => alert("Booking Reserved Successfully!")}
                  className="w-full bg-rose-600 hover:bg-rose-700 text-white font-bold py-6 rounded-2xl text-base shadow-md transition-all cursor-pointer"
                >
                  Reserve
                </Button>

                <p className="text-center text-xs text-gray-400">You won't be charged yet</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }

  // DEFAULT VIEW: GRID OF CARDS
  return (
    <>
      <Navbar  />
      
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-md py-1 shadow-sm flex justify-center w-full">
        <SearchBar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
      </div>

      <div className="w-full px-6 py-6">
        <div className="flex flex-col gap-4 mb-6">
          <h1 className="text-2xl text-blue-800 font-bold">over100</h1>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-x-4 gap-y-6 items-start w-full">
           <PropertyCarousel item={property1} onSelect={setSelectedProperty}/>
          <PropertyCarousel item={property2} onSelect={setSelectedProperty}/>
          <PropertyCarousel item={property3} onSelect={setSelectedProperty}/>
          <PropertyCarousel item={property4} onSelect={setSelectedProperty}/>
          <PropertyCarousel item={property5} onSelect={setSelectedProperty}/>
          <PropertyCarousel item={property6} onSelect={setSelectedProperty}/>
          <PropertyCarousel item={property7} onSelect={setSelectedProperty}/>
          <PropertyCarousel item={property8} onSelect={setSelectedProperty}/>
          <PropertyCarousel item={property9} onSelect={setSelectedProperty}/>
          <PropertyCarousel item={property10} onSelect={setSelectedProperty}/>
          <PropertyCarousel item={property11} onSelect={setSelectedProperty}/>
          <PropertyCarousel item={property12} onSelect={setSelectedProperty}/>
          <PropertyCarousel item={property13} onSelect={setSelectedProperty}/>
          <PropertyCarousel item={property14} onSelect={setSelectedProperty}/>
          <PropertyCarousel item={property15} onSelect={setSelectedProperty}/>
          <PropertyCarousel item={priceProperty} onSelect={setSelectedProperty}/>
        </div>
      </div>
    </>
  );
}

export default App;