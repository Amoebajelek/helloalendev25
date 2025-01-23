import { Footer } from "../_components/Footer";
import { Navbar } from "../_components/Navbar";

export default function page() {
  return (
    <div className="flex justify-center min-w-full min-h-screen">
      <div className="w-6/12 py-4 flex flex-col justify-between">
        <Navbar />

        <Footer />
      </div>
    </div>
  );
}
