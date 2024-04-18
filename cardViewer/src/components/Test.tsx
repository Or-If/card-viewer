import React from 'react'

interface Props {
  testPass: string;
  testUpdatePass: (testItem: string) => void; // I feel like I should be able to do this
}

function Test(props: Props) {
  return (
  <>
    <div>{props.testPass}</div>
    <button onChange={() => props.testUpdatePass("wowo")}></button>
  </>
    
  )
}

export default Test