// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReleaseLindormInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to release the instance immediately. If you set this parameter to false, data in the released instance is retained for seven days before it is completely deleted. If you set this parameter to true, data in the released instance is immediately deleted. The default value is false.
   * 
   * @example
   * false
   */
  immediately?: boolean;
  /**
   * @remarks
   * Instance ID, which can be obtained by calling the [GetLindormInstanceList](https://help.aliyun.com/document_detail/426069.html) interface.
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

