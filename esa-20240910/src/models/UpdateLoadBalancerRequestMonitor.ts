// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLoadBalancerRequestMonitor extends $dara.Model {
  /**
   * @remarks
   * Number of consecutive failed probes required to consider the target unhealthy, such as 5.
   * 
   * @example
   * 5
   */
  consecutiveDown?: number;
  /**
   * @remarks
   * Number of consecutive successful probes required to consider the target healthy, such as 3.
   * 
   * @example
   * 3
   */
  consecutiveUp?: number;
  /**
   * @remarks
   * Expected status codes, such as 200,202, which indicate successful HTTP responses.
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
   * Monitor request header configuration.
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
   * Monitor interval, such as 60 seconds, which is the frequency of checks.
   * 
   * @example
   * 100
   */
  interval?: number;
  /**
   * @remarks
   * Monitor request method, such as GET, which is a method in the HTTP protocol.
   * 
   * @example
   * GET
   */
  method?: string;
  /**
   * @remarks
   * Monitor check path, such as /healthcheck, which is the HTTP request path.
   * 
   * @example
   * /health
   */
  path?: string;
  /**
   * @remarks
   * Origin server port.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * Application health check timeout, in seconds, with a range of 1-10.
   * 
   * @example
   * 5
   */
  timeout?: number;
  /**
   * @remarks
   * Monitor protocol type, such as HTTP, used for health checks. When set to \\"off\\", no check is performed.
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

