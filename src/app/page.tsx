import Image from "next/image";
import coffeImage from "../assets/3545a5fc5ff647be3f09798f9a3c3f40.jpg";
import "./page.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import {
  faEnvelope,
  faHome,
  faCartPlus,
  faNewspaper,
  faSignIn,
} from "@fortawesome/free-solid-svg-icons";
import SwiperComponent from "@/component/silde/SwiperComponent";

export default function PageHome() {
  return (
    <div>
      <div>
        <ul className="menu">
          <li>
            <FontAwesomeIcon icon={faHome} className="menu-icon" size="lg" />
            Home
          </li>
          <li>
            <FontAwesomeIcon icon={faCartPlus} className="menu-fa" size="2x" />
            Card
          </li>
          <li>
            <FontAwesomeIcon
              icon={faNewspaper}
              className="menu-icon"
              size="lg"
            />
            Event
          </li>
          <li>
            <FontAwesomeIcon icon={faSignIn} className="menu-icon" size="lg" />
            Login
          </li>
        </ul>
      </div>

      <div className="container">
        <div className="image-container">
          <Image
            className="rounded-image"
            src={coffeImage}
            alt="Description of the image"
            width={200}
            height={150}
          />
        </div>
        <div className="image-left">
          <Image
            className="image-select"
            src={coffeImage}
            alt="Description of the image"
            width={50}
            height={50}
          />
        </div>
        <div className="text-container">
          <h1>PRODUCT</h1>
          <div className="select-container">
            <select defaultValue="" className="food-select">
              <option value="">Menu thức ăn sáng</option>
              <option value="laptop">Bánh mì</option>
              <option value="smartphone">Mì gói</option>
              <option value="tablet">Xôi</option>
            </select>

            <select defaultValue="" className="coffe-select">
              <option value="">Menu đồ uống</option>
              <option value="red">Dừa sữa</option>
              <option value="blue">Cotail </option>
              <option value="green">Cacao</option>
            </select>

            <select defaultValue="" className="tea-select">
              <option value="">Menu trà</option>
              <option value="red">Trà sữa</option>
              <option value="blue">Trà xanh</option>
              <option value="green">Trà trái cây</option>
            </select>
            <select defaultValue="" className="drink-select">
              <option value="">Menu cà phê</option>
              <option value="under50">Cà phê</option>
              <option value="50to100">Cà phê rang</option>
              <option value="over100">Cà phê chồn</option>
            </select>
          </div>
          <div className="product-row">
            <div className="product-item">
              <Image
                src={coffeImage}
                alt="Product 1"
                width={100}
                height={100}
                className="product-image"
              />
              <div className="product-detail">
                <div className="product-info">
                  <h3 className="product-name">Product 1</h3>
                  <p className="product-price">$10</p>
                </div>
                <div className="product-actions">
                  <FontAwesomeIcon icon={faHeart} />
                </div>
              </div>
            </div>
            <div className="product-item">
              <Image
                src={coffeImage}
                alt="Product 1"
                width={100}
                height={100}
                className="product-image"
              />
              <div className="product-detail">
                <div className="product-info">
                  <h3 className="product-name">Product 1</h3>
                  <p className="product-price">$10</p>
                </div>
                <div className="product-actions">
                  <FontAwesomeIcon icon={faHeart} />
                </div>
              </div>
            </div>
            <div className="product-item">
              <Image
                src={coffeImage}
                alt="Product 1"
                width={100}
                height={100}
                className="product-image"
              />
              <div className="product-detail">
                <div className="product-info">
                  <h3 className="product-name">Product 1</h3>
                  <p className="product-price">$10</p>
                </div>
                <div className="product-actions">
                  <FontAwesomeIcon icon={faHeart} />
                </div>
              </div>
            </div>
            <div className="product-item">
              <Image
                src={coffeImage}
                alt="Product 1"
                width={100}
                height={100}
                className="product-image"
              />
              <div className="product-detail">
                <div className="product-info">
                  <h3 className="product-name">Product 1</h3>
                  <p className="product-price">$10</p>
                </div>
                <div className="product-actions">
                  <FontAwesomeIcon icon={faHeart} />
                </div>
              </div>
            </div>
            <div className="product-item">
              <Image
                src={coffeImage}
                alt="Product 2"
                width={100}
                height={100}
                className="product-image"
              />
              <div className="product-detail">
                <div className="product-info">
                  <h3 className="product-name">Product 2</h3>
                  <p className="product-price">$15</p>
                </div>
                <div className="product-actions">
                  <FontAwesomeIcon icon={faHeart} />
                </div>
              </div>
            </div>
            <div className="product-item">
              <Image
                src={coffeImage}
                alt="Product 3"
                width={100}
                height={100}
                className="product-image"
              />
              <div className="product-detail">
                <div className="product-info">
                  <h3 className="product-name">Product 3</h3>
                  <p className="product-price">$20</p>
                </div>
                <div className="product-actions">
                  <FontAwesomeIcon icon={faHeart} />
                </div>
              </div>
            </div>
          </div>
          {/* <SwiperComponent /> */}
          <h1>THE COFFEE SGARDEN</h1>
          <div className="star-icon">
            <FontAwesomeIcon icon={faStar} className="star" />
            <FontAwesomeIcon icon={faStar} className="star" />
            <FontAwesomeIcon icon={faStar} className="star" />
            <FontAwesomeIcon icon={faStar} className="star" />
            <FontAwesomeIcon icon={faStar} className="star" />
            <div className="text-left">Best Seller Coffee</div>
          </div>
          <div className="text-description">
            <div className="text-address">
              <FontAwesomeIcon icon={faLocationDot} className="dot" />
              <div className="text-dot">
                87b Đường Số 22, Khu Phố 4, Quận 9, Thành phố Hồ Chí Minh, Việt
                Nam.
              </div>
            </div>
            <div className="text-phone">
              <FontAwesomeIcon icon={faPhone} className="dot" />
              <div className="text-dot">+0733898497.</div>
            </div>
            <div className="text-phone">
              <FontAwesomeIcon icon={faEnvelope} className="dot" />
              <div className="text-dot">Example@gmail.com.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
