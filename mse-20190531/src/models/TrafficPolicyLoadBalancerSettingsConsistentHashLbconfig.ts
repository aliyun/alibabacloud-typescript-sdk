// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TrafficPolicyLoadBalancerSettingsConsistentHashLBConfigHttpCookie } from "./TrafficPolicyLoadBalancerSettingsConsistentHashLbconfigHttpCookie";


export class TrafficPolicyLoadBalancerSettingsConsistentHashLBConfig extends $dara.Model {
  consistentHashLBType?: string;
  httpCookie?: TrafficPolicyLoadBalancerSettingsConsistentHashLBConfigHttpCookie;
  parameterName?: string;
  static names(): { [key: string]: string } {
    return {
      consistentHashLBType: 'ConsistentHashLBType',
      httpCookie: 'HttpCookie',
      parameterName: 'ParameterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consistentHashLBType: 'string',
      httpCookie: TrafficPolicyLoadBalancerSettingsConsistentHashLBConfigHttpCookie,
      parameterName: 'string',
    };
  }

  validate() {
    if(this.httpCookie && typeof (this.httpCookie as any).validate === 'function') {
      (this.httpCookie as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

