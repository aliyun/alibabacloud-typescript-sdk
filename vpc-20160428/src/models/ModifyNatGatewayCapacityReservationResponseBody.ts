// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyNatGatewayCapacityReservationResponseBodyCapacityReservationStatus extends $dara.Model {
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
   * The status of the resource reservation. Valid values:
   * 
   * - pending: The reservation is in progress.
   * 
   * - provisioned: The reservation is completed.
   * 
   * - failed: The reservation failed.
   * 
   * - deleting: The reservation is being deleted.
   * 
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

export class ModifyNatGatewayCapacityReservationResponseBodyNatGatewayCapacity extends $dara.Model {
  /**
   * @remarks
   * The number of LCUs reserved per hour.
   * 
   * @example
   * 100
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

export class ModifyNatGatewayCapacityReservationResponseBodyNatGatewayPerformanceValues extends $dara.Model {
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
   * The number of new connections.
   * 
   * @example
   * 100000
   */
  cps?: number;
  /**
   * @remarks
   * The number of packets. Unit: pps.
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

export class ModifyNatGatewayCapacityReservationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status of the resource reservation.
   */
  capacityReservationStatus?: ModifyNatGatewayCapacityReservationResponseBodyCapacityReservationStatus;
  /**
   * @remarks
   * The remaining number of times that you can downgrade the configuration or cancel the resource reservation.
   * 
   * @example
   * 2
   */
  decreaseRequestsRemaining?: number;
  /**
   * @remarks
   * The number of capacity units (CUs) for the NAT resource reservation.
   */
  natGatewayCapacity?: ModifyNatGatewayCapacityReservationResponseBodyNatGatewayCapacity;
  /**
   * @remarks
   * The ID of the NAT gateway to be modified.
   * 
   * @example
   * ngw-112za33e4****
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The performance metrics of the NAT resource reservation.
   */
  natGatewayPerformanceValues?: ModifyNatGatewayCapacityReservationResponseBodyNatGatewayPerformanceValues;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * B400EF57-60E3-4D61-B8FB-7FA8F72DF5A6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      capacityReservationStatus: 'CapacityReservationStatus',
      decreaseRequestsRemaining: 'DecreaseRequestsRemaining',
      natGatewayCapacity: 'NatGatewayCapacity',
      natGatewayId: 'NatGatewayId',
      natGatewayPerformanceValues: 'NatGatewayPerformanceValues',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacityReservationStatus: ModifyNatGatewayCapacityReservationResponseBodyCapacityReservationStatus,
      decreaseRequestsRemaining: 'number',
      natGatewayCapacity: ModifyNatGatewayCapacityReservationResponseBodyNatGatewayCapacity,
      natGatewayId: 'string',
      natGatewayPerformanceValues: ModifyNatGatewayCapacityReservationResponseBodyNatGatewayPerformanceValues,
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

