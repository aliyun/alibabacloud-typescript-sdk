// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHealthCheckListResponseBodyHealthCheckListHealthCheck extends $dara.Model {
  /**
   * @remarks
   * The domain name.
   * 
   * >  This parameter is returned only when the Layer 7 health check configuration is queried.
   * 
   * @example
   * www.aliyun.com
   */
  domain?: string;
  /**
   * @remarks
   * The number of consecutive failed health checks that must occur before a port is declared unhealthy. Valid values: **1** to **10**.
   * 
   * @example
   * 3
   */
  down?: number;
  /**
   * @remarks
   * The interval at which checks are performed. Valid values: **1** to **30**. Unit: seconds.
   * 
   * @example
   * 15
   */
  interval?: number;
  /**
   * @remarks
   * The port that was checked.
   * 
   * @example
   * 8080
   */
  port?: number;
  /**
   * @remarks
   * The response timeout period. Valid values: **1** to **30**. Unit: seconds.
   * 
   * @example
   * 5
   */
  timeout?: number;
  /**
   * @remarks
   * The type of the protocol. Valid values:
   * 
   * *   **tcp**: The Layer 4 health check configuration was queried.
   * *   **http**: The Layer 7 health check configuration was queried.
   * 
   * @example
   * tcp
   */
  type?: string;
  /**
   * @remarks
   * The number of consecutive successful health checks that must occur before a port is declared healthy. Valid values: **1** to **10**.
   * 
   * @example
   * 3
   */
  up?: number;
  /**
   * @remarks
   * The check path.
   * 
   * >  This parameter is returned only when the Layer 7 health check configuration is queried.
   * 
   * @example
   * /abc
   */
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      down: 'Down',
      interval: 'Interval',
      port: 'Port',
      timeout: 'Timeout',
      type: 'Type',
      up: 'Up',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      down: 'number',
      interval: 'number',
      port: 'number',
      timeout: 'number',
      type: 'string',
      up: 'number',
      uri: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthCheckListResponseBodyHealthCheckList extends $dara.Model {
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
   * The health check configuration.
   */
  healthCheck?: DescribeHealthCheckListResponseBodyHealthCheckListHealthCheck;
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
  static names(): { [key: string]: string } {
    return {
      frontendPort: 'FrontendPort',
      healthCheck: 'HealthCheck',
      instanceId: 'InstanceId',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      frontendPort: 'number',
      healthCheck: DescribeHealthCheckListResponseBodyHealthCheckListHealthCheck,
      instanceId: 'string',
      protocol: 'string',
    };
  }

  validate() {
    if(this.healthCheck && typeof (this.healthCheck as any).validate === 'function') {
      (this.healthCheck as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthCheckListResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that consists of information about the health check configuration.
   */
  healthCheckList?: DescribeHealthCheckListResponseBodyHealthCheckList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 83B4AF42-E8EE-4DC9-BD73-87B7733A36F9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      healthCheckList: 'HealthCheckList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      healthCheckList: { 'type': 'array', 'itemType': DescribeHealthCheckListResponseBodyHealthCheckList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.healthCheckList)) {
      $dara.Model.validateArray(this.healthCheckList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

