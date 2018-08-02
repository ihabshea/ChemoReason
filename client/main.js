import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Cases, Reviews } from '../lib/collection/collections.js';

import './main.html';
import './view/dashboard.html';
import './view/profile.html';
import './view/case.html';
import './view/DoctorReview.html';
import './view/PatientReview.html';

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

FlowRouter.route('/DoctorReview', {
	action() {
    BlazeLayout.reset();
		BlazeLayout.render('main', { nav:'nav', main: 'DoctorReview' });
	}
});

FlowRouter.route('/PatientReview', {
	action() {
    BlazeLayout.reset();
		BlazeLayout.render('main', { nav:'nav', main: 'PatientReview' });
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

Template.profile.helpers({
  getEmail() {
    return Meteor.users.findOne({ _id: Meteor.userId }).emails[0].address;
  }
});

Template.DoctorReview.events({
	'submit #doctor-review-form': function(event) {
		// this.target refers to the current form
		// so we can invoke form-related methods.

		// prevent page redirection
		event.preventDefault();

		// check if any field is empty (by referencing them from this.target)
		if (event.target.firstName.value == '' ||
		event.target.lastName.value == '' ||
		event.target.commentField.value == '' ||
	  event.target.querySelector(':checked') == null) {
			alert('Please fill all information first');
			return;
		}

		var name = event.target.firstName.value +  ' ' + event.target.lastName.value;
		var comment = event.target.commentField.value;
		var rating;
		event.target.querySelectorAll('input[name="radio"]').forEach(function(e) {
			if (e.checked)
				rating = e.value;
		});

		Meteor.call('addReview', name, comment, rating);


		// so we can empty other fields.
		event.target.reset();
	}
});
