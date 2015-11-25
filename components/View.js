import React from 'react';
import Flex from 'react-flexbox';

export default function View ({ children, row, column, ...props}) {
  return <Flex row={row} column={column} style={{...props}}>{children}</Flex>
}
