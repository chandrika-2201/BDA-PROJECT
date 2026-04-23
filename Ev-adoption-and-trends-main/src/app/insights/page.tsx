"use client";

import { motion } from "framer-motion";

export default function InsightsPage() {
    return (
        <div className="container mx-auto px-6 py-12">
            <div className="max-w-4xl mx-auto mb-16 text-center">
                <h1 className="text-4xl font-bold mb-4">Market Insights</h1>
                <p className="text-muted-foreground text-lg">
                    Deep dive into the temporal evolution of EV adoption and regional disparities.
                </p>
            </div>

            <div className="space-y-24">
                {/* Section 1 */}
                <Section
                    title="Temporal Trends"
                    description="Year-over-year growth shows an exponential curve in EV registrations, driven by policy incentives and battery cost reduction. The data exhibits a 45% CAGR over the last 5 years."
                    align="left"
                >
                    <div className="h-64 flex items-end gap-2 px-4 py-8 bg-card rounded-xl border border-white/5 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
                        {[30, 40, 45, 60, 50, 70, 85, 90, 100].map((h, i) => (
                            <motion.div
                                key={i}
                                initial={{ height: 0 }}
                                whileInView={{ height: `${h}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: i * 0.05, type: "spring" }}
                                className="flex-1 bg-primary/40 group-hover:bg-primary transition-colors rounded-t-sm"
                            />
                        ))}
                    </div>
                </Section>

                {/* Section 2 */}
                <Section
                    title="Regional Distribution"
                    description="Coastal states lead the charge, with California and New York accounting for 40% of total national inventory. However, the Midwest is showing rapid infrastructure development."
                    align="right"
                >
                    <div className="h-64 flex items-center justify-center bg-card rounded-xl border border-white/5 relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-primary)_0%,_transparent_70%)] opacity-20" />
                        <div className="grid grid-cols-2 gap-4 w-full p-6">
                            <div className="space-y-2">
                                <div className="h-2 w-full bg-secondary rounded overflow-hidden">
                                    <motion.div initial={{ width: 0 }} whileInView={{ width: "80%" }} className="h-full bg-blue-500" />
                                </div>
                                <div className="h-2 w-full bg-secondary rounded overflow-hidden">
                                    <motion.div initial={{ width: 0 }} whileInView={{ width: "60%" }} className="h-full bg-purple-500" />
                                </div>
                                <div className="h-2 w-full bg-secondary rounded overflow-hidden">
                                    <motion.div initial={{ width: 0 }} whileInView={{ width: "30%" }} className="h-full bg-pink-500" />
                                </div>
                            </div>
                            <div className="flex items-center justify-center text-xs text-muted-foreground font-mono">
                                [Geo-Spatial Heatmap Visualization]
                            </div>
                        </div>
                    </div>
                </Section>

                {/* Section 3 */}
                <Section
                    title="Vehicle Type Analysis"
                    description="While passenger sedans dominate the early market, the e-SUV segment occupies the fastest growing market share in 2024-2025 due to new model releases."
                    align="left"
                >
                    <div className="h-64 grid grid-cols-2 gap-4">
                        <div className="bg-card rounded-xl border border-white/5 flex flex-col items-center justify-center p-4 hover:border-primary/30 transition-colors">
                            <div className="text-5xl font-bold text-primary mb-2">62%</div>
                            <div className="text-sm text-muted-foreground uppercase tracking-widest">Sedans</div>
                        </div>
                        <div className="bg-card rounded-xl border border-white/5 flex flex-col items-center justify-center p-4 hover:border-blue-500/30 transition-colors">
                            <div className="text-5xl font-bold text-blue-500 mb-2">28%</div>
                            <div className="text-sm text-muted-foreground uppercase tracking-widest">SUVs</div>
                        </div>
                    </div>
                </Section>
            </div>
        </div>
    );
}

function Section({ title, description, children, align }: any) {
    return (
        <div className={`flex flex-col md:flex-row gap-12 items-center ${align === "right" ? "md:flex-row-reverse" : ""}`}>
            <motion.div
                initial={{ opacity: 0, x: align === "left" ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex-1"
            >
                <h2 className="text-3xl font-bold mb-4">{title}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                    {description}
                </p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex-1 w-full"
            >
                {children}
            </motion.div>
        </div>
    )
}
