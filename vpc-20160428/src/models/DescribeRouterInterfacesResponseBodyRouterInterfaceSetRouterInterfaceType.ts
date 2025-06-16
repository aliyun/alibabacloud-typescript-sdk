// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRouterInterfacesResponseBodyRouterInterfaceSetRouterInterfaceTypeTags } from "./DescribeRouterInterfacesResponseBodyRouterInterfaceSetRouterInterfaceTypeTags";


export class DescribeRouterInterfacesResponseBodyRouterInterfaceSetRouterInterfaceType extends $dara.Model {
  /**
   * @remarks
   * The ID of the access point.
   * 
   * @example
   * ap-cn-shanghaiSZ-****
   */
  accessPointId?: string;
  /**
   * @remarks
   * The bandwidth of the router interface. Unit: Mbit/s.
   * 
   * @example
   * 10
   */
  bandwidth?: number;
  /**
   * @remarks
   * The service status of the router interface. Valid values:
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
   * The billing method.
   * 
   * @example
   * PayByTraffic
   */
  chargeType?: string;
  /**
   * @remarks
   * The time when the connection was established.
   * 
   * The time follows the ISO8601 standard in the `YYYY-MM-DDThh:mmZ` format. The time is displayed in UTC.
   * 
   * @example
   * 2021-06-08T12:20:55
   */
  connectedTime?: string;
  /**
   * @remarks
   * The time when the route table was created.
   * 
   * The time follows the ISO8601 standard in the `YYYY-MM-DDThh:mmZ` format. The time is displayed in UTC.
   * 
   * @example
   * 2021-06-08T12:20:55
   */
  creationTime?: string;
  /**
   * @remarks
   * Indicates whether the connection is a cross-border connection.
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
   * The description of the router interface.
   */
  description?: string;
  /**
   * @remarks
   * The end of the time range during which data was queried.
   * 
   * The time follows the ISO8601 standard in the `YYYY-MM-DDThh:mmZ` format. The time is displayed in UTC.
   * 
   * @example
   * 2021-06-08T12:20:55
   */
  endTime?: string;
  /**
   * @remarks
   * Indicates whether the VBR that is created in the Fast Link mode is uplinked to the router interface. The Fast Link mode helps automatically connect router interfaces that are created for the VBR and its peer VPC. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * false
   */
  fastLinkMode?: boolean;
  /**
   * @remarks
   * Indicates whether renewal data is included.
   * 
   * @example
   * false
   */
  hasReservationData?: string;
  /**
   * @remarks
   * The rate of heath checks.
   * 
   * @example
   * 1
   */
  hcRate?: number;
  /**
   * @remarks
   * The health check threshold.
   * 
   * @example
   * 2
   */
  hcThreshold?: number;
  /**
   * @remarks
   * The source IP address that is used for the health check.
   * 
   * @example
   * 116.62.XX.XX
   */
  healthCheckSourceIp?: string;
  /**
   * @remarks
   * The destination IP address that is used for the health check.
   * 
   * @example
   * 116.62.XX.XX
   */
  healthCheckTargetIp?: string;
  /**
   * @remarks
   * Indicates whether protection against malicious IPv6 traffic is enabled. Valid values:
   * 
   * *   **on**
   * *   **off**
   * *   **unsupport**
   * 
   * @example
   * on
   */
  ipv6Status?: string;
  /**
   * @remarks
   * The custom name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The ID of the peer access point.
   * 
   * @example
   * ap-cn-shanghaiSZ-****
   */
  oppositeAccessPointId?: string;
  /**
   * @remarks
   * The maximum bandwidth of the peer router interface. Unit: Mbit/s.
   * 
   * @example
   * 12
   */
  oppositeBandwidth?: number;
  /**
   * @remarks
   * The service status of the peer router interface.
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
   * ri-bp1itx13bwe6f2wfh****
   */
  oppositeInterfaceId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the peer router interface belongs.
   * 
   * @example
   * 271598332402530847
   */
  oppositeInterfaceOwnerId?: string;
  /**
   * @remarks
   * The specification of the peer router interface.
   * 
   * @example
   * Large
   */
  oppositeInterfaceSpec?: string;
  /**
   * @remarks
   * The status of the peer router interface.
   * 
   * @example
   * Normal
   */
  oppositeInterfaceStatus?: string;
  /**
   * @remarks
   * The region ID of the peer router interface.
   * 
   * @example
   * cn-shanghai
   */
  oppositeRegionId?: string;
  /**
   * @remarks
   * The ID of the router to which the peer router interface belongs.
   * 
   * @example
   * vrt-bp1d3bxtdv68tfd7g****
   */
  oppositeRouterId?: string;
  /**
   * @remarks
   * The type of the router to which the peer router interface belongs.
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
   * vpc-bp1qpo0kug3a20qqe****
   */
  oppositeVpcInstanceId?: string;
  /**
   * @remarks
   * The time when the renewal takes effect.
   * 
   * The time follows the ISO8601 standard in the `YYYY-MM-DDThh:mmZ` format. The time is displayed in UTC.
   * 
   * @example
   * 2021-03-11T16:00:00Z
   */
  reservationActiveTime?: string;
  /**
   * @remarks
   * The maximum bandwidth after the renewal takes effect. Unit: Mbit/s.
   * 
   * @example
   * 10
   */
  reservationBandwidth?: string;
  /**
   * @remarks
   * The metering method that is used after the renewal takes effect. Valid values:
   * 
   * @example
   * PayByBandwidth
   */
  reservationInternetChargeType?: string;
  /**
   * @remarks
   * The type of the renewal order. Valid values:
   * 
   * @example
   * RENEWCHANGE
   */
  reservationOrderType?: string;
  /**
   * @remarks
   * Resource Group ID.
   * 
   * For more information about resource groups, please refer to [What is a Resource Group?](https://help.aliyun.com/document_detail/94475.html)
   * 
   * @example
   * rg-acfmxazb4ph6aiy****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Indicates whether the router interface is the initiator or acceptor of the peering connection.
   * 
   * @example
   * InitiatingSide
   */
  role?: string;
  /**
   * @remarks
   * The ID of the router to which the route entry belongs.
   * 
   * @example
   * vrt-bp1d3bxtdv68tfd7g****
   */
  routerId?: string;
  /**
   * @remarks
   * The ID of the router interface.
   * 
   * @example
   * ri-2zenfgfpyu3v93koa****
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
   * The specification of the router interface.
   * 
   * @example
   * Large
   */
  spec?: string;
  /**
   * @remarks
   * The status of the router interface.
   * 
   * @example
   * active
   */
  status?: string;
  /**
   * @remarks
   * The tags of the resource.
   */
  tags?: DescribeRouterInterfacesResponseBodyRouterInterfaceSetRouterInterfaceTypeTags;
  /**
   * @remarks
   * The ID of the local virtual private cloud (VPC) in the peering connection.
   * 
   * @example
   * vpc-2ze3tq4uxhysg717x****
   */
  vpcInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessPointId: 'AccessPointId',
      bandwidth: 'Bandwidth',
      businessStatus: 'BusinessStatus',
      chargeType: 'ChargeType',
      connectedTime: 'ConnectedTime',
      creationTime: 'CreationTime',
      crossBorder: 'CrossBorder',
      description: 'Description',
      endTime: 'EndTime',
      fastLinkMode: 'FastLinkMode',
      hasReservationData: 'HasReservationData',
      hcRate: 'HcRate',
      hcThreshold: 'HcThreshold',
      healthCheckSourceIp: 'HealthCheckSourceIp',
      healthCheckTargetIp: 'HealthCheckTargetIp',
      ipv6Status: 'Ipv6Status',
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
      connectedTime: 'string',
      creationTime: 'string',
      crossBorder: 'boolean',
      description: 'string',
      endTime: 'string',
      fastLinkMode: 'boolean',
      hasReservationData: 'string',
      hcRate: 'number',
      hcThreshold: 'number',
      healthCheckSourceIp: 'string',
      healthCheckTargetIp: 'string',
      ipv6Status: 'string',
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
      tags: DescribeRouterInterfacesResponseBodyRouterInterfaceSetRouterInterfaceTypeTags,
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

