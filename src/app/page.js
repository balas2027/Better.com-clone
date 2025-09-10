"use client"

import Navbar from "./nav";
import Image from "../../public/ai-powered-fico.webp";
import GridImg1 from "../../public/mortgage-calculator.webp";
import GridImg2 from "../../public/affordability-calculator.webp";
import GridImg3 from "../../public/heloc-calculator.webp";
import GridImg4 from "../../public/fixed-rate-calculator.webp";
import Footer from "./footer";
import { useState } from "react";
import { ArrowRight, Star } from "lucide-react";
export default function Home() {
 const [val, setVal] = useState(null);

  function handleClick(value) {
    setVal(value); 
  }
  return (
    <div>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <div className="h-full   pt-20 bg-[radial-gradient(circle_at_50%_110%,theme(colors.emerald.600),theme(colors.emerald.900))]">
        <div className=" sm:max-w-7xl mx-3 md:mx-10 xl:mx-auto flex justify-start items-center flex-col">
          <h1 className="text-5xl sm:text-8xl text-white text-center font-semibold">
            The first <br />{" "}
            <span className="text-transparent bg-clip-text bg-[linear-gradient(to_right,theme(colors.green.400),theme(colors.blue.500),theme(colors.purple.400),theme(colors.purple.500))]">
              AI-powered
            </span>{" "}
            Mortgage
          </h1>
          <h2 className="text-xl font-semibold mt-6 mb-6 text-center text-white">
            Our tech unlocks lower rates, higher chances of approval, <br />
            and a lightning‑fast process from approval to closing. Over $100
            billion funded.
          </h2>
          <a className="text-center font-semibold mb-3 text-lg rounded-full px-10 py-5 bg-green-400 hover:bg-green-600 duration-300 cursor-pointer">
            Start my pre-approval
          </a>
          <p className="text-white text-[13px]">3 min | No hard credit check</p>
          <div>
            <img
              src={Image.src}
              alt="AI Powered FICO"
              className="mt-10 w-[450px] md:w-[600px]   sm:h-[400px] object-fill"
            />
          </div>
        </div>
      </div>

      {/* Second Section of Home page */}

      <div className="h-full sm:mx-10 mx-5 sm:pb-20 justify-center items-center xl:max-w-7xl xl:mx-auto flex md:flex-row md:space-y-0 space-y-10 flex-col-reverse lg:px-30 pt-20 bg-white">
        <div className="vedios sm:w-100 md:w-70 md:py-0 py-10">
          <iframe
            src="https://www.youtube.com/embed/pKy7cNtaJ0c"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            className="rounded-lg sm:w-100 md:w-70 xl:w-80 xl:h-130 h-120"
          ></iframe>
          <div className="mt-5 flex items-center justify-center flex-row space-x-5">
            <p
              onClick={() => handleClick(1)}
              className={`border rounded-3xl px-4 py-2 
    ${val === 1 ? "outline-4 outline-green-800" : ""} 
    hover:outline-4 hover:outline-green-800`}
            >
              Paul
            </p>
            <p  onClick={() => handleClick(2)}
              className={`border rounded-3xl px-4 py-2 
    ${val === 2 ? "outline-4 outline-green-800" : ""} 
    hover:outline-4 hover:outline-green-800`}>
              Amanda
            </p>
            <p  onClick={() => handleClick(3)}
              className={`border rounded-3xl px-4 py-2 
    ${val === 3 ? "outline-4 outline-green-800" : ""} 
    hover:outline-4 hover:outline-green-800`}>
              Tiara
            </p>
          </div>
        </div>
        <div className="content md:w-200 w-full flex flex-col justify-center items-center md:items-start space-y-6">
          <div className="flex flex-col md:w-110 md:self-end  space-y-6">
            <h1 className="md:text-8xl text-4xl sm:text-5xl font-semibold mb-5">
              Find out why we’re better.
            </h1>
            <button className="font-bold mb-3 max-w-max text-white text-sm rounded-full px-10 py-5 bg-green-950">
              See all our stories
            </button>
            <div className="flex-row flex space-x-4">
              <p className="font-semibold flex ">
                {" "}
                <Star className="text-green-950 pr-2" />
                Trustpilot
              </p>
              <p className="text-gray-700">Excellent 4.4 out of 5</p>
            </div>
          </div>
        </div>
      </div>

      {/* Third Section of Home page */}
      <div className="h-full max-w-7xl xl:mx-auto flex flex-col space-y-5 md:flex-row mx-5 justify-between items-center pb-10 bg-white gap-6 sm:gap-0">
        <div className="max-w-none sm:max-w-max text-4xl font-semibold">
          Got questions? <br />
          We've got answers
        </div>
        <div className="flex items-center justify-center flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-5 w-full sm:w-auto">
          <p className="border hover:outline-4 rounded-3xl hover:outline-green-800 w-35 text-center px-3 py-1 cursor-pointer transition-all duration-200 text-sm  whitespace-nowrap">
            Our products
          </p>
          <p className="border hover:outline-4 rounded-3xl hover:outline-green-800 w-35 text-center px-3 py-1 cursor-pointer transition-all duration-200 text-sm  whitespace-nowrap">
            Calculators
          </p>
          <p className="border hover:outline-4 rounded-3xl hover:outline-green-800  w-35 text-center px-3 py-1 cursor-pointer transition-all duration-200 text-sm whitespace-nowrap">
            Guides & FAQs
          </p>
        </div>
      </div>

      {/* Third 2nd Section of Home page */}
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-3 sm:mx-5 xl:mx-auto mb-5">
        <div className="lg:col-span-1 md:col-span-2 rounded-xl bg-emerald-50 p-6 flex space-y-2 flex-col justify-between min-h-[300px] lg:min-h-80">
          <h1 className="text-lg sm:text-xl font-semibold">
            Mortgage calculator
          </h1>
          <button className="h-10 w-10 rounded-full border hover:bg-emerald-100 transition-colors duration-200 flex items-center justify-center">
            <ArrowRight />
          </button>
          <img
            className="w-full h-32 sm:h-40 object-cover rounded"
            src={GridImg1.src}
            alt="Mortgage calculator"
          />
        </div>
        <div className="md:col-span-2 lg:col-span-2 bg-emerald-50 p-6 flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-10 rounded-xl lg:rounded-none">
          <div className="flex flex-col space-y-3 flex-1">
            <h1 className="text-lg sm:text-xl font-semibold">
              Mortgage calculator
            </h1>
            <p className="text-xs sm:text-sm leading-relaxed">
              Affordability calculator Got homeownership dreams? Let's put some
              numbers behind them. Our affordability calculator estimates the
              maximum home you can afford.
            </p>
            <button className="h-10 w-10 rounded-full border hover:bg-emerald-100 transition-colors duration-200 flex items-center justify-center">
              <ArrowRight />
            </button>
          </div>
          <div className="flex-shrink-0 flex justify-center lg:justify-end">
            <img
              src={GridImg2.src}
              className="h-32 w-32 sm:h-120 object-contain sm:w-full lg:h-70 lg:w-70 lg:object-cover rounded"
              alt="Mortgage calculator visual"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1   md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-3 sm:mx-5 xl:mx-auto pb-20">
        <div className="md:col-span-2 lg:col-span-2 bg-emerald-50 p-6 flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-10 rounded-xl lg:rounded-none">
          <div className="flex-shrink-0 flex justify-center lg:justify-start order-2 lg:order-1">
            <img
              src={GridImg3.src}
              className="h-32 w-32 sm:h-120 object-contain sm:w-full lg:h-70 lg:w-70 lg:object-cover rounded"
              alt="Mortgage calculator visual"
            />
          </div>
          <div className="flex flex-col space-y-3 flex-1 order-1 lg:order-2">
            <h1 className="text-lg sm:text-xl font-semibold">
              HELOC calculator
            </h1>
            <p className="text-xs sm:text-sm leading-relaxed">
              Need cash? Quickly see how much equity you can borrow from your
              home and what your monthly payments might be.
            </p>
            <button className="h-10 w-10 rounded-full border hover:bg-emerald-100 transition-colors duration-200 flex items-center justify-center">
              <ArrowRight />
            </button>
          </div>
        </div>

        <div className="lg:col-span-1 md:col-span-2 rounded-xl bg-emerald-50 p-6 flex space-y-2 flex-col justify-between min-h-[300px] lg:min-h-80">
          <h1 className="text-lg sm:text-xl font-semibold">
            Fixed-rate loan comparison calculator
          </h1>
          <button className="h-10 w-10 rounded-full border hover:bg-emerald-100 transition-colors duration-200 flex items-center justify-center">
            <ArrowRight />
          </button>
          <img
            className="w-full h-32 sm:h-40 object-cover rounded"
            src={GridImg4.src}
            alt="Fixed-rate loan calculator"
          />
        </div>
      </div>

      <Footer />

      {/* legal things */}
      <div className="text-[12px] flex flex-col mx-3 sm:mx-5 xl:mx-auto  max-w-7xl space-y-2 py-10 border-b-1 border-gray-600 text-gray-600">
        <p>
          1 Better Mortgage’s One Day Mortgage™ promotion offers qualified
          customers who provide certain required financial
          information/documentation to Better Mortgage within 4 hours of locking
          a rate on a mortgage loan the opportunity to receive an underwriting
          determination from Better Mortgage within 24 hours of their rate lock.
          The underwriting determination is subject to customary terms,
          including fraud and anti-money laundering checks, that take place
          pre-closing and which may trigger additional required documentation
          from the customer. Better Mortgage does not guarantee that initial
          underwriting approval will result in a final underwriting approval.
          See One Day Mortgage™ Terms and Conditions.
        </p>
        <p>
          2Better Mortgage’s One Day HELOC™ promotion offers qualified customers
          who provide certain required financial information/documentation to
          Better Mortgage within 4 hours of locking a rate on a HELOC loan the
          opportunity to receive an underwriting determination from Better
          Mortgage within 24 hours of their rate lock. The underwriting
          determination is subject to customary terms, including fraud and
          anti-money laundering checks, that take place pre-closing and which
          may trigger additional required documentation from the customer.
          Better Mortgage does not guarantee that initial underwriting approval
          will result in final underwriting approval. See One Day Heloc™ Terms
          and Conditions.
        </p>
        <p>
          3Assumes borrowers are eligible for the Automated Valuation Model
          (AVM) to calculate their home value, their loan amount is less than
          $400,000, all required documents are uploaded to their Better Mortgage
          online account within 24 hours of application, closing is scheduled
          for the earliest available date and time, and a notary is readily
          available. Funding timelines may vary and may be longer if an
          appraisal is required to calculate a borrower’s home value.
        </p>
      </div>
      <div className="text-[12px] flex flex-col  max-w-7xl sm:mx-5 mx-3 xl:mx-auto space-y-2 py-10 text-gray-600">
        <p>
          © 2025 Better Home & Finance Holding Company and/or its affiliates.
          Better is a family of companies. Better Mortgage Corporation provides
          home loans; Better Real Estate, LLC and Better Real Estate California
          Inc License # 02164055 provides real estate services; Better Cover,
          LLC sells insurance products; and Better Settlement Services provides
          title insurance services; and Better Inspect, LLC provides home
          inspection services. All rights reserved.
        </p>{" "}
        <p>
          Better BMC operates under the name Better Mortgage Corporation in New
          York.
        </p>
        <p>
          Home lending products offered by Better Mortgage Corporation. Better
          Mortgage Corporation is a direct lender. NMLS #330511. 1 World Trade
          Center, 80th Floor, New York, NY 10007. Loans made or arranged
          pursuant to a California Finance Lenders Law License. Not available in
          all states. Equal Housing Lender. NMLS Consumer Access
        </p>
        <p>
          Better Real Estate, LLC dba BRE, Better Home Services, BRE Services,
          LLC and Better Real Estate, and operating in the State of California
          through its wholly owned subsidiary Better Real Estate California
          Inc., is a licensed real estate brokerage and maintains its corporate
          headquarters at 325-41 Chestnut Street, Suite 826, Philadelphia, PA
          19106. Here is a full listing of Better Real Estate, LLC’s license
          numbers. Better Real Estate, LLC provides access to real estate
          brokerage services via its nationwide network of partner brokerages
          and real estate agents (“Better Real Estate Partner Agents”). Equal
          Housing Opportunity. All rights reserved.
        </p>{" "}
        <p>New York State Housing and Anti-Discrimination Notice</p>
        <p>New York Standard Operating Procedures</p>{" "}
        <p>
          Texas Real Estate Commission: Information About Brokerage Services |
          Consumer Protection Notice
        </p>{" "}
        <p>
          Better Settlement Services, LLC. 325-41 Chestnut Street, Suite 803,
          Philadelphia, PA 19106.
        </p>{" "}
        <p>
          Homeowners insurance policies are offered through Better Cover, LLC, a
          Pennsylvania Resident Producer Agency. License #881593. 325-41
          Chestnut Street, Suite 807, Philadelphia, PA 19106.
        </p>{" "}
        <p>
          Insurance quotes and policies are offered through Better Cover, LLC. A
          Pennsylvania Resident Producer Agency. License #881593. Here is a full
          listing of Better Cover, LLC’s license numbers.
        </p>{" "}
        <p>
          Better Inspect, LLC maintains its corporate headquarters at 325-41
          Chestnut Street, Suite 846, Philadelphia, PA 19106.
        </p>{" "}
        <p>
          Better Mortgage Corporation, Better Real Estate, LLC, Better
          Settlement Services, LLC, Better Cover, LLC, Better Connect, and
          Better Inspect, LLC are separate operating subsidiaries of Better Home
          & Finance Holding Company. Each company is a separate legal entity
          operated and managed through its own management and governance
          structure as required by its state of incorporation, and applicable
          and legal and regulatory requirements. Products not available in all
          states.
        </p>{" "}
        <p>
          Any unauthorized use of any proprietary or intellectual property is
          strictly prohibited. All trademarks, service marks, trade names,
          logos, icons, and domain names are proprietary to Better Home &
          Finance Holding Company. Better Home & Finance Holding Company
          trademarks are federally registered with the U. S. Patent and
          Trademark Office. Better Cover is a registered trademark with the U.S.
          Patent and Trademark Office and is owned by Better Cover, LLC.
        </p>{" "}
        <p>
          Licensed by the Department of Financial Protection and Innovation
          under the California Residential Mortgage Lending Act
        </p>{" "}
      </div>
    </div>
  );
}
