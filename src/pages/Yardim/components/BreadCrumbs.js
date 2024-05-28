import React from 'react';

function BreadCrumbs() {
  return (
    <div className="shadow-sm bg-white">
      <div className="container mx-auto bg-white p-1">
        {/* Bread crumbs */}
        <div className="grid grid-cols-12">
          <div className="col-span-12">
            <div className="my-5 flex items-center">
              <p className="font-normal text-[13px]">Ana Sayfa</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 mx-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
              <p className="font-normal text-[13px]">S.S.S</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BreadCrumbs;
