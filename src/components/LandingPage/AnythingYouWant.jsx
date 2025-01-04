'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Img1 from "../../../public/assets/Image1.svg";
import Img2 from "../../../public/assets/Image2.svg";
import Img3 from "../../../public/assets/Image3.svg";
import Img4 from "../../../public/assets/Image4.svg";
import Img5 from "../../../public/assets/Image5.svg";
import Img6 from "../../../public/assets/Image6.svg";
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { saveCity } from '@/redux/reuducer/locationSlice';

const AnythingYouWant = () => {
    const router = useRouter();
    const [selectedCity, setSelectedCity] = useState(null);

    // Gestion du clic sur un drapeau
    const handleFlagClick = (country) => {
        const countryData = {
            "cote-ivoire": {
                lat: 7.539988999999999,
                long: -5.547079999999999,
                city: undefined,
                state: undefined,
                country: "Côte d'Ivoire"
            },
            mali: {
                lat: 17.570692,
                long: -3.996166,
                city: undefined,
                state: undefined,
                country: "Mali"
            },
            togo: {
                lat: 8.619543,
                long: 0.824782,
                city: undefined,
                state: undefined,
                country: "Togo"
            },
            burkina: {
                lat: 12.238333,
                long: -1.561593,
                city: undefined,
                state: undefined,
                country: "Burkina Faso"
            },
            senegal: {
                lat: 14.497401,
                long: -14.452362,
                city: undefined,
                state: undefined,
                country: "Sénégal"
            }
        };

        const cityData = countryData[country];

        if (cityData) {
            saveCity(cityData);
            setSelectedCity(cityData);
            router.push('/');
        } else {
            toast.error("Invalid country selected.");
        }
    };

    return (
        <>
            <section id="anything_you_want">
                <div className="container">
                    <div className="main_wrapper">
                        {/* Images à gauche */}
                        <div className="left_side_images">
                            <Image src={Img1} className="upper_img" alt="" loading="lazy" />
                            <Image src={Img2} className="center_img" alt="" loading="lazy" />
                            <Image src={Img3} className="down_img" alt="" loading="lazy" />
                        </div>

                        {/* Contenu central */}
                        <div className="center_content">
                            <div className="main_heading">
                                <h1>Buy & Sell</h1>
                                <h1>Anything You Want</h1>
                            </div>
                            <div className="main_decs">
                                <p>Discover endless possibilities at Dealchap. Go to Marketplace!</p>
                            </div>

                            {/* Drapeaux */}
                            <div className="flag-buttons">
                                <button className="flag-btn" onClick={() => handleFlagClick("cote-ivoire")}>
                                    <Image
                                        src="/flags/cote-ivoire.png"
                                        alt="Côte d'Ivoire"
                                        width={40}
                                        height={40}
                                    />
                                    <span className="country-name">Côte d'Ivoire</span>
                                </button>
                                <button className="flag-btn" onClick={() => handleFlagClick("mali")}>
                                    <Image
                                        src="/flags/mali.png"
                                        alt="Mali"
                                        width={40}
                                        height={40}
                                    />
                                    <span className="country-name">Mali</span>
                                </button>
                                <button className="flag-btn" onClick={() => handleFlagClick("togo")}>
                                    <Image
                                        src="/flags/togo.png"
                                        alt="Togo"
                                        width={40}
                                        height={40}
                                    />
                                    <span className="country-name">Togo</span>
                                </button>
                                <button className="flag-btn" onClick={() => handleFlagClick("burkina")}>
                                    <Image
                                        src="/flags/burkina.png"
                                        alt="Burkina Faso"
                                        width={40}
                                        height={40}
                                    />
                                    <span className="country-name">Burkina Faso</span>
                                </button>
                                <button className="flag-btn" onClick={() => handleFlagClick("senegal")}>
                                    <Image
                                        src="/flags/senegal.png"
                                        alt="Sénégal"
                                        width={40}
                                        height={40}
                                    />
                                    <span className="country-name">Sénégal</span>
                                </button>
                            </div>
                        </div>

                        {/* Images à droite */}
                        <div className="right_side_images">
                            <Image src={Img4} className="upper_img" alt="" loading="lazy" />
                            <Image src={Img5} className="center_img" alt="" loading="lazy" />
                            <Image src={Img6} className="down_img" alt="" loading="lazy" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AnythingYouWant;
