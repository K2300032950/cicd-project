import React, { Component } from "react";
import "./MenuBar.css";

class MenuBar extends Component {
  render() {
    return (
      <div className="menubar">
        <div className="menuheader">
          <img src="/menu.png" alt="" />
          MENU
        </div>

        <div className="menulist">
          <ul>
            <li onClick={() => this.props.onMenuClick("1")}>
              <img src="/donor.png" alt="" /> Donors
            </li>

            <li onClick={() => this.props.onMenuClick("2")}>
              <img src="/inventory.png" alt="" /> Inventory
            </li>

            <li onClick={() => this.props.onMenuClick("3")}>
              <img src="/request.png" alt="" /> Requests
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default MenuBar;
