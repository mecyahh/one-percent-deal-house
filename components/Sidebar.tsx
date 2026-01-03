import {
  LayoutDashboard,
  FilePlus,
  ClipboardList,
  Users,
  Settings
} from "lucide-react";

const navItems = [
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "Submit Deal", icon: FilePlus },
  { name: "Deal House", icon: ClipboardList },
  { name: "Team", icon: Users },
  { name: "Settings", icon: Settings }
];

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen border-r border-borderGlass bg-glass backdrop-blur-glass">
      <div className="p-6 text-xl font-semibold tracking-tight">
        One Percent
      </div>

      <nav className="px-4 space-y-2">
        {navItems.map((item) => (
          <div
            key={item.name}
            className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer
              text-gray-300 hover:text-white hover:bg-white/10 transition"
          >
            <item.icon size={18} />
            <span>{item.name}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
}
