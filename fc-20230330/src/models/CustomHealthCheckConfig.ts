// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CustomHealthCheckConfig extends $dara.Model {
  /**
   * @example
   * 1
   */
  failureThreshold?: number;
  /**
   * @example
   * /ready
   */
  httpGetUrl?: string;
  /**
   * @example
   * 1
   */
  initialDelaySeconds?: number;
  /**
   * @example
   * 1
   */
  periodSeconds?: number;
  /**
   * @example
   * 2
   */
  successThreshold?: number;
  /**
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

