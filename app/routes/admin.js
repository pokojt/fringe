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
      component.reset();
      console.log(formInputs);
    }
  }
});
