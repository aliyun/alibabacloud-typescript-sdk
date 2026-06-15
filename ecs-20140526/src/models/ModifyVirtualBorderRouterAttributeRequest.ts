// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyVirtualBorderRouterAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The circuit code of the Express Connect circuit. The circuit code is provided by your connectivity provider.
   */
  circuitCode?: string;
  /**
   * @remarks
   * A client-generated token that ensures the request is idempotent. The token must be unique for each request, contain only ASCII characters, and not exceed 64 characters in length.
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the VBR.
   * 
   * The description must be 2 to 256 characters long. It must start with a letter and cannot start with `http://` or `https://`.
   */
  description?: string;
  /**
   * @remarks
   * The local gateway IP address for the BGP session.
   */
  localGatewayIp?: string;
  /**
   * @remarks
   * The name of the VBR.
   * 
   * The name must be 2 to 128 characters long. It must start with a letter and can contain letters, digits, underscores (_), and hyphens (-).
   */
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The peer gateway IP address for the BGP session.
   */
  peerGatewayIp?: string;
  /**
   * @remarks
   * The subnet mask for the `LocalGatewayIp` and `PeerGatewayIp`.
   */
  peeringSubnetMask?: string;
  /**
   * @remarks
   * The ID of the region where the virtual border router (VBR) is deployed.
   * 
   * To get a list of the latest regions, call the `DescribeRegions` operation.
   * 
   * This parameter is required.
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The CIDR block of the on-premises network that is connected to the VBR.
   */
  userCidr?: string;
  /**
   * @remarks
   * The ID of the VBR to modify.
   * 
   * This parameter is required.
   */
  vbrId?: string;
  /**
   * @remarks
   * The VLAN ID of the VBR. The VLAN ID must be unique on the physical connection.
   * 
   * Valid values: 0 to 4095.
   * 
   * A value of 0 indicates that the VBR does not use a VLAN.
   */
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

