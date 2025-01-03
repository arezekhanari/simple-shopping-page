import { Metadata } from "next";
import "./globals.css";
import StoreProviderWrapper from "@/lib/StoreProviderWrapper";

export const metadata: Metadata = {
  title: "Simple Shopping Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <StoreProviderWrapper>{children}</StoreProviderWrapper>
      </body>
    </html>
  );
}
