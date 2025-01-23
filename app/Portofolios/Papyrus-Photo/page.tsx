import { Footer } from "@/app/_components/Footer";
import { Navbar } from "@/app/_components/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function page() {
  return (
    <div className="flex justify-center min-w-full min-h-screen">
      <div className="w-6/12 py-4 flex flex-col justify-between">
        <Navbar />
        <div className="flex flex-col items-center justify-center gap-4">
          <Link href="/Portofolios">
            <Button>
              <div className="w-[20px] dark:fill-black fill-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
                </svg>
              </div>
              Back to Portofolios
            </Button>
          </Link>
          <p>Detail Portofolio</p>
        </div>
        <Footer />
      </div>
    </div>
  );
}
