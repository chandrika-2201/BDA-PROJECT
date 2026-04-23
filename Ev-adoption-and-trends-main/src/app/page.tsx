"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, BatteryCharging, TrendingUp, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

const stats = [
  { label: "Total EVs Registered", value: "2.4M+", icon: TrendingUp, color: "text-blue-500" },
  { label: "Charging Stations", value: "150k+", icon: BatteryCharging, color: "text-green-500" },
  { label: "High Demand States", value: "8", icon: MapPin, color: "text-purple-500" },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        </div>

        <div className="container px-6 z-10 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium mb-6">
              Smart City Analytics
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              The Future of <br className="hidden md:block" />
              <span className="text-primary">Electric Mobility</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-balance">
              Comprehensive data analytics platform for tracking EV adoption trends
              and optimizing charging infrastructure placement across the nation.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/dashboard"
                className="group px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg flex items-center gap-2 hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]"
              >
                <span>Explore Dashboard</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/about"
                className="px-8 py-4 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:bg-secondary/80 transition-all border border-white/10"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary/20 border-y border-white/5">
        <div className="container px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-card border border-white/5 hover:border-primary/20 transition-colors group"
              >
                <div className={cn("inline-flex p-3 rounded-lg bg-background mb-4 group-hover:scale-110 transition-transform", stat.color)}>
                  <stat.icon className="w-8 h-8" />
                </div>
                <h3 className="text-4xl font-bold mb-2">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-24">
        <div className="container px-6 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Powerful Analytics Modules</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Transforming raw data into actionable insights for policymakers and energy providers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/insights" className="block group">
              <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-card to-background border border-white/5 hover:border-primary/50 transition-all relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <TrendingUp className="w-32 h-32" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">EV Adoption Trends</h3>
                <p className="text-muted-foreground">
                  Visualize historical growth, forecast future adoption rates, and identify key drivers across different regions.
                </p>
              </div>
            </Link>

            <Link href="/optimization" className="block group">
              <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-card to-background border border-white/5 hover:border-primary/50 transition-all relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <BatteryCharging className="w-32 h-32" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">Charging Optimization</h3>
                <p className="text-muted-foreground">
                  AI-driven recommendations for optimal charging station placement based on traffic density and grid capacity.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
