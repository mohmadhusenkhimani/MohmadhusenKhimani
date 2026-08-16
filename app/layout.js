// import { Outfit, Ovo } from "next/font/google";
// import "./globals.css";

// const outfit = Outfit({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
//   variable: "--font-outfit",
// });

// const ovo = Ovo({
//   subsets: ["latin"],
//   weight: ["400"], // must specify explicitly
//   variable: "--font-ovo",
// });

// export const metadata = {
//   title: "Mohmadhusen Khimani",
//   description: "",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" className={`scroll-smooth`}>
//       <body className={`${outfit.variable} ${ovo.variable} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}>
//         {children}
//       </body>
//     </html>
//   );
// }

import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ovo",
});

export const metadata = {
  title: "Mohmadhusen Khimani",
  description: "",
};

// Add this
export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} ${ovo.variable} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}