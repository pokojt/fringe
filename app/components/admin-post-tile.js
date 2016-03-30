import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(post){
      if (confirm('Are you sure you want to delete this post?')) {
        this.sendAction('destroyPost', post);
      }
    },
    editPost(post, editFormInputs){
      this.sendAction('editPost', post, editFormInputs);
    }
  }
});
