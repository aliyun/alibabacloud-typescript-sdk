// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ServicePluginStep extends $dara.Model {
  /**
   * @example
   * {"key":"value"}
   */
  args?: { [key: string]: any };
  /**
   * @example
   * dingding-robot
   */
  plugin?: string;
  static names(): { [key: string]: string } {
    return {
      args: 'args',
      plugin: 'plugin',
    };
  }

  static types(): { [key: string]: any } {
    return {
      args: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      plugin: 'string',
    };
  }

  validate() {
    if(this.args) {
      $dara.Model.validateMap(this.args);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

