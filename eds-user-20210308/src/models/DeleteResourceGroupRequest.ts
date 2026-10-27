// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteResourceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The channel.
   * 
   * @example
   * ENTERPRISE
   */
  businessChannel?: string;
  /**
   * @remarks
   * The ID of the resource group to delete.
   * 
   * > If the `ResourceGroupIds` parameter is not empty, both parameters take effect.
   * 
   * @example
   * rg-aj01tck67a0szp***
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The list of IDs of the resource groups to delete.
   * 
   * > If the `ResourceGroupIds` parameter is not empty, both parameters take effect.
   */
  resourceGroupIds?: string[];
  static names(): { [key: string]: string } {
    return {
      businessChannel: 'BusinessChannel',
      resourceGroupId: 'ResourceGroupId',
      resourceGroupIds: 'ResourceGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessChannel: 'string',
      resourceGroupId: 'string',
      resourceGroupIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.resourceGroupIds)) {
      $dara.Model.validateArray(this.resourceGroupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

