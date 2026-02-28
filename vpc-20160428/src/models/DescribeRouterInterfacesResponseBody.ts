// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRouterInterfacesResponseBodyRouterInterfaceSetRouterInterfaceTypeTagsTags extends $dara.Model {
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

export class DescribeRouterInterfacesResponseBodyRouterInterfaceSetRouterInterfaceTypeTags extends $dara.Model {
  tags?: DescribeRouterInterfacesResponseBodyRouterInterfaceSetRouterInterfaceTypeTagsTags[];
  static names(): { [key: string]: string } {
    return {
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tags: { 'type': 'array', 'itemType': DescribeRouterInterfacesResponseBodyRouterInterfaceSetRouterInterfaceTypeTagsTags },
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

export class DescribeRouterInterfacesResponseBodyRouterInterfaceSetRouterInterfaceType extends $dara.Model {
  accessPointId?: string;
  bandwidth?: number;
  businessStatus?: string;
  chargeType?: string;
  connectedTime?: string;
  creationTime?: string;
  crossBorder?: boolean;
  description?: string;
  endTime?: string;
  fastLinkMode?: boolean;
  hasReservationData?: string;
  hcRate?: number;
  hcThreshold?: number;
  healthCheckSourceIp?: string;
  healthCheckTargetIp?: string;
  ipv6Status?: string;
  name?: string;
  oppositeAccessPointId?: string;
  oppositeBandwidth?: number;
  oppositeInterfaceBusinessStatus?: string;
  oppositeInterfaceId?: string;
  oppositeInterfaceOwnerId?: string;
  oppositeInterfaceSpec?: string;
  oppositeInterfaceStatus?: string;
  oppositeRegionId?: string;
  oppositeRouterId?: string;
  oppositeRouterType?: string;
  oppositeVpcInstanceId?: string;
  reservationActiveTime?: string;
  reservationBandwidth?: string;
  reservationInternetChargeType?: string;
  reservationOrderType?: string;
  resourceGroupId?: string;
  role?: string;
  routerId?: string;
  routerInterfaceId?: string;
  routerType?: string;
  spec?: string;
  status?: string;
  tags?: DescribeRouterInterfacesResponseBodyRouterInterfaceSetRouterInterfaceTypeTags;
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

export class DescribeRouterInterfacesResponseBodyRouterInterfaceSet extends $dara.Model {
  routerInterfaceType?: DescribeRouterInterfacesResponseBodyRouterInterfaceSetRouterInterfaceType[];
  static names(): { [key: string]: string } {
    return {
      routerInterfaceType: 'RouterInterfaceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routerInterfaceType: { 'type': 'array', 'itemType': DescribeRouterInterfacesResponseBodyRouterInterfaceSetRouterInterfaceType },
    };
  }

  validate() {
    if(Array.isArray(this.routerInterfaceType)) {
      $dara.Model.validateArray(this.routerInterfaceType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouterInterfacesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Maximum value: **50**. Default value: **10**.
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
   * C7F6FCBD-F9CC-4501-8EF3-CDC9577CAE45
   */
  requestId?: string;
  routerInterfaceSet?: DescribeRouterInterfacesResponseBodyRouterInterfaceSet;
  /**
   * @remarks
   * The number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      routerInterfaceSet: 'RouterInterfaceSet',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      routerInterfaceSet: DescribeRouterInterfacesResponseBodyRouterInterfaceSet,
      totalCount: 'number',
    };
  }

  validate() {
    if(this.routerInterfaceSet && typeof (this.routerInterfaceSet as any).validate === 'function') {
      (this.routerInterfaceSet as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

