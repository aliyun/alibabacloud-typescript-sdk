// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ServiceSpec extends $dara.Model {
  defaultPort?: number;
  extraPorts?: number[];
  serviceMode?: string;
  static names(): { [key: string]: string } {
    return {
      defaultPort: 'DefaultPort',
      extraPorts: 'ExtraPorts',
      serviceMode: 'ServiceMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultPort: 'number',
      extraPorts: { 'type': 'array', 'itemType': 'number' },
      serviceMode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.extraPorts)) {
      $dara.Model.validateArray(this.extraPorts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

