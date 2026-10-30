// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTransitRouterCapacityReservationsResponseBodyDeploymentSets extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the deployment set configured in the specified active zone of the transit router, which handles forward and routing tasks.
   * 
   * @example
   * ds-badxcs*****
   */
  deploymentSetID?: string;
  /**
   * @remarks
   * The zone for which you want to modify the deployment set of the resource reservation.
   * 
   * - To cancel the deployment set, specify the zone and leave the deployment set instance ID empty.
   * 
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
   * @remarks
   * The effective reserved value for the specified zone in the resource reservation.
   * 
   * - The effective reserved value refers to the current billed value for the resource reservation.
   * 
   * @example
   * 100
   */
  effective?: number;
  /**
   * @remarks
   * The target reserved value for the specified active zone in the resource reservation.
   * 
   * - In scenarios where you decrease the quota, the change takes effect in the next month, and the effective reserved value is updated in synchronization.
   * - Upgrade and initial reservation scenarios require spooling by Alibaba Cloud and take effect immediately after the spooling is complete.
   * 
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
   * @remarks
   * The reason for failure when the reservation status is ProvisionFailed.
   * 
   * - For example, Reservation.InsufficientCapacity indicates that resources are insufficient to meet the target reserved value.
   * 
   * @example
   * Reservation.InsufficientCapacity
   */
  reason?: string;
  /**
   * @remarks
   * The resource reservation status. Valid values:
   * - Pending: The initial reservation is initiated and is pending processing by Alibaba Cloud.
   * - Provisioning: Alibaba Cloud is processing the reservation request.
   * - Provisioned: The reservation is successful.
   * - ProvisionFailed: The reservation failed. You can refer to the failure reason.
   * - Updating: The reservation is being updated. Operations such as modifying the deployment set or increasing the reserved value require spooling by Alibaba Cloud.
   * 
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
  /**
   * @remarks
   * The reserved capacity information for the specified zone in the resource reservation.
   */
  dataProcessGbps?: DescribeTransitRouterCapacityReservationsResponseBodyMinimumTransitRouterCapacitiesDataProcessGbps;
  /**
   * @remarks
   * The status information of the specified zone in the resource reservation.
   */
  state?: DescribeTransitRouterCapacityReservationsResponseBodyMinimumTransitRouterCapacitiesState;
  /**
   * @remarks
   * The ID of the specified zone for the resource reservation.
   * 
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
  /**
   * @remarks
   * The deployment set information specified for the resource reservation.
   */
  deploymentSets?: DescribeTransitRouterCapacityReservationsResponseBodyDeploymentSets[];
  /**
   * @remarks
   * The time when the resource reservation was last modified.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 2026-10-19T06:31:49Z
   */
  lastModifiedTime?: string;
  /**
   * @remarks
   * The list of reserved capacity information for each zone in the resource reservation.
   */
  minimumTransitRouterCapacities?: DescribeTransitRouterCapacityReservationsResponseBodyMinimumTransitRouterCapacities[];
  /**
   * @remarks
   * The request ID.
   * 
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

