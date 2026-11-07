"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Film,
  Sparkles,
  LayoutGrid,
  Users,
  Mic,
  Video,
  Terminal,
  Kanban,
  CheckCircle2,
  Sliders,
  BrainCircuit,
  Share2,
  Cpu,
  Globe,
  Flame
} from "lucide-react";

interface SidebarProps {
  locale: "ar" | "en";
  onToggleLocale: () => void;
  creditsUsed: number;
  creditsBudget: number;
}

export default function Sidebar({ locale, onToggleLocale, creditsUsed, creditsBudget }: SidebarProps) {
  const pathname = usePathname();
  const isAr = locale === "ar";

  const navigation = [
    {
      name: isAr ? "لوحة القيادة" : "Dashboard",
      href: "/",
      icon: Film,
      badge: null
    },
    {
      name: isAr ? "المخرج الذكي (AI Director)" : "AI Director",
      href: "/director",
      icon: Sparkles,
      badge: "Core"
    },
    {
      name: isAr ? "الاستوري بورد (Storyboard)" : "Storyboard",
      href: "/storyboard",
      icon: LayoutGrid,
      badge: null
    },
    {
      name: isAr ? "مكتبة الشخصيات (Character Lock)" : "Character Lock",
      href: "/characters",
      icon: Users,
      badge: "عمر ورقية"
    },
    {
      name: isAr ? "استوديو الحوار العربي" : "Dialogue Studio",
      href: "/dialogue",
      icon: Mic,
      badge: null
    },
    {
      name: isAr ? "محرك الكاميرا السينمائية" : "Camera Engine",
      href: "/camera",
      icon: Video,
      badge: "15 حركة"
    },
    {
      name: isAr ? "مولد البرومبتات (Prompts)" : "Prompt Engine",
      href: "/prompts",
      icon: Terminal,
      badge: "Simple Lock"
    },
    {
      name: isAr ? "مدير خط الإنتاج (Production)" : "Production Manager",
      href: "/production",
      icon: Kanban,
      badge: null
    },
    {
      name: isAr ? "تدقيق الجودة (Quality Control)" : "Quality Control",
      href: "/qc",
      icon: CheckCircle2,
      badge: "QC"
    },
    {
      name: isAr ? "استوديو المونتاج (FFmpeg Editor)" : "Video Editor",
      href: "/editor",
      icon: Sliders,
      badge: "FFmpeg"
    },
    {
      name: isAr ? "ذاكرة الإنتاج (Memory)" : "Production Memory",
      href: "/memory",
      icon: BrainCircuit,
      badge: "AI Rules"
    },
    {
      name: isAr ? "استوديو النشر واليوتيوب" : "YouTube Studio",
      href: "/publish",
      icon: Share2,
      badge: null
    },
    {
      name: isAr ? "منصات الفيديو وحسابات Flow" : "Providers & Flow",
      href: "/providers",
      icon: Cpu,
      badge: "Assisted"
    }
  ];

  const creditPercentage = Math.min(100, Math.round((creditsUsed / creditsBudget) * 100));

  return (
    <aside className="w-72 bg-cine-900 border-x border-cine-800 flex flex-col h-screen sticky top-0 select-none z-30">
      {/* Studio Header Brand */}
      <div className="p-5 border-b border-cine-800 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-cyan-500 p-[2px] shadow-glow-purple group-hover:scale-105 transition-all">
            <div className="w-full h-full bg-cine-950 rounded-[10px] flex items-center justify-center">
              <Film className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-white tracking-wide text-lg">CineFlow</span>
              <span className="text-[10px] font-semibold bg-purple-500/20 text-purple-300 px-1.5 py-0.5 rounded border border-purple-500/30">
                STUDIO
              </span>
            </div>
            <p className="text-[11px] text-zinc-400 font-arabic truncate max-w-[150px]">
              {isAr ? "من الفكرة إلى فيلم سينمائي" : "From Idea to Cinema Film"}
            </p>
          </div>
        </Link>
      </div>

      {/* Navigation List */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1 custom-scrollbar">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all group ${
                isActive
                  ? "bg-gradient-to-r from-purple-600/25 to-indigo-600/15 text-white border border-purple-500/30 shadow-glow-purple font-semibold"
                  : "text-zinc-400 hover:text-zinc-200 hover:bg-cine-850 border border-transparent"
              }`}
            >
              <div className="flex items-center gap-3 truncate">
                <Icon
                  className={`w-4 h-4 shrink-0 transition-transform group-hover:scale-110 ${
                    isActive ? "text-purple-400" : "text-zinc-400 group-hover:text-zinc-200"
                  }`}
                />
                <span className="truncate">{item.name}</span>
              </div>
              {item.badge && (
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono shrink-0 ${
                    isActive
                      ? "bg-purple-500/30 text-purple-200 border border-purple-400/40"
                      : "bg-cine-800 text-zinc-400 border border-cine-700"
                  }`}
                >
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Credits & Usage Gauge */}
      <div className="p-4 mx-3 mb-3 rounded-2xl bg-cine-850 border border-cine-800">
        <div className="flex items-center justify-between text-xs mb-2">
          <span className="flex items-center gap-1.5 text-zinc-300 font-medium">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            {isAr ? "استهلاك الأرصدة" : "Credits Usage"}
          </span>
          <span className="font-mono text-zinc-300">
            {creditsUsed} / {creditsBudget}
          </span>
        </div>
        <div className="w-full h-2 bg-cine-900 rounded-full overflow-hidden border border-cine-800">
          <div
            className={`h-full transition-all duration-500 rounded-full ${
              creditPercentage > 85 ? "bg-rose-500" : creditPercentage > 60 ? "bg-amber-500" : "bg-gradient-to-r from-purple-500 to-cyan-400"
            }`}
            style={{ width: `${creditPercentage}%` }}
          />
        </div>
        <div className="flex items-center justify-between text-[11px] text-zinc-500 mt-2">
          <span>{creditPercentage}% {isAr ? "مستخدم" : "used"}</span>
          <span className="text-emerald-400 font-medium">
            {isAr ? "سليم وآمن" : "Safe Budget"}
          </span>
        </div>
      </div>

      {/* Footer Controls: Locale Toggle */}
      <div className="p-3 border-t border-cine-800 flex items-center justify-between bg-cine-950/60">
        <button
          onClick={onToggleLocale}
          className="flex items-center gap-2 text-xs text-zinc-400 hover:text-white px-3 py-1.5 rounded-lg bg-cine-850 hover:bg-cine-800 border border-cine-700 transition-colors"
        >
          <Globe className="w-3.5 h-3.5 text-cyan-400" />
          <span>{isAr ? "English (LTR)" : "العربية (RTL)"}</span>
        </button>
        <span className="text-[11px] font-mono text-zinc-500">v1.0.0</span>
      </div>
    </aside>
  );
}
