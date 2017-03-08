import React,{Component} from 'react';
import { reduxForm } from 'redux-form';

import { createPost } from '../actions/index';

class PostsNew extends Component {

    render() {
        const { fields: { title, categories, content}, handleSubmit } = this.props;
        // const handleSubmit = this.props.handleSubmit
        // const title = this.props.fields.title;

        return (
          <form onSubmit={handleSubmit(this.props.createPost)}>
            <h3> Create A New Post </h3>
            <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`} >
              <label>Title</label>
              <input type="text" className="form-control" {...title} />
              <div className="test-help" >
                {title.touched ? title.error : ''}
              </div>
            </div>
            <div className="form-group" >
              <label>Categories</label>
              <input type="text" className="form-control" {...categories} />
                <div className="test-help" >
                  {categories.touched ? categories.error : ''}
                </div>
            </div>
            <div className="form-group" >
              <label>Content</label>
              <textarea className="form-control" {...content} />
                <div className="test-help" >
                  {content.touched ? content.error : ''}
                </div>
            </div>
            <button type="submit" className="btn btn-primary" >Submit</button>
          </form>
        );
    }
}

//connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
//reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps


//add validate to form
function validate(values) {
  const errors = {};

  if(!values.title){
    errors.title = 'Enter a title';
  }
  if(!values.categories){
    errors.categories = 'Enter a categories';
  }
  if(!values.content){
    errors.content = 'Enter a content';
  }

  return errors;
}


export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title','categories','content'],
  validate
}, null, { createPost })(PostsNew);
