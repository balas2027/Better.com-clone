"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../../about-us/nav";
import Footer from "../../footer";
import Legal from "../../legal";

import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ArrowRight,
  Star,
} from "lucide-react";

const MortgageLendingApp = () => {
  const [homePrice, setHomePrice] = useState(300000);
  const [downPayment, setDownPayment] = useState(60000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [zipCode, setZipCode] = useState("10007");
  const [loanTerm, setLoanTerm] = useState(30);
  const [propertyTax, setPropertyTax] = useState(0);
  const [homeInsurance, setHomeInsurance] = useState(0);
  const [hoaFees, setHoaFees] = useState(0);
  const [utilities, setUtilities] = useState(0);

  // Calculate monthly payment automatically
  const calculateMonthlyPayment = () => {
    const principal = homePrice - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numPayments = loanTerm * 12;

    if (monthlyRate === 0) return principal / numPayments;

    const monthlyPayment =
      (principal * (monthlyRate * Math.pow(1 + monthlyRate, numPayments))) /
      (Math.pow(1 + monthlyRate, numPayments) - 1);

    return monthlyPayment;
  };

  const principalAndInterest = calculateMonthlyPayment();
  const totalMonthlyPayment =
    principalAndInterest + propertyTax + homeInsurance + hoaFees + utilities;
  const downPaymentPercentage = (downPayment / homePrice) * 100;

  // Auto-update down payment when slider changes
  const handleSliderChange = (e) => {
    setDownPayment(parseInt(e.target.value));
  };

  // Auto-update down payment when percentage changes
  const handlePercentageChange = (e) => {
    const percentage = parseFloat(e.target.value) || 0;
    setDownPayment(Math.round((homePrice * percentage) / 100));
  };

  // Format number with commas
  const formatNumber = (num) => {
    return Math.round(num).toLocaleString();
  };

  // Handle input changes with formatting
  const handleHomePriceChange = (e) => {
    const value = e.target.value.replace(/,/g, "");
    if (!isNaN(value) && value !== "") {
      setHomePrice(parseInt(value));
    }
  };

  const handleDownPaymentChange = (e) => {
    const value = e.target.value.replace(/,/g, "");
    if (!isNaN(value) && value !== "") {
      setDownPayment(parseInt(value));
    }
  };

  return (
    <div className="bg-green-50 overflow-x-hidden">
      <div className="fixed right-0 left-0 top-0 z-20">
        <Navbar />
      </div>
      {/* Main Calculator Section */}
      <div className=" ">
        <div className=" max-w-7xl px-4 mt-25 py-8 sm:px-6  mx-auto mb-12">
          <h1 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-8 lg:mb-12">
            Estimate your monthly <br /> mortgage payments
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 bg-white p-3 md:p-8 rounded-xl border border-gray-300 gap-8 lg:gap-12 items-start">
            {/* Calculator Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Home Price and Down Payment Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    Home price
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg">
                      $
                    </span>
                    <input
                      type="text"
                      value={formatNumber(homePrice)}
                      onChange={handleHomePriceChange}
                      className="w-full pl-8 pr-4 py-4 border border-gray-300 rounded-lg text-lg font-medium focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div className="col-span-2">
                    <label className="block text-sm text-gray-600 mb-2">
                      Down payment
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg">
                        $
                      </span>
                      <input
                        type="text"
                        value={formatNumber(downPayment)}
                        onChange={handleDownPaymentChange}
                        className="w-full pl-8 pr-4 py-4 border border-gray-300 rounded-lg text-lg font-medium focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">
                      &nbsp;
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        value={downPaymentPercentage.toFixed(0)}
                        onChange={handlePercentageChange}
                        className="w-full px-3 py-4 border border-gray-300 rounded-lg text-lg font-medium text-center focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white"
                      />
                      <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                        %
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Second Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    Length of loan
                  </label>
                  <div className="relative">
                    <select
                      value={`${loanTerm} years`}
                      onChange={(e) =>
                        setLoanTerm(parseInt(e.target.value.split(" ")[0]))
                      }
                      className="w-full px-4 py-4 border border-gray-300 rounded-lg text-lg font-medium appearance-none bg-white focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    >
                      <option value="15 years">15 years</option>
                      <option value="20 years">20 years</option>
                      <option value="25 years">25 years</option>
                      <option value="30 years">30 years</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    Interest rate
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      step="0.001"
                      value={interestRate}
                      onChange={(e) =>
                        setInterestRate(parseFloat(e.target.value) || 0)
                      }
                      className="w-full pl-4 pr-8 py-4 border border-gray-300 rounded-lg text-lg font-medium focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white"
                    />
                    <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500">
                      %
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    ZIP code
                  </label>
                  <input
                    type="text"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                    className="w-full px-4 py-4 border border-gray-300 rounded-lg text-lg font-medium focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white"
                  />
                </div>
              </div>

              {/* Range Slider */}
              <div className="mt-8">
                <input
                  type="range"
                  min="0"
                  max={homePrice}
                  value={downPayment}
                  onChange={handleSliderChange}
                  className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer range-slider"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                  <span>$0</span>
                  <span>'${formatNumber(homePrice)}'</span>
                </div>
              </div>
            </div>

            {/* Payment Display and CTA */}
            <div className="text-center lg:text-right">
              <div className="mb-6">
                <p className="text-sm text-gray-600 mb-2">Monthly payment</p>
                <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                  ${formatNumber(totalMonthlyPayment)}/mo
                </p>
              </div>

              <button className="w-full lg:w-auto px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors text-lg shadow-sm">
                Get pre-approved
              </button>
            </div>
          </div>
        </div>

        {/* Monthly Payment Breakdown */}
        <div className="bg-green-50 rounded-3xl max-w-7xl mx-auto p-6 sm:p-8 mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-8">
            Monthly payment breakdown
          </h2>

          <div className="text-right mb-4">
            <span className="text-3xl sm:text-4xl font-bold text-gray-900">
              ${formatNumber(totalMonthlyPayment)}/mo
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Progress Bar */}
            <div>
              <div className="relative h-20 bg-gray-200 rounded-full overflow-hidden mb-6">
                <div
                  className="absolute inset-0 bg-green-600 hover:bg-green-700 cursor-pointer rounded-full transition-all duration-300"
                  style={{
                    width: `${
                      (principalAndInterest / totalMonthlyPayment) * 100
                    }%`,
                  }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">
                    {Math.round(
                      (principalAndInterest / totalMonthlyPayment) * 100
                    )}
                    %
                  </span>
                </div>
              </div>
            </div>

            {/* Payment Details */}
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-600 rounded-full mr-3"></div>
                  <span className="text-gray-700 font-medium">
                    Principal & interest
                  </span>
                </div>
                <span className="font-bold text-lg">
                  ${formatNumber(principalAndInterest)}
                </span>
              </div>

              <div className="flex justify-between items-center py-3">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Property taxes</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2 text-gray-500">$</span>
                  <input
                    type="number"
                    value={propertyTax}
                    onChange={(e) =>
                      setPropertyTax(parseFloat(e.target.value) || 0)
                    }
                    className="w-20 px-2 py-1 border border-gray-300 rounded text-right focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                </div>
              </div>

              <div className="flex justify-between items-center py-3">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Homeowners insurance</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2 text-gray-500">$</span>
                  <input
                    type="number"
                    value={homeInsurance}
                    onChange={(e) =>
                      setHomeInsurance(parseFloat(e.target.value) || 0)
                    }
                    className="w-20 px-2 py-1 border border-gray-300 rounded text-right focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                </div>
              </div>

              <div className="flex justify-between items-center py-3">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">HOA fees</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2 text-gray-500">$</span>
                  <input
                    type="number"
                    value={hoaFees}
                    onChange={(e) =>
                      setHoaFees(parseFloat(e.target.value) || 0)
                    }
                    className="w-20 px-2 py-1 border border-gray-300 rounded text-right focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                </div>
              </div>

              <div className="flex justify-between items-center py-3">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Utilities</span>
                </div>
                <select
                  value={`$${utilities}/mo`}
                  onChange={(e) =>
                    setUtilities(
                      parseFloat(
                        e.target.value.replace("$", "").replace("/mo", "")
                      ) || 0
                    )
                  }
                  className="border border-gray-300 rounded px-3 py-1 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                >
                  <option value="$0/mo">$0/mo</option>
                  <option value="$50/mo">$50/mo</option>
                  <option value="$100/mo">$100/mo</option>
                  <option value="$150/mo">$150/mo</option>
                  <option value="$200/mo">$200/mo</option>
                </select>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center lg:text-left">
            <button className="px-6 py-3 bg-white text-gray-700 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200 font-medium">
              Copy estimate link
            </button>
          </div>
        </div>

        {/* Pre-approval Steps */}
        <div className="bg-white p-6 sm:p-8 lg:p-12 lg:mt-10 mb-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center lg:text-left">
              Simple steps to get pre-approved
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  number: "1",
                  title: "Share a few details",
                  description:
                    "Tell us about your income, credit, and home goals—it takes as little as 3 minutes and won't affect your credit score.",
                },
                {
                  number: "2",
                  title: "See your homebuying budget",
                  description:
                    "In minutes, we'll show you exactly how much you can get pre-approved for—so you know your price range before you shop.",
                },
                {
                  number: "3",
                  title: "Get your pre-approval letter",
                  description:
                    "Download your letter instantly and start touring homes with confidence (and a stronger offer in hand).",
                },
              ].map((step, index) => (
                <div key={index} className="bg-green-50 rounded-2xl p-6">
                  <div className="text-8xl font-semibold text-green-600 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center space-y-10 py-10 border-gray-400 border-y-1 lg:mt-30 lg:mb-20 mt-10 lg:py-20">
            <h1 className="text-4xl font-semibold lg:text-6xl">
              Check your homebuying power
            </h1>
            <button className="font-lg px-10 py-5 rounded-lg text-white font-semibold bg-green-700 hover:bg-green-800 duration-300 ">
              See what I qualify for
            </button>
            <p className="text-lg text-gray-400">
              ...in as little as 3 minutes –
              <br />
              no credit impact
            </p>
          </div>

          <div className="max-w-7xl mx-auto md:p-8 space-y-12">
            {/* Customer Reviews Section */}
            <div className="p-2 mt-5 md:p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12">
                {/* Left Side - Reviews Card */}
                <div className="w-full lg:w-1/2">
                  <div className="bg-green-300/50 rounded-2xl p-8 md:p-12 text-center relative">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                      1400+ customers
                    </h2>
                    <div className="flex items-center justify-center gap-2 mb-8">
                      <span className="text-gray-800 text-lg">
                        provide us 5 stars in
                      </span>
                      <Star className="w-5 h-5 text-green-800 fill-current" />
                      <span className="text-gray-800 text-lg font-semibold">
                        Trustpilot
                      </span>
                    </div>
                    <button className="bg-green-800 hover:bg-green-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                      Tell us about your experience
                    </button>
                  </div>
                </div>

                {/* Right Side - Review Detail */}
                <div className="w-full bg-gray-50  p-6 rounded-2xl lg:w-1/2">
                  <div className="space-y-4">
                    <div className="text-gray-500 text-sm">05/12/2025</div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                      Better offered the best rate
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      Better Mortgage offered the best rate. Other companies
                      finally agreed to match the Better rate, but I stuck
                      Better Mortgage since they offered it first. I would
                      definitely recommend Better.
                    </p>
                    <button className="text-green-600 hover:text-green-700 font-semibold flex items-center gap-2 transition-colors">
                      See in Trustpilot
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Pagination */}
                  <div className="flex items-center gap-4 mt-8">
                    <button className="p-2 rounded-full hover:bg-gray-200 transition-colors">
                      <ChevronLeft className="w-5 h-5 text-gray-400" />
                    </button>
                    <span className="text-gray-600">1/5</span>
                    <button className="p-2 rounded-full hover:bg-gray-200 transition-colors">
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

           
          </div>

          <div className="text-center space-y-10 py-10 border-gray-400 border-y-1 lg:mt-30 lg:mb-20 mt-10 lg:py-20">
            <h1 className="text-4xl font-semibold lg:text-6xl">
              Get your custom quote
            </h1>
            <button className="font-lg px-10 py-5 rounded-lg text-white font-semibold bg-green-700 hover:bg-green-800 duration-300 ">
              Get a personalized offer
            </button>
            <p className="text-lg text-gray-400">
              ...in as little as 3 minutes –
              <br />
              no credit impact
            </p>
          </div>

          {/* Expert Opinions */}
          <div className="bg-white rounded-3xl max-w-7xl mx-auto p-2 mt-5 sm:p-8 lg:p-16 mb-12">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Expert opinions
              </h2>
              <span className="text-gray-500">1/1</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Should I wait for a better market?",
                  preview:
                    "If you're buying a home, focus on what works for your budget and lifestyle right now instead of waiting for the 'perfect' market. There are program...",
                  expert: "River Robertson",
                  title_role: "Loan Consultant",
                  nmls: "NMLS #1698258",
                },
                {
                  title: "Is it true rates will drop?",
                  preview:
                    "We've been hearing that for 3+ years, and many buyers have missed out on their dream home waiting for that 'magic moment'. Nobody has a...",
                  expert: "David Schultz",
                  title_role: "Loan Consultant",
                  nmls: "NMLS #1952787",
                },
                {
                  title: "How should buyers handle scary market headlines?",
                  preview:
                    "Often, the media headlines are inaccurate and sensationalized. Connect with a licensed loan officer who can help you sort through the noise and give...",
                  expert: "Libby Owens",
                  title_role: "Senior Loan Consultant",
                  nmls: "NMLS #2089666",
                },
              ].map((opinion, index) => (
                <div
                  key={index}
                  className="bg-green-50 flex flex-col justify-between rounded-2xl p-6"
                >
                  <h3 className="font-semibold text-gray-900 mb-3 text-lg">
                    {opinion.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    {opinion.preview}
                  </p>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full mr-3 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {opinion.expert
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        {opinion.expert}
                      </p>
                      <p className="text-sm text-gray-600">
                        {opinion.title_role}
                      </p>
                      <p className="text-sm text-gray-500">{opinion.nmls}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Resources Section */}
          <div className="bg-white rounded-3xl max-w-7xl mx-auto p-2 mt-5 sm:p-8 lg:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
              More resources: Rates & Calculators
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[
                {
                  title: "Affordability calculator",
                  description:
                    "See how much home you can comfortably afford before you start shopping.",
                  cta: "Calculate my budget",
                },
                {
                  title: "Rent vs. buy calculator",
                  description:
                    "Wondering if it's time to buy? Compare the real costs side by side.",
                  cta: "Compare my costs",
                },
                {
                  title: "HELOC payment calculator",
                  description:
                    "Know what getting cash from your home could cost before you decide.",
                  cta: "Estimate my payments",
                },
              ].map((resource, index) => (
                <div
                  key={index}
                  className="bg-green-50 space-y-6  rounded-2xl p-6"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-7">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    {resource.description}
                  </p>
                  <button className="text-green-600 font-semibold flex items-center hover:text-green-700 transition-colors">
                    {resource.cta}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3  gap-6">
              {[
                {
                  title: "Mortgage rates",
                  description:
                    "Stay on top of rates so you can lock in the right one at the right time.",
                  cta: "See today's rates",
                },
                {
                  title: "HELOC rates",
                  description:
                    "Compare the latest HELOC rates and understand your options.",
                  cta: "See today's rates",
                },
                {
                  title: "Refinance rates",
                  description:
                    "Check current refi rates to see if lowering your payment is within reach.",
                  cta: "See today's rates",
                },
              ].map((rate, index) => (
                <div
                  key={index}
                  className="bg-green-50 space-y-6 rounded-2xl p-6"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-7">
                    {rate.title}
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    {rate.description}
                  </p>
                  <button className="text-green-600 font-semibold flex items-center hover:text-green-700 transition-colors">
                    {rate.cta}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .range-slider::-webkit-slider-thumb {
          appearance: none;
          height: 24px;
          width: 24px;
          background: #059669;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .range-slider::-webkit-slider-track {
          height: 8px;
          background: #e5e7eb;
          border-radius: 4px;
        }

        .range-slider::-moz-range-thumb {
          height: 24px;
          width: 24px;
          background: #059669;
          border-radius: 50%;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .range-slider::-moz-range-track {
          height: 8px;
          background: #e5e7eb;
          border-radius: 4px;
          border: none;
        }
      `}</style>

      {/* Related Articles Section */}
      <div className="max-w-7xl mx-auto rounded-2xl p-6 md:p-8 lg:p-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Related articles
          </h2>
          <div className="flex items-center gap-4">
            <span className="text-gray-600 hidden sm:block">1/3</span>
            <div className="flex gap-2">
              <button className="p-2 rounded-full hover:bg-gray-200 transition-colors">
                <ChevronLeft className="w-5 h-5 text-gray-400" />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-200 transition-colors">
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Article 1 */}
          <div className="rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-tight">
              How do you buy down an interest rate? Pros, cons, and more
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Learn how to buy down the interest rate on a mortgage, explore
              buydown types, pros and cons, and see if this...
            </p>
            <button className="text-green-600 hover:text-green-700 font-semibold flex items-center gap-2 transition-colors">
              Read now
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Article 2 */}
          <div className=" rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-tight">
              Lower Debt to Income Ratio (DTI) for a mortgage
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              A high Debt to Income Ratio (DTI) is the #1 reason mortgage
              applications get rejected. Learn how your DTI can affec...
            </p>
            <button className="text-green-600 hover:text-green-700 font-semibold flex items-center gap-2 transition-colors">
              Read now
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Article 3 */}
          <div className="rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-tight">
              Can you pay off a HELOC early? Prepayment penalties and more
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              You can pay off a HELOC early to reduce interest and debt costs.
              Learn how to avoid penalties and if a HELOC...
            </p>
            <button className="text-green-600 hover:text-green-700 font-semibold flex items-center gap-2 transition-colors">
              Read now
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Visit Learning Center Button */}
        <div className="text-left">
          <button className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
            Visit our learning center
          </button>
        </div>
      </div>

      <div className="text-center space-y-10 py-10 border-gray-400 border-y-1 lg:mt-30 lg:mb-20 mt-10 lg:py-20">
        <h1 className="text-4xl font-semibold lg:text-6xl">
          Check your homebuying power
        </h1>
        <button className="font-lg px-10 py-5 rounded-lg text-white font-semibold bg-green-700 hover:bg-green-800 duration-300 ">
          See what I qualify for
        </button>
        <p className="text-lg text-gray-400">
          ...in as little as 3 minutes –
          <br />
        </p>
      </div>

      <div className="bg-white">
        <Footer />
        <Legal />
      </div>
    </div>
  );
};

export default MortgageLendingApp;
