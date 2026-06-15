// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVirtualBorderRouterRequest extends $dara.Model {
  /**
   * @remarks
   * The circuit code of the physical connection. This code is provided by your connectivity provider.
   */
  circuitCode?: string;
  /**
   * @remarks
   * A client token to ensure that the request is idempotent.
   * 
   * You can generate this token on your client, but you must ensure that it is unique for each request. The token can contain only ASCII characters and cannot be longer than 64 characters.
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the VBR.
   * 
   * The description must be 2 to 256 characters long and cannot start with `http://` or `https://`.
   */
  description?: string;
  /**
   * @remarks
   * The IP address of the VBR gateway in Alibaba Cloud.
   */
  localGatewayIp?: string;
  /**
   * @remarks
   * The name of the VBR.
   * 
   * The name must be 2 to 128 characters long, start with a letter, and can contain only letters, digits, periods (.), underscores (_), and hyphens (-).
   */
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The IP address of the gateway in your on-premises data center.
   */
  peerGatewayIp?: string;
  /**
   * @remarks
   * The peering subnet mask for the IP addresses of the local gateway and the peer gateway.
   */
  peeringSubnetMask?: string;
  /**
   * @remarks
   * The ID of the physical connection.
   * 
   * This parameter is required.
   */
  physicalConnectionId?: string;
  /**
   * @remarks
   * The ID of the region where the Virtual Border Router (VBR) is located.
   * 
   * You can call the `DescribeRegions` operation to get the latest list of regions.
   * 
   * This parameter is required.
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The CIDR block of your on-premises network. Required when the VBR is connected to a Cloud Enterprise Network (CEN) instance.
   */
  userCidr?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that owns the VBR. Specify this parameter when creating a VBR for another account.
   */
  vbrOwnerId?: number;
  /**
   * @remarks
   * The VLAN ID of the VBR.
   * 
   * Valid values: 0 to 4095.
   * 
   * A value of 0 indicates that the VBR is connected to the physical connection in Layer 3 router mode.
   * 
   * This parameter is required.
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
      physicalConnectionId: 'PhysicalConnectionId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      userCidr: 'UserCidr',
      vbrOwnerId: 'VbrOwnerId',
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
      physicalConnectionId: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      userCidr: 'string',
      vbrOwnerId: 'number',
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

