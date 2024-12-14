import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ id, image, price, name, description }) => {
  return (
    <div className="w-full max-w-[300px] mx-auto">
      <Link key={id} href={`/products/${id}`} className="group block">
        <div className="relative">
          {/* Product Image */}
          <div className="relative overflow-hidden bg-gray-100 rounded-lg w-full h-64 sm:h-72 lg:h-80">
            <Image
              src={image}
              alt={name}
              width={300}
              height={400}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              priority={parseInt(id) <= 4}
              unoptimized
            />
            <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-300" />
          </div>

          {/* Quick Add Button */}
          <button
            className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm text-black py-2 sm:py-3 
                           opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 
                           transition-all duration-300 font-medium hover:bg-white"
          >
            Quick Add
          </button>
        </div>

        {/* Product Info */}
        <div className="mt-4 sm:mt-6 px-2 space-y-1">
          <div className="flex justify-between items-start">
            <h3 className="font-medium text-sm sm:text-lg group-hover:text-gray-600 transition-colors">
              {name}
            </h3>
            <p className="font-medium text-sm sm:text-lg">${price}</p>
          </div>
          <p className="text-gray-600 text-xs sm:text-sm">{description}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
