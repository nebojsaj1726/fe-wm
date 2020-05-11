import React, { Component } from "react";
import axios from "axios";

import "./TwelveMonth.css";
import Button from "../button/Button";

class TwelveMonth extends Component {
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
    axios.get("http://www.mocky.io/v2/5e8465c23000008400cf4395").then((res) => {
      this.setState({
        nameL: res.data.items[0].name,
        featL1: res.data.items[0].included[0].long_name,
        featL2: res.data.items[0].included[1].long_name,
        featL3: res.data.items[0].included[4].long_name,
        featL4: res.data.items[0].included[2].long_name,
        featL5: res.data.items[0].included[3].long_name,
        img1Url: res.data.assets.tv_category,
        img2Url: res.data.assets.net_category,
        price: parseInt(
          res.data.items[0].prices.price_recurring["Ugovor 12 meseci"]
        ),
        nameC: res.data.items[1].name,
        featC1: res.data.items[1].included[0].long_name,
        featC2: res.data.items[1].included[1].long_name,
        featC3: res.data.items[1].included[4].long_name,
        featC4: res.data.items[1].included[5].long_name,
        featC5: res.data.items[1].included[2].long_name,
        featC6: res.data.items[1].included[3].long_name,
        priceC: parseInt(
          res.data.items[1].prices.price_recurring["Ugovor 12 meseci"]
        ),
        nameR: res.data.items[2].name,
        featR1: res.data.items[2].included[2].long_name,
        featR2: res.data.items[2].included[3].long_name,
        featR3: res.data.items[2].included[4].long_name,
        featR4: res.data.items[2].included[5].long_name,
        featR5: res.data.items[2].included[6].long_name,
        featR6: res.data.items[2].included[7].long_name,
        featR7: res.data.items[2].included[0].long_name,
        featR8: res.data.items[2].included[1].long_name,
        priceR: parseInt(
          res.data.items[2].prices.price_recurring["Ugovor 12 meseci"]
        ),
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
      price,
      nameC,
      featC1,
      featC2,
      featC3,
      featC4,
      featC5,
      featC6,
      priceC,
      nameR,
      featR1,
      featR2,
      featR3,
      featR4,
      featR5,
      featR6,
      featR7,
      featR8,
      priceR,
    } = this.state;
    return (
      <div className="container">
        <div className="content-container">
          <div className="card-twelve animated fadeInLeft">
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
            <div className="middle-twelve">
              <div className="m-upper">
                <img src={img2Url} className="icon" alt="" />
                <ul>
                  <li>{featL4}</li>
                  <li>{featL5}</li>
                </ul>
              </div>
            </div>
            <hr />
            <div className="down">
              <div className="d-upper-twelve">
                <p className="down-p2-twelve">{price} rsd/mes.</p>
              </div>
              <Button />
            </div>
          </div>
          <div className="card-middle-twelve">
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
            <div className="middle-middle-twelve">
              <div className="m-upper-middle">
                <img src={img2Url} className="icon" alt="" />
                <ul>
                  <li>{featC5}</li>
                  <li>{featC6}</li>
                </ul>
              </div>
            </div>
            <hr />
            <div className="down-middle">
              <div className="d-upper-middle-twelve">
                <p className="down-p2-middle-twelve">{priceC} rsd/mes.</p>
              </div>
              <Button />
            </div>
          </div>
          <div className="card-twelve animated fadeInRight">
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
            <div className="middle-twelve">
              <div className="m-upper">
                <img src={img2Url} className="icon" alt="" />
                <ul>
                  <li>{featR7}</li>
                  <li>{featR8}</li>
                </ul>
              </div>
            </div>
            <hr />
            <div className="down">
              <div className="d-upper-twelve">
                <p className="down-p2-twelve">{priceR} rsd/mes.</p>
              </div>
              <Button />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TwelveMonth;
