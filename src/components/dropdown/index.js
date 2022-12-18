import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function DropDown({ setItem }) {
  function handleItem(event) {
    setItem(event.target.name);
  }
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item name="hamburger" onClick={handleItem} href="#/action-1">
          Hamburger
        </Dropdown.Item>
        <Dropdown.Item name="fries" onClick={handleItem} href="#/action-2">
          Fries
        </Dropdown.Item>
        <Dropdown.Item name="dessert" onClick={handleItem} href="#/action-3">
          Dessert
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropDown;
