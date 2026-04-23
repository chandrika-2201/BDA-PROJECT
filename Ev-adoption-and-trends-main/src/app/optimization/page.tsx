"use client";

import { motion } from "framer-motion";
import { Zap, AlertTriangle, CheckCircle2 } from "lucide-react";

export default function OptimizationPage() {
    return (
        <div className="container mx-auto px-6 py-12">
            <div className="max-w-3xl mx-auto mb-16">
                <h1 className="text-4xl font-bold mb-4">Infrastructure Optimization</h1>
                <p className="text-muted-foreground text-lg">
                    AI-driven analysis to identify gaps in the charging network and recommend high-impact locations for new stations.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <Card title="Underserved Regions" icon={AlertTriangle} color="text-amber-500">
                    <ul className="space-y-3 mt-4">
                        <ListItem>North Dakota (Rural Corridors)</ListItem>
                        <ListItem>West Texas (Interstate 10 gap)</ListItem>
                        <ListItem>Northern Maine</ListItem>
                        <ListItem>Central Montana</ListItem>
                    </ul>
                </Card>
                <Card title="High Potential Zones" icon={Zap} color="text-primary">
                    <ul className="space-y-3 mt-4">
                        <ListItem>Suburban Atlanta (Retail Hubs)</ListItem>
                        <ListItem>Phoenix Metro (Residential Clusters)</ListItem>
                        <ListItem>Chicago Loop (Public Parking)</ListItem>
                        <ListItem>Miami Beach (Tourism Centers)</ListItem>
                    </ul>
                </Card>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-card border border-white/5 mx-auto max-w-4xl shadow-xl"
            >
                <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                    <CheckCircle2 className="text-primary" />
                    Strategic Recommendations
                </h2>
                <div className="space-y-6">
                    <Recommendation
                        title="Deploy DC Fast Chargers"
                        desc="Focus on interstate exits in underserved corridors (highlighted in amber) to reduce range anxiety for long-distance travel."
                        impact="High"
                    />
                    <Recommendation
                        title="Grid Load Balancing"
                        desc="Implement smart charging controls in residential areas to prevent peak-hour grid overload during 6PM-9PM."
                        impact="Medium"
                    />
                    <Recommendation
                        title="Incentivize Workplace Charging"
                        desc="Partner with corporate parks to install Level 2 chargers for daytime usage, capitalizing on solar peak hours."
                        impact="High"
                    />
                </div>
            </motion.div>
        </div>
    );
}

function Card({ title, icon: Icon, color, children }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-gradient-to-br from-card to-background border border-white/5"
        >
            <div className={`flex items-center gap-3 mb-4 ${color}`}>
                <Icon className="w-6 h-6" />
                <h3 className="text-xl font-bold text-foreground">{title}</h3>
            </div>
            {children}
        </motion.div>
    )
}

function ListItem({ children }: { children: React.ReactNode }) {
    return (
        <li className="flex items-center gap-3 text-muted-foreground p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors">
            <span className="w-1.5 h-1.5 rounded-full bg-foreground opacity-50" />
            {children}
        </li>
    )
}

function Recommendation({ title, desc, impact }: any) {
    return (
        <div className="flex gap-4 p-5 rounded-xl bg-secondary/10 border border-white/5 hover:border-primary/30 transition-colors">
            <div className="flex-1">
                <h4 className="font-bold mb-2 text-foreground">{title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
            <div className="flex items-start shrink-0">
                <span className={`text-xs px-2 py-1 rounded font-medium border ${impact === 'High' ? 'bg-primary/10 text-primary border-primary/20' : 'bg-blue-500/10 text-blue-500 border-blue-500/20'}`}>
                    {impact} Impact
                </span>
            </div>
        </div>
    )
}
