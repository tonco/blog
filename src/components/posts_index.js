import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends Component {
    componentWillMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        return this.props.posts.map((post) => {
            return (
                <Link to={"posts/"+ post.id}>
                    <li className="list-group-item" key={post.id}>
                        <span className="pull-xs-right">{post.categories}</span>
                        <strong>{post.title}</strong>
                    </li>
                </Link>
            );
        });
    }

    render() {
        return(
          <div>
              <div className="text-xs-right">
                  <Link to="/posts/new" className="btn btn-primary">
                      Add a post
                  </Link>
              </div>
              <h3>Posts</h3>
              <ul className="list-group">
                  {this.renderPosts()}
              </ul>
          </div>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchPosts }, dispatch);
}
function mapStateToProps(state){
    return { posts: state.posts.all};
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);