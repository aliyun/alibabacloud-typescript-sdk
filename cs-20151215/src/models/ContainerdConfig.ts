// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ContainerdConfig extends $dara.Model {
  insecureRegistries?: string[];
  registryMirrors?: string[];
  static names(): { [key: string]: string } {
    return {
      insecureRegistries: 'insecureRegistries',
      registryMirrors: 'registryMirrors',
    };
  }

  static types(): { [key: string]: any } {
    return {
      insecureRegistries: { 'type': 'array', 'itemType': 'string' },
      registryMirrors: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.insecureRegistries)) {
      $dara.Model.validateArray(this.insecureRegistries);
    }
    if(Array.isArray(this.registryMirrors)) {
      $dara.Model.validateArray(this.registryMirrors);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

