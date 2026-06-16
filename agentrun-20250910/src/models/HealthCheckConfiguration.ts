// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HealthCheckConfiguration extends $dara.Model {
  /**
   * @remarks
   * The number of consecutive failed health checks after which the container is considered unhealthy.
   * 
   * @example
   * 3
   */
  failureThreshold?: number;
  /**
   * @remarks
   * The URL path for the HTTP GET health check.
   * 
   * @example
   * /ready
   */
  httpGetUrl?: string;
  /**
   * @remarks
   * The delay in seconds after the container starts before the first health check runs.
   * 
   * @example
   * 30
   */
  initialDelaySeconds?: number;
  /**
   * @remarks
   * The interval in seconds between health checks.
   * 
   * @example
   * 30
   */
  periodSeconds?: number;
  /**
   * @remarks
   * The number of consecutive successful health checks after which an unhealthy container is considered healthy.
   * 
   * @example
   * 1
   */
  successThreshold?: number;
  /**
   * @remarks
   * The duration in seconds before a health check times out.
   * 
   * @example
   * 3
   */
  timeoutSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      failureThreshold: 'failureThreshold',
      httpGetUrl: 'httpGetUrl',
      initialDelaySeconds: 'initialDelaySeconds',
      periodSeconds: 'periodSeconds',
      successThreshold: 'successThreshold',
      timeoutSeconds: 'timeoutSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failureThreshold: 'number',
      httpGetUrl: 'string',
      initialDelaySeconds: 'number',
      periodSeconds: 'number',
      successThreshold: 'number',
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

