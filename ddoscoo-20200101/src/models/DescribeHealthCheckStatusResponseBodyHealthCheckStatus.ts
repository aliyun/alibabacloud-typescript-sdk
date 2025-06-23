// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeHealthCheckStatusResponseBodyHealthCheckStatusRealServerStatusList } from "./DescribeHealthCheckStatusResponseBodyHealthCheckStatusRealServerStatusList";


export class DescribeHealthCheckStatusResponseBodyHealthCheckStatus extends $dara.Model {
  /**
   * @remarks
   * The forwarding port.
   * 
   * @example
   * 8080
   */
  frontendPort?: number;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * ddoscoo-cn-mp91j1ao****
   */
  instanceId?: string;
  /**
   * @remarks
   * The forwarding protocol. Valid values:
   * 
   * *   **tcp**
   * *   **udp**
   * 
   * @example
   * tcp
   */
  protocol?: string;
  /**
   * @remarks
   * An array that consists of the health states of the IP addresses of the origin server.
   */
  realServerStatusList?: DescribeHealthCheckStatusResponseBodyHealthCheckStatusRealServerStatusList[];
  /**
   * @remarks
   * The health status of the origin server. Valid values:
   * 
   * *   **normal**: healthy
   * *   **abnormal**: unhealthy
   * 
   * @example
   * normal
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      frontendPort: 'FrontendPort',
      instanceId: 'InstanceId',
      protocol: 'Protocol',
      realServerStatusList: 'RealServerStatusList',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      frontendPort: 'number',
      instanceId: 'string',
      protocol: 'string',
      realServerStatusList: { 'type': 'array', 'itemType': DescribeHealthCheckStatusResponseBodyHealthCheckStatusRealServerStatusList },
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.realServerStatusList)) {
      $dara.Model.validateArray(this.realServerStatusList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

