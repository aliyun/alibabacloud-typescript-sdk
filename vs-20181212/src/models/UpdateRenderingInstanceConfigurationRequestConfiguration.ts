// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateRenderingInstanceConfigurationRequestConfigurationAttributes } from "./UpdateRenderingInstanceConfigurationRequestConfigurationAttributes";


export class UpdateRenderingInstanceConfigurationRequestConfiguration extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  attributes?: UpdateRenderingInstanceConfigurationRequestConfigurationAttributes[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * location
   */
  moduleName?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      moduleName: 'ModuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'array', 'itemType': UpdateRenderingInstanceConfigurationRequestConfigurationAttributes },
      moduleName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attributes)) {
      $dara.Model.validateArray(this.attributes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

