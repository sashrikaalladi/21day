import {useEffect, useState} from "react";
import './App.css';
import axios from "axios";
function App() {
  // const [myData, setMyData]=useState([]);
  //  useEffect(() => {
  //    axios.get("https://jsonplaceholder.typicode.com/posts")
  //    .then((res) =>
  //    setMyData(res.data)
  //    );
  //  },[]);
const [products,setproducts]=React.useState


return(
<>
<div className="black">
<h1>axios</h1>
<div className="grid">
{myData.map((post) => {
  const {id,title,body}=post;
  return <div className="card" key={id}>
    <h2>{title}</h2>
    <p>{body}</p>
  </div>
    })
}
</div>
</div>
</>
);
}

export default App;
