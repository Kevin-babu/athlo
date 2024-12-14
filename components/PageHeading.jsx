import React from "react";

const PageHeading = ({ pageTitle, description }) => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 px-4 py-9 lg:px-8">
      <div className="">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
          {pageTitle}
        </h2>
        <p className="text-gray-600 mt-4 text-lg">{description}</p>
      </div>
    </div>
  );
};

export default PageHeading;
