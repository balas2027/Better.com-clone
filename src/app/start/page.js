import {Home} from 'lucide-react'

export default function Page() {
  const Arrays = [
    { title: "Buying a home" },
    { title: "Refinancing my mortgage" },
    { title: "Get cash from my home" },
  ];
  

  return (
    <div className="w-full bg-gradient-to-l from-white via-gray-100 to-white xl:max-w-7xl xl:mx-auto">
      <div className="Nav flex sticky top-0 bg-gradient-to-l from-white via-gray-100 to-white justify-between items-center border-b-4 pb-5 pt-3  border-gray-200 xl:max-w-7xl w-full xl:mx-auto sm:px-0 px-10 h-25">
        <h1 className="text-lg font-semibold">
          <span className="text-emerald-700 font-bold"> Better</span> <br />{" "}
          Mortgage
        </h1>

        <button className="font-semibold text-lg">
          Need help? Call 415-523-8837
        </button>

        <a
          href="/"
          className="absolute flex items-center justify-center bg-emerald-800 border-4 border-emerald-400 
              h-10 w-10 top-[80%] left-[48%] p-2 rounded-full
              shadow-[0_0_15px_4px_rgba(16,185,129,0.7)]"
        ><Home className='text-green-400'/></a>
      </div>

      <h1 className="heading text-center pt-15 sm:text-5xl text-4xl font-semibold">
        Hi, I'm Betsy! <br />
        What can I help you with?
      </h1>

      <div className="flex justify-center items-center flex-col space-y-5 mt-10">
        {/* First Section of start page */}
        {Arrays.map((item, index) => (
          <div
            key={index}
            className="border-2 flex gap-3 items-center border-gray-400 mx-auto font-semibold hover:border-green-700 hover:outline-4 hover:outline-green-700
               rounded-lg w-70 sm:w-130 px-5 py-4 cursor-pointer
               transition-all duration-200 text-sm whitespace-nowrap"
          >
           <Home className='text-green-800'/> {item.title}
          </div>
        ))}
      </div>
      {/* Second Section of Start page */}
      <div className="flex sm:flex-row w-70 sm:w-130 space-y-5 mx-auto my-5 flex-col justify-between">
        <div>
          <h1 className="text-3xl pb-3 text-center font-semibold">$100B</h1>
          <p className="text-sm text-center text-gray-400 ">
            home loans funded entirely online
          </p>
        </div>
        <div>
          <h1 className="text-3xl pb-3 text-center font-semibold">400K</h1>
          <p className="text-sm text-center text-gray-400 ">
            Customers who chose a Better Mortgage
          </p>
        </div>
      </div>

      {/* Third Section of Start page */}

      <div className="flex justify-center my-10 font-semibold text-gray-600 px-2">
        <div className="bg-emerald-100/70 rounded-lg p-6 sm:w-130 w-70  text-sm ">
          <h1 className="pb-4 text-center">
            After a few questions, you'll unlock:
          </h1>

          <ul className="space-y-3 flex flex-col md:items-start md:pl-20 items-center lg:pl-35">
            <li className="flex items-center gap-2">
              <span className="text-emerald-600"></span>
              <span>Custom mortgage rates</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-600"></span>
              <span>Exclusive offers</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-600"></span>
              <span>A personalized dashboard</span>
            </li>
          </ul>
        </div>
      </div>

      <footer className="py-12 mx-4 sm:mx-6 border-b-1 border-gray-300 xl:mx-0 md:mx-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Section - Company Info */}
            <div className="lg:col-span-2 sm:col-span-2 text-[13px]">
              <div className="text-lg font-bold text-black mb-6">Better</div>
              <p className="text-gray-600 w-80 sm:w-130 leading-relaxed pr-0 lg:pr-8">
                Better Mortgage Corporation is a direct lender dedicated to
                providing a fast, transparent digital mortgage experience backed
                by superior customer support.
              </p>
            </div>

            {/* Middle Section - Contact Us */}
            <div className="lg:col-span-1 sm:col-span-1 text-[13px]">
              <h3 className="font-semibold text-black text-base mb-6">
                Contact Us
              </h3>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-gray-600 hover:text-green-700">
                    Schedule a conversation
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:hello@better.com"
                    className="text-gray-600 hover:text-green-700"
                  >
                    hello@better.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:415-523-8837"
                    className="text-gray-600 hover:text-green-700"
                  >
                    415-523-8837
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-green-700">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-green-700">
                    Resources
                  </a>
                </li>
              </ul>
            </div>

            {/* Right Section - Legal */}
            <div className="lg:col-span-1 text-[13px]">
              <h3 className="font-semibold text-black mb-6">Legal</h3>
              <ul className="space-y-4 mb-8">
                <li>
                  <a href="#" className="text-gray-600 hover:text-green-700">
                    NMLS Consumer Access
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-green-700">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-green-700">
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-green-700">
                    Disclosures & Licensing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-green-700">
                    Affiliated Business
                  </a>
                </li>
              </ul>

              {/* Certification Logos */}
              <div className="flex space-x-3">
                <div className="w-12 h-12 bg-gray-100 border border-gray-200 rounded flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-[8px] font-bold text-gray-700 leading-none">
                      EQUAL
                    </div>
                    <div className="text-[8px] font-bold text-gray-700 leading-none">
                      HOUSING
                    </div>
                    <div className="text-[8px] font-bold text-gray-700 leading-none">
                      LENDER
                    </div>
                  </div>
                </div>
                <div className="w-12 h-12 bg-gray-100 border border-gray-200 rounded flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-[8px] font-bold text-gray-600 leading-none">
                      NMLS
                    </div>
                    <div className="text-[8px] font-bold text-gray-600 leading-none">
                      #330511
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* Bottom Legal Text */}
      <div className="pt-10 pb-50 space-y-2 xl:mx-0 md:px-10 xl:px-0 px-5 text-gray-600">
        <p className="text-[13px] ">
          © 2025 Better Home & Finance Holding Company and/or its affiliates.
          Better is a family of companies. Better Mortgage Corporation provides
          home loans; Better Real Estate, LLC and Better Real Estate California
          Inc License # 02164055 provides real estate services; Better Cover,
          LLC sells insurance products; and Better Settlement Services provides
          title insurance services; Better Connect, LLC dba Better Attorney
          Match provides real estate attorney connection services; and Better
          Inspect, LLC provides home inspection services. All rights reserved.
        </p>
        <p className="text-[13px] ">
          Home lending products offered by Better Mortgage Corporation. Better
          Mortgage Corporation is a direct lender. NMLS #330511. 1 World Trade
          Center, 80th Floor, New York, NY 10007. Loans made or arranged
          pursuant to a California Finance Lenders Law License. Not available in
          all states. Equal Housing Lender. NMLS Consumer Access
        </p>
      </div>
    </div>
  );
}
