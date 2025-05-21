// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListGatewaysResponseBodyDataItemsLoadBalancersPorts } from "./ListGatewaysResponseBodyDataItemsLoadBalancersPorts";


export class ListGatewaysResponseBodyDataItemsLoadBalancers extends $dara.Model {
  /**
   * @remarks
   * The load balancer IP address.
   * 
   * @example
   * nlb-xoh3pghr***.cn-hangzhou.nlb.aliyuncs.com
   */
  address?: string;
  /**
   * @remarks
   * The IP version of the address. Valid values:
   * 
   * *   ipv4: IPv4
   * *   ipv6: IPv6
   * 
   * @example
   * ipv4
   */
  addressIpVersion?: string;
  /**
   * @remarks
   * The address type. Valid values:
   * 
   * *   Internet
   * *   Intranet
   * 
   * @example
   * Internet
   */
  addressType?: string;
  /**
   * @remarks
   * Indicates whether the address is the default ingress address of the instance.
   * 
   * @example
   * true
   */
  gatewayDefault?: boolean;
  /**
   * @remarks
   * The load balancer ID.
   * 
   * @example
   * nlb-xqwioje1c91r***
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The mode in which the load balancer is provided. Valid values:
   * 
   * *   Managed: Cloud-native API Gateway manages and provides the load balancer.
   * 
   * @example
   * Managed
   */
  mode?: string;
  /**
   * @remarks
   * The list of listened ports.
   */
  ports?: ListGatewaysResponseBodyDataItemsLoadBalancersPorts[];
  /**
   * @remarks
   * The load balancer status. Valid values:
   * 
   * *   Ready: The load balancer is available.
   * *   NotCreate: The load balancer is not associated with the instance.
   * 
   * @example
   * Ready
   */
  status?: string;
  /**
   * @remarks
   * The load balancer type. Valid values:
   * 
   * *   NLB: Network Load Balancer
   * *   CLB: Classic Load Balancer
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
      ports: { 'type': 'array', 'itemType': ListGatewaysResponseBodyDataItemsLoadBalancersPorts },
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

