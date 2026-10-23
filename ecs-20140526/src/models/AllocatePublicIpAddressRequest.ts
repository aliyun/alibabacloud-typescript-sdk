// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AllocatePublicIpAddressRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance to which you want to assign an IP address.
   * 
   * > The bandwidth of the instance must be greater than 0.
   * 
   * This parameter is required.
   * 
   * @example
   * i-bp1gtjxuuvwj17zr****
   */
  instanceId?: string;
  /**
   * @remarks
   * The public IP address of the instance. If this parameter is empty, the system randomly assigns an IP address by default.
   * 
   * > Only whitelisted users can specify this parameter. Regular users cannot specify an IP address.
   * 
   * @example
   * ``112.124.**.**``
   */
  ipAddress?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The VLAN ID of the instance.
   * > This parameter is deprecated. To improve compatibility, use other parameters instead.
   * 
   * @example
   * 720
   */
  vlanId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ipAddress: 'IpAddress',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      vlanId: 'VlanId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ipAddress: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      vlanId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

