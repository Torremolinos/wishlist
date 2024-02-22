import React from "react";
import "./App.css";

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
            <div className="whis-input">
                <h1>My Whislist from REACT</h1>
                <fieldset className="wish-input">
                    <legend className="wish-input_label">Add a new wish</legend>
                    <input className="wish-input_field" placeholder="Enter your wish here" />
                </fieldset>
                  <ul className="wish-list">
                    {wishes.map(({text, done}, i) => (
                        <li key={text} className={`wish-list__item ${done} ? 'wish-list__item--done': ''`}>{text}</li>

                    ))}
                  </ul>
            </div>
        );
    }

    export default App;

