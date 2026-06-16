// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MoveResourceGroupRequest extends $dara.Model {
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
   * The ID of the destination resource group.
   * 
   * This parameter is required.
   * 
   * @example
   * rg-acfmykgxu5d46ey
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the resource to move.
   * 
   * This parameter is required.
   * 
   * @example
   * cas-cn-4591d3xa****
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the resource. Set the value to **instance**.
   * 
   * This parameter is required.
   * 
   * @example
   * instance
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceGroupId: 'string',
      resourceId: 'string',
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

