import React, { useLayoutEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);
  const [width, setWidth] = useState(0);

  const ref = useRef(null);

  useLayoutEffect(() => {
    if (ref?.current) {
      setWidth(ref.current.offsetWidth);
    }
  }, [displayedValue]);

  return (
    <div>
      <CustomSelect ref={ref}>
        <CurrentValue>{displayedValue}</CurrentValue>
        <Icon id="chevron-down" />
      </CustomSelect>
      <Wrapper
        style={{ '--width': width + 'px' }}
        value={value}
        onChange={onChange}
        aria-label={label}
      >
        {children}
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.select`
  opacity: 0;
  height: 43px;
  position: absolute;
  width: var(--width);
`;

const CustomSelect = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  background-color: ${COLORS.transparentGray15};
  height: 43px;
  border-radius: 8px;
  padding: 12px 16px;
`;

const CurrentValue = styled.p`
  margin-right: 24px;
  color: ${COLORS.gray700};
`;

export default Select;
