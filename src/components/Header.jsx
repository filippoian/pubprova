import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Show header when scrolling up, hide when scrolling down
            if (currentScrollY < lastScrollY) {
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const navLinks = [
        { name: 'Prenota', href: '#prenota' },
        { name: 'Menu', href: '#menu' },
        { name: 'Chi Siamo', href: '#info' },
        { name: 'Contatti', href: '#contatti' },
    ];

    return (
        <header className={`fixed w-full top-0 z-50 transition-all duration-300 bg-transparent py-5 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="container mx-auto px-4 flex justify-between items-center">
                <a href="#" className="flex items-center">
                    <img
                        src="/pubmedoc-logo.png"
                        alt="PubMedoc Logo"
                        className="h-26 md:h-42 w-auto"
                    />
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-text font-heading font-bold uppercase tracking-wide hover:text-primary transition-colors text-sm"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="https://wa.me/393780919110"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-secondary text-white px-6 py-2.5 rounded-full font-heading font-bold uppercase text-sm hover:bg-blue-700 transition-colors flex items-center gap-2 shadow-md"
                    >
                        <Phone size={16} /> Prenota
                    </a>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-secondary"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-gray-100 overflow-hidden shadow-xl"
                    >
                        <nav className="flex flex-col items-center py-8 gap-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-secondary font-heading font-bold uppercase text-xl tracking-wide hover:text-primary"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="https://wa.me/393780919110"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-primary text-white px-8 py-3 rounded-full font-heading font-bold uppercase text-lg hover:bg-orange-600 transition-colors flex items-center gap-2 shadow-lg"
                                onClick={() => setIsOpen(false)}
                            >
                                <Phone size={20} /> Prenota
                            </a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
