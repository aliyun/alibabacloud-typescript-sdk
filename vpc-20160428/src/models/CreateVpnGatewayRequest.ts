// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVpnGatewayRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * > To create a VPN gateway, we recommend that you enable automatic payment. If you disable automatic payment, you must manually pay the bill to create the VPN gateway.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The maximum bandwidth of the VPN gateway. Unit: Mbit/s.
   * 
   * *   If you want to create a public VPN gateway, valid values are **10**, **100**, **200**, **500**, and **1000**.
   * *   If you want to create a private VPN gateway, valid values are **200** and **1000**.
   * 
   * >  The maximum bandwidth supported by VPN gateways in some regions is 500 Mbit/s. For more information, see [VPN gateway limits](https://help.aliyun.com/document_detail/65290.html).
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
   * You can use the client to generate a value, and you must make sure that each request has a unique token value. The client token can contain only ASCII characters.
   * 
   * >  If you do not specify this parameter, the system automatically uses the value of **RequestId** as the value of **ClientToken**. The value of **RequestId** for each API request is different.
   * 
   * @example
   * 02fb3da4****
   */
  clientToken?: string;
  /**
   * @remarks
   * The second vSwitch with which you want to associate the VPN gateway.
   * 
   * *   If you call this operation in a region that supports the IPsec-VPN connections in dual-tunnel mode, this parameter is required.
   * *   You need to specify two vSwitches in different zones in the virtual private cloud (VPC) that is associated with the VPN gateway to implement disaster recovery across zones.
   * *   For a region that supports only one zone, disaster recovery across zones is not supported. We recommend that you specify two vSwitches in the zone to implement high availability. You can specify the same vSwitch.
   * 
   * For more information about the regions and zones that support the IPsec-VPN connections in dual-tunnel mode, see [IPsec-VPN connections support the dual-tunnel mode](https://help.aliyun.com/document_detail/2358946.html).
   * 
   * @example
   * vsw-p0wiz7obm0tbimu4r****
   */
  disasterRecoveryVSwitchId?: string;
  /**
   * @remarks
   * Specifies whether to enable IPsec-VPN for the VPN gateway. Valid values:
   * 
   * *   **true** (default)
   * *   **false**
   * 
   * @example
   * true
   */
  enableIpsec?: boolean;
  /**
   * @remarks
   * Specifies whether to enable SSL-VPN. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * false
   */
  enableSsl?: boolean;
  /**
   * @remarks
   * The billing method of the VPN gateway. Set the value to **POSTPAY**, which specifies the pay-as-you-go billing method.
   * 
   * @example
   * Example value for the Alibaba Cloud China site: PREPAY. Example value for the Alibaba Cloud International site: POSTPAY.
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The name of the VPN gateway. The default value is the ID of the VPN gateway.
   * 
   * The name must be 2 to 100 characters in length and cannot start with `http://` or `https://`. It must start with a letter and can contain letters, digits, underscores (_), hyphens (-), and periods (.). Other special characters are not supported.
   * 
   * @example
   * MYVPN
   */
  name?: string;
  /**
   * @remarks
   * The network type of the VPN gateway. Valid values:
   * 
   * *   **public** (default)
   * *   **private**
   * 
   * @example
   * public
   */
  networkType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The subscription duration. Unit: month. Valid values: **1** to **9**, **12**, **24**, and **36**.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The region ID of the VPN gateway. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
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
   * *   You can call the [ListResourceGroups](https://help.aliyun.com/document_detail/158855.html) operation to query resource group IDs.
   * 
   * *   If you do not specify a resource group ID, the VPN gateway belongs to the default resource group.
   * 
   * *   After the VPN gateway is created, the following resources also belong to the resource group and you cannot change the resource group: SSL servers, SSL client certificates, IPsec servers, and IPsec-VPN connections.
   * 
   *     If you move the VPN gateway to a new resource group, the preceding resources are also moved to the new resource group.
   * 
   * @example
   * rg-acfmzs372yg****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The maximum number of clients that can be connected at the same time. Valid values: **5** (default), **10**, **20**, **50**, **100**, **200**, **500**, and **1000**.
   * 
   * @example
   * 5
   */
  sslConnections?: number;
  /**
   * @remarks
   * The vSwitch with which you want to associate the VPN gateway.
   * 
   * *   If you call this operation in a region that supports the IPsec-VPN connections in dual-tunnel mode, this parameter is required. You must specify a vSwitch and specify **DisasterRecoveryVSwitchId**.
   * *   If you call this operation in a region that supports the IPsec-VPN connections in single-tunnel mode and do not specify a vSwitch, the system automatically specifies a vSwitch.
   * 
   * @example
   * vsw-bp1j5miw2bae9s2vt****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) where you want to create the VPN gateway.
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
   * 
   * Set the value to **Normal** (default), which specifies a standard NAT gateway.
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

