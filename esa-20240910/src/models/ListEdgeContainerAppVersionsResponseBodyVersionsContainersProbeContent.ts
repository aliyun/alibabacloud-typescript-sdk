// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEdgeContainerAppVersionsResponseBodyVersionsContainersProbeContent extends $dara.Model {
  /**
   * @remarks
   * The probe command.
   * 
   * @example
   * openresty -g  "daemon off;
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
   * test.com
   */
  host?: string;
  /**
   * @remarks
   * The request headers that are included in the container health check request.
   * 
   * @example
   * {\\"Content-Type\\":\\"application/json\\"}
   */
  httpHeaders?: string;
  /**
   * @remarks
   * The latency for container probe initialization.
   * 
   * @example
   * 10
   */
  initialDelaySeconds?: number;
  /**
   * @remarks
   * The path of the container health check.
   * 
   * @example
   * /health_check
   */
  path?: string;
  /**
   * @remarks
   * The interval between container health checks.
   * 
   * @example
   * 5
   */
  periodSeconds?: number;
  /**
   * @remarks
   * The port of the container health check.
   * 
   * @example
   * 80
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
   * 30
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

