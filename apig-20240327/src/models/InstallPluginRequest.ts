// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstallPluginRequest extends $dara.Model {
  gatewayIds?: string[];
  /**
   * @example
   * pls-csqmjndlhtguk0loef21
   */
  pluginClassId?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayIds: 'gatewayIds',
      pluginClassId: 'pluginClassId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayIds: { 'type': 'array', 'itemType': 'string' },
      pluginClassId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.gatewayIds)) {
      $dara.Model.validateArray(this.gatewayIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

