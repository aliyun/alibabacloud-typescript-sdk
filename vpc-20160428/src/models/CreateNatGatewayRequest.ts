// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNatGatewayRequestAccessMode extends $dara.Model {
  /**
   * @remarks
   * The access mode. Valid values:
   * 
   * - **route**
   * 
   * - **tunnel**
   * 
   * > This parameter is valid only when **PrivateLinkEnabled** is set to **true**.
   * 
   * @example
   * route
   */
  modeValue?: string;
  /**
   * @remarks
   * The type of tunnel. Valid value:
   * 
   * - **geneve**: Geneve.
   * 
   * > This parameter is valid only when the access mode is tunnel.
   * 
   * @example
   * geneve
   */
  tunnelType?: string;
  static names(): { [key: string]: string } {
    return {
      modeValue: 'ModeValue',
      tunnelType: 'TunnelType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modeValue: 'string',
      tunnelType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNatGatewayRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. You can specify up to 20 tag keys. The tag key cannot be an empty string. The tag key must be 1 to 128 characters in length and cannot start with `aliyun` or `acs:`. The tag key cannot contain `http://` or `https://`.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value. You can specify up to 20 tag values. The tag value can be an empty string. The tag value must be 0 to 128 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * TestValue
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

export class CreateNatGatewayRequest extends $dara.Model {
  /**
   * @remarks
   * The access mode of the VPC NAT gateway for reverse endpoint access.
   * 
   * @example
   * MULTI_BINDED
   */
  accessMode?: CreateNatGatewayRequestAccessMode;
  /**
   * @remarks
   * Subscription-based public NAT gateways are no longer available for purchase. This parameter is deprecated.
   * 
   * @example
   * 无效参数
   */
  autoPay?: boolean;
  availabilityMode?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can create the token, but you must make sure that the token is unique among different requests.
   * 
   * > If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF3898
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the NAT gateway.
   * 
   * The description must be 2 to 256 characters in length. It cannot start with `http://` or `https://`.
   * 
   * @example
   * testnat
   */
  description?: string;
  /**
   * @remarks
   * Subscription-based public NAT gateways are no longer available for purchase. This parameter is deprecated.
   * 
   * @example
   * 无效参数
   */
  duration?: string;
  /**
   * @remarks
   * The mode in which the EIP is associated with the NAT gateway. Valid values:
   * 
   * - **MULTI_BINDED** (default): the multi-EIP-to-ENI mode.
   * 
   * - **NAT**: the EIP-to-NAT gateway mode. This mode is compatible with IPv4 gateways.
   * 
   *   > If the EIP is associated with the NAT gateway in EIP-to-NAT gateway mode, the EIP occupies a private IP address of the vSwitch to which the NAT gateway belongs. Make sure that the vSwitch has sufficient private IP addresses. Otherwise, the EIP fails to be associated. In EIP-to-NAT gateway mode, a NAT gateway can be associated with up to 50 EIPs.
   * 
   * @example
   * MULTI_BINDED
   */
  eipBindMode?: string;
  /**
   * @remarks
   * Specifies whether to enable ICMP reply. Valid values:
   * 
   * - **true** (default): enables ICMP reply.
   * 
   * - **false**: disables ICMP reply.
   * 
   * @example
   * true
   */
  icmpReplyEnabled?: boolean;
  /**
   * @remarks
   * The billing method of the NAT gateway. Set the value to:
   * 
   * **PostPaid** (default): pay-as-you-go.
   * 
   * For more information, see [Billing of public NAT gateways](https://help.aliyun.com/document_detail/48126.html) and [Billing of VPC NAT gateways](https://help.aliyun.com/document_detail/270913.html).
   * 
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The billing method of the NAT gateway. Set the value to **PayByLcu**, which indicates that the NAT gateway is a pay-as-you-go NAT gateway and is measured in LCUs.
   * 
   * @example
   * PayByLcu
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The IP address prefix. NAT IP addresses are created from the prefix. Use a reserved CIDR block that is not allocated in the vSwitch to which the NAT gateway belongs.
   * 
   * @example
   * 192.168.0.0/28
   */
  ipv4Prefix?: string;
  /**
   * @remarks
   * The name of the NAT gateway.
   * 
   * Must be 2 to 128 characters in length, start with a letter or a Chinese character, and can contain digits, underscores (_), and hyphens (-).
   * 
   * If you do not specify this parameter, the system automatically specifies a name for the NAT gateway.
   * 
   * @example
   * fortest
   */
  name?: string;
  /**
   * @remarks
   * The private IP address of the NAT gateway. Use an idle IP address from the CIDR block of the vSwitch to which the NAT gateway belongs. If this parameter is left empty, an IP address is randomly assigned.
   * 
   * @example
   * 192.168.0.2
   */
  natIp?: string;
  /**
   * @remarks
   * The type of NAT gateway. Set the value to **Enhanced**, which specifies an enhanced NAT gateway.
   * 
   * @example
   * Enhanced
   */
  natType?: string;
  /**
   * @remarks
   * The type of the NAT gateway to be created. Valid values:
   * 
   * - **internet**: a public NAT gateway
   * 
   * - **intranet**: a VPC NAT gateway
   * 
   * @example
   * internet
   */
  networkType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * Subscription-based public NAT gateways are no longer available for purchase. This parameter is no longer used.
   * 
   * @example
   * 无效参数
   */
  pricingCycle?: string;
  /**
   * @remarks
   * Specifies whether to enable PrivateLink. Valid values:
   * 
   * - true: enables PrivateLink.
   * 
   * - false (default): disables PrivateLink.
   * 
   * @example
   * false
   */
  privateLinkEnabled?: boolean;
  /**
   * @remarks
   * The ID of the region in which to create the NAT gateway.
   * 
   * Call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to obtain the region ID.
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
   * Specifies whether to enable the firewall feature. Valid values:
   * 
   * - **false** (default): disables the firewall feature.
   * 
   *   >Notice: 
   * 
   *   This parameter is deprecated.
   * 
   * @example
   * false
   * 
   * @deprecated
   */
  securityProtectionEnabled?: boolean;
  /**
   * @remarks
   * Subscription-based public NAT gateways are no longer available for purchase. This parameter is deprecated.
   * 
   * @example
   * 无效参数
   */
  spec?: string;
  /**
   * @remarks
   * The tags.
   * 
   * @example
   * MULTI_BINDED
   */
  tag?: CreateNatGatewayRequestTag[];
  /**
   * @remarks
   * The ID of the vSwitch to which the NAT gateway belongs.
   * 
   * When you create a NAT gateway, you must specify a vSwitch to which the NAT gateway belongs. The system then assigns a private IP address to the NAT gateway from the vSwitch.
   * 
   * - To create a NAT gateway in an existing vSwitch, make sure that the zone to which the vSwitch belongs supports NAT gateways and that the vSwitch has idle IP addresses.
   * 
   * - If you have not created a vSwitch, create a vSwitch in a zone that supports NAT gateways and then specify the vSwitch.
   * 
   * > Call the [ListEnhancedNatGatewayAvailableZones](https://help.aliyun.com/document_detail/182292.html) operation to query available zones and [DescribeVSwitches](https://help.aliyun.com/document_detail/35748.html) to query the number of idle IP addresses in a vSwitch.
   * 
   * @example
   * vsw-bp1e3se98n9fq8hle****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) where you want to create the NAT gateway.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp1di7uewzmtvfuq8****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      accessMode: 'AccessMode',
      autoPay: 'AutoPay',
      availabilityMode: 'AvailabilityMode',
      clientToken: 'ClientToken',
      description: 'Description',
      duration: 'Duration',
      eipBindMode: 'EipBindMode',
      icmpReplyEnabled: 'IcmpReplyEnabled',
      instanceChargeType: 'InstanceChargeType',
      internetChargeType: 'InternetChargeType',
      ipv4Prefix: 'Ipv4Prefix',
      name: 'Name',
      natIp: 'NatIp',
      natType: 'NatType',
      networkType: 'NetworkType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pricingCycle: 'PricingCycle',
      privateLinkEnabled: 'PrivateLinkEnabled',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityProtectionEnabled: 'SecurityProtectionEnabled',
      spec: 'Spec',
      tag: 'Tag',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessMode: CreateNatGatewayRequestAccessMode,
      autoPay: 'boolean',
      availabilityMode: 'string',
      clientToken: 'string',
      description: 'string',
      duration: 'string',
      eipBindMode: 'string',
      icmpReplyEnabled: 'boolean',
      instanceChargeType: 'string',
      internetChargeType: 'string',
      ipv4Prefix: 'string',
      name: 'string',
      natIp: 'string',
      natType: 'string',
      networkType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pricingCycle: 'string',
      privateLinkEnabled: 'boolean',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityProtectionEnabled: 'boolean',
      spec: 'string',
      tag: { 'type': 'array', 'itemType': CreateNatGatewayRequestTag },
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(this.accessMode && typeof (this.accessMode as any).validate === 'function') {
      (this.accessMode as any).validate();
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

