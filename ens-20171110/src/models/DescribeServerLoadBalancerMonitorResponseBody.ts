// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeServerLoadBalancerMonitorResponseBodyServerLoadBalancerMonitorData extends $dara.Model {
  /**
   * @remarks
   * The total number of requests.
   * 
   * @example
   * 30
   */
  acc?: number;
  /**
   * @remarks
   * The business time of the log. Logs are collected every minute.
   * 
   * @example
   * 2024-09-15 16:00:00
   */
  bizTime?: string;
  /**
   * @remarks
   * The ID of the node to which the ELB instance belongs.
   * 
   * @example
   * cn-wuxi-10
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The ID of the ELB instance.
   * 
   * @example
   * lb-5sc1s9zrui8lpb8u7cl4f****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The name of the ELB instance.
   * 
   * @example
   * esk-edge-service-lb-a34****
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
   * The number of requests with HTTP 2xx status code returned.
   * 
   * @example
   * 25
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
   * 5
   */
  reqs4xx?: number;
  /**
   * @remarks
   * The number of requests with HTTP 5xx status code returned.
   * 
   * @example
   * 0
   */
  reqs5xx?: number;
  /**
   * @remarks
   * The average response time. Unit: milliseconds.
   * 
   * @example
   * 1404
   */
  rtAvg?: number;
  /**
   * @remarks
   * The virtual IP address (VIP) of the instance.
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
   * 3018
   */
  vni?: number;
  static names(): { [key: string]: string } {
    return {
      acc: 'Acc',
      bizTime: 'BizTime',
      ensRegionId: 'EnsRegionId',
      loadBalancerId: 'LoadBalancerId',
      loadBalancerName: 'LoadBalancerName',
      loadBalancerSpec: 'LoadBalancerSpec',
      reqs2xx: 'Reqs2xx',
      reqs3xx: 'Reqs3xx',
      reqs4xx: 'Reqs4xx',
      reqs5xx: 'Reqs5xx',
      rtAvg: 'RtAvg',
      vip: 'Vip',
      vni: 'Vni',
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
      reqs2xx: 'number',
      reqs3xx: 'number',
      reqs4xx: 'number',
      reqs5xx: 'number',
      rtAvg: 'number',
      vip: 'string',
      vni: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServerLoadBalancerMonitorResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * AAE90880-4970-4D81-A534-A6C0F3631F74
   */
  requestId?: string;
  /**
   * @remarks
   * The array of the monitoring data.
   */
  serverLoadBalancerMonitorData?: DescribeServerLoadBalancerMonitorResponseBodyServerLoadBalancerMonitorData[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      serverLoadBalancerMonitorData: 'ServerLoadBalancerMonitorData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      serverLoadBalancerMonitorData: { 'type': 'array', 'itemType': DescribeServerLoadBalancerMonitorResponseBodyServerLoadBalancerMonitorData },
    };
  }

  validate() {
    if(Array.isArray(this.serverLoadBalancerMonitorData)) {
      $dara.Model.validateArray(this.serverLoadBalancerMonitorData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

