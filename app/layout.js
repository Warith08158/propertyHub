import "./globals.css";
import { roboto } from "@/app/ui/fonts.jsx";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased ${roboto.className}`}>{children}</body>
    </html>
  );
}
