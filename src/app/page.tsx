"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Film,
  Sparkles,
  Users,
  Mic,
  Video,
  Kanban,
  Sliders,
  CheckCircle2,
  AlertTriangle,
  Play,
  ArrowUpRight,
  TrendingUp,
  Cpu,
  Layers,
  Clock,
  Flame,
  ShieldAlert,
  Compass
} from "lucide-react";
import { useCineFlowStore } from "@/lib/store";
import NewProjectModal from "@/components/NewProjectModal";

export default function DashboardPage() {
  const { project, scenes, characters, providers, updateProject } = useCineFlowStore();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const completedScenes = scenes.filter((s) => s.status === "Completed" || s.status === "Approved").length;
  const inProductionScenes = scenes.filter((s) => s.status === "Generating" || s.status === "Queued" || s.status === "Review").length;
  const readyVideos = completedScenes;

  const creditPercentage = Math.round((project.totalCreditsUsed / project.budgetCreditsLimit) * 100);

  return (
    <div className="space-y-6">
      {/* Studio Hero Banner */}
      <div className="relative rounded-3xl overflow-hidden border border-purple-500/20 bg-gradient-to-r from-cine-900 via-purple-950/40 to-cine-900 p-8 shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>استوديو الإنتاج السينمائي بالذكاء الاصطناعي</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight">
              CineFlow AI Studio
            </h1>
            <p className="text-base text-zinc-300 font-arabic leading-relaxed">
              «من الفكرة إلى فيلم سينمائي متكامل بالذكاء الاصطناعي» — إخراج ذكي، تثبيت دائم للشخصيات (عمر، رقية، فرفور)، حوارات عربية متقنة، ومونتاج سينمائي بمعالجة حقيقية.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 text-white font-bold text-sm shadow-glow-purple hover:scale-105 active:scale-95 transition-all"
            >
              <Sparkles className="w-5 h-5 text-amber-300 animate-pulse" />
              <span>إنشاء فيلم جديد</span>
            </button>
            <Link
              href="/director"
              className="flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-cine-850 hover:bg-cine-800 text-zinc-200 border border-cine-700 text-sm font-semibold transition-all"
            >
              <span>المخرج الذكي</span>
              <ArrowUpRight className="w-4 h-4 text-cyan-400" />
            </Link>
          </div>
        </div>
      </div>

      {/* Production Stats Counters */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Metric 1 */}
        <div className="bg-cine-900/90 border border-cine-800 rounded-2xl p-5 hover:border-purple-500/40 transition-all group">
          <div className="flex items-center justify-between text-zinc-400 text-xs mb-3">
            <span>المشاريع الحالية</span>
            <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
              <Film className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-bold text-white font-mono">1</div>
          <p className="text-[11px] text-zinc-400 mt-1 flex items-center gap-1">
            <span className="text-purple-400 font-medium">نشط:</span> {project.title}
          </p>
        </div>

        {/* Metric 2 */}
        <div className="bg-cine-900/90 border border-cine-800 rounded-2xl p-5 hover:border-emerald-500/40 transition-all group">
          <div className="flex items-center justify-between text-zinc-400 text-xs mb-3">
            <span>المشاهد المكتملة</span>
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-bold text-white font-mono">{completedScenes} / {scenes.length}</div>
          <p className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>{Math.round((completedScenes / (scenes.length || 1)) * 100)}% جاهز للعرض</span>
          </p>
        </div>

        {/* Metric 3 */}
        <div className="bg-cine-900/90 border border-cine-800 rounded-2xl p-5 hover:border-amber-500/40 transition-all group">
          <div className="flex items-center justify-between text-zinc-400 text-xs mb-3">
            <span>المشاهد قيد الإنتاج</span>
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
              <Kanban className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-bold text-white font-mono">{inProductionScenes}</div>
          <p className="text-[11px] text-zinc-400 mt-1">
            بانتظار المراجعة والاعتماد
          </p>
        </div>

        {/* Metric 4 */}
        <div className="bg-cine-900/90 border border-cine-800 rounded-2xl p-5 hover:border-cyan-500/40 transition-all group">
          <div className="flex items-center justify-between text-zinc-400 text-xs mb-3">
            <span>استهلاك الأرصدة</span>
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
              <Flame className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-bold text-white font-mono">{project.totalCreditsUsed} <span className="text-xs text-zinc-400 font-normal">/ {project.budgetCreditsLimit}</span></div>
          <p className="text-[11px] text-cyan-400 mt-1">
            الميزانية تحت السيطرة ({creditPercentage}%)
          </p>
        </div>
      </div>

      {/* Main Studio Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Active Movie Project Card & Storyboard Preview (2 Cols) */}
        <div className="lg:col-span-2 space-y-6">
          {/* Active Project Card */}
          <div className="bg-cine-900 border border-cine-800 rounded-3xl overflow-hidden shadow-lg">
            <div className="p-6 border-b border-cine-800 flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider">المشروع السينمائي النشط</span>
                <h2 className="text-xl font-bold text-white mt-0.5">{project.title}</h2>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-medium">
                  قيد الإنتاج الفعلي
                </span>
                <Link
                  href="/production"
                  className="flex items-center gap-1.5 text-xs text-zinc-300 hover:text-white px-3 py-1.5 rounded-xl bg-cine-850 hover:bg-cine-800 border border-cine-700 transition-colors"
                >
                  <span>خط الإنتاج</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="p-6 space-y-5">
              <p className="text-sm text-zinc-300 leading-relaxed font-arabic">
                {project.description}
              </p>

              {/* Specs Pills */}
              <div className="flex flex-wrap items-center gap-3 text-xs">
                <div className="bg-cine-850 px-3 py-1.5 rounded-xl border border-cine-800 text-zinc-300 flex items-center gap-2">
                  <span className="text-zinc-500">النمط:</span>
                  <span className="text-purple-300 font-medium">3D Anime سينمائي</span>
                </div>
                <div className="bg-cine-850 px-3 py-1.5 rounded-xl border border-cine-800 text-zinc-300 flex items-center gap-2">
                  <span className="text-zinc-500">الأبعاد:</span>
                  <span className="font-mono text-cyan-300">{project.aspectRatio}</span>
                </div>
                <div className="bg-cine-850 px-3 py-1.5 rounded-xl border border-cine-800 text-zinc-300 flex items-center gap-2">
                  <span className="text-zinc-500">الدقة:</span>
                  <span className="font-mono text-emerald-300">{project.resolution}</span>
                </div>
                <div className="bg-cine-850 px-3 py-1.5 rounded-xl border border-cine-800 text-zinc-300 flex items-center gap-2">
                  <span className="text-zinc-500">الشخصيات المثبتة:</span>
                  <span className="text-amber-300 font-medium">عمر، رقية، فرفور (Character Lock)</span>
                </div>
              </div>

              {/* Scenes Progress Grid */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-zinc-400">
                  <span>تقدم المشاهد ({completedScenes} من {scenes.length} معتمد)</span>
                  <span className="font-mono">{Math.round((completedScenes / scenes.length) * 100)}%</span>
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {scenes.map((s, idx) => (
                    <div
                      key={s.id}
                      className={`h-2 rounded-full transition-all ${
                        s.status === "Completed" || s.status === "Approved"
                          ? "bg-emerald-500 shadow-sm"
                          : s.status === "Review"
                          ? "bg-amber-500 animate-pulse"
                          : "bg-cine-800"
                      }`}
                      title={`المشهد ${idx + 1}: ${s.title} (${s.status})`}
                    />
                  ))}
                </div>
              </div>

              {/* Fast Scene Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {scenes.slice(0, 4).map((scene) => (
                  <div
                    key={scene.id}
                    className="bg-cine-850 border border-cine-800 rounded-2xl p-4 flex gap-3 hover:border-cine-700 transition-all"
                  >
                    <div className="w-16 h-16 rounded-xl bg-cine-900 overflow-hidden shrink-0 border border-cine-700">
                      {scene.selectedImageUrl ? (
                        <img
                          src={scene.selectedImageUrl}
                          alt={scene.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-zinc-600 font-mono text-xs">
                          #{scene.sceneNumber}
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1">
                        <span className="text-xs font-bold text-white truncate">#{scene.sceneNumber} {scene.title}</span>
                        <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                          scene.status === "Completed" ? "bg-emerald-500/20 text-emerald-300" :
                          scene.status === "Review" ? "bg-amber-500/20 text-amber-300" : "bg-cine-800 text-zinc-400"
                        }`}>
                          {scene.status}
                        </span>
                      </div>
                      <p className="text-[11px] text-zinc-400 line-clamp-2 mt-1 font-arabic">
                        {scene.synopsis}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Shortcuts Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <Link
              href="/director"
              className="p-4 rounded-2xl bg-cine-900 border border-cine-800 hover:border-purple-500/50 hover:bg-cine-850 transition-all flex flex-col items-center text-center gap-2 group"
            >
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-zinc-200">المخرج الذكي</span>
              <span className="text-[10px] text-zinc-500">توليد سيناريو ومشاهد</span>
            </Link>

            <Link
              href="/characters"
              className="p-4 rounded-2xl bg-cine-900 border border-cine-800 hover:border-cyan-500/50 hover:bg-cine-850 transition-all flex flex-col items-center text-center gap-2 group"
            >
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                <Users className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-zinc-200">مكتبة الشخصيات</span>
              <span className="text-[10px] text-zinc-500">Character Lock دائم</span>
            </Link>

            <Link
              href="/dialogue"
              className="p-4 rounded-2xl bg-cine-900 border border-cine-800 hover:border-emerald-500/50 hover:bg-cine-850 transition-all flex flex-col items-center text-center gap-2 group"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                <Mic className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-zinc-200">استوديو الحوار</span>
              <span className="text-[10px] text-zinc-500">مزامنة الشفاه العربية</span>
            </Link>

            <Link
              href="/editor"
              className="p-4 rounded-2xl bg-cine-900 border border-cine-800 hover:border-amber-500/50 hover:bg-cine-850 transition-all flex flex-col items-center text-center gap-2 group"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                <Sliders className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-zinc-200">مونتاج FFmpeg</span>
              <span className="text-[10px] text-zinc-500">قص ودمج وتصدير</span>
            </Link>
          </div>
        </div>

        {/* Right Column: Generation Log & Providers Status (1 Col) */}
        <div className="space-y-6">
          {/* Generation Logs */}
          <div className="bg-cine-900 border border-cine-800 rounded-3xl p-5 shadow-lg space-y-4">
            <div className="flex items-center justify-between border-b border-cine-800 pb-3">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-purple-400" />
                <h3 className="text-sm font-bold text-white">سجل عمليات التوليد والإنتاج</h3>
              </div>
              <span className="text-[10px] font-mono text-zinc-500">Live Feed</span>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-xl bg-cine-850 border border-cine-800 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-zinc-200">المشهد #3: انطلاق فرفور</span>
                  <span className="text-[10px] text-emerald-400 font-medium">اكتمل التوليد</span>
                </div>
                <p className="text-[11px] text-zinc-400">المنصة: Google Flow (Assisted) • المدة: 5 ثوانٍ</p>
                <div className="text-[10px] text-zinc-500 font-mono">منذ 15 دقيقة</div>
              </div>

              <div className="p-3 rounded-xl bg-cine-850 border border-cine-800 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-zinc-200">المشهد #2: رقية تفك الشفرة</span>
                  <span className="text-[10px] text-emerald-400 font-medium">معتمد في QC</span>
                </div>
                <p className="text-[11px] text-zinc-400">المنصة: Google Flow • نسبة المطابقة: 98%</p>
                <div className="text-[10px] text-zinc-500 font-mono">منذ 34 دقيقة</div>
              </div>

              <div className="p-3 rounded-xl bg-cine-850 border border-cine-800 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-zinc-200">المشهد #4: لقاء شجرة اللبان</span>
                  <span className="text-[10px] text-amber-400 font-medium">بانتظار المراجعة</span>
                </div>
                <p className="text-[11px] text-zinc-400">الإضاءة البلورية جاهزة للمعاينة</p>
                <div className="text-[10px] text-zinc-500 font-mono">منذ 50 دقيقة</div>
              </div>
            </div>
          </div>

          {/* Providers Status */}
          <div className="bg-cine-900 border border-cine-800 rounded-3xl p-5 shadow-lg space-y-4">
            <div className="flex items-center justify-between border-b border-cine-800 pb-3">
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-cyan-400" />
                <h3 className="text-sm font-bold text-white">حالة المنصات والموصلات</h3>
              </div>
              <Link href="/providers" className="text-xs text-cyan-400 hover:underline">
                إدارة
              </Link>
            </div>

            <div className="space-y-2.5 text-xs">
              {providers.map((p) => (
                <div
                  key={p.id}
                  className="p-2.5 rounded-xl bg-cine-850 border border-cine-800 flex items-center justify-between"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-medium text-zinc-200">{p.name}</span>
                  </div>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full font-mono ${
                      p.status === "assisted-mode"
                        ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                        : p.status === "connected"
                        ? "bg-emerald-500/20 text-emerald-300"
                        : "bg-zinc-800 text-zinc-500"
                    }`}
                  >
                    {p.status === "assisted-mode" ? "Assisted Mode" : p.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quality & Safety Alerts */}
          <div className="bg-cine-900 border border-amber-500/30 rounded-3xl p-5 shadow-lg space-y-3">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
              <ShieldAlert className="w-4 h-4" />
              <span>تنبيهات الجودة والميزانية</span>
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed font-arabic">
              • تم تفعيل وضع <strong className="text-white">Simple Lock</strong> الافتراضي للشخصيات لحماية ملامح عمر والكمة العمانية من التشوه.
            </p>
            <p className="text-xs text-zinc-400 font-arabic">
              • لا يتم استهلاك أي رصيد إضافي دون موافقة مسبقة ضمن حدود الميزانية المحددة ({project.budgetCreditsLimit} رصيد).
            </p>
          </div>
        </div>
      </div>

      <NewProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreate={(newP) => {
          updateProject(newP);
        }}
      />
    </div>
  );
}
