import { useState } from "react";
import { star } from "../assets/icons";
import ProductModal from "./ProductModal";

const PopularProductCard = ({ imgURL, name, price, description, sizes }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      className="flex flex-1 flex-col w-full max-sm:w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div onClick={openModal} className="cursor-pointer">
        <img
          src={imgURL}
          alt={name}
          className={`w-[280px] h-[280px] transition-transform duration-300 ${
            isHovered ? "scale-105" : ""
          }`}
        />
      </div>

      {isModalOpen && (
        <ProductModal
          product={{ imgURL, name, price, description, sizes }}
          onClose={closeModal}
        />
      )}

      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font=montserrat text-lg text-slate-gray">(4.5)</p>
      </div>

      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>

      <p className="font-semibold text-lg leading-normal text-coral-red font-montserrat">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
