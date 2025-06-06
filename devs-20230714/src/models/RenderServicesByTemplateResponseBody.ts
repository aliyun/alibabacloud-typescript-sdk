// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ServiceConfig } from "./ServiceConfig";
import { Variable } from "./Variable";


export class RenderServicesByTemplateResponseBody extends $dara.Model {
  changedServiceNames?: { [key: string]: string };
  services?: { [key: string]: ServiceConfig };
  variables?: { [key: string]: Variable };
  static names(): { [key: string]: string } {
    return {
      changedServiceNames: 'changedServiceNames',
      services: 'services',
      variables: 'variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changedServiceNames: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      services: { 'type': 'map', 'keyType': 'string', 'valueType': ServiceConfig },
      variables: { 'type': 'map', 'keyType': 'string', 'valueType': Variable },
    };
  }

  validate() {
    if(this.changedServiceNames) {
      $dara.Model.validateMap(this.changedServiceNames);
    }
    if(this.services) {
      $dara.Model.validateMap(this.services);
    }
    if(this.variables) {
      $dara.Model.validateMap(this.variables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

