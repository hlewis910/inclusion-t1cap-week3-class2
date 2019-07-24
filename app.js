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

const app = new App({}, 'app');
app.update();
  