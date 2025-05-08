// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEdgeContainerAppsResponseBodyAppsHealthCheck extends $dara.Model {
  /**
   * @remarks
   * The number of consecutive failed health checks for an application to be considered unhealthy.
   * 
   * @example
   * 5
   */
  failTimes?: number;
  /**
   * @remarks
   * The domain name that is used for health checks.
   * 
   * @example
   * test.com
   */
  host?: string;
  /**
   * @remarks
   * The range of health check status codes that indicate successful health checks.
   * 
   * @example
   * http_2XX
   */
  httpCode?: string;
  /**
   * @remarks
   * The interval between health checks. Unit: seconds.
   * 
   * @example
   * 5
   */
  interval?: number;
  /**
   * @remarks
   * The HTTP method used for health checks.
   * 
   * @example
   * GET
   */
  method?: string;
  /**
   * @remarks
   * The health check port.
   * 
   * @example
   * 8080
   */
  port?: number;
  /**
   * @remarks
   * The number of consecutive successful health checks for an application to be considered healthy.
   * 
   * @example
   * 1
   */
  succTimes?: number;
  /**
   * @remarks
   * The timeout period of health checks. Unit: seconds.
   * 
   * @example
   * 60
   */
  timeout?: number;
  /**
   * @remarks
   * The type of health checks. Valid values:
   * 
   * *   l7
   * *   l4
   * 
   * @example
   * l7
   */
  type?: string;
  /**
   * @remarks
   * The health check URL.
   * 
   * @example
   * /health_check
   */
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      failTimes: 'FailTimes',
      host: 'Host',
      httpCode: 'HttpCode',
      interval: 'Interval',
      method: 'Method',
      port: 'Port',
      succTimes: 'SuccTimes',
      timeout: 'Timeout',
      type: 'Type',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failTimes: 'number',
      host: 'string',
      httpCode: 'string',
      interval: 'number',
      method: 'string',
      port: 'number',
      succTimes: 'number',
      timeout: 'number',
      type: 'string',
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

