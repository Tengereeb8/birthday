export default function Home() {
  return (
    <div className="text-black ">
      <div className="flex justify-center">
        <nav className="flex justify-between w-full bg-blue-100">
          <h1>MixMaster </h1>
          <ul className="flex gap-2">
            <li>Home</li>
            <li>About</li>
            <li>NewsLetter</li>
          </ul>
        </nav>
      </div>
      <Products />
    </div>
  );
}
const Item = [
  {
    img: "/cocktail.jpeg",
    name: "Cocktail Glass",
    type: "Alcaholic",
    detail: [
      {
        name: "A1",
        Category: "Cocktail",
        info: "Alcaholic",
        class: "Cocktail Glass",
        ingredients: "Gin, Grand Marnier, Lemon Juice, Grenadine",
        instruction:
          "Pour all ingredients into a cocktail shaker, mix and serve over ice into a chilled glass.",
      },
    ],
  },
];
const Products = () => {
  return (
    <div>
      <h1>cry</h1>
    </div>
  );
};
