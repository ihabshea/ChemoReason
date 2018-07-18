import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

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
