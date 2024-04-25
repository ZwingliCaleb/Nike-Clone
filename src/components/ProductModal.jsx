import Modal from './Modal';
import { star } from '../assets/icons';

const ProductModal = () => {
  return (
    <Modal>
      <div>
        <img src={product.imgURL} alt={product.name} className="w-full" />
          <h2 className="text-2xl font-bold mt-4">{product.name}</h2>
          <div>
            <img src={star} alt="rating" className="" />
            <p className="text-gray-600">{product.rating}</p>
          </div>
          <p className='text-lg mt-2'>{product.price}</p>
          <p className="text-gray-600 mt-2">{product.description}</p>
      </div>
    </Modal>
  )
}

export default ProductModal;
