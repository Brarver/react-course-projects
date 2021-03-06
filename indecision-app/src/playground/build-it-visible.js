console.log('App.js is running!')

class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }

    handleToggleVisibility() {
        this.setState((prevState)=> {
            return {
                visibility: !prevState.visibility
            };
        });
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visibility ? "hide details" : "show details"}
                </button>
                {this.state.visibility && (
                    <div>
                        <p>Hey. These are some details you can now see!</p>
                    </div>
                )}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));


// const app = {
//     title: 'Visibility Toggle',
//     details: 'These are details'
// }

// let options = false
// console.log('t ' + options)

// const changeDetails = () => {
//     if (options === false) {
//         options = true
//         console.log('changed to true')
//     } else {
//         options = false
//         console.log('changed to false')
//     }
//     render()
// }

// const appRoot = document.getElementById('app')

// const render = () => {

//     const jsx = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleVisibility}>
//                 {visibility ? "hide details" : "show details"}
//             </button>
//             {visibility && (
//                 <div>
//                     <p>Hey. These are some details you can now see!</p>
//                 </div>
//             )}
//         </div>
//     );

//     ReactDOM.render(template, appRoot);
// };

// render()