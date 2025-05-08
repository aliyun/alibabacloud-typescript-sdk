// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGatewayServiceResponseBodyDataResultHealthCheckInfo extends $dara.Model {
  /**
   * @remarks
   * Indicates whether checks are performed.
   * 
   * @example
   * true
   */
  check?: boolean;
  /**
   * @remarks
   * The expected status of the health check.
   */
  expectedStatuses?: number[];
  /**
   * @remarks
   * The threshold for healthy instances.
   * 
   * @example
   * 2
   */
  healthyThreshold?: number;
  /**
   * @remarks
   * The endpoint of the HTTP request for the health check.
   * 
   * @example
   * http://172.168.0.1
   */
  httpHost?: string;
  /**
   * @remarks
   * The path to which the HTTP request for the health check is sent.
   * 
   * @example
   * /health
   */
  httpPath?: string;
  /**
   * @remarks
   * The health check interval.
   * 
   * @example
   * 2
   */
  interval?: number;
  /**
   * @remarks
   * The network protocol.
   * 
   * @example
   * TCP
   */
  protocol?: string;
  /**
   * @remarks
   * The timeout period.
   * 
   * @example
   * 2
   */
  timeout?: number;
  /**
   * @remarks
   * The threshold for unhealthy instances.
   * 
   * @example
   * 2
   */
  unhealthyThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      check: 'Check',
      expectedStatuses: 'ExpectedStatuses',
      healthyThreshold: 'HealthyThreshold',
      httpHost: 'HttpHost',
      httpPath: 'HttpPath',
      interval: 'Interval',
      protocol: 'Protocol',
      timeout: 'Timeout',
      unhealthyThreshold: 'UnhealthyThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      check: 'boolean',
      expectedStatuses: { 'type': 'array', 'itemType': 'number' },
      healthyThreshold: 'number',
      httpHost: 'string',
      httpPath: 'string',
      interval: 'number',
      protocol: 'string',
      timeout: 'number',
      unhealthyThreshold: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.expectedStatuses)) {
      $dara.Model.validateArray(this.expectedStatuses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

