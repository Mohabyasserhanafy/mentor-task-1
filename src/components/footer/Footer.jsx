import logo from "../../assets/Link.png";

const Footer = () => {
    return (
        <footer className="w-full bg-white pt-16 pb-8 border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16">

                    <div className="lg:col-span-4 flex flex-col justify-between">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <img src={logo} alt="Clinova Logo" className="w-40 h-10 rounded-full" />
                            </div>

                            <p className="text-sm leading-relaxed text-slate-500 max-w-sm">
                                Providing compassionate healthcare through experienced professionals, modern treatments and patient-first care for every visit.
                            </p>
                        </div>

                        <div className="flex items-center gap-3 mt-8">
                            <a href="#" className="w-9 h-9 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center hover:bg-sky-600 hover:text-white transition-all duration-200">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path fill="currentColor" d="M23.643 4.937c-.835.37-1.732.62-2.675.733a4.67 4.67 0 0 0 2.048-2.578a9.3 9.3 0 0 1-2.958 1.13a4.66 4.66 0 0 0-7.938 4.25a13.23 13.23 0 0 1-9.602-4.868c-.4.69-.63 1.49-.63 2.342A4.66 4.66 0 0 0 3.96 9.824a4.65 4.65 0 0 1-2.11-.583v.06a4.66 4.66 0 0 0 3.737 4.568a4.7 4.7 0 0 1-2.104.08a4.66 4.66 0 0 0 4.352 3.234a9.35 9.35 0 0 1-5.786 1.995a10 10 0 0 1-1.112-.065a13.2 13.2 0 0 0 7.14 2.093c8.57 0 13.255-7.098 13.255-13.254q0-.301-.014-.602a9.5 9.5 0 0 0 2.323-2.41z" />
                                </svg>
                            </a>
                            <a href="#" className="w-9 h-9 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center hover:bg-sky-600 hover:text-white transition-all duration-200">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path fill="currentColor" d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22 22 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202z" />
                                </svg>
                            </a>
                            <a href="#" className="w-9 h-9 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center hover:bg-sky-600 hover:text-white transition-all duration-200">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path fill="currentColor" fillRule="evenodd" d="M1 2.838A1.84 1.84 0 0 1 2.838 1H21.16A1.837 1.837 0 0 1 23 2.838V21.16A1.84 1.84 0 0 1 21.161 23H2.838A1.84 1.84 0 0 1 1 21.161zm8.708 6.55h2.979v1.496c.43-.86 1.53-1.634 3.183-1.634c3.169 0 3.92 1.713 3.92 4.856v5.822h-3.207v-5.106c0-1.79-.43-2.8-1.522-2.8c-1.515 0-2.145 1.089-2.145 2.8v5.106H9.708zm-5.5 10.403h3.208V9.25H4.208zM7.875 5.812a2.063 2.063 0 1 1-4.125 0a2.063 2.063 0 0 1 4.125 0" clipRule="evenodd" />
                                </svg>
                            </a>
                            <a href="#" className="w-9 h-9 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center hover:bg-sky-600 hover:text-white transition-all duration-200">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
                                    <path d="M0 0h16v16H0z" fill="none" />
                                    <path fill="currentColor" d="M8 0C5.829 0 5.556.01 4.703.048C3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7C.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297c.04.852.174 1.433.372 1.942c.205.526.478.972.923 1.417c.444.445.89.719 1.416.923c.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417c.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046c.78.035 1.204.166 1.486.275c.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485c.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598c-.28.11-.704.24-1.485.276c-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598a2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485c-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486c.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276c.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92a.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217a4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334a2.667 2.667 0 0 1 0-5.334" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="lg:col-span-2">
                        <h3 className="text-xs font-bold text-slate-900 tracking-wider uppercase mb-5">
                            Quick Links
                        </h3>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-sky-600 transition-colors duration-150">About Us</a></li>
                            <li><a href="#" className="hover:text-sky-600 transition-colors duration-150">Our Services</a></li>
                            <li><a href="#" className="hover:text-sky-600 transition-colors duration-150">Medical Team</a></li>
                            <li><a href="#" className="hover:text-sky-600 transition-colors duration-150">Patient Reviews</a></li>
                            <li><a href="#" className="hover:text-sky-600 transition-colors duration-150">Book Appointment</a></li>
                        </ul>
                    </div>

                    <div className="lg:col-span-3">
                        <h3 className="text-xs font-bold text-slate-900 tracking-wider uppercase mb-5">
                            Specialties
                        </h3>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-sky-600 transition-colors duration-150">General Medicine</a></li>
                            <li><a href="#" className="hover:text-sky-600 transition-colors duration-150">Pediatric Care</a></li>
                            <li><a href="#" className="hover:text-sky-600 transition-colors duration-150">Dental Services</a></li>
                            <li><a href="#" className="hover:text-sky-600 transition-colors duration-150">Cardiology Unit</a></li>
                            <li><a href="#" className="hover:text-sky-600 transition-colors duration-150">Laboratory Diagnostics</a></li>
                        </ul>
                    </div>

                    <div className="lg:col-span-3">
                        <h3 className="text-xs font-bold text-slate-900 tracking-wider uppercase mb-5">
                            Where To Find Us
                        </h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                        <circle cx="12" cy="10" r="3" />
                                        <path d="M12 2a8 8 0 0 0-8 8c0 1.892.402 3.13 1.5 4.5L12 22l6.5-7.5c1.098-1.37 1.5-2.608 1.5-4.5a8 8 0 0 0-8-8" />
                                    </g>
                                </svg>
                                <span>San Francisco, USA</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512">
                                    <path d="M0 0h512v512H0z" fill="none" />
                                    <path fill="currentColor" d="M391 480c-19.52 0-46.94-7.06-88-30c-49.93-28-88.55-53.85-138.21-103.38C116.91 298.77 93.61 267.79 61 208.45c-36.84-67-30.56-102.12-23.54-117.13C45.82 73.38 58.16 62.65 74.11 52a176.3 176.3 0 0 1 28.64-15.2c1-.43 1.93-.84 2.76-1.21c4.95-2.23 12.45-5.6 21.95-2c6.34 2.38 12 7.25 20.86 16c18.17 17.92 43 57.83 52.16 77.43c6.15 13.21 10.22 21.93 10.23 31.71c0 11.45-5.76 20.28-12.75 29.81c-1.31 1.79-2.61 3.5-3.87 5.16c-7.61 10-9.28 12.89-8.18 18.05c2.23 10.37 18.86 41.24 46.19 68.51s57.31 42.85 67.72 45.07c5.38 1.15 8.33-.59 18.65-8.47c1.48-1.13 3-2.3 4.59-3.47c10.66-7.93 19.08-13.54 30.26-13.54h.06c9.73 0 18.06 4.22 31.86 11.18c18 9.08 59.11 33.59 77.14 51.78c8.77 8.84 13.66 14.48 16.05 20.81c3.6 9.53.21 17-2 22c-.37.83-.78 1.74-1.21 2.75a176.5 176.5 0 0 1-15.29 28.58c-10.63 15.9-21.4 28.21-39.38 36.58A67.4 67.4 0 0 1 391 480" />
                                </svg>
                                <a href="tel:+18002345678" className="hover:text-sky-600 transition-colors duration-150">+1 (800) 234-5678</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <g fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="2" strokeWidth="1.5">
                                        <path d="m2.75 10.25l.002-1.364L3.9 8.15l6.75-4.4L12 2.884l1.35.866l6.75 4.4l1.148.736l.002 1.364v10H2.75v-2.5Z" />
                                        <path d="m3.5 9.25l7.1 4.6l1.4.906l1.4-.906l7.1-4.6" />
                                    </g>
                                </svg>
                                <a href="mailto:support@clinova.com" className="hover:text-sky-600 transition-colors duration-150">support@clinova.com</a>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
                    <p>© 2026 Clinova Medical Group. All rights reserved.</p>

                    <div className="flex flex-wrap items-center gap-6">
                        <a href="#" className="hover:text-slate-600 transition-colors duration-150">Privacy Policy</a>
                        <a href="#" className="hover:text-slate-600 transition-colors duration-150">Terms of Service</a>
                        <a href="#" className="hover:text-slate-600 transition-colors duration-150">Security</a>
                        <a href="#" className="hover:text-slate-600 transition-colors duration-150">Cookie Preferences</a>
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer