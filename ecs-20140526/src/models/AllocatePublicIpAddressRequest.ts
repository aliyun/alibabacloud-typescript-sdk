// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AllocatePublicIpAddressRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance to which you want to assign a public IP address.
   * 
   * This parameter is required.
   * 
   * @example
   * i-bp1gtjxuuvwj17zr****
   */
  instanceId?: string;
  /**
   * @remarks
   * The static public IP address that you want to assign to the instance. This parameter is empty by default, which indicates that a static public IP address is randomly assigned by the system.
   * 
   * >  Only users in the whitelist can specify this parameter.
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
   * The virtual LAN (VLAN) ID of the instance.
   * 
   * > This parameter will be removed in the future. To ensure future compatibility, we recommend that you use other parameters.
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

