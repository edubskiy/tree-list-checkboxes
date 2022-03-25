import {
  CheckboxItemState,
  CheckboxListItem,
} from '../checkbox-list/checkbox-list.types';
import { CheckboxState } from '../checkbox/checkbox.types';

export const updateItemStates = (
  oldState: CheckboxItemState[],
  items: CheckboxListItem[],
  clickedId: number,
) => {
  let newState = oldState.map((i) => ({ ...i }));

  const getItemState = (id: number) => {
    return newState.find((i) => i.id === id)!.state;
  };

  const updateParent = (id: number) => {
    const item = items.find((i) => i.id === id);
    const parent = items.find((i) => i.id === item!.parentId);

    if (!parent) return;

    const childIds = items
      .filter((i) => i.parentId === parent.id)
      .map((i) => i.id);

    const childStates = childIds.map((childId) => getItemState(childId));
    const foundItemState = newState.find(
      (i) => i.id === parent.id,
    ) as CheckboxItemState;

    const filterByStateType = (type: CheckboxState) => {
      return childStates.filter((s) => s === type);
    };

    if (
      childStates.length === filterByStateType(CheckboxState.CHECKED).length
    ) {
      foundItemState.state = CheckboxState.CHECKED;
    } else if (
      childStates.length === filterByStateType(CheckboxState.UNCHECKED).length
    ) {
      foundItemState.state = CheckboxState.UNCHECKED;
    } else {
      foundItemState.state = CheckboxState.INDETERMINATED;
    }

    updateParent(parent.id);
  };

  const setUnchecked = (id: number) => {
    newState.find((i) => i.id === id)!.state = CheckboxState.UNCHECKED;
    items
      .filter((i) => i.parentId === id)
      .map((i) => i.id)
      .forEach((childId) => setUnchecked(childId));

    updateParent(id);
  };

  const setChecked = (id: number) => {
    newState.find((i) => i.id === id)!.state = CheckboxState.CHECKED;
    items
      .filter((i) => i.parentId === id)
      .map((i) => i.id)
      .forEach((childId) => setChecked(childId));

    updateParent(id);
  };

  const itemState = getItemState(clickedId);
  if (itemState === CheckboxState.CHECKED) {
    setUnchecked(clickedId);
  } else {
    setChecked(clickedId);
  }
  return newState;
};
