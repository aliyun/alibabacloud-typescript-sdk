// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MoveResourceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the resource group to which you want to move the cloud resource instance.
   * 
   * This parameter is required.
   * 
   * @example
   * rg-acfm3peow3k****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the cloud resource instance whose resource group you want to modify.
   * 
   * This parameter is required.
   * 
   * @example
   * ddos_originpre_public_cn-7213kxxxxx
   */
  resourceId?: string;
  /**
   * @remarks
   * The region to which the resource belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  resourceRegionId?: string;
  /**
   * @remarks
   * The type of the cloud resource whose resource group you want to modify. Valid values: **instance**.
   * 
   * This parameter is required.
   * 
   * @example
   * instance
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

