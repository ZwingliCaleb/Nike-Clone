import { footerLogo } from "../assets/images"

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start
       gap-20 flex-wrap max-lg:flex-col ">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src
              ={footerLogo}
              width={150}
              height={46}
            />
          </a>
          <p className=" mt-6 text-base leading-7
           text-white-400 font-montserrat sm:max-w-sm">
            Get shoes ready for the new term at 
            your nearest Nike store. Find your perfect 
            size in store. Get rewards
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
