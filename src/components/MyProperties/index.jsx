import React from 'react';
import { useQuery } from 'react-query';
import Card from '../Card';
import MyCard from '../MyCard';
import { Container, Wrapper } from './styles';

const { REACT_APP_BASE_URL: url } = process.env;

export const MyProperties = () => {
  
  const {data} = useQuery(
    '',
    () =>
      fetch(`${url}/v1/houses/me`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }).then((res) => res.json()),
    { onSuccess: (res) => console.log(res, 'ress') }
  );
  return <Wrapper>
  <Container>
    <div className='title'>
    MyProperties
    </div>
      {/* {data?.data.map((value) => <Card key={value.id} info={value} />) */}
      <MyCard/>
  </Container>
  </Wrapper>
};
export default MyProperties;
