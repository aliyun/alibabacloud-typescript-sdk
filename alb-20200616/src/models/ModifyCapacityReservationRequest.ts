// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCapacityReservationRequestMinimumLoadBalancerCapacity extends $dara.Model {
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

export class ModifyCapacityReservationRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * > If you do not specify this parameter, the system uses the RequestId of the API request as the ClientToken. The RequestId may be different for each API request.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF3898
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * - **true**: Sends a dry run request without reserving resources. The system checks required parameters, request format, and service limits. If the check fails, the corresponding error is returned. If the check succeeds, the `DryRunOperation` error code is returned.
   * - **false** (default): Sends a normal request. After the check succeeds, an HTTP 2xx status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The instance ID of the Application Load Balancing instance. Before you configure a capacity reservation, the instance must have at least one listener in the Running state.
   * 
   * This parameter is required.
   * 
   * @example
   * alb-iv9gj3spak6fbj****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The minimum reserved load balancing capacity.
   */
  minimumLoadBalancerCapacity?: ModifyCapacityReservationRequestMinimumLoadBalancerCapacity;
  /**
   * @remarks
   * Specifies whether to cancel the capacity reservation. Valid values:
   * * **true**: Cancels the capacity reservation.
   * * **false** (default): Does not cancel the capacity reservation. You do not need to specify this parameter when you create or modify a capacity reservation.
   * 
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

