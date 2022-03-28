import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { MdShoppingBasket } from 'react-icons/md';

import { Container, Cart, Logo } from './styles';

import logo from '../../assets/images/logo.svg';

function Header({ cartSize }) {
  let cartMess = ``;

  switch (cartSize) {
    case 0:
      cartMess = 'Carrinho vazio';
      break;
    case 1:
      cartMess = `${cartSize} item`;
      break;
    default:
      cartMess = `${cartSize} itens`;
  }

  return (
    <Container>
      <Logo to="/" tab aria-label="Logo da empresa e voltar para home">
        <img
          src={logo}
          alt="Rocketshoe"
          aria-label="Logo da empresa e voltar para home"
          keyboard-focusable
        />
      </Logo>

      <Cart to="/cart">
        <div>
          <strong aria-label="Acessar meu carrinho de compra">
            Meu carrinho
          </strong>
          <span aria-label="numero de itens adicionados para compra, clicar leva a página do carrinho de compra">
            {cartMess}
          </span>
        </div>
        <MdShoppingBasket
          size={36}
          color="#fff"
          aria-label="Icone da sacola de compra, clicar leva a página do carrinho de compra"
        />
      </Cart>
    </Container>
  );
}

Header.propTypes = {
  cartSize: PropTypes.number.isRequired,
};

export default connect((state) => ({
  cartSize: state.cart.length,
}))(Header);
