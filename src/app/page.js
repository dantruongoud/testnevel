import Carousel from "@/components/Carousel";
import ExclusiveGame from "@/components/ExclusiveGame";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Tag from "@/components/Tag";

export default function Home() {
  return (
    <>
      <div className="max-w-[1440px] mx-auto p-4">
        <Header />
      </div>
      <div className="my-8 py-3.5">
        <Carousel />
      </div>
      <div className="max-w-[1440px] mx-auto p-4">
        <Tag />
        <div className="my-4 border-t-[0.5px] border-gray-300/20"></div>
        <ExclusiveGame />
      </div>
      <div className="p-4">
        <Footer />
      </div>
    </>
  );
}
