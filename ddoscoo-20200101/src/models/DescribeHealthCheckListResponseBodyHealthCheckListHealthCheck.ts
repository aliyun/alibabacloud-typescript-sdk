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

