import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-bg pt-20 pb-10">

            {/* Abstract Background Shapes */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute top-40 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center flex-grow flex flex-col justify-center items-center">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    {/* Sticker Logo */}
                    <div className="relative inline-block mb-4">
                        <img
                            src="/logo.png"
                            alt="Medoc Pub Logo"
                            className="w-40 md:w-52 mx-auto drop-shadow-xl transform hover:scale-105 transition-transform duration-300"
                        />
                    </div>

                    <p className="text-lg md:text-xl text-secondary font-heading font-bold uppercase tracking-widest mb-10">
                        Birreria • Pinseria • Paninoteca
                    </p>

                    <motion.a
                        href="#prenota"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block bg-primary text-white font-heading font-bold text-xl uppercase px-10 py-4 rounded-full shadow-lg hover:shadow-primary/40 transition-all border-4 border-white/20"
                    >
                        Prenota un Tavolo
                    </motion.a>
                </motion.div>
            </div>

            {/* Sticker Train Element - Bottom Right */}
            <motion.div
                className="absolute bottom-10 right-5 md:right-20 z-20"
                initial={{ rotate: -5, y: 20 }}
                animate={{ rotate: 0, y: 0 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            >
                <div className="bg-white p-2 rounded-2xl shadow-sticker transform rotate-3">
                    <img src="/assets/element1.png" alt="Train" className="w-24 md:w-32 h-auto object-contain" />
                </div>
            </motion.div>

        </section>
    );
};

export default Hero;
