/* eslint-disable no-unused-vars */
import React from 'react'

function Fotter() {
  return (
    <div className='mt-20 border border-orange-200 rounded-lg'>

    <footer className="rounded-3xl bg-white-100 p-10 font-[sans-serif] tracking-wide">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <div className="lg:flex lg:items-center">
        <a href="javascript:void(0)">
          <img             src="data:image/png;base64,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" alt="logo" className="w-20" />
        </a>
      </div>

      <div className="lg:flex lg:items-center">
        <ul className="flex space-x-6">
          <li>
            <a href="javascript:void(0)">
              <svg xmlns="http://www.w3.org/2000/svg" className="fill-gray-300 hover:fill-white w-7 h-7" viewBox="0 0 24 24">
                <path
                  d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7v-7h-2v-3h2V8.5A3.5 3.5 0 0 1 15.5 5H18v3h-2a1 1 0 0 0-1 1v2h3v3h-3v7h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"
                  />
              </svg>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <svg xmlns="http://www.w3.org/2000/svg" className="fill-gray-300 hover:fill-white w-7 h-7" viewBox="0 0 24 24">
                <path
                  d="M21 5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5zm-2.5 8.2v5.3h-2.79v-4.93a1.4 1.4 0 0 0-1.4-1.4c-.77 0-1.39.63-1.39 1.4v4.93h-2.79v-8.37h2.79v1.11c.48-.78 1.47-1.3 2.32-1.3 1.8 0 3.26 1.46 3.26 3.26zM6.88 8.56a1.686 1.686 0 0 0 0-3.37 1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68zm1.39 1.57v8.37H5.5v-8.37h2.77z"
                  />
              </svg>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="fill-gray-300 hover:fill-white w-7 h-7"
                viewBox="0 0 24 24">
                <path
                  d="M22.92 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.83 4.5 17.72 4 16.46 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.73-1.89-8.84-4.48-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.9 20.29 6.16 21 8.58 21c7.88 0 12.21-6.54 12.21-12.21 0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
              </svg>
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-6 ">Contact Us</h4>
        <ul className="space-y-4">
          <li>
            <a href="javascript:void(0)" className=" hover:text-orange-500 text-sm">Email</a>
          </li>
          <li>
            <a href="javascript:void(0)" className=" hover:text-orange-500 text-sm">Phone</a>
          </li>
          <li>
            <a href="javascript:void(0)" className=" hover:text-orange-500 text-sm">Address</a>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-6 ">Information</h4>
        <ul className="space-y-4">
          <li>
            <a href="javascript:void(0)" className=" hover:text-orange-500 text-sm">About Us</a>
          </li>
          <li>
            <a href="javascript:void(0)" className=" hover:text-orange-500 text-sm">Terms &amp; Conditions</a>
          </li>
          <li>
            <a href="javascript:void(0)" className=" hover:text-orange-500 text-sm">Privacy Policy</a>
          </li>
        </ul>
      </div>
    </div>

    <p className=' text-sm mt-10'>© 2023<a href='https://readymadeui.com/' target='_blank'
      className="hover:underline mx-1">Huri</a>All Rights Reserved.
    </p>
  </footer>

    </div>
  )
}

export default Fotter