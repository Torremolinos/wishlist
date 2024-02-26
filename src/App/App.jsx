import React from "react";
import "./App.css";
import WishInput from "./WishInput";
import WishList from "./WishList";
import setWishes from "./WishList";
const wishes = [
    { text: 'Travel to the moon', done : false },
    { text: 'Pay the gym', done : true },
    { text: 'Go to the gym', done : false }
    ];

    // const App = () => {
    //     return (
    //         <div className="whis-input">
    //             <h1>My Whislist from REACT</h1>
    //             <ul>
    //                 {wishes.map((wish, index) => (
    //                     <li key={index} className={wish.done ? 'done' : ''}>
    //                         {wish.text}
    //                     </li>
    //                 ))}
    //             </ul>
    //         </div>
    //     );
    // // }

    // const App = () => {
    //     return (
    //         <div className="whis-input">
    //             <h1>My Whislist from REACT</h1>
    //             <fieldset className="wish-input">
    //                 <legend className="wish-input_label">Add a new wish</legend>
                    
    //                 <input type="text" id="wish" name="wish" />
    //                 <button>Add</button>
    //             </fieldset>
    //         </div>
    //     );
    // }

    const App = () => {
        return (
            <div className="app">
                <h1>My Whislist from REACT</h1>
                <WishInput onNewWish={ wish => setWishes([wish,...wishes])} />
                <WishList wishes={wishes} onWishesChange={setWishes}/>
                <WishList wishes={wishes} />
                
                  <button className="wish-clear" type='button'>Archive Done</button>
            </div>
        );
    }

    export default App;

