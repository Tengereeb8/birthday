// import { imageConfigDefault } from "next/dist/shared/lib/image-config";

// export default function Home() {
//   return (
//     <div className="bg-pink-300 min-h-screen flex justify-center items-center">
//       <BirthdayCard />
//     </div>
//   );
// }
// const birthday = [
//   { id: 1, image: "https://picsum.photos/200", name: "Bat", age: 25 },
// ];
// const BirthdayCard = () => {
//   return (
//     <div className="w-150 h-170 bg-white text-black pl-20 ">
//       <h1 className="mt-8 text-[1.953rem]">5 Birthdays today</h1>
//       <div>
//         {birthday.map(({ id, name, age, image }) => (
//           <BirthdayCardItem key={id} name={name} age={age} image={image} />
//         ))}
//       </div>
//     </div>
//   );
// };
// const BirthdayCardItem = () => {
//   return (
//     <div className="flex gap-8">
//       <img src="image" alt="" />
//       <div className="flex flex-col justify-center gap-3">
//         <h1>{name}</h1>
//         <p>{age}</p>
//       </div>
//     </div>
//   );
// };
"use client";

import { useState } from "react";

export default function Home() {
  return (
    <div className="bg-pink-300 min-h-screen flex justify-center items-center">
      <BirthdayCard />
    </div>
  );
}

const birthday = [
  { id: 1, image: "https://picsum.photos/200", name: "Bat", age: 22 },

  { id: 2, image: "https://picsum.photos/200", name: "Dorj", age: 19 },

  { id: 3, image: "https://picsum.photos/200", name: "Baldan", age: 35 },

  { id: 4, image: "https://picsum.photos/200", name: "Hulan", age: 21 },

  { id: 5, image: "https://picsum.photos/200", name: "Nomin", age: 20 },
];

const BirthdayCard = () => {
  const [birthdayList, setBirthdayList] = useState(birthday);
  const clearBirthdayList = () => {
    setBirthdayList([]);
  };
  return (
    <div className="w-150  bg-white text-black  h-min">
      <h1 className="mt-8 pl-20 text-[1.953rem]">
        {birthdayList.length} Birthdays today
      </h1>
      <div className="mt-6 flex pl-20 flex-col gap-6 mb-6">
        {birthdayList.map(({ id, name, age, image }) => (
          <BirthdayCardItem key={id} name={name} age={age} image={image} />
        ))}
      </div>
      {/* Remove w-148 and m-6. Use mx-auto to center it if it has a width. */}
      <div
        onClick={clearBirthdayList}
        className="bg-pink-300 text-white w-[90%] mx-auto mb-6 flex justify-center h-10 items-center rounded-md cursor-pointer"
      >
        Clear all
      </div>
    </div>
  );
};

const BirthdayCardItem = ({ name, age, image }) => {
  return (
    <div className="flex gap-8 items-center">
      <img
        src={image}
        alt={name}
        className="w-20 h-20 rounded-full object-cover"
      />
      <div className="flex flex-col">
        <h1 className="font-semibold">{name}</h1>
        <p className="text-gray-700">{age} years</p>
      </div>
    </div>
  );
};
