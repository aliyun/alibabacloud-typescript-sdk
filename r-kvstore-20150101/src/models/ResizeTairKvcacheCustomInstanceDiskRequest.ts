// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResizeTairKVCacheCustomInstanceDiskRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * d-5v1aggi3ffoxufb57**
   */
  diskId?: string;
  /**
   * @example
   * 5000
   */
  diskSize?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * tc-bp1zxszhcgatnx****
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

