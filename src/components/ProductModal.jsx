import Modal from './Modal';
import { star } from '../assets/icons';
import { product } from '../constants';

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
