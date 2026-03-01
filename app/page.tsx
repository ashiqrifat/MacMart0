'use client';

import { useState, useEffect } from 'react';

export default function Page() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="font-sans text-gray-800" data-oid=":4likc-">
            {/* Sticky Header */}
            <header
                className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}
                data-oid="db6moop"
            >
                <div
                    className="container mx-auto px-4 md:px-8 flex justify-between items-center"
                    data-oid="2y7ay58"
                >
                    <div className="text-xl md:text-2xl font-bold" data-oid="gcth1_b">
                        MacMart Group Limited
                    </div>
                    <nav className="hidden md:flex space-x-6" data-oid="f_iij1y">
                        <a
                            href="#"
                            className="hover:text-amber-600 transition-colors"
                            data-oid="2nf-im0"
                        >
                            Home
                        </a>
                        <a
                            href="#"
                            className="hover:text-amber-600 transition-colors"
                            data-oid="qym2h44"
                        >
                            Properties
                        </a>
                        <a
                            href="#"
                            className="hover:text-amber-600 transition-colors"
                            data-oid="mffb-rs"
                        >
                            About
                        </a>
                        <a
                            href="#"
                            className="hover:text-amber-600 transition-colors"
                            data-oid="e:.m.3b"
                        >
                            Agents
                        </a>
                        <a
                            href="#"
                            className="hover:text-amber-600 transition-colors"
                            data-oid=".oa_uyx"
                        >
                            Contact
                        </a>
                    </nav>
                    <div className="flex items-center space-x-4" data-oid="-k1am5z">
                        <button
                            className="hidden md:block px-4 py-2 border border-amber-600 text-amber-600 rounded hover:bg-amber-600 hover:text-white transition-colors"
                            data-oid="en0s2x1"
                        >
                            Login
                        </button>
                        <button
                            className="px-4 py-2 bg-amber-600 text-white rounded hover:bg-amber-700 transition-colors"
                            data-oid="f:y1:bw"
                        >
                            Register
                        </button>
                        <button className="md:hidden text-gray-700" data-oid="qcyt0fk">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                data-oid="d2s0t53"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                    data-oid="-hyzcmt"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section
                className="relative h-screen bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')",
                }}
                data-oid="t1qf8h6"
            >
                <div className="absolute inset-0 bg-black bg-opacity-40" data-oid="z3jn3uo"></div>
                <div
                    className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4"
                    data-oid="slccj.t"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-6" data-oid="1-1y2dl">
                        Find Your Dream Property
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-2xl" data-oid="d2x.vj8">
                        Discover the perfect home with MacMart Group Limited
                    </p>

                    <div
                        className="bg-white p-4 md:p-6 rounded-lg shadow-lg w-full max-w-4xl"
                        data-oid=".3y14ba"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4" data-oid="yhyho26">
                            <div className="relative" data-oid="659hz8p">
                                <select
                                    className="w-full p-3 border border-gray-300 rounded appearance-none focus:outline-none focus:ring-2 focus:ring-amber-600 text-gray-700"
                                    data-oid="2skghw5"
                                >
                                    <option data-oid="4op6pgc">For Sale</option>
                                    <option data-oid="aplmw8p">For Rent</option>
                                </select>
                                <div
                                    className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none"
                                    data-oid="xcn8u3."
                                >
                                    <svg
                                        className="w-4 h-4 text-gray-400"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        data-oid="szusu7z"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M19 9l-7 7-7-7"
                                            data-oid="9-n2p8i"
                                        ></path>
                                    </svg>
                                </div>
                            </div>
                            <div className="relative" data-oid="-w:1vux">
                                <select
                                    className="w-full p-3 border border-gray-300 rounded appearance-none focus:outline-none focus:ring-2 focus:ring-amber-600 text-gray-700"
                                    data-oid="35o0lcj"
                                >
                                    <option data-oid="8-r728u">Location</option>
                                    <option data-oid="bl.319l">New York</option>
                                    <option data-oid="02k3yx8">Los Angeles</option>
                                    <option data-oid="zvrs747">Chicago</option>
                                </select>
                                <div
                                    className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none"
                                    data-oid="23luisu"
                                >
                                    <svg
                                        className="w-4 h-4 text-gray-400"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        data-oid="3qtnohe"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M19 9l-7 7-7-7"
                                            data-oid="a1a15eu"
                                        ></path>
                                    </svg>
                                </div>
                            </div>
                            <div className="relative" data-oid="k1w92jr">
                                <select
                                    className="w-full p-3 border border-gray-300 rounded appearance-none focus:outline-none focus:ring-2 focus:ring-amber-600 text-gray-700"
                                    data-oid="jyph9hq"
                                >
                                    <option data-oid="uk24xr2">Property Type</option>
                                    <option data-oid="dpdhi3g">Apartment</option>
                                    <option data-oid="88bmqjd">House</option>
                                    <option data-oid="rmpq39f">Condo</option>
                                </select>
                                <div
                                    className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none"
                                    data-oid="58gm1vr"
                                >
                                    <svg
                                        className="w-4 h-4 text-gray-400"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        data-oid="1yml6r3"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M19 9l-7 7-7-7"
                                            data-oid="ubiocox"
                                        ></path>
                                    </svg>
                                </div>
                            </div>
                            <button
                                className="bg-amber-600 text-white p-3 rounded hover:bg-amber-700 transition-colors"
                                data-oid="pe6oyv0"
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Us Section */}
            <section className="relative py-16 px-4 md:px-8" data-oid="2n4wid6">
                <div
                    className="absolute top-0 left-0 right-0 h-24 bg-white"
                    style={{
                        borderRadius: '0 0 50% 50%/0 0 100% 100%',
                        transform: 'translateY(-50%)',
                    }}
                    data-oid="3:smefx"
                ></div>
                <div
                    className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                    data-oid="1odsphf"
                >
                    <div data-oid="nkm6_0l">
                        <img
                            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80"
                            alt="Real Estate Agent"
                            className="rounded-lg shadow-lg w-full h-auto"
                            data-oid=":6zjal4"
                        />
                    </div>
                    <div data-oid="9s.a9uw">
                        <h2 className="text-3xl font-bold mb-6" data-oid="dj29tt3">
                            About Us
                        </h2>
                        <p className="text-gray-600 mb-6" data-oid="m1if6lp">
                            MacMart Group Limited is a premier real estate company dedicated to
                            helping clients find their perfect property. With years of experience
                            and a deep understanding of the market, we provide exceptional service
                            tailored to your needs.
                        </p>
                        <p className="text-gray-600 mb-8" data-oid="ttfzdep">
                            Our team of professional agents is committed to making your property
                            journey smooth and successful, whether you're buying, selling, or
                            renting.
                        </p>
                        <button
                            className="px-6 py-3 bg-amber-600 text-white rounded hover:bg-amber-700 transition-colors"
                            data-oid="lc4x2xp"
                        >
                            Learn More
                        </button>
                    </div>
                </div>
            </section>

            {/* Featured Properties */}
            <section className="relative py-16 px-4 md:px-8 bg-gray-50" data-oid="dt12frp">
                <div
                    className="absolute top-0 left-0 right-0 h-24 bg-white"
                    style={{
                        borderRadius: '0 0 50% 50%/0 0 100% 100%',
                        transform: 'translateY(-50%)',
                    }}
                    data-oid="e5-8nmm"
                ></div>
                <div className="container mx-auto" data-oid="tqugzf5">
                    <div className="text-center mb-12" data-oid="xkixh.f">
                        <h2 className="text-3xl font-bold mb-4" data-oid="boezh8c">
                            Featured Properties
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto" data-oid="yele1zp">
                            Explore our handpicked selection of premium properties available for
                            sale and rent
                        </p>
                    </div>

                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        data-oid="2xzn::7"
                    >
                        {/* Property Card 1 */}
                        <div
                            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                            data-oid="vdq06n1"
                        >
                            <div className="relative" data-oid="cw41:t:">
                                <img
                                    src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                                    alt="Property"
                                    className="w-full h-64 object-cover"
                                    data-oid="ads26l-"
                                />

                                <div
                                    className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 rounded"
                                    data-oid="oeh90p7"
                                >
                                    For Sale
                                </div>
                            </div>
                            <div className="p-6" data-oid="1oj_2:8">
                                <h3 className="text-xl font-bold mb-2" data-oid="58qu0.d">
                                    Luxury Apartment
                                </h3>
                                <p className="text-gray-500 mb-4" data-oid="273x16l">
                                    123 Main St, New York, NY
                                </p>
                                <div className="flex justify-between mb-4" data-oid="0r7vpfk">
                                    <span
                                        className="flex items-center text-gray-600"
                                        data-oid="v70i:m:"
                                    >
                                        <svg
                                            className="w-5 h-5 mr-1"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            data-oid="xhx0dug"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                                data-oid="evx87x5"
                                            ></path>
                                        </svg>
                                        3 Beds
                                    </span>
                                    <span
                                        className="flex items-center text-gray-600"
                                        data-oid="3epwc0_"
                                    >
                                        <svg
                                            className="w-5 h-5 mr-1"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            data-oid="tmgy6cg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                data-oid="sw-fv83"
                                            ></path>
                                        </svg>
                                        2 Baths
                                    </span>
                                    <span
                                        className="flex items-center text-gray-600"
                                        data-oid="837pu3v"
                                    >
                                        <svg
                                            className="w-5 h-5 mr-1"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            data-oid="p0bzkf3"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5"
                                                data-oid="6k:rbq3"
                                            ></path>
                                        </svg>
                                        1,200 sqft
                                    </span>
                                </div>
                                <div
                                    className="flex justify-between items-center"
                                    data-oid="w_uu4xt"
                                >
                                    <span
                                        className="text-xl font-bold text-amber-600"
                                        data-oid="2_6kf2z"
                                    >
                                        $850,000
                                    </span>
                                    <button
                                        className="px-4 py-2 border border-amber-600 text-amber-600 rounded hover:bg-amber-600 hover:text-white transition-colors"
                                        data-oid="63-tutq"
                                    >
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Property Card 2 */}
                        <div
                            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                            data-oid="r:ak9-c"
                        >
                            <div className="relative" data-oid="c6fuola">
                                <img
                                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                                    alt="Property"
                                    className="w-full h-64 object-cover"
                                    data-oid="8bb4a4p"
                                />

                                <div
                                    className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded"
                                    data-oid="3o:c863"
                                >
                                    For Rent
                                </div>
                            </div>
                            <div className="p-6" data-oid="sazq3._">
                                <h3 className="text-xl font-bold mb-2" data-oid="8vwy6tl">
                                    Modern Townhouse
                                </h3>
                                <p className="text-gray-500 mb-4" data-oid="1e50tu9">
                                    456 Park Ave, Chicago, IL
                                </p>
                                <div className="flex justify-between mb-4" data-oid="_qdv_2r">
                                    <span
                                        className="flex items-center text-gray-600"
                                        data-oid="o9rnv.1"
                                    >
                                        <svg
                                            className="w-5 h-5 mr-1"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            data-oid="8i_fxpo"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                                data-oid="uaqeyhk"
                                            ></path>
                                        </svg>
                                        4 Beds
                                    </span>
                                    <span
                                        className="flex items-center text-gray-600"
                                        data-oid="osifm1o"
                                    >
                                        <svg
                                            className="w-5 h-5 mr-1"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            data-oid="_hm7taj"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                data-oid="jch0i9d"
                                            ></path>
                                        </svg>
                                        3 Baths
                                    </span>
                                    <span
                                        className="flex items-center text-gray-600"
                                        data-oid="z.8nth2"
                                    >
                                        <svg
                                            className="w-5 h-5 mr-1"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            data-oid="mw:5_lw"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5"
                                                data-oid="_5ztlx3"
                                            ></path>
                                        </svg>
                                        1,800 sqft
                                    </span>
                                </div>
                                <div
                                    className="flex justify-between items-center"
                                    data-oid="57c6g4q"
                                >
                                    <span
                                        className="text-xl font-bold text-amber-600"
                                        data-oid="yj.m5v-"
                                    >
                                        $3,500/mo
                                    </span>
                                    <button
                                        className="px-4 py-2 border border-amber-600 text-amber-600 rounded hover:bg-amber-600 hover:text-white transition-colors"
                                        data-oid="tbu_--v"
                                    >
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Property Card 3 */}
                        <div
                            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                            data-oid="3trnyqu"
                        >
                            <div className="relative" data-oid="glmkxql">
                                <img
                                    src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=875&q=80"
                                    alt="Property"
                                    className="w-full h-64 object-cover"
                                    data-oid="7lkttd8"
                                />

                                <div
                                    className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 rounded"
                                    data-oid="q6a9cax"
                                >
                                    For Sale
                                </div>
                            </div>
                            <div className="p-6" data-oid="_p3d:5_">
                                <h3 className="text-xl font-bold mb-2" data-oid="-vr_4y9">
                                    Family Home
                                </h3>
                                <p className="text-gray-500 mb-4" data-oid="0:ogn_.">
                                    789 Ocean Dr, Los Angeles, CA
                                </p>
                                <div className="flex justify-between mb-4" data-oid="_t6ph05">
                                    <span
                                        className="flex items-center text-gray-600"
                                        data-oid=".6:12p8"
                                    >
                                        <svg
                                            className="w-5 h-5 mr-1"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            data-oid="zzhwojq"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                                data-oid="obthlah"
                                            ></path>
                                        </svg>
                                        5 Beds
                                    </span>
                                    <span
                                        className="flex items-center text-gray-600"
                                        data-oid="pqffz52"
                                    >
                                        <svg
                                            className="w-5 h-5 mr-1"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            data-oid="51wqwul"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                data-oid="gq0y9gy"
                                            ></path>
                                        </svg>
                                        4 Baths
                                    </span>
                                    <span
                                        className="flex items-center text-gray-600"
                                        data-oid="xo7_oh5"
                                    >
                                        <svg
                                            className="w-5 h-5 mr-1"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            data-oid="tel2xn8"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5"
                                                data-oid="52x.ozc"
                                            ></path>
                                        </svg>
                                        2,500 sqft
                                    </span>
                                </div>
                                <div
                                    className="flex justify-between items-center"
                                    data-oid="3.hu23z"
                                >
                                    <span
                                        className="text-xl font-bold text-amber-600"
                                        data-oid="3z60sx2"
                                    >
                                        $1,250,000
                                    </span>
                                    <button
                                        className="px-4 py-2 border border-amber-600 text-amber-600 rounded hover:bg-amber-600 hover:text-white transition-colors"
                                        data-oid="f4p-2cc"
                                    >
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-12" data-oid="-re27zt">
                        <button
                            className="px-6 py-3 bg-amber-600 text-white rounded hover:bg-amber-700 transition-colors"
                            data-oid="j6bfw3l"
                        >
                            View All Properties
                        </button>
                    </div>
                </div>
            </section>

            {/* Featured Locations */}
            <section className="relative py-16 px-4 md:px-8" data-oid="g8lip:-">
                <div
                    className="absolute top-0 left-0 right-0 h-24 bg-gray-50"
                    style={{
                        borderRadius: '0 0 50% 50%/0 0 100% 100%',
                        transform: 'translateY(-50%)',
                    }}
                    data-oid="z6u6z9-"
                ></div>
                <div className="container mx-auto" data-oid="mhhq5xo">
                    <div className="text-center mb-12" data-oid="cy:p.s0">
                        <h2 className="text-3xl font-bold mb-4" data-oid="te3ytx2">
                            Featured Locations
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto" data-oid="8pkmmi_">
                            Explore properties in these popular locations
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-oid="6.om71k">
                        <div
                            className="relative rounded-lg overflow-hidden group h-80"
                            data-oid="6hagfn9"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                                alt="New York"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                data-oid="p97apk6"
                            />

                            <div
                                className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"
                                data-oid="_nxhjbr"
                            ></div>
                            <div
                                className="absolute bottom-0 left-0 p-6 text-white"
                                data-oid="pmy3sda"
                            >
                                <h3 className="text-2xl font-bold mb-2" data-oid="cn3s9be">
                                    New York
                                </h3>
                                <p data-oid="5s-v-2c">125 Properties</p>
                            </div>
                        </div>

                        <div
                            className="relative rounded-lg overflow-hidden group h-80"
                            data-oid=":s:oymd"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80"
                                alt="Los Angeles"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                data-oid="o1p:tnc"
                            />

                            <div
                                className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"
                                data-oid="o:82xri"
                            ></div>
                            <div
                                className="absolute bottom-0 left-0 p-6 text-white"
                                data-oid="oa5ajw7"
                            >
                                <h3 className="text-2xl font-bold mb-2" data-oid="xxfli20">
                                    Los Angeles
                                </h3>
                                <p data-oid="ryu_bs4">93 Properties</p>
                            </div>
                        </div>

                        <div
                            className="relative rounded-lg overflow-hidden group h-80"
                            data-oid="-k7pu8-"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=944&q=80"
                                alt="Chicago"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                data-oid="oo:kicf"
                            />

                            <div
                                className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"
                                data-oid="j4x1mjd"
                            ></div>
                            <div
                                className="absolute bottom-0 left-0 p-6 text-white"
                                data-oid="ctwnzi5"
                            >
                                <h3 className="text-2xl font-bold mb-2" data-oid="21igsgz">
                                    Chicago
                                </h3>
                                <p data-oid="8gu741s">78 Properties</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Property Types */}
            <section className="relative py-16 px-4 md:px-8 bg-gray-50" data-oid="osya:r1">
                <div
                    className="absolute top-0 left-0 right-0 h-24 bg-white"
                    style={{
                        borderRadius: '0 0 50% 50%/0 0 100% 100%',
                        transform: 'translateY(-50%)',
                    }}
                    data-oid="03..qzx"
                ></div>
                <div className="container mx-auto" data-oid="ov0l37n">
                    <div className="text-center mb-12" data-oid="yzp1kq3">
                        <h2 className="text-3xl font-bold mb-4" data-oid="8uef1kr">
                            Browse By Property Type
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto" data-oid="l4oy6n3">
                            Find your perfect property based on your preferences
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6" data-oid="xicn6bz">
                        {/* Apartments */}
                        <div
                            className="relative rounded-lg overflow-hidden group shadow-md hover:shadow-xl transition-shadow"
                            data-oid="7ognv5q"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                                alt="Apartments"
                                className="w-full h-48 object-cover"
                                data-oid="f.i2.cw"
                            />

                            <div
                                className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white"
                                data-oid="77r.tus"
                            >
                                <h3 className="text-xl font-bold mb-1" data-oid="iwoy08q">
                                    Apartments
                                </h3>
                                <p
                                    className="text-sm bg-amber-600 px-3 py-1 rounded-full"
                                    data-oid=".4qj9id"
                                >
                                    4 Listings
                                </p>
                            </div>
                        </div>

                        {/* Condos */}
                        <div
                            className="relative rounded-lg overflow-hidden group shadow-md hover:shadow-xl transition-shadow"
                            data-oid="dbll:5z"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
                                alt="Condos"
                                className="w-full h-48 object-cover"
                                data-oid="n0pfn-q"
                            />

                            <div
                                className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white"
                                data-oid="ge48bt-"
                            >
                                <h3 className="text-xl font-bold mb-1" data-oid="r1_.c72">
                                    Condos
                                </h3>
                                <p
                                    className="text-sm bg-amber-600 px-3 py-1 rounded-full"
                                    data-oid="mj:zc9t"
                                >
                                    2 Listings
                                </p>
                            </div>
                        </div>

                        {/* Houses */}
                        <div
                            className="relative rounded-lg overflow-hidden group shadow-md hover:shadow-xl transition-shadow"
                            data-oid="x6_omsz"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                                alt="Houses"
                                className="w-full h-48 object-cover"
                                data-oid="gbub5r2"
                            />

                            <div
                                className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white"
                                data-oid="ihkmbfl"
                            >
                                <h3 className="text-xl font-bold mb-1" data-oid="z4s13ve">
                                    Houses
                                </h3>
                                <p
                                    className="text-sm bg-amber-600 px-3 py-1 rounded-full"
                                    data-oid=".byggtk"
                                >
                                    4 Listings
                                </p>
                            </div>
                        </div>

                        {/* Villas */}
                        <div
                            className="relative rounded-lg overflow-hidden group shadow-md hover:shadow-xl transition-shadow"
                            data-oid="_498xqe"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                                alt="Villas"
                                className="w-full h-48 object-cover"
                                data-oid="dmy1rw8"
                            />

                            <div
                                className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white"
                                data-oid="b-ym.xz"
                            >
                                <h3 className="text-xl font-bold mb-1" data-oid="3fu_gsn">
                                    Villas
                                </h3>
                                <p
                                    className="text-sm bg-amber-600 px-3 py-1 rounded-full"
                                    data-oid="s3rw.dn"
                                >
                                    5 Listings
                                </p>
                            </div>
                        </div>

                        {/* Duplexes */}
                        <div
                            className="relative rounded-lg overflow-hidden group shadow-md hover:shadow-xl transition-shadow"
                            data-oid="scsogs7"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                                alt="Duplexes"
                                className="w-full h-48 object-cover"
                                data-oid="jk6p_tz"
                            />

                            <div
                                className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white"
                                data-oid="dc8.ks_"
                            >
                                <h3 className="text-xl font-bold mb-1" data-oid="yzye2mm">
                                    Duplexes
                                </h3>
                                <p
                                    className="text-sm bg-amber-600 px-3 py-1 rounded-full"
                                    data-oid="1sftyx4"
                                >
                                    0 Listings
                                </p>
                            </div>
                        </div>

                        {/* Land */}
                        <div
                            className="relative rounded-lg overflow-hidden group shadow-md hover:shadow-xl transition-shadow"
                            data-oid="zq7_5u_"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
                                alt="Land"
                                className="w-full h-48 object-cover"
                                data-oid="p0jv2i5"
                            />

                            <div
                                className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white"
                                data-oid="zurnl19"
                            >
                                <h3 className="text-xl font-bold mb-1" data-oid="bm7km:4">
                                    Land
                                </h3>
                                <p
                                    className="text-sm bg-amber-600 px-3 py-1 rounded-full"
                                    data-oid="989z8g7"
                                >
                                    3 Listings
                                </p>
                            </div>
                        </div>

                        {/* Offices */}
                        <div
                            className="relative rounded-lg overflow-hidden group shadow-md hover:shadow-xl transition-shadow"
                            data-oid="ocmlutb"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
                                alt="Offices"
                                className="w-full h-48 object-cover"
                                data-oid="bpgq7lj"
                            />

                            <div
                                className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white"
                                data-oid="p3fepye"
                            >
                                <h3 className="text-xl font-bold mb-1" data-oid="d:22sha">
                                    Offices
                                </h3>
                                <p
                                    className="text-sm bg-amber-600 px-3 py-1 rounded-full"
                                    data-oid="dr0ze0a"
                                >
                                    3 Listings
                                </p>
                            </div>
                        </div>

                        {/* Retail */}
                        <div
                            className="relative rounded-lg overflow-hidden group shadow-md hover:shadow-xl transition-shadow"
                            data-oid="9qcmr9_"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                                alt="Retail"
                                className="w-full h-48 object-cover"
                                data-oid="6:tdpmf"
                            />

                            <div
                                className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white"
                                data-oid="ey7u2p3"
                            >
                                <h3 className="text-xl font-bold mb-1" data-oid="qf1q1l_">
                                    Retail
                                </h3>
                                <p
                                    className="text-sm bg-amber-600 px-3 py-1 rounded-full"
                                    data-oid="-b9gwu7"
                                >
                                    0 Listings
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Agents */}
            <section className="relative py-16 px-4 md:px-8" data-oid="1_a8y_c">
                <div
                    className="absolute top-0 left-0 right-0 h-24 bg-gray-50"
                    style={{
                        borderRadius: '0 0 50% 50%/0 0 100% 100%',
                        transform: 'translateY(-50%)',
                    }}
                    data-oid="lvao5jr"
                ></div>
                <div className="container mx-auto" data-oid="tydsppw">
                    <div className="text-center mb-12" data-oid="psjtg4a">
                        <h2 className="text-3xl font-bold mb-4" data-oid="w3pcrs:">
                            Our Expert Agents
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto" data-oid="jiwzfql">
                            Meet our team of experienced real estate professionals
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-oid="yc_jix:">
                        <div
                            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                            data-oid="ddi274b"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                                alt="Agent"
                                className="w-full h-64 object-cover"
                                data-oid="2-1-liz"
                            />

                            <div className="p-6" data-oid="2qpa3m_">
                                <h3 className="text-xl font-bold mb-2" data-oid="-cc5531">
                                    John Smith
                                </h3>
                                <p className="text-amber-600 mb-4" data-oid="jz1t5cz">
                                    Senior Property Consultant
                                </p>
                                <p className="text-gray-600 mb-4" data-oid="qf8tepp">
                                    Specializing in luxury properties with over 10 years of
                                    experience in the real estate market.
                                </p>
                                <div className="flex space-x-4" data-oid="ghavy5o">
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-amber-600"
                                        data-oid="kj_2-3u"
                                    >
                                        <svg
                                            className="w-5 h-5"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            data-oid="g0g3c-d"
                                        >
                                            <path
                                                d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"
                                                data-oid="ktlhdkr"
                                            />
                                        </svg>
                                    </a>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-amber-600"
                                        data-oid="pikwtq_"
                                    >
                                        <svg
                                            className="w-5 h-5"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            data-oid="5ep84ln"
                                        >
                                            <path
                                                d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                                                data-oid=".w92yos"
                                            />
                                        </svg>
                                    </a>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-amber-600"
                                        data-oid="jcnwmtk"
                                    >
                                        <svg
                                            className="w-5 h-5"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            data-oid="ww9sedx"
                                        >
                                            <path
                                                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                                                data-oid="6tuqh1u"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div
                            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                            data-oid="wx.ylar"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                                alt="Agent"
                                className="w-full h-64 object-cover"
                                data-oid="6rkq-.."
                            />

                            <div className="p-6" data-oid="lwoxcyr">
                                <h3 className="text-xl font-bold mb-2" data-oid="d3mk7b3">
                                    Sarah Johnson
                                </h3>
                                <p className="text-amber-600 mb-4" data-oid="bwak_p4">
                                    Property Manager
                                </p>
                                <p className="text-gray-600 mb-4" data-oid="nago6j6">
                                    Expert in residential properties and helping first-time buyers
                                    find their perfect home.
                                </p>
                                <div className="flex space-x-4" data-oid="upvdmg_">
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-amber-600"
                                        data-oid="tr661wc"
                                    >
                                        <svg
                                            className="w-5 h-5"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            data-oid="q8byub5"
                                        >
                                            <path
                                                d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"
                                                data-oid="x_jflgu"
                                            />
                                        </svg>
                                    </a>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-amber-600"
                                        data-oid="4c.w9ik"
                                    >
                                        <svg
                                            className="w-5 h-5"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            data-oid="k8.gnob"
                                        >
                                            <path
                                                d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                                                data-oid="e4ig9-3"
                                            />
                                        </svg>
                                    </a>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-amber-600"
                                        data-oid="4pj2n7o"
                                    >
                                        <svg
                                            className="w-5 h-5"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            data-oid="1ge:h2q"
                                        >
                                            <path
                                                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                                                data-oid="9.jm29w"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div
                            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                            data-oid="z7:4n1n"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                                alt="Agent"
                                className="w-full h-64 object-cover"
                                data-oid="cx_j2ia"
                            />

                            <div className="p-6" data-oid="7napikt">
                                <h3 className="text-xl font-bold mb-2" data-oid="aui-bow">
                                    Michael Brown
                                </h3>
                                <p className="text-amber-600 mb-4" data-oid="mt2g-me">
                                    Commercial Property Specialist
                                </p>
                                <p className="text-gray-600 mb-4" data-oid="0:mu9rb">
                                    Specializing in commercial real estate with extensive knowledge
                                    of the market trends.
                                </p>
                                <div className="flex space-x-4" data-oid="slgxvko">
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-amber-600"
                                        data-oid="t28iusl"
                                    >
                                        <svg
                                            className="w-5 h-5"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            data-oid="6r.54d-"
                                        >
                                            <path
                                                d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"
                                                data-oid="r65jze4"
                                            />
                                        </svg>
                                    </a>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-amber-600"
                                        data-oid="he5qi68"
                                    >
                                        <svg
                                            className="w-5 h-5"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            data-oid="2d2yady"
                                        >
                                            <path
                                                d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                                                data-oid="99.juku"
                                            />
                                        </svg>
                                    </a>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-amber-600"
                                        data-oid="hitj70u"
                                    >
                                        <svg
                                            className="w-5 h-5"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            data-oid="7iat4a5"
                                        >
                                            <path
                                                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                                                data-oid="6jpml_1"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Section */}
            <section className="relative py-16 px-4 md:px-8 bg-gray-50" data-oid="46bg0bs">
                <div
                    className="absolute top-0 left-0 right-0 h-24 bg-white"
                    style={{
                        borderRadius: '0 0 50% 50%/0 0 100% 100%',
                        transform: 'translateY(-50%)',
                    }}
                    data-oid="4gj_fu-"
                ></div>
                <div className="container mx-auto" data-oid="3b7115j">
                    <div className="text-center mb-12" data-oid="djlb74_">
                        <h2 className="text-3xl font-bold mb-4" data-oid="_:uerxm">
                            Read From Our Blog
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto" data-oid="0:wmx0b">
                            We are very proud of the service we provide. See what our guests have to
                            say about us, our locations and services
                        </p>
                    </div>

                    <div className="relative" data-oid="fexgjua">
                        {/* Previous Button */}
                        <button
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 hover:bg-gray-100"
                            data-oid="2jpunkh"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-gray-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                data-oid="_enst-g"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 19l-7-7 7-7"
                                    data-oid="vgdr4yy"
                                />
                            </svg>
                        </button>

                        {/* Blog Posts */}
                        <div
                            className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10"
                            data-oid="ydw66ev"
                        >
                            {/* Blog Post 1 */}
                            <div
                                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                                data-oid="z01efm1"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                                    alt="Blog Post"
                                    className="w-full h-48 object-cover"
                                    data-oid="m1lk1t-"
                                />

                                <div className="p-6" data-oid="c:wqa_j">
                                    <h3 className="text-xl font-bold mb-2" data-oid="i.veuwa">
                                        Buy a home in Chicago
                                    </h3>
                                    <p className="text-gray-500 text-sm mb-4" data-oid="zi4cepl">
                                        June 4, 2022
                                    </p>
                                    <p className="text-gray-600 mb-4" data-oid="dvnws7h">
                                        In contrast with New York City's urban atmosphere, the vast
                                        majority of the state is dominated by farms, forests...
                                    </p>
                                    <a
                                        href="#"
                                        className="text-amber-600 hover:text-amber-700 inline-flex items-center"
                                        data-oid="57z-bn9"
                                    >
                                        Continue reading
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4 ml-1"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="e6-w9pq"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 5l7 7-7 7"
                                                data-oid="f9sgkkw"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            {/* Blog Post 2 */}
                            <div
                                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                                data-oid=".jtk:db"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                                    alt="Blog Post"
                                    className="w-full h-48 object-cover"
                                    data-oid="miup1l2"
                                />

                                <div className="p-6" data-oid="56ebd6g">
                                    <h3 className="text-xl font-bold mb-2" data-oid="j7ox2il">
                                        Why Live in Chicago
                                    </h3>
                                    <p className="text-gray-500 text-sm mb-4" data-oid="b265iv4">
                                        March 1, 2022
                                    </p>
                                    <p className="text-gray-600 mb-4" data-oid="gz7.we.">
                                        In contrast with New York City's urban atmosphere, the vast
                                        majority of the state is dominated by farms, forests...
                                    </p>
                                    <a
                                        href="#"
                                        className="text-amber-600 hover:text-amber-700 inline-flex items-center"
                                        data-oid="3rn0kx5"
                                    >
                                        Continue reading
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4 ml-1"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="tw6p-9b"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 5l7 7-7 7"
                                                data-oid="he9bbac"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            {/* Blog Post 3 */}
                            <div
                                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                                data-oid="nef2krg"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                                    alt="Blog Post"
                                    className="w-full h-48 object-cover"
                                    data-oid="1u1.0d4"
                                />

                                <div className="p-6" data-oid="h6s_gmn">
                                    <h3 className="text-xl font-bold mb-2" data-oid="vbqifuk">
                                        Selling Your Home
                                    </h3>
                                    <p className="text-gray-500 text-sm mb-4" data-oid="p24f051">
                                        May 17, 2022
                                    </p>
                                    <p className="text-gray-600 mb-4" data-oid="9rduswk">
                                        Downsizing, upsizing, looking for something new, or any
                                        reason in between, you're considering selling a piece of New
                                        York or...
                                    </p>
                                    <a
                                        href="#"
                                        className="text-amber-600 hover:text-amber-700 inline-flex items-center"
                                        data-oid=":a4wf.o"
                                    >
                                        Continue reading
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4 ml-1"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="5ayke24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 5l7 7-7 7"
                                                data-oid="pjms-03"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Next Button */}
                        <button
                            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 hover:bg-gray-100"
                            data-oid="6k:828w"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-gray-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                data-oid="ykw5:xf"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                    data-oid="n8ofxzq"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Pagination Dots */}
                    <div className="flex justify-center mt-8 space-x-2" data-oid="e13.ecl">
                        <button
                            className="w-2 h-2 rounded-full bg-amber-600"
                            data-oid="s4j3h:a"
                        ></button>
                        <button
                            className="w-2 h-2 rounded-full bg-gray-300"
                            data-oid="t4p1f3s"
                        ></button>
                        <button
                            className="w-2 h-2 rounded-full bg-gray-300"
                            data-oid="2b:1.rc"
                        ></button>
                        <button
                            className="w-2 h-2 rounded-full bg-gray-300"
                            data-oid="zb1zj1t"
                        ></button>
                    </div>
                </div>
            </section>

            {/* Contact Section with Map */}
            <section className="relative py-16 px-4 md:px-8 bg-gray-50" data-oid="bzd36:.">
                <div
                    className="absolute top-0 left-0 right-0 h-24 bg-gray-50"
                    style={{
                        borderRadius: '0 0 50% 50%/0 0 100% 100%',
                        transform: 'translateY(-50%)',
                    }}
                    data-oid="gwll4ye"
                ></div>
                <div className="container mx-auto" data-oid="zw6_bk6">
                    <div className="text-center mb-12" data-oid="1q:ckx9">
                        <h2 className="text-3xl font-bold mb-4" data-oid="khrtqlx">
                            Contact Us
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto" data-oid="lno017m">
                            Get in touch with our team for any inquiries
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-oid="6kqrwk6">
                        <div className="bg-white p-8 rounded-lg shadow-md" data-oid="wfmj9gd">
                            <h3 className="text-2xl font-bold mb-6" data-oid="p3nql_g">
                                Send Us a Message
                            </h3>
                            <form data-oid="xt.lkbe">
                                <div className="mb-4" data-oid="9hahgyu">
                                    <label
                                        className="block text-gray-700 mb-2"
                                        htmlFor="name"
                                        data-oid="rf09vkw"
                                    >
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-600"
                                        placeholder="John Doe"
                                        data-oid="os0.4gz"
                                    />
                                </div>
                                <div className="mb-4" data-oid="9yqlbzz">
                                    <label
                                        className="block text-gray-700 mb-2"
                                        htmlFor="email"
                                        data-oid="toh.bo7"
                                    >
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-600"
                                        placeholder="john@example.com"
                                        data-oid="hnrod.l"
                                    />
                                </div>
                                <div className="mb-4" data-oid="g-e4a7z">
                                    <label
                                        className="block text-gray-700 mb-2"
                                        htmlFor="phone"
                                        data-oid="ix7:0gm"
                                    >
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-600"
                                        placeholder="+1 (123) 456-7890"
                                        data-oid="h-o6hof"
                                    />
                                </div>
                                <div className="mb-6" data-oid="3xxmw1o">
                                    <label
                                        className="block text-gray-700 mb-2"
                                        htmlFor="message"
                                        data-oid="g0pysa2"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        rows="4"
                                        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-600"
                                        placeholder="How can we help you?"
                                        data-oid="jj-pts0"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full py-3 bg-amber-600 text-white rounded hover:bg-amber-700 transition-colors"
                                    data-oid="71vkgc5"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>

                        <div
                            className="bg-white rounded-lg shadow-md overflow-hidden"
                            data-oid="4gds6m8"
                        >
                            {/* This would be a map in a real implementation */}
                            <div
                                className="h-96 bg-gray-200 flex items-center justify-center"
                                data-oid="4zb_mg5"
                            >
                                <div className="text-center p-8" data-oid="x.7dpmy">
                                    <svg
                                        className="w-16 h-16 text-gray-400 mx-auto mb-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        data-oid="_.brt23"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            data-oid="51i4lmj"
                                        ></path>
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            data-oid="uf__r_a"
                                        ></path>
                                    </svg>
                                    <p className="text-gray-600" data-oid="j9eligx">
                                        Map would be displayed here
                                    </p>
                                    <p className="text-gray-600 mt-2" data-oid="vh4pj:w">
                                        123 Business Avenue, New York, NY 10001
                                    </p>
                                </div>
                            </div>
                            <div className="p-6" data-oid="vr-:7mv">
                                <div className="flex items-center mb-4" data-oid="q5wcosz">
                                    <svg
                                        className="w-5 h-5 text-amber-600 mr-3"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        data-oid="zn4v6g6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                            data-oid="v2fk38."
                                        ></path>
                                    </svg>
                                    <span data-oid=".mw961w">+1 (123) 456-7890</span>
                                </div>
                                <div className="flex items-center mb-4" data-oid="syfrraz">
                                    <svg
                                        className="w-5 h-5 text-amber-600 mr-3"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        data-oid="cv6o8ky"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            data-oid="yrrzz03"
                                        ></path>
                                    </svg>
                                    <span data-oid="fid0-s.">info@macmartgroup.com</span>
                                </div>
                                <div className="flex items-center" data-oid="30mdlkd">
                                    <svg
                                        className="w-5 h-5 text-amber-600 mr-3"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        data-oid="sq2t0t2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                            data-oid="xyiscuh"
                                        ></path>
                                    </svg>
                                    <span data-oid="z48gggn">Mon-Fri: 9:00 AM - 6:00 PM</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section
                className="relative py-16 px-4 md:px-8 bg-amber-600 text-white"
                data-oid="vzymw0e"
            >
                <div
                    className="absolute top-0 left-0 right-0 h-24 bg-gray-50"
                    style={{
                        borderRadius: '0 0 50% 50%/0 0 100% 100%',
                        transform: 'translateY(-50%)',
                    }}
                    data-oid="3irjt7b"
                ></div>
                <div className="container mx-auto text-center" data-oid="1.b37v1">
                    <h2 className="text-3xl font-bold mb-4" data-oid="0d:yw-f">
                        Subscribe to Our Newsletter
                    </h2>
                    <p className="max-w-2xl mx-auto mb-8" data-oid="1fzlxs_">
                        Stay updated with the latest properties and real estate news
                    </p>
                    <div
                        className="max-w-md mx-auto flex flex-col sm:flex-row gap-4"
                        data-oid="ah_qr9u"
                    >
                        <input
                            type="email"
                            className="flex-grow p-3 rounded focus:outline-none text-gray-700"
                            placeholder="Your email address"
                            data-oid="r3ij89v"
                        />

                        <button
                            className="px-6 py-3 bg-gray-900 text-white rounded hover:bg-gray-800 transition-colors"
                            data-oid="jda4mwv"
                        >
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer
                className="relative bg-gray-900 text-white py-12 px-4 md:px-8"
                data-oid=".c.h.t7"
            >
                <div
                    className="absolute top-0 left-0 right-0 h-24 bg-amber-600"
                    style={{
                        borderRadius: '0 0 50% 50%/0 0 100% 100%',
                        transform: 'translateY(-50%)',
                    }}
                    data-oid="p8yftdi"
                ></div>
                <div className="container mx-auto" data-oid="2fatr6a">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8" data-oid="8vohuq1">
                        <div data-oid="0idxj9i">
                            <h3 className="text-xl font-bold mb-4" data-oid="k9ddboi">
                                MacMart Group Limited
                            </h3>
                            <p className="text-gray-400 mb-4" data-oid="7fen1z_">
                                Your trusted partner in finding the perfect property for your needs.
                            </p>
                            <div className="flex space-x-4" data-oid="er3a-fb">
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white"
                                    data-oid="sz65qp4"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        data-oid="oxzaoyv"
                                    >
                                        <path
                                            d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"
                                            data-oid="ocyvtg."
                                        />
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white"
                                    data-oid="s_ac_d2"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        data-oid="1se6l1x"
                                    >
                                        <path
                                            d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                                            data-oid="agmyf3e"
                                        />
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white"
                                    data-oid="t4nu8b2"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        data-oid="1ptfxwp"
                                    >
                                        <path
                                            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                                            data-oid="m2_20wr"
                                        />
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white"
                                    data-oid="gogtg-9"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        data-oid="fv4v5i1"
                                    >
                                        <path
                                            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                                            data-oid="0lek_15"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div data-oid="hp:julg">
                            <h3 className="text-lg font-bold mb-4" data-oid="qxt91a4">
                                Quick Links
                            </h3>
                            <ul className="space-y-2" data-oid="6d6n9mm">
                                <li data-oid="dl98aji">
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white"
                                        data-oid="6tv.dmf"
                                    >
                                        Home
                                    </a>
                                </li>
                                <li data-oid="am_xuky">
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white"
                                        data-oid="eh5i0jx"
                                    >
                                        Properties
                                    </a>
                                </li>
                                <li data-oid="4ch:s_o">
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white"
                                        data-oid="znumfk8"
                                    >
                                        About Us
                                    </a>
                                </li>
                                <li data-oid="4_qg_33">
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white"
                                        data-oid="e68z56t"
                                    >
                                        Our Agents
                                    </a>
                                </li>
                                <li data-oid="3nm.6ee">
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white"
                                        data-oid="tv58yv0"
                                    >
                                        Contact Us
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div data-oid="-_2f4nm">
                            <h3 className="text-lg font-bold mb-4" data-oid="imt4f:p">
                                Property Types
                            </h3>
                            <ul className="space-y-2" data-oid="ohnr_4g">
                                <li data-oid="hfprn34">
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white"
                                        data-oid="7ok.r42"
                                    >
                                        Apartments
                                    </a>
                                </li>
                                <li data-oid="m1qp56e">
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white"
                                        data-oid="_bizg_d"
                                    >
                                        Houses
                                    </a>
                                </li>
                                <li data-oid="btwnw-9">
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white"
                                        data-oid="j.x242p"
                                    >
                                        Villas
                                    </a>
                                </li>
                                <li data-oid="d3qjctd">
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white"
                                        data-oid="ug3qusu"
                                    >
                                        Commercial
                                    </a>
                                </li>
                                <li data-oid="ln8ylee">
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white"
                                        data-oid="nwm42u6"
                                    >
                                        Office Spaces
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div data-oid="kjeaf4g">
                            <h3 className="text-lg font-bold mb-4" data-oid="7y:zjhd">
                                Contact Info
                            </h3>
                            <ul className="space-y-3" data-oid="jbkf2hn">
                                <li className="flex items-start" data-oid="2ni95vc">
                                    <svg
                                        className="w-5 h-5 text-amber-600 mr-3 mt-1"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        data-oid="32ciwuy"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            data-oid="3.-4_q."
                                        ></path>
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            data-oid="k4qaqz8"
                                        ></path>
                                    </svg>
                                    <span className="text-gray-400" data-oid="_f:pe:e">
                                        123 Business Avenue, New York, NY 10001
                                    </span>
                                </li>
                                <li className="flex items-center" data-oid="2i8_fsj">
                                    <svg
                                        className="w-5 h-5 text-amber-600 mr-3"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        data-oid="24qd:ii"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                            data-oid="xwcau3a"
                                        ></path>
                                    </svg>
                                    <span className="text-gray-400" data-oid="0yja089">
                                        +1 (123) 456-7890
                                    </span>
                                </li>
                                <li className="flex items-center" data-oid="dcyvxug">
                                    <svg
                                        className="w-5 h-5 text-amber-600 mr-3"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        data-oid="hrz36a4"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            data-oid="x37k0t4"
                                        ></path>
                                    </svg>
                                    <span className="text-gray-400" data-oid="pfqbqgb">
                                        info@macmartgroup.com
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div
                        className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
                        data-oid="mzr6wjb"
                    >
                        <p data-oid="7cw4._n">
                            &copy; {new Date().getFullYear()} MacMart Group Limited. All rights
                            reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
