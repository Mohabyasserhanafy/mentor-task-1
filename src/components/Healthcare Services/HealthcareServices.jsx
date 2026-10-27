
const HealthcareServices = () => {
    return (
        <main className="max-w-6xl w-full mx-auto my-0 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
            <header className="text-center mb-12 sm:mb-16">
                <div className="inline-block mb-3">
                    <span className="bg-sky-100/70 text-sky-600 text-[11px] uppercase tracking-wider font-extrabold px-4 py-1.5 rounded-full inline-block">
                        Our Services
                    </span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                    Healthcare Services<br />
                    <span className="text-sky-500">Designed for You</span>
                </h1>
            </header>

            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

                <article className="bg-white rounded-2xl p-7 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
                    <div>
                        <div className="w-14 h-14 rounded-2xl bg-sky-50 flex items-center justify-center text-sky-500 mb-6 group-hover:scale-105 transition-transform duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path fill="currentColor" fillRule="evenodd" d="M19 12a1 1 0 0 1 1 1v3.429C20 19.713 16.903 22 13.5 22C10.076 22 7 19.628 7 16.36V14a1 1 0 1 1 2 0v2.36C9 18.219 10.848 20 13.5 20c2.672 0 4.5-1.732 4.5-3.571V13a1 1 0 0 1 1-1" clipRule="evenodd" />
                                <path fill="currentColor" fillRule="evenodd" d="M4.828 4A.83.83 0 0 0 4 4.828v5.12C4 11.537 5.466 13 7.5 13S11 11.537 11 9.947v-5.26A.687.687 0 0 0 10.312 4h-.609a1 1 0 0 1 0-2h.61A2.687 2.687 0 0 1 13 4.688v5.26C13 12.833 10.437 15 7.5 15S2 12.834 2 9.947V4.828A2.83 2.83 0 0 1 4.828 2h.61a1 1 0 0 1 0 2zm14.049 4.846c-.742 0-1.23.605-1.23 1.23c0 .627.307 1.232 1.23 1.232c.774 0 1.23-.533 1.23-1.231c0-.62-.37-1.23-1.23-1.23Zm3.077 1.23a3.077 3.077 0 1 1-6.154.001a3.077 3.077 0 0 1 6.154 0Z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <h2 className="text-xl font-bold text-slate-900 mb-3">
                            General Consultation
                        </h2>
                        <p className="text-slate-500 text-sm leading-relaxed mb-8">
                            Comprehensive medical assessments, routine check-ups, and preventive care strategies for every stage of life.
                        </p>
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-slate-50">
                        <span className="bg-sky-50/80 text-sky-600 text-xs font-semibold px-3 py-1.5 rounded-full">
                            Routine Care
                        </span>
                        <a href="#" className="text-sky-500 hover:text-sky-600 text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                            Learn More <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12h16m-7-7l7 7l-7 7" />
                            </svg>
                        </a>
                    </div>
                </article>

                <article className="bg-white rounded-2xl p-7 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
                    <div>
                        <div className="w-14 h-14 rounded-2xl bg-sky-50 flex items-center justify-center text-sky-500 mb-6 group-hover:scale-105 transition-transform duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <g fill="none">
                                    <path fill="currentColor" d="M11.97 21.04c4.1 0 7.57-2.74 8.66-6.49c0 0 1.64-.27 1.64-2.54c0-2.17-1.66-2.58-1.66-2.58a9.02 9.02 0 0 0-17.27 0s-1.6.47-1.6 2.57c0 2.2 1.58 2.55 1.58 2.55a9 9 0 0 0 8.65 6.5" opacity=".2" />
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.7 3.1S8.94 4.28 9.55 5.75c1 2.39 5 .82 5 .82" />
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.97 21.04c4.1 0 7.57-2.74 8.66-6.49c0 0 1.65-.29 1.65-2.55c0-2.17-1.67-2.57-1.67-2.57a9.02 9.02 0 0 0-17.27 0s-1.6.44-1.6 2.55c0 2.2 1.58 2.57 1.58 2.57a9 9 0 0 0 8.65 6.5" />
                                    <path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.77 11.5a.53.53 0 1 1-1.06 0a.53.53 0 0 1 1.06 0m5.52 0a.53.53 0 1 1-1.06 0a.53.53 0 0 1 1.06 0" />
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.93 15.73s.94 1.2 3.07 1.2s3.07-1.2 3.07-1.2" />
                                </g>
                            </svg>
                        </div>
                        <h2 className="text-xl font-bold text-slate-900 mb-3">
                            Pediatric Care
                        </h2>
                        <p className="text-slate-500 text-sm leading-relaxed mb-8">
                            Specialized, gentle medical attention for newborns, infants, children, and adolescents with compassionate experts.
                        </p>
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-slate-50">
                        <span className="bg-sky-50/80 text-sky-600 text-xs font-semibold px-3 py-1.5 rounded-full">
                            Family Health
                        </span>
                        <a href="#" className="text-sky-500 hover:text-sky-600 text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                            Learn More <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12h16m-7-7l7 7l-7 7" />
                            </svg>

                        </a>
                    </div>
                </article>

                <article className="bg-white rounded-2xl p-7 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
                    <div>
                        <div className="w-14 h-14 rounded-2xl bg-sky-50 flex items-center justify-center text-sky-500 mb-6 group-hover:scale-105 transition-transform duration-300">
                            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 2C8.5 2 6 4.5 6 7.5C6 10.5 7 13 8 16C8.8 18.4 9.2 21 10.5 21C11.5 21 11.8 19.5 12 18C12.2 19.5 12.5 21 13.5 21C14.8 21 15.2 18.4 16 16C17 13 18 10.5 18 7.5C18 4.5 15.5 2 12 2Z" />
                            </svg>
                        </div>
                        <h2 className="text-xl font-bold text-slate-900 mb-3">
                            Dental Care
                        </h2>
                        <p className="text-slate-500 text-sm leading-relaxed mb-8">
                            Advanced oral health treatments, teeth whitening, hygiene maintenance, and pain-free restorative procedures.
                        </p>
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-slate-50">
                        <span className="bg-sky-50/80 text-sky-600 text-xs font-semibold px-3 py-1.5 rounded-full">
                            Oral Health
                        </span>
                        <a href="#" className="text-sky-500 hover:text-sky-600 text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                            Learn More <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12h16m-7-7l7 7l-7 7" />
                            </svg>
                        </a>
                    </div>
                </article>

                <article className="bg-white rounded-2xl p-7 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
                    <div>
                        <div className="w-14 h-14 rounded-2xl bg-sky-50 flex items-center justify-center text-sky-500 mb-6 group-hover:scale-105 transition-transform duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <g fill="none">
                                    <path fill="currentColor" d="M12 21.38c.23 0 .47-.22.95-.64c2.73-2.4 6.69-4.46 8.43-8.2h-6.5l-1.93 2.4l-3.5-5.1l-2.18 2.7H2.62c1.74 3.74 5.7 5.8 8.43 8.2c.48.42.72.64.95.64" opacity=".2" />
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.88 3.1c1.71 0 3.14.94 4.08 1.87c.56.55.83.82 1.04.82c.2 0 .48-.27 1.04-.82a6 6 0 0 1 4.08-1.87c3.23 0 5.13 3.05 5.13 5.36c0 6.68-5.92 9.21-9.5 12.45c-.37.35-.56.52-.75.52c-.2 0-.38-.17-.76-.52c-3.57-3.24-9.49-5.77-9.49-12.45c0-2.31 1.9-5.36 5.13-5.36" />
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.1 12.38h3.96c.28 0 .43 0 .54-.07s.2-.2.33-.44l.7-1.25c.4-.7.59-1.06.88-1.05c.3 0 .5.36.87 1.07l1.94 3.63c.4.75.6 1.13.91 1.12c.3 0 .5-.39.87-1.15l.64-1.3c.13-.27.2-.4.32-.48s.27-.08.58-.08h5.26" />
                                </g>
                            </svg>
                        </div>
                        <h2 className="text-xl font-bold text-slate-900 mb-3">
                            Cardiology Services
                        </h2>
                        <p className="text-slate-500 text-sm leading-relaxed mb-8">
                            In-depth cardiovascular diagnosis, ECG monitoring, heart disease prevention, and dedicated specialized care.
                        </p>
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-slate-50">
                        <span className="bg-sky-50/80 text-sky-600 text-xs font-semibold px-3 py-1.5 rounded-full">
                            Specialized
                        </span>
                        <a href="#" className="text-sky-500 hover:text-sky-600 text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                            Learn More <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12h16m-7-7l7 7l-7 7" />
                            </svg>
                        </a>
                    </div>
                </article>

                <article className="bg-white rounded-2xl p-7 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
                    <div>
                        <div className="w-14 h-14 rounded-2xl bg-sky-50 flex items-center justify-center text-sky-500 mb-6 group-hover:scale-105 transition-transform duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                    <path fill="currentColor" d="M10.5 1L13.5 1C14.6046 1 15.5 1.8954 15.5 3L15.5 7.7741L20.7064 18.7105C20.8981 19.1133 20.9976 19.5539 20.9976 20C20.9976 21.6569 19.6545 23 17.9976 23L6.0024 23C4.3455 23 3.0024 21.6569 3.0024 20C3.0024 19.5539 3.1019 19.1133 3.2936 18.7105L8.5 7.7741L8.5 3C8.5 1.8954 9.3954 1 10.5 1ZM10.5 3L10.5 7.7741C10.5 8.0715 10.4337 8.3652 10.3058 8.6338L6.323 17L17.677 17L13.6942 8.6338C13.5663 8.3652 13.5 8.0715 13.5 7.7741L13.5 3L10.5 3Z" stroke="none" />
                                    <path d="M8 2L16 2" />
                                </g>
                            </svg>
                        </div>
                        <h2 className="text-xl font-bold text-slate-900 mb-3">
                            Laboratory & Diagnostics
                        </h2>
                        <p className="text-slate-500 text-sm leading-relaxed mb-8">
                            Fast, highly accurate diagnostic lab tests, pathology screening, and digital imaging results you can trust.
                        </p>
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-slate-50">
                        <span className="bg-sky-50/80 text-sky-600 text-xs font-semibold px-3 py-1.5 rounded-full">
                            Modern Lab
                        </span>
                        <a href="#" className="text-sky-500 hover:text-sky-600 text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                            Learn More <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12h16m-7-7l7 7l-7 7" />
                            </svg>
                        </a>
                    </div>
                </article>

                <article className="bg-white rounded-2xl p-7 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
                    <div>
                        <div className="w-14 h-14 rounded-2xl bg-sky-50 flex items-center justify-center text-sky-500 mb-6 group-hover:scale-105 transition-transform duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 56 56">
                                <path d="M0 0h56v56H0z" fill="none" />
                                <path fill="currentColor" d="M1.902 46.723h1.3c1.136 0 1.878-.72 1.878-1.856v-3.294c.255.07.998.116 1.531.116h42.8c.534 0 1.254-.047 1.509-.116v3.294c0 1.137.742 1.856 1.879 1.856h1.322c1.137 0 1.879-.72 1.879-1.856V29.742c0-3.967-2.018-6.194-5.753-6.473V15.66c0-4.106-2.18-6.193-6.17-6.193H11.924c-3.967 0-6.17 2.087-6.17 6.193v7.61C2.017 23.547 0 25.774 0 29.741v15.125c0 1.137.742 1.856 1.902 1.856m9.674-27.583c0-2.041 1.136-3.178 3.224-3.178h7.772c2.064 0 3.224 1.137 3.224 3.178v4.106h-14.22Zm18.651 0c0-2.041 1.137-3.178 3.225-3.178H41.2c2.087 0 3.248 1.137 3.248 3.178v4.106h-14.22ZM4.64 38.302c-.464 0-.766-.325-.766-.859v-8.05c0-1.693 1.114-2.76 2.83-2.76H49.32c1.693 0 2.807 1.067 2.807 2.76v8.05c0 .534-.302.859-.742.859Z" />
                            </svg>
                        </div>
                        <h2 className="text-xl font-bold text-slate-900 mb-3">
                            Physical Therapy & Rehab
                        </h2>
                        <p className="text-slate-500 text-sm leading-relaxed mb-8">
                            Tailored rehabilitation and physical therapy programs helping you regain mobility, strength, and comfort.
                        </p>
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-slate-50">
                        <span className="bg-sky-50/80 text-sky-600 text-xs font-semibold px-3 py-1.5 rounded-full">
                            Recovery
                        </span>
                        <a href="#" className="text-sky-500 hover:text-sky-600 text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                            Learn More <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12h16m-7-7l7 7l-7 7" />
                            </svg>
                        </a>
                    </div>
                </article>

            </section>
        </main>
    )
}

export default HealthcareServices