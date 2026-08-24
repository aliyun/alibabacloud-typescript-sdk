// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstallPluginRequest extends $dara.Model {
  /**
   * @remarks
   * The list of gateway IDs. This parameter is required. If this parameter is not specified, the service returns InvalidParameter.IsEmpty. This field must be included in the body object.
   */
  gatewayIds?: string[];
  /**
   * @remarks
   * The plug-in type ID. This parameter is required. If this parameter is not specified, the service returns InvalidParameter.IsEmpty. This field must be included in the body object.
   * 
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

