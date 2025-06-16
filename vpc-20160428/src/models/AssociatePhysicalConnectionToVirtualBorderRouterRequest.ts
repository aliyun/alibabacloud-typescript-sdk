// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssociatePhysicalConnectionToVirtualBorderRouterRequest extends $dara.Model {
  /**
   * @remarks
   * The circuit code of the Express Connect circuit. The circuit code is provided by the connectivity provider.
   * 
   * >  Only the Express Connect circuit owner can specify this parameter.
   * 
   * @example
   * longtel001
   */
  circuitCode?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * >  If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to enable IPv6. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * false
   */
  enableIpv6?: string;
  /**
   * @remarks
   * The IP address of the gateway device on the Alibaba Cloud side.
   * 
   * @example
   * 192.168.XX.XX
   */
  localGatewayIp?: string;
  /**
   * @remarks
   * The IPv6 address of the gateway device on the Alibaba Cloud side.
   * 
   * @example
   * 2001:XXXX:3c4d:0015:0000:0000:0000:1a2b
   */
  localIpv6GatewayIp?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The IP address of the gateway device on the user side.
   * 
   * *   Only the owner of the VBR can set or modify this parameter.
   * *   When you create a VBR for the owner of the Express Connect circuit, this parameter is required.
   * 
   * @example
   * 192.168.XX.XX
   */
  peerGatewayIp?: string;
  /**
   * @remarks
   * The IPv6 address of the gateway device in the data center.
   * 
   * *   Only the owner of the VBR can specify or modify this parameter.
   * *   When you create a VBR for the owner of the Express Connect circuit, this parameter is required.
   * 
   * @example
   * 2001:XXXX:4:4:4:4:4:4
   */
  peerIpv6GatewayIp?: string;
  /**
   * @remarks
   * The subnet mask of the IPv6 addresses of the gateway devices on the user side and Alibaba Cloud side.
   * 
   * The two IPv6 addresses must fall within the same subnet.
   * 
   * @example
   * 2408:4004:cc:400::/56
   */
  peeringIpv6SubnetMask?: string;
  /**
   * @remarks
   * The subnet mask of the IP addresses of the VBR and the gateway device in the data center.
   * 
   * The two IP addresses must fall within the same subnet.
   * 
   * @example
   * 255.255.255.0
   */
  peeringSubnetMask?: string;
  /**
   * @remarks
   * The ID of the Express Connect circuit.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-bp1qrb3044eqixog****
   */
  physicalConnectionId?: string;
  /**
   * @remarks
   * The region ID of the Express Connect circuit.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the VBR.
   * 
   * This parameter is required.
   * 
   * @example
   * vbr-bp186tnz6rijyhj******
   */
  vbrId?: string;
  /**
   * @remarks
   * The VLAN ID of the VBR. Valid values: **0 to 2999**.
   * 
   * >  Only the Express Connect circuit owner can specify this parameter. Two VBRs associated with the same Express Connect circuit cannot use the same VLAN ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  vlanId?: string;
  static names(): { [key: string]: string } {
    return {
      circuitCode: 'CircuitCode',
      clientToken: 'ClientToken',
      enableIpv6: 'EnableIpv6',
      localGatewayIp: 'LocalGatewayIp',
      localIpv6GatewayIp: 'LocalIpv6GatewayIp',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      peerGatewayIp: 'PeerGatewayIp',
      peerIpv6GatewayIp: 'PeerIpv6GatewayIp',
      peeringIpv6SubnetMask: 'PeeringIpv6SubnetMask',
      peeringSubnetMask: 'PeeringSubnetMask',
      physicalConnectionId: 'PhysicalConnectionId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      vbrId: 'VbrId',
      vlanId: 'VlanId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      circuitCode: 'string',
      clientToken: 'string',
      enableIpv6: 'string',
      localGatewayIp: 'string',
      localIpv6GatewayIp: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      peerGatewayIp: 'string',
      peerIpv6GatewayIp: 'string',
      peeringIpv6SubnetMask: 'string',
      peeringSubnetMask: 'string',
      physicalConnectionId: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      vbrId: 'string',
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

