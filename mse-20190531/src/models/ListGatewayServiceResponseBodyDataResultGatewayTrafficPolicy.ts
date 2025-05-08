// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListGatewayServiceResponseBodyDataResultGatewayTrafficPolicyLoadBalancerSettings } from "./ListGatewayServiceResponseBodyDataResultGatewayTrafficPolicyLoadBalancerSettings";
import { ListGatewayServiceResponseBodyDataResultGatewayTrafficPolicyTls } from "./ListGatewayServiceResponseBodyDataResultGatewayTrafficPolicyTls";


export class ListGatewayServiceResponseBodyDataResultGatewayTrafficPolicy extends $dara.Model {
  /**
   * @remarks
   * The load balancing settings.
   */
  loadBalancerSettings?: ListGatewayServiceResponseBodyDataResultGatewayTrafficPolicyLoadBalancerSettings;
  /**
   * @remarks
   * The Transport Layer Security (TLS).
   */
  tls?: ListGatewayServiceResponseBodyDataResultGatewayTrafficPolicyTls;
  static names(): { [key: string]: string } {
    return {
      loadBalancerSettings: 'LoadBalancerSettings',
      tls: 'Tls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerSettings: ListGatewayServiceResponseBodyDataResultGatewayTrafficPolicyLoadBalancerSettings,
      tls: ListGatewayServiceResponseBodyDataResultGatewayTrafficPolicyTls,
    };
  }

  validate() {
    if(this.loadBalancerSettings && typeof (this.loadBalancerSettings as any).validate === 'function') {
      (this.loadBalancerSettings as any).validate();
    }
    if(this.tls && typeof (this.tls as any).validate === 'function') {
      (this.tls as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

