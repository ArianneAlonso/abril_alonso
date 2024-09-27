import crypto from "crypto";

let ordersCollection = [];

// Crear una orden
export const createOrder = (coffee, userId) => {
  const newOrder = {
    id: crypto.randomUUID().toString(),
    coffee,
    userId,
  };

  ordersCollection.push(newOrder);

  return newOrder;
};
//mostrar orden
export const getOrders = (userId) => {
  return ordersCollection.filter((coffee) => coffee.userId === userId);
};

// ! FALTA IMPLEMENTAR (NO SE USA EN EL PROYECTO)
//mostrar por id
export const getOrderById = (id, userId) => {
  return (
    ordersCollection.find(
      (coffee) => coffee.id === id && coffee.userId === userId
    ) || null
  );
};

// ! FALTA IMPLEMENTAR (NO SE USA EN EL PROYECTO)
//eliminar por id
export const deleteOrderById = (id, userId) => {
  const deletedOrder = ordersCollection.find(
    (coffee) => coffee.id === id && coffee.userId === userId
  );
  ordersCollection = ordersCollection.filter(
    (coffee) => coffee.id !== id && coffee.userId === userId
  );
  return deletedOrder;
};
