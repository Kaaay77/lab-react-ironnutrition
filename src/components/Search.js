import { Divider, Input } from 'antd';

// Iteration 5
function Search({input, searchFood}) {

    
    
  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={input} type="text" onChange={(e) => searchFood(e)} />
    </>
  );
}

export default Search;
