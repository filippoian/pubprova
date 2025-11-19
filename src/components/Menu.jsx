import React, { useState } from 'react';
import { menuCategories } from '../data/menu';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Menu = () => {
    const [activeCategory, setActiveCategory] = useState(null);

    const toggleCategory = (id) => {
        setActiveCategory(activeCategory === id ? null : id);
    };

    return (
        <section id="menu" className="py-20 relative">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-heading font-black text-center mb-16 text-secondary uppercase tracking-tight">
                    Il Nostro <span className="text-primary">Menu</span>
                </h2>

                <div className="max-w-4xl mx-auto flex flex-col gap-6">
                    {menuCategories.map((category) => (
                        <div key={category.id} className="bg-white rounded-3xl shadow-card overflow-hidden border border-gray-100 transition-all hover:shadow-lg">
                            <button
                                onClick={() => toggleCategory(category.id)}
                                className="w-full flex justify-between items-center p-6 md:p-8 text-left hover:bg-gray-50 transition-colors"
                            >
                                <h3 className="text-2xl font-heading font-bold uppercase tracking-wide text-secondary">
                                    {category.title}
                                </h3>
                                <motion.div
                                    animate={{ rotate: activeCategory === category.id ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-white p-2 rounded-full shadow-sm text-primary"
                                >
                                    <ChevronDown size={24} />
                                </motion.div>
                            </button>

                            <AnimatePresence>
                                {activeCategory === category.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                    >
                                        <div className="p-6 md:p-8 pt-0 grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {category.items.map((item, index) => (
                                                <div key={index} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:border-primary/30 transition-colors">
                                                    <div className="flex justify-between items-baseline mb-2">
                                                        <h4 className="text-lg font-heading font-bold uppercase text-text">{item.name}</h4>
                                                        <span className="text-primary font-heading font-bold text-lg whitespace-nowrap ml-2">{item.price}</span>
                                                    </div>
                                                    {item.description && (
                                                        <p className="text-text-muted text-sm font-body font-medium leading-relaxed">
                                                            {item.description}
                                                        </p>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Menu;
