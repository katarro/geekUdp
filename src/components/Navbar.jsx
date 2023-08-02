import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";

export default function Navbar() {
  return (
    <nav className="navbar navbar-light ">
      <div className="container-form">
        <form
          className="d-flex align-items-center flex-column flex-sm-row"
          id="form"
        >
          <div className="input-group ">
            <input
              className="form-control me-3"
              id="input-wide"
              type="search"
              placeholder="Buscar"
              aria-label="Search"
            />
          </div>
          <button
            className="btn btn-success mt-3 mx-auto mx-md-0"
            id="button-wide"
            type="submit"
          >
            Buscar
          </button>
        </form>
        <div className="auth-buttons">
          <Link to="/login">
            <Button color="primary" className="auth-btn" style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginLeft: 'auto',
              color: "#ffffff",
            }}>
              <AccountCircle /> Login
            </Button>
          </Link>
          <Link to="/register">
            <Button color="secondary" className="auth-btn" style={{
              color: "#ffffff",
              marginLeft: '10px'
            }}>
              Register
            </Button>
          </Link>
        </div>

      </div>
    </nav >
  );
}
