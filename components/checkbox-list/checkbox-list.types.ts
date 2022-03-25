import { CheckboxState } from '../checkbox/checkbox.types';

export type CheckboxListItem = {
  id: number;
  name: string;
  parentId: number;
};

export interface CheckboxListProps {
  items: CheckboxListItem[];
  idsToRender?: number[];
  indentLevel?: number;
  onClick?: (id: number) => void;
  getCheckboxState: (id: number) => CheckboxState;
}

export type CheckboxItemState = {
  id: number;
  state: CheckboxState;
};
