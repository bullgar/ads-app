import React, { Component } from 'react';
import './App.css';

class Ad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
    .then(response => response.json())
    .then(json => this.setState({ posts: json }))
  }

  render() {
    const { posts } = this.state;
    return (
      <div class="container">
        <div class="row text-center">
          <h1 class="display-1">Blog posts</h1>
        
        {posts.map((post) => (
          <div class="col-4">
            <div class="card" key={post.id}>
              <div class="card-header">
                #{post.id} {post.title}
              </div>
              <div class="card-body">
                <p class="card-text">{post.body}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    );
  }
}
export default Ad;