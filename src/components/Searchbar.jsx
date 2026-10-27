import React, { useState } from 'react';
import { 
  Search, 
  Navigation, 
  Building, 
  Trees, 
  Building2, 
  Palmtree, 
  Landmark, 
  MapPin, 
  Castle, 
  Globe2, 
  Compass, 
  Mountain, 
  Hotel,
  Plus, 
  Minus, 
 Calendar as CalendarIcon,
 ChevronLeft,
  ChevronRight
} from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Separator } from "@/components/ui/separator";

export default function Searchbar({ isExpanded, setIsExpanded }) {
  const [activeTab, setActiveTab] = useState(null); 
  const [selectedDestination, setSelectedDestination] = useState('');

  const [dateTab, setDateTab] = useState("dates"); // 'dates' ya 'flexible'
  const [selectedDate, setSelectedDate] = useState(null);

  const [stayDuration, setStayDuration] = useState("Weekend"); // 'Weekend', 'Week', 'Month'
  const [selectedMonth, setSelectedMonth] = useState("November");

  const [guests, setGuests] = useState({ adults: 0, children: 0 });

  const monthsData = [
    { name: "November", year: "2026" },
    { name: "December", year: "2026" },
    { name: "January", year: "2027" },
    { name: "February", year: "2027" },
    { name: "March", year: "2027" },
    { name: "April", year: "2027" },
    { name: "May", year: "2027" },
    { name: "June", year: "2027" },
    { name: "July", year: "2027"},
    { name: "August", year: "2027"},
    { name: "September", year: "2027"},
    { name: "October", year: "2027"},


    
  ];
  const getWhenDisplayText = () => {
    if (dateTab === "flexible") {
      return `${stayDuration} in ${selectedMonth}`;
    }
    return selectedDate ? selectedDate.toLocaleDateString() : 'Add dates';
  };

  // Tamam cities ke liye customized destinations array
 const destinations = [
    { id: 'nearby', name: 'Nearby', subtitle: "Find what's around you", icon: Navigation, iconColor: 'text-blue-500', bgColor: 'bg-blue-50' },
    { id: 'karachi', name: 'Karachi, Pakistan', subtitle: 'City of lights & beaches', icon: Building, iconColor: 'text-amber-600', bgColor: 'bg-amber-50' },
    { id: 'islamabad', name: 'Islamabad, Pakistan', subtitle: 'For sights like Faisal Mosque', icon: Trees, iconColor: 'text-orange-500', bgColor: 'bg-orange-50' },
    { id: 'lahore', name: 'Lahore, Pakistan', subtitle: 'Rich cultural heritage', icon: Building2, iconColor: 'text-emerald-600', bgColor: 'bg-emerald-50' },
    { id: 'hyderabad', name: 'Hyderabad,Pakistan', subtitle: 'City of breezes & history', icon: Compass, iconColor: 'text-teal-600', bgColor: 'bg-teal-50' },
    { id: 'nawabshah', name: 'Nawabshah,Pakistan', subtitle: 'Heart of Sindh agricultural hub', icon: MapPin, iconColor: 'text-rose-600', bgColor: 'bg-rose-50' },
    { id: 'paris', name: 'Paris, France', subtitle: 'For sights like Eiffel Tower', icon: Landmark, iconColor: 'text-indigo-600', bgColor: 'bg-indigo-50' },
    { id: 'nice', name: 'Nice, France', subtitle: 'French Riviera coastline', icon: Palmtree, iconColor: 'text-sky-600', bgColor: 'bg-sky-50' },
    { id: 'berlin', name: 'Berlin, Germany', subtitle: 'Vibrant art & history', icon: Castle, iconColor: 'text-amber-700', bgColor: 'bg-amber-100' },
    { id: 'hamburg', name: 'Hamburg, Germany', subtitle: 'Major port city & canals', icon: Globe2, iconColor: 'text-cyan-600', bgColor: 'bg-cyan-50' },
    { id: 'madrid', name: 'Madrid, Spain', subtitle: 'Royal palaces & museums', icon: Landmark, iconColor: 'text-red-600', bgColor: 'bg-red-50' },
    { id: 'zaragoza', name: 'Zaragoza, Spain', subtitle: 'Folk art & Roman ruins', icon: Castle, iconColor: 'text-orange-600', bgColor: 'bg-orange-100' },
    { id: 'roma', name: 'Roma, italy', subtitle: 'Ancient ruins & Colosseum', icon: Landmark, iconColor: 'text-yellow-700', bgColor: 'bg-yellow-50' },
    { id: 'bologna', name: 'Bologna, italy', subtitle: 'Medieval towers & food', icon: Building, iconColor: 'text-red-700', bgColor: 'bg-red-100' },
    { id: 'london', name: 'London, England', subtitle: 'Iconic landmarks & culture', icon: Landmark, iconColor: 'text-blue-700', bgColor: 'bg-blue-100' },
    { id: 'leeds', name: 'Leeds, England', subtitle: 'Lively Victorian architecture', icon: Building2, iconColor: 'text-violet-600', bgColor: 'bg-violet-50' },
    { id: 'bern', name: 'Bern, Switzerland', subtitle: 'UNESCO medieval old town', icon: Mountain, iconColor: 'text-emerald-700', bgColor: 'bg-emerald-100' },
    { id: 'zurich', name: 'Zurich, Switzerland', subtitle: 'Alpine views & banking hub', icon: Mountain, iconColor: 'text-blue-600', bgColor: 'bg-blue-50' },
    { id: 'riyad', name: 'Riyad, Saudi', subtitle: 'Modern skyscrapers & heritage', icon: Hotel, iconColor: 'text-amber-600', bgColor: 'bg-amber-50' },
    { id: 'jeddah', name: 'Jeddah, Saudi', subtitle: 'Red Sea port & coastal charm', icon: Palmtree, iconColor: 'text-teal-600', bgColor: 'bg-teal-50' },
    { id: 'sharjah', name: 'Sharjah,United Arab Emirates', subtitle: 'Cultural capital of UAE', icon: Building, iconColor: 'text-purple-600', bgColor: 'bg-purple-50' },
    { id: 'abudahbi', name: 'abudahbi,United Arab Emitarates', subtitle: 'Grand mosques & luxury', icon: Landmark, iconColor: 'text-amber-500', bgColor: 'bg-amber-50' },
    { id: 'dubai', name: 'Dubai, United Arab Emirates', subtitle: 'Popular beach destination', icon: Landmark, iconColor: 'text-purple-600', bgColor: 'bg-purple-50' }
  ];

  const updateGuests = (type, operation) => {
    setGuests((prev) => {
      const current = prev[type];
      const updated = operation === 'inc' ? current + 1 : Math.max(0, current - 1);
      return { ...prev, [type]: updated };
    });
  };

  const totalGuests = guests.adults + guests.children;

  return (
    <div className="w-full flex justify-center px-4 transition-all duration-300">
      {!isExpanded ? (
        <div 
          onClick={() => setIsExpanded(true)}
          className="flex items-center border border-gray-300 rounded-full py-2 px-4 shadow-sm hover:shadow-md cursor-pointer transition-all duration-300 gap-3 text-xs sm:text-sm font-semibold text-gray-700 bg-white"
        >
          <span>Anywhere</span>
          <Separator orientation="vertical" className="h-4" />
          <span>Anytime</span>
          <Separator orientation="vertical" className="h-4" />
          <span className="text-gray-400 font-normal">Add guests</span>
          <div className="bg-rose-600 hover:bg-rose-700 w-8 h-8 rounded-full text-white flex items-center justify-center p-0">
            <Search className="w-4 h-4" />
          </div>
        </div>
      ) : (
        <div className="hidden md:flex items-center border border-gray-200 shadow-xl rounded-full bg-white p-2 justify-between w-full max-w-4xl transition-all relative">
          
          {/* 1. WHERE POPOVER */}
          <Popover open={activeTab === 'where'} onOpenChange={(open) => setActiveTab(open ? 'where' : null)}>
            <PopoverTrigger asChild>
              <div 
                className={`flex-1 flex flex-col justify-center px-6 py-2 rounded-full cursor-pointer transition-colors ${
                  activeTab === 'where' ? 'bg-gray-100 shadow-sm' : 'hover:bg-gray-100/70'
                }`}
              >
                <span className="text-xs font-bold text-gray-800">Where</span>
                <span className="text-sm text-gray-500 truncate">
                  {selectedDestination || 'Search destinations'}
                </span>
              </div>
            </PopoverTrigger>
            
            <PopoverContent align="start" className="w-96 p-4 rounded-3xl mt-3 shadow-2xl border-gray-100 bg-white">
              <p className="text-xs font-bold text-gray-500 px-2 mb-3">Suggested destinations</p>
              
              <div className="space-y-1 max-h-80 overflow-y-auto pr-1">
                {destinations.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <div
                      key={item.id}
                      onClick={() => {
                        setSelectedDestination(item.name);
                        setActiveTab('when');
                      }}
                      className="flex items-center gap-4 p-2.5 rounded-2xl hover:bg-gray-100 cursor-pointer transition-colors"
                    >
                      <div className={`p-3 rounded-2xl ${item.bgColor} ${item.iconColor} flex items-center justify-center flex-shrink-0`}>
                        <IconComponent className="w-8 h-8 stroke-1" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-gray-800">{item.name}</span>
                        <span className="text-xs text-gray-500 font-normal">{item.subtitle}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </PopoverContent>
          </Popover>

          <Separator orientation="vertical" className="h-8" />

         {/* 2. WHEN POPOVER */}
          <Popover open={activeTab === 'when'} onOpenChange={(open) => setActiveTab(open ? 'when' : null)}>
            <PopoverTrigger asChild>
              <div 
                className={`flex-1 flex flex-col justify-center px-6 py-2 rounded-full cursor-pointer transition-colors ${
                  activeTab === 'when' ? 'bg-gray-100 shadow-sm' : 'hover:bg-gray-100/70'
                }`}
              >
                <span className="text-xs font-bold text-gray-800">When</span>
                <span className="text-sm text-gray-500 truncate">
                  {getWhenDisplayText()}
                </span>
              </div>
            </PopoverTrigger>
            
            <PopoverContent align="center" className="w-[660px] p-6 rounded-3xl mt-3 shadow-2xl border-gray-100 bg-white">
              {/* Tab Switch Buttons */}
              <div className="flex justify-center mb-6">
                <div className="bg-gray-100 p-1 rounded-full flex gap-1">
                  <button
                    type="button"
                    onClick={() => setDateTab("dates")}
                    className={`px-8 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                      dateTab === "dates" ? "bg-white text-black shadow-sm" : "text-gray-600 hover:text-black"
                    }`}
                  >
                    Dates
                  </button>
                  <button
                    type="button"
                    onClick={() => setDateTab("flexible")}
                    className={`px-8 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                      dateTab === "flexible" ? "bg-white text-black shadow-sm" : "text-gray-600 hover:text-black"
                    }`}
                  >
                    Flexible
                  </button>
                </div>
              </div>

              {/* Flexible View Container */}
              {dateTab === "flexible" && (
                <div className="flex flex-col gap-6">
                  {/* Duration Controls */}
                  <div className="text-center">
                    <h3 className="text-sm font-bold text-slate-800 mb-3">
                      Stay for a {stayDuration.toLowerCase()}
                    </h3>
                    <div className="flex justify-center gap-2">
                      {["Weekend", "Week", "Month"].map((duration) => (
                        <button
                          key={duration}
                          type="button"
                          onClick={() => setStayDuration(duration)}
                          className={`px-5 py-2 rounded-full border text-sm font-medium transition cursor-pointer ${
                            stayDuration === duration
                              ? "border-black bg-gray-50 font-semibold text-black"
                              : "border-gray-200 hover:border-black text-gray-700"
                          }`}
                        >
                          {duration}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Horizontal Months Carousel Slider */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-sm font-bold text-slate-800 text-center w-full">
                        Go in {selectedMonth}
                      </h3>
                    </div>

                    <div className="relative flex items-center px-6">
                      {/* Left Scroll Arrow */}
                      <button
                        type="button"
                        onClick={() => {
                          document.getElementById('month-slider').scrollBy({ left: -200, behavior: 'smooth' });
                        }}
                        className="absolute left-0 z-10 p-2 bg-white border border-gray-200 rounded-full shadow-md hover:scale-105 transition cursor-pointer"
                      >
                        <ChevronLeft className="w-4 h-4 text-gray-700" />
                      </button>

                      {/* Horizontal Scroll Container */}
                      <div 
                        id="month-slider"
                        className="flex gap-3 overflow-x-auto scroll-smooth py-2 px-1 w-full no-scrollbar"
                      >
                        {monthsData.map((m) => {
                          const isSelected = selectedMonth === m.name;
                          return (
                            <div
                              key={m.name}
                              onClick={() => setSelectedMonth(m.name)}
                              className={`min-w-115px p-4 border-2 rounded-2xl flex flex-col items-center justify-center gap-2 cursor-pointer transition-all ${
                                isSelected
                                  ? "border-black bg-gray-50 shadow-sm"
                                  : "border-gray-200 hover:border-gray-400"
                              }`}
                            >
                              <CalendarIcon className={`w-7 h-7 ${isSelected ? "text-black" : "text-gray-400"}`} />
                              <div className="text-center">
                                <p className="text-xs font-bold text-slate-900">{m.name}</p>
                                <p className="text-[10px] text-gray-500">{m.year}</p>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Right Scroll Arrow */}
                      <button
                        type="button"
                        onClick={() => {
                          document.getElementById('month-slider').scrollBy({ left: 200, behavior: 'smooth' });
                        }}
                        className="absolute right-0 z-10 p-2 bg-white border border-gray-200 rounded-full shadow-md hover:scale-105 transition cursor-pointer"
                      >
                        <ChevronRight className="w-4 h-4 text-gray-700" />
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Standard Calendar View */}
              {dateTab === "dates" && (
                <Calendar
                  mode="single"
                  numberOfMonths={2}
                  selected={selectedDate}
                  onSelect={(date) => {
                    setSelectedDate(date);
                    if (date) setActiveTab('who');
                  }}
                  className="rounded-2xl"
                />
              )}
            </PopoverContent>
          </Popover>
          <Separator orientation="vertical" className="h-8" />

          {/* 3. WHO POPOVER */}
          <Popover open={activeTab === 'who'} onOpenChange={(open) => setActiveTab(open ? 'who' : null)}>
            <PopoverTrigger asChild>
              <div 
                className={`flex-1 flex items-center justify-between pl-6 pr-2 py-1 rounded-full cursor-pointer transition-colors ${
                  activeTab === 'who' ? 'bg-gray-100 shadow-sm' : 'hover:bg-gray-100/70'
                }`}
              >
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-gray-800">Who</span>
                  <span className="text-sm text-gray-500 truncate">
                    {totalGuests > 0 ? `${totalGuests} guest${totalGuests > 1 ? 's' : ''}` : 'Add guests'}
                  </span>
                </div>
                
                <button className="bg-rose-600 hover:bg-rose-700 text-white rounded-full h-12 w-12 p-0 flex items-center justify-center shadow-md">
                  <Search className="w-5 h-5 stroke-[2.5]" />
                </button>
              </div>
            </PopoverTrigger>
            
            <PopoverContent align="end" className="w-80 p-6 rounded-3xl mt-3 shadow-2xl border-gray-100 bg-white space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-sm text-gray-800">Adults</p>
                  <p className="text-xs text-gray-500">Ages 13 or above</p>
                </div>
                <div className="flex items-center gap-3">
                  <button 
                    type="button"
                    className="h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-black disabled:opacity-40"
                    onClick={() => updateGuests('adults', 'dec')}
                    disabled={guests.adults === 0}
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="w-4 text-center text-sm font-semibold">{guests.adults}</span>
                  <button 
                    type="button"
                    className="h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-black"
                    onClick={() => updateGuests('adults', 'inc')}
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                </div>
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-sm text-gray-800">Children</p>
                  <p className="text-xs text-gray-500">Ages 2–12</p>
                </div>
                <div className="flex items-center gap-3">
                  <button 
                    type="button"
                    className="h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-black disabled:opacity-40"
                    onClick={() => updateGuests('children', 'dec')}
                    disabled={guests.children === 0}
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="w-4 text-center text-sm font-semibold">{guests.children}</span>
                  <button 
                    type="button"
                    className="h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-black"
                    onClick={() => updateGuests('children', 'inc')}
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </PopoverContent>
          </Popover>

        </div>
      )}
    </div>
  );
}