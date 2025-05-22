// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteResourceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * >  The ID of the resource group that you want to delete.
   * 
   * *   If you also specify ResourceGroupIds, both parameters take effect.
   * 
   * @example
   * rg-aj01tck67a0szp***
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * >  The IDs of the resource groups that you want to delete.
   * 
   * *   If you also specify ResourceGroupId, both parameters take effect.
   */
  resourceGroupIds?: string[];
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
      resourceGroupIds: 'ResourceGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

