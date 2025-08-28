import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from 'rarwe/config/environment';
import { importSync, isDevelopingApp, macroCondition } from '@embroider/macros';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { faAngleDown, faAngleUp, faSearch } from '@fortawesome/free-solid-svg-icons';

import './font-awesome';

library.add(faStarSolid, faStarRegular, faAngleDown, faAngleUp, faSearch);

if (macroCondition(isDevelopingApp())) {
  importSync('./deprecation-workflow');
}

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;
}

loadInitializers(App, config.modulePrefix);
