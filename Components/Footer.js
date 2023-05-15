import React from "react";

function Footer() {
  return (
    <footer className="text-center text-white backgroundMain lg:text-left">
      <div className="mx-6 my-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="">
            <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
              Crypto King
            </h6>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad unde iure praesentium quae optio quas dolores aut, est illo illum similique autem magnam possimus officia quod! Quidem nulla dolores vitae!</p>
          </div>

          <div className="">

            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Products
            </h6>
            <p className="mb-4">
              <a href="#" className="text-white hover:text-gray-300">Market</a>
            </p>
            <p className="mb-4">
              <a href="#" className="text-white hover:text-gray-300">ERC20 Token</a>
            </p>
            <p className="mb-4">
              <a href="#" className="text-white hover:text-gray-300">Donation</a>
            </p>
           
        </div>


          <div className="">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              useful links
            </h6>
            <p className="mb-4">
              <a href="#" className="text-white hover:text-gray-300">Home</a>
            </p>
            <p className="mb-4">
              <a href="#" className="text-white hover:text-gray-300">About us</a>
            </p>
            <p className="mb-4">

              <a href="#" className="text-white hover:text-gray-300">Company Bio</a>
            </p>
           
            </div>

          <div className="">

            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
             Contact
            </h6>
            <p className="mb-4">
              <a href="#" className="text-white hover:text-gray-300">Twitter</a>
            </p>
            <p className="mb-4">
              <a href="#" className="text-white hover:text-gray-300">Email</a>
            </p>
            <p className="mb-4">
              <a href="#" className="text-white hover:text-gray-300">Facebook</a>
            </p>
            <p className="mb-4">
              <a href="#" className="text-white hover:text-gray-300">Hello</a>
            </p>
            </div>

        </div>
      </div>

    <div className="backgroundMain p-6 text-center">
    <span>©️ 2023 Copyright: Crowd Funding</span>
    </div>

    </footer>
  );
}

export default Footer;
