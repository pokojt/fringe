import DS from 'ember-data';

export default DS.Model.extend({
  date: DS.attr(),
  title: DS.attr(),
  image: DS.attr(),
  author: DS.attr(),
  content: DS.attr(),
  category: DS.belongsTo('category', { async: true }),
  summary: DS.attr()
});
