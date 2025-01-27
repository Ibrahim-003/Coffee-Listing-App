import { useState, useEffect } from "react";
import { Coffee } from "../types/Coffee";
import CoffeeCard from "./CoffeeCard";

const CoffeeListing: React.FC = () => {
  const [coffees, setCoffees] = useState<Coffee[]>([]);
  const [showAvailableOnly, setShowAvailbleOnly] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCoffees = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json"
        );
        const data: Coffee[] = await response.json();
        setCoffees(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching coffee data: ", error);
        setIsLoading(false);
      }
    };

    fetchCoffees();
  }, []);

  const filteredCoffees = showAvailableOnly
    ? coffees.filter((coffee) => coffee.available)
    : coffees;

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <section className='relative max-w-[1094px] mx-auto w-4/5 sm:w-2/3 xl:w-full bg-deep-onyx text-soft-vany px-4 py-20 rounded-xl overflow-hidden sm:px-8'>
      <div className='relative max-w-[480px] mx-auto mb-5 text-center'>
        <div className='absolute z-0 -top-12 right-0'>
          <svg
            width='257'
            height='153'
            viewBox='0 0 257 153'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M2 71.8885C3.45531 57.3142 23.696 41.7169 33.6244 33.2805C66.0308 5.74397 114.381 -4.23546 155.905 5.8326C246.941 27.9052 154.103 161.746 80.308 136.587C52.5484 127.123 76.0283 89.2122 86.9341 76.2621C113.937 44.1978 164.916 27.0297 204.998 44.5915C239.889 59.8782 266.993 108.858 249.574 146.239C247.754 150.145 240.823 152.29 236.924 150.16C231.733 147.325 239.159 139.456 240.538 137.04'
              stroke='#302522'
              strokeWidth='3'
              strokeLinecap='round'
            />
          </svg>
        </div>
        <h1 className='relative z-10 text-[32px]'>Our Collection</h1>
        <p className='relative z-10 text-base text-muted-slate font-medium'>
          Introducing our Coffee Collection, a selection of unique coffees from
          different roast types and origins, expertly roasted in small batches
          and shipped fresh weekly.
        </p>
      </div>
      <div className='flex items-center justify-center gap-3'>
        <button
          className={`px-3 py-2 rounded-sm cursor-pointer ${
            !showAvailableOnly ? "bg-muted-slate shadow" : ""
          }`}
          onClick={() => setShowAvailbleOnly(false)}
        >
          All Products
        </button>
        <button
          className={`px-3 py-2 rounded-sm cursor-pointer ${
            showAvailableOnly ? "bg-muted-slate shadow" : ""
          }`}
          onClick={() => setShowAvailbleOnly(true)}
        >
          Available Now
        </button>
      </div>
      <div className='grid lg:grid-cols-2 xl:grid-cols-3 mt-10 px-4 gap-y-16 lg:gap-x-8 justify-items-center items-center'>
        {filteredCoffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </div>
    </section>
  );
};

export default CoffeeListing;
