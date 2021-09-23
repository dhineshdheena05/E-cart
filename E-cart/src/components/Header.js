import React from 'react';

export default function Header(props) {
  return (

    <nav
    className="navbar container"
    role="navigation"
    aria-label="main navigation"
  >
    <header className="block row center">
      <div>
        <a href="#/">
          <h1>E-cart shopping</h1>
        </a>
      </div>
      <div>
        <a href="#/cart">
         CART{' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}
        </a>{' '}
        <a href="#/login">LOGIN</a>
      </div>
    </header>
    </nav>

  );
}
