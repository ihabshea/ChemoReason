import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import './view/dashboard.html';
import './view/profile.html';
import './view/case.html';

FlowRouter.route('/', {
	action() {
		BlazeLayout.render('main', { main: 'dashboard' });
	}
});

FlowRouter.route('/profile', {
	action() {
		BlazeLayout.render('main', { main: 'profile' });
	}
});

FlowRouter.route('/case', {
	action() {
		BlazeLayout.render('main', { main: 'case' });
	}
});
