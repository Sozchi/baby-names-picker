import React from "react";

const SearchBar = (props) =>
{
    // const name = props.name;
    // const filterNames = name.filter( name =>
    // {
    //     return name.name.toUpperCase()
    // })
    // const [filterVal, setFilterVal] = useState( "" )
    // const searchBarInput = (event) =>
    // {
    //     // if()
    //     setFilterVal(event.target.value)
    // }
    return (
        <form>
            <input
                type="text"
                placeholder='Search for names...'
                // value={filterVal}
                // onChange={filterNames}
            />
        </form>
    )
}


export default SearchBar;

// class List extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             filtered: []
//         }
//     }
// }

// componentDidMount() {
//   this.setState({
//     filtered: this.props.items
//   });
// }

// componentWillReceiveProps(nextProps) {
//   this.setState({
//     filtered: nextProps.items
//   });
// }


// Level 2 challenge
// Add a search bar.

// When someone types into it, your app should update the displayed list of baby names to 
// only show matches.

// Matches should be case-insensitive.

// When the search bar is clear, all names should be shown.

