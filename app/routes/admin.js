import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('post');
  },
  actions: {
    destroyPost(post){
      post.destroyRecord();
      this.transitionTo('admin');
    },
    savePost(formInputs) {
      var newPost = this.store.createRecord('post', formInputs);
      newPost.save();
      this.transitionTo('admin');
    },
    editPost(post, editFormInputs){
      Object.keys(editFormInputs).forEach(function(key) {
        if(editFormInputs[key]!==undefined) {
          post.set(key, editFormInputs[key] );
        }
      });
      post.save();
      this.transitionTo('admin');
    },
  }
});
