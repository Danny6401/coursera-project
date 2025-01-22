import chefsMarioAndAdrianAImage from "./assets/chefs-mario-and-adrian_a.jpg";
import chefsMarioAndAdrianBImage from "./assets/chefs-mario-and-adrian_b.jpg";
import "./OurStory.css";

const OurStory = () => {
  return (
    <section className="container grid our-story">
      <div className="our-story-description">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Welcome to Little Lemon, a family-owned Mediterranean restaurant based
          in the heart of Chicago, where tradition meets modern flavor. Rooted
          in authentic Mediterranean recipes passed down through generations, we
          bring you the perfect blend of time-honored dishes with a fresh,
          contemporary twist. At Little Lemon, we are passionate about using the
          finest ingredients to create flavorful, wholesome meals that celebrate
          the rich culinary heritage of the Mediterranean. From our freshly
          prepared hummus and savory kebabs to our innovative seasonal specials,
          every dish is crafted with love and care. Whether you're dining in or
          taking out, our warm atmosphere and dedicated service ensure an
          unforgettable experience. Come and enjoy a taste of tradition
          reimagined, right here at Little Lemon.
        </p>
      </div>
      <div className="our-story-chefs">
        <img src={chefsMarioAndAdrianAImage} alt="Chefs Mario and Adrian" />
        <img src={chefsMarioAndAdrianBImage} alt="Chefs Mario and Adrian" />
      </div>
    </section>
  );
};

export default OurStory;
