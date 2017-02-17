import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('embark-sparkline', 'Integration | Component | embark sparkline', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{embark-sparkline}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#embark-sparkline}}
      template block text
    {{/embark-sparkline}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
