import React from "react";

function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
      <div>
        <h1 className="text-6xl">Akib&apos;s Blog</h1>
        <h2 className="mt-5 md:mt-2">
          Welcome to{" "}
          <span className="underline decoration-4 decoration-[#F7A80A]">
            Every Developers
          </span>{" "}
          favourite BlogDen
        </h2>
      </div>
      <p className="mt-5 md:mt-2 text-gray-400 max-w-sm text-right">
        Java features | The latest in technology | Debugging nightmares & More!
      </p>
    </div>
  );
}

export default Banner;
