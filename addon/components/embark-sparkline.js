import Ember from 'ember';
import layout from '../templates/components/embark-sparkline';

const { Component, computed } = Ember;

export default Component.extend({
  layout,
  tagName: 'span',
  classNames: ['sparkline', 'inline'],
  attributeBindings: [
    'jp:data-ui-jp',
    'uiOptions:data-ui-options'
  ],
  didInsertElement() {
    this._super(...arguments);
    this.$().sparkline();
  },
  uiOptions: computed('data', 'options', function() {
    let vals = this.get('data')
      .split(',')
      .map((x) => parseInt(x, 10));
    let opts = this.get('options');
    return `${JSON.stringify(vals)}, ${JSON.stringify(opts)}`;
  }),
  jp: 'sparkline'
});
