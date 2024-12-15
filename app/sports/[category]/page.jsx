import { sportsData } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import PageHeading from "@/components/PageHeading";
import Button from "@/components/Button";

const page = async ({ params }) => {
  const { category } = await params;
  const categoryData = sportsData[category];

  if (!categoryData) {
    return <PageHeading pageTitle={"Page Not Found"} description={null} />;
  }

  const { pageHead, pageDesc, pageProducts } = categoryData;

  return (
    <div className="relative top-20  mb-24 py-5">
      <Button />
      <PageHeading pageTitle={pageHead} description={pageDesc} />
      <div className="football_section grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {pageProducts.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            price={product.price}
            name={product.name}
            // description={fb_data.description}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
