import Ember from 'ember';

export function preventDefault() {
  return function(ev) {
    ev.preventDefault();
  };
}

export default Ember.Helper.helper(preventDefault);
