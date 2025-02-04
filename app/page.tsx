import { Navbar } from "./_components/Navbar";
// import { CardPorto2 } from "./_components/CardPorto2";
import { Footer } from "./_components/Footer";

export default function Home() {
  return (
    <div className="flex justify-center min-w-full min-h-screen">
      <div className="w-6/12 py-4 flex flex-col justify-center items-center">
        {/* <Navbar /> */}
        <div className="flex justify-center">
          <p>Redirect to Notion ...</p>
        </div>
        {/* <div className="pt-4 px-4">
          <CardPorto2 />
        </div> */}
        {/* <div className="grid grid-cols-2 gap-4 p-4">
          <CardPorto2 />
          <CardPorto2 />
          <CardPorto2 />
          <CardPorto2 />
          <CardPorto2 />
        </div> */}
        {/* <Footer /> */}
      </div>
    </div>
  );
}
