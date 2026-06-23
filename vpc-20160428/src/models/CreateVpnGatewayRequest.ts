// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVpnGatewayRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically pay the bill for the VPN gateway. Valid values:
   * 
   * - **true**: automatically pays the bill for the VPN gateway.
   * 
   * - **false** (default): does not automatically pay the bill for the VPN gateway.
   * 
   * > To successfully create a VPN gateway instance, enable automatic payment. If you disable automatic payment, you must manually pay the bill to create the VPN gateway instance.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The bandwidth specification of the VPN gateway. Unit: Mbit/s.
   * 
   * <props="china">- If you want to create a public VPN gateway, valid values are **5**, **10**, **20**, **50**, **100**, **200**, **500**, and **1000**.
   * <props="china">- If you want to create a private VPN gateway, valid values are **200** and **1000**.
   * <props="intl">- If you want to create a public VPN gateway, valid values are **10**, **100**, **200**, **500**, and **1000**.
   * <props="intl">- If you want to create a private VPN gateway, valid values are **200** and **1000**.
   * 
   * >The maximum bandwidth specification supported by VPN gateways in some regions is 500 Mbit/s. For more information, see [VPN gateway limits](https://help.aliyun.com/document_detail/65290.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 5
   */
  bandwidth?: number;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may be different for each API request.
   * 
   * @example
   * 02fb3da4****
   */
  clientToken?: string;
  /**
   * @remarks
   * The second vSwitch associated with the VPN VPC-connected instance.
   * 
   * - If the current region supports dual-tunnel IPsec-VPN connections, this parameter is required.
   * - You must specify two vSwitches in different zones within the VPC associated with the VPN VPC-connected instance to implement zone-level disaster recovery for IPsec-VPN connections.
   * - For regions that support only one zone, zone-level disaster recovery is not supported. Specify two different vSwitches in the same zone to achieve high availability for IPsec-VPN connections. You can also specify the same vSwitch.
   * 
   * For information about the regions and zones that support dual-tunnel IPsec-VPN connections, see [Upgrade an IPsec-VPN connection to dual-tunnel mode](https://help.aliyun.com/document_detail/2358946.html).
   * 
   * @example
   * vsw-p0wiz7obm0tbimu4r****
   */
  disasterRecoveryVSwitchId?: string;
  /**
   * @remarks
   * Specifies whether to enable the IPsec-VPN feature. Valid values:
   * 
   * - **true** (default): enables the IPsec-VPN feature.
   * 
   * - **false**: disables the IPsec-VPN feature.
   * 
   * @example
   * true
   */
  enableIpsec?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the SSL-VPN feature. Valid values:
   * 
   * - **true**: enables the SSL-VPN feature.
   * 
   * - **false** (default): disables the SSL-VPN feature.
   * 
   * @example
   * false
   */
  enableSsl?: boolean;
  /**
   * @remarks
   * <props="china">The billing method of the VPN gateway. Set the value to **PREPAY**, which specifies the subscription billing method.
   * <props="intl">The billing method of the VPN gateway. Set the value to **POSTPAY**, which specifies the pay-as-you-go billing method.
   * <props="partner">The billing method of the VPN gateway. Set the value to **POSTPAY**, which specifies the pay-as-you-go billing method.
   * 
   * <props="china">This parameter is required when you create a VPN gateway.
   * 
   * @example
   * 中国站示例值：PREPAY，国际站示例值：POSTPAY
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The name of the VPN gateway. The default value is the ID of the VPN gateway.
   * 
   * The name must be 2 to 100 characters in length. It cannot start with `http://` or `https://`. It must start with an uppercase or lowercase letter and can contain uppercase and lowercase letters, digits, underscores (_), hyphens (-), and periods (.). Other special characters are not supported.
   * 
   * @example
   * MYVPN
   */
  name?: string;
  /**
   * @remarks
   * The network type of the VPN gateway. Valid values:
   * 
   * - **public** (default): public VPN gateway.
   * - **private**: private VPN gateway.
   * 
   * @example
   * public
   */
  networkType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The subscription duration. Unit: months. Valid values: **1** to **9**, **12**, **24**, and **36**.
   * 
   * <props="china">
   * > This parameter is required if **InstanceChargeType** is set to **PREPAY**..
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The region ID of the VPN gateway. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the VPN gateway belongs.
   * 
   * - You can call the [ListResourceGroups](https://help.aliyun.com/document_detail/158855.html) operation to query resource group IDs.
   * - If you do not specify a resource group ID, the VPN gateway belongs to the default resource group after it is created.
   * - After the VPN gateway is created, if you create SSL servers, SSL client certificates, IPsec servers, or IPsec-VPN connections (when the IPsec-VPN connection is associated with the VPN gateway) under the VPN gateway, these resources belong to the same resource group as the VPN gateway. The resource group of these resources cannot be modified.
   * 
   *   If you change the resource group of the VPN gateway, the resource group of the preceding resources is also changed.
   * 
   * @example
   * rg-acfmzs372yg****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The maximum number of clients that can be simultaneously connected. Valid values: **5** (default), **10**, **20**, **50**, **100**, **200**, **500**, and **1000**.
   * 
   * @example
   * 5
   */
  sslConnections?: number;
  /**
   * @remarks
   * The vSwitch associated with the VPN gateway instance. 
   * 
   * - In regions that support dual-tunnel IPsec-VPN connections, this parameter is required. You must specify a vSwitch and also specify the **DisasterRecoveryVSwitchId** parameter.
   * - In regions that support only single-tunnel IPsec-VPN connections, if you do not specify a vSwitch, the system automatically selects a vSwitch from the VPC.
   * 
   * @example
   * vsw-bp1j5miw2bae9s2vt****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC-connected instance to which the VPN gateway belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp1ub1yt9cvakoelj****
   */
  vpcId?: string;
  /**
   * @remarks
   * The type of the VPN gateway. Valid values:
   * - **Normal** (default): standard.
   * <props="china">- **NationalStandard**: Chinese SM-based..
   * 
   * @example
   * Normal
   */
  vpnType?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      bandwidth: 'Bandwidth',
      clientToken: 'ClientToken',
      disasterRecoveryVSwitchId: 'DisasterRecoveryVSwitchId',
      enableIpsec: 'EnableIpsec',
      enableSsl: 'EnableSsl',
      instanceChargeType: 'InstanceChargeType',
      name: 'Name',
      networkType: 'NetworkType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      period: 'Period',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sslConnections: 'SslConnections',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      vpnType: 'VpnType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      bandwidth: 'number',
      clientToken: 'string',
      disasterRecoveryVSwitchId: 'string',
      enableIpsec: 'boolean',
      enableSsl: 'boolean',
      instanceChargeType: 'string',
      name: 'string',
      networkType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      period: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sslConnections: 'number',
      vSwitchId: 'string',
      vpcId: 'string',
      vpnType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

