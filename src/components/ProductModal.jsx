import { useEffect, useRef } from 'react';
import Modal from './Modal';
import { star } from '../assets/icons';

const ProductModal = ({ product, onClose }) => {
  const modalRef = useRef(null);

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

  return (
    <Modal>
      <div ref={modalRef} className="bg-white rounded-lg p-8 max-w-md max-h-full overflow-auto shadow-lg backdrop-filter backdrop-blur-sm">
        <img src={product.imgURL} alt={product.name} className="w-full rounded-lg" />
        <h2 className="text-2xl font-bold mt-4">{product.name}</h2>
        <div className="flex items-center mt-2">
          <img src={star} alt="rating" className="w-4 h-4 mr-1" />
          <p className="text-gray-600">{product.rating}</p>
        </div>
        <p className='text-lg mt-2'>{product.price}</p>
        <p className="text-gray-600 mt-2">{product.description}</p>
        <div className="mt-4">
          <p className="font-semibold">Sizes Available:</p>
          <ul className="list-disc list-inside">
            {product.sizes.map((size, index) => (
              <li key={index}>{size}</li>
            ))}
          </ul>
        </div>
      </div>
    </Modal>
  )
}

export default ProductModal;
