export function Footer() {
    return (
        <footer className="bg-secondary/30 border-t border-border py-12">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="space-y-4">
                    <h3 className="text-lg font-bold text-foreground">EV Analytics</h3>
                    <p className="text-sm text-muted-foreground">
                        Advancing urban mobility through data-driven insights and charging infrastructure optimization.
                    </p>
                </div>

                <div>
                    <h4 className="font-semibold mb-4 text-foreground">Platform</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><a href="/dashboard" className="hover:text-primary transition-colors">Dashboard</a></li>
                        <li><a href="/insights" className="hover:text-primary transition-colors">Insights</a></li>
                        <li><a href="/optimization" className="hover:text-primary transition-colors">Optimization</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold mb-4 text-foreground">Resources</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><a href="/about" className="hover:text-primary transition-colors">About Project</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">API Status</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold mb-4 text-foreground">Connect</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><a href="#" className="hover:text-primary transition-colors">GitHub</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">LinkedIn</a></li>
                        <li><a href="mailto:contact@evproject.com" className="hover:text-primary transition-colors">Contact</a></li>
                    </ul>
                </div>
            </div>
            <div className="container mx-auto px-6 mt-12 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
                © {new Date().getFullYear()} EV Adoption & Trends Project. All rights reserved.
            </div>
        </footer>
    );
}
