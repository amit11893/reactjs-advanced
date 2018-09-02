import React from 'react';
import ArticleList from '../ArticleList';
import Article from '../Article';
import Adapter from 'enzyme-adapter-react-16';

import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

describe('ArticleList', ()=>{
    const testProps = {
        articles: {
            a: { id: 'a'},
            b: { id: 'b'},
        },
    };
    Article.propTypes ={}
    
    it('renders correctly', ()=> {
        const wrapper = shallow(
            <ArticleList {...testProps} />);
        console.log(wrapper.getElement());
    });
});
