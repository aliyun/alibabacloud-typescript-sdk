// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpnGatewayResponseBodyEniInstanceIds extends $dara.Model {
  eniInstanceId?: string[];
  static names(): { [key: string]: string } {
    return {
      eniInstanceId: 'EniInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eniInstanceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.eniInstanceId)) {
      $dara.Model.validateArray(this.eniInstanceId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpnGatewayResponseBodyReservationData extends $dara.Model {
  /**
   * @remarks
   * If the pending order type is **TEMP_UPGRADE** (temporary upgrade), this parameter indicates the revert time for the temporary upgrade.
   * 
   * If the pending order type is **RENEWCHANGE** (renewal with specification change) or **RENEW** (renewal), this parameter indicates the effective period when the renewal or renewal with specification change takes effect.
   * 
   * @example
   * 2020-07-20T16:00:00Z
   */
  reservationEndTime?: string;
  /**
   * @remarks
   * The enabling status of the IPsec-VPN feature for the pending order. Valid values:
   * 
   * - **enable**: enabled.
   * 
   * - **disable**: disabled.
   * 
   * @example
   * enable
   */
  reservationIpsec?: string;
  /**
   * @remarks
   * The maximum number of concurrent SSL-VPN connections of the pending order.
   * 
   * @example
   * 5
   */
  reservationMaxConnections?: number;
  /**
   * @remarks
   * The type of the pending order. Valid values:
   * 
   * - **RENEWCHANGE**: renewal with specification change.
   * 
   * - **TEMP_UPGRADE**: temporary upgrade.
   * 
   * - **RENEW**: renewal.
   * 
   * @example
   * TEMP_UPGRADE
   */
  reservationOrderType?: string;
  /**
   * @remarks
   * The bandwidth specification of the pending order. Unit: Mbit/s.
   * 
   * @example
   * 5
   */
  reservationSpec?: string;
  /**
   * @remarks
   * The enabling status of the SSL-VPN feature for the pending order. Valid values:
   * 
   * - **enable**: enabled.
   * 
   * - **disable**: disabled.
   * 
   * @example
   * enable
   */
  reservationSsl?: string;
  /**
   * @remarks
   * The status of the pending order. Valid values:
   * 
   * - **1**: The renewal or renewal with specification change order has not taken effect.
   * 
   * - **2**: The temporary upgrade order has taken effect. After the restoration time is reached, the system restores the VPN gateway to the specification before the temporary upgrade. In this case, **ReservationIpsec**, **ReservationMaxConnections**, **ReservationSpec**, and **ReservationSsl** indicate the specifications before the temporary upgrade.
   * 
   * @example
   * 1
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      reservationEndTime: 'ReservationEndTime',
      reservationIpsec: 'ReservationIpsec',
      reservationMaxConnections: 'ReservationMaxConnections',
      reservationOrderType: 'ReservationOrderType',
      reservationSpec: 'ReservationSpec',
      reservationSsl: 'ReservationSsl',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reservationEndTime: 'string',
      reservationIpsec: 'string',
      reservationMaxConnections: 'number',
      reservationOrderType: 'string',
      reservationSpec: 'string',
      reservationSsl: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpnGatewayResponseBodyTagsTag extends $dara.Model {
  key?: string;
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

export class DescribeVpnGatewayResponseBodyTags extends $dara.Model {
  tag?: DescribeVpnGatewayResponseBodyTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeVpnGatewayResponseBodyTagsTag },
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

export class DescribeVpnGatewayResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the routing automatic propagation feature is enabled for the VPN gateway. Valid values:
   * 
   * - **true**: enabled.
   * 
   * - **false**: disabled.
   * 
   * @example
   * true
   */
  autoPropagate?: boolean;
  /**
   * @remarks
   * The payment status of the VPN gateway. Valid values:
   * 
   * - **Normal**: Normal.
   * 
   * - **FinancialLocked**: locked due to overdue payment.
   * 
   * @example
   * Normal
   */
  businessStatus?: string;
  /**
   * @remarks
   * The billing method. Value:
   * 
   * <props="intl">**POSTPAY**: pay-as-you-go billing method.
   * 
   * <props="partner">**POSTPAY**: pay-as-you-go billing method.
   * 
   * <props="china">**Prepay**: subscription.
   * 
   * @example
   * 中国站示例值：Prepay，国际站示例值：POSTPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * The timestamp when the VPN gateway was created. Unit: milliseconds.
   * 
   * The timestamp follows the UNIX time format, which represents the total number of milliseconds elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1495382400000
   */
  createTime?: number;
  /**
   * @remarks
   * The description of the VPN gateway.
   * 
   * @example
   * vpngatewaydescription
   */
  description?: string;
  /**
   * @remarks
   * The second IP address assigned by the system to the VPN gateway instance for creating IPsec-VPN connections.
   * 
   * This parameter is returned only for VPN gateway instances that support creating dual-tunnel IPsec-VPN connections.
   * 
   * @example
   * 47.91.XX.XX
   */
  disasterRecoveryInternetIp?: string;
  /**
   * @remarks
   * The ID of the second vSwitch associated with the VPN gateway instance.
   * 
   * This parameter is returned only for VPN gateway instances that support creating dual-tunnel IPsec-VPN connections.
   * 
   * @example
   * vsw-p0w95ql6tmr2ludkt****
   */
  disasterRecoveryVSwitchId?: string;
  /**
   * @remarks
   * The enabling status of the BGP feature for the VPN gateway. Valid values:
   * 
   * - **true**: enabled.
   * 
   * - **false**: disabled.
   * 
   * @example
   * true
   */
  enableBgp?: boolean;
  /**
   * @remarks
   * The expiration timestamp of the VPN gateway. Unit: milliseconds.
   * 
   * The timestamp follows the UNIX time format, which represents the total number of milliseconds elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1544666102000
   */
  endTime?: number;
  eniInstanceIds?: DescribeVpnGatewayResponseBodyEniInstanceIds;
  /**
   * @remarks
   * The type of the VPN gateway. Valid values:
   * - **Traditional**: traditional VPN gateway that supports both IPsec and SSL features.
   * - **Enhanced.SiteToSite**: enhanced site-to-cloud VPN gateway that supports only the IPsec feature.
   * 
   * @example
   * Enhanced.SiteToSite
   */
  gatewayType?: string;
  /**
   * @remarks
   * - If the VPN gateway instance supports creating single-tunnel IPsec-VPN connections, this address is the IP address of the VPN gateway instance and can be used to create IPsec-VPN connections or SSL-VPN connections.
   * 
   * - If the VPN gateway instance supports creating dual-tunnel IPsec-VPN connections, this address is the first IP address used to create IPsec-VPN connections and cannot be used to create SSL-VPN connections.
   * 
   *     If the VPN gateway instance supports creating dual-tunnel IPsec-VPN connections, the system assigns two IPsec IP addresses to the VPN gateway instance for creating dual-tunnel IPsec-VPN connections.
   * 
   * @example
   * 47.22.XX.XX
   */
  internetIp?: string;
  /**
   * @remarks
   * Indicates whether the IPsec-VPN feature is enabled. Valid values:
   * 
   * - **enable**: enabled.
   * 
   * - **disable**: disabled.
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
   * vpngatewayname
   */
  name?: string;
  /**
   * @remarks
   * The network type of the VPN gateway.
   * 
   * - **public**: public VPN gateway.
   * - **private**: private VPN gateway.
   * 
   * @example
   * public
   */
  networkType?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 27E4E088-8DE0-4672-BF5C-0A412389DB9E
   */
  requestId?: string;
  /**
   * @remarks
   * The pending order data.
   * 
   * >This parameter is returned only when **IncludeReservationData** is set to **true**.
   */
  reservationData?: DescribeVpnGatewayResponseBodyReservationData;
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
   * 5
   */
  spec?: string;
  /**
   * @remarks
   * The maximum number of concurrent SSL-VPN connections.
   * 
   * @example
   * 5
   */
  sslMaxConnections?: number;
  /**
   * @remarks
   * The enabling status of the SSL-VPN feature. Valid values:
   * 
   * - **enable**: enabled.
   * 
   * - **disable**: disabled.
   * 
   * @example
   * enable
   */
  sslVpn?: string;
  /**
   * @remarks
   * The IP address of the SSL-VPN connection.
   * 
   * This parameter is returned only when the SSL-VPN feature is enabled on a VPN gateway instance of the public network type that supports creating dual-tunnel IPsec-VPN connections.
   * 
   * @example
   * 47.74.XX.XX
   */
  sslVpnInternetIp?: string;
  /**
   * @remarks
   * The status of the VPN gateway. Valid values:
   * 
   * - **init**: initializing.
   * 
   * - **provisioning**: preparing.
   * 
   * - **active**: Normal.
   * 
   * - **updating**: updating.
   * 
   * - **deleting**: deleting.
   * 
   * @example
   * init
   */
  status?: string;
  /**
   * @remarks
   * The labels automatically generated by the system for the VPN gateway.
   * 
   * - **VpnEnableBgp**: indicates whether the VPN gateway supports the BGP feature.
   *     - **true**: Supported.
   *     - **false**: Not supported.
   * - **VisuallySsl**: indicates whether the VPN gateway supports viewing connection information of SSL clients.
   *     - **true**: Supported.
   *     - **false**: Not supported.
   * - **PbrPriority**: indicates whether the VPN gateway supports configuring policy priority for policy-based routing.
   *     - **true**: Supported.
   *     - **false**: Not supported.
   * - **VpnNewImage**: indicates whether the VPN gateway is a new-generation VPN gateway.
   *     - **true**: Yes.
   *     - **false**: No.
   * - **description**: the description of the VPN gateway, which is used only for internal system purposes.
   * - **VpnVersion**: the version number of the VPN gateway.
   * - **IDaaSNewVersion**: indicates whether the VPN gateway supports attaching to an EIAM 2.0 instance.
   *     - **true**: Supported.
   *     - **false**: Not supported.
   * 
   * @example
   * {\\"VpnEnableBgp\\":\\"true\\",\\"VisuallySsl\\":\\"true\\",\\"PbrPriority\\":\\"true\\",\\"VpnNewImage\\":\\"true\\",\\"description\\":\\"转发1.3.24\\",\\"VpnVersion\\":\\"v1.2.4\\",\\"IDaaSNewVersion\\":\\"true\\"}
   */
  tag?: string;
  tags?: DescribeVpnGatewayResponseBodyTags;
  /**
   * @remarks
   * The ID of the vSwitch to which the VPN gateway belongs.
   * 
   * @example
   * vsw-bp1dmzugdikc6hdgx****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC to which the VPN gateway belongs.
   * 
   * @example
   * vpc-bp19m2yx1m5q0avyq****
   */
  vpcId?: string;
  /**
   * @remarks
   * The instance ID of the VPN gateway.
   * 
   * @example
   * vpn-bp1r3v1xqkl0w519g****
   */
  vpnGatewayId?: string;
  /**
   * @remarks
   * <props="intl">The type of the VPN gateway. Value: **Normal**, which indicates a standard VPN gateway.
   * 
   * <props="china">
   * 
   * The type of the VPN gateway. Valid values:
   * 
   * - **Normal**: standard.
   * 
   * - **NationalStandard**: Chinese SM algorithm-based.
   * 
   * .
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
      gatewayType: 'GatewayType',
      internetIp: 'InternetIp',
      ipsecVpn: 'IpsecVpn',
      name: 'Name',
      networkType: 'NetworkType',
      requestId: 'RequestId',
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
      eniInstanceIds: DescribeVpnGatewayResponseBodyEniInstanceIds,
      gatewayType: 'string',
      internetIp: 'string',
      ipsecVpn: 'string',
      name: 'string',
      networkType: 'string',
      requestId: 'string',
      reservationData: DescribeVpnGatewayResponseBodyReservationData,
      resourceGroupId: 'string',
      spec: 'string',
      sslMaxConnections: 'number',
      sslVpn: 'string',
      sslVpnInternetIp: 'string',
      status: 'string',
      tag: 'string',
      tags: DescribeVpnGatewayResponseBodyTags,
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

