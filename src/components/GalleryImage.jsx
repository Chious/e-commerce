import { useState } from "react";
import image1 from "../assets/image-product-1.jpg";
import image2 from "../assets/image-product-2.jpg";
import image3 from "../assets/image-product-3.jpg";
import image4 from "../assets/image-product-4.jpg";

export default function GalleryImage() {
  const [pickedPicture, setPickedPicture] = useState(1);

  const handlePictureChange = (num) => {
    setPickedPicture(num);
  };

  let picture;

  switch (pickedPicture) {
    case 1:
      picture = image1;
      break;
    case 2:
      picture = image2;
      break;
    case 3:
      picture = image3;
      break;
    case 4:
      picture = image4;
      break;
  }

  return (
    <div className="w-1/2 p-12 pl-52 pr-0">
      <div className="container flex flex-col gap-2 w-42 h-2/3">
        <img src={picture} alt="" className="main-img w-full rounded-md" />
        <div className="grid row gap-1 justify-between grid-cols-4 w-full h-1/5">
          <div className="picture-container">
            <img
              src={image1}
              alt=""
              className="w-full h-full rounded-md"
              onClick={() => {
                handlePictureChange(1);
              }}
            />
          </div>

          <div className={`picture-conainer`}>
            <img
              src={image2}
              alt=""
              className="w-full h-full rounded-md"
              onClick={() => {
                handlePictureChange(2);
              }}
            />
          </div>
          <div className="picture-container">
            <img
              src={image3}
              alt=""
              className="w-full h-full rounded-md"
              onClick={() => {
                handlePictureChange(3);
              }}
            />
          </div>
          <div className="picture-container">
            <img
              src={image4}
              alt=""
              className="w-full h-full rounded-md"
              onClick={() => {
                handlePictureChange(4);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
