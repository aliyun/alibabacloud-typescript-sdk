// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEdgeContainerAppVersionRequestContainersProbeContent extends $dara.Model {
  /**
   * @remarks
   * The command of the exec type probe.
   * 
   * @example
   * echo ok
   */
  command?: string;
  /**
   * @remarks
   * The number of consecutive failed health checks required for a container to be considered as unhealthy.
   * 
   * @example
   * 3
   */
  failureThreshold?: number;
  /**
   * @remarks
   * The domain name that is used for health checks.
   * 
   * @example
   * www.rewrite.com
   */
  host?: string;
  /**
   * @remarks
   * The request headers that are included in the container health check request.
   * 
   * @example
   * [{\\"Content-Type\\":\\"application/json\\"}]
   */
  httpHeaders?: string;
  /**
   * @remarks
   * The latency for container probe initialization.
   * 
   * @example
   * 1
   */
  initialDelaySeconds?: number;
  /**
   * @remarks
   * The health check path.
   * 
   * @example
   * /
   */
  path?: string;
  /**
   * @remarks
   * The interval between container health checks.
   * 
   * @example
   * 1
   */
  periodSeconds?: number;
  /**
   * @remarks
   * The health check port.
   * 
   * @example
   * 9991
   */
  port?: number;
  /**
   * @remarks
   * The protocol that the container health check request uses.
   * 
   * @example
   * http
   */
  scheme?: string;
  /**
   * @remarks
   * The number of consecutive successful health checks required for a container to be considered as healthy.
   * 
   * @example
   * 1
   */
  successThreshold?: number;
  /**
   * @remarks
   * The timeout period of the container health check.
   * 
   * @example
   * 1
   */
  timeoutSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      command: 'Command',
      failureThreshold: 'FailureThreshold',
      host: 'Host',
      httpHeaders: 'HttpHeaders',
      initialDelaySeconds: 'InitialDelaySeconds',
      path: 'Path',
      periodSeconds: 'PeriodSeconds',
      port: 'Port',
      scheme: 'Scheme',
      successThreshold: 'SuccessThreshold',
      timeoutSeconds: 'TimeoutSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: 'string',
      failureThreshold: 'number',
      host: 'string',
      httpHeaders: 'string',
      initialDelaySeconds: 'number',
      path: 'string',
      periodSeconds: 'number',
      port: 'number',
      scheme: 'string',
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

