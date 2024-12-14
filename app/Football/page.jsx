import { footballData } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import PageHeading from "@/components/PageHeading";
import Button from "@/components/Button";

const page = () => {
  return (
    <div className="relative top-20  mb-24 py-5">
      <Button />
      <PageHeading
        pageTitle="Football Gear"
        description="Discover our football gear collection. Premium quality, designed for peak performance."
      />
      <div className="football_section grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {footballData.map((fb_data) => (
          <ProductCard
            key={fb_data.id}
            image={fb_data.image}
            price={fb_data.price}
            name={fb_data.name}
            description={fb_data.description}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
