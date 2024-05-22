import { Navbar } from "../components/navbar/Navbar";

export default function GeneralLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-slate-50 container m-auto h-screen">
      <Navbar />
      {children}
    </main>
  );
}