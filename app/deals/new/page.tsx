"use client";

import { useState } from "react";

export default function NewDealPage() {
  const [form, setForm] = useState({
    borrower: "",
    amount: "",
    state: "",
    dealType: "",
    notes: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("Deal submitted:", form);

    // Webhook will be added next
    alert("Deal submitted (mock)");
  }

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-2xl font-semibold mb-6">Submit New Deal</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="borrower"
          placeholder="Borrower Name"
          onChange={handleChange}
          className="w-full p-3 rounded bg-white/10 border border-white/10"
        />

        <input
          name="amount"
          placeholder="Loan Amount"
          onChange={handleChange}
          className="w-full p-3 rounded bg-white/10 border border-white/10"
        />

        <input
          name="state"
          placeholder="Property State"
          onChange={handleChange}
          className="w-full p-3 rounded bg-white/10 border border-white/10"
        />

        <select
          name="dealType"
          onChange={handleChange}
          className="w-full p-3 rounded bg-white/10 border border-white/10"
        >
          <option value="">Select Deal Type</option>
          <option value="DSCR">DSCR</option>
          <option value="Fix & Flip">Fix & Flip</option>
          <option value="Bridge">Bridge</option>
        </select>

        <textarea
          name="notes"
          placeholder="Notes"
          onChange={handleChange}
          className="w-full p-3 rounded bg-white/10 border border-white/10"
        />

        <button
          type="submit"
          className="w-full p-3 rounded bg-white text-black font-medium"
        >
          Submit Deal
        </button>
      </form>
    </div>
  );
}
