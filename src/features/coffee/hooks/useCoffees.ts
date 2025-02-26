import { useState, useEffect } from 'react';
import { Coffee } from '../../../types/Coffee';
import { fetchCoffees } from '../../../services/coffeeService';

export const useCoffees = () => {
  const [coffees, setCoffees] = useState<Coffee[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCoffees = async () => {
      try {
        setIsLoading(true);
        const data = await fetchCoffees();
        setCoffees(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error fetching coffees');
      } finally {
        setIsLoading(false);
      }
    };

    loadCoffees();
  }, []);

  return { coffees, isLoading, error };
};
