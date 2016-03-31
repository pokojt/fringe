import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    // return this.store.findAll('post');
    return this.store.findAll('category');
  },
  actions: {
    destroyPost(post){
      post.destroyRecord();
      this.transitionTo('admin');
    },
    saveCategory(formInputs) {
      var newCategory = this.store.createRecord('category', formInputs);
      newCategory.save();
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
