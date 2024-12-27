import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// import pcLogo from "../assets/pc-logo.png";
import { TiThMenu } from "react-icons/ti";
import { RiCloseLine } from "react-icons/ri";
import { MdOutlineArrowRight } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState({
    products: false,
    equipment: false,
    electroplating: false,
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [expandedItems, setExpandedItems] = useState({});
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const formatPath = (link) => {
    return link.toLowerCase().replace(/\s+/g, "-");
  };

  const Tags = [
    "Home",
    "We Are",
    "Products",
    "Equipment",
    "Services",
    "Glossary",
    "Contact",
  ];

  const productOptions = [
    {
      name: "Electro Plating",
      external: false,
      hasSubmenu: true,
    },
    {
      name: "General Chemicals",
      external: false,
      hasSubmenu: true,
    },
    // {
    //   name: "Welding Electrodes",
    //   link: "/WeldingElectrodes",
    //   external: false,
    //   hasSubmenu: true,
    // },
    // {
    //   name: "Abrasive",
    //   link: "/Abrasive",
    //   external: false,
    // },
    // // {
    //   name: "Disinfectants",
    //   link: "/Disinfectants",
    //   external: false,
    // },
  ];

  const electroplatingOptions = {
    "Electro Plating": [
      { name: "Copper Plating", link: "/electroplating/copper" },
      { name: "Nickel Plating", link: "/electroplating/nickel" },
      { name: "Chrome Plating", link: "/electroplating/chrome" },
      { name: "Brass Plating", link: "/electroplating/brass" },
      { name: "Tin Plating", link: "/electroplating/tin" },
      { name: "Zinc Plating", link: "/electroplating/zinc" },
      { name: "Silver Plating", link: "/electroplating/silver" },
      { name: "Chromating", link: "/electroplating/chromating" },
      { name: "Dry Acid Salt", link: "/electroplating/dry-acid-salt" },
      { name: "Primer", link: "/electroplating/primer" },
      { name: "triChrome 1706", link: "/electroplating/trichrome" },
      { name: "Super protest Lacquer", link: "/electroplating/lacquer" },
      {
        name: "Imitation Gold Plating",
        link: "/electroplating/imitation-gold",
      },
      { name: "24 karat Gold PLating", link: "/electroplating/gold" },
      { name: "Water based Lacquer", link: "/electroplating/water-lacquer" },
      {
        name: "Electrophoritic Lacquer",
        link: "/electroplating/electrophoritic",
      },
      {
        name: "Stainless Steel Finishing Chemicals",
        link: "/electroplating/steel-finishing",
      },
      {
        name: "Rack Insulation Compound",
        link: "/electroplating/rack-insulation",
      },
      { name: "Metstrip-S(Nickle Stripper)", link: "/electroplating/metstrip" },
      {
        name: "Aluminium Finishing Chemicals",
        link: "/electroplating/aluminium-finishing",
      },
    ],
    "General Chemicals": [
      { name: "Chromic Acid", link: "/ChromicAcid" },
      { name: "Nitric Acid", link: "/NitricAcid" },
      { name: "MetaSilicate", link: "/MetaSilicate" },
      { name: "Sodium Hypophosphite", link: "/Sodium Hypophosphite" },
      { name: "Sodium Hydroxide", link: "/SodiumHydroxide" },
      { name: "Sodium MetaSilicate", link: "/SodiumMetaSilicate" },
      { name: "Pottassium Chloride", link: "/PottassiumChloride" },
      { name: "Zinc Chloride", link: "/ZincChloride" },
      { name: "Boric Acid", link: "/BoricAcid" },
      { name: "Nickle Chloride", link: "/NIckleChloride" },
      { name: "Nickle Sulphate", link: "/NickleSulphate" },
      { name: "Copper Sulphate", link: "/CopperSulphate" },
      { name: "Tin Sulphate", link: "/TinSulphate" },
      { name: "Tin Chloride", link: "/TinChloride" },
      { name: "S-1000(gereaser)", link: "/S-1000(gereaser)" },
      { name: "Rack Insulation Compound", link: "/RackInsulationCompound" },
      { name: "Primer", link: "/Primer" },
      { name: "PCR", link: "/PCR" },
      { name: "Sulphueic Acid", link: "/SulphueicAcid" },
      { name: "Metstrip-S(Nickle Stripper)", link: "/NickleStripper" },
      { name: "Dry Acid Slat", link: "/DryAcidSlat" },
      { name: "E-1500", link: "/E-1500" },
      { name: "Caustic Soda", link: "/CausticSoda" },
      { name: "Hydrochloric Acid", link: "/Hydrochloric" },
      { name: "Al-100", link: "/Al-100" },
      { name: "Pickle Aid", link: "/PickleAid" },
      { name: "De-Scalent(AS-100)", link: "/De-Scalent" },
    ],
    "Welding Electrodes": [
      { name: "Seam Welding Electrode", link: "/SeamWeldingElectrode" },
      { name: "Butt Welding Electrode", link: "/ButtWeldingElectrode" },
    ],
  };

  const equipmentOptions = [
    { name: "Electroplating Plants", link: "/electroplating-plants" },
    { name: "ElectroPLating Equipments", link: "/electroplating-equipments" },
    { name: "PP and PVC items", link: "/pp-pvc" },
  ];

  const handleMouseEnter = (menu) => {
    if (window.innerWidth >= 1024) {
      setShowDropdown((prev) => ({
        ...prev,
        [menu]: true,
      }));
    }
  };

  const handleMouseLeave = (menu) => {
    if (window.innerWidth >= 1024) {
      setShowDropdown((prev) => ({
        ...prev,
        [menu]: false,
      }));
    }
  };

  const toggleMobileSubmenu = (menu) => {
    setActiveSubmenu(activeSubmenu === menu ? null : menu);
    setExpandedItems({});
  };

  const toggleSubmenuItem = (itemName) => {
    setExpandedItems((prev) => ({
      ...prev,
      [itemName]: !prev[itemName],
    }));
  };

  const getDropdownContent = (link) => {
    if (
      link === "Products" &&
      (showDropdown.products || activeSubmenu === "products")
    ) {
      return productOptions;
    }
    if (
      link === "Equipment" &&
      (showDropdown.equipment || activeSubmenu === "equipment")
    ) {
      return equipmentOptions;
    }
    return null;
  };

  const isDropdownHeader = (link) => {
    return link === "Products" || link === "Equipment";
  };

  const tl = gsap.timeline();
  
  useGSAP(() => {
    tl.from("#logo", {
      opacity: 0,
      duration: 2,
      delay: 1,
    })
    .from("#navlinks", {
      opacity: 0,
      duration: 2,
      stagger: 0.5,
    })
    

  }, []);

  return (
    <nav className="">
      <div className="max-w-7xl mx-auto px-10">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 text-3xl font-bold">
            <h1 id="logo">Prime-Chemicals</h1>
          </div>

          <div className="hidden lg:flex text-lg lg:items-center lg:space-x-4">
            {Tags.map((link, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(link.toLowerCase())}
                onMouseLeave={() => handleMouseLeave(link.toLowerCase())}
              >
                {isDropdownHeader(link) ? (
                  <span id="navlinks" className="px-3 py-2 hover:text-white cursor-pointer">
                    {link}
                  </span>
                ) : (
                  <Link
                    id="navlinks"
                    to={`/${formatPath(link)}`}
                    className="px-3 py-2 hover:text-white"
                  >
                    {link}
                  </Link>
                )}

                {getDropdownContent(link) && (
                  <div className="absolute left-0 w-48 bg-[#1a2d42] rounded-lg shadow-lg z-50">
                    {getDropdownContent(link).map((item, idx) => (
                      <div key={idx} className="relative group/submenu">
                        <Link
                          to={item.external ? item.link : item.link}
                          target={item.external ? "_blank" : undefined}
                          rel={
                            item.external ? "noopener noreferrer" : undefined
                          }
                          className="block px-4 py-2 text-sm hover:bg-zinc-300/10 hover:text-white"
                        >
                          {item.name}
                        </Link>
                        {item.hasSubmenu &&
                          electroplatingOptions[item.name] && (
                            <div className="absolute left-full top-0 w-48 bg-[#1a2d42] rounded-md shadow-lg hidden group-hover/submenu:block max-h-[500px] overflow-y-auto">
                              {electroplatingOptions[item.name].map(
                                (subItem, subIdx) => (
                                  <Link
                                    key={subIdx}
                                    to={subItem.link}
                                    className="block px-4 py-2 text-sm hover:bg-zinc-300/10 hover:text-white"
                                  >
                                    {subItem.name}
                                  </Link>
                                )
                              )}
                            </div>
                          )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => {
                setIsMobileMenuOpen(!isMobileMenuOpen);
                setActiveSubmenu(null);
                setExpandedItems({});
              }}
              className="inline-flex items-center justify-center p-2 rounded-md"
              aria-expanded="false"
            >
              {isMobileMenuOpen ? (
                <RiCloseLine className="h-6 w-6" />
              ) : (
                <TiThMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-[#1a2d42] shadow-lg mb-5 rounded-lg">
              {Tags.map((link, index) => (
                <div key={index} className="relative">
                  {isDropdownHeader(link) ? (
                    <button
                      onClick={() => toggleMobileSubmenu(link.toLowerCase())}
                      className="w-full text-left px-4 py-3 text-base font-medium rounded-md transition-colors duration-200"
                    >
                      <div className="flex justify-between items-center">
                        <span>{link}</span>
                        <span className="ml-2">
                          {activeSubmenu === link.toLowerCase() ? (
                            <MdOutlineArrowRight className="h-5 w-5 transform rotate-90" />
                          ) : (
                            <IoMdArrowDropdown className="h-5 w-5" />
                          )}
                        </span>
                      </div>
                    </button>
                  ) : (
                    <Link
                      to={`/${formatPath(link)}`}
                      className="block px-4 py-3 text-base font-medium rounded-md transition-colors duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link}
                    </Link>
                  )}

                  {getDropdownContent(link) &&
                    activeSubmenu === link.toLowerCase() && (
                      <div className="pl-4 rounded-md mt-1">
                        {getDropdownContent(link).map((item, idx) => (
                          <div key={idx} className="py-1">
                            {item.hasSubmenu ? (
                              <div className="space-y-1">
                                <button
                                  onClick={() => toggleSubmenuItem(item.name)}
                                  className="w-full text-left px-4 py-2 text-sm rounded-md transition-colors duration-200"
                                >
                                  <div className="flex justify-between items-center">
                                    <span>{item.name}</span>
                                    <span className="">
                                      {expandedItems[item.name] ? (
                                        <MdOutlineArrowRight />
                                      ) : (
                                        <IoMdArrowDropdown />
                                      )}
                                    </span>
                                  </div>
                                </button>

                                {expandedItems[item.name] && (
                                  <div className="pl-4 space-y-1 overflow-y-auto max-h-64">
                                    {electroplatingOptions[item.name]?.map(
                                      (subItem, subIdx) => (
                                        <Link
                                          key={subIdx}
                                          to={subItem.link}
                                          className="block px-4 py-2 text-sm rounded-md transition-colors duration-200"
                                          onClick={() =>
                                            setIsMobileMenuOpen(false)
                                          }
                                        >
                                          {subItem.name}
                                        </Link>
                                      )
                                    )}
                                  </div>
                                )}
                              </div>
                            ) : (
                              <Link
                                to={item.link}
                                className="block px-4 py-2 text-sm rounded-md transition-colors duration-200"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {item.name}
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <hr className="w-full border-0 bg-gradient-to-r from-transparent via-white/10 to-transparent h-[2px]" />
    </nav>
  );
};

export default Navbar;