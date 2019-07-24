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
            onclick: this.handleOnClick.bind(this)
        };
    }
}

// we can just create a br tag without any exta stuff too. 
class Separator extends Component {
    render() {
        return {
            tag: 'br',
            body: '',
        }
    }
}

class App extends Component {

    constructor(props, ref) {
        super(props, ref);
    }
  
    render() {
        return {
            tag: 'div',
            body: 'These buttons are both individual components that contain their own state.',
            children: [
                new Separator({}),
                new NameButton({}),
                new Separator({}),
                new NameButton({
                    name: 'Clark Kent'
                })
            ]
        };
    }
}

const app = new App({}, 'app');
app.update();
  
// const button = new NameButton({}, 'app');
// button.update();