// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResizeTairKVCacheCustomInstanceDiskRequest extends $dara.Model {
  autoPay?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  diskId?: string;
  diskSize?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      diskId: 'DiskId',
      diskSize: 'DiskSize',
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
      autoPay: 'boolean',
      diskId: 'string',
      diskSize: 'string',
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

