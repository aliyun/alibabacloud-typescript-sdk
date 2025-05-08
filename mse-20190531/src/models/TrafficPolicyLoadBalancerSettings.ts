// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TrafficPolicyLoadBalancerSettingsConsistentHashLBConfig } from "./TrafficPolicyLoadBalancerSettingsConsistentHashLbconfig";


export class TrafficPolicyLoadBalancerSettings extends $dara.Model {
  consistentHashLBConfig?: TrafficPolicyLoadBalancerSettingsConsistentHashLBConfig;
  /**
   * @example
   * RANDOM
   */
  loadbalancerType?: string;
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
      consistentHashLBConfig: TrafficPolicyLoadBalancerSettingsConsistentHashLBConfig,
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

