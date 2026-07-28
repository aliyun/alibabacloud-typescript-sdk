// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVirtualBorderRouterRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource. You must specify at least 1 tag key and can specify at most 20 tag keys. The tag key cannot be an empty string.
   * 
   * A tag key can be up to 128 characters in length. It cannot start with `aliyun` or `acs:` and cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource. You can specify at most 20 tag values. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length. It cannot start with `aliyun` or `acs:` and cannot contain `http://` or `https://`.
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
   * The bandwidth of the VBR instance. Unit: Mbit/s.
   * 
   * - When you create a VBR instance for a dedicated Express Connect circuit, valid values are **50**, **100**, **200**, **300**, **400**, **500**, **1000**, **2048**, **5120**, **8192**, **10240**, **20480**, **40960**, **50120**, **61440**, and **102400**.
   * - When you create a VBR instance for shared Express Connect circuits, you do not need to configure this parameter. The bandwidth of the VBR is the bandwidth of the shared Express Connect circuits that is specified in Settings when the shared Express Connect circuits are created.
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
   * The client generates the value of this parameter. Make sure that the value is unique among different requests.
   * 
   * > If you do not specify this parameter, the system uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may vary for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the VBR instance.  
   * 
   * The description must be 2 to 256 characters in length and must start with a letter or a Chinese character. It cannot start with `http://` or `https://`.
   * 
   * @example
   * desc
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to enable IPv6. Valid values:
   * 
   * - **true**: Enabled.
   * 
   * - **false** (default): Disabled.
   * 
   * @example
   * true
   */
  enableIpv6?: boolean;
  /**
   * @remarks
   * The Alibaba Cloud-side IP address of the VBR instance. Only the VBR owner can specify or modify this property.
   * 
   * This parameter is required when you create a VBR instance for the owner of the Express Connect circuit.
   * 
   * @example
   * 192.168.XX.XX
   */
  localGatewayIp?: string;
  /**
   * @remarks
   * The Alibaba Cloud-side IPv6 address of the VBR instance. Only the VBR owner can specify or modify this property.
   * 
   * This parameter is required when you create a VBR instance for the owner of the Express Connect circuit.
   * 
   * @example
   * 2001:XXXX:3c4d:0015:0000:0000:0000:1a2b
   */
  localIpv6GatewayIp?: string;
  /**
   * @remarks
   * The name of the VBR instance.
   * 
   * The name must be 2 to 128 characters in length and must start with a letter or a Chinese character. It can contain digits, underscores (_), and hyphens (-). It cannot start with `http://` or `https://`.
   * 
   * @example
   * test
   */
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The customer-side IP address of the VBR instance. Only the VBR owner can specify or modify this property.
   * 
   * This parameter is required when you create a VBR instance for the owner of the Express Connect circuit.
   * 
   * @example
   * 116.62.XX.XX
   */
  peerGatewayIp?: string;
  /**
   * @remarks
   * The customer-side IPv6 address of the VBR instance. Only the VBR owner can specify or modify this property.
   * 
   * This parameter is required when you create a VBR instance for the owner of the Express Connect circuit.
   * 
   * @example
   * 2001:XXXX:4:4:4:4:4:4
   */
  peerIpv6GatewayIp?: string;
  /**
   * @remarks
   * The subnet mask for the Alibaba Cloud-side and customer-side IPv6 addresses of the VBR instance. 
   * 
   * The two IPv6 addresses must be in the same subnet.
   * 
   * @example
   * 2408:4004:cc:400::/56
   */
  peeringIpv6SubnetMask?: string;
  /**
   * @remarks
   * The subnet mask for the Alibaba Cloud-side and customer-side IP addresses of the VBR instance. 
   * 
   * The two IP addresses must be in the same subnet.
   * 
   * @example
   * 255.255.255.252
   */
  peeringSubnetMask?: string;
  /**
   * @remarks
   * The instance ID of the Express Connect circuit. 
   * 
   * You can create a VBR instance for a dedicated Express Connect circuit or for shared Express Connect circuits.
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
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the region ID.
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
   * For more information about resource groups, see [What is a resource group?](https://help.aliyun.com/document_detail/2381067.html).
   * 
   * @example
   * rg-acfmxazb4ph6aiy****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tags of the resource.
   */
  tags?: CreateVirtualBorderRouterRequestTags[];
  /**
   * @remarks
   * The account ID of the VBR instance owner.
   * 
   * The default value is the Alibaba Cloud account ID used for logon.
   * 
   * @example
   * 168811111****
   */
  vbrOwnerId?: number;
  /**
   * @remarks
   * The VLAN ID of the VBR instance. Valid values: **0 to 2999**. 
   * 
   * > Only the owner of the Express Connect circuit can specify this parameter. The VLAN IDs of two VBR instances on the same Express Connect circuit must be different.
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

