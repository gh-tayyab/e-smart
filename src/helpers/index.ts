import { productData } from "@/constants/data";

export const getProducts = async () => {
  try {
    const res = await fetch("https://fakestoreapiserver.reactbd.com/smart");
    
    if (!res.ok) {
      throw new Error(`Failed to fetch products. Status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    // Fallback to local data
    return productData;
  }
};

export const getTrendingProducts = async () => {
  try {
    const res = await fetch("https://fakestoreapiserver.reactbd.com/smarttrending");
    
    if (!res.ok) {
      throw new Error(`Failed to fetch trending products. Status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching trending products:", error);
    // Fallback to local data or handle accordingly
    return []; // Return an empty array or some fallback data
  }
};

export const calculatePercentage = (oldPrice: any, price: any) => {
  return !!parseFloat(price) && !!parseFloat(oldPrice)
    ? (100 - (oldPrice / price) * 100).toFixed(0)
    : 0;
};

export const getSingleProudct = (_id: number) => {
  const item = productData.find((product) => product._id === _id);
  return item;
};
