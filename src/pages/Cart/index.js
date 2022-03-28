/* eslint-disable react/prop-types */
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';
import { formatPrice } from '../../util/format';

import * as CartActions from '../../store/modules/cart/actions';
import { Container, ProductTable, Total } from './styles';

function Cart({ cart, total, removeFromCart, updateAmountRequest }) {
  function increment(product) {
    updateAmountRequest(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmountRequest(product.id, product.amount - 1);
  }

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th aria-label="Coluna de imagens dos produtos" />
            <th aria-label="Produto">Produto</th>
            <th aria-label="Quantidade">Quantidade</th>
            <th aria-label="Subtotal">Subtotal</th>
            <th aria-label="Coluna para excluir itens" />
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => (
            <tr>
              <td>
                <img src={product.image} alt={product.title} />
              </td>
              <td>
                <strong>{product.title} </strong>
                <span>{product.priceFormatted}</span>
              </td>
              <td>
                <div aria-label="área de quantidade dos produtos">
                  <button
                    type="button"
                    aria-label="Remove uma unidade deste item do carrinho"
                    onClick={() => decrement(product)}
                  >
                    <MdRemoveCircleOutline
                      size={20}
                      color="7159c1"
                      aria-label="Remove uma unidade deste item do carrinho"
                    />
                  </button>
                  <input
                    type="number"
                    readOnly
                    value={product.amount}
                    aria-labelledby="Quantidade do item para compra"
                  />

                  <button
                    type="button"
                    aria-label="Adiciona mais um deste item ao carrinho"
                    onClick={() => increment(product)}
                  >
                    <MdAddCircleOutline
                      size={20}
                      color="7159c1"
                      aria-label="Adiciona mais um deste item ao carrinho"
                    />
                  </button>
                </div>
              </td>
              <td>
                <strong aria-label="Valor total somado deste itens e suas quantidades">
                  {product.subtotal}
                </strong>
              </td>
              <td>
                <button
                  type="button"
                  aria-label="Remover item do carrinho de compra"
                >
                  <MdDelete
                    size={20}
                    color="7159c1"
                    aria-label="Remover item do carrinho de compra"
                    onClick={() => removeFromCart(product.id)}
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar pedido</button>

        <Total>
          <span aria-label="Total">Total</span>
          <strong aria-label="Valor total da compra">{total}</strong>
        </Total>
      </footer>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart.map((product) => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce(
      (total, product) => total + product.price * product.amount,
      0
    )
  ),
});

const MapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, MapDispatchToProps)(Cart);
