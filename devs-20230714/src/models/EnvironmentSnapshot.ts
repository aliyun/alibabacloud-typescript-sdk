// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ServiceInstance } from "./ServiceInstance";


export class EnvironmentSnapshot extends $dara.Model {
  services?: { [key: string]: ServiceInstance };
  static names(): { [key: string]: string } {
    return {
      services: 'services',
    };
  }

  static types(): { [key: string]: any } {
    return {
      services: { 'type': 'map', 'keyType': 'string', 'valueType': ServiceInstance },
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

