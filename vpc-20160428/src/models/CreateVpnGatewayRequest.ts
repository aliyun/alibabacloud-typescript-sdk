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
   * > To ensure the successful creation of the VPN gateway instance, enable automatic payment. If automatic payment is disabled, you must manually pay the bill to create the VPN gateway instance.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The bandwidth limit of the VPN gateway. Unit: Mbit/s.
   * 
   * <props="china">- If you want to create an Internet-public VPN gateway, valid values are **5**, **10**, **20**, **50**, **100**, **200**, **500**, and **1000**.
   * <props="china">- If you want to create an internal-public VPN gateway, valid values are **200** and **1000**.
   * <props="intl">- If you want to create an Internet-public VPN gateway, valid values are **10**, **100**, **200**, **500**, and **1000**.
   * <props="intl">- If you want to create an internal-public VPN gateway, valid values are **200** and **1000**.
   * 
   * > In some regions, the maximum bandwidth limit supported by a VPN gateway is 500 Mbit/s. For more information, see [Limits on VPN gateways](https://help.aliyun.com/document_detail/65290.html).
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
   * You can use the client to generate the value, but you must make sure that the value is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request is unique.
   * 
   * @example
   * 02fb3da4****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies the second vSwitch instance to associate with the VPN gateway instance.
   * 
   * - This parameter is required if the current region supports creating IPsec-VPN connections in the dual-tunnel pattern.
   * - You must specify two vSwitch instances distributed in different zones under the VPC to which the VPN gateway instance is associated, to implement zone-level disaster recovery for the IPsec-VPN connection.
   * - For regions that support only one zone, zone-level disaster recovery is not supported. We recommend that you specify two different vSwitch instances in the zone to implement high availability for the IPsec-VPN connection. You can specify the same vSwitch instance.
   * 
   * For more information about the regions and zones that support dual-tunnel IPsec-VPN connections, see [Upgrade an IPsec-VPN connection to the dual-tunnel mode](https://help.aliyun.com/document_detail/2358946.html).
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
   * - **false**: does not enable the IPsec-VPN feature.
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
   * - **false** (default): does not enable the SSL-VPN feature.
   * 
   * @example
   * false
   */
  enableSsl?: boolean;
  /**
   * @remarks
   * <props="china">The billing method of the VPN gateway. Valid value: **PREPAY** (subscription).
   * <props="intl">The billing method of the VPN gateway. Valid value: **POSTPAY** (pay-as-you-go billing method).
   * <props="partner">The billing method of the VPN gateway. Valid value: **POSTPAY** (pay-as-you-go billing method).
   * 
   * <props="china">This parameter is required when you create a VPN gateway.
   * 
   * @example
   * Example value for the China site: PREPAY. Example value for the international site: POSTPAY
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The name of the VPN gateway. Default value: the ID of the VPN gateway.
   * 
   * The name must be 2 to 100 characters in length, and cannot start with http:// or https://. It must start with a letter and can contain letters, digits, underscores (_), hyphens (-), and periods (.). Other special characters are not supported.
   * 
   * @example
   * MYVPN
   */
  name?: string;
  /**
   * @remarks
   * The network type of the VPN gateway. Valid values:
   * 
   * - **public** (default): Internet-public VPN gateway.
   * - **private**: internal-public VPN gateway.
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
   * > This parameter is required when the **InstanceChargeType** parameter is set to **PREPAY**.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The region where the VPN gateway resides. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query region IDs.
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
   * - If you do not specify this parameter, the VPN gateway belongs to the default resource group after it is created.
   * - After the VPN gateway is created, if you create an SSL server, an SSL client certificate, an IPsec server, or an IPsec-VPN connection (referring to the scenario where the IPsec-VPN connection is associated with the VPN gateway) under the VPN gateway, these resources automatically belong to the resource group of the VPN gateway and their resource groups cannot be modified.
   * 
   *   If you change the resource group of the VPN gateway, the resource groups of the preceding resources are also changed.
   * 
   * @example
   * rg-acfmzs372yg****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The maximum number of concurrent SSL-VPN connections. Valid values: **5** (default), **10**, **20**, **50**, **100**, **200**, **500**, and **1000**.
   * 
   * @example
   * 5
   */
  sslConnections?: number;
  /**
   * @remarks
   * The ID of the vSwitch to which the VPN gateway is connected. 
   * 
   * - In regions that support dual-tunnel IPsec-VPN connections, this parameter is required. You must specify a vSwitch and also specify the **DisasterRecoveryVSwitchId** parameter.
   * - In regions that support single-tunnel IPsec-VPN connections, if you do not specify a vSwitch, the system automatically selects a vSwitch in the VPC.
   * 
   * @example
   * vsw-bp1j5miw2bae9s2vt****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The instance ID of the VPC-connected instance to which the VPN gateway belongs.
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
   * - **Normal** (default): standard VPN gateway.
   * <props="china">- **NationalStandard**: Chinese national standard VPN gateway.
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

