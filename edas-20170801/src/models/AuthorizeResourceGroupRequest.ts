// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AuthorizeResourceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the resource group. You can call the ListResourceGroup operation to query the resource group ID. For more information, see [ListResourceGroup](https://help.aliyun.com/document_detail/62055.html).
   * 
   * You can specify multiple resource group IDs. Separate multiple resource group IDs with semicolons (;).
   * 
   * This parameter is required.
   * 
   * @example
   * 461;462
   */
  resourceGroupIds?: string;
  /**
   * @remarks
   * The ID of the RAM user to be authorized.
   * 
   * This parameter is required.
   * 
   * @example
   * test@13333********
   */
  targetUserId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupIds: 'ResourceGroupIds',
      targetUserId: 'TargetUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupIds: 'string',
      targetUserId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

