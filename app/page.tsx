import Sidebar from "@/components/Sidebar";

export default function DashboardPage() {
  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 p-8">
        <h1 className="text-3xl font-semibold mb-6">
          Dashboard
        </h1>

        <div className="grid grid-cols-4 gap-6">
          {[
            "Deals Submitted",
            "Approved",
            "Paid",
            "Total AP"
          ].map((label) => (
            <div
              key={label}
              className="rounded-xl bg-glass backdrop-blur-glass
                border border-borderGlass p-5"
            >
              <div className="text-sm text-gray-400">{label}</div>
              <div className="text-2xl font-bold mt-2">—</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
