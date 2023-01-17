import Banner from "@/components/Banner";
import Header from "@/components/Header";
import "../../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="max-w-5xl mx-auto">
        <Header />
        <Banner />
        {children}
      </body>
    </html>
  );
}
