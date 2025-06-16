// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLoadBalancersResponseBodyLoadBalancersMonitor extends $dara.Model {
  /**
   * @remarks
   * The number of consecutive failed probes required to consider the target unhealthy, such as 5.
   * 
   * @example
   * 5
   */
  consecutiveDown?: number;
  /**
   * @remarks
   * The number of consecutive successful probes required to consider the target healthy, such as 3.
   * 
   * @example
   * 3
   */
  consecutiveUp?: number;
  /**
   * @remarks
   * The expected status codes, such as 200,202, indicating successful HTTP responses.
   * 
   * @example
   * 200,202
   */
  expectedCodes?: string;
  /**
   * @remarks
   * Whether to follow redirects.
   * 
   * - true: Yes.
   * - false: No.
   * 
   * @example
   * true
   */
  followRedirects?: boolean;
  /**
   * @remarks
   * The header information included in the probe, such as HTTP headers.
   * 
   * @example
   * {
   *         "host": [
   *             "example1.com",
   *             "example2.com"
   *         ]
   *     }
   */
  header?: any;
  /**
   * @remarks
   * The interval for the health check, in seconds.
   * 
   * @example
   * 60
   */
  interval?: number;
  /**
   * @remarks
   * The method for the health check.
   * 
   * @example
   * GET
   */
  method?: string;
  monitoringRegion?: string;
  /**
   * @remarks
   * The path.
   * 
   * @example
   * /
   */
  path?: string;
  /**
   * @remarks
   * The target port.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * Application health check timeout, in seconds.
   * 
   * @example
   * 5
   */
  timeout?: number;
  /**
   * @remarks
   * The type of monitor protocol, such as HTTP, used for health checks. When the value is `off`, it indicates that no check will be performed.
   * 
   * @example
   * HTTP
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      consecutiveDown: 'ConsecutiveDown',
      consecutiveUp: 'ConsecutiveUp',
      expectedCodes: 'ExpectedCodes',
      followRedirects: 'FollowRedirects',
      header: 'Header',
      interval: 'Interval',
      method: 'Method',
      monitoringRegion: 'MonitoringRegion',
      path: 'Path',
      port: 'Port',
      timeout: 'Timeout',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consecutiveDown: 'number',
      consecutiveUp: 'number',
      expectedCodes: 'string',
      followRedirects: 'boolean',
      header: 'any',
      interval: 'number',
      method: 'string',
      monitoringRegion: 'string',
      path: 'string',
      port: 'number',
      timeout: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

