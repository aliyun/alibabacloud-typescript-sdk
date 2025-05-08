// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListGatewayServiceResponseBodyDataResultGatewayTrafficPolicyLoadBalancerSettingsConsistentHashLBConfig } from "./ListGatewayServiceResponseBodyDataResultGatewayTrafficPolicyLoadBalancerSettingsConsistentHashLbconfig";


export class ListGatewayServiceResponseBodyDataResultGatewayTrafficPolicyLoadBalancerSettings extends $dara.Model {
  /**
   * @remarks
   * The consistent hashing settings.
   */
  consistentHashLBConfig?: ListGatewayServiceResponseBodyDataResultGatewayTrafficPolicyLoadBalancerSettingsConsistentHashLBConfig;
  /**
   * @remarks
   * The load balancing type.
   * 
   * *   ROUND_ROBIN
   * *   LEAST_CONN
   * *   RANDOM
   * *   CONSISTENT_HASH
   * 
   * @example
   * RANDOM
   */
  loadbalancerType?: string;
  /**
   * @remarks
   * The prefetch time of the least connection load balancing.
   * 
   * @example
   * 10
   */
  warmupDuration?: number;
  static names(): { [key: string]: string } {
    return {
      consistentHashLBConfig: 'ConsistentHashLBConfig',
      loadbalancerType: 'LoadbalancerType',
      warmupDuration: 'WarmupDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consistentHashLBConfig: ListGatewayServiceResponseBodyDataResultGatewayTrafficPolicyLoadBalancerSettingsConsistentHashLBConfig,
      loadbalancerType: 'string',
      warmupDuration: 'number',
    };
  }

  validate() {
    if(this.consistentHashLBConfig && typeof (this.consistentHashLBConfig as any).validate === 'function') {
      (this.consistentHashLBConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

