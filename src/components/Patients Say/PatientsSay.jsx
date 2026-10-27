
const PatientsSay = () => {
    return (
        <div className="bg-slate-50 min-h-screen flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl w-full mx-auto">

                <div className="text-center mb-12 sm:mb-16">
                    <span
                        className="inline-block bg-sky-100 text-sky-600 font-bold text-xs tracking-wider uppercase px-4 py-1.5 rounded-full mb-4">
                        TRUSTED BY PATIENTS
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                        What Our <span className="text-sky-500">Patients Say</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

                    <div
                        className="lg:col-span-5 flex flex-col rounded-2xl overflow-hidden shadow-lg shadow-sky-900/5 transition-transform duration-300 hover:-translate-y-1">
                        <div className="relative h-64 sm:h-72 lg:h-80 w-full overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop"
                                alt="Telehealth Consultation" className="w-full h-full object-cover object-center" />
                            <div
                                className="absolute top-4 left-4 bg-slate-900/70 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-2 shadow-md">
                                <i className="fa-solid fa-video text-xs text-sky-400"></i>
                                <span>Telehealth Consultation</span>
                            </div>
                        </div>

                        <div className="bg-[#0083ca] p-6 sm:p-8 text-white flex-1 flex flex-col justify-between">
                            <div>
                                <div className="flex items-center gap-1 text-amber-300 mb-4">
                                    <i className="fa-solid fa-star text-sm"></i>
                                    <i className="fa-solid fa-star text-sm"></i>
                                    <i className="fa-solid fa-star text-sm"></i>
                                    <i className="fa-solid fa-star text-sm"></i>
                                    <i className="fa-solid fa-star text-sm"></i>
                                </div>
                                <p className="text-base sm:text-lg font-medium italic leading-relaxed text-sky-50 mb-6">
                                    &ldquo;The telemedicine appointment was seamless, quick, and accurate. The doctor
                                    answered all my questions with utmost patience and provided precise advice.&rdquo;
                                </p>
                            </div>

                            <div className="flex items-center gap-3 pt-2">
                                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
                                    alt="David M." className="w-11 h-11 rounded-full object-cover border-2 border-white/30" />
                                <div>
                                    <h4 className="font-bold text-sm leading-snug">David M.</h4>
                                    <div className="flex items-center gap-1 text-sky-200 text-xs">
                                        <i className="fa-solid fa-circle-check text-[11px]"></i>
                                        <span>Verified Patient</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">

                        <div
                            className="bg-slate-50/80 border border-slate-200/60 p-6 rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-1 text-sky-400">
                                        <i className="fa-solid fa-star text-xs"></i>
                                        <i className="fa-solid fa-star text-xs"></i>
                                        <i className="fa-solid fa-star text-xs"></i>
                                        <i className="fa-solid fa-star text-xs"></i>
                                        <i className="fa-solid fa-star text-xs"></i>
                                    </div>
                                    <i className="fa-solid fa-quote-right text-sky-200 text-2xl"></i>
                                </div>
                                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                                    &ldquo;The doctors at Clinova took the time to truly listen to my concerns. The
                                    personalized care and attention were unlike any hospital I've been to before.&rdquo;
                                </p>
                            </div>
                            <div className="flex items-center gap-3 pt-2">
                                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
                                    alt="Alex Robinson" className="w-10 h-10 rounded-full object-cover" />
                                <div>
                                    <h4 className="font-bold text-slate-800 text-xs sm:text-sm">Alex Robinson</h4>
                                    <div className="flex items-center gap-1 text-sky-500 text-[11px]">
                                        <i className="fa-solid fa-circle-check"></i>
                                        <span>Verified Patient</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            className="bg-slate-50/80 border border-slate-200/60 p-6 rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-1 text-sky-400">
                                        <i className="fa-solid fa-star text-xs"></i>
                                        <i className="fa-solid fa-star text-xs"></i>
                                        <i className="fa-solid fa-star text-xs"></i>
                                        <i className="fa-solid fa-star text-xs"></i>
                                        <i className="fa-solid fa-star text-xs"></i>
                                    </div>
                                    <i className="fa-solid fa-quote-right text-sky-200 text-2xl"></i>
                                </div>
                                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                                    &ldquo;Booking an appointment took seconds, and the clinic staff were prompt and polite.
                                    Outstanding clinic environment and world-className doctors.&rdquo;
                                </p>
                            </div>
                            <div className="flex items-center gap-3 pt-2">
                                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
                                    alt="Sarah Chen" className="w-10 h-10 rounded-full object-cover" />
                                <div>
                                    <h4 className="font-bold text-slate-800 text-xs sm:text-sm">Sarah Chen</h4>
                                    <div className="flex items-center gap-1 text-sky-500 text-[11px]">
                                        <i className="fa-solid fa-circle-check"></i>
                                        <span>Verified Patient</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            className="bg-slate-50/80 border border-slate-200/60 p-6 rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-1 text-sky-400">
                                        <i className="fa-solid fa-star text-xs"></i>
                                        <i className="fa-solid fa-star text-xs"></i>
                                        <i className="fa-solid fa-star text-xs"></i>
                                        <i className="fa-solid fa-star text-xs"></i>
                                        <i className="fa-solid fa-star text-xs"></i>
                                    </div>
                                    <i className="fa-solid fa-quote-right text-sky-200 text-2xl"></i>
                                </div>
                                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                                    &ldquo;Dr. Evans and the nursing team were exceptional. They made a stressful procedure
                                    feel calm and completely manageable. Thank you!&rdquo;
                                </p>
                            </div>
                            <div className="flex items-center gap-3 pt-2">
                                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
                                    alt="Marcus Miller" className="w-10 h-10 rounded-full object-cover" />
                                <div>
                                    <h4 className="font-bold text-slate-800 text-xs sm:text-sm">Marcus Miller</h4>
                                    <div className="flex items-center gap-1 text-sky-500 text-[11px]">
                                        <i className="fa-solid fa-circle-check"></i>
                                        <span>Verified Patient</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            className="bg-slate-50/80 border border-slate-200/60 p-6 rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-1 text-sky-400">
                                        <i className="fa-solid fa-star text-xs"></i>
                                        <i className="fa-solid fa-star text-xs"></i>
                                        <i className="fa-solid fa-star text-xs"></i>
                                        <i className="fa-solid fa-star text-xs"></i>
                                        <i className="fa-solid fa-star text-xs"></i>
                                    </div>
                                    <i className="fa-solid fa-quote-right text-sky-200 text-2xl"></i>
                                </div>
                                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                                    &ldquo;The follow-up care and remote check-ins gave me so much peace of mind during
                                    recovery. Truly top-tier healthcare services.&rdquo;
                                </p>
                            </div>
                            <div className="flex items-center gap-3 pt-2">
                                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
                                    alt="Elena Rossi" className="w-10 h-10 rounded-full object-cover" />
                                <div>
                                    <h4 className="font-bold text-slate-800 text-xs sm:text-sm">Elena Rossi</h4>
                                    <div className="flex items-center gap-1 text-sky-500 text-[11px]">
                                        <i className="fa-solid fa-circle-check"></i>
                                        <span>Verified Patient</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default PatientsSay