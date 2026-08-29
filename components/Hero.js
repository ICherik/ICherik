"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Terminal, Shield, Code, Calendar, CheckCircle, Server, ArrowUpRight, Sparkles } from "lucide-react";

export default function Hero({ dict }) {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 500], [0, 50]);
  const opacityParallax = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section ref={containerRef} style={{ backgroundColor: "transparent" }} className="min-h-screen pt-28 pb-16 flex flex-col items-center justify-center px-4 max-w-6xl mx-auto relative">
      <motion.div
        style={{ y: yParallax, opacity: opacityParallax, backgroundColor: "rgba(17, 24, 39, 0.2)" }}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full rounded-[32px] ios-glass p-6 sm:p-10 md:p-12 relative overflow-hidden border border-white/10 shadow-2xl"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center" style={{ backgroundColor: "transparent" }}>
          
          {/* Main Info Column */}
          <div className="lg:col-span-8 space-y-6 text-center lg:text-right" style={{ backgroundColor: "transparent" }}>
            
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                <Code size={14} />
                <span>{dict.hero.badge}</span>
              </div>

              {/* Status Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>آماده همکاری در پروژه‌های مقیاس‌پذیر</span>
              </div>
            </div>

            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight text-zinc-900 dark:text-white" style={{ backgroundColor: "transparent" }}>
                {dict.hero.greeting}{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 dark:from-blue-400 dark:via-indigo-300 dark:to-purple-400">
                  {dict.hero.name}
                </span>{" "}
                {dict.hero.suffix}
              </h1>
              <p className="text-base sm:text-xl font-bold text-zinc-700 dark:text-zinc-300">
                {dict.hero.role} <span className="text-zinc-400 dark:text-zinc-600 font-normal">|</span> <span className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 font-medium">{dict.hero.spec}</span>
              </p>
            </div>

            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-xs sm:text-sm md:text-base max-w-2xl font-normal text-justify" style={{ backgroundColor: "transparent" }}>
              {dict.hero.bio}
            </p>

            {/* Contributing Teams Box */}
            <div className="pt-2">
              <div className="p-4 rounded-2xl bg-zinc-500/5 dark:bg-white/[0.03] border border-zinc-500/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs font-bold text-zinc-600 dark:text-zinc-300">
                  <Sparkles size={16} className="text-amber-500" />
                  <span>تیم‌ها و پروژه‌های فعال:</span>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="https://digiineo.ir"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 text-purple-600 dark:text-purple-400 border border-purple-500/20 text-xs font-bold transition-all hover:scale-105 active:scale-95"
                  >
                    <span>DigiiNEO</span>
                    <ArrowUpRight size={14} />
                  </a>
                  <a
                    href="https://rbl.co.ir"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-orange-500/10 hover:bg-orange-500/20 text-orange-600 dark:text-orange-400 border border-orange-500/20 text-xs font-bold transition-all hover:scale-105 active:scale-95"
                  >
                    <span>RBL (رایا بنیان لوتوس)</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Side Focus Cards */}
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3.5 w-full" style={{ backgroundColor: "transparent" }}>
            <div 
              style={{ backgroundColor: "rgba(17, 24, 39, 0.25)" }}
              className="p-5 rounded-2xl ios-glass border border-white/10 flex items-center gap-4 hover:border-blue-500/30 transition-all duration-300 group/card flex-1"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center shrink-0 group-hover/card:scale-110 transition-transform">
                <Terminal size={24} />
              </div>
              <div>
                <h4 className="text-sm font-black text-zinc-900 dark:text-white">Full-Stack Core</h4>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">Next.js 15, Node.js & Scalable APIs</p>
              </div>
            </div>

            <div 
              style={{ backgroundColor: "rgba(17, 24, 39, 0.25)" }}
              className="p-5 rounded-2xl ios-glass border border-white/10 flex items-center gap-4 hover:border-purple-500/30 transition-all duration-300 group/card flex-1"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center shrink-0 group-hover/card:scale-110 transition-transform">
                <Shield size={24} />
              </div>
              <div>
                <h4 className="text-sm font-black text-zinc-900 dark:text-white">Linux & Infrastructure</h4>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">VPS, Security & Network Hardening</p>
              </div>
            </div>
          </div>

        </div>

        {/* Metrics Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 border-t border-zinc-500/10 mt-8 pt-6" style={{ backgroundColor: "transparent" }}>
          <div style={{ backgroundColor: "rgba(255, 255, 255, 0.02)" }} className="flex items-center gap-3.5 p-3.5 rounded-2xl border border-zinc-500/5">
            <Calendar className="text-blue-500 shrink-0" size={22} />
            <p className="text-xs sm:text-sm font-black text-zinc-800 dark:text-zinc-100">{dict.metrics.exp}</p>
          </div>
          <div style={{ backgroundColor: "rgba(255, 255, 255, 0.02)" }} className="flex items-center gap-3.5 p-3.5 rounded-2xl border border-zinc-500/5">
            <CheckCircle className="text-purple-500 shrink-0" size={22} />
            <p className="text-xs sm:text-sm font-black text-zinc-800 dark:text-zinc-100">{dict.metrics.projects}</p>
          </div>
          <div style={{ backgroundColor: "rgba(255, 255, 255, 0.02)" }} className="flex items-center gap-3.5 p-3.5 rounded-2xl border border-zinc-500/5">
            <Server className="text-emerald-500 shrink-0" size={22} />
            <p className="text-xs sm:text-sm font-black text-zinc-800 dark:text-zinc-100">{dict.metrics.uptime}</p>
          </div>
        </div>

      </motion.div>
    </section>
  );
}