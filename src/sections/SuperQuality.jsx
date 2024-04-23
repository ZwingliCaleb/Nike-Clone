import button from "../components/Button"

const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between
     items-center max-lg:flex-col gap-10 w-full
      max-container"
      >
        <div className="flex flex-1 flex-col">
          <h2>We Provide You Super Quality Shoes</h2>
          <p>Ensuring premium comfort and style, our meticulously 
            crafted footwear is designed to elevate your experience, 
            providing you with unmatched quality, innovation, and
             a touch of elegance.
          </p>
          <p>
            Our dedication to detail and excellence ensures your satisfaction.
          </p>
          <button>
            View details
          </button>
        </div>
    </section>
  )
}

export default SuperQuality
