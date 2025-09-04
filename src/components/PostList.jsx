import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Post } from './Post.jsx';


PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      author: PropTypes.string,
    })
  ).isRequired,
};

export function PostList({ posts = [] }) {
  return (
    <div>
      {posts.map((post, idx) => (
        <Fragment key={post._id || idx}>
          <Post {...post} />
          <hr />
        </Fragment>
      ))}
    </div>
  );
}
