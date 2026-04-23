"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
    return (
        <div className="container mx-auto px-6 py-12">
            <div className="max-w-4xl mx-auto space-y-16">

                {/* Header */}
                <section className="text-center space-y-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500"
                    >
                        EV Adoption Trends and <br /> Charging Station Optimization
                    </motion.h1>
                    <div className="flex items-center justify-center gap-4 text-muted-foreground">
                        <span className="px-3 py-1 bg-secondary rounded-full text-sm">Big Data Analytics</span>
                        <span className="px-3 py-1 bg-secondary rounded-full text-sm">6th Semester Project</span>
                    </div>
                </section>

                {/* Abstract */}
                <section className="bg-card p-8 rounded-2xl border border-white/5 shadow-lg">
                    <h2 className="text-2xl font-bold mb-4 text-foreground">Abstract</h2>
                    <p className="text-muted-foreground leading-loose text-justify">
                        This project addresses the critical need for data-driven planning in the rapidly growing electric vehicle sector.
                        By aggregating datasets from government registrations, charging networks, and demographic surveys,
                        we analyze the correlation between EV adoption rates and infrastructure availability.
                        Our platform uses advanced visualization techniques to highlight underserved areas and proposes an
                        optimization model for future charging station deployment to maximize accessibility and grid efficiency.
                    </p>
                </section>

                {/* System Modules */}
                <section>
                    <h2 className="text-2xl font-bold mb-8 border-l-4 border-primary pl-4">System Modules</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { title: "Data Collection & Integration", desc: "Aggregating multi-source data" },
                            { title: "Trend Analysis Engine", desc: "Temporal patterns in EV growth" },
                            { title: "Geospatial Optimization", desc: "Locating optimal charging points" },
                            { title: "Interactive Visualization", desc: "Dashboard for stakeholders" },
                            { title: "Predictive Modeling", desc: "Forecasting future demand" }
                        ].map((item, i) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-6 bg-secondary/20 border border-white/5 rounded-xl hover:bg-secondary/30 transition-colors"
                            >
                                <h3 className="font-bold text-lg mb-1 text-primary">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Tech Stack */}
                <section>
                    <h2 className="text-2xl font-bold mb-8 border-l-4 border-blue-500 pl-4">Technology Stack</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            "Next.js 15", "TypeScript", "Tailwind CSS v4", "Framer Motion",
                            "Node.js", "Express", "Power BI Embedded", "Python (Pandas)"
                        ].map((tech) => (
                            <div key={tech} className="text-center p-4 bg-secondary/10 rounded-xl border border-white/5 hover:border-blue-500/20 transition-colors">
                                <span className="text-sm font-semibold text-muted-foreground">{tech}</span>
                            </div>
                        ))}
                    </div>
                </section>

            </div>
        </div>
    );
}
