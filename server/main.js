import { Meteor } from 'meteor/meteor';
import { Cases } from '../lib/collection/collections.js';

Meteor.startup(() => {
});

if (Meteor.isServer) {
  Meteor.methods({
    insertCase: function(name) {
      Cases.insert({
        caseName: name
      });
    },

    removeCase: function(id) {
      Cases.remove(id);
    }
  });
}
