import person from './lect_0014_export_pers.js'

import person_doesnt_matter_what_i_call_it_bc_it_was_default from './lect_0014_export_pers.js'

import { clean } from './lect_0014_export_other.js'

import { baseData } from './lect_0014_export_other.js'

import * as bundled from './lect_0014_export_other.js'

console.log('my name is ' + person.name + '.  call me at ' + person.phoneNumber + '.');

clean();

console.log('base data: ' + baseData);

console.log('my name is (other import) ' + person_doesnt_matter_what_i_call_it_bc_it_was_default.name + '.  call me at ' + person_doesnt_matter_what_i_call_it_bc_it_was_default.phoneNumber + '.');

bundled.clean();