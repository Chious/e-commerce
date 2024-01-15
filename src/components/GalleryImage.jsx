import image1 from "../assets/image-product-1.jpg";
import image2 from "../assets/image-product-2.jpg";
import image3 from "../assets/image-product-3.jpg";
import image4 from "../assets/image-product-4.jpg";

export default function GalleryImage() {
  return (
    <div className="w-1/2 p-12 pl-52 pr-0">
      <div className="container flex flex-col gap-2 w-42 h-2/3">
        <img src={image1} alt="" className="main-img w-full " />
        <div className="flex row gap-3 justify-between">
          <img src={image1} alt="" className="max-w-24 max-h-24" />
          <img src={image2} alt="" className="max-w-24 max-h-24" />
          <img src={image3} alt="" className="max-w-24 max-h-24" />
          <img src={image4} alt="" className="max-w-24 max-h-24" />
        </div>
      </div>
    </div>
  );
}
