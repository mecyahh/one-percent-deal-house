import {
  LayoutDashboard,
  FilePlus,
  ClipboardList,
  Users,
  Settings,
} from "lucide-react";
import Link from "next/link";

const navItems = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/" },
  { name: "Submit Deal", icon: FilePlus, href: "/deals/new" },
  { name: "Deal House", icon: ClipboardList, href: "/deals" },
  { name: "Team", icon: Users, href: "/team" },
  { name: "Settings", icon: Settings, href: "/settings" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen border-r border-white/10 bg-white/5 backdrop-blur-xl">
      <div className="p-6 text-xl font-semibold tracking-tight">
        One Percent
      </div>

      <nav className="px-4 space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center gap-3 px-3 py-2 rounded-lg
              text-gray-300 hover:text-white hover:bg-white/10 transition"
          >
            <item.icon size={18} />
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
