import "./globals.css";
import Navbar from './components/navbar'
import Image from "next/image";

export const metadata = {
  title: "Corvodoro",
  description: "We are a Web 3.0 development studio with the goal of building as much as possible on-chain!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-50">
        <Navbar />
        <Image className="fixed w-36" src={'/corvodoro_logo.png'} alt="logo" width={300} height={300} />
        {children}
      </body>
    </html>
  );
}
