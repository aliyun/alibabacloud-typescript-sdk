// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateModuleRequest extends $dara.Model {
  /**
   * @example
   * Resource
   */
  generateSource?: string;
  parameters?: { [key: string]: any };
  /**
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @example
   * terraform
   */
  syntax?: string;
  /**
   * @example
   * generateSource ==
   */
  template?: string;
  /**
   * @example
   * 1.189.0
   */
  terraformProviderVersion?: string;
  /**
   * @example
   * alicloud_db_instance
   */
  terraformResourceType?: string;
  static names(): { [key: string]: string } {
    return {
      generateSource: 'generateSource',
      parameters: 'parameters',
      regionId: 'regionId',
      syntax: 'syntax',
      template: 'template',
      terraformProviderVersion: 'terraformProviderVersion',
      terraformResourceType: 'terraformResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generateSource: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      regionId: 'string',
      syntax: 'string',
      template: 'string',
      terraformProviderVersion: 'string',
      terraformResourceType: 'string',
    };
  }

  validate() {
    if(this.parameters) {
      $dara.Model.validateMap(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

