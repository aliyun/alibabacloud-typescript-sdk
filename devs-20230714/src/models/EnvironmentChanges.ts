// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnvironmentChanges extends $dara.Model {
  services?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      services: 'services',
    };
  }

  static types(): { [key: string]: any } {
    return {
      services: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.services) {
      $dara.Model.validateMap(this.services);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

