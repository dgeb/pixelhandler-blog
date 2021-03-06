import Ember from 'ember';
import ResetScroll from '../../mixins/reset-scroll';

export default Ember.Route.extend(ResetScroll, {
  model: function (/*params*/) {
    var post = this.store.createRecord('post');
    post.set('author', { name: 'pixelhandler' });
    return post;
  },

  setupController: function (controller, model) {
    this._super(controller, model);
    controller.set('dateInput', moment().format('L'));
  },

  actions: {
    save: function () {
      this.modelFor(this.get('routeName')).save().then(function() {
        this.transitionTo('admin');
      }.bind(this));
    },

    cancel: function () {
      this.modelFor(this.get('routeName')).deleteRecord();
      this.transitionTo('admin.index');
    }
  }
});
