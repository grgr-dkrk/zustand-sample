import * as React from 'react';
import styled from 'styled-components';

type FooProps = {};

const Foo: React.FC<FooProps> = props => {
  return <StyledFoo></StyledFoo>;
};

const StyledFoo = styled.div``;

export default Foo;
