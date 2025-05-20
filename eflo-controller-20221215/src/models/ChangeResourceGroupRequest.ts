// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeResourceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * System-defined parameter. Value: **ChangeResourceGroup**.
   * 
   * This parameter is required.
   * 
   * @example
   * rg-aekzyqdwnfabx6q
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * $.parameters[1].schema.example
   * 
   * This parameter is required.
   * 
   * @example
   * i118099391667548921125
   */
  resourceId?: string;
  /**
   * @remarks
   * Resource Group Change
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  resourceRegionId?: string;
  /**
   * @remarks
   * $.parameters[3].schema.enumValueTitles
   * 
   * @example
   * Node
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      resourceRegionId: 'ResourceRegionId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
      resourceId: 'string',
      resourceRegionId: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

