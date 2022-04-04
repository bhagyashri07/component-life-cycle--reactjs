const mounting = () => {
  return (
    <div>
      <h1 style={{ color: "green" ,fontSize:30}}>Mounting Phase:-</h1>
      <div >

        <div >
          <p>React has four built-in methods that gets called, in this order, when mounting a component:</p>
          <div>1) constructor()<br />
            2) getDerivedStateFromProps()<br />
            3) render()<br />
            4) componentDidMount()</div><br />

          <h5>1) constructor()-</h5>
          <p>The constructor() method is called before anything else, when the component is initiated, and it is the natural place to set up the initial state and other initial values.
            The constructor() method is called with the props, as arguments, and you should always start by calling the super(props) before anything else, this will initiate the parent's constructor method and allows the component to inherit methods from its parent (React.Component).
          </p>
          <h5> 2) getDerivedStateFromProps()-</h5>
          <p>
            The getDerivedStateFromProps() method is called right before rendering the element(s) in the DOM. This is the natural place to set the state object based on the initial props.
            It takes state as an argument, and returns an object with changes to the state.
          </p>
          <h5 > 3) render()-</h5>
          <p>
            The render() method is required, and is the method that actually outputs the HTML to the DOM.
          </p>
          <h5>4) componentDidMount()- </h5>
          <p>
            The componentDidMount() method is called after the component is rendered.
            This is where you run statements that requires that the component is already placed in the DOM.
          </p>
        </div>

      </div>
    </div>
  );
};

export default mounting;