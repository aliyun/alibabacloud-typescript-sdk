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
   * If the order type is **TEMP_UPGRADE** (temporary upgrade), this parameter specifies the time when the temporary upgrade expires.
   * 
   * If the order type is **RENEWCHANGE** (renewal with a specification change) or **RENEW** (renewal), this parameter indicates the time when the renewal or renewal with a specification change takes effect.
   * 
   * @example
   * 2020-07-20T16:00:00Z
   */
  reservationEndTime?: string;
  /**
   * @remarks
   * The IPsec-VPN status of the pending order. Valid values:
   * 
   * *   **enable**
   * *   **disable**
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
   * *   **RENEWCHANGE**: renewal with upgrade or downgrade
   * *   **TEMP_UPGRADE**: temporary upgrade
   * *   **RENEW**: renewal
   * 
   * @example
   * TEMP_UPGRADE
   */
  reservationOrderType?: string;
  /**
   * @remarks
   * The bandwidth of the pending order. Unit: Mbit/s.
   * 
   * @example
   * 5
   */
  reservationSpec?: string;
  /**
   * @remarks
   * The SSL-VPN status of the pending order. Valid values:
   * 
   * *   **enable**
   * *   **disable**
   * 
   * @example
   * enable
   */
  reservationSsl?: string;
  /**
   * @remarks
   * The status of the pending order. Valid values:
   * 
   * *   **1**: indicates that the order of the renewal or specification change has not taken effect.
   * *   **2**: indicates that the order is an order for temporary upgrade and the order has taken effect. After the temporary upgrade expires, the system restores the VPN gateway to its previous specifications. In this case, **ReservationIpsec**, **ReservationMaxConnections**, **ReservationSpec**, and **ReservationSsl** indicate the previous specification.
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
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * aaa
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * bbb
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
   * The billing method. Valid value:
   * 
   * **POSTPAY**: pay-as-you-go
   * 
   * @example
   * China site (aliyun.com): Prepay. International site (alibabacloud.com): POSTPAY.
   */
  chargeType?: string;
  /**
   * @remarks
   * The timestamp when the VPN gateway was created. Unit: milliseconds.
   * 
   * This value is a UNIX timestamp representing the number of milliseconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.
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
   * The second IP address assigned by the system to create an IPsec-VPN connection.
   * 
   * This parameter is returned only when the VPN gateway supports the dual-tunnel mode.
   * 
   * @example
   * 47.91.XX.XX
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
   * The timestamp when the VPN gateway expires. Unit: milliseconds.
   * 
   * This value is a UNIX timestamp representing the number of milliseconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1544666102000
   */
  endTime?: number;
  /**
   * @remarks
   * The ENIs created by the system for the VPN gateway.
   */
  eniInstanceIds?: DescribeVpnGatewayResponseBodyEniInstanceIds;
  gatewayType?: string;
  /**
   * @remarks
   * *   If the VPN gateway supports IPsec-VPN connections in single-tunnel mode, the address is the IP address of the VPN gateway and can be used to create an IPsec-VPN connection or an SSL-VPN connection.
   * 
   * *   If the VPN gateway supports IPsec-VPN connections in dual-tunnel mode, the address is the first IP address used to create an IPsec-VPN connection. The address cannot be used to create an SSL-VPN connection.
   * 
   *     If the VPN gateway supports IPsec-VPN connections in dual-tunnel mode, the system assigns two IP addresses to the VPN gateway to create two encrypted tunnels.
   * 
   * @example
   * 47.22.XX.XX
   */
  internetIp?: string;
  /**
   * @remarks
   * Indicates whether the IPsec-VPN feature is enabled. Valid values:
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
   * vpngatewayname
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
   * The request ID.
   * 
   * @example
   * 27E4E088-8DE0-4672-BF5C-0A412389DB9E
   */
  requestId?: string;
  /**
   * @remarks
   * The information about pending orders.
   * 
   * > This set of parameters is returned only when **IncludeReservationData** is set to **true**.
   */
  reservationData?: DescribeVpnGatewayResponseBodyReservationData;
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
   * The status of the SSL-VPN feature. Valid values:
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
   * This parameter is returned only when the VPN gateway is a public VPN gateway and supports only the single-tunnel mode. In addition, the VPN gateway must have the SSL-VPN feature enabled.
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
   * init
   */
  status?: string;
  /**
   * @remarks
   * The tag that is automatically generated for the VPN gateway. The tag consists of the following parameters:
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
   *     *   **true**
   *     *   **false**
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
   * The ID of the VPN gateway.
   * 
   * @example
   * vpn-bp1r3v1xqkl0w519g****
   */
  vpnGatewayId?: string;
  /**
   * @remarks
   * The type of VPN gateway. Only **Normal** may be returned, which indicates a standard VPN gateway.
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

