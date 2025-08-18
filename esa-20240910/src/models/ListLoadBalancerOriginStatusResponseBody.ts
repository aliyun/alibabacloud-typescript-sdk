// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLoadBalancerOriginStatusResponseBodyOriginStatus extends $dara.Model {
  /**
   * @remarks
   * ID of the load balancer.
   * 
   * @example
   * 99874066052****
   */
  loadBalancerId?: number;
  /**
   * @remarks
   * ID of the origin.
   * 
   * @example
   * 99750209487****
   */
  originId?: number;
  /**
   * @remarks
   * ID of the source address pool.
   * 
   * @example
   * 99750209487****
   */
  poolId?: number;
  /**
   * @remarks
   * The origin pool to which the source belongs, under this load balancer. Only \\"default_pool\\" (default address pool) will be displayed; other types will return an empty string.
   * 
   * @example
   * default_pool
   */
  poolType?: string;
  /**
   * @remarks
   * Reason for the probe failure.
   * 
   * @example
   * TCP connection error
   */
  reason?: string;
  /**
   * @remarks
   * Status of the origin:
   * - Healthy(healthy): The probe result is available.
   * - Unhealthy(unhealthy): The probe result is unavailable.
   * - Unknown(unknown): Unknown, the monitor has not yet probed.
   * - Undetected(undetected): The load balancer to which the origin belongs is not bound to a monitor.
   * 
   * @example
   * healthy
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      loadBalancerId: 'LoadBalancerId',
      originId: 'OriginId',
      poolId: 'PoolId',
      poolType: 'PoolType',
      reason: 'Reason',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerId: 'number',
      originId: 'number',
      poolId: 'number',
      poolType: 'string',
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

export class ListLoadBalancerOriginStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * List of origin statuses under the load balancer.
   */
  originStatus?: ListLoadBalancerOriginStatusResponseBodyOriginStatus[];
  /**
   * @remarks
   * Request ID, used for tracking the request.
   * 
   * @example
   * 0AEDAF20-4DDF-4165-8750-47FF9C1929C9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      originStatus: 'OriginStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      originStatus: { 'type': 'array', 'itemType': ListLoadBalancerOriginStatusResponseBodyOriginStatus },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.originStatus)) {
      $dara.Model.validateArray(this.originStatus);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

