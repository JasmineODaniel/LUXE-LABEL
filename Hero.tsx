import "./Hero.css";
import heroImg from "../../assets/iphone-14-pro-on-white-background-front-view.jpg";
import { FaApple } from "react-icons/fa";
import { IoChevronForwardOutline } from "react-icons/io5";

const categories = [
  "Woman's Fashion",
  "Men's Fashion",
  "Electronics",
  "Home & Lifestyle",
  "Medicine",
  "Sports & Outdoor",
  "Baby's & Toys",
  "Groceries & Pets",
  "Health & Beauty",
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <aside className="hero-sidebar">
          <ul>
            {categories.map((item, index) => (
              <li key={item}>
                <span>{item}</span>
                {index < 2 && (
                  <IoChevronForwardOutline className="sidebar-icon" />
                )}
              </li>
            ))}
          </ul>
        </aside>

        <article className="hero-banner">
          <div className="hero-banner__row">
            <div className="hero-banner__content">
              <p className="hero-eyebrow">
                <FaApple className="hero-apple" />
                iPhone 14 Series
              </p>

              <h1>Up to 10% off Voucher</h1>

              <button className="hero-cta">
                <IoChevronForwardOutline className="hero-cta__icon" />
                <span>Shop Now</span>
              </button>
            </div>

            <img src={heroImg} alt="iPhone 14" className="hero-image" />
          </div>

          <div className="hero-dots">
            {[0, 1, 2, 3, 4].map((dot) => (
              <span
                key={dot}
                className={dot === 0 ? "dot dot--active" : "dot"}
              />
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
