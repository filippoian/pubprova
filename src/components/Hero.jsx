import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });
    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

    return (
        // Rimosso bg-bg qui per evitare conflitti. Lo gestiamo nel wrapper.
        <section ref={ref} className="relative min-h-[60vh] flex flex-col items-center justify-center overflow-hidden pt-10 pb-5">
            
            {/* --- BACKGROUND WRAPPER CON MASCHERA --- */}
            <div 
                className="absolute inset-0 -z-20 pointer-events-none"
                style={{
                    // La maschera dice:
                    // 'black': Mostra il contenuto (il colore arancione/bg)
                    // 'transparent': Nascondi il contenuto (mostra cosa c'è dietro la sezione)
                    // 0% -> 60%: Pienamente visibile
                    // 100%: Completamente trasparente (fondo pagina visibile)
                    maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)'
                }}
            >
                {/* 1. Colore di Sfondo del Blocco (Assicurati che bg-bg sia il colore che vuoi, es. arancione chiaro) */}
                <div className="absolute inset-0 bg-bg"></div>

                {/* 2. Forme Astratte (Blobs) */}
                {/* Nota: Li posizioniamo in modo che non tocchino i bordi laterali troppo bruscamente per evitare aloni */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                    <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-70"></div>
                    <div className="absolute top-40 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl opacity-70"></div>
                </div>
            </div>
            {/* --- FINE BACKGROUND --- */}

            <div className="container mx-auto px-4 relative z-10 text-center flex-grow flex flex-col justify-center items-center">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    {/* Sticker Logo */}
                    <motion.div
                        className="relative inline-block mb-4"
                        style={{ y }}
                    >
                        <img
                            src="/logo.png"
                            alt="Medoc Pub Logo"
                            className="w-40 md:w-52 mx-auto drop-shadow-xl transform hover:scale-105 transition-transform duration-300"
                        />
                    </motion.div>

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



        </section>
    );
};

export default Hero;