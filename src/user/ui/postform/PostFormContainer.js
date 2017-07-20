import { connect } from  'react-redux'
import PostForm from './PostForm'
import { createPost } from './PostFormActions'

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCreatePostFormSubmit : (title) => {
      event.preventDefault();

      dispatch(createPost(title))
    }
  }
}

const PostFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm)

export default PostFormContainer
