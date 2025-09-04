import PropTypes from 'prop-types';

export function PostSorting({ fields = [] }) {
  return (
    <div>
      <label htmlFor="sortBy">Sort By</label>
      <select name="sortBy" id="sortBy" >
        {fields.map((field) => (
          <option key={field} value={field}>
            {field}
          </option>
        ))}
      </select>
      <label htmlFor="sortOrder">Sort Order</label>
      <select name="order" id="order">
        <option value="ascending">Ascending</option>
        <option value="descending">Descending</option>
      </select>
    </div>
  )
}

PostSorting.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.string).isRequired
}