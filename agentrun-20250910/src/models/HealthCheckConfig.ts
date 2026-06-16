// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HealthCheckConfig extends $dara.Model {
  /**
   * @remarks
   * The number of consecutive failed health checks before the container is considered unhealthy
   */
  failureThreshold?: number;
  /**
   * @remarks
   * The URL address for the HTTP GET request used in health checks
   */
  httpGetUrl?: string;
  /**
   * @remarks
   * The delay time (in seconds) after the container starts before the first health check is executed
   */
  initialDelaySeconds?: number;
  /**
   * @remarks
   * The time interval (in seconds) between health checks
   */
  periodSeconds?: number;
  /**
   * @remarks
   * The number of consecutive successful health checks required before the container is considered healthy
   */
  successThreshold?: number;
  /**
   * @remarks
   * The timeout duration (in seconds) for health checks
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

