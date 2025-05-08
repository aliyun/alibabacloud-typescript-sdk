// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeServerLoadBalancerListenMonitorResponseBodyServerLoadBalancerMonitorData extends $dara.Model {
  /**
   * @remarks
   * The total number of requests.
   * 
   * @example
   * 20
   */
  acc?: number;
  /**
   * @remarks
   * The business time of the log. Logs are collected every minute.
   * 
   * @example
   * 2024-05-16 15:00:00
   */
  bizTime?: string;
  /**
   * @remarks
   * The ID of the node to which the ELB instance belongs.
   * 
   * @example
   * cn-fuzhou-7
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The ID of the ELB instance.
   * 
   * @example
   * lb-5rcvo1n1t3hykfhhjwjgqp****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The name of the ELB instance.
   * 
   * @example
   * esk-edge-service-lb-8377****
   */
  loadBalancerName?: string;
  /**
   * @remarks
   * The specification of the ELB instance.
   * 
   * @example
   * elb.s2.medium
   */
  loadBalancerSpec?: string;
  /**
   * @remarks
   * The request protocol, such as http, https, or tcp.
   * 
   * @example
   * tcp
   */
  proto?: string;
  /**
   * @remarks
   * The number of requests with HTTP 2xx status code returned.
   * 
   * @example
   * 10
   */
  reqs2xx?: number;
  /**
   * @remarks
   * The number of requests with HTTP 3xx status code returned.
   * 
   * @example
   * 0
   */
  reqs3xx?: number;
  /**
   * @remarks
   * The number of requests with HTTP 4xx status code returned.
   * 
   * @example
   * 0
   */
  reqs4xx?: number;
  /**
   * @remarks
   * The number of requests with HTTP 5xx status code returned.
   * 
   * @example
   * 10
   */
  reqs5xx?: number;
  /**
   * @remarks
   * The average response time. Unit: milliseconds.
   * 
   * @example
   * 1037
   */
  rtAvg?: number;
  /**
   * @remarks
   * The VIP of the instance.
   * 
   * @example
   * 10.0****
   */
  vip?: string;
  /**
   * @remarks
   * The ID of the tunnel.
   * 
   * @example
   * 52497
   */
  vni?: number;
  /**
   * @remarks
   * The VIP port, such as 80, 8080, or 443.
   * 
   * @example
   * 80
   */
  vport?: number;
  static names(): { [key: string]: string } {
    return {
      acc: 'Acc',
      bizTime: 'BizTime',
      ensRegionId: 'EnsRegionId',
      loadBalancerId: 'LoadBalancerId',
      loadBalancerName: 'LoadBalancerName',
      loadBalancerSpec: 'LoadBalancerSpec',
      proto: 'Proto',
      reqs2xx: 'Reqs2xx',
      reqs3xx: 'Reqs3xx',
      reqs4xx: 'Reqs4xx',
      reqs5xx: 'Reqs5xx',
      rtAvg: 'RtAvg',
      vip: 'Vip',
      vni: 'Vni',
      vport: 'Vport',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acc: 'number',
      bizTime: 'string',
      ensRegionId: 'string',
      loadBalancerId: 'string',
      loadBalancerName: 'string',
      loadBalancerSpec: 'string',
      proto: 'string',
      reqs2xx: 'number',
      reqs3xx: 'number',
      reqs4xx: 'number',
      reqs5xx: 'number',
      rtAvg: 'number',
      vip: 'string',
      vni: 'number',
      vport: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

