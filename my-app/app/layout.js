import Navbar from "@/utils/components/navbar/Navbar";
import "./globals.css";


export const metadata = {
  title: "BABYSITTER-APP",
  description: "BABYSITTER-APP ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
