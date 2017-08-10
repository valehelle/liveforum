import * as RecipeActions from './recipes'
import * as FirebaseActions from './firebase'
export const ActionCreators = Object.assign({},
    RecipeActions,
    FirebaseActions,
)