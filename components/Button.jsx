import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const Button = () => {
  return (
    <div className="back px-4  py-6 lg:px-8 ">
      <button>
        <Link href="/" className="flex items-center gap-2 justify-start">
          <ArrowLeft className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          <p>Back to home</p>
        </Link>
      </button>
    </div>
  );
};

export default Button;
