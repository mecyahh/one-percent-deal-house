"use client";

import { useState } from "react";

export default function NewDealPage() {
  const [form, setForm] = useState({
    clientName: "",
    clientPhone: "",
    clientDob: "",
    company: "",
    coverageAmount: "",
    monthlyPremium: "",
    product: "",
    beneficiary: "",
    draftDate: "",
    source: "",
    notes: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("Deal Submitted:", form);
    alert("Deal submitted (mock)");
  }

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-2xl font-semibold mb-6">Submit New Deal</h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <input
          name="clientName"
          placeholder="Client Name"
          onChange={handleChange}
          className="input"
        />

        <input
          name="clientPhone"
          placeholder="Client Phone Number"
          onChange={handleChange}
          className="input"
        />

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

        {/* Company */}
        <select name="company" onChange={handleChange} className="input">
          <option value="">Select Company</option>
          <option>Americo</option>
          <option>Aetna</option>
          <option>AIG</option>
          <option>Royal Neighbors</option>
          <option>Transamerica</option>
          <option>Mutual Of Omaha</option>
          <option>American Amicable</option>
          <option>Aflac</option>
          <option>Sentinel</option>
        </select>

        <input
          name="coverageAmount"
          placeholder="Coverage Amount"
          onChange={handleChange}
          className="input"
        />

        <input
          name="monthlyPremium"
          placeholder="Monthly Premium"
          onChange={handleChange}
          className="input"
        />

        <input
          name="product"
          placeholder="Product"
          onChange={handleChange}
          className="input"
        />

        <input
          name="beneficiary"
          placeholder="Beneficiary"
          onChange={handleChange}
          className="input"
        />

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
        <select
          name="source"
          onChange={handleChange}
          className="input"
        >
          <option value="">Source</option>
          <option value="Inbound">Inbound</option>
          <option value="Readymode">Readymode</option>
          <option value="AI Transfer">AI Transfer</option>
          <option value="Warm Market">Warm Market</option>
          <option value="Book">Book</option>
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
        .input::placeholder {
          color: rgba(255, 255, 255, 0.6);
        }
      `}</style>
    </div>
  );
}
