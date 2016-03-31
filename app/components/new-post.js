import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggleDetail() {
      this.toggleProperty('showForm');
    },
    savePost() {
      var formInputs = {
        title: this.get('title') ? this.get('title'): "",
        author: this.get('author') ? this.get('author'): "",
        category: this.get('category'),
        image: this.get('image') ? this.get('image'): "",
        summary: this.get('summary') ? this.get('summary'): "",
        content: this.get('content') ? this.get('content'): "",
        date: this.get('date') ? this.get('date'): "",
    };
      this.toggleProperty('showForm');
      this.set('title', " ");
      this.set('author', " ");
      this.set('image', " ");
      this.set('summary', " ");
      this.set('content', " ");
      this.set('date', " ");
      this.sendAction('savePost', formInputs);
    }
  }
});
