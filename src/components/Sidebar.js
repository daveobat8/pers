import React from "react";
import { Nav, Navbar } from "react-bootstrap";

function Sidebar() {
  return (
    <div style={{ paddingLeft: "17px", margin: "0px" }}>
      <Navbar data-bs-theme="dark">
        <Nav
          className="me-auto"
          style={{ backgroundColor: "black", width: "100%", height: "40px" }}
        >
          <Navbar.Brand
            href="/home"
            style={{ color: "red", paddingRight: "30px" }}
          >
            DAVEFLIX
          </Navbar.Brand>
          <Navbar.Brand
            href="/home"
            style={{
              color: "white",
              paddingRight: "30px",
              paddingBottom:"0px",
              fontWeight:"0"
            }}
          >
            Home
          </Navbar.Brand>
          <Navbar.Brand
            href="/movies"
            style={{ color: "white", paddingRight: "30px" }}
          >
            Movies
          </Navbar.Brand>
          <Navbar.Brand
            href="/series"
            style={{ color: "white", paddingRight: "30px" }}
          >
            Series
          </Navbar.Brand>
        </Nav>
      </Navbar>
    </div>
  );
}

export default Sidebar;
