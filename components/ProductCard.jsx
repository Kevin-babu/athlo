import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ id, image, price, name, description }) => {
  return (
    <div className="w-full max-w-[300px] mx-auto">
      {/* <Link key={id} href={`/products/${id}`} className="group block"> */}
      <Link key={id} href={`/`} className="group block">
        {/* Quick Add Button */}
        {/* <button
            className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm text-black py-2 sm:py-3 
                           opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 
                           transition-all duration-300 font-medium hover:bg-white"
          >
            Quick Add
          </button> */}

        <div
          className="rounded-lg shadow-md overflow-hidden flex flex-col items-center justify-center p-4"
          style={{
            width: "300px",
            height: "350px",
            background: "rgba(255, 255, 255, 0.2)", // Semi-transparent white
            backdropFilter: "blur(10px)", // Frosted glass effect
            WebkitBackdropFilter: "blur(10px)", // For Safari
            border: "1px solid rgba(255, 255, 255, 0.3)", // Subtle border
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Soft shadow
          }}
        >
          <div
            className="flex items-center justify-center text-white "
            style={{
              height: "100%", // Match the image's height
              width: "100%", // Ensure it takes full width
            }}
          >
            <Image
              src={image}
              alt={name}
              className="object-cover rounded-lg h-[200px]"
              width={200}
              height={200}
            />
          </div>
          <div className=" flex items-start justify-center flex-col my-4">
            <h2
              className="text-lg font-semibold mb-2 "
              style={{ lineHeight: "20px" }}
            >
              {name}
            </h2>
            <p style={{ color: "#E0E0E0" }}>${price}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
