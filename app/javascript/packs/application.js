// app/javascript/packs/application.js

import 'bootstrap/dist/css/bootstrap.min.css';
import '@popperjs/core';
import 'bootstrap';
import '../toggle_password';  // Your custom script

import Rails from "@rails/ujs";
import Turbolinks from "turbolinks";
import * as ActiveStorage from "@rails/activestorage";
import "channels";

Rails.start();
Turbolinks.start();
ActiveStorage.start();
