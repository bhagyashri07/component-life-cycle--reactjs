const Unmounting = () => {
  return (
    <div>
      <h1 style={{ color: "green",fontSize:30 }} >Unmounting Phase:-</h1>
      <div >
        The next phase in the lifecycle is when a component is removed from the DOM, or unmounting as React likes to call it.

        React has only one built-in method that gets called when a component is unmounted:
        <br />
         componentWillUnmount()
        <br />
        <br/>

        <h5> 1) componentWillUnmount()-</h5>
        <p>
          The componentWillUnmount method is called when the component is about to be removed from the DOM.
        </p>
      </div>
    </div>
  );
};

export default Unmounting;