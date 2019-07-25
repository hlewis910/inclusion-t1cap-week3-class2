class Button extends Component {
   constructor(props, ref) {
    super(props, ref)
    this.state = {
        name: props.name || "Machu MiniGoldenDoodle",
        counter: 0
    }
   }
}

handleOnClick() {
    alert(`AYEEEEEE`);
    this.setState({
        counter: this.state.counter +1
    })
}

// class Seperator extends Component {

//     render() {

//     }
// }

class App extends Component {

    constructor(props, ref) {
        super(props, ref);
    }

    handleOnClick() {
        console.log('test');
        this.update();
    }

    render() {
        console.debug('in app render');
        return {
            tag: 'div',
            body: 'Test',
            onclick: this.handleOnClick.bind(this)
            //onclick: console.log('test')
            children: [

            ]
        };
    }
}

const app = new App({}, 'app');
app.update();
