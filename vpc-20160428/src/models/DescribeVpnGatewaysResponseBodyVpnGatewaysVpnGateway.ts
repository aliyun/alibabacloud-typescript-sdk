// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVpnGatewaysResponseBodyVpnGatewaysVpnGatewayEniInstanceIds } from "./DescribeVpnGatewaysResponseBodyVpnGatewaysVpnGatewayEniInstanceIds";
import { DescribeVpnGatewaysResponseBodyVpnGatewaysVpnGatewayReservationData } from "./DescribeVpnGatewaysResponseBodyVpnGatewaysVpnGatewayReservationData";
import { DescribeVpnGatewaysResponseBodyVpnGatewaysVpnGatewayTags } from "./DescribeVpnGatewaysResponseBodyVpnGatewaysVpnGatewayTags";


export class DescribeVpnGatewaysResponseBodyVpnGatewaysVpnGateway extends $dara.Model {
  /**
   * @remarks
   * Indicates whether BGP routes are automatically advertised to the VPC.
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
   * The payment status of the VPN gateway.
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
   * The billing method of the VPN gateway.
   * 
   * Only **POSTPAY** may be returned, which indicates the pay-as-you-go billing method.
   * 
   * @example
   * Example value for the China site (aliyun.com): Prepay. Example value for the International site (alibabacloud.com): POSTPAY.
   */
  chargeType?: string;
  /**
   * @remarks
   * The timestamp generated when the VPN gateway was created. Unit: milliseconds.
   * 
   * This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1515383700000
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
   * The second IP address that is assigned to the VPN gateway to create IPsec-VPN connections.
   * 
   * This parameter is returned only if the VPN gateway supports IPsec-VPN connections in dual-tunnel mode.
   * 
   * @example
   * 47.91.XX.XX
   */
  disasterRecoveryInternetIp?: string;
  /**
   * @remarks
   * The ID of the second vSwitch that is associated with the VPN gateway.
   * 
   * This parameter is returned only if the VPN gateway supports IPsec-VPN connections in dual-tunnel mode.
   * 
   * @example
   * vsw-p0w95ql6tmr2ludkt****
   */
  disasterRecoveryVSwitchId?: string;
  /**
   * @remarks
   * The BGP status of the VPN gateway. Valid values:
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
   * The timestamp generated when the VPN gateway expires. Unit: milliseconds.
   * 
   * This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1518105600000
   */
  endTime?: number;
  /**
   * @remarks
   * The ENIs created by the system for the VPN gateway.
   */
  eniInstanceIds?: DescribeVpnGatewaysResponseBodyVpnGatewaysVpnGatewayEniInstanceIds;
  /**
   * @remarks
   * *   If the VPN gateway supports IPsec-VPN connections in single-tunnel mode, the value of this parameter is the IP address of the VPN gateway, which can be used to create IPsec-VPN or SSL-VPN connections.
   * 
   * *   If the VPN gateway supports IPsec-VPN connections in dual-tunnel mode, the value of this parameter is the first IP address that is used to create an IPsec-VPN connection. The IP address cannot be used to create SSL-VPN connections.
   * 
   *     If the VPN gateway supports IPsec-VPN connections in dual-tunnel mode, the system assigns two IPsec addresses to the VPN gateway to create IPsec-VPN connections in dual-tunnel mode.
   * 
   * @example
   * 47.12.XX.XX
   */
  internetIp?: string;
  /**
   * @remarks
   * Indicates whether IPsec-VPN is enabled for the VPN gateway. Valid values:
   * 
   * *   **enable**
   * *   **disable**
   * 
   * @example
   * enable
   */
  ipsecVpn?: string;
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
   * The network type of the VPN gateway.
   * 
   * *   **public**
   * *   **private**
   * 
   * @example
   * public
   */
  networkType?: string;
  /**
   * @remarks
   * The information about pending orders.
   * 
   * > This parameter is returned only if **IncludeReservationData** is set to **true**.
   */
  reservationData?: DescribeVpnGatewaysResponseBodyVpnGatewaysVpnGatewayReservationData;
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
   * The maximum bandwidth of the VPN gateway. Unit: **M**, which indicates Mbit/s.
   * 
   * @example
   * 5M
   */
  spec?: string;
  /**
   * @remarks
   * The number of SSL-VPN connections supported by the VPN gateway.
   * 
   * @example
   * 5
   */
  sslMaxConnections?: number;
  /**
   * @remarks
   * Indicates whether SSL-VPN is enabled for the VPN gateway. Valid values:
   * 
   * *   **enable**
   * *   **disable**
   * 
   * @example
   * enable
   */
  sslVpn?: string;
  /**
   * @remarks
   * The IP address of the SSL-VPN connection.
   * 
   * This parameter is returned only if the VPN gateway is a public VPN gateway and supports IPsec-VPN connections in dual-tunnel mode. In addition, SSL-VPN must be enabled for the VPN gateway.
   * 
   * @example
   * 47.74.XX.XX
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
   * The tag that is automatically generated for the VPN gateway.
   * 
   * *   **VpnEnableBgp**: indicates whether the VPN gateway supports BGP. Valid values:
   * 
   *     *   **true**
   *     *   **false**
   * 
   * *   **VisuallySsl**: indicates whether the VPN gateway allows you to view the connection information of SSL clients. Valid values:
   * 
   *     *   **true**
   *     *   **false**
   * 
   * *   **PbrPriority**: indicates whether the VPN gateway allows you to configure priorities for policy-based routes. Valid values:
   * 
   *     *   **true**
   *     *   **false**
   * 
   * *   **VpnNewImage**: indicates whether the VPN gateway is upgraded. Valid values:
   * 
   *     *   **true**: queries only SQL templates that need to be optimized.
   *     *   **false**: does not query only SQL statements that need to be optimized.
   * 
   * *   **description**: the description of the VPN gateway. This parameter is only for internal use.
   * 
   * *   **VpnVersion**: the version of the VPN gateway.
   * 
   * *   **IDaaSNewVersion**: indicates whether the VPN gateway can be associated with an EIAM 2.0 instance.
   * 
   *     *   **true**
   *     *   **false**
   * 
   * @example
   * {\\"VpnEnableBgp\\":\\"true\\",\\"VisuallySsl\\":\\"true\\",\\"PbrPriority\\":\\"true\\",\\"VpnNewImage\\":\\"true\\",\\"description\\":\\"forwarding1.3.7\\",\\"VpnVersion\\":\\"v1.2.4\\"}
   */
  tag?: string;
  /**
   * @remarks
   * The tags that are added to the VPN gateway.
   */
  tags?: DescribeVpnGatewaysResponseBodyVpnGatewaysVpnGatewayTags;
  /**
   * @remarks
   * The ID of the vSwitch to which the VPN gateway belongs.
   * 
   * @example
   * vsw-bp15lbk8sgtr6r5b0****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC to which the VPN gateway belongs.
   * 
   * @example
   * vpc-bp1m3i0kn1nd4wiw9****
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the VPN gateway.
   * 
   * @example
   * vpn-bp17lofy9fd0dnvzv****
   */
  vpnGatewayId?: string;
  /**
   * @remarks
   * The type of VPN gateway.
   * 
   * Only **Normal** may be returned, which indicates a standard VPN gateway.
   * 
   * @example
   * Normal
   */
  vpnType?: string;
  static names(): { [key: string]: string } {
    return {
      autoPropagate: 'AutoPropagate',
      businessStatus: 'BusinessStatus',
      chargeType: 'ChargeType',
      createTime: 'CreateTime',
      description: 'Description',
      disasterRecoveryInternetIp: 'DisasterRecoveryInternetIp',
      disasterRecoveryVSwitchId: 'DisasterRecoveryVSwitchId',
      enableBgp: 'EnableBgp',
      endTime: 'EndTime',
      eniInstanceIds: 'EniInstanceIds',
      internetIp: 'InternetIp',
      ipsecVpn: 'IpsecVpn',
      name: 'Name',
      networkType: 'NetworkType',
      reservationData: 'ReservationData',
      resourceGroupId: 'ResourceGroupId',
      spec: 'Spec',
      sslMaxConnections: 'SslMaxConnections',
      sslVpn: 'SslVpn',
      sslVpnInternetIp: 'SslVpnInternetIp',
      status: 'Status',
      tag: 'Tag',
      tags: 'Tags',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      vpnGatewayId: 'VpnGatewayId',
      vpnType: 'VpnType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPropagate: 'boolean',
      businessStatus: 'string',
      chargeType: 'string',
      createTime: 'number',
      description: 'string',
      disasterRecoveryInternetIp: 'string',
      disasterRecoveryVSwitchId: 'string',
      enableBgp: 'boolean',
      endTime: 'number',
      eniInstanceIds: DescribeVpnGatewaysResponseBodyVpnGatewaysVpnGatewayEniInstanceIds,
      internetIp: 'string',
      ipsecVpn: 'string',
      name: 'string',
      networkType: 'string',
      reservationData: DescribeVpnGatewaysResponseBodyVpnGatewaysVpnGatewayReservationData,
      resourceGroupId: 'string',
      spec: 'string',
      sslMaxConnections: 'number',
      sslVpn: 'string',
      sslVpnInternetIp: 'string',
      status: 'string',
      tag: 'string',
      tags: DescribeVpnGatewaysResponseBodyVpnGatewaysVpnGatewayTags,
      vSwitchId: 'string',
      vpcId: 'string',
      vpnGatewayId: 'string',
      vpnType: 'string',
    };
  }

  validate() {
    if(this.eniInstanceIds && typeof (this.eniInstanceIds as any).validate === 'function') {
      (this.eniInstanceIds as any).validate();
    }
    if(this.reservationData && typeof (this.reservationData as any).validate === 'function') {
      (this.reservationData as any).validate();
    }
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

