"use client";

import { motion } from "framer-motion";
import { Activity, BarChart3, Home, Plug } from "lucide-react";

export default function DashboardPage() {
    return (
        <div className="container mx-auto px-6 py-8">
            <h1 className="text-3xl font-bold mb-8">Analytics Dashboard</h1>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <KpiCard title="Total EVs" value="2,450,120" change="+12.5%" icon={Activity} />
                <KpiCard title="Active Stations" value="152,040" change="+8.2%" icon={Plug} />
                <KpiCard title="Avg. Usage" value="68%" change="+2.4%" icon={BarChart3} />
                <KpiCard title="Energy Consumed" value="45 GWh" change="+15%" icon={Home} />
            </div>

            {/* Power BI Embed */}
            <div className="w-full h-[600px] bg-card border border-white/5 rounded-2xl overflow-hidden relative group">

                {/* Actual Iframe Integration Point */}
                <iframe
                    title="EV Dashboard"
                    width="100%"
                    height="100%"
                    src="https://app.powerbi.com/view?r=eyJrIjoiMjQ5ODUxOGMtOGY0OS00YTZlLThjZmQtYWVmZGRiOTNmZTc5IiwidCI6IjgwOGNjODNlLWE1NDYtNDdlNy1hMDNmLTczYTFlYmJhMjRmMyIsImMiOjEwfQ%3D%3D"
                    // NOTE: Replace the src above with the actual Power BI embed URL
                    className="w-full h-full border-0 absolute inset-0 z-0"
                    allowFullScreen={true}
                />

                {/* Placeholder Overlay - Remove this when real URL is added if desired, or keep as loading state */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-card/90 backdrop-blur-sm z-10 pointer-events-none opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                    <BarChart3 className="w-16 h-16 text-primary mb-4 animate-pulse" />
                    <span className="mb-2 font-semibold text-lg">Power BI Dashboard</span>
                    <span className="text-sm text-muted-foreground text-center px-4 max-w-md">
                        Interact with the live report below. (Hover to reveal if hidden)
                    </span>
                </div>
            </div>
        </div>
    );
}

function KpiCard({ title, value, change, icon: Icon }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-6 rounded-xl bg-card border border-white/5 hover:border-primary/20 transition-colors"
        >
            <div className="flex items-center justify-between mb-4">
                <span className="text-muted-foreground text-sm">{title}</span>
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Icon className="w-4 h-4" />
                </div>
            </div>
            <div className="text-2xl font-bold mb-1 text-foreground">{value}</div>
            <div className="text-xs text-emerald-500 font-medium">{change} from last month</div>
        </motion.div>
    )
}
