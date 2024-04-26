import { useState, useEffect, useRef } from 'react';
import Modal from './Modal';
import { star } from '../assets/icons';

const ProductModal = ({ product, onClose }) => {
  const modalRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showToggle, setShowToggle] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose(); // Close the modal when the user clicks outside of it
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [onClose]);

  useEffect(() => {
    if (product.description.length > 100) {
      setShowToggle(true);
    } else {
      setShowToggle(false);
    }
  }, [product.description]);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Modal>
      <div ref={modalRef} className="bg-white rounded-[20px] p-8 shadow-lg backdrop-filter overflow-auto backdrop-blur-md max-w-[400px] max-h-[600px] md:max-w-md md:max-h-[60vh]">
        <img src={product.imgURL} alt={product.name} className="w-full rounded-lg" />
        <h2 className="text-2xl font-bold mt-4">{product.name}</h2>
        <div className="flex items-center mt-2">
          <img src={star} alt="rating" className="w-4 h-4 mr-1" />
          <p className="text-gray-600">(4.5)</p>
        </div>
        <p className='text-lg mt-2 text-coral-red'>{product.price}</p>
        <div className="mt-2">
          <p className="font-montserrat text-sm">
            {isExpanded ? product.description : product.description.slice(0, 100)}
            {showToggle && (
              <span className="text-coral-red cursor-pointer" onClick={toggleExpand}>
                {isExpanded ? ' Show less' : ' Show more'}
              </span>
            )}
          </p>
        </div>
        <div className="mt-4">
          <p className="font-semibold">Sizes Available:</p>
          <div className="flex flex-wrap">
            {product.sizes.map((size, index) => (
              <p key={index} className="italic mr-2 font-bold text-slate-gray">{size}{index !== product.sizes.length - 1 && ','}</p>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProductModal;
