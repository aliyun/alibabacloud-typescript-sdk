// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVirtualBorderRouterRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key. You must enter at least one tag key. You can specify up to 20 tag keys. The tag key cannot be an empty string.
   * 
   * A tag key can be at most 128 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value. You can specify at most 20 tag values. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length and cannot contain `http://` or `https://`. The tag value cannot start with `aliyun` or `acs:`.
   * 
   * @example
   * FinanceJoshua
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVirtualBorderRouterRequest extends $dara.Model {
  /**
   * @remarks
   * The bandwidth of the VBR. Unit: Mbit/s.
   * 
   * *   When you create a VBR for a dedicated connection, valid values are **50**, **100**, **200**, **300**, **400**, **500**, **1000**, **2048**, **5120**, **8192**, **10240**, **20480**, **40960**, **50120**, **61440**, and **102400**.
   * *   You do not need to set this parameter when you create a VBR for a hosted connection. The bandwidth is already configured when the hosted connection is created.
   * 
   * @example
   * 100
   */
  bandwidth?: number;
  /**
   * @remarks
   * The circuit code of the Express Connect circuit. The circuit code is provided by the connectivity provider.
   * 
   * >  Only the owner of the Express Connect circuit can set this parameter.
   * 
   * @example
   * longtel001
   */
  circuitCode?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must make sure that it is unique among different requests.
   * 
   * >  If you do not set this parameter, the system automatically sets **ClientToken** to the value of **RequestId**. The value of **RequestId** may be different for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the VBR.
   * 
   * The description must be 2 to 256 characters in length. The description must start with a letter but cannot start with `http://` or `https://`.
   * 
   * @example
   * desc
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to enable IPv6. Valid values:
   * 
   * *   **true**: enables IPv6.
   * *   **false** (default): disables IPv6.
   * 
   * @example
   * true
   */
  enableIpv6?: boolean;
  /**
   * @remarks
   * The IP address of the VBR. Only the owner of the VBR can set or modify this parameter.
   * 
   * When you create a VBR for the owner of the Express Connect circuit, this parameter is required.
   * 
   * @example
   * 192.168.XX.XX
   */
  localGatewayIp?: string;
  /**
   * @remarks
   * The IPv6 address of the VBR. Only the owner of the VBR can set or modify this parameter.
   * 
   * When you create a VBR for the owner of the Express Connect circuit, this parameter is required.
   * 
   * @example
   * 2001:XXXX:3c4d:0015:0000:0000:0000:1a2b
   */
  localIpv6GatewayIp?: string;
  /**
   * @remarks
   * The name of the VBR.
   * 
   * The name must be 2 to 128 characters in length, and can contain letters, digits, underscores (_), and hyphens (-). The name must start with a letter.
   * 
   * @example
   * test
   */
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The IP address of the gateway device in the data center. Only the owner of the VBR can set or modify this parameter.
   * 
   * When you create a VBR for the owner of the Express Connect circuit, this parameter is required.
   * 
   * @example
   * 116.62.XX.XX
   */
  peerGatewayIp?: string;
  /**
   * @remarks
   * The IPv6 address of the gateway device in the data center. Only the owner of the VBR can set or modify this parameter.
   * 
   * When you create a VBR for the owner of the Express Connect circuit, this parameter is required.
   * 
   * @example
   * 2001:XXXX:4:4:4:4:4:4
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
   * The subnet mask of the IP addresses of the VBR and the gateway device in the data center.
   * 
   * The two IP addresses must fall within the same subnet.
   * 
   * @example
   * 255.255.255.252
   */
  peeringSubnetMask?: string;
  /**
   * @remarks
   * The ID of the Express Connect circuit.
   * 
   * You can create a VBR for a dedicated connection or a hosted connection.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-2zextbehcx****
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
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * For more information about resource group, see [What is Resource Management?](https://help.aliyun.com/document_detail/94475.html)
   * 
   * @example
   * rg-acfmxazb4ph6aiy****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tags.
   */
  tags?: CreateVirtualBorderRouterRequestTags[];
  /**
   * @remarks
   * The account ID of the VBR owner.
   * 
   * The default value is the ID of the current Alibaba Cloud account.
   * 
   * @example
   * 168811111****
   */
  vbrOwnerId?: number;
  /**
   * @remarks
   * The VLAN ID of the VBR. Valid values: **0 to 2999**.
   * 
   * >  Only the owner of the Express Connect circuit can set this parameter. The VLAN IDs of two VBRs of the same the Express Connect circuit must be different.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  vlanId?: number;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      circuitCode: 'CircuitCode',
      clientToken: 'ClientToken',
      description: 'Description',
      enableIpv6: 'EnableIpv6',
      localGatewayIp: 'LocalGatewayIp',
      localIpv6GatewayIp: 'LocalIpv6GatewayIp',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      peerGatewayIp: 'PeerGatewayIp',
      peerIpv6GatewayIp: 'PeerIpv6GatewayIp',
      peeringIpv6SubnetMask: 'PeeringIpv6SubnetMask',
      peeringSubnetMask: 'PeeringSubnetMask',
      physicalConnectionId: 'PhysicalConnectionId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tags: 'Tags',
      vbrOwnerId: 'VbrOwnerId',
      vlanId: 'VlanId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      circuitCode: 'string',
      clientToken: 'string',
      description: 'string',
      enableIpv6: 'boolean',
      localGatewayIp: 'string',
      localIpv6GatewayIp: 'string',
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      peerGatewayIp: 'string',
      peerIpv6GatewayIp: 'string',
      peeringIpv6SubnetMask: 'string',
      peeringSubnetMask: 'string',
      physicalConnectionId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tags: { 'type': 'array', 'itemType': CreateVirtualBorderRouterRequestTags },
      vbrOwnerId: 'number',
      vlanId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

