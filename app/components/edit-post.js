import Ember from 'ember';

export default Ember.Component.extend({
  editFormShow: false,
  actions: {
    toggleEdit() {
      this.toggleProperty('editFormShow');
    },
    editPost(post) {
      var editFormInputs = {
        title: this.get('title'),
        author: this.get('author'),
        category: this.get('category'),
        image: this.get('image'),
        summary: this.get('summary'),
        content: this.get('content'),
        date: this.get('date'),
    };
      this.toggleProperty('editFormShow');
      this.sendAction('editPost', post, editFormInputs);
    }
  }
});
