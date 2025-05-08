// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEdgeContainerAppResponseBodyAppHealthCheck extends $dara.Model {
  /**
   * @remarks
   * The number of consecutive failed health checks required for an application to be considered as unhealthy.
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
   * http_2xx
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
   * The HTTP method that the health check request uses.
   * 
   * @example
   * HEAD
   */
  method?: string;
  /**
   * @remarks
   * The health check port.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * The number of consecutive successful health checks required for an application to be considered as healthy.
   * 
   * @example
   * 3
   */
  succTimes?: number;
  /**
   * @remarks
   * The timeout period of the health check. Unit: seconds.
   * 
   * @example
   * 60
   */
  timeout?: number;
  /**
   * @remarks
   * The health check type. Valid values:
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

