// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeServerLoadBalancerMonitorResponseBodyServerLoadBalancerMonitorData } from "./DescribeServerLoadBalancerMonitorResponseBodyServerLoadBalancerMonitorData";


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

