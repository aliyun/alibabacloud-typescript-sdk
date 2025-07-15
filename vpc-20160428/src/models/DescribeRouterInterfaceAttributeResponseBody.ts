// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRouterInterfaceAttributeResponseBodyTagsTags extends $dara.Model {
  /**
   * @remarks
   * The key of tag N added to the resource. You must enter at least one tag key and at most 20 tag keys. The tag key cannot be an empty string.
   * 
   * The tag key can be up to 64 characters in length and can contain digits, periods (.), underscores (_), and hyphens (-). It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N added to the resource. You can specify at most 20 tag values. The tag value can be an empty string.
   * 
   * It can be up to 128 characters in length and can contain digits, periods (.), underscores (_), and hyphens (-). It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
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
   * The bandwidth of the router interface. Unit: Mbit/s.
   * 
   * @example
   * 2
   */
  bandwidth?: number;
  /**
   * @remarks
   * The status of the router interface. Valid values:
   * 
   * *   **Normal**
   * *   **FinancialLocked**
   * *   **SecurityLocked**
   * 
   * @example
   * Normal
   */
  businessStatus?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * *   **AfterPay**: pay-as-you-go
   * *   **PrePaid**: subscription
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
   * The time when the connection was established.
   * 
   * @example
   * 2022-04-14T08:58:04Z
   */
  connectedTime?: string;
  /**
   * @remarks
   * The time when the router interface was created.
   * 
   * @example
   * 2022-04-14T08:57:24Z
   */
  creationTime?: string;
  /**
   * @remarks
   * Indicates whether the connection is a cross-border connection. Valid values:
   * 
   * *   **false**
   * *   **true**
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
   * Peer interface.
   */
  description?: string;
  /**
   * @remarks
   * The end of the time range during which data was queried.
   * 
   * @example
   * 2999-09-08T16:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * Indicates whether the VBR that is created in the Fast Link mode is uplinked to the router interface. The Fast Link mode helps automatically connect router interfaces that are created for the VBR and its peer VPC. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * > 
   * 
   * *   This parameter takes effect only when **RouterType** is set to **VBR** and **OppositeRouterType** is set to **VRouter**.
   * 
   * *   When **FastLinkMode** is set to **true**, **Role** must be set to **InitiatingSide**. **AccessPointId**, **OppositeRouterType**, **OpppsiteRouterId**, and **OppositeInterfaceOwnerId** are required.
   * 
   * @example
   * false
   */
  fastLinkMode?: string;
  /**
   * @remarks
   * The time when the router interface was modified.
   * 
   * @example
   * 2022-04-28T10:02:12Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * Indicates whether renewal data is included. Valid values:
   * 
   * *   **false**
   * *   **true**
   * 
   * @example
   * false
   */
  hasReservationData?: string;
  /**
   * @remarks
   * The rate of health checks. Unit: seconds. The value indicates the interval at which probe packets are sent during a health check.
   * 
   * @example
   * 2
   */
  hcRate?: number;
  /**
   * @remarks
   * The healthy threshold. This value indicates the number of probe packets that are sent during a health check. Unit: packets.
   * 
   * @example
   * 8
   */
  hcThreshold?: number;
  /**
   * @remarks
   * The source IP address that is used for the health check.
   * 
   * @example
   * 1.1.XX.XX
   */
  healthCheckSourceIp?: string;
  /**
   * @remarks
   * The status of the health check. Valid values:
   * 
   * *   **Abnormal**
   * *   **Normal**
   * *   **NoRedundantRoute**
   * *   **NoHealthCheckConfig**
   * 
   * @example
   * normal
   */
  healthCheckStatus?: string;
  /**
   * @remarks
   * The destination IP address that is used for the health check.
   * 
   * @example
   * 2.2.XX.XX
   */
  healthCheckTargetIp?: string;
  /**
   * @remarks
   * The response parameters.
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
   * The maximum bandwidth of the peer router interface. Unit: Mbit/s.
   * 
   * @example
   * 0
   */
  oppositeBandwidth?: number;
  /**
   * @remarks
   * The service status of the peer router interface. Valid values:
   * 
   * *   **Normal**
   * *   **FinancialLocked**
   * *   **SecurityLocked**
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
   * The ID of the Alibaba Cloud account to which the peer router interface belongs.
   * 
   * @example
   * 1321932713****
   */
  oppositeInterfaceOwnerId?: string;
  /**
   * @remarks
   * The specification of the peer router interface. Valid values:
   * 
   * *   **Mini.2**: 2 Mbit/s
   * *   **Mini.5**: 5 Mbit/s
   * *   **Small.1**: 10 Mbit/s
   * *   **Small.2**: 20 Mbit/s
   * *   **Small.5**: 50 Mbit/s
   * *   **Middle.1**: 100 Mbit/s
   * *   **Middle.2**: 200 Mbit/s
   * *   **Middle.5**: 500 Mbit/s
   * *   **Large.1**: 1,000 Mbit/s
   * *   **Large.2**: 2,000 Mbit/s
   * *   **Large.5**: 5,000 Mbit/s
   * *   **Xlarge.1**: 10,000 Mbit/s
   * *   **Negative**: not applicable
   * 
   * @example
   * Negative
   */
  oppositeInterfaceSpec?: string;
  /**
   * @remarks
   * The status of the peer router interface. Valid values:
   * 
   * *   **Idle**
   * *   **AcceptingConnecting**
   * *   **Connecting**
   * *   **Activating**
   * *   **Active**
   * *   **Modifying**
   * *   **Deactivating**
   * *   **Inactive**
   * *   **Deleting**
   * *   **Deleted**
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
   * *   **VRouter**
   * *   **VBR**
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
   * The time when the renewal takes effect.
   * 
   * @example
   * 2022-06-11T16:00:00Z
   */
  reservationActiveTime?: string;
  /**
   * @remarks
   * The maximum bandwidth after the renewal takes effect. Unit: Mbit/s.
   * 
   * @example
   * 100
   */
  reservationBandwidth?: string;
  /**
   * @remarks
   * The metering method that is used after the renewal takes effect. Valid values: If **PayByBandwidth** is returned, it indicates that the Express Connect circuit is billed on a pay-by-bandwidth basis.
   * 
   * @example
   * PayByBandwidth
   */
  reservationInternetChargeType?: string;
  /**
   * @remarks
   * The type of the renewal order. Only **RENEW** may be returned, which indicates that the order is placed for service renewal.
   * 
   * @example
   * RENEW
   */
  reservationOrderType?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * For more information about resource groups, see [What is a resource group?](https://help.aliyun.com/document_detail/94475.html)
   * 
   * @example
   * rg-acfmxazb4ph6aiy****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The role of the router interface in the peering connection.
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
   * *   **VRouter**
   * *   **VBR**
   * 
   * @example
   * VRouter
   */
  routerType?: string;
  /**
   * @remarks
   * The specification of the router interface. Valid values:
   * 
   * *   **Mini.2**: 2 Mbit/s
   * *   **Mini.5**: 5 Mbit/s
   * *   **Small.1**: 10 Mbit/s
   * *   **Small.2**: 20 Mbit/s
   * *   **Small.5**: 50 Mbit/s
   * *   **Middle.1**: 100 Mbit/s
   * *   **Middle.2**: 200 Mbit/s
   * *   **Middle.5**: 500 Mbit/s
   * *   **Large.1**: 1,000 Mbit/s
   * *   **Large.2**: 2,000 Mbit/s
   * *   **Large.5**: 5,000 Mbit/s
   * *   **Xlarge.1**: 10,000 Mbit/s
   * 
   * @example
   * Mini.2
   */
  spec?: string;
  /**
   * @remarks
   * The status of the router interface. Valid values:
   * 
   * *   **Idle**
   * *   **AcceptingConnecting**
   * *   **Connecting**
   * *   **Activating**
   * *   **Active**
   * *   **Modifying**
   * *   **Deactivating**
   * *   **Inactive**
   * *   **Deleting**
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values: true and false.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The tag of the resource.
   */
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

