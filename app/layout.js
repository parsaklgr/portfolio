import "../styles/globals.css";
import { inter } from "./fonts";
import NavbarComponent from "../components/layout/navbar_component";

export const metadata = {
  title: "Parsa Kalagar's portfolio",
  description:
    "Visit the portfolio of Parsa Kalagar. His experience, education, and skills.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavbarComponent />
        {children}
      </body>
    </html>
  );
}
