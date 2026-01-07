"use client";
import { useState } from "react";

// export default function Home() {
//   return (
//     <div className="bg-white flex flex-col items-center text-black min-h-screen">
//       <h1>Questions</h1>
//       <Question />
//     </div>
//   );
// }
const questions = [
  {
    id: 1,
    title: "Do I have to allow the use of cookies?",
    info: "Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key.",
  },
  {
    id: 2,
    title: "How do I change my My Page password?",
    info: "Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.",
  },
  {
    id: 3,
    title: "What is BankID?",
    info: "Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.",
  },
  {
    id: 4,
    title: "Whose Birth Number can I use?",
    info: "Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.",
  },
  {
    id: 5,
    title: "When do I recieve A Password Ordered By Letter?",
    info: "Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.",
  },
];
// const Question = () => {
//   const [text, setText] = useState();
//   return (
//     <div>
//       <QuestionItem />
//     </div>
//   );
// };
// const QuestionItem = () => {
//   return (
//     <div>
//       <div className="q1 flex justify-between">
//         <button>+</button>
//       </div>
//     </div>
//   );
// };

export default function Home() {
  return (
    <div className="bg-gray-100 flex flex-col items-center text-black min-h-screen p-10">
      <h1 className="text-3xl font-bold mb-6">Questions</h1>
      <section className="bg-white p-6 rounded shadow-md w-full max-w-2xl">
        {questions.map((question) => {
          return <Question key={question.id} {...question} />;
        })}
      </section>
    </div>
  );
}

// const Question = ({ title, info }) => {
//   const [showInfo, setShowInfo] = useState(false);

//   return (
//     <div className="border border-gray-200 p-4 mb-4 rounded shadow-sm">
//       <div className="flex justify-between items-center">
//         <h4 className="font-semibold text-lg">{title}</h4>
//         <button
//           className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center"
//           onClick={() => setShowInfo(!showInfo)}
//         >
//           {showInfo ? "-" : "+"}
//         </button>
//       </div>

//       {showInfo && <p className="mt-4 text-gray-600 transition-all">{info}</p>}
//     </div>
//   );
// };
const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div className="border border-gray-200 p-4 mb-4 rounded shadow-sm">
      <div className="flex justify-between items-center">
        <h4 className="font-semibold text-lg">{title}</h4>
        <button
          className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center"
          onClick={() => setShowInfo(!showInfo)}
        >
          {showInfo ? "-" : "+"}
        </button>
      </div>
      {showInfo && <p className="mt-4 text-gray-600 transition-all">{info}</p>}
    </div>
  );
};
