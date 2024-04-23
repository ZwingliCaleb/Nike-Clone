//import 

const button = ({label, iconURL}) => {
  return (
    <button className="flex justify-center font-montserrat 
    gap-2 px-7 py-4 border items-center text-lg 
    leading-none bg-coral-red rounded-full text-white 
    border-coral-red">
      {label}
      {iconURL && <img
        src={iconURL}
        alt="Arrow right icon"
        className="ml-2 rounded-full w-5 h-5" 
      />}
    </button>
  )
}

export default button
