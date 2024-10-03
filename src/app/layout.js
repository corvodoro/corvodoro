import LeftNav from "@/components/leftnav";
import "./globals.css";

export const metadata = {
  title: "Corvodoro",
  description: "We are a Web 3.0 development studio with the goal of building as much as possible on-chain!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-50">
        <LeftNav />
        {children}
      </body>
    </html>
  );
}
