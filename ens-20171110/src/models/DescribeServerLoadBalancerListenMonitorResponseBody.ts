// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeServerLoadBalancerListenMonitorResponseBodyServerLoadBalancerMonitorData } from "./DescribeServerLoadBalancerListenMonitorResponseBodyServerLoadBalancerMonitorData";


export class DescribeServerLoadBalancerListenMonitorResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 125B04C7-3D0D-4245-AF96-14E3758E3F06
   */
  requestId?: string;
  /**
   * @remarks
   * The array of the monitoring data.
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

