import { Footer } from "@/app/_components/Footer";
import { Navbar } from "@/app/_components/Navbar";

export default function page() {
  return (
    <div className="flex justify-center min-w-full min-h-screen">
      <div className="w-6/12 py-4 flex flex-col justify-between">
        <Navbar />
        <div className="flex justify-center">
          <p>Detail Portofolio</p>
        </div>
        <Footer />
      </div>
    </div>
  );
}
