import Link from "next/link";
import { Footer } from "../_components/Footer";
import { Navbar } from "../_components/Navbar";
import { Button } from "@/components/ui/button";

export default function page() {
  return (
    <div className="flex justify-center min-w-full min-h-screen">
      <div className="w-6/12 py-4 flex flex-col justify-between">
        <Navbar />
        <div className="flex flex-col items-center justify-center gap-4">
          <p>Portofolios Page</p>
          <Link href="/Portofolios/Papyrus-Photo">
            <Button>
              Detail Portofolio
              <div className="w-[20px] dark:fill-black fill-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                </svg>
              </div>
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    </div>
  );
}
