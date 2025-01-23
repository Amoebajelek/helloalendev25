import { Navbar } from "./_components/Navbar";
import { CardPorto2 } from "./_components/CardPorto2";
import { Footer } from "./_components/Footer";

export default function Home() {
  return (
    <div className="flex justify-center min-w-full min-h-screen">
      <div className="w-6/12 py-4">
        <Navbar />
        <div className="pt-4 px-4">
          <CardPorto2 />
        </div>
        <div className="flex gap-4 p-4">
          <CardPorto2 />
          <CardPorto2 />
        </div>
        <Footer />
      </div>
    </div>
  );
}
