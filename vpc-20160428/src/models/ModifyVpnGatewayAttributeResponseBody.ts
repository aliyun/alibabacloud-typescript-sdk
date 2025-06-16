// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyVpnGatewayAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether BGP routes are automatically advertised to the VPC. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  autoPropagate?: boolean;
  /**
   * @remarks
   * The payment status of the VPN gateway. Valid values:
   * 
   * *   **Normal**
   * *   **FinancialLocked**
   * 
   * @example
   * Normal
   */
  businessStatus?: string;
  /**
   * @remarks
   * The time when the VPN gateway was created. Unit: milliseconds.
   * 
   * This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
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
   * The second IP address assigned by the system to create an IPsec-VPN connection.
   * 
   * This parameter is returned only when the VPN gateway supports the dual-tunnel mode.
   * 
   * @example
   * 116.11.XX.XX
   */
  disasterRecoveryInternetIp?: string;
  /**
   * @remarks
   * The ID of the second vSwitch associated with the VPN gateway.
   * 
   * This parameter is returned only when the VPN gateway supports the dual-tunnel mode.
   * 
   * @example
   * vsw-p0w95ql6tmr2ludkt****
   */
  disasterRecoveryVSwitchId?: string;
  /**
   * @remarks
   * Indicates whether BGP is enabled for the VPN gateway. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  enableBgp?: boolean;
  /**
   * @remarks
   * The time when the VPN gateway expires. Unit: milliseconds.
   * 
   * This value is a UNIX timestamp representing the number of milliseconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1495382400000
   */
  endTime?: number;
  /**
   * @remarks
   * *   If the VPN gateway supports IPsec-VPN connections in single-tunnel mode, the address is the IP address of the VPN gateway and can be used to create an IPsec-VPN connection or an SSL-VPN connection.
   * 
   * *   If the VPN gateway supports IPsec-VPN connections in dual-tunnel mode, the address is the first IP address used to create an IPsec-VPN connection. The address cannot be used to create an SSL-VPN connection.
   * 
   *     If the VPN gateway supports IPsec-VPN connections in dual-tunnel mode, the system assigns two IP addresses to the VPN gateway to create two encrypted tunnels.
   * 
   * @example
   * 116.62.XX.XX
   */
  internetIp?: string;
  /**
   * @remarks
   * The private IP address of the vSwitch that is used by the system when the VPN gateway is deployed.
   * 
   * The parameter is returned only for VPN gateways that support single-tunnel IPsec-VPN connections. The IPsec-VPN feature must be enabled.
   * 
   * @example
   * 172.27.30.24
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
   * You can call the [ListResourceGroups](https://help.aliyun.com/document_detail/158855.html) operation to query resource groups.
   * 
   * @example
   * rg-acfmzs372yg****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The maximum bandwidth of the VPN gateway. Unit: Mbit/s.
   * 
   * @example
   * 5M
   */
  spec?: string;
  /**
   * @remarks
   * The IP address of the SSL-VPN connection.
   * 
   * This parameter is returned only when the VPN gateway is a public VPN gateway and supports only the single-tunnel mode. In addition, the VPN gateway must have the SSL-VPN feature enabled.
   * 
   * @example
   * 116.33.XX.XX
   */
  sslVpnInternetIp?: string;
  /**
   * @remarks
   * The status of the VPN gateway. Valid values:
   * 
   * *   **init**
   * *   **provisioning**
   * *   **active**
   * *   **updating**
   * *   **deleting**
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

