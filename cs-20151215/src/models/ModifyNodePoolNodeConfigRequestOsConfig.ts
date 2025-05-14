// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyNodePoolNodeConfigRequestOsConfig extends $dara.Model {
  /**
   * @remarks
   * Configuration for sysctl kernel parameters.
   */
  sysctl?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      sysctl: 'sysctl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sysctl: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.sysctl) {
      $dara.Model.validateMap(this.sysctl);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

