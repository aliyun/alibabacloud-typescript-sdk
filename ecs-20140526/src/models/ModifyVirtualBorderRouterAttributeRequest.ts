// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyVirtualBorderRouterAttributeRequest extends $dara.Model {
  circuitCode?: string;
  clientToken?: string;
  description?: string;
  localGatewayIp?: string;
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  peerGatewayIp?: string;
  peeringSubnetMask?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  userCidr?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  vbrId?: string;
  vlanId?: number;
  static names(): { [key: string]: string } {
    return {
      circuitCode: 'CircuitCode',
      clientToken: 'ClientToken',
      description: 'Description',
      localGatewayIp: 'LocalGatewayIp',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      peerGatewayIp: 'PeerGatewayIp',
      peeringSubnetMask: 'PeeringSubnetMask',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      userCidr: 'UserCidr',
      vbrId: 'VbrId',
      vlanId: 'VlanId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      circuitCode: 'string',
      clientToken: 'string',
      description: 'string',
      localGatewayIp: 'string',
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      peerGatewayIp: 'string',
      peeringSubnetMask: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      userCidr: 'string',
      vbrId: 'string',
      vlanId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

