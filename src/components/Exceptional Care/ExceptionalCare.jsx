
const ExceptionalCare = () => {
    return (
        <div className="bg-gray-50 flex items-center justify-center min-h-screen p-4">
            <div
                className="relative w-full max-w-4xl bg-linear-to-r from-[#e2f2ff] via-[#eaf5ff] to-[#d8eeff] rounded-3xl p-8 md:p-14 text-center shadow-sm overflow-hidden">

                <h1 className="text-3xl md:text-5xl font-extrabold text-[#111827] tracking-tight leading-tight">
                    Exceptional Care <br />
                    <span className="text-[#0099e6]">Awaits You</span>
                </h1>

                <p className="mt-4 text-gray-600 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
                    Whether it's a routine visit or ongoing care, we're here to help you stay healthy with confidence.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">

                    <a href="#"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#00a3f5] hover:bg-[#0088cc] text-white font-medium text-sm px-6 py-3.5 rounded-xl shadow-md transition-all duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                <rect width="20" height="18" x="2" y="4" rx="4" />
                                <path d="M8 2v4m8-4v4M2 10h20" />
                            </g>
                        </svg>
                        <span>Book an Appointment</span>
                    </a>

                    <a href="tel:+18002345678"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-[#0099e6] font-semibold text-sm px-6 py-3.5 rounded-xl border border-gray-100 shadow-sm transition-all duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512">
                            <path d="M0 0h512v512H0z" fill="none" />
                            <path fill="currentColor" d="M391 480c-19.52 0-46.94-7.06-88-30c-49.93-28-88.55-53.85-138.21-103.38C116.91 298.77 93.61 267.79 61 208.45c-36.84-67-30.56-102.12-23.54-117.13C45.82 73.38 58.16 62.65 74.11 52a176.3 176.3 0 0 1 28.64-15.2c1-.43 1.93-.84 2.76-1.21c4.95-2.23 12.45-5.6 21.95-2c6.34 2.38 12 7.25 20.86 16c18.17 17.92 43 57.83 52.16 77.43c6.15 13.21 10.22 21.93 10.23 31.71c0 11.45-5.76 20.28-12.75 29.81c-1.31 1.79-2.61 3.5-3.87 5.16c-7.61 10-9.28 12.89-8.18 18.05c2.23 10.37 18.86 41.24 46.19 68.51s57.31 42.85 67.72 45.07c5.38 1.15 8.33-.59 18.65-8.47c1.48-1.13 3-2.3 4.59-3.47c10.66-7.93 19.08-13.54 30.26-13.54h.06c9.73 0 18.06 4.22 31.86 11.18c18 9.08 59.11 33.59 77.14 51.78c8.77 8.84 13.66 14.48 16.05 20.81c3.6 9.53.21 17-2 22c-.37.83-.78 1.74-1.21 2.75a176.5 176.5 0 0 1-15.29 28.58c-10.63 15.9-21.4 28.21-39.38 36.58A67.4 67.4 0 0 1 391 480" />
                        </svg>
                        <span>+1 (800) 234–5678</span>
                    </a>

                </div>

            </div>
        </div>
    )
}

export default ExceptionalCare