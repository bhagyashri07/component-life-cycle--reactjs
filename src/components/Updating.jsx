const Updating = () => {
  return (
    <div>
      <h1 style={{ color: "green",fontSize:30 }}>Updating Phase:-</h1>
      <div >
        <p >React has five built-in methods that gets called, in this order, when a component is updated:</p>
        <div>
          1) getDerivedStateFromProps()<br />
          2) shouldComponentUpdate()<br />
          3) render()<br />
          4) getSnapshotBeforeUpdate()<br />
          5) componentDidUpdate()<br />
        </div>
        <br />
        <p>
          <h5> 1) getDerivedStateFromProps()-</h5>
          Also at updates the getDerivedStateFromProps method is called. This is the first method that is called when a component gets updated.This is still the natural place to set the state object based on the initial props.
        </p>
        <h5> 2) shouldComponentUpdate()-</h5>
        <p>
          In the shouldComponentUpdate() method you can return a Boolean value that specifies whether React should continue with the rendering or not.The default value is true.

        </p>
        <h5> 3) render()-</h5>
        <p>
          The render() method is of course called when a component gets updated, it has to re-render the HTML to the DOM, with the new changes.

        </p>
        <h5>4) getSnapshotBeforeUpdate()-</h5>
        <p>
          In the getSnapshotBeforeUpdate() method you have access to the props and state before the update, meaning that even after the update, you can check what the values were before the update.
          If the getSnapshotBeforeUpdate() method is present, you should also include the componentDidUpdate() method, otherwise you will get an error.
        </p>
        <h5>5) componentDidUpdate()-</h5>
        <p>
          The componentDidUpdate method is called after the component is updated in the DOM.
        </p>
      </div>
    </div>
  );
};

export default Updating;