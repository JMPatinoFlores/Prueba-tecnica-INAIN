const products = [
  { id: 1, name: "Laptop", price: 15000, category: "Electronics" },
  { id: 2, name: "Chair", price: 1200, category: "Furniture" },
  { id: 3, name: "Headphones", price: 2000, category: "Electronics" },
  { id: 4, name: "Table", price: 3000, category: "Furniture" },
];

function groupByCategory(products) {
  return products.reduce((acc, { id, name, price, category }) => {
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push({ id, name, price });
    return acc;
  }, {});
}

const groupedProducts = groupByCategory(products);
console.log(groupedProducts);
