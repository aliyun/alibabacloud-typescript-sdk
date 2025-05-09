// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSecretParameterRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the parameter. The description must be 1 to 200 characters in length.
   * 
   * @example
   * SecretParameter
   */
  description?: string;
  /**
   * @remarks
   * The name of the parameter. The name must be 1 to 180 characters in length, and can contain letters, digits, hyphens (-), and underscores (_). It cannot start with ALIYUN, ACS, ALIBABA, ALICLOUD, or OOS.
   * 
   * This parameter is required.
   * 
   * @example
   * MySecretParameter
   */
  name?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmxsn4m4******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags of the parameter.
   * 
   * @example
   * {"k1": "v1", "k2": "v2"}
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The value of the parameter. The value must be 1 to 4096 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * update
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      value: 'string',
    };
  }

  validate() {
    if(this.tags) {
      $dara.Model.validateMap(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

