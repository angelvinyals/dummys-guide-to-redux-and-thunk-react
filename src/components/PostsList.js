import React, { Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { FetchDataFromServer } from '../actions/items';

class PostsList extends Component {
    componentDidMount() {
        console.log('PostsList- componentDidMount begins....')
        //this.props.fetchData('http://localhost:3001/categories');
    }

    render() {
        console.log('PostsList- render begins....')
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading data....</p>;
        }

        if (this.props.isLoading) {
            return <p>Loading....</p>;
        }

        return (
            <ul>
                {this.props.posts.map((post) => (
                    <li key={post.id}>
                        {post}
                    </li>
                ))}
            </ul>
        );
    }
}

ItemList.propTypes = {
    fetchData: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    hasErrored: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(FetchDataFromServer(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
