import PropTypes from 'prop-types'
import { Post } from './Post'

export function PostFilter({ field  }) {
  return (
    <div>
      <label htmlFor={`filter-${field}`}>{field}: </label>
      <input
        name={`filter-${field}`}
        id={`filter-${field}`}
        type='text'
      />
    </div>
  )
}