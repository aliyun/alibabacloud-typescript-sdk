// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHealthCheckStatusResponseBodyHealthCheckStatusRealServerStatusList extends $dara.Model {
  /**
   * @remarks
   * The IP address of the origin server.
   * 
   * @example
   * 192.0.XX.XX
   */
  address?: string;
  /**
   * @remarks
   * The health state of the IP address. Valid values:
   * 
   * *   **normal**: healthy
   * *   **abnormal**: unhealthy
   * 
   * @example
   * abnormal
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class DescribeHealthCheckStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that consists of the details of the health status of the origin server.
   */
  healthCheckStatus?: DescribeHealthCheckStatusResponseBodyHealthCheckStatus[];
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * DE9FF9E1-569C-4B6C-AB6A-0F6D927BB27C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      healthCheckStatus: 'HealthCheckStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      healthCheckStatus: { 'type': 'array', 'itemType': DescribeHealthCheckStatusResponseBodyHealthCheckStatus },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.healthCheckStatus)) {
      $dara.Model.validateArray(this.healthCheckStatus);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

