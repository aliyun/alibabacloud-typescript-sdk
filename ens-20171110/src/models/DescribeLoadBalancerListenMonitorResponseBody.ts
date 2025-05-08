// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeLoadBalancerListenMonitorResponseBodyLoadBalancerMonitorListenData } from "./DescribeLoadBalancerListenMonitorResponseBodyLoadBalancerMonitorListenData";


export class DescribeLoadBalancerListenMonitorResponseBody extends $dara.Model {
  /**
   * @remarks
   * The TCP/UDP monitoring data of the ELB instance.
   */
  loadBalancerMonitorListenData?: DescribeLoadBalancerListenMonitorResponseBodyLoadBalancerMonitorListenData[];
  /**
   * @remarks
   * Id of the request.
   * 
   * @example
   * C0003E8B-B930-4F59-ADC0-0E209A9012A8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      loadBalancerMonitorListenData: 'LoadBalancerMonitorListenData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerMonitorListenData: { 'type': 'array', 'itemType': DescribeLoadBalancerListenMonitorResponseBodyLoadBalancerMonitorListenData },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.loadBalancerMonitorListenData)) {
      $dara.Model.validateArray(this.loadBalancerMonitorListenData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

