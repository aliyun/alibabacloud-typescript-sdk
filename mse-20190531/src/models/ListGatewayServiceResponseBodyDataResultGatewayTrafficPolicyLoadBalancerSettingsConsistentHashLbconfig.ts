// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListGatewayServiceResponseBodyDataResultGatewayTrafficPolicyLoadBalancerSettingsConsistentHashLBConfigHttpCookie } from "./ListGatewayServiceResponseBodyDataResultGatewayTrafficPolicyLoadBalancerSettingsConsistentHashLbconfigHttpCookie";


export class ListGatewayServiceResponseBodyDataResultGatewayTrafficPolicyLoadBalancerSettingsConsistentHashLBConfig extends $dara.Model {
  /**
   * @remarks
   * The type based on which consistent hashing load balancing is performed.
   * 
   * *   HEADER
   * *   COOKIE
   * *   SOURCE_IP
   * *   QUERY_PARAMETER
   * 
   * @example
   * HEADER
   */
  consistentHashLBType?: string;
  /**
   * @remarks
   * The cookie-based load balancing parameters.
   */
  httpCookie?: ListGatewayServiceResponseBodyDataResultGatewayTrafficPolicyLoadBalancerSettingsConsistentHashLBConfigHttpCookie;
  /**
   * @remarks
   * The minimum value of the hash ring.
   * 
   * @example
   * 10000
   */
  minimumRingSize?: number;
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * param
   */
  parameterName?: string;
  static names(): { [key: string]: string } {
    return {
      consistentHashLBType: 'ConsistentHashLBType',
      httpCookie: 'HttpCookie',
      minimumRingSize: 'MinimumRingSize',
      parameterName: 'ParameterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consistentHashLBType: 'string',
      httpCookie: ListGatewayServiceResponseBodyDataResultGatewayTrafficPolicyLoadBalancerSettingsConsistentHashLBConfigHttpCookie,
      minimumRingSize: 'number',
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

