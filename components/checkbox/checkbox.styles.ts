import { CheckboxProps } from './checkbox.types';
import styled from 'styled-components';

export const Checkbox = styled.span(
  (props: CheckboxProps) => `
    width: 16px;
    height: 16px;
    display: inline-block;
    background-color: lighten(#2b78d7, 40%);
    color: white;
    text-align: center;
    font-weight: bold;
    font-size: 14px;
    position: relative;
    border: 1px solid white;
    outline: 1px solid #ddd;
    line-height: 14px;
    margin-right: 5px;

    &::after {
      content: '';
    }

    ${
      props.isChecked
        ? `
          background-color: rgba(212, 196, 123, 0.8);
       
          &::after {
            content: '✓';
          }
      `
        : ''
    }

    ${
      props.isIndeterminated
        ? `
          background-color: rgba(185, 195, 180, 1);
          opacity: 0.9;
          
          &::after {
            content: '•';
          }
        `
        : ''
    }
  `,
);
