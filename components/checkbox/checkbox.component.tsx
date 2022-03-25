import { CheckboxProps } from './checkbox.types';
import * as S from './checkbox.styles';

export const Checkbox = ({ isChecked, isIndeterminated }: CheckboxProps) => {
  return (
    <S.Checkbox isChecked={isChecked} isIndeterminated={isIndeterminated} />
  );
};
