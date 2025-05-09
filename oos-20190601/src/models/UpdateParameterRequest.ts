// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateParameterRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the common parameter. The description must be 1 to 200 characters in length.
   * 
   * @example
   * update
   */
  description?: string;
  /**
   * @remarks
   * The name of the common parameter. The name must be 1 to 200 characters in length, and can contain letters, digits, hyphens (-), and underscores (_). It cannot start with ALIYUN, ACS, ALIBABA, ALICLOUD, or OOS.
   * 
   * This parameter is required.
   * 
   * @example
   * MyParameter
   */
  name?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmxsn4m4******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags to be added to common parameter.
   * 
   * @example
   * {"k1": "v1", "k2": "v2"}
   */
  tags?: string;
  /**
   * @remarks
   * The value of the common parameter. The value must be 1 to 4,096 characters in length.
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
      tags: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

