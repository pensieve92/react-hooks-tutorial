import React, { useState } from 'react';
import Counter from  './Counter';
import Info from './Info';
import ContextSample from './ContextSample';





const App = () => {
  // const [visible, setVisible] = useState(false);
  // return <Counter />;
  return <ContextSample />
  // (
  //   <div>
  //     <button
  //       onClick={() => {
  //         setVisible(!visible);
  //       }}
  //     >
  //       {visible ? '숨기기': '보이기'}
  //     </button>
  //     <hr />
  //     {visible && <Info/>}
  //   </div>    
  // )
}

export default App;
