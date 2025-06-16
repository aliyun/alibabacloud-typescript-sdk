// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLoadBalancerRequestMonitor extends $dara.Model {
  /**
   * @remarks
   * Number of consecutive failed probes required to consider the target unhealthy, such as `5`.
   * 
   * @example
   * 5
   */
  consecutiveDown?: number;
  /**
   * @remarks
   * Number of consecutive successful probes required to consider the target healthy, such as `3`.
   * 
   * @example
   * 3
   */
  consecutiveUp?: number;
  /**
   * @remarks
   * Expected status codes, such as `200,202`, which are successful HTTP responses.
   * 
   * @example
   * 200
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
   * Header information included in the probe, which is an HTTP header.
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
   * Monitoring interval, such as `60` seconds, which is the frequency of checks.
   * 
   * @example
   * 60
   */
  interval?: number;
  /**
   * @remarks
   * Monitor request method, such as `GET`, which is a method in the HTTP protocol.
   * 
   * @example
   * GET
   */
  method?: string;
  monitoringRegion?: string;
  /**
   * @remarks
   * Monitor check path, such as `/healthcheck`, which is an HTTP request path.
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
   * 1921
   */
  port?: number;
  /**
   * @remarks
   * Application health check timeout, in seconds, with a value range of 1-10.
   * 
   * @example
   * 5
   */
  timeout?: number;
  /**
   * @remarks
   * Monitor protocol type, such as HTTP, used for health checks. When set to `off`, no check is performed.
   * 
   * - TCP
   * - UDP
   * - SMTP
   * - HTTPS
   * - HTTP
   * - ICMP Ping
   * - off
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

