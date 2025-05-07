// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResourceRequirements extends $dara.Model {
  limits?: { [key: string]: string };
  requests?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      limits: 'Limits',
      requests: 'Requests',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limits: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      requests: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(this.limits) {
      $dara.Model.validateMap(this.limits);
    }
    if(this.requests) {
      $dara.Model.validateMap(this.requests);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

