// CodeMirror
import 'codemirror/mode/xml/xml';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/base16-light.css';

import React from 'react';
import { setComponentsNames, globalizeComponents } from './utils/utils';
import StyleGuide from 'components/StyleGuide/StyleGuide';

import './styles.css';

global.React = React;

if (module.hot) {
	module.hot.accept();
}

// Load styleguide
let { title, components } = require('styleguide!');

components = setComponentsNames(components);
globalizeComponents(components);

React.render(<StyleGuide title={title} components={components}/>, document.getElementById('app'));