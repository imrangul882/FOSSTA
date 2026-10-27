import React, { useState } from "react";
import { 
  Dialog, 
  DialogContent, 
  DialogTrigger, 
  DialogHeader, 
  DialogTitle 
} from "./dialog";
import { Button } from "./button";

export default function ReserveModal({ children }) {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!phone.trim() || !email.trim()) {
      alert("Kripya phone number aur email address dono bharein!");
      return;
    }
    alert("Reservation Confirmed Successfully!");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-md rounded-4xl p-6 bg-white shadow-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-slate-900">
            Complete Your Reservation
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-2">
          <div>
            <label className="text-xs font-semibold text-gray-600">Phone Number</label>
            <input 
              type="text" 
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone number" 
              className="w-full mt-1 p-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-rose-500" 
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-gray-600">Email Address</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address" 
              className="w-full mt-1 p-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-rose-500" 
            />
          </div>

          <Button 
            type="submit"
            className="w-full bg-rose-600 hover:bg-rose-700 text-white font-bold py-3 rounded-xl text-sm shadow-md mt-2 cursor-pointer"
          >
            Confirm Reserve
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}