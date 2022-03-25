import React from 'react';
import { CheckboxListProps, CheckboxListItem } from './checkbox-list.types';
import * as S from './checkbox-list.styles';
import { Checkbox } from '../checkbox/checkbox.component';
import { CheckboxState } from '../checkbox/checkbox.types';

export const CheckboxList = ({
  items,
  getCheckboxState,
  idsToRender = [],
  indentLevel = 0,
  onClick = () => {},
}: CheckboxListProps) => {
  if (!idsToRender.length) {
    idsToRender = items.filter((i) => !i.parentId).map((i) => i.id);
  }

  const getChildNodes = (parentId: number) => {
    const nodeItems = items.filter((i) => i.parentId === parentId);
    if (!nodeItems.length) return null;
    return (
      <CheckboxList
        items={items}
        idsToRender={nodeItems.map((i) => i.id)}
        indentLevel={indentLevel + 1}
        onClick={onClick}
        getCheckboxState={getCheckboxState}
      />
    );
  };

  return (
    <S.CheckboxList style={{ paddingLeft: indentLevel * 15 }}>
      {idsToRender.map((id) => {
        const item = items.find((i) => i.id === id) as CheckboxListItem;
        const checkboxState = getCheckboxState(id);
        const isChecked = checkboxState === CheckboxState.CHECKED;
        const isIndeterminated = checkboxState === CheckboxState.INDETERMINATED;
        const classNames = [];

        if (isChecked) {
          classNames.push('checked');
        }

        if (isIndeterminated) {
          classNames.push('indeterminated');
        }

        return (
          <React.Fragment key={item.id}>
            <S.CheckboxListItem onClick={() => onClick(item.id)}>
              <Checkbox
                isChecked={checkboxState === CheckboxState.CHECKED}
                isIndeterminated={
                  checkboxState === CheckboxState.INDETERMINATED
                }
              />
              <S.CheckboxListItemText className={classNames.join(' ')}>
                {item.name}
              </S.CheckboxListItemText>
            </S.CheckboxListItem>
            {getChildNodes(item.id)}
          </React.Fragment>
        );
      })}
    </S.CheckboxList>
  );
};
