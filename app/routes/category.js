import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('category', params.category_id);
  },
  actions: {
    savePost(formInputs) {
      var newPost = this.store.createRecord('post', formInputs);
      var category = formInputs.category;
      category.get('posts').addObject(newPost);
      newPost.save().then(function() {
        return category.save();
      });
      console.log(formInputs.category.get('id'));
      this.transitionTo('category', category);
    }
  }
});
