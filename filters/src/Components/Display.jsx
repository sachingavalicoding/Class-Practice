const data = [
  {
    productName: "Air Max 270",
    brand: "Nike",
    description:
      "The Air Max 270 delivers a super-soft ride that brings you even closer to the feeling of walking on air.",
    price: 150,
    sizes: [7, 8, 9, 10, 11, 12],
    colors: ["Black", "White", "Red"],
    category: "Running",
    material: "Mesh",
    gender: "Unisex",
    stock: 120,
    ratings: 4.5,
    reviews: 215,
    imageUrl: "https://images.unsplash.com/photo-1511311931267-502d7dbf9b0d",
  },
  {
    productName: "Classic Leather",
    brand: "Reebok",
    description:
      "The Classic Leather is as versatile as it is comfortable. Perfect for any occasion, any outfit.",
    price: 85,
    sizes: [6, 7, 8, 9, 10],
    colors: ["White", "Black"],
    category: "Casual",
    material: "Leather",
    gender: "Unisex",
    stock: 200,
    ratings: 4.3,
    reviews: 150,
    imageUrl: "https://images.unsplash.com/photo-1584714262467-bf0eaa7133d6",
  },
  {
    productName: "UltraBoost 21",
    brand: "Adidas",
    description:
      "Experience the feeling of running on clouds with the UltraBoost 21, designed for ultimate comfort and performance.",
    price: 180,
    sizes: [8, 9, 10, 11, 12],
    colors: ["Black", "Blue"],
    category: "Running",
    material: "Primeknit",
    gender: "Men",
    stock: 90,
    ratings: 4.8,
    reviews: 320,
    imageUrl: "https://images.unsplash.com/photo-1610907002032-de94c96a689f",
  },
  {
    productName: "Gel-Kayano 27",
    brand: "ASICS",
    description:
      "The Gel-Kayano 27 is a premium running shoe known for its exceptional comfort and support.",
    price: 160,
    sizes: [7, 8, 9, 10, 11],
    colors: ["Grey", "Blue"],
    category: "Running",
    material: "Synthetic",
    gender: "Women",
    stock: 75,
    ratings: 4.7,
    reviews: 290,
    imageUrl: "https://images.unsplash.com/photo-1593759608143-d5cb119cddc4",
  },
  {
    productName: "Chuck Taylor All Star",
    brand: "Converse",
    description:
      "The Chuck Taylor All Star is an iconic sneaker that never goes out of style.",
    price: 55,
    sizes: [6, 7, 8, 9, 10, 11, 12],
    colors: ["Black", "White", "Red", "Blue"],
    category: "Casual",
    material: "Canvas",
    gender: "Unisex",
    stock: 300,
    ratings: 4.6,
    reviews: 400,
    imageUrl: "https://images.unsplash.com/photo-1580941054517-dc7f1e5f9c80",
  },
  {
    productName: "Stan Smith",
    brand: "Adidas",
    description:
      "The Stan Smith is a timeless tennis sneaker with a minimalist design that pairs well with any outfit.",
    price: 75,
    sizes: [6, 7, 8, 9, 10, 11],
    colors: ["White", "Green"],
    category: "Casual",
    material: "Leather",
    gender: "Unisex",
    stock: 150,
    ratings: 4.4,
    reviews: 210,
    imageUrl: "https://images.unsplash.com/photo-1592435412680-d56b53f0b13d",
  },
  {
    productName: "Gel-Nimbus 23",
    brand: "ASICS",
    description:
      "The Gel-Nimbus 23 provides excellent cushioning and a soft landing for long-distance running.",
    price: 140,
    sizes: [7, 8, 9, 10, 11, 12],
    colors: ["Black", "White"],
    category: "Running",
    material: "Mesh",
    gender: "Men",
    stock: 100,
    ratings: 4.6,
    reviews: 250,
    imageUrl: "https://images.unsplash.com/photo-1612277793331-35d0cd427399",
  },
  {
    productName: "Zoom Pegasus 37",
    brand: "Nike",
    description:
      "The Zoom Pegasus 37 offers responsive cushioning for a smooth and comfortable run.",
    price: 120,
    sizes: [7, 8, 9, 10, 11],
    colors: ["Black", "Blue", "Orange"],
    category: "Running",
    material: "Synthetic",
    gender: "Women",
    stock: 130,
    ratings: 4.7,
    reviews: 310,
    imageUrl: "https://images.unsplash.com/photo-1528702748617-1dbadbac60c2",
  },
  {
    productName: "FuelCell Rebel v2",
    brand: "New Balance",
    description:
      "The FuelCell Rebel v2 is built for speed with a responsive and lightweight design.",
    price: 130,
    sizes: [8, 9, 10, 11, 12],
    colors: ["Yellow", "Black"],
    category: "Running",
    material: "Mesh",
    gender: "Unisex",
    stock: 85,
    ratings: 4.5,
    reviews: 175,
    imageUrl: "https://images.unsplash.com/photo-1604212715813-7be9942e3c4e",
  },
  {
    productName: "Clyde Court",
    brand: "Puma",
    description:
      "The Clyde Court combines style and performance, making it perfect for both basketball and casual wear.",
    price: 110,
    sizes: [8, 9, 10, 11, 12],
    colors: ["Black", "Red"],
    category: "Basketball",
    material: "Knit",
    gender: "Unisex",
    stock: 110,
    ratings: 4.6,
    reviews: 220,
    imageUrl: "https://images.unsplash.com/photo-1571725228833-3b49b9e1d06b",
  },
  {
    productName: "Old Skool",
    brand: "Vans",
    description:
      "The Old Skool is a classic skate shoe that remains a staple in streetwear fashion.",
    price: 60,
    sizes: [6, 7, 8, 9, 10, 11, 12],
    colors: ["Black", "White"],
    category: "Skate",
    material: "Canvas",
    gender: "Unisex",
    stock: 250,
    ratings: 4.5,
    reviews: 340,
    imageUrl: "https://images.unsplash.com/photo-1551234250-40d0de0d5f34",
  },
];

/*  Filters */

const rajshri = data.filter(
  (element) =>
    element.gender.toLowerCase() == "unisex" &&
    element.price >= 100 &&
    element.ratings == 4.5 &&
    element.brand.toLowerCase() == "nike"
);

const Display = () => {
  return (
    <>
      <ul className="border-2 grid grid-cols-2 gap-4 place-items-center  px-4 py-6 w-[1080px] mx-auto mt-20 flex-col ">
        {
          /*  Map function  */

          rajshri.map((element, index) => (
            <li
              className="text-white flex items-center  border-[1px] border-slate-500 gap-4  px-4 py-6"
              key={index}
            >
              <img src={element.imageUrl} alt="" />
              <div>
                <h2> {element.productName} </h2>
                <p> {element.description} </p>
                <p> Price {element.price} </p>
                <p> Brand {element.brand} </p>
                <p>{element.stock} </p>
                <p>{element.reviews} </p>
                <p>{element.ratings} </p>
                <p className="flex items-center gap-6">
                  {element.sizes.map((item, index) => (
                    <p key={index}> {item} </p>
                  ))}
                </p>
              </div>
            </li>
          ))
        }
      </ul>
    </>
  );
};

export default Display;
