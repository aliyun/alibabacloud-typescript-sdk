// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNatGatewayShrinkRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. The format of Tag.N.Key when you call the operation. Valid values of N: 1 to 20. The tag key cannot be an empty string. The tag key can be up to 128 characters in length and cannot contain http:// or https://. The tag key cannot start with acs: or aliyun.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value. The format of Tag.N.Value when you call the operation. Valid values of N: 1 to 20. The tag key cannot be an empty string. The tag key can be up to 128 characters in length and cannot contain http:// or https://. The tag key cannot start with acs: or aliyun.
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
   * Subscription Internet NAT gateways are no longer available for purchase. Ignore this parameter.
   * 
   * @example
   * Invalid parameter.
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests.
   * 
   * >  If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF3898
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the NAT gateway.
   * 
   * You can leave this parameter empty or enter a description. If you enter a description, the description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * testnat
   */
  description?: string;
  /**
   * @remarks
   * Subscription Internet NAT gateways are no longer available for purchase. Ignore this parameter.
   * 
   * @example
   * Invalid parameter.
   */
  duration?: string;
  /**
   * @remarks
   * The mode in which the EIP is associated with the NAT gateway. Valid values:
   * 
   * - **MULTI_BINDED**(default): the multi-EIP-to-ENI mode.
   * 
   * - **NAT**: NAT mode, which is compatible with IPv4 addresses.
   * 
   * > If an EIP is associated with a NAT gateway in NAT mode, the EIP occupies a private IP address of the vSwitch where the NAT gateway is deployed. Make sure that the vSwitch has sufficient private IP addresses. Otherwise, EIPs cannot be associated with the NAT gateway. In NAT mode, a maximum number of 50 EIPs can be associated with each NAT gateway.
   * 
   * @example
   * MULTI_BINDED
   */
  eipBindMode?: string;
  /**
   * @remarks
   * Specifies whether to enable ICMP retrieval. Valid values:
   * 
   * *   **true** (default)
   * *   **false**
   * 
   * @example
   * true
   */
  icmpReplyEnabled?: boolean;
  /**
   * @remarks
   * The billing method of the NAT gateway.
   * 
   * Set the value to **PostPaid** (pay-as-you-go), which is the default value.
   * 
   * For more information, see [Internet NAT gateway billing](https://help.aliyun.com/document_detail/48126.html) and [VPC NAT gateway billing](https://help.aliyun.com/document_detail/270913.html).
   * 
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The metering method of the NAT gateway. Set the value to **PayByLcu**, which specifies the pay-by-CU metering method.
   * 
   * @example
   * PayByLcu
   */
  internetChargeType?: string;
  /**
   * @remarks
   * Create an IP prefix address segment for batch creation of NAT IPs. Please use the reserved and unallocated network segments in the VSwitch where the NAT is located.
   * 
   * @example
   * 192.168.0.0/28
   */
  ipv4Prefix?: string;
  /**
   * @remarks
   * The name of the NAT gateway.
   * 
   * The name must be 2 to 128 characters in length and can contain letters, digits, underscores (_), and hyphens (-). The name must start with a letter.
   * 
   * If this parameter is not set, the system assigns a default name to the NAT gateway.
   * 
   * @example
   * fortest
   */
  name?: string;
  /**
   * @remarks
   * The private IP address occupied by the NAT gateway. Please use an unassigned IP from the subnet where the NAT is located. If left empty, an IP address will be randomly assigned.
   * 
   * @example
   * 192.168.0.x
   */
  natIp?: string;
  /**
   * @remarks
   * The type of NAT gateway. Set the value to **Enhanced**, which specifies enhanced NAT gateway.
   * 
   * @example
   * Enhanced
   */
  natType?: string;
  /**
   * @remarks
   * The network type of the NAT gateway. Valid values:
   * 
   * *   **internet**: Internet
   * *   **intranet**: VPC
   * 
   * @example
   * internet
   */
  networkType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * Subscription Internet NAT gateways are no longer available for purchase. Ignore this parameter.
   * 
   * @example
   * Invalid parameter.
   */
  pricingCycle?: string;
  /**
   * @remarks
   * PrivateLink is not supported by default. If you set the value to true, PrivateLink is supported.
   * 
   * @example
   * false
   */
  privateLinkEnabled?: boolean;
  /**
   * @remarks
   * The region ID of the NAT gateway.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to obtain the region ID.
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
   * *   **false** (default)>Notice: This parameter is deprecated.
   * 
   * @example
   * false
   * 
   * @deprecated
   */
  securityProtectionEnabled?: boolean;
  /**
   * @remarks
   * Subscription Internet NAT gateways are no longer available for purchase. Ignore this parameter.
   * 
   * @example
   * Invalid parameter.
   */
  spec?: string;
  /**
   * @remarks
   * The tags.
   * 
   * @example
   * MULTI_BINDED
   */
  tag?: CreateNatGatewayShrinkRequestTag[];
  /**
   * @remarks
   * The ID of the vSwitch to which the NAT gateway is attached.
   * 
   * When you create a NAT gateway, you must specify a vSwitch for the NAT gateway. Then, the system assigns an idle private IP address from the vSwitch to the NAT gateway.
   * 
   * *   To attach the NAT gateway to an existing vSwitch, make sure that the zone to which the vSwitch belongs supports NAT gateways. In addition, the vSwitch must have idle IP addresses.
   * *   If no vSwitch exists in the VPC, create a vSwitch in a zone that supports NAT gateways. Then, specify the vSwitch for the NAT gateway.
   * 
   * >  You can call the [ListEnhanhcedNatGatewayAvailableZones](https://help.aliyun.com/document_detail/182292.html) operation to query zones that support NAT gateways. You can call the [DescribeVSwitches](https://help.aliyun.com/document_detail/35748.html) operation to query idle IP addresses in a vSwitch.
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

