// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCapacityReservationRequestMinimumLoadBalancerCapacity extends $dara.Model {
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

export class ModifyCapacityReservationRequest extends $dara.Model {
  /**
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF3898
   */
  clientToken?: string;
  /**
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * alb-iv9gj3spak6fbj****
   */
  loadBalancerId?: string;
  minimumLoadBalancerCapacity?: ModifyCapacityReservationRequestMinimumLoadBalancerCapacity;
  /**
   * @example
   * false
   */
  resetCapacityReservation?: boolean;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      loadBalancerId: 'LoadBalancerId',
      minimumLoadBalancerCapacity: 'MinimumLoadBalancerCapacity',
      resetCapacityReservation: 'ResetCapacityReservation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      loadBalancerId: 'string',
      minimumLoadBalancerCapacity: ModifyCapacityReservationRequestMinimumLoadBalancerCapacity,
      resetCapacityReservation: 'boolean',
    };
  }

  validate() {
    if(this.minimumLoadBalancerCapacity && typeof (this.minimumLoadBalancerCapacity as any).validate === 'function') {
      (this.minimumLoadBalancerCapacity as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

