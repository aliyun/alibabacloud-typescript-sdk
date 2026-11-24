// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HealthCheckConfig extends $dara.Model {
  /**
   * @remarks
   * The check interval in seconds. Default value: 30 seconds.
   * 
   * @example
   * 30
   */
  checkInterval?: number;
  /**
   * @remarks
   * The failure count. Default value: 3.
   * 
   * @example
   * 3
   */
  failureCount?: number;
  /**
   * @remarks
   * The port number. This parameter is optional.
   * 
   * @example
   * 443
   * 
   * **if can be null:**
   * true
   */
  port?: number;
  /**
   * @remarks
   * The protocol type. Valid values: TCP and UDP. This parameter is required only in Continuous mode.
   * 
   * @example
   * TCP
   */
  protocol?: string;
  /**
   * @remarks
   * The timeout period for a single check in seconds. Default value: 5 seconds.
   * 
   * @example
   * 5
   */
  timeoutSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      checkInterval: 'CheckInterval',
      failureCount: 'FailureCount',
      port: 'Port',
      protocol: 'Protocol',
      timeoutSeconds: 'TimeoutSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkInterval: 'number',
      failureCount: 'number',
      port: 'number',
      protocol: 'string',
      timeoutSeconds: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

