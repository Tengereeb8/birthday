// export default function Home() {
//   return (
//     <div className="grid place-items-center min-h-screen text-black ">
//       <div className="p-4 max-w-5xl grid gap-4 grid-cols-2">
//         <h1 className="text-4xl font-extrabold col-span-2 grid grid-cols-2 w-60 lg:gird lg:grid-cols-4 lg:col-span-3 lg:text-5xl">
//           Responsive Web with Tailwind Css
//         </h1>
//         <p className="col-span-1 row-start-2 col-start-2 justify-center  flex items-center lg:col-start-1 lg:col-span-2 lg:pr-12 lg:text-lg">
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error fuga
//           placeat facere ab, nemo impedit necessitatibus quaerat, odit laborum
//           reprehenderit accusantium porro.
//         </p>
//         <div className="w-60  bg-blue-500 h-60 "></div>
//         <div className="w-60  bg-blue-500 h-60 "></div>
//         <div className="w-60  bg-pink-500 h-60 "></div>
//         <div className="w-60  bg-blue-500 h-60 lg:col-start-2"></div>
//         <div className="w-60  bg-pink-500 h-60 "></div>
//         <div className="w-60  bg-blue-500 h-60 "></div>
//         <div className="w-60  bg-blue-500 h-60 "></div>
//         <div className="w-60  bg-pink-500 h-60 "></div>
//         <p className=" flex items-center justify-center">
//           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
//           culpa placeat tenetur. Libero quam culpa tenetur sunt voluptate
//           nostrum aspernatur dolore.
//         </p>
//       </div>
//     </div>
//   );
// }
// export default function Home() {
//   return (
//     <div className="min-h-screen bg-white p-6 md:p-12">
//       <div className="max-w-7xl mx-auto">
//         {/* Title */}
//         <h1 className="text-5xl md:text-6xl font-bold mb-12">
//           Prawdziwe historie
//         </h1>

//         {/* Layout Container */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* One Block */}
//           <div className="text-center">
//             <div className="w-full aspect-square bg-blue-500 mb-3"></div>
//             <p className="text-sm text-gray-600">
//               Historia transformacji zwinnnej ADMIND - Krzysztof Langer, CEO i
//               współwłaściciel
//             </p>
//           </div>

//           {/* First Text Block */}
//           <div className="md:col-span-1 lg:col-span-2 lg:col-start-1">
//             <div className="space-y-4 text-gray-700 flex flex-col justify-center h-full col-start-1 ">
//               <p>
//                 Zapraszamy do lektury historii klientów, partnerów i przyjaciół,
//                 z którymi mamy przyjemność wędrować drogą rozwoju i
//                 przedsiębiorczości.
//               </p>
//               <p>
//                 Każda historia jest inna, bo stoją za nimi unikalne organizacje
//                 tworzone przez ludzi obdarzonych wyjątkowymi pomysłami,
//                 talentami i doświadczeniami.
//               </p>
//             </div>
//           </div>

//           {/* 2 Blocks Row */}
//           <div className="text-center">
//             <div className="w-full aspect-square bg-blue-500 mb-3"></div>
//             <p className="text-sm text-gray-600">
//               Historia transformacji cyfrowej Santander Consumer Multibank -
//               Piotr Jasicki, członek zarządu
//             </p>
//           </div>

//           <div className="text-center">
//             <div className="w-full aspect-square bg-pink-500 mb-3"></div>
//             <p className="text-sm text-gray-600">
//               Historia transformacji biznesowej TONY - Mateusz Biegaj,
//               pomysłodawca i współwłaściciel
//             </p>
//           </div>

//           {/* 3 Blocks Row */}
//           <div className="text-center">
//             <div className="w-full aspect-square lg:col-start-2 lg:col-span-2 bg-blue-500 mb-3"></div>
//             <p className="text-sm text-gray-600">
//               Historia transformacji cyfrowej ANSEE - Piotr Szmigel, członek
//               zarządu
//             </p>
//           </div>

//           <div className="text-center">
//             <div className="w-full aspect-square bg-pink-500 mb-3"></div>
//             <p className="text-sm text-gray-600">
//               Historia partnerstwa strategicznego z FICTURO - Paulina Jarosz,
//               współwłaścicielka marki
//             </p>
//           </div>

//           <div className="text-center">
//             <div className="w-full aspect-square bg-blue-500 mb-3"></div>
//             <p className="text-sm text-gray-600">
//               Historia startupu GLOBAL LIGNUM - Dominik Szlwarek, pomysłodawca i
//               właściciel
//             </p>
//           </div>

//           {/* 2 Blocks Row */}
//           <div className="text-center">
//             <div className="w-full aspect-square bg-blue-500 mb-3"></div>
//             <p className="text-sm text-gray-600">
//               Historia transformacji biznesowej EXSO - Marcin Kuczyński,
//               współwłaściciel
//             </p>
//           </div>

//           <div className="text-center">
//             <div className="w-full aspect-square bg-pink-500 mb-3"></div>
//             <p className="text-sm text-gray-600">
//               Historia nowego rozdziału rozwoju USEO - Dariusz Michalski, CEO i
//               właściciel
//             </p>
//           </div>

//           {/* Last Text Block */}
//           <div className="flex items-center justify-center md:col-span-2 lg:col-span-1">
//             <p className="text-xl md:text-2xl text-gray-700 italic text-center">
//               "Jesteśmy złączeni dzięki historiom" – Arystoteles, 384-322 p.n.e.
//             </p>
//           </div>
//         </div>

//         {/* Scroll Button */}
//         <div className="flex justify-center mt-12">
//           <button className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition">
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M5 15l7-7 7 7"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
export default function Home() {
  return (
    <div className="min-h-screen bg-white p-8 md:p-16">
      <div className="max-w-7xl mx-auto">
        {/* Main Ladder Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 items-start">
          {/* ROW 1: Title (Cols 1-2) and First Block (Col 4) */}
          <div className="lg:col-span-2">
            <h1 className="text-6xl md:text-8xl font-bold leading-tight">
              Prawdziwe
              <br />
              historie
            </h1>
          </div>

          {/* Spacer for Column 3 */}
          <div className="hidden lg:block"></div>

          <div className="text-left lg:col-start-4">
            <div className="w-full aspect-square bg-blue-600 mb-4"></div>
            <p className="text-sm text-gray-700 leading-snug">
              Historia transformacji zwinnnej ADMIND - Krzysztof Langer, CEO i
              współwłaściciel
            </p>
          </div>

          {/* ROW 2: Intro Text (Col 1) and Two Blocks (Cols 3 & 4) */}
          <div className="lg:col-span-2 pr-12 self-center">
            <div className="space-y-6 text-gray-800 text-lg">
              <p>
                Zapraszamy do lektury historii klientów, partnerów i przyjaciół,
                z którymi mamy przyjemność wędrować drogą rozwoju i
                przedsiębiorczości.
              </p>
              <p>
                Każda historia jest inna, bo stoją za nimi unikalne organizacje
                tworzone przez ludzi obdarzonych wyjątkowymi pomysłami,
                talentami i doświadczeniami.
              </p>
            </div>
          </div>

          <div className="text-left lg:col-start-3">
            <div className="w-full aspect-square bg-blue-600 mb-4"></div>
            <p className="text-sm text-gray-700 leading-snug">
              Historia transformacji cyfrowej Santander Consumer Multirent -
              Piotr Jasicki, członek zarządu
            </p>
          </div>

          <div className="text-left lg:col-start-4">
            <div className="w-full aspect-square bg-pink-600 mb-4"></div>
            <p className="text-sm text-gray-700 leading-snug">
              Historia transformacji biznesowej TONY - Mateusz Biegaj,
              pomysłodawca i współwłaściciel
            </p>
          </div>

          {/* ROW 3: Three Blocks (Cols 2, 3, & 4) */}
          <div className="text-left lg:col-start-2">
            <div className="w-full aspect-square bg-blue-600 mb-4"></div>
            <p className="text-sm text-gray-700 leading-snug">
              Historia transformacji cyfrowej ANSEE - Piotr Szmigel, członek
              zarządu
            </p>
          </div>

          <div className="text-left lg:col-start-3">
            <div className="w-full aspect-square bg-pink-600 mb-4"></div>
            <p className="text-sm text-gray-700 leading-snug">
              Historia partnerstwa strategicznego z FICTURO - Paulina Jarosz,
              współwłaścicielka marki
            </p>
          </div>

          <div className="text-left lg:col-start-4">
            <div className="w-full aspect-square bg-blue-600 mb-4"></div>
            <p className="text-sm text-gray-700 leading-snug">
              Historia startupu GLOBAL LIGNUM - Dominik Szkwarek, pomysłodawca i
              właściciel
            </p>
          </div>

          {/* ROW 4: Two Blocks (Cols 1 & 2) and Final Quote (Cols 3-4) */}
          <div className="text-left lg:col-start-1">
            <div className="w-full aspect-square bg-blue-600 mb-4"></div>
            <p className="text-sm text-gray-700 leading-snug">
              Historia transformacji biznesowej EXSO - Marcin Kuczyński,
              współwłaściciel
            </p>
          </div>

          <div className="text-left lg:col-start-2">
            <div className="w-full aspect-square bg-pink-600 mb-4"></div>
            <p className="text-sm text-gray-700 leading-snug">
              Historia nowego rozdziału rozwoju USEO - Dariusz Michalski, CEO i
              właściciel
            </p>
          </div>

          <div className="lg:col-span-2 lg:col-start-3 flex items-center justify-start pl-8 h-full">
            <p className="text-xl md:text-2xl text-gray-800 font-medium italic">
              "Jesteśmy złączeni dzięki historiom" – Arystoteles, 384-322 p.n.e.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
