import React from 'react';
import PropTypes from 'prop-types';

import ArticleList from './ArticleList';
import SearchBar from './SearchBar';

class App extends React.Component {
    static childContextTypes = {
        store: PropTypes.object
    }
    getChildContext() {
        return {
            store: this.props.store
        };
    }
    state = this.props.store.getState();

    render() {
        let { articles, searchTerm} = this.state;
        if( searchTerm ){
            articles = Object.values(articles).filter( (value) => {
                return value.title.match(searchTerm)
                    || value.body.match(searchTerm);
            })
        }
        return (
            <div>
                <SearchBar doSearch={this.props.store.setSearchTerm} />
                <ArticleList
                    articles={articles}
                />
            </div>
        );
    } 
}
export default App;
