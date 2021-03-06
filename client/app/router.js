import Ember from 'ember';
import GoogleAnalyticsMixin from './mixins/google-analytics';

var Router = Ember.Router.extend({
  location: PixelhandlerBlogENV.locationType
});

Ember.Router.reopen(GoogleAnalyticsMixin);

Router.map(function () {
  this.route('about');
  this.resource('posts', function () {
    this.resource('post', { path: ':post_id' });
  });
  this.resource('admin', function () {
    this.route('create');
    this.route('edit', { path: ':edit_id' });
  });
  this.route('not-found', { path: '/*path' });
});

export default Router;
