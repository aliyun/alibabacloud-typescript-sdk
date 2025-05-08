// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TrafficPolicyLoadBalancerSettings } from "./TrafficPolicyLoadBalancerSettings";
import { TrafficPolicyTlsSetting } from "./TrafficPolicyTlsSetting";


export class TrafficPolicy extends $dara.Model {
  loadBalancerSettings?: TrafficPolicyLoadBalancerSettings;
  tlsSetting?: TrafficPolicyTlsSetting;
  static names(): { [key: string]: string } {
    return {
      loadBalancerSettings: 'LoadBalancerSettings',
      tlsSetting: 'TlsSetting',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerSettings: TrafficPolicyLoadBalancerSettings,
      tlsSetting: TrafficPolicyTlsSetting,
    };
  }

  validate() {
    if(this.loadBalancerSettings && typeof (this.loadBalancerSettings as any).validate === 'function') {
      (this.loadBalancerSettings as any).validate();
    }
    if(this.tlsSetting && typeof (this.tlsSetting as any).validate === 'function') {
      (this.tlsSetting as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

