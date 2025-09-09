"use client";
import Navbar from "./nav";
import mission from "../../../public/vishal-mission.jpg";
import Timeline from "./timeline";
import Footer from "../footer";
import Legal from "../legal"
import Grid from "./grid"
export default function Page() {
  const partners = [
    { name: "SoftBank", logo: "SoftBank" },
    { name: "Ally", logo: "ally" },
    { name: "Citi", logo: "citi" },
    { name: "Ping An Bank", logo: "平安银行\nPING AN BANK" },
    { name: "Goldman Sachs", logo: "Goldman\nSachs" },
    { name: "KPCB", logo: "KPCB\nKLEINER PERKINS\nCAUFIELD & BYERS" },
    { name: "American Express", logo: "AMERICAN\nEXPRESS" },
  ];

  return (
    <div className="bg-[rgb(255,253,250)]">
      <div className="sticky top-0 z-20">
        <Navbar />
      </div>

      {/* first section of about page*/}
      <div className="max-w-7xl mx-auto space-y-5 h-[90vh]  text-center flex flex-col items-center justify-center">
        <h1 className="text-4xl font-semibold bg-[#017848] text-transparent bg-clip-text">
          Our mission
        </h1>
        <p className="text-3xl md:text-5xl xl:px-25 md:leading-15 font-semibold">
          {" "}
          We’re making homeownership simpler, faster — and most importantly,
          more accessible for all Americans.
        </p>
      </div>

      {/* second section of about page*/}

      <div className="flex md:flex-row flex-col space-y-10  px-5 xl:max-w-6xl pb-10 xl:pb-20 xl:mx-auto md:justify-betweem items-center md:items-start">
        <div className="content md:w-200 space-y-10 bg-radial from-green-200/10 to-green-50/10">
          <h1 className="text-4xl font-semibold">The status quo is broken</h1>
          <p className="text-gray-600 md:w-150">
            The traditional processes around homeownership are opaque and
            stressful. Fees aren’t transparent and some are simply outrageous in
            size. Traditional mortgage lending is rife with unnecessary fees and
            slow, painful processes. It’s a system set up to benefit insiders —
            not you. Better.com CEO, Vishal Garg, set out to change that.
          </p>
          <button className="p-5 bg-[#017848] rounded-2xl text-white font-semibold">
            Read Vishal's story
          </button>
        </div>
        <div className="">
          <img
            src={mission.src}
            alt="Mission"
            className="md:w-100 md:h-100 w-80 h-110 object-cover"
          />
        </div>
      </div>
      {/*this the third section */}
      <div className="bg-[#017848]  w-full h-full py-10 md:py-20">
        <div className="xl:max-w-6xl sm:mx-10 mx-5 space-y-5 text-lg text-white xl:mx-auto">
          <h1 className="text-5xl pb-5 font-bold">How we’re changing things</h1>
          <p>
            Homeownership is a huge part of our economy. Housing overall is a
            $33 trillion business, and mortgages account for $15 trillion. Yet
            home finance operates in the same way it has for decades — through
            opaque systems and expensive intermediaries whose interests are
            misaligned with consumers’.
          </p>
          <p>
            That’s why Better.com is redefining the homeownership process from
            the ground up. We’re using technology to make it faster and more
            efficient, and humans to help make it friendly and enjoyable.
          </p>
        </div>
      </div>

      {/*fourth section*/}
      <section className=" py-12 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center text-gray-900 mb-12 lg:mb-16">
            Backed by
          </h2>

          {/* Infinite Scrolling Container */}
          <div className="relative">
            <div className="flex animate-scroll">
              {/* First set of logos */}
              <div className="flex items-center justify-around min-w-full gap-8 sm:gap-12 lg:gap-16">
                {partners.map((partner, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 flex items-center justify-center h-16 sm:h-20 lg:h-24"
                  >
                    {partner.name === "Ally" && (
                      <div className="text-gray-900 font-bold text-2xl sm:text-3xl lg:text-4xl lowercase">
                        ally
                      </div>
                    )}
                    {partner.name === "Citi" && (
                      <div className="text-gray-900 font-bold text-xl sm:text-2xl lg:text-3xl">
                        citi
                      </div>
                    )}
                    {partner.name === "Ping An Bank" && (
                      <div className="text-center">
                        <div className="text-gray-900 font-bold text-lg sm:text-xl lg:text-2xl">
                          平安银行
                        </div>
                        <div className="text-gray-600 text-xs sm:text-sm lg:text-base">
                          PING AN BANK
                        </div>
                      </div>
                    )}
                    {partner.name === "Goldman Sachs" && (
                      <div className="text-center">
                        <div className="text-gray-900 font-bold text-lg sm:text-xl lg:text-2xl">
                          Goldman
                        </div>
                        <div className="text-gray-900 font-bold text-lg sm:text-xl lg:text-2xl">
                          Sachs
                        </div>
                      </div>
                    )}
                    {partner.name === "KPCB" && (
                      <div className="text-center">
                        <div className="text-gray-900 font-bold text-xl sm:text-2xl lg:text-3xl">
                          KPCB
                        </div>
                        <div className="text-gray-600 text-xs sm:text-sm">
                          KLEINER PERKINS
                        </div>
                        <div className="text-gray-600 text-xs sm:text-sm">
                          CAUFIELD & BYERS
                        </div>
                      </div>
                    )}
                    {partner.name === "American Express" && (
                      <div className="bg-black text-white px-4 py-2 sm:px-6 sm:py-3 rounded text-center">
                        <div className="text-sm sm:text-base lg:text-lg font-bold">
                          AMERICAN
                        </div>
                        <div className="text-sm sm:text-base lg:text-lg font-bold">
                          EXPRESS
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Second set of logos (duplicate for seamless loop) */}
              <div className="flex items-center justify-around min-w-full gap-8 sm:gap-12 lg:gap-16">
                {partners.map((partner, index) => (
                  <div
                    key={`duplicate-${index}`}
                    className="flex-shrink-0 flex items-center justify-center h-16 sm:h-20 lg:h-24"
                  >
                    {partner.name === "Ally" && (
                      <div className="text-gray-900 font-bold text-2xl sm:text-3xl lg:text-4xl lowercase">
                        ally
                      </div>
                    )}
                    {partner.name === "Citi" && (
                      <div className="text-gray-900 font-bold text-xl sm:text-2xl lg:text-3xl">
                        citi
                      </div>
                    )}
                    {partner.name === "Ping An Bank" && (
                      <div className="text-center">
                        <div className="text-gray-900 font-bold text-lg sm:text-xl lg:text-2xl">
                          平安银行
                        </div>
                        <div className="text-gray-600 text-xs sm:text-sm lg:text-base">
                          PING AN BANK
                        </div>
                      </div>
                    )}
                    {partner.name === "Goldman Sachs" && (
                      <div className="text-center">
                        <div className="text-gray-900 font-bold text-lg sm:text-xl lg:text-2xl">
                          Goldman
                        </div>
                        <div className="text-gray-900 font-bold text-lg sm:text-xl lg:text-2xl">
                          Sachs
                        </div>
                      </div>
                    )}
                    {partner.name === "KPCB" && (
                      <div className="text-center">
                        <div className="text-gray-900 font-bold text-xl sm:text-2xl lg:text-3xl">
                          KPCB
                        </div>
                        <div className="text-gray-600 text-xs sm:text-sm">
                          KLEINER PERKINS
                        </div>
                        <div className="text-gray-600 text-xs sm:text-sm">
                          CAUFIELD & BYERS
                        </div>
                      </div>
                    )}
                    {partner.name === "American Express" && (
                      <div className="bg-black text-white px-4 py-2 sm:px-6 sm:py-3 rounded text-center">
                        <div className="text-sm sm:text-base lg:text-lg font-bold">
                          AMERICAN
                        </div>
                        <div className="text-sm sm:text-base lg:text-lg font-bold">
                          EXPRESS
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-100%);
            }
          }

          .animate-scroll {
            animation: scroll 30s linear infinite;
          }

          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>

      {/* this is the fith section timeline */}
      <Timeline />
      {/*grid section */}
      <Grid/>
      <Footer />

      {/*legal */}
     <Legal/>
    </div>
  );
}
