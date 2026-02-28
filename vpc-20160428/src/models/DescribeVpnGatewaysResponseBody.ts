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
   * 如果未生效订单类型为**TEMP_UPGRADE**（临时升配）时，该参数表示为临时升配的还原时间。
   * 
   * 如果未生效订单类型为**RENEWCHANGE**（续费变配）或**RENEW**（续费）时，该参数表示为续费或续费变配开始生效时间。
   * 
   * @example
   * 2021-07-20T16:00:00Z
   */
  reservationEndTime?: string;
  /**
   * @remarks
   * 未生效订单IPsec-VPN功能开启状态。
   * 
   * - **enable**：已开启。
   * 
   * - **disable**：未开启。
   * 
   * @example
   * enable
   */
  reservationIpsec?: string;
  /**
   * @remarks
   * 未生效订单SSL-VPN并发连接用户数的规格。
   * 
   * @example
   * 5
   */
  reservationMaxConnections?: number;
  /**
   * @remarks
   * 未生效订单类型。
   * 
   * - **RENEWCHANGE**：续费变配。
   * 
   * - **TEMP_UPGRADE**：临时升配。
   * 
   * - **RENEW**：续费。
   * 
   * @example
   * TEMP_UPGRADE
   */
  reservationOrderType?: string;
  /**
   * @remarks
   * 未生效订单的带宽规格。单位：Mbps。
   * 
   * @example
   * 5
   */
  reservationSpec?: string;
  /**
   * @remarks
   * 未生效订单SSL-VPN功能开启状态。
   * - **enable**：已开启。
   * 
   * - **disable**：未开启。
   * 
   * @example
   * enable
   */
  reservationSsl?: string;
  /**
   * @remarks
   * 未生效订单状态。
   * 
   * - **1**：表示续费或续费变配的订单未生效。
   * 
   * - **2**：表示临时升配的订单已生效。在到达还原时间后，系统会将VPN网关规格恢复到临时升配前的规格。此时**ReservationIpsec**、**ReservationMaxConnections**、**ReservationSpec**、**ReservationSsl**表示为VPN网关临时升配前的规格。
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
   * 标签键。
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * 标签值。
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
   * 是否已开启VPN网关的路由自动传播功能。
   * 
   * - **true**：已开启。
   * 
   * - **false**：未开启。
   * 
   * @example
   * true
   */
  autoPropagate?: boolean;
  /**
   * @remarks
   * VPN网关的付费状态。
   * 
   * - **Normal**：正常。
   * 
   * - **FinancialLocked**：欠费锁定。
   * 
   * @example
   * Normal
   */
  businessStatus?: string;
  /**
   * @remarks
   * VPN网关的付费类型。
   * 
   * <props="china">仅取值：**Prepay**，包年包月。
   * 
   * <props="intl">仅取值：**POSTPAY**，按量计费。
   * 
   * <props="partner">仅取值： **POSTPAY**，按量计费。
   * 
   * @example
   * 中国站示例值：Prepay，国际站示例值：POSTPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * 创建VPN网关的时间戳。单位：毫秒。
   * 
   * 时间戳的格式采用Unix时间戳，表示从格林威治时间1970年01月01日00时00分00秒至创建VPN网关实例时的总时长。
   * 
   * @example
   * 1515383700000
   */
  createTime?: number;
  /**
   * @remarks
   * VPN网关的描述信息。
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * 系统为VPN网关实例分配的用于创建IPsec-VPN连接的第二个IP地址。
   * 
   * 仅支持创建双隧道模式IPsec-VPN连接的VPN网关实例会返回当前参数。
   * 
   * @example
   * 47.91.XX.XX
   */
  disasterRecoveryInternetIp?: string;
  /**
   * @remarks
   * VPN网关实例关联的第二个交换机ID。
   * 
   * 仅支持创建双隧道模式IPsec-VPN连接的VPN网关实例会返回当前参数。
   * 
   * @example
   * vsw-p0w95ql6tmr2ludkt****
   */
  disasterRecoveryVSwitchId?: string;
  /**
   * @remarks
   * VPN网关BGP功能的开启状态。
   * 
   * - **true**：已开启。
   * 
   * - **false**：未开启。
   * 
   * @example
   * true
   */
  enableBgp?: boolean;
  /**
   * @remarks
   * VPN网关到期时间戳。单位：毫秒。
   * 
   * 时间戳的格式采用Unix时间戳，表示从格林威治时间1970年01月01日00时00分00秒至VPN网关实例到期时的总时长。
   * 
   * @example
   * 1518105600000
   */
  endTime?: number;
  /**
   * @remarks
   * 系统为VPN网关实例创建的弹性网卡ENI（Elastic Network Interfaces）列表。
   */
  eniInstanceIds?: DescribeVpnGatewaysResponseBodyVpnGatewaysVpnGatewayEniInstanceIds;
  /**
   * @remarks
   * VPN 网关类型，取值：
   * Traditional：传统型VPN网关，覆盖IPsec功能和SSL功能
   * Enhance.SiteToSite：增强型站点入云VPN，只覆盖IPsec功能
   */
  gatewayType?: string;
  /**
   * @remarks
   * - 在VPN网关实例支持创建单隧道模式IPsec-VPN连接的场景下，该地址为VPN网关实例的IP地址，可用于创建IPsec-VPN连接或SSL-VPN连接。
   * 
   * - 在VPN网关实例支持创建双隧道模式IPsec-VPN连接的场景下，该地址为用于创建IPsec-VPN连接的第一个IP地址，不能用于创建SSL-VPN连接。
   * 
   *     在VPN网关实例支持创建双隧道模式IPsec-VPN连接的场景下，系统会为VPN网关实例分配两个IPsec地址，用于创建双隧道模式的IPsec-VPN连接。
   * 
   * @example
   * 47.12.XX.XX
   */
  internetIp?: string;
  /**
   * @remarks
   * VPN网关是否开启了IPsec-VPN功能。
   * 
   * - **enable**：已开启。
   * 
   * - **disable**：未开启。
   * 
   * @example
   * enable
   */
  ipsecVpn?: string;
  /**
   * @remarks
   * VPN网关的名称。
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * VPN网关的网络类型。
   * 
   * - **public**：公网VPN网关。
   * - **private**：私网VPN网关。
   * 
   * @example
   * public
   */
  networkType?: string;
  /**
   * @remarks
   * 未生效的订购数据。
   * 
   * >仅**IncludeReservationData**传入**true**才会返回该组参数。
   */
  reservationData?: DescribeVpnGatewaysResponseBodyVpnGatewaysVpnGatewayReservationData;
  /**
   * @remarks
   * VPN网关所属的资源组ID。
   * 
   * 您可以调用[ListResourceGroups](https://help.aliyun.com/document_detail/158855.html)接口查询资源组信息。
   * 
   * @example
   * rg-acfmzs372yg****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * VPN网关的带宽峰值。**M**表示单位Mbps。
   * 
   * @example
   * 5M
   */
  spec?: string;
  /**
   * @remarks
   * VPN网关SSL连接数的规格。
   * 
   * @example
   * 5
   */
  sslMaxConnections?: number;
  /**
   * @remarks
   * VPN网关是否开启了SSL-VPN功能。
   * 
   * - **enable**：已开启。
   * 
   * - **disable**：未开启。
   * 
   * @example
   * enable
   */
  sslVpn?: string;
  /**
   * @remarks
   * SSL-VPN连接的IP地址。
   * 
   * 仅支持创建双隧道模式IPsec-VPN连接的公网网络类型的VPN网关实例开启SSL-VPN功能后，才会返回当前参数。
   * 
   * @example
   * 47.74.XX.XX
   */
  sslVpnInternetIp?: string;
  /**
   * @remarks
   * VPN网关的状态。
   * 
   * - **init** ：初始化。
   * 
   * - **provisioning** ：准备中。
   * 
   * - **active** ：正常。
   * 
   * - **updating** ：更新中。
   * 
   * - **deleting** ：删除中。
   * 
   * @example
   * active
   */
  status?: string;
  /**
   * @remarks
   * 系统自动生成的VPN网关标签。
   * 
   * - **VpnEnableBgp**：表示VPN网关是否支持BGP功能。
   *     - **true**：支持。
   *     - **false**：不支持。
   * - **VisuallySsl**：表示VPN网关是否支持查看SSL客户端的连接信息。
   *     - **true**：支持。
   *     - **false**：不支持。
   * - **PbrPriority**：表示VPN网关是否支持为策略路由配置策略优先级。
   *     - **true**：支持。
   *     - **false**：不支持。
   * - **VpnNewImage**：表示VPN网关是否为新型VPN网关。
   *     - **true**：是。
   *     - **false**：否。
   * - **description**：表示VPN网关的描述信息，仅供系统内部使用。
   * - **VpnVersion**：表示VPN网关的版本号。
   * - **IDaaSNewVersion**：表示VPN网关是否支持绑定EIAM 2.0实例。
   *     - **true**：支持。
   *     - **false**：不支持。
   * 
   * @example
   * {\\"VpnEnableBgp\\":\\"true\\",\\"VisuallySsl\\":\\"true\\",\\"PbrPriority\\":\\"true\\",\\"VpnNewImage\\":\\"true\\",\\"description\\":\\"转发1.3.24\\",\\"VpnVersion\\":\\"v1.2.4\\",\\"IDaaSNewVersion\\":\\"true\\"}
   */
  tag?: string;
  /**
   * @remarks
   * VPN网关绑定的标签列表。
   */
  tags?: DescribeVpnGatewaysResponseBodyVpnGatewaysVpnGatewayTags;
  /**
   * @remarks
   * VPN网关所属交换机的ID。
   * 
   * @example
   * vsw-bp15lbk8sgtr6r5b0****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * VPN网关所属VPC的ID。
   * 
   * @example
   * vpc-bp1m3i0kn1nd4wiw9****
   */
  vpcId?: string;
  /**
   * @remarks
   * VPN网关的ID。
   * 
   * @example
   * vpn-bp17lofy9fd0dnvzv****
   */
  vpnGatewayId?: string;
  /**
   * @remarks
   * VPN网关类型。
   * 	
   * <props="china">
   * 
   * - **Normal**：普通型。
   * - **NationalStandard**：国密型。
   * 
   * 
   * 
   * <props="intl">取值：**Normal**，表示普通型。
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
      gatewayType: 'string',
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

