// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyVirtualBorderRouterAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The information about the Express Connect circuit associated with the VBR, including the following parameters:
   * 
   * *   **CircuitCode**: the circuit code provided by the connectivity provider for the Express Connect circuit.
   * *   **LocalGatewayIp**: the IP address of the gateway device on the Alibaba Cloud side.
   * *   **PeerGatewayIp**: the IP address of the gateway device on the customer side.
   * *   **PeeringSubnetMask**: the subnet mask for the IP addresses of gateway devices on the Alibaba Cloud side and the customer side.
   * *   **PhysicalConnectionId**: the ID of the Express Connect circuit.
   * 
   * @example
   * [   {     "CircuitCode ": "longtel001",     " LocalGatewayIp ": "192.168.XX.XX",     "PeerGatewayIp" : "192.168.XX.XX",     " PeeringSubnetMask ": "255.255.255.252",     " PhysicalConnectionId ": "pc-kojok19****"   } ]
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
   * The circuit code of the Express Connect circuit. The circuit code is provided by the connectivity provider.
   * 
   * >  Only the owner of the Express Connect circuit can set this property.
   * 
   * @example
   * longtel001
   */
  circuitCode?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * >  If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-00****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the VBR.
   * 
   * It must be 2 to 256 characters in length. It must start with a letter but cannot start with `http://` or `https://`.
   * 
   * @example
   * desc
   */
  description?: string;
  /**
   * @remarks
   * The maximum number of dropped packets that is allowed by the receiver when the initiator transmits packets. This value can be used to check whether a connection works as expected.
   * 
   * Valid values: **3 to 10**.
   * 
   * @example
   * 3
   */
  detectMultiplier?: number;
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
  enableIpv6?: boolean;
  /**
   * @remarks
   * The IP address of the VBR.
   * 
   * Only the owner of the VBR can set or modify this parameter.
   * 
   * @example
   * 192.168.XX.XX
   */
  localGatewayIp?: string;
  /**
   * @remarks
   * The IPv6 address of the VBR.
   * 
   * @example
   * 2001:XXXX:3c4d:0015:0000:0000:0000:1a2b
   */
  localIpv6GatewayIp?: string;
  /**
   * @remarks
   * The time interval to receive BFD packets. Valid values: **200 to 1000**. Unit: milliseconds.
   * 
   * @example
   * 300
   */
  minRxInterval?: number;
  /**
   * @remarks
   * The time interval to send BFD packets. Valid values: **200 to 1000**. Unit: milliseconds.
   * 
   * @example
   * 300
   */
  minTxInterval?: number;
  mtu?: number;
  /**
   * @remarks
   * The name of the VBR.
   * 
   * The name must be 2 to 128 characters in length, and can contain letters, digits, underscores (_), and hyphens (-). The name must start with a letter. It cannot start with `http://` or `https://`.
   * 
   * @example
   * VBR
   */
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The IP address of the gateway device in the data center.
   * 
   * Only the owner of the VBR can set or modify this parameter.
   * 
   * @example
   * 192.168.XX.X
   */
  peerGatewayIp?: string;
  /**
   * @remarks
   * The IPv6 address of the gateway device in the data center.
   * 
   * *   Only the owner of the VBR can set or modify this property.
   * *   This property is required when you create a VBR for the owner of the Express Connect circuit. You can ignore this property when you create a VBR for another Alibaba Cloud account.
   * 
   * @example
   * 2001:XXXX:3c4d:0015:0000:0000:0000:2a2b
   */
  peerIpv6GatewayIp?: string;
  /**
   * @remarks
   * The subnet mask of the IPv6 addresses of the VBR and the gateway device in the data center.
   * 
   * The two IPv6 addresses must fall within the same subnet.
   * 
   * @example
   * 2408:4004:cc:400::/56
   */
  peeringIpv6SubnetMask?: string;
  /**
   * @remarks
   * The subnet mask for the IP addresses of the gateway devices on the Alibaba Cloud side and on the customer side. Only the owner of the VBR can set or modify this parameter.
   * 
   * The two IP addresses must fall within the same subnet.
   * 
   * @example
   * 255.255.255.252
   */
  peeringSubnetMask?: string;
  /**
   * @remarks
   * The region ID of the VBR.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
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
   * Indicates whether to allow service access between data centers. Valid values:
   * 
   * - **true**
   * - **false**
   * 
   * @example
   * false
   */
  sitelinkEnable?: boolean;
  /**
   * @remarks
   * The VBR ID.
   * 
   * This parameter is required.
   * 
   * @example
   * vbr-bp1lhl0taikrte****
   */
  vbrId?: string;
  /**
   * @remarks
   * The VLAN ID of the VBR. Valid values: **0 to 2999**.
   * 
   * >  This parameter is available only to Express Connect owners. The VLAN IDs of VBRs on the same Express Connect circuit must be unique.
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

