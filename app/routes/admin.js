import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    // return this.store.findAll('post');
    return this.store.findAll('category');
  },
  actions: {
    saveCategory(formInputs) {
      var newCategory = this.store.createRecord('category', formInputs);
      newCategory.save();
      this.transitionTo('admin');
    }
  }
});
