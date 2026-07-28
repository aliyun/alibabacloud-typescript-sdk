// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNatGatewayRequestAccessMode extends $dara.Model {
  /**
   * @remarks
   * The access mode. Valid values:
   * 
   * - **route**: route mode.
   * 
   * - **tunnel**: tunnel mode.
   * 
   * > When this field is specified, the **PrivateLinkEnabled** field must be set to **true**.
   * 
   * @example
   * route
   */
  modeValue?: string;
  /**
   * @remarks
   * The tunnel mode type. Valid values:
   * 
   * - **geneve**: Geneve type.
   * 
   * > This value takes effect only when the access mode is tunnel mode.
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
   * The tag key. Specify this parameter in the Tag.N.Key format. N is the index of the tag, with valid values from 1 to 20. The tag key cannot be an empty string. The tag key can be up to 128 characters in length and cannot start with aliyun or acs:. It cannot contain http:// or https://.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value. Specify this parameter in the Tag.N.Value format. N is the index of the tag, with valid values from 1 to 20. The tag value cannot be an empty string. The tag value can be up to 128 characters in length and cannot start with aliyun or acs:. It cannot contain http:// or https://.
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
   * The access mode for reverse access to the VPC NAT gateway.
   * 
   * @example
   * MULTI_BINDED
   */
  accessMode?: CreateNatGatewayRequestAccessMode;
  /**
   * @remarks
   * Subscription-based Internet NAT gateways are no longer available for purchase. This parameter is no longer used.
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
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests.
   * 
   * > If you do not specify this parameter, the system uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may be different for each API request.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF3898
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the NAT gateway.
   * 
   * The description can be empty or 2 to 256 characters in length. It cannot start with `http://` or `https://`.
   * 
   * @example
   * testnat
   */
  description?: string;
  /**
   * @remarks
   * Subscription-based Internet NAT gateways are no longer available for purchase. This parameter is no longer used.
   * 
   * @example
   * 无效参数
   */
  duration?: string;
  /**
   * @remarks
   * The EIP binding pattern of the NAT gateway. Valid values:
   * - **MULTI_BINDED** (default): multi-EIP network interface controller (NIC)-visible pattern.
   * - **NAT**: EIP normal pattern, compatible with IPv4 gateways.
   *   > When the EIP binding pattern of the NAT gateway is set to EIP normal pattern, each EIP occupies a private IP address in the vSwitch to which the NAT gateway belongs. Make sure that the vSwitch has sufficient private IP addresses. If no idle private IP addresses are available in the vSwitch, new EIPs cannot be attached. In EIP normal pattern, a maximum of 50 EIPs can be attached to the NAT gateway.
   * 
   * @example
   * MULTI_BINDED
   */
  eipBindMode?: string;
  /**
   * @remarks
   * Specifies whether to enable ICMP echo reply. Valid values:
   * 
   * - **true** (default): Enabled.
   * - **false**: Disabled.
   * 
   * @example
   * true
   */
  icmpReplyEnabled?: boolean;
  /**
   * @remarks
   * The billing method of the NAT gateway. Valid values:
   * 
   * **PostPaid** (default): pay-as-you-go.
   *           
   * For more information, see [Billing of Internet NAT gateways](https://help.aliyun.com/document_detail/48126.html) and [Billing of VPC NAT gateways](https://help.aliyun.com/document_detail/270913.html).
   * 
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The metering method of the NAT gateway. Valid values: **PayByLcu**: pay-by-data-transfer.
   * 
   * @example
   * PayByLcu
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The IP prefix CIDR block used to create NAT IP addresses in batches. Specify an unassigned reserved CIDR block from the vSwitch to which the NAT gateway belongs.
   * 
   * @example
   * 192.168.0.0/28
   */
  ipv4Prefix?: string;
  /**
   * @remarks
   * The name of the NAT gateway.
   * 
   * The name must be 2 to 128 characters in length and must start with a letter or Chinese character. It can contain digits, underscores (_), and hyphens (-).
   * 
   * If you do not specify this parameter, the system assigns a default name to the NAT gateway.
   * 
   * @example
   * fortest
   */
  name?: string;
  /**
   * @remarks
   * The private IP address occupied by the NAT gateway. Specify an unallocated IP address from the vSwitch CIDR block to which the NAT gateway belongs. If this parameter is left empty, a random IP address is allocated.
   * 
   * @example
   * 192.168.0.2
   */
  natIp?: string;
  /**
   * @remarks
   * The type of the NAT gateway. Valid values: **Enhanced**: enhanced NAT gateway.
   * 
   * @example
   * Enhanced
   */
  natType?: string;
  /**
   * @remarks
   * The type of NAT gateway to create. Valid values:
   * 
   * - **internet**: Internet NAT gateway.
   * 
   * - **intranet**: VPC NAT gateway.
   * 
   * @example
   * internet
   */
  networkType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * Subscription-based Internet NAT gateways are no longer available for purchase. This parameter is no longer used.
   * 
   * @example
   * 无效参数
   */
  pricingCycle?: string;
  /**
   * @remarks
   * Specifies whether to enable PrivateLink. Valid values:
   * 
   * - true: Enabled.
   * 
   * - false (default): Disabled.
   * 
   * @example
   * false
   */
  privateLinkEnabled?: boolean;
  /**
   * @remarks
   * The region ID of the NAT gateway.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the region ID.
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
   * - **false** (default): Disabled.
   * >Notice:  This parameter is deprecated.
   * 
   * @example
   * false
   * 
   * @deprecated
   */
  securityProtectionEnabled?: boolean;
  /**
   * @remarks
   * Subscription-based Internet NAT gateways are no longer available for purchase. This parameter is no longer used.
   * 
   * @example
   * 无效参数
   */
  spec?: string;
  /**
   * @remarks
   * The list of tags.
   * 
   * @example
   * MULTI_BINDED
   */
  tag?: CreateNatGatewayRequestTag[];
  /**
   * @remarks
   * The ID of the vSwitch to which the NAT gateway belongs.
   * 
   * When you create a NAT gateway, you must specify the vSwitch to which the NAT gateway belongs. The system allocates an available private IP address from the vSwitch to the NAT gateway.
   * 
   * - To create a NAT gateway in an existing vSwitch, make sure that the zone to which the vSwitch belongs supports NAT gateways and the vSwitch has active IP addresses.
   * 
   * - If you have not created a vSwitch, create a vSwitch in a zone that supports NAT gateways first, and then specify the vSwitch for the NAT gateway.
   * 
   * > You can call the [ListEnhanhcedNatGatewayAvailableZones](https://help.aliyun.com/document_detail/182292.html) operation to query the zones that support NAT gateways, and call the [DescribeVSwitches](https://help.aliyun.com/document_detail/35748.html) operation to query the available IP address count in a vSwitch.
   * 
   * @example
   * vsw-bp1e3se98n9fq8hle****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC in which you want to create the NAT gateway.
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

