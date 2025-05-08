// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLoadBalancerResponseBodyMonitor extends $dara.Model {
  /**
   * @remarks
   * The number of consecutive failed probes required to consider the target as unhealthy, for example, `5`.
   * 
   * @example
   * 5
   */
  consecutiveDown?: number;
  /**
   * @remarks
   * The number of consecutive successful probes required to consider the target as healthy, for example, `3`.
   * 
   * @example
   * 3
   */
  consecutiveUp?: number;
  /**
   * @remarks
   * Expected status codes, such as 200, 202, for successful HTTP responses.
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
   * The HTTP headers to be included in the probe request.
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
   * Health check interval, in seconds.
   * 
   * @example
   * 60
   */
  interval?: number;
  /**
   * @remarks
   * Health check method.
   * 
   * @example
   * GET
   */
  method?: string;
  /**
   * @remarks
   * Path.
   * 
   * @example
   * /
   */
  path?: string;
  /**
   * @remarks
   * Target port.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * The timeout for the health check, in seconds.
   * 
   * @example
   * 5
   */
  timeout?: number;
  /**
   * @remarks
   * Monitor protocol type, such as HTTP, used for health checks. When the value is `off`, it indicates that no check is performed.
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

