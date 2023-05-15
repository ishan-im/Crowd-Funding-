import React, { useState, useEffect, useContext } from "react";

import { CrowdFundingContext } from "../Context/CrowdFunding";

import { Logo, Menu, Close } from "./index";

function Navbar() {
  const {
    currentAccount,
    createCampaign,
    getCampaigns,
    connectWallet,
    checkIfWalletIsConnected,
  } = useContext(CrowdFundingContext);

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  const [navbar, setNavbar] = useState(false);

  const menuList = ["White Paper", "Project", "Donation", "Members"];

  return (
    <nav className="w-full backgroundMain shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="/">
              <h2 className="text-2xl font-bold text-white">
                <svg
                  stroke="white"
                  width="60px"
                  height="60px"
                  viewBox="0 0 32 32"
                  id="_x3C_Layer_x3E_"
                  xmlSpace="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <style type="text/css" />
                  <g id="Ethereum_x2C__crypto_x2C__cryptocurrency_1_">
                    <g id="XMLID_2_">
                      <g id="XMLID_41_">
                        <polygon
                          className="st1"
                          id="XMLID_690_"
                          points="7.62,18.83 16.01,30.5 16.01,24.1    "
                        />
                      </g>
                      <g id="XMLID_42_">
                        <polygon
                          className="st16"
                          id="XMLID_13_"
                          points="16.01,30.5 24.38,18.78 16.01,24.1    "
                        />
                      </g>
                      <g id="XMLID_43_">
                        <polygon
                          className="st10"
                          id="XMLID_14_"
                          points="16.01,1.5 7.62,16.23 16.01,12.3    "
                        />
                      </g>
                      <g id="XMLID_46_">
                        <polygon
                          className="st8"
                          id="XMLID_15_"
                          points="24.38,16.18 16.01,1.5 16.01,12.3    "
                        />
                      </g>
                      <g id="XMLID_47_">
                        <polygon
                          className="st6"
                          id="XMLID_16_"
                          points="16.01,21.5 24.38,16.18 16.01,12.3    "
                        />
                      </g>
                      <g id="XMLID_48_">
                        <polygon
                          className="st4"
                          id="XMLID_18_"
                          points="16.01,12.3 7.62,16.23 16.01,21.5    "
                        />
                      </g>
                    </g>
                    <g id="XMLID_4_">
                      <g id="XMLID_19_">
                        <path
                          className="st17"
                          d="M16.01,22c-0.09,0-0.18-0.03-0.27-0.08l-8.39-5.27c-0.23-0.14-0.3-0.44-0.17-0.67     l8.39-14.73c0.18-0.31,0.69-0.31,0.87,0l8.36,14.68c0.13,0.23,0.06,0.53-0.17,0.67l-8.36,5.32C16.2,21.97,16.11,22,16.01,22z      M8.3,16.06l7.71,4.85l7.69-4.89L16.01,2.51L8.3,16.06z"
                          id="XMLID_764_"
                        />
                      </g>
                      <g id="XMLID_31_">
                        <path
                          className="st17"
                          d="M16.01,31c-0.28,0-0.5-0.22-0.5-0.5v-6.4c0-0.28,0.22-0.5,0.5-0.5s0.5,0.22,0.5,0.5v6.4     C16.51,30.78,16.29,31,16.01,31z"
                          id="XMLID_763_"
                        />
                      </g>
                      <g id="XMLID_20_">
                        <path
                          className="st17"
                          d="M16.01,31c-0.16,0-0.31-0.08-0.41-0.21L7.22,19.12c-0.14-0.19-0.12-0.46,0.04-0.63     c0.16-0.17,0.43-0.21,0.63-0.08l8.12,5.11l8.1-5.15c0.2-0.13,0.47-0.1,0.63,0.08c0.16,0.17,0.18,0.44,0.04,0.63l-8.36,11.72     C16.33,30.92,16.16,30.98,16.01,31z M9.52,20.61l6.49,9.03l6.47-9.06l-6.2,3.94c-0.16,0.1-0.37,0.1-0.53,0L9.52,20.61z"
                          id="XMLID_760_"
                        />
                      </g>
                      <g id="XMLID_30_">
                        <path
                          className="st17"
                          d="M16.01,22c-0.09,0-0.18-0.03-0.27-0.08l-8.39-5.27c-0.15-0.1-0.24-0.27-0.23-0.45     s0.12-0.34,0.29-0.42l8.39-3.93c0.13-0.06,0.29-0.06,0.42,0l8.36,3.88c0.17,0.08,0.28,0.24,0.29,0.42     c0.01,0.18-0.08,0.36-0.23,0.45l-8.36,5.32C16.2,21.97,16.11,22,16.01,22z M8.67,16.29l7.34,4.62l7.33-4.66l-7.32-3.4L8.67,16.29     z"
                          id="XMLID_757_"
                        />
                      </g>
                      <g id="XMLID_32_">
                        <path
                          className="st17"
                          d="M16.01,22c-0.28,0-0.5-0.22-0.5-0.5v-20c0-0.28,0.22-0.5,0.5-0.5s0.5,0.22,0.5,0.5v20     C16.51,21.78,16.29,22,16.01,22z"
                          id="XMLID_756_"
                        />
                      </g>
                      <g id="XMLID_192_">
                        <path
                          className="st17"
                          d="M16.01,22c-0.09,0-0.18-0.03-0.27-0.08l-8.39-5.27c-0.23-0.14-0.3-0.44-0.17-0.67     l8.39-14.73c0.18-0.31,0.69-0.31,0.87,0l8.36,14.68c0.13,0.23,0.06,0.53-0.17,0.67l-8.36,5.32C16.2,21.97,16.11,22,16.01,22z      M8.3,16.06l7.71,4.85l7.69-4.89L16.01,2.51L8.3,16.06z"
                          id="XMLID_753_"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </h2>
            </a>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-white hover:text-indigo-200">
                <a href="/">White Paper</a>
              </li>
              <li className="text-white hover:text-indigo-200">
                <a href="/">Projects</a>
              </li>
              <li className="text-white hover:text-indigo-200">
                <a href="/">Donations</a>
              </li>
              <li className="text-white hover:text-indigo-200">
                <a href="/">Member</a>
              </li>
            </ul>

            {!currentAccount && (
              <div className="mt-3 space-y-2 lg:hidden md:inline-block">
                <button
                  onClick={connectWallet}
                  className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
                >
                  Connect Wallet
                </button>
              </div>
            )}
          </div>
        </div>
        {!currentAccount && (
          <div className="hidden space-x-2 md:inline-block">
            <button
              onClick={connectWallet}
              className="px-4 py-2 text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
            >
              Connect Wallet
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
