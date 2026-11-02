// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNatGatewayCapacityReservationResponseBodyCapacityReservationStatus extends $dara.Model {
  /**
   * @remarks
   * The reason for the processing failure.
   * 
   * @example
   * No Available Resource
   */
  reason?: string;
  /**
   * @remarks
   * The capacity reservation status. Valid values:
   * 
   * - pending: The reservation is in progress.
   * - provisioned: The reservation is completed.
   * - failed: The reservation failed.
   * - deleting: The reservation is being deleted.
   * - deleted: The reservation is deleted.
   * 
   * @example
   * pending
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

export class DescribeNatGatewayCapacityReservationResponseBodyNatGatewayCapacity extends $dara.Model {
  /**
   * @remarks
   * The number of load balancer capacity units (LCUs) reserved per hour.
   * 
   * @example
   * 900
   */
  capacityUnits?: number;
  static names(): { [key: string]: string } {
    return {
      capacityUnits: 'CapacityUnits',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacityUnits: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNatGatewayCapacityReservationResponseBodyNatGatewayPerformanceValues extends $dara.Model {
  /**
   * @remarks
   * The bandwidth value. Unit: Gbit/s.
   * 
   * @example
   * 20
   */
  bandwidth?: number;
  /**
   * @remarks
   * The number of new connections per second (CPS).
   * 
   * @example
   * 100000
   */
  cps?: number;
  /**
   * @remarks
   * The number of packets per second (PPS).
   * 
   * @example
   * 3200000
   */
  pps?: number;
  /**
   * @remarks
   * The number of sessions.
   * 
   * @example
   * 2000000
   */
  sessionCount?: number;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      cps: 'Cps',
      pps: 'Pps',
      sessionCount: 'SessionCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      cps: 'number',
      pps: 'number',
      sessionCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNatGatewayCapacityReservationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The capacity reservation status.
   */
  capacityReservationStatus?: DescribeNatGatewayCapacityReservationResponseBodyCapacityReservationStatus;
  /**
   * @remarks
   * The remaining number of times that you can downgrade the configuration or cancel the capacity reservation.
   * 
   * @example
   * 2
   */
  decreaseRequestsRemaining?: string;
  /**
   * @remarks
   * The time when the capacity reservation was last modified.
   * 
   * @example
   * 2026-07-02 10:07:51
   */
  lastModifiedTime?: number;
  /**
   * @remarks
   * The number of capacity units (CUs) reserved for the NAT gateway.
   */
  natGatewayCapacity?: DescribeNatGatewayCapacityReservationResponseBodyNatGatewayCapacity;
  /**
   * @remarks
   * The ID of the NAT gateway to query.
   * 
   * @example
   * ngw-bp1uewa15k4iy5770****
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The performance metrics of the NAT gateway capacity reservation.
   */
  natGatewayPerformanceValues?: DescribeNatGatewayCapacityReservationResponseBodyNatGatewayPerformanceValues;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 2315DEB7-5E92-423A-91F7-4C1EC9AD97C3
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      capacityReservationStatus: 'CapacityReservationStatus',
      decreaseRequestsRemaining: 'DecreaseRequestsRemaining',
      lastModifiedTime: 'LastModifiedTime',
      natGatewayCapacity: 'NatGatewayCapacity',
      natGatewayId: 'NatGatewayId',
      natGatewayPerformanceValues: 'NatGatewayPerformanceValues',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacityReservationStatus: DescribeNatGatewayCapacityReservationResponseBodyCapacityReservationStatus,
      decreaseRequestsRemaining: 'string',
      lastModifiedTime: 'number',
      natGatewayCapacity: DescribeNatGatewayCapacityReservationResponseBodyNatGatewayCapacity,
      natGatewayId: 'string',
      natGatewayPerformanceValues: DescribeNatGatewayCapacityReservationResponseBodyNatGatewayPerformanceValues,
      requestId: 'string',
    };
  }

  validate() {
    if(this.capacityReservationStatus && typeof (this.capacityReservationStatus as any).validate === 'function') {
      (this.capacityReservationStatus as any).validate();
    }
    if(this.natGatewayCapacity && typeof (this.natGatewayCapacity as any).validate === 'function') {
      (this.natGatewayCapacity as any).validate();
    }
    if(this.natGatewayPerformanceValues && typeof (this.natGatewayPerformanceValues as any).validate === 'function') {
      (this.natGatewayPerformanceValues as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

