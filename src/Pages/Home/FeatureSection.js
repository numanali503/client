import React from "react";
import Bar from "./BarGraph";

const PaymentFeaturesSection = () => {
  return (
    <section className="relative md:pt-12 pt-6 pb-24 md:mx-0 mx-4  overflow-hidden">
      <div className="relative container px-4 mx-auto">
        <div className="max-w-[80rem] mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-1/2 order-last lg:order-first">
              <div className="relative pb-20 lg:pb-0">

                <div className="absolute md:top-0 -top-10 left-0 -mt-8 md:mt-9 inline-flex p-4 bg-white shadow backdrop-blur-sm bg-opacity-60 rounded-sm border border-slate-100">
                  <div className="mx-3">
                    <span className="font-semibold">Try over 250+</span>
                    <span className="block text-sm text-gray-500">
                      Charts and Graphs
                    </span>
                  </div>
                </div>

                <div className="absolute md:bottom-0 -bottom-44 md:mb-0 mb-20 right-0 max-w-xs lg:-mb-16">
                  <div className="px-6 pt-6 pb-6 lg:pr-16 bg-white backdrop-blur-sm bg-opacity-60 rounded-sm shadow border border-slate-100">
                    <div className="inline-flex mb-6">
                      <div className="flex items-center justify-center">
                        <i class="fa-duotone fa-regular fa-keyboard fa-xl text-blue-900"></i>
                      </div>
                      <div className="mx-3">
                        <span className="text-sm font-semibold">
                          Dynamic
                        </span>
                        <span className="block text-xs text-gray-500">
                          Generate all types of graphs and charts dynamically
                        </span>
                      </div>
                    </div>

                    <div className="inline-flex mb-6">
                      <div className="flex items-center justify-center">
                        <i class="fa-duotone fa-regular fa-pen-ruler fa-xl text-blue-900"></i>
                      </div>
                      <div className="mx-3">
                        <span className="text-sm font-semibold">
                          Dynamic
                        </span>
                        <span className="block text-xs text-gray-500">
                          Generate all types of graphs and charts dynamically
                        </span>
                      </div>
                    </div>

                    <div className="inline-flex mb-6">
                      <div className="flex items-center justify-center">
                        <i class="fa-duotone fa-regular fa-download fa-xl text-blue-900"></i>
                      </div>
                      <div className="mx-3">
                        <span className="text-sm font-semibold">
                          Dynamic
                        </span>
                        <span className="block text-xs text-gray-500">
                          Generate all types of graphs and charts dynamically
                        </span>
                      </div>
                    </div>

                  </div>
                </div>

                <Bar></Bar>

              </div>
            </div>
            <div className="w-full lg:w-1/2 mb-24 lg:mb-0">
              <div className="max-w-lg mx-auto lg:mr-0">
                <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold text-mainBlue bg-blue-50 rounded-full">
                  About
                </span>
                <h1 className="font-heading text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                  All  <span className="pr-4 bg-clip-text font-bold bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent">
                    Visuals
                  </span> Application you need
                </h1>
                <p className="text-lg font-semibold mb-6">
                  The GraphEngine library comes with all the tools you need to
                  create reliable and secure data visualizations.
                </p>
                <p className="text-gray-400 text-justify">
                  Built on JavaScript and TypeScript, all our charting libraries
                  work with any back-end database or server stack. We offer
                  wrappers for the most popular programming languages (.Net,
                  PHP, Python, R, Java) as well as iOS and Android, and
                  frameworks like Angular, Vue, and React.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentFeaturesSection;