import React from 'react';
import axios from 'axios';

import ArticleList from './ArticleList';
import DataApi from 'state_api';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: this.props.initialData.articles ,
            authors: this.props.initialData.authors,
        };
    }
    async componentDidMount(){
        let resp = await axios.get('/data');
        let api = new DataApi(resp.data);
        this.setState(() => ({
            articles: api.getArticles(),
            authors: api.getAuthors()
        }));
    }
    articleActions = {
        lookupAuthor: authorId => this.state.authors[authorId],
    };
    render() {
        return (
            <ArticleList
                articles={this.state.articles}
                articleActions={this.articleActions}
            />
        );
    } 
}
export default App;