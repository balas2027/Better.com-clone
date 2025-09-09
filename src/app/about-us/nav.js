"use client";
import { useState } from "react";
import { ArrowRight, PhoneCall } from "lucide-react";
export default function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenDropdown(null);
  };

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const menuItems = [
    {
      name: "About",
      link:"/about-us",
      items: [
        "Apply now",
        "Purchase rates",
        "Affordability calculator",
        "Mortgage calculator",
        "Rent vs buy calculator",
        "Find an agent",
        "VA loans",
        "Learning center",
      ],
    },
    {
      name: "Start",
      link:"/start",
      items: [
        "Apply Now",
        "Refinance rates",
        "Cash-out refinance calculator",
        "Learning Center",
      ],
    },
    {
      name: "HELOC",
       link:"/calculator/mortgage-calculator",
      items: [
        "Apply Now",
        "Calculate your Cash 💵",
        "HELOC vs. Cash-out Refinance",
        "Learning Center",
      ],
    },
    {
      name: "Rates",
      items: [
        "Purchase mortgage rates",
        "Refinance rates",
        "Refinance cash-out rates",
        "HELOC rates",
        "Purchase VA rates",
      ],
    },
    {
      name: "Better+",
      items: [
        " Get Insurance",
        "Title and Closing",
        "Better Attorney Match",
        "Learning Center",
        "Better Agent Match",
        "For Agents",
      ],
    },
  ];

  return (
    <div className="bg-white">
      <div className="bg-white h-25 w-full">
        <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-4 sm:px-6">
          {/* Logo and Desktop Menu */}
          <div className="flex items-center w-full justify-between">
            <div className="text-black text-[18px] items-center space-x-2 sm:space-x-4 lg:space-x-10 flex">
              <a href="/" className="font-bold text-lg sm:text-2xl hover:cursor-pointer hover:font-bold duration-500 transition-all">
                Better
              </a>

              {/* Desktop Menu */}
              <div className="hidden lg:flex items-center space-x-10">
                {menuItems.map((menu) => (
                  <a
                    key={menu.name}
                    href={menu.link}
                    className="duration-500 transition-all group px-3 py-1 cursor-pointer relative rounded-2xl hover:bg-black hover:text-white"
                  >
                    {menu.name}
                    <div className="absolute text-black group-hover:block hidden min-w-[350px] top-7 left-0 pt-2 z-50">
                      <ul className="space-y-4 text-[18px] bg-white rounded-lg p-4 mt-4 shadow-lg">
                        {menu.items.map((item, index) => (
                          <li
                            key={index}
                            className="group/item flex-row hover:bg-gray-100 p-3 rounded-2xl flex justify-between"
                          >
                            {item}
                            <span className="hidden group-hover/item:flex text-black">
                              <ArrowRight />
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Desktop Right Side Buttons */}
            <div className="hidden sm:flex text-[18px] space-x-4">
              <button className="text-white duration-500 transition-all rounded-full lg:block hidden hover:text-black px-3 py-1 hover:bg-white">
                <PhoneCall />
              </button>
              <button className="text-black duration-500 transition-all rounded-2xl lg:block hidden hover:text-white px-3 py-1 hover:bg-black">
                Sign in
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-black p-2"
              onClick={toggleMobileMenu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-emerald-900 border-t border-emerald-700">
            <div className="px-4 py-4 space-y-2">
              {menuItems.map((menu) => (
                <div key={menu.name}>
                  <button
                    className="w-full text-left text-white hover:text-black hover:bg-white px-3 py-2 rounded-2xl flex justify-between items-center"
                    onClick={() => toggleDropdown(menu.name)}
                  >
                    {menu.name}
                    <svg
                      className={`w-4 h-4 transform transition-transform ${
                        openDropdown === menu.name ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {openDropdown === menu.name && (
                    <div className="ml-4 mt-2 space-y-2">
                      {menu.items.map((item, index) => (
                        <div
                          key={index}
                          className="text-white text-sm py-2 px-3 hover:text-black hover:bg-white rounded-lg cursor-pointer"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile Buttons */}
              <div className="pt-4 space-y-2 border-t border-emerald-700">
                <button className="w-full text-white rounded-full hover:text-black py-2 hover:bg-white text-center">
                  call
                </button>
                <button className="w-full text-white rounded-2xl hover:text-black py-2 hover:bg-white text-center">
                  Sign in
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
