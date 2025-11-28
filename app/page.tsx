export default function Home() {
    return (
        <main className="min-h-screen relative overflow-hidden">
            {/* Background */}
            <div className="fixed inset-0 bg-black -z-10">
                {/* Stars */}
                <div className="stars"></div>
                <div className="stars2"></div>
                <div className="stars3"></div>

                {/* Shooting Stars */}
                <div className="shooting-star"></div>
                <div className="shooting-star" style={{ top: '20%', left: '40%', animationDelay: '3s' }}></div>
                <div className="shooting-star" style={{ top: '60%', left: '70%', animationDelay: '6s' }}></div>
            </div>

            <section className="min-h-screen flex flex-col items-center justify-center px-4 py-8 gap-8">
                <div className="flex flex-col items-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
                        Miguel "skai" Silva
                    </h1>

                    <div className="flex gap-6 flex-wrap justify-center items-center">
                        {/* Email Icon Button */}
                        <a
                            href="mailto:miguelfundevila@gmail.com"
                            className="hover:opacity-60 transition-all duration-300"
                            aria-label="Email"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </a>

                        {/* GitHub Icon Button */}
                        <a
                            href="https://github.com/skaiTF"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-60 transition-all duration-300"
                            aria-label="GitHub"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Projects Box */}
                <div className="w-full max-w-3xl mt-8">
                    {/* Arrow Indicator */}
                    {/* <div className="flex justify-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white/60 arrow-blink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </div> */}

                    <h2 className="text-xl md:text-xl font-bold mb-6 text-center">
                        Some things that I work on:
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Project 1 */}
                        <a
                            href="https://github.com/skaiTF/skyhud"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative overflow-hidden rounded-2xl p-6 min-h-[200px] flex flex-col justify-end cursor-pointer transition-all duration-300 hover:scale-105"
                            style={{
                                background: "rgba(255, 255, 255, 0.05)",
                                backdropFilter: "blur(10px)",
                                border: "1px solid rgba(255, 255, 255, 0.1)",
                            }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="relative z-10">
                                <h3 className="text-xl font-bold mb-2">skyhud</h3>
                                <p className="text-gray-400 text-xs">
                                    A TF2 Head's Up Display, inspired by many other existing huds, and focused on simplicity.
                                </p>
                            </div>
                        </a>

                        {/* Project 2 */}
                        <a
                            href="https://github.com/skaiTF/chaos"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative overflow-hidden rounded-2xl p-6 min-h-[200px] flex flex-col justify-end cursor-pointer transition-all duration-300 hover:scale-105"
                            style={{
                                background: "rgba(255, 255, 255, 0.05)",
                                backdropFilter: "blur(10px)",
                                border: "1px solid rgba(255, 255, 255, 0.1)",
                            }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="relative z-10">
                                <h3 className="text-xl font-bold mb-2">chaos</h3>
                                <p className="text-gray-400 text-xs">
                                    An Obsidian plugin for managing organized chaos.
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
