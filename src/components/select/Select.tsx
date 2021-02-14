import React from 'react';
import { Box } from '../Box/Box';
import { Typography } from '../typography/Typography';

export const Select: React.FC = ({
  ...props
}) => {
  return (
     <Box width={250} height={50}>
         <Typography content={'Are you sure?'}></Typography>
     </Box>
  );
};
