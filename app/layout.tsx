import "./globals.css";

export const metadata = {
  title: "One Percent Deal House",
  description: "Agent deal submission and tracking platform"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  );
}
