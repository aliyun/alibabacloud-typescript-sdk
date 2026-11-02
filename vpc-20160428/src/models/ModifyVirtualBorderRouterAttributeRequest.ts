// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyVirtualBorderRouterAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The list of Express Connect circuits associated with the VBR. The list includes the following parameters:
   * 
   * - **VlanId**: the VLAN ID of the VBR instance.
   * - **CircuitCode**: the circuit encoding provided by the carrier for the Express Connect circuit.
   * - **LocalGatewayIp**: the IP address of the VBR on the Alibaba Cloud side.
   * - **PeerGatewayIp**: the IP address of the VBR on the customer side.
   * - **PeeringSubnetMask**: the subnet mask of the IP addresses of the VBR on the Alibaba Cloud side and the customer side.
   * - **LocalIpv6GatewayIp**: the IPv6 address of the VBR on the Alibaba Cloud side.
   * - **PeerIpv6GatewayIp**: the IPv6 address of the VBR on the customer side.
   * - **PeeringIpv6SubnetMask**: the subnet mask of the IPv6 addresses of the VBR on the Alibaba Cloud side and the customer side.
   * - **ipv6Enable**: specifies whether to enable IPv6.
   * - **PhysicalConnectionId**: the instance ID of the Express Connect circuit.
   * 
   * @example
   * [
   *   {
   *     "VlanId": "5",
   *     "CircuitCode": "longtel001",
   *     "LocalGatewayIp": "192.168.XX.XX",
   *     "PeerGatewayIp": "192.168.XX.XX",
   *     "PeeringSubnetMask": "255.255.255.252",
   *     "LocalIpv6GatewayIp": "fd00:XXXX:1030:3f41::1",
   *     "PeerIpv6GatewayIp": "fd00:XXXX:1030:3f41::2",
   *     "PeeringIpv6SubnetMask": "fd00:0:1030:3f41::/126",
   *     "ipv6Enable": true,
   *     "PhysicalConnectionId": "pc-kojok19****"
   *   }
   * ]
   */
  associatedPhysicalConnections?: string;
  /**
   * @remarks
   * The bandwidth value. Unit: Mbit/s.
   * 
   * @example
   * 100
   */
  bandwidth?: number;
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
   * You can use the client to generate the value, but you must ensure that it is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request is unique.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-00****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the VBR.
   * 
   * The description must be 2 to 256 characters in length, and must start with a letter or a Chinese character. It cannot start with `http://` or `https://`.
   * 
   * @example
   * desc
   */
  description?: string;
  /**
   * @remarks
   * The detection time multiplier, which is the maximum number of consecutive packet losses allowed by the receiver to detect whether the link is normal.
   * 
   * Valid values: **3** to **10**.
   * 
   * @example
   * 3
   */
  detectMultiplier?: number;
  /**
   * @remarks
   * Specifies whether to enable IPv6.
   * 
   * - **true**: enables IPv6.
   * 
   * - **false** (default): disables IPv6.
   * 
   * @example
   * false
   */
  enableIpv6?: boolean;
  /**
   * @remarks
   * The IP address of the VBR on the Alibaba Cloud side.
   * 
   * Only the owner of the VBR can specify or modify this property.
   * 
   * @example
   * 192.168.XX.XX
   */
  localGatewayIp?: string;
  /**
   * @remarks
   * The IPv6 address of the VBR on the Alibaba Cloud side.
   * 
   * @example
   * 2001:XXXX:3c4d:0015:0000:0000:0000:1a2b
   */
  localIpv6GatewayIp?: string;
  /**
   * @remarks
   * The interval at which BFD packets are received. Valid values: **200** to **1000**. Unit: milliseconds.
   * 
   * @example
   * 300
   */
  minRxInterval?: number;
  /**
   * @remarks
   * The send interval for Bidirectional Forwarding Detection (BFD) packets. Valid values: **200** to **1000**. Unit: milliseconds.
   * 
   * @example
   * 300
   */
  minTxInterval?: number;
  /**
   * @remarks
   * The maximum transmission unit (MTU) value supported by the VBR. Valid values: 1500 and 8500.
   * You can set this value only when the VBR is associated with an Express Connect Router (ECR). This value also affects all other VBRs and VPCs within the same ECR.
   * 
   * @example
   * 1500
   */
  mtu?: number;
  /**
   * @remarks
   * The name of the VBR.
   * 
   * The name must be 2 to 128 characters in length, and must start with a letter or a Chinese character. It can contain digits, underscores (_), and hyphens (-). It cannot start with `http://` or `https://`.
   * 
   * @example
   * VBR
   */
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The IP address of the VBR on the customer side.
   * 
   * Only the owner of the VBR can specify or modify this property.
   * 
   * @example
   * 192.168.XX.X
   */
  peerGatewayIp?: string;
  /**
   * @remarks
   * The IPv6 address of the VBR on the customer side.
   * 
   * - Only the owner of the VBR can specify or modify this property.
   * 
   * - This parameter is required when you create a VBR for the owner of the Express Connect circuit. This parameter is not required when you create a VBR for another account.
   * 
   * @example
   * 2001:XXXX:3c4d:0015:0000:0000:0000:2a2b
   */
  peerIpv6GatewayIp?: string;
  /**
   * @remarks
   * The subnet mask of the IPv6 addresses of the VBR on the Alibaba Cloud side and the customer side.
   * 
   * The two IPv6 addresses must be in the same subnet.
   * 
   * @example
   * 2408:4004:cc:400::/56
   */
  peeringIpv6SubnetMask?: string;
  /**
   * @remarks
   * The subnet mask of the IP addresses of the VBR on the Alibaba Cloud side and the customer side. Only the owner of the VBR can specify or modify this property.
   * 
   * The two IP addresses must be in the same subnet.
   * 
   * @example
   * 255.255.255.252
   */
  peeringSubnetMask?: string;
  /**
   * @remarks
   * The region ID of the VBR.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Specifies whether to allow service access between data centers.
   * 
   * - true: allows service access between data centers.
   * 
   * - false (default): does not allow service access between data centers.
   * 
   * @example
   * false
   */
  sitelinkEnable?: boolean;
  /**
   * @remarks
   * The instance ID of the VBR.
   * 
   * This parameter is required.
   * 
   * @example
   * vbr-bp1lhl0taikrte****
   */
  vbrId?: string;
  /**
   * @remarks
   * The VLAN ID of the VBR. Valid values: **0** to **2999**. 
   * 
   * > Only the owner of the Express Connect circuit can specify this parameter. The VLAN IDs of two VBRs under the same Express Connect circuit must be different.
   * 
   * @example
   * 0
   */
  vlanId?: number;
  static names(): { [key: string]: string } {
    return {
      associatedPhysicalConnections: 'AssociatedPhysicalConnections',
      bandwidth: 'Bandwidth',
      circuitCode: 'CircuitCode',
      clientToken: 'ClientToken',
      description: 'Description',
      detectMultiplier: 'DetectMultiplier',
      enableIpv6: 'EnableIpv6',
      localGatewayIp: 'LocalGatewayIp',
      localIpv6GatewayIp: 'LocalIpv6GatewayIp',
      minRxInterval: 'MinRxInterval',
      minTxInterval: 'MinTxInterval',
      mtu: 'Mtu',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      peerGatewayIp: 'PeerGatewayIp',
      peerIpv6GatewayIp: 'PeerIpv6GatewayIp',
      peeringIpv6SubnetMask: 'PeeringIpv6SubnetMask',
      peeringSubnetMask: 'PeeringSubnetMask',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sitelinkEnable: 'SitelinkEnable',
      vbrId: 'VbrId',
      vlanId: 'VlanId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associatedPhysicalConnections: 'string',
      bandwidth: 'number',
      circuitCode: 'string',
      clientToken: 'string',
      description: 'string',
      detectMultiplier: 'number',
      enableIpv6: 'boolean',
      localGatewayIp: 'string',
      localIpv6GatewayIp: 'string',
      minRxInterval: 'number',
      minTxInterval: 'number',
      mtu: 'number',
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      peerGatewayIp: 'string',
      peerIpv6GatewayIp: 'string',
      peeringIpv6SubnetMask: 'string',
      peeringSubnetMask: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sitelinkEnable: 'boolean',
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

