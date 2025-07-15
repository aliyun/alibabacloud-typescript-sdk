// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpnGatewaysResponseBodyVpnGatewaysVpnGatewayEniInstanceIds extends $dara.Model {
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

export class DescribeVpnGatewaysResponseBodyVpnGatewaysVpnGatewayReservationData extends $dara.Model {
  /**
   * @remarks
   * If the value of ReservationOrderType is **TEMP_UPGRADE**, this parameter indicates the time when the temporary upgrade expires.
   * 
   * If the value of ReservationOrderType is **RENEWCHANGE** or **RENEW**, this parameter indicates the time when the renewal or renewal with a specification change takes effect.
   * 
   * @example
   * 2021-07-20T16:00:00Z
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
   * The type of the order that has not taken effect. Valid values:
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
   * The status of the pending order.
   * 
   * *   **1**: indicates that the order for renewal or the order for renewal with a specification change has not taken effect.
   * *   **2**: indicates that the order of the temporary upgrade has taken effect. After the temporary upgrade expires, the system restores the VPN gateway to its previous specifications. In this case, the values of **ReservationIpsec**, **ReservationMaxConnections**, **ReservationSpec**, and **ReservationSsl** indicate the previous specifications of the VPN gateway.
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

export class DescribeVpnGatewaysResponseBodyVpnGatewaysVpnGatewayTagsTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * FinanceJoshua
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

export class DescribeVpnGatewaysResponseBodyVpnGatewaysVpnGatewayTags extends $dara.Model {
  tag?: DescribeVpnGatewaysResponseBodyVpnGatewaysVpnGatewayTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeVpnGatewaysResponseBodyVpnGatewaysVpnGatewayTagsTag },
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

export class DescribeVpnGatewaysResponseBodyVpnGateways extends $dara.Model {
  vpnGateway?: DescribeVpnGatewaysResponseBodyVpnGatewaysVpnGateway[];
  static names(): { [key: string]: string } {
    return {
      vpnGateway: 'VpnGateway',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpnGateway: { 'type': 'array', 'itemType': DescribeVpnGatewaysResponseBodyVpnGatewaysVpnGateway },
    };
  }

  validate() {
    if(Array.isArray(this.vpnGateway)) {
      $dara.Model.validateArray(this.vpnGateway);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpnGatewaysResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DF11D6F6-E35A-41C3-9B20-6FC8A901FE65
   */
  requestId?: string;
  /**
   * @remarks
   * The number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * The information about the VPN gateways.
   */
  vpnGateways?: DescribeVpnGatewaysResponseBodyVpnGateways;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      vpnGateways: 'VpnGateways',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      vpnGateways: DescribeVpnGatewaysResponseBodyVpnGateways,
    };
  }

  validate() {
    if(this.vpnGateways && typeof (this.vpnGateways as any).validate === 'function') {
      (this.vpnGateways as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

