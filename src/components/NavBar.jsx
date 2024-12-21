import React, { useState } from 'react';

export default function NavBar() {
    const [hoveredMenu, setHoveredMenu] = useState(null);

    const navItems = [
        { name: "হোম", submenu: ["Submenu 1", "Submenu 2", "Submenu 3"] },
        { name: "সেমিনার ও সম্মিলন", submenu: ["Option A", "Option B", "Option C"] },
        { name: "বিভাগসমূহ", submenu: ["Dept 1", "Dept 2"] },
        { name: "অনলাইন ফতোয়া", submenu: ["Fatwa 1", "Fatwa 2"] },
        { name: "কার্যক্রম", submenu: ["Activity 1", "Activity 2"] },
        { name: "সুফফাহ একাডেমী ", submenu: ["Academy 1", "Academy 2"] },
        { name: "যোগাযোগ", submenu: ["Contact 1", "Contact 2"] },
        { name: "ডোনেশন", submenu: ["Donate Now", "Sponsor"] },
        { name: "শাখা প্রতিষ্ঠান", submenu: ["Branch 1", "Branch 2"] },
    ];
    const showMenu = ( 
        navItems.map((item, index) => (
            <li
                key={index}
                className="nav-item"
                onMouseEnter={() => setHoveredMenu(index)}
                onMouseLeave={() => setHoveredMenu(null)}
            >
                {item.name}
                {hoveredMenu === index && (
                    <ul className="submenu">
                        {item.submenu.map((subitem, subindex) => (
                            <li key={subindex} className="submenu-item">
                                {subitem}
                            </li>
                        ))}
                    </ul>
                )}
            </li>
        ))

    )
    return (
        < nav className="navbar" >
            <ul className="nav-items">
                {showMenu}
            </ul>
        </nav >
    )
}