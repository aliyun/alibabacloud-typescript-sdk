// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNatGatewayShrinkRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. You can use the Tag.N.Key format when you call API operations. Valid values of N: 1 to 20. If you specify this parameter, it cannot be an empty string. The tag key can be up to 128 characters in length. It cannot start with aliyun or acs:, and cannot contain http:// or https://.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value. You can use the Tag.N.Value format when you call API operations. Valid values of N: 1 to 20. If you specify this parameter, it cannot be an empty string. The tag value can be up to 128 characters in length. It cannot start with aliyun or acs:, and cannot contain http:// or https://.
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

export class CreateNatGatewayShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The access mode for reverse access to the VPC NAT gateway.
   * 
   * @example
   * MULTI_BINDED
   */
  accessModeShrink?: string;
  /**
   * @remarks
   * Subscription Internet NAT gateways are no longer available for purchase. This parameter is no longer used.
   * 
   * >Notice:  This parameter is deprecated.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The disaster recovery type of the NAT gateway. Valid values:
   * 
   * - **CrossAZ**: cross-zone disaster recovery.
   * - **SingleAZ**: single-zone disaster recovery.
   * 
   * @example
   * CrossAZ
   */
  availabilityMode?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must ensure that it is unique among different requests.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request may be different.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF3898
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the NAT gateway.
   * 
   * The description can be left empty or be 2 to 256 characters in length. It cannot start with `http://` or `https://`.
   * 
   * @example
   * testnat
   */
  description?: string;
  /**
   * @remarks
   * Subscription Internet NAT gateways are no longer available for purchase. This parameter is no longer used.
   * 
   * @example
   * Invalid parameter
   */
  duration?: string;
  /**
   * @remarks
   * The EIP binding mode of the NAT gateway. Valid values:
   * - **MULTI_BINDED** (default): multi-EIP NIC-visible mode.
   * - **NAT**: NAT mode, which is compatible with IPv4 gateways.
   *   > When the EIP binding mode of the NAT gateway is set to NAT mode, the EIP occupies a private IP address of the vSwitch to which the NAT gateway belongs. Make sure that the vSwitch has sufficient private IP addresses. If the vSwitch to which the NAT gateway belongs does not have available idle private IP addresses, you cannot bind new EIPs. When the EIP binding mode of the NAT gateway is set to NAT mode, the NAT gateway supports a maximum of 50 EIPs.
   * 
   * @example
   * MULTI_BINDED
   */
  eipBindMode?: string;
  /**
   * @remarks
   * Specifies whether to enable ICMP echo reply. Valid values:
   * 
   * - **true** (default): enables ICMP echo reply.
   * - **false**: disables ICMP echo reply.
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
   * For more information, see [Internet NAT gateway billing](https://help.aliyun.com/document_detail/48126.html) and [VPC NAT gateway billing](https://help.aliyun.com/document_detail/270913.html).
   * 
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The metering method of the NAT gateway. Set the value to **PayByLcu**, which specifies pay-by-LCU.
   * 
   * @example
   * PayByLcu
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The IP prefix CIDR block that is used to create NAT IP addresses in batches. Use an unallocated reserved CIDR block in the vSwitch to which the NAT gateway belongs.
   * > This parameter takes effect only for VPC NAT gateways.
   * 
   * @example
   * 192.168.0.0/28
   */
  ipv4Prefix?: string;
  /**
   * @remarks
   * The name of the NAT gateway.
   * 
   * The name must be 2 to 128 characters in length. It must start with a letter or a Chinese character, and can contain digits, underscores (_), and hyphens (-).
   * 
   * If you do not specify this parameter, the system generates a default name for the NAT gateway.
   * 
   * @example
   * fortest
   */
  name?: string;
  /**
   * @remarks
   * The private IP address that is allocated to the NAT gateway. Use an unallocated IP address in the vSwitch CIDR block of the NAT gateway. If this parameter is left empty, an IP address is randomly allocated.
   * > This parameter takes effect only for VPC NAT gateways.
   * 
   * @example
   * 192.168.0.2
   */
  natIp?: string;
  /**
   * @remarks
   * The type of the NAT gateway. Set the value to **Enhanced**, which specifies an enhanced NAT gateway.
   * 
   * @example
   * Enhanced
   */
  natType?: string;
  /**
   * @remarks
   * The type of the NAT gateway that you want to create. Valid values:
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
   * Subscription Internet NAT gateways are no longer available for purchase. This parameter is no longer used.
   * 
   * @example
   * Invalid parameter
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
   * The region ID of the NAT gateway.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query region IDs.
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
   * Subscription Internet NAT gateways are no longer available for purchase. This parameter is no longer used.
   * 
   * @example
   * Invalid parameter
   */
  spec?: string;
  /**
   * @remarks
   * The list of tags.
   * 
   * @example
   * MULTI_BINDED
   */
  tag?: CreateNatGatewayShrinkRequestTag[];
  /**
   * @remarks
   * The ID of the vSwitch to which the NAT gateway belongs.
   * 
   * When you create a NAT gateway, you must specify the vSwitch to which the NAT gateway belongs. The system allocates an idle private IP address from the vSwitch to the NAT gateway.
   * 
   * - If you want to create a NAT gateway in an existing vSwitch, make sure that the zone to which the vSwitch belongs supports NAT gateways and the vSwitch has available IP addresses.
   * 
   * - If you have not created a vSwitch, create a vSwitch in a zone that supports NAT gateways, and then specify the vSwitch to which the NAT gateway belongs.
   * 
   * > You can call the [ListEnhanhcedNatGatewayAvailableZones](https://help.aliyun.com/document_detail/182292.html) operation to query the zones that support NAT gateways, and call the [DescribeVSwitches](https://help.aliyun.com/document_detail/35748.html) operation to query the available IP address count in a vSwitch.
   * 
   * @example
   * vsw-bp1e3se98n9fq8hle****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC where you want to create the NAT gateway.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp1di7uewzmtvfuq8****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      accessModeShrink: 'AccessMode',
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
      accessModeShrink: 'string',
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
      tag: { 'type': 'array', 'itemType': CreateNatGatewayShrinkRequestTag },
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

