
/**
 * <div id = "parent">
 *      <div id = "child">
 *          <h1>I'm an h1 tag</h1>
 *          <h2>I'm an h2 tag</h2>
 *      </div>
 * </div>
 * 
 */

// If you want to make siblings of the HTMl element than the 3rd argument in the createElement is an array 
//Either give single or make an array and give the siblings 


const parent = React.createElement(
    "div" ,
    {id : "parent" },[ 
        React.createElement("div" , {id : "child" },[
            React.createElement("h1" , {} , "I 'm an h1 tag "),React.createElement("h2",{},"I'm an h2 tag")]) ,

        React.createElement("div" , {id : "child2" },[
            React.createElement("h1" , {} , "I 'm an h1 tag "),React.createElement("h2",{},"I'm an h2 tag")])
    ]
);

//This parent is also an Javascript object 


// React offers simple and sweet api methods 
const heading = React.createElement("h1",
    {id : "heading"},
    "Hello World from React !!"
); // return an object 
//This is an javascript object
console.log("Heading " ,heading); 
//We have to put the h1 into our DOM into our browser than we have to use DOM 
const root = ReactDOM.createRoot(document.getElementById("root"));

//render method responsible to take this object and convert it into heading tag and put into the DOM .
root.render(parent);



