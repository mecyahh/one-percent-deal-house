"use client";

import { useState } from "react";

const carriers = [
  { name: "Americo", icon: "🛡️" },
  { name: "Aetna", icon: "🛡️" },
  { name: "AIG", icon: "🛡️" },
  { name: "Royal Neighbors", icon: "🛡️" },
  { name: "Transamerica", icon: "🛡️" },
  { name: "Mutual Of Omaha", icon: "🛡️" },
  { name: "American Amicable", icon: "🛡️" },
  { name: "Aflac", icon: "🛡️" },
  { name: "Sentinel", icon: "🛡️" },
];

export default function NewDealPage() {
  const [form, setForm] = useState<any>({});
  const [carrierOpen, setCarrierOpen] = useState(false);

  function handleChange(e: any) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function selectCarrier(name: string) {
    setForm({ ...form, company: name });
    setCarrierOpen(false);
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    console.log("Deal Submitted:", form);
    alert("Deal submitted (mock)");
  }

  return (
    <div className="max-w-3xl mx-auto p-8 text-white">
      <h1 className="text-2xl font-semibold mb-6">Submit New Deal</h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <input name="clientName" placeholder="Client Name" onChange={handleChange} className="input" />
        <input name="clientPhone" placeholder="Client Phone Number" onChange={handleChange} className="input" />

        {/* DOB */}
        <input
          type="text"
          name="clientDob"
          placeholder="DOB"
          onFocus={(e) => (e.target.type = "date")}
          onBlur={(e) => !e.target.value && (e.target.type = "text")}
          onChange={handleChange}
          className="input"
        />

        {/* Company Dropdown (Custom) */}
        <div className="relative">
          <div
            onClick={() => setCarrierOpen(!carrierOpen)}
            className="input cursor-pointer flex items-center justify-between"
          >
            <span>
              {form.company
                ? carriers.find(c => c.name === form.company)?.icon + " " + form.company
                : "Select Company"}
            </span>
            <span>▾</span>
          </div>

          {carrierOpen && (
            <div className="absolute z-10 mt-2 w-full rounded-lg bg-[#111] border border-white/20">
              {carriers.map((c) => (
                <div
                  key={c.name}
                  onClick={() => selectCarrier(c.name)}
                  className="px-4 py-2 flex items-center gap-2 hover:bg-white/10 cursor-pointer"
                >
                  <span>{c.icon}</span>
                  <span>{c.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <input name="coverageAmount" placeholder="Coverage Amount" onChange={handleChange} className="input" />
        <input name="monthlyPremium" placeholder="Monthly Premium" onChange={handleChange} className="input" />
        <input name="product" placeholder="Product" onChange={handleChange} className="input" />
        <input name="beneficiary" placeholder="Beneficiary" onChange={handleChange} className="input" />

        {/* Draft Date */}
        <input
          type="text"
          name="draftDate"
          placeholder="Draft Date"
          onFocus={(e) => (e.target.type = "date")}
          onBlur={(e) => !e.target.value && (e.target.type = "text")}
          onChange={handleChange}
          className="input"
        />

        {/* Source */}
        <select name="source" onChange={handleChange} className="input">
          <option value="">Source</option>
          <option>Inbound</option>
          <option>Readymode</option>
          <option>AI Transfer</option>
          <option>Warm Market</option>
          <option>Book</option>
        </select>

        <textarea
          name="notes"
          placeholder="Notes"
          onChange={handleChange}
          className="input md:col-span-2 h-28"
        />

        <button
          type="submit"
          className="md:col-span-2 mt-4 p-3 rounded bg-white text-black font-medium hover:bg-gray-200 transition"
        >
          Submit Deal
        </button>
      </form>

      <style jsx>{`
        .input {
          width: 100%;
          padding: 12px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: white;
        }
      `}</style>
    </div>
  );
}
