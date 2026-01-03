"use client";

import { useState } from "react";

export default function NewDealPage() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const payload = {
      agent: formData.get("agent"),
      dealType: formData.get("dealType"),
      amount: formData.get("amount"),
      notes: formData.get("notes")
    };

    await fetch("/api/deals", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    setLoading(false);
    e.currentTarget.reset();
    alert("Deal submitted");
  }

  return (
    <div className="max-w-xl">
      <h1 className="text-2xl font-bold mb-4">Submit New Deal</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="agent"
          placeholder="Agent Name"
          className="w-full p-2 bg-neutral-800 rounded"
          required
        />

        <input
          name="dealType"
          placeholder="Deal Type"
          className="w-full p-2 bg-neutral-800 rounded"
          required
        />

        <input
          name="amount"
          placeholder="Amount ($)"
          className="w-full p-2 bg-neutral-800 rounded"
          required
        />

        <textarea
          name="notes"
          placeholder="Notes"
          className="w-full p-2 bg-neutral-800 rounded"
        />

        <button
          disabled={loading}
          className="bg-white text-black px-4 py-2 rounded font-medium"
        >
          {loading ? "Submitting..." : "Submit Deal"}
        </button>
      </form>
    </div>
  );
}
