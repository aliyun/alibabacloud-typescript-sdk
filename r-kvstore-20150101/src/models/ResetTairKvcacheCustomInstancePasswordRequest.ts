// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetTairKVCacheCustomInstancePasswordRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  password?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  sourceBiz?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      password: 'Password',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
      sourceBiz: 'SourceBiz',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      password: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
      sourceBiz: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

