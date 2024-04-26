
const Modal = ({children, onClose}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center rounded-lg bg-black bg-opacity-50 z-50">
      <div className="bg-white-400 p-4 rounded-3xl shadow-lg backdrop-blur-lg mx-10">
        {children}
        {/*<button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 focus:outline-none"
        >
            Close
        </button>*/}
      </div>
    </div>
  )
}

export default Modal
