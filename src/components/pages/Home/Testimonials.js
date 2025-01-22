import customer1Image from "./assets/customer1.jpg";
import customer2Image from "./assets/customer2.jpg";
import customer3Image from "./assets/customer3.jpg";
import customer4Image from "./assets/customer4.jpg";
import "./Testimonials.css";
import TestimonialCard from "./TestimonialCard";

const customers = [
  {
    fullName: "Jane Smith",
    image: customer1Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `The staff’s hospitality at Little Lemon is unmatched, elevating flavorful
     dishes like baba ganoush and shawarma to an exceptional experience.`,
  },
  {
    fullName: "John Doe",
    image: customer2Image,
    rating: [1, 1, 1, 1, 1],
    says: `I cannot get enough of Little Lemon’s delicious roasted vegetables, 
    filling gyro wraps, and the consistently friendliest service around town.`,
  },
  {
    fullName: "Alicia Johnson",
    image: customer3Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `Little Lemon seamlessly blends modern twists with traditional Mediterranean recipes,
     serving divine meals in a cozy, welcoming environment worth celebrating.`,
  },
  {
    fullName: "Kevin Lee",
    image: customer4Image,
    rating: [1, 1, 1, 1],
    says: `Little Lemon’s menu bursts with aromatic herbs, fresh vegetables, and succulent meats,
     delivering a memorable Mediterranean feast for everyone’s palate.`,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container grid">
        <h2>What people say about us!</h2>
        {customers.map((customer, index) => (
          <TestimonialCard key={index} customer={customer} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
