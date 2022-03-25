import { useCallback, useState } from 'react';
import { CheckboxList } from '../checkbox-list/checkbox-list.component';
import { CheckboxItemState } from '../checkbox-list/checkbox-list.types';
import { updateItemStates } from './tree.state';
import { TreeProps } from './tree.types';

export const Tree = (props: TreeProps) => {
  const { checkboxState, checkboxItems } = props;
  const [itemStates, setItemStates] =
    useState<CheckboxItemState[]>(checkboxState);

  const getCheckboxState = useCallback(
    (id: number) => {
      return itemStates.find((i) => i.id === id)!.state;
    },
    [itemStates],
  );

  const onCheckboxClick = useCallback(
    (id) => setItemStates(updateItemStates(itemStates, checkboxItems, id)),
    [itemStates],
  );

  return (
    <CheckboxList
      items={checkboxItems}
      onClick={onCheckboxClick}
      getCheckboxState={getCheckboxState}
    />
  );
};
