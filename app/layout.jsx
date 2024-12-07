import "./globals.css";
import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

export const metadata = {
  title: "Athlo - Your Needs, Our Sport",
  description:
    "Discover the best sports gear for athletes of all levels. Shop now!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
