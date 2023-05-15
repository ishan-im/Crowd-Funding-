import React, { useState } from "react";

function Hero({ titleData, createCampaign }) {
  const [campaign, setCampaign] = useState({
    title: "",
    description: "",
    amount: "",
    deadline: "",
  });

  console.log(campaign, "campaign");

  const createNewCampaign = async (e) => {
    e.preventDefault();

    console.log(e, "createNewCampaign");

    console.log(campaign, "campaign");

    try {
      const data = await createCampaign(campaign);
      console.log(data, "data");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="relative">
      <span className="coverLine"> </span>

      <img
        src="https://images.pexels.com/photos/3228766/pexels-photo-3228766.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
        alt="banner img"
        className="absolute inset-0 object-cover w-full h-full"
      />

      <div className="relative bg-opacity-75 backgroundMain">
        <svg
          className="absolute inset-x-0 bottom-0 text-white"
          viewBox="0 0 1160 163"
        >
          <path
            fill="currentColor"
            d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
          />
        </svg>

        <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-5xl sm:leading-none">
              Crypto King <br className="hidden md:block" />
              Crowd Funding CK
            </h2>
            <p className="max-w-xl mb-4 text-base text-gray-200 md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque
            </p>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-500 hover:bg-blue-600 focus:shadow-outline focus:outline-none"
            >
              Learn More
              <svg
                className="inline-block w-3 ml-2"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </a>
         </div>
          

          <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
            <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
              <h3 className="text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                Create Campaign
              </h3>

              <form onSubmit={(e) => createNewCampaign(e)}>
                <div className="mb-1 sm:mb-2">
                  <label
                    htmlFor="first Name"
                    className="block mb-1 text-sm font-medium text-gray-600 sm:text-base lg:text-sm xl:text-base"
                  >
                    Title
                  </label>
                  <input
                    onChange={(e) =>
                      setCampaign({ ...campaign, title: e.target.value })
                    }
                    placeholder="title"
                    required
                    type="text"
                    className="flex-grow w-full px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:outline-none  focus:border-deep-purple-accent-300 sm:mb-0"
                    id="firstName"
                  />
                </div>

                <div className="mb-1 sm:mb-2">
                  <label
                    htmlFor="last Name"
                    className="block mb-1 text-sm font-medium text-gray-600 sm:text-base lg:text-sm xl:text-base"
                  >
                    Description
                  </label>
                  <input
                    onChange={(e) =>
                      setCampaign({ ...campaign, description: e.target.value })
                    }
                    placeholder="description"
                    required
                    type="text"
                    className="flex-grow w-full px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:outline-none  focus:border-deep-purple-accent-300 sm:mb-0"
                    id="lastName"
                  />
                </div>

                <div className="mb-1 sm:mb-2">
                  <label
                    htmlFor="email"
                    className="block mb-1 text-sm font-medium text-gray-600 sm:text-base lg:text-sm xl:text-base"
                  >
                    Target Amount
                  </label>
                  <input
                    onChange={(e) =>
                      setCampaign({ ...campaign, amount: e.target.value })
                    }
                    placeholder="amount"
                    required
                    type="text"
                    className="flex-grow w-full px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:outline-none  focus:border-deep-purple-accent-300 sm:mb-0"
                    id="amount"
                    name="amount"
                  />
                </div>

                <div className="mb-1 sm:mb-2">
                  <label
                    htmlFor="email"
                    className="block mb-1 text-sm font-medium text-gray-600 sm:text-base lg:text-sm xl:text-base"
                  >
                    Date
                  </label>
                  <input
                    onChange={(e) =>
                      setCampaign({ ...campaign, deadline: e.target.value })
                    }
                    placeholder="Date"
                    required
                    type="date"
                    className="flex-grow w-full px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:outline-none  focus:border-deep-purple-accent-300 sm:mb-0"
                    id="date"
                    name="date"
                  />
                </div>

                <div className="mb-1 sm:mb-2">
                  <label
                    htmlFor="first Name"
                    className="block mb-1 text-sm font-medium text-gray-600 sm:text-base lg:text-sm xl:text-base"
                  >
                   
                  </label>
                  <button
                    type="submit"
                    className="flex-grow w-full px-4 py-2 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:outline-none  focus:border-deep-purple-accent-300 sm:mb-0"
                  >
                    Create Campaign
                  </button>
                </div>

                <p className="text-xs text-center text-gray-600 sm:text-sm">
                  Create Your campaign and raise funds
                </p>
              </form>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
