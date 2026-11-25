// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReleaseLindormInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to release the instance immediately. Default value: false. If you set this parameter to false, the instance data is retained for 7 days and then deleted. If you set this parameter to true, the instance data is immediately deleted.
   * 
   * @example
   * false
   */
  immediately?: boolean;
  /**
   * @remarks
   * The ID of the instance. You can call the [GetLindormInstanceList](https://help.aliyun.com/document_detail/426069.html) operation to obtain the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ld-bp1z3506imz2f****
   */
  instanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      immediately: 'Immediately',
      instanceId: 'InstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      immediately: 'boolean',
      instanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

