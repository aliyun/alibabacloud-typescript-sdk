// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CustomHealthCheckConfig extends $dara.Model {
  /**
   * @remarks
   * The threshold for health check failures. When this value is reached, the system considers the health check failed. Valid values: 1 to 120. Default value: 3.
   * 
   * @example
   * 1
   */
  failureThreshold?: number;
  /**
   * @remarks
   * The health check URL of the custom container. The URL can be up to 2,048 characters in length.
   * 
   * @example
   * /ready
   */
  httpGetUrl?: string;
  /**
   * @remarks
   * The delay between the container startup and the health check. Valid values: 0 to 120. Default value: 0.
   * 
   * @example
   * 1
   */
  initialDelaySeconds?: number;
  /**
   * @remarks
   * The health check period. Valid values: 1 to 120. Default value: 3.
   * 
   * @example
   * 1
   */
  periodSeconds?: number;
  /**
   * @remarks
   * The threshold for health check successes. When this value is reached, the system considers the health check successful. Valid values: 1 to 120. Default value: 1.
   * 
   * @example
   * 2
   */
  successThreshold?: number;
  /**
   * @remarks
   * The timeout period of the health check. Unit: seconds. Valid values: 1 to 3. Default value: 1.
   * 
   * @example
   * 2
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

