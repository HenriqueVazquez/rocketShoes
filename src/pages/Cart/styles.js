import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  padding: 15px;
  background: #fff;
  border-radius: 4px;
  min-width: 600px;

  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background: #7159c1;
      color: #fff;
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: bold;
      text-transform: uppercase;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.1, '#7159c1')};
      }
    }
  }
`;

export const ProductTable = styled.table`
  width: 100%;

  thead th {
    color: #999;
    text-align: center;
    padding: 12px;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;
    text-align: center;
    align-items: center;
  }

  img {
    height: 100px;
  }

  strong {
    color: #333;
    display: block;
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    input {
      border: 1px solid #fff;
      border-radius: 4px;
      color: #666;
      padding: 6px;
      width: 60px;
      text-align: center;
    }
    input[type='number']::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
    input[type='number'] {
      -moz-appearance: textfield;
      appearance: textfield;
    }
  }

  button {
    background: none;
    border: 0;
    padding: 6px;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #999;
    font-weight: bold;
  }
  strong {
    font-size: 28px;
    margin-left: 5px;
  }
`;
