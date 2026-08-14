// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRouterInterfaceAttributeResponseBodyTagsTags extends $dara.Model {
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

export class DescribeRouterInterfaceAttributeResponseBodyTags extends $dara.Model {
  tags?: DescribeRouterInterfaceAttributeResponseBodyTagsTags[];
  static names(): { [key: string]: string } {
    return {
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tags: { 'type': 'array', 'itemType': DescribeRouterInterfaceAttributeResponseBodyTagsTags },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouterInterfaceAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the access point.
   * 
   * @example
   * ap-cn-qingdao-ls-A
   */
  accessPointId?: string;
  /**
   * @remarks
   * The bandwidth of the router interface. Unit: Mbps.
   * 
   * @example
   * 2
   */
  bandwidth?: number;
  /**
   * @remarks
   * The business status of the router interface. Valid values:
   * 
   * - **Normal**: normal.
   * 
   * - **FinancialLocked**: locked due to overdue payment.
   * 
   * - **SecurityLocked**: locked due to security risk control.
   * 
   * @example
   * Normal
   */
  businessStatus?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * - **AfterPay**: pay-as-you-go.
   * - **PrePaid**: subscription.
   * 
   * @example
   * AfterPay
   */
  chargeType?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The time when the connection was established. The time is displayed in the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2022-04-14T08:58:04Z
   */
  connectedTime?: string;
  /**
   * @remarks
   * The time when the router interface was created. The time is displayed in the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2022-04-14T08:57:24Z
   */
  creationTime?: string;
  /**
   * @remarks
   * Indicates whether this is a cross-border connection. Valid values:
   * 
   * - **false**: No.
   * 
   * - **true**: Yes.
   * 
   * @example
   * false
   */
  crossBorder?: boolean;
  /**
   * @remarks
   * The description of the router interface.
   * 
   * @example
   * Peer interface
   */
  description?: string;
  /**
   * @remarks
   * The end time of the data retrieval. The time is displayed in the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2999-09-08T16:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * Indicates whether the router interface on the VBR was created in fast link mode. Fast link mode allows the router interfaces on both the VBR and VPC sides to automatically connect after creation. Valid values:
   * 
   * - **true**: Yes.
   * - **false** (default): No.
   * 
   * 
   * > -  This parameter takes effect only when **RouterType** is set to **VBR** and **OppositeRouterType** is set to **VRouter**.
   * - When **FastLinkMode** is set to **true**, **Role** must be set to **InitiatingSide**, and **AccessPointId**, **OppositeRouterType**, **OpppsiteRouterId**, and **OppositeInterfaceOwnerId** are required.
   * 
   * @example
   * false
   */
  fastLinkMode?: string;
  /**
   * @remarks
   * The time when the router interface was last modified.
   * 
   * @example
   * 2022-04-28T10:02:12Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * Indicates whether renewal data exists. Valid values:
   * 
   * - **false**: No.
   * 
   * - **true**: Yes.
   * 
   * @example
   * false
   */
  hasReservationData?: string;
  /**
   * @remarks
   * The health check rate. Unit: seconds. This value indicates the interval between consecutive probe packets sent during a health check.
   * 
   * @example
   * 2
   */
  hcRate?: number;
  /**
   * @remarks
   * The health check threshold. This value indicates the number of probe packets sent during a health check. Unit: packets.
   * 
   * @example
   * 8
   */
  hcThreshold?: number;
  /**
   * @remarks
   * The health check source IP address.
   * 
   * @example
   * 1.1.XX.XX
   */
  healthCheckSourceIp?: string;
  /**
   * @remarks
   * The health check status. Valid values:
   * 
   * - **Abnormal**: abnormal.
   * - **Normal**: normal.
   * - **NoRedundantRoute**: no redundant route configured.
   * - **NoHealthCheckConfig**: no health check configured.
   * 
   * @example
   * normal
   */
  healthCheckStatus?: string;
  /**
   * @remarks
   * The health check target IP address.
   * 
   * @example
   * 2.2.XX.XX
   */
  healthCheckTargetIp?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The name of the router interface.
   * 
   * @example
   * RouterInterface1
   */
  name?: string;
  /**
   * @remarks
   * The ID of the peer access point.
   * 
   * @example
   * ap-cn-qingdao-ls-B
   */
  oppositeAccessPointId?: string;
  /**
   * @remarks
   * The bandwidth of the peer router interface. Unit: Mbps.
   * 
   * @example
   * 0
   */
  oppositeBandwidth?: number;
  /**
   * @remarks
   * The business status of the peer router interface. Valid values:
   * - **Normal**: normal.
   * - **FinancialLocked**: locked due to overdue payment.
   * - **SecurityLocked**: locked due to security risk control.
   * 
   * @example
   * Normal
   */
  oppositeInterfaceBusinessStatus?: string;
  /**
   * @remarks
   * The ID of the peer router interface.
   * 
   * @example
   * ri-bp1xkrzttximaoxbl****
   */
  oppositeInterfaceId?: string;
  /**
   * @remarks
   * The ID of the account to which the peer router interface belongs.
   * 
   * @example
   * 1321932713****
   */
  oppositeInterfaceOwnerId?: string;
  /**
   * @remarks
   * The specification of the peer router interface. Valid values:
   * 
   * - **Mini.2**: 2 Mbps
   * - **Mini.5**: 5 Mbps
   * - **Small.1**: 10 Mbps
   * - **Small.2**: 20 Mbps
   * - **Small.5**: 50 Mbps
   * - **Middle.1**: 100 Mbps
   * - **Middle.2**: 200 Mbps
   * - **Middle.5**: 500 Mbps
   * - **Large.1**: 1000 Mbps
   * - **Large.2**: 2000 Mbps
   * - **Large.5**: 5000 Mbps
   * - **Xlarge.1**: 10000 Mbps
   * - **Negative**: no specification involved.
   * 
   * @example
   * Negative
   */
  oppositeInterfaceSpec?: string;
  /**
   * @remarks
   * The status of the peer router interface. Valid values:
   * 
   * - **Idle**: not connected.
   * - **AcceptingConnecting**: accepting a connection.
   * - **Connecting**: connecting.
   * - **Activating**: being activated.
   * - **Active**: activated.
   * - **Modifying**: being modified.
   * - **Deactivating**: being frozen.
   * - **Inactive**: frozen.
   * - **Deleting**: being deleted.
   * - **Deleted**: deleted.
   * 
   * @example
   * Active
   */
  oppositeInterfaceStatus?: string;
  /**
   * @remarks
   * The region ID of the peer router interface.
   * 
   * @example
   * cn-hangzhou
   */
  oppositeRegionId?: string;
  /**
   * @remarks
   * The ID of the router to which the peer router interface belongs.
   * 
   * @example
   * vrt-bp11xvy6lb9photuu****
   */
  oppositeRouterId?: string;
  /**
   * @remarks
   * The type of the router to which the peer router interface belongs. Valid values:
   * 
   * - **VRouter**: vRouter of a VPC.
   * - **VBR**: Virtual Border Router.
   * 
   * @example
   * VRouter
   */
  oppositeRouterType?: string;
  /**
   * @remarks
   * The ID of the peer VPC.
   * 
   * @example
   * vpc-bp1b49rqrybk45nio****
   */
  oppositeVpcInstanceId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 01818199-04F6-47F4-9ADF-7CC824CF57A4
   */
  requestId?: string;
  /**
   * @remarks
   * The renewal active time. The time is displayed in the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2022-06-11T16:00:00Z
   */
  reservationActiveTime?: string;
  /**
   * @remarks
   * The renewal bandwidth. Unit: Mbps.
   * 
   * @example
   * 100
   */
  reservationBandwidth?: string;
  /**
   * @remarks
   * The renewal billing type. Valid values: **PayByBandwidth**, which indicates pay-by-bandwidth.
   * 
   * @example
   * PayByBandwidth
   */
  reservationInternetChargeType?: string;
  /**
   * @remarks
   * The renewal order type. Valid values: **RENEW**, which indicates a renewal order.
   * 
   * @example
   * RENEW
   */
  reservationOrderType?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * For more information about resource groups, see [What is a resource group?](https://help.aliyun.com/document_detail/2381067.html).
   * 
   * @example
   * rg-acfmxazb4ph6aiy****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The role in the peering connection.
   * 
   * @example
   * InitiatingSide
   */
  role?: string;
  /**
   * @remarks
   * The ID of the router to which the router interface belongs.
   * 
   * @example
   * vbr-m5ex0xf63xk8s5bob****
   */
  routerId?: string;
  /**
   * @remarks
   * The ID of the router interface.
   * 
   * @example
   * ri-m5egfc10sednwk2yt****
   */
  routerInterfaceId?: string;
  /**
   * @remarks
   * The type of the router to which the route table belongs. Valid values:
   * 
   * - **VRouter**: vRouter of a VPC.
   * 
   * - **VBR**: Virtual Border Router.
   * 
   * @example
   * VRouter
   */
  routerType?: string;
  /**
   * @remarks
   * The specification of the router interface. Valid values:
   * 
   * - **Mini.2**: 2 Mbps
   * - **Mini.5**: 5 Mbps
   * - **Small.1**: 10 Mbps
   * - **Small.2**: 20 Mbps
   * - **Small.5**: 50 Mbps
   * - **Middle.1**: 100 Mbps
   * - **Middle.2**: 200 Mbps
   * - **Middle.5**: 500 Mbps
   * - **Large.1**: 1000 Mbps
   * - **Large.2**: 2000 Mbps
   * - **Large.5**: 5000 Mbps
   * - **Xlarge.1**: 10000 Mbps
   * 
   * @example
   * Mini.2
   */
  spec?: string;
  /**
   * @remarks
   * The status of the router interface. Valid values:
   * 
   * - **Idle**: not connected.
   * - **AcceptingConnecting**: accepting a connection.
   * - **Connecting**: connecting.
   * - **Activating**: being activated.
   * - **Active**: activated.
   * - **Modifying**: being modified.
   * - **Deactivating**: being frozen.
   * - **Inactive**: frozen.
   * - **Deleting**: being deleted.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the call was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  tags?: DescribeRouterInterfaceAttributeResponseBodyTags;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) to which the router interface belongs.
   * 
   * @example
   * vpc-bp1b49rqrybk45nio****
   */
  vpcInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessPointId: 'AccessPointId',
      bandwidth: 'Bandwidth',
      businessStatus: 'BusinessStatus',
      chargeType: 'ChargeType',
      code: 'Code',
      connectedTime: 'ConnectedTime',
      creationTime: 'CreationTime',
      crossBorder: 'CrossBorder',
      description: 'Description',
      endTime: 'EndTime',
      fastLinkMode: 'FastLinkMode',
      gmtModified: 'GmtModified',
      hasReservationData: 'HasReservationData',
      hcRate: 'HcRate',
      hcThreshold: 'HcThreshold',
      healthCheckSourceIp: 'HealthCheckSourceIp',
      healthCheckStatus: 'HealthCheckStatus',
      healthCheckTargetIp: 'HealthCheckTargetIp',
      message: 'Message',
      name: 'Name',
      oppositeAccessPointId: 'OppositeAccessPointId',
      oppositeBandwidth: 'OppositeBandwidth',
      oppositeInterfaceBusinessStatus: 'OppositeInterfaceBusinessStatus',
      oppositeInterfaceId: 'OppositeInterfaceId',
      oppositeInterfaceOwnerId: 'OppositeInterfaceOwnerId',
      oppositeInterfaceSpec: 'OppositeInterfaceSpec',
      oppositeInterfaceStatus: 'OppositeInterfaceStatus',
      oppositeRegionId: 'OppositeRegionId',
      oppositeRouterId: 'OppositeRouterId',
      oppositeRouterType: 'OppositeRouterType',
      oppositeVpcInstanceId: 'OppositeVpcInstanceId',
      requestId: 'RequestId',
      reservationActiveTime: 'ReservationActiveTime',
      reservationBandwidth: 'ReservationBandwidth',
      reservationInternetChargeType: 'ReservationInternetChargeType',
      reservationOrderType: 'ReservationOrderType',
      resourceGroupId: 'ResourceGroupId',
      role: 'Role',
      routerId: 'RouterId',
      routerInterfaceId: 'RouterInterfaceId',
      routerType: 'RouterType',
      spec: 'Spec',
      status: 'Status',
      success: 'Success',
      tags: 'Tags',
      vpcInstanceId: 'VpcInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPointId: 'string',
      bandwidth: 'number',
      businessStatus: 'string',
      chargeType: 'string',
      code: 'string',
      connectedTime: 'string',
      creationTime: 'string',
      crossBorder: 'boolean',
      description: 'string',
      endTime: 'string',
      fastLinkMode: 'string',
      gmtModified: 'string',
      hasReservationData: 'string',
      hcRate: 'number',
      hcThreshold: 'number',
      healthCheckSourceIp: 'string',
      healthCheckStatus: 'string',
      healthCheckTargetIp: 'string',
      message: 'string',
      name: 'string',
      oppositeAccessPointId: 'string',
      oppositeBandwidth: 'number',
      oppositeInterfaceBusinessStatus: 'string',
      oppositeInterfaceId: 'string',
      oppositeInterfaceOwnerId: 'string',
      oppositeInterfaceSpec: 'string',
      oppositeInterfaceStatus: 'string',
      oppositeRegionId: 'string',
      oppositeRouterId: 'string',
      oppositeRouterType: 'string',
      oppositeVpcInstanceId: 'string',
      requestId: 'string',
      reservationActiveTime: 'string',
      reservationBandwidth: 'string',
      reservationInternetChargeType: 'string',
      reservationOrderType: 'string',
      resourceGroupId: 'string',
      role: 'string',
      routerId: 'string',
      routerInterfaceId: 'string',
      routerType: 'string',
      spec: 'string',
      status: 'string',
      success: 'boolean',
      tags: DescribeRouterInterfaceAttributeResponseBodyTags,
      vpcInstanceId: 'string',
    };
  }

  validate() {
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

