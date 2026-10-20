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
   * The log business time. The log collection granularity is 1 minute.
   * 
   * @example
   * 2024-05-16 15:00:00
   */
  bizTime?: string;
  /**
   * @remarks
   * The ID of the edge node.
   * 
   * @example
   * cn-fuzhou-7
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The load balancing instance ID.
   * 
   * @example
   * lb-5rcvo1n1t3hykfhhjwjgqp****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The load balancing instance name.
   * 
   * @example
   * esk-edge-service-lb-8377****
   */
  loadBalancerName?: string;
  /**
   * @remarks
   * The load balancing instance specification.
   * 
   * @example
   * elb.s2.medium
   */
  loadBalancerSpec?: string;
  /**
   * @remarks
   * The request protocol, such as http, https, and tcp.
   * 
   * @example
   * tcp
   */
  proto?: string;
  /**
   * @remarks
   * The number of 2xx status code responses.
   * 
   * @example
   * 10
   */
  reqs2xx?: number;
  /**
   * @remarks
   * The number of 3xx status code responses.
   * 
   * @example
   * 0
   */
  reqs3xx?: number;
  /**
   * @remarks
   * The number of 4xx status code responses.
   * 
   * @example
   * 0
   */
  reqs4xx?: number;
  /**
   * @remarks
   * The number of 5xx status code responses.
   * 
   * @example
   * 10
   */
  reqs5xx?: number;
  /**
   * @remarks
   * The average request latency in milliseconds.
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
   * The tunnel ID.
   * 
   * @example
   * 52497
   */
  vni?: number;
  /**
   * @remarks
   * The VIP port, such as 80, 8080, and 443.
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

export class DescribeServerLoadBalancerListenMonitorResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request。
   * 
   * @example
   * 125B04C7-3D0D-4245-AF96-14E3758E3F06
   */
  requestId?: string;
  /**
   * @remarks
   * The array of objects.
   */
  serverLoadBalancerMonitorData?: DescribeServerLoadBalancerListenMonitorResponseBodyServerLoadBalancerMonitorData[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      serverLoadBalancerMonitorData: 'ServerLoadBalancerMonitorData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      serverLoadBalancerMonitorData: { 'type': 'array', 'itemType': DescribeServerLoadBalancerListenMonitorResponseBodyServerLoadBalancerMonitorData },
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

