import { Coffee } from "../types/Coffee";
import { API_ENDPOINTS } from "../constants/api";

export const fetchCoffees = async (): Promise<Coffee[]> => {
    const response = await fetch(API_ENDPOINTS.COFFEES);
    const data: Coffee[] = await response.json();
    return data;
};