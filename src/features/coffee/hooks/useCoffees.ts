import { useState, useEffect } from 'react';
import { Coffee } from '../../../types/Coffee';
import { fetchCoffees } from '../../../services/coffeeService';
import { StorageService } from '../../../services/storageService';
import { STORAGE_KEYS, EXPIRATION_TIMES } from '../../../constants/storage';

export const useCoffees = () => {
  const [coffees, setCoffees] = useState<Coffee[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCoffees = async () => {
      try {
        setIsLoading(true);
        
        // Intentar obtener datos del localStorage
        const cachedCoffees = StorageService.getData<Coffee[]>(
          STORAGE_KEYS.COFFEES, 
          EXPIRATION_TIMES.ONE_DAY
        );
        
        if (cachedCoffees) {
          setCoffees(cachedCoffees);
          setIsLoading(false);
          return;
        }
        
        // Si no hay datos en localStorage o han expirado, hacer la petición
        const data = await fetchCoffees();
        setCoffees(data);
        
        // Guardar los datos en localStorage
        StorageService.saveData(STORAGE_KEYS.COFFEES, data);
        
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
