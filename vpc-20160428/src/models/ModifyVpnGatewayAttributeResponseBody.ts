// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyVpnGatewayAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * Specifies whether BGP routes are automatically propagated to the VPC. Valid values:
   * 
   * - **true**: automatically propagated
   * 
   * - **false**: not automatically propagated
   * 
   * @example
   * true
   */
  autoPropagate?: boolean;
  /**
   * @remarks
   * The billing status of the VPN gateway instance. Valid values:
   * 
   * - **Normal**: normal
   * - **FinancialLocked**: locked due to overdue payments
   * 
   * @example
   * Normal
   */
  businessStatus?: string;
  /**
   * @remarks
   * The timestamp when the VPN gateway was created. Unit: milliseconds.
   * 
   * The timestamp follows the UNIX time format. It indicates the total number of milliseconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1492753580000
   */
  createTime?: number;
  /**
   * @remarks
   * The description of the VPN gateway.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The second IP address assigned by the system to the VPN gateway for creating an IPsec-VPN connection.
   * 
   * This parameter is returned only for VPN gateways that support dual-tunnel IPsec-VPN connections.
   * 
   * @example
   * 116.11.XX.XX
   */
  disasterRecoveryInternetIp?: string;
  /**
   * @remarks
   * The ID of the second vSwitch associated with the VPN gateway.
   * 
   * This parameter is returned only for VPN gateways that support dual-tunnel IPsec-VPN connections.
   * 
   * @example
   * vsw-p0w95ql6tmr2ludkt****
   */
  disasterRecoveryVSwitchId?: string;
  /**
   * @remarks
   * Specifies whether the BGP feature is enabled for the VPN gateway. Valid values:
   * 
   * - **true**: enabled
   * 
   * - **false**: disabled
   * 
   * @example
   * true
   */
  enableBgp?: boolean;
  /**
   * @remarks
   * The UNIX timestamp of when the VPN gateway instance expires. Unit: milliseconds.
   * 
   * The UNIX timestamp follows the UNIX time format. It indicates the total number of milliseconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC until the VPN gateway instance expires.
   * 
   * @example
   * 1495382400000
   */
  endTime?: number;
  /**
   * @remarks
   * - If the VPN gateway supports single-tunnel IPsec-VPN connections, this parameter indicates the IP address of the VPN gateway, which can be used to create an IPsec-VPN connection or an SSL-VPN connection.
   * 
   * - If the VPN gateway supports dual-tunnel IPsec-VPN connections, this parameter indicates the first IP address used to create an IPsec-VPN connection. It cannot be used to create an SSL-VPN connection.
   * 
   *     If the VPN gateway supports dual-tunnel IPsec-VPN connections, the system assigns two IPsec addresses to the VPN gateway for creating dual-tunnel IPsec-VPN connections.
   * 
   * @example
   * 116.62.XX.XX
   */
  internetIp?: string;
  /**
   * @remarks
   * The private IP address of the vSwitch that is occupied when the system deploys the VPN gateway.
   * 
   * This parameter is returned only for VPN gateways that support only single-tunnel IPsec-VPN connections and have the IPsec-VPN feature enabled.
   * 
   * @example
   * 172.16.10.46
   */
  intranetIp?: string;
  /**
   * @remarks
   * The name of the VPN gateway.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 54B48E3D-DF70-471B-AA93-08E683A1B457
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the VPN gateway belongs.
   * 
   * You can call the [ListResourceGroups](https://help.aliyun.com/document_detail/158855.html) operation to query resource group information.
   * 
   * @example
   * rg-acfmzs372yg****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The bandwidth specification of the VPN gateway. Unit: Mbit/s.
   * 
   * @example
   * 5M
   */
  spec?: string;
  /**
   * @remarks
   * The IP address of the SSL-VPN connection.
   * 
   * This parameter is returned only after the SSL-VPN feature is enabled for a VPN gateway instance of the public network type that supports dual-tunnel IPsec-VPN connections.
   * 
   * @example
   * 116.33.XX.XX
   */
  sslVpnInternetIp?: string;
  /**
   * @remarks
   * The status of the VPN gateway. Valid values:
   * 
   * - **init**: initializing
   * - **provisioning**: preparing
   * - **active**: active
   * - **updating**: updating
   * - **deleting**: deleting
   * 
   * @example
   * active
   */
  status?: string;
  /**
   * @remarks
   * The ID of the vSwitch associated with the VPN gateway.
   * 
   * @example
   * vsw-bp1y9ovl1cu9ou4tv****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC to which the VPN gateway belongs.
   * 
   * @example
   * vpc-bp1ub1yt9cvakoel****
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the VPN gateway.
   * 
   * @example
   * vpn-bp1q8bgx4xnkm2ogj****
   */
  vpnGatewayId?: string;
  static names(): { [key: string]: string } {
    return {
      autoPropagate: 'AutoPropagate',
      businessStatus: 'BusinessStatus',
      createTime: 'CreateTime',
      description: 'Description',
      disasterRecoveryInternetIp: 'DisasterRecoveryInternetIp',
      disasterRecoveryVSwitchId: 'DisasterRecoveryVSwitchId',
      enableBgp: 'EnableBgp',
      endTime: 'EndTime',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      name: 'Name',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      spec: 'Spec',
      sslVpnInternetIp: 'SslVpnInternetIp',
      status: 'Status',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      vpnGatewayId: 'VpnGatewayId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPropagate: 'boolean',
      businessStatus: 'string',
      createTime: 'number',
      description: 'string',
      disasterRecoveryInternetIp: 'string',
      disasterRecoveryVSwitchId: 'string',
      enableBgp: 'boolean',
      endTime: 'number',
      internetIp: 'string',
      intranetIp: 'string',
      name: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      spec: 'string',
      sslVpnInternetIp: 'string',
      status: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
      vpnGatewayId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

