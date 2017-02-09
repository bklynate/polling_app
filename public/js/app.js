class ProductList extends React.Component {
  render() {
    return (
      <div className='ui unstackable items'>
        Hello World! Live from ProductList
      </div>
    )
  }
}

ReactDOM.render(<ProductList />, document.querySelector('#content'));
