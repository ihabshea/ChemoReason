import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Cases } from '../lib/collection/collections.js';

import './main.html';
import './view/dashboard.html';
import './view/profile.html';
import './view/case.html';

FlowRouter.route('/', {
	action() {
    BlazeLayout.reset();
		BlazeLayout.render('main', { nav:'nav', main: 'dashboard' });
	}
});

FlowRouter.route('/profile', {
	action() {
    BlazeLayout.reset();
		BlazeLayout.render('main', { nav:'nav', main: 'profile' });
	}
});

FlowRouter.route('/case', {
	action() {
    BlazeLayout.reset();
		BlazeLayout.render('main', { nav:'nav', main: 'case' });
	}
});

Template.nav.helpers({
  activeLink(link) {
    return (FlowRouter._current.path === link) ? "active" : "";
  }
});

Template.case.events({
  'submit #add-case': function(e) {
    e.preventDefault();
    var caseName = e.target.name.value;
    Meteor.call('insertCase', caseName);
    e.target.reset();
  },

  'click .case-remove': function(e) {
    Meteor.call('removeCase', this._id);
  }
});

Template.case.helpers({
  cases() {
    return Cases.find().fetch().length > 0;
  },

  caseList() {
    return Cases.find().fetch();
  }
});
