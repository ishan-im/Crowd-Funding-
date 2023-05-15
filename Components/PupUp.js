import React, { useState, useEffect } from "react";

function PupUp({ setOpenModal, getDonations, donateFunction, donate }) {
  const [amount, setAmount] = useState("");
  const [donationData, setDonationData] = useState([]);

  const createDonation = async () => {
    try {
      const donationData = await donateFunction(donate.pId, amount);

      console.log(donationData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const getDonationData = getDonations(donate.pId);

    return async () => {
      const donationData = await getDonationData;
      console.log(donationData);
      setDonationData(donationData);
    };
  }, []);

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div
            className="border-0 rounded-lg shadow-lg rela
 flex flex-col w-full bg-white outline-none focus:outline-none"
          >
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">{donate.title}</h3>
              <button
                className="p-1 ml-auto border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setOpenModal(false)}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline:none">
                  x
                </span>
              </button>
            </div>

            <div className="relative p-6 flex-auto">
              <p className="my-4 text-gray-600 text-lg leading-relaxed">
                {donate.description}
              </p>

              <input
                onChange={(e) => setAmount(e.target.value)}
                placeholder="amount"
                required
                type="text"
                className="flex-grow w-full px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:outline-none  focus:border-deep-purple-accent-300 sm:mb-0"
                id='firstName'
             />

             {
              donationData?.map((donation, index) => (
                <p className="my-4 text-scale-500 text-lg leading-relaxed">
                  {index+1} : {donation.donation} {' '}
                  {donation.donator.slice(0,35)}
                </p>
              ))
             }

          </div>

          <div className=" flrx items-center justify-end p-6 border-t border-solid borser-slate-200 rounded-b ">
            <button
              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => setOpenModal(false)}
            >
              Close
            </button>

            <button
              className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => createDonation()}
            >
              Donate

            </button>



          </div>
        </div>
      </div>
    </div>
    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  )
}

export default PupUp;
