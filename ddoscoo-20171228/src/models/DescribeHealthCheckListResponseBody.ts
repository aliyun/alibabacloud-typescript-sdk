// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHealthCheckListResponseBodyListenersHealthCheck extends $dara.Model {
  /**
   * @example
   * www.aliyun.com
   */
  domain?: string;
  /**
   * @example
   * 500
   */
  down?: number;
  /**
   * @example
   * 15
   */
  interval?: number;
  /**
   * @example
   * 233
   */
  port?: number;
  /**
   * @example
   * 1000
   */
  timeout?: number;
  /**
   * @example
   * tcp
   */
  type?: string;
  /**
   * @example
   * 1000
   */
  up?: number;
  /**
   * @example
   * /a/b/c
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

export class DescribeHealthCheckListResponseBodyListeners extends $dara.Model {
  /**
   * @example
   * 233
   */
  frontendPort?: number;
  healthCheck?: DescribeHealthCheckListResponseBodyListenersHealthCheck;
  /**
   * @example
   * ddoscoo-cn-XXXXX
   */
  instanceId?: string;
  /**
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
      healthCheck: DescribeHealthCheckListResponseBodyListenersHealthCheck,
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
  listeners?: DescribeHealthCheckListResponseBodyListeners[];
  /**
   * @example
   * CF33B4C3-196E-4015-AADD-5CAD00057B80
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      listeners: 'Listeners',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listeners: { 'type': 'array', 'itemType': DescribeHealthCheckListResponseBodyListeners },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.listeners)) {
      $dara.Model.validateArray(this.listeners);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

