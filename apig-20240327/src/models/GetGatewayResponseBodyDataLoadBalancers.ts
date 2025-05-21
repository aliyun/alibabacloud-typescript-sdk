// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetGatewayResponseBodyDataLoadBalancersPorts } from "./GetGatewayResponseBodyDataLoadBalancersPorts";


export class GetGatewayResponseBodyDataLoadBalancers extends $dara.Model {
  /**
   * @remarks
   * The address of the load balancer.
   * 
   * @example
   * nlb-xoh3pghr***.cn-hangzhou.nlb.aliyuncs.com
   */
  address?: string;
  /**
   * @remarks
   * The IP version of the protocol:
   * - ipv4: IPv4 type.
   * - ipv6: IPv6 type.
   * 
   * @example
   * ipv4
   */
  addressIpVersion?: string;
  /**
   * @remarks
   * Load balancer address type:
   * - Internet: Public.
   * - Intranet: Private.
   * 
   * @example
   * Internet
   */
  addressType?: string;
  /**
   * @remarks
   * Whether it is the default entry address for the gateway.
   * 
   * @example
   * true
   */
  gatewayDefault?: boolean;
  /**
   * @remarks
   * Load balancer ID.
   * 
   * @example
   * nlb-xoh3pghru7c***
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The provision mode of the load balancer for the gateway:
   * - Managed: Managed by the Cloud Native API Gateway.
   * 
   * @example
   * Managed
   */
  mode?: string;
  /**
   * @remarks
   * List of listening ports.
   */
  ports?: GetGatewayResponseBodyDataLoadBalancersPorts[];
  /**
   * @remarks
   * The status of the load balancer:
   * - Ready: Available.
   * - NotCreate: Not associated with an instance.
   * 
   * @example
   * Ready
   */
  status?: string;
  /**
   * @remarks
   * The type of load balancer:
   * - NLB: Network Load Balancer.
   * - CLB: Classic Load Balancer.
   * 
   * @example
   * NLB
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'address',
      addressIpVersion: 'addressIpVersion',
      addressType: 'addressType',
      gatewayDefault: 'gatewayDefault',
      loadBalancerId: 'loadBalancerId',
      mode: 'mode',
      ports: 'ports',
      status: 'status',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      addressIpVersion: 'string',
      addressType: 'string',
      gatewayDefault: 'boolean',
      loadBalancerId: 'string',
      mode: 'string',
      ports: { 'type': 'array', 'itemType': GetGatewayResponseBodyDataLoadBalancersPorts },
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ports)) {
      $dara.Model.validateArray(this.ports);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

