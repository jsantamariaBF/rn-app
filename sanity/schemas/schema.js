import createSchema from 'part:@sanity/base/schema-creator'

import schemaTypes from 'all:part:@sanity/base/schema-type'

import category from './category'
import featured from './featured'
import restaurant from './restaurant'
import author from './dish'

export default createSchema({
  name: 'default',

  types: schemaTypes.concat([
    restaurant,
    featured,
    author,
    category,
  ]),
})
