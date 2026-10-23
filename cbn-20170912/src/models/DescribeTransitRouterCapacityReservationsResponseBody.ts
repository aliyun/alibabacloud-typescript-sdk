// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTransitRouterCapacityReservationsResponseBodyDeploymentSets extends $dara.Model {
  /**
   * @example
   * ds-badxcs*****
   */
  deploymentSetID?: string;
  /**
   * @example
   * cn-shanghai-b
   */
  zoneID?: string;
  static names(): { [key: string]: string } {
    return {
      deploymentSetID: 'DeploymentSetID',
      zoneID: 'ZoneID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentSetID: 'string',
      zoneID: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTransitRouterCapacityReservationsResponseBodyMinimumTransitRouterCapacitiesDataProcessGbps extends $dara.Model {
  /**
   * @example
   * 100
   */
  effective?: number;
  /**
   * @example
   * 200
   */
  target?: number;
  static names(): { [key: string]: string } {
    return {
      effective: 'Effective',
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effective: 'number',
      target: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTransitRouterCapacityReservationsResponseBodyMinimumTransitRouterCapacitiesState extends $dara.Model {
  /**
   * @example
   * Reservation.InsufficientCapacity
   */
  reason?: string;
  /**
   * @example
   * Pending
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      reason: 'Reason',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reason: 'string',
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

export class DescribeTransitRouterCapacityReservationsResponseBodyMinimumTransitRouterCapacities extends $dara.Model {
  dataProcessGbps?: DescribeTransitRouterCapacityReservationsResponseBodyMinimumTransitRouterCapacitiesDataProcessGbps;
  state?: DescribeTransitRouterCapacityReservationsResponseBodyMinimumTransitRouterCapacitiesState;
  /**
   * @example
   * cn-beijing-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      dataProcessGbps: 'DataProcessGbps',
      state: 'State',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataProcessGbps: DescribeTransitRouterCapacityReservationsResponseBodyMinimumTransitRouterCapacitiesDataProcessGbps,
      state: DescribeTransitRouterCapacityReservationsResponseBodyMinimumTransitRouterCapacitiesState,
      zoneId: 'string',
    };
  }

  validate() {
    if(this.dataProcessGbps && typeof (this.dataProcessGbps as any).validate === 'function') {
      (this.dataProcessGbps as any).validate();
    }
    if(this.state && typeof (this.state as any).validate === 'function') {
      (this.state as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTransitRouterCapacityReservationsResponseBody extends $dara.Model {
  deploymentSets?: DescribeTransitRouterCapacityReservationsResponseBodyDeploymentSets[];
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 2026-10-19T06:31:49Z
   */
  lastModifiedTime?: string;
  minimumTransitRouterCapacities?: DescribeTransitRouterCapacityReservationsResponseBodyMinimumTransitRouterCapacities[];
  /**
   * @example
   * 0C2EE7A8-74D4-4081-8236-CEBDE3BBCF50
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deploymentSets: 'DeploymentSets',
      lastModifiedTime: 'LastModifiedTime',
      minimumTransitRouterCapacities: 'MinimumTransitRouterCapacities',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentSets: { 'type': 'array', 'itemType': DescribeTransitRouterCapacityReservationsResponseBodyDeploymentSets },
      lastModifiedTime: 'string',
      minimumTransitRouterCapacities: { 'type': 'array', 'itemType': DescribeTransitRouterCapacityReservationsResponseBodyMinimumTransitRouterCapacities },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.deploymentSets)) {
      $dara.Model.validateArray(this.deploymentSets);
    }
    if(Array.isArray(this.minimumTransitRouterCapacities)) {
      $dara.Model.validateArray(this.minimumTransitRouterCapacities);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

