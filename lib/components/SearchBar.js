import React from 'react';
import debounce from 'lodash.debounce';

class SearchBar extends React.Component {
    state = {
        searchTerm: '',
    }
    handleSearch = (event) => {
        this.setState({
            searchTerm: event.target.value,
        }, () => {
            this.props.doSearch(this.state.searchTerm);
        })
    }
    render() {
        return(
            <input type="search" 
                placeholder="Enter Search here" 
                value={this.state.searchTerm}
                onChange={this.handleSearch}
            />
        );
    }
}
export default SearchBar;