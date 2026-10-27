import React from 'react';
import { Button } from "@/components/ui/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu,User } from "lucide-react";

export default function Navbar({ isExpanded, setIsExpanded }) {
  return (
    <header className=" top-0 left-0 w-full z-50 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          
          {/* FOSTTA Logo (Fixed, Hover effect & Clickable) */}
          <a href="#" className="flex items-center gap-2">
            <div className="fixed top-4 left-6 z-50 flex h-10 px-4 items-center justify-center rounded-full bg-white font-extrabold text-3xl text-blue-900 shadow-md cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:bg-blue-50 hover:shadow-lg">             
              FOSTTA
            </div>
          </a>

          {/* Desktop Links & Book Button */}
          <div className="hidden lg:flex items-center gap-6 shrink-0 mr-30">    
            <nav className="flex items-center gap-5">
              <a href="#destinations" className="text-sm font-medium text-slate-600 hover:text-blue-600">Destinations</a>
              <a href="#tours" className="text-sm font-medium text-slate-600 hover:text-blue-600">Tours</a>
              <a href="#pricing" className="text-sm font-medium text-slate-600 hover:text-blue-600">Pricing</a>
              <a href="#reviews" className="text-sm font-medium text-slate-600 hover:text-blue-600">Reviews</a>
            </nav>
            <Button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white cursor-pointer transition hover:bg-blue-700">
              Book a Trip
            </Button>
          </div>
           
             

        <div className="fixed top-4 right-6 z-50 flex items-center gap-2">
  <div className="flex items-center border bg-gray-100 text-black rounded-full p-2 shrink-0 transition duration-300">
    <User className="w-6 h-6" />
  </div>
   
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button className="flex items-center border border-gray-100 rounded-full py-2 px-3 bg-gray-200 text-black hover:shadow-amber-300 cursor-pointer">
        <Menu className="w-6 h-6 bg-gray-200 text-black" />
      </Button>
    </DropdownMenuTrigger>
    
    <DropdownMenuContent align="start" sideOffset={10} className="w-64 rounded-2xl p-2 shadow-xl bg-white border border-gray-100">
      <DropdownMenuItem className="py-3 px-4 font-medium rounded-xl cursor-pointer hover:bg-gray-100">
        Languages & currency
      </DropdownMenuItem>
      <DropdownMenuItem className="py-3 px-4 font-medium rounded-xl cursor-pointer hover:bg-gray-100">
        Help Center
      </DropdownMenuItem>
      <DropdownMenuSeparator className="my-1 bg-gray-100" />
      <DropdownMenuItem className="py-3 px-4 font-medium rounded-xl cursor-pointer hover:bg-gray-100">
        Become a host
      </DropdownMenuItem>
      <DropdownMenuItem className="py-3 px-4 font-medium rounded-xl cursor-pointer hover:bg-gray-100">
        Refer a Host
      </DropdownMenuItem>
      <DropdownMenuSeparator className="my-1 bg-gray-100" />
      <DropdownMenuItem className="py-3 px-4 font-medium rounded-xl cursor-pointer hover:bg-gray-100">
        Log in or sign up
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</div>
        </div>
      </div>
    </header>
    
  );
}