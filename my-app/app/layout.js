import "./globals.css";


export const metadata = {
  title: "BABYSITTER-APP",
  description: "BABYSITTER-APP ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
