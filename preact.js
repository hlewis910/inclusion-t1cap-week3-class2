class Component {

    // our constructor takes an object literal for props and sets that to an attribute
    constructor(props, ref = 'e' + Date.now()) {
        this.state = {};
        this.props = props;
        
        //find or create a dom element to use as the mount point
        this.ref = document.getElementById(ref) || document.createElement('div');
        this.ref.id = ref;
    }

    // use object spread to allow partial updates to state. 
    // just like in react
    setState(obj){
        this.state = {...this.state, ...obj};
        this.update();
    }

    update() {
        //clean up the parent ref so objects don't persist in memory
        // using innerHTML = '' doesn't clean up memory
        while (this.ref.firstChild) {
            this.ref.removeChild(this.ref.firstChild);
        }

        // get the resulting object template from the render function
        const result = this.render();        
        
        //make the element to be mounted and set the textcontent
        const element = document.createElement(result.tag);
        element.textContent = result.body || '';

        // pass the onclick function 
        if (result.onclick) {
            element.onclick = result.onclick;
        }            

        //finally render the parent. 
        this.ref.appendChild(element);

        console.debug(this.state);
    }

    render() { return null }

}