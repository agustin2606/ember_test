import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCoffee,
  faMagic,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';
import * as freeRegularSvgIcons from '@fortawesome/free-regular-svg-icons';
import * as freeBrandSvgIcons from '@fortawesome/free-brands-svg-icons';

library.add(
  faCoffee,
  faMagic,
  faTrashAlt,
);

library.add(freeBrandSvgIcons['fab']); // option to import all icons of fab
library.add(freeRegularSvgIcons['far']); // option to import all icons of far