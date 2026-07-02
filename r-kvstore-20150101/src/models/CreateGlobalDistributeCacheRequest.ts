// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGlobalDistributeCacheRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies when to perform the operation. Valid values:
   * 
   * - **Immediately**: Performs the operation immediately.
   * 
   * - **MaintainTime**: Performs the operation during the maintenance window. This is the default value.
   * 
   * > You can call the [ModifyInstanceMaintainTime](https://help.aliyun.com/document_detail/473775.html) operation to change the maintenance window of the instance.
   * 
   * @example
   * Immediately
   */
  effectiveTime?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * > This is a system parameter. You do not need to specify it.
   * 
   * @example
   * -
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  /**
   * @remarks
   * The ID of the source instance.
   * 
   * This parameter is required.
   * 
   * @example
   * r-bp1zxszhcgatnx****
   */
  seedSubInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      effectiveTime: 'EffectiveTime',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
      seedSubInstanceId: 'SeedSubInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectiveTime: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
      seedSubInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

