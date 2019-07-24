class NameButton extends Component {

    constructor(props, ref) {
        super(props, ref);
        
        // State! 
        this.state = {
            name: props.name || "Bruce Wayne", 
            counter: 0
        }
    }
  
    handleOnClick() {
        alert(`Name: ${this.state.name}, Clicked: ${this.state.counter + 1} times. 😎`);
        this.setState({
            counter: this.state.counter+1
        });
    }
  
    //almost react like syntax. We return an object literal instead of JSX
    render() {
        return {
            tag: 'button',
            body: 'Clicked ' + this.state.counter + ' times ✔',
            onclick: this.say.bind(this)
        };
    }
}
  


class App extends Component {

    constructor(props, ref) {
        super(props, ref);
    }

    handleOnClick() {
        console.log('test');
    }
  
    render() {
        return {
            tag: 'div',
            body: 'Test',
            // onclick: this.handleOnClick.bind(this)
            onclick: console.log('test')
        };
    }
}

// const app = new App({}, 'app');
// app.update();
  

const button = new NameButton({}, 'app');
button.update();