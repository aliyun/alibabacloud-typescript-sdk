// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssociatePhysicalConnectionToVirtualBorderRouterRequest extends $dara.Model {
  /**
   * @remarks
   * The circuit code provided by the carrier for the Express Connect circuit. 
   * 
   * > Only the owner of the Express Connect circuit can specify this parameter.
   * 
   * @example
   * longtel001
   */
  circuitCode?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * The client generates the value of this parameter. The value must be unique among different requests and cannot exceed 64 ASCII characters in length.
   * 
   * > If you do not specify this parameter, the system uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may differ for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to enable IPv6. Valid values:
   * 
   * - **true**: Enabled.
   * 
   * - **false** (default): Disabled.
   * 
   * @example
   * false
   */
  enableIpv6?: string;
  /**
   * @remarks
   * The Alibaba Cloud-side IP address of the VBR instance.
   * 
   * @example
   * 192.168.XX.XX
   */
  localGatewayIp?: string;
  /**
   * @remarks
   * The Alibaba Cloud-side IPv6 address of the VBR instance.
   * 
   * @example
   * 2001:XXXX:3c4d:0015:0000:0000:0000:1a2b
   */
  localIpv6GatewayIp?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The client-side IP address of the VBR instance.
   * 
   * - Only the VBR owner can specify or modify this property.
   * 
   * - This parameter is required when you create a VBR instance for the Express Connect circuit owner.
   * 
   * @example
   * 192.168.XX.XX
   */
  peerGatewayIp?: string;
  /**
   * @remarks
   * The client-side IPv6 address of the VBR instance.
   * 
   * - Only the VBR owner can specify or modify this property.
   * 
   * - This parameter is required when you create a VBR instance for the Express Connect circuit owner.
   * 
   * @example
   * 2001:XXXX:4:4:4:4:4:4
   */
  peerIpv6GatewayIp?: string;
  /**
   * @remarks
   * The subnet mask for the Alibaba Cloud-side and client-side IPv6 addresses of the VBR instance.
   * 
   * The two IPv6 addresses must be in the same subnet.
   * 
   * @example
   * 2408:4004:cc:400::/56
   */
  peeringIpv6SubnetMask?: string;
  /**
   * @remarks
   * The subnet mask for the Alibaba Cloud-side and client-side IP addresses of the VBR instance.
   * 
   * The two IP addresses must be in the same subnet.
   * 
   * @example
   * 255.255.255.0
   */
  peeringSubnetMask?: string;
  /**
   * @remarks
   * The Express Connect circuit instance ID.
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
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/448570.html) operation to query the region ID.
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
   * The VBR instance ID.
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
   * > Only the owner of the Express Connect circuit can specify this parameter. The VLAN IDs of two VBRs on the same Express Connect circuit must be different.
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

