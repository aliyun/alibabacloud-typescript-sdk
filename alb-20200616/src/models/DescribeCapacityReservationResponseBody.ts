// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCapacityReservationResponseBodyCapacityReservationState extends $dara.Model {
  /**
   * @example
   * cn-hangzhou-k
   */
  availabilityZone?: string;
  /**
   * @example
   * 50.0
   */
  effectiveCapacityUnits?: number;
  /**
   * @example
   * INSUFFICIENT_CAPACITY
   */
  reason?: string;
  /**
   * @example
   * Provisioned
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      availabilityZone: 'AvailabilityZone',
      effectiveCapacityUnits: 'EffectiveCapacityUnits',
      reason: 'Reason',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availabilityZone: 'string',
      effectiveCapacityUnits: 'number',
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

export class DescribeCapacityReservationResponseBodyMinimumLoadBalancerCapacity extends $dara.Model {
  /**
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

export class DescribeCapacityReservationResponseBody extends $dara.Model {
  capacityReservationState?: DescribeCapacityReservationResponseBodyCapacityReservationState[];
  /**
   * @example
   * 2
   */
  decreaseRequestsRemaining?: number;
  /**
   * @example
   * 2025-08-22 05:06:58
   */
  lastModifiedTime?: string;
  minimumLoadBalancerCapacity?: DescribeCapacityReservationResponseBodyMinimumLoadBalancerCapacity;
  /**
   * @example
   * 365F4154-92F6-4AE4-92F8-7FF3******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      capacityReservationState: 'CapacityReservationState',
      decreaseRequestsRemaining: 'DecreaseRequestsRemaining',
      lastModifiedTime: 'LastModifiedTime',
      minimumLoadBalancerCapacity: 'MinimumLoadBalancerCapacity',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacityReservationState: { 'type': 'array', 'itemType': DescribeCapacityReservationResponseBodyCapacityReservationState },
      decreaseRequestsRemaining: 'number',
      lastModifiedTime: 'string',
      minimumLoadBalancerCapacity: DescribeCapacityReservationResponseBodyMinimumLoadBalancerCapacity,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.capacityReservationState)) {
      $dara.Model.validateArray(this.capacityReservationState);
    }
    if(this.minimumLoadBalancerCapacity && typeof (this.minimumLoadBalancerCapacity as any).validate === 'function') {
      (this.minimumLoadBalancerCapacity as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

