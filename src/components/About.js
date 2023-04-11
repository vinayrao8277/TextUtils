import React from "react";

export default function About(props) {
//   const [myStyle, setMyStyle] = useState({
//     color: "black",
//     backgroundColor: "white",
//   });

let myStyle = {
    color: props.mode === 'dark' ? 'white' : '#042743',
    backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white'
    // border: '2px solid',
    // borderColor: props.mode === 'dark' ? 'white' : '#042743',
}

//   const [btntext, setBtnText] = useState("Enable Dark Mode");

//   const toggleStyle = () => {
//     if (myStyle.color === "black") {
//       setMyStyle({
//         color: "white",
//         backgroundColor: "black",
//         border: "1px solid white",
//       });
//       setBtnText("Enable Dark Mode");
//     } else {
//       setMyStyle({
//         color: "black",
//         backgroundColor: "white",
//       });
//       setBtnText("Enable Light Mode");
//     }
//   };
  return (
    <div className="container" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
      <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Analyse Your Text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            style={myStyle}
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Textutils is a collection of text manipulation tools to help you
              manipulate and analyze text data in a variety of ways.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free To Use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            style={myStyle}
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Welcome to TextUtils, your go-to resource for all your text
              manipulation needs! Our website provides a collection of free,
              easy-to-use tools that can help you manipulate and analyze text
              data in a variety of ways. Whether you need to convert text to
              different cases, remove duplicates, sort text lines, or perform
              any other text-related tasks, our tools have got you covered. Our
              user-friendly interface and simple tools make it easy for anyone
              to manipulate text, no matter their level of experience.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            style={myStyle}
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Welcome to TextUtils, your one-stop-shop for all your text
              manipulation needs! Our website offers a collection of free,
              easy-to-use tools that work seamlessly across all major web
              browsers, including Chrome, Firefox, Safari, and Edge. Whether you
              need to convert text to different cases, remove duplicates, sort
              text lines, or perform any other text-related tasks, our tools
              have got you covered.
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container my-3">
<button className="btn btn-primary" onClick={toggleStyle}>{btntext}</button>
    
</div> */}
    </div>
  );
}
