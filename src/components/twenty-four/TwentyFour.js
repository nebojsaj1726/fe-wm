import React, { Component } from "react";
import axios from "axios";

import "./TwentyFour.css";
import Button from "../button/Button";

class TwentyFour extends Component {
  state = {
    nameL: "",
    featL1: "",
    featL2: "",
    featL3: "",
    featL4: "",
    featL5: "",
    img1Url: "",
    img2Url: "",
    img3Url: "",
    promoText: "",
    oldPrice: "",
    price: "",
    oldPriceText: "",
  };

  componentDidMount() {
    axios
      .get("https://www.mocky.io/v2/5e8465c23000008400cf4395")
      .then((res) => {
        this.setState({
          nameL: res.data.items[0].name,
          featL1: res.data.items[0].included[0].long_name,
          featL2: res.data.items[0].included[1].long_name,
          featL3: res.data.items[0].included[4].long_name,
          featL4: res.data.items[0].included[2].long_name,
          featL5: res.data.items[0].included[3].long_name,
          img1Url: res.data.assets.tv_category,
          img2Url: res.data.assets.net_category,
          img3Url: res.data.items[0].promotions[0].promotion_image,
          promoText: res.data.items[0].promotions[0].promo_text.replace(
            /<\/?[^>]+>/gi,
            ""
          ),
          oldPriceL: parseInt(
            res.data.items[0].prices.old_price_recurring["Ugovor 24 meseca"]
          )
            .toString()
            .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1."),
          price: parseInt(
            res.data.items[0].prices.price_recurring["Ugovor 24 meseca"]
          ),
          oldPriceText: res.data.items[0].prices.old_price_promo_text.replace(
            /<\/?[^>]+>/gi,
            ""
          ),
          nameC: res.data.items[1].name,
          featC1: res.data.items[1].included[0].long_name,
          featC2: res.data.items[1].included[1].long_name,
          featC3: res.data.items[1].included[4].long_name,
          featC4: res.data.items[1].included[5].long_name,
          featC5: res.data.items[1].included[2].long_name,
          featC6: res.data.items[1].included[3].long_name,
          oldPriceC: parseInt(
            res.data.items[1].prices.old_price_recurring["Ugovor 24 meseca"]
          )
            .toString()
            .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1."),
          nameR: res.data.items[2].name,
          featR1: res.data.items[2].included[2].long_name,
          featR2: res.data.items[2].included[3].long_name,
          featR3: res.data.items[2].included[4].long_name,
          featR4: res.data.items[2].included[5].long_name,
          featR5: res.data.items[2].included[6].long_name,
          featR6: res.data.items[2].included[7].long_name,
          featR7: res.data.items[2].included[0].long_name,
          featR8: res.data.items[2].included[1].long_name,
          oldPriceR: parseInt(
            res.data.items[2].prices.old_price_recurring["Ugovor 24 meseca"]
          )
            .toString()
            .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1."),
        });
      });
  }

  render() {
    const {
      nameL,
      featL1,
      featL2,
      featL3,
      featL4,
      featL5,
      img1Url,
      img2Url,
      img3Url,
      promoText,
      oldPriceL,
      price,
      oldPriceText,
      nameC,
      featC1,
      featC2,
      featC3,
      featC4,
      featC5,
      featC6,
      oldPriceC,
      nameR,
      featR1,
      featR2,
      featR3,
      featR4,
      featR5,
      featR6,
      featR7,
      featR8,
      oldPriceR,
    } = this.state;
    return (
      <div className="container">
        <div className="content-container">
          <div className="card animated fadeInLeft">
            <div className="heading-container">
              <h2 className="card-heading">{nameL}</h2>
            </div>
            <hr />
            <div className="up">
              <img src={img1Url} className="icon" alt="" />
              <ul>
                <li>{featL1}</li>
                <li>{featL2}</li>
                <li>{featL3}</li>
              </ul>
            </div>
            <hr />
            <div className="middle">
              <div className="m-upper">
                <img src={img2Url} className="icon" alt="" />
                <ul>
                  <li>{featL4}</li>
                  <li>{featL5}</li>
                </ul>
              </div>
              <div className="m-down">
                <img src={img3Url} className="promo-img" alt="" />
                <p className="promo">{promoText}</p>
              </div>
            </div>
            <hr />
            <div className="down">
              <div className="d-upper">
                <p className="down-p1">{oldPriceL} rsd/mes.</p>
                <p className="down-p2">{price} rsd/mes.</p>
              </div>
              <p className="op-text">{oldPriceText}</p>
              <Button />
            </div>
          </div>
          <div className="card-middle">
            <div className="small-heading-container-middle">
              <h3 className="middle-top-heading">Preporučujemo</h3>
            </div>
            <hr />
            <div className="heading-container-middle">
              <h2 className="card-heading-middle">{nameC}</h2>
            </div>
            <hr />
            <div className="up-middle">
              <img src={img1Url} className="icon" alt="" />
              <ul>
                <li>{featC1}</li>
                <li>{featC2}</li>
                <li>{featC3}</li>
                <li>{featC4}</li>
              </ul>
            </div>
            <hr />
            <div className="middle-middle">
              <div className="m-upper-middle">
                <img src={img2Url} className="icon" alt="" />
                <ul>
                  <li>{featC5}</li>
                  <li>{featC6}</li>
                </ul>
              </div>
              <div className="m-down-middle">
                <img src={img3Url} className="promo-img" alt="" />
                <p className="promo-middle">{promoText}</p>
              </div>
            </div>
            <hr />
            <div className="down-middle">
              <div className="d-upper-middle">
                <p className="down-p1-middle">{oldPriceC} rsd/mes.</p>
                <p className="down-p2-middle">{price} rsd/mes.</p>
              </div>
              <p className="op-text-middle">{oldPriceText}</p>
              <Button />
            </div>
          </div>
          <div className="card animated fadeInRight">
            <div className="heading-container">
              <h2 className="card-heading-right">{nameR}</h2>
            </div>
            <hr />
            <div className="up">
              <img src={img1Url} className="icon" alt="" />
              <ul>
                <li>{featR1}</li>
                <li>{featR2}</li>
                <li>{featR3}</li>
                <li>{featR4}</li>
                <li>{featR5}</li>
                <li>{featR6}</li>
              </ul>
            </div>
            <hr />
            <div className="middle">
              <div className="m-upper">
                <img src={img2Url} className="icon" alt="" />
                <ul>
                  <li>{featR7}</li>
                  <li>{featR8}</li>
                </ul>
              </div>
              <div className="m-down">
                <img src={img3Url} className="promo-img" alt="" />
                <p className="promo">{promoText}</p>
              </div>
            </div>
            <hr />
            <div className="down">
              <div className="d-upper">
                <p className="down-p1">{oldPriceR} rsd/mes.</p>
                <p className="down-p2">{price} rsd/mes.</p>
              </div>
              <p className="op-text">{oldPriceText}</p>
              <Button />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TwentyFour;
