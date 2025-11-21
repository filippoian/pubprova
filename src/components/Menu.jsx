import React, { useState } from 'react';
import { menuCategories } from '../data/menu';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './MenuCarousel.css';

const MenuCategory = ({ category, isOpen, onToggle }) => {
    return (
        <div className="mb-6 last:mb-0">
            <button
                onClick={onToggle}
                className={`w-full flex items-center justify-between p-6 bg-white border border-gray-200 rounded-xl shadow-sm transition-all duration-300 hover:bg-gray-50 group ${isOpen ? 'ring-2 ring-primary ring-opacity-50' : ''}`}
            >
                <div className="flex items-center gap-4">
                    <span className="text-4xl">{category.icon}</span>
                    <h3 className="text-2xl md:text-3xl font-heading font-bold uppercase text-primary group-hover:text-orange-600 transition-colors text-left">
                        {category.title}
                    </h3>
                </div>
                <div className={`p-2 rounded-full bg-gray-100 text-secondary transition-transform duration-300 ${isOpen ? 'rotate-180 bg-primary text-white' : ''}`}>
                    <ChevronDown size={24} />
                </div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="pt-4 pb-2">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {category.items.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
                                    >
                                        <div className="flex justify-between items-baseline mb-2">
                                            <h4 className="font-heading font-bold text-secondary text-xl uppercase">{item.name}</h4>
                                            <span className="font-heading font-bold text-primary text-xl whitespace-nowrap ml-4">{item.price}</span>
                                        </div>
                                        {item.description && (
                                            <p className="text-text-muted font-body leading-relaxed text-sm flex-grow">
                                                {item.description}
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const Menu = () => {
    // State to track which category is open. null means all closed.
    // You can change this to allow multiple open or default to first open.
    const [openCategoryId, setOpenCategoryId] = useState(null);

    const handleToggle = (id) => {
        setOpenCategoryId(prevId => (prevId === id ? null : id));
    };

    return (
        <section id="menu" className="py-20 relative min-h-screen">
            <div className="container mx-auto px-4 mb-12 relative z-10">
                <h2 className="text-4xl md:text-6xl font-heading font-black text-center text-secondary uppercase tracking-tight drop-shadow-sm">
                    Il Nostro <span className="text-primary">Menu</span>
                </h2>
                <p className="text-center text-text-muted mt-4 max-w-2xl mx-auto font-body text-lg">
                    Clicca sulle categorie per scoprire le nostre proposte.
                </p>
            </div>

            <div className="w-full max-w-[1000px] mx-auto px-4">
                {menuCategories.map((category) => (
                    <MenuCategory
                        key={category.id}
                        category={category}
                        isOpen={openCategoryId === category.id}
                        onToggle={() => handleToggle(category.id)}
                    />
                ))}
            </div>

            <div className="mt-16 text-center">
                <p className="text-xl font-heading font-bold text-secondary uppercase tracking-widest bg-white/90 inline-block px-8 py-3 rounded-full shadow-md backdrop-blur-sm border border-gray-200">
                    Coperto €2
                </p>
            </div>
        </section>
    );
};

export default Menu;
