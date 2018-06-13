export { default } from "./Character";




class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false
    };
  }





class NavBar extends React.Component {
  render() {
    return (
      // <form>
      //   <input type="text" placeholder="Search..." />
      //   <p>
      //     <input type="checkbox" />
      //     {' '}
      //     Only show products in stock
      //   </p>
      // </form>
    );
  }
}

// class FilterableProductTable extends React.Component {
//   render() {
//     return (
//       <div>
//         <SearchBar />
//         <ProductTable products={this.props.products} />
//       </div>
//     );
//   }
// }



 
ReactDOM.render(
  <FilterableProductTable products={PRODUCTS} />,
  document.getElementById('container')
);