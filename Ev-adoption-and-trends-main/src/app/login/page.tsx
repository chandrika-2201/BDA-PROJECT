"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Zap, Lock, Mail } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate login for demonstration
        // In real implementation: await fetch('http://localhost:3001/api/auth/login', ...)
        setTimeout(() => {
            setLoading(false);
            router.push("/dashboard");
        }, 1500);
    };

    return (
        <div className="min-h-[80vh] flex items-center justify-center px-6">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-md p-8 rounded-2xl bg-card border border-white/5 shadow-2xl relative overflow-hidden"
            >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-blue-500 to-purple-500" />

                <div className="text-center mb-8">
                    <div className="inline-flex p-3 rounded-full bg-primary/10 text-primary mb-4">
                        <Zap className="w-8 h-8 fill-current" />
                    </div>
                    <h1 className="text-2xl font-bold">Welcome Back</h1>
                    <p className="text-muted-foreground text-sm">Sign in to access the analytics dashboard</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium ml-1">Email</label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-2.5 w-5 h-5 text-muted-foreground" />
                            <input
                                type="email"
                                placeholder="admin@evproject.com"
                                className="w-full pl-10 pr-4 py-2 bg-secondary/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm text-foreground placeholder:text-muted-foreground/50"
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium ml-1">Password</label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-2.5 w-5 h-5 text-muted-foreground" />
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="w-full pl-10 pr-4 py-2 bg-secondary/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm text-foreground placeholder:text-muted-foreground/50"
                                required
                            />
                        </div>
                    </div>

                    <button
                        disabled={loading}
                        type="submit"
                        className="w-full py-2.5 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary/90 transition-all mt-6 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)]"
                    >
                        {loading ? "Signing in..." : "Sign In"}
                    </button>
                </form>

                <div className="mt-6 text-center text-xs text-muted-foreground">
                    <p>Project Admin Access Only</p>
                </div>
            </motion.div>
        </div>
    );
}
