// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ServiceHealthCheck extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the health check.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The healthy threshold for the health check.
   * 
   * @example
   * 2
   */
  healthyThreshold?: number;
  /**
   * @remarks
   * The health check domain name. This parameter is optional when the health check protocol is HTTP.
   * 
   * @example
   * example.com
   */
  httpHost?: string;
  /**
   * @remarks
   * The health check path. This parameter is required when the health check protocol is HTTP.
   * 
   * @example
   * /health
   */
  httpPath?: string;
  /**
   * @remarks
   * The health check interval.
   * 
   * @example
   * 10
   */
  interval?: number;
  /**
   * @remarks
   * The health check protocol. Valid values: TCP, HTTP, and GRPC.
   * 
   * @example
   * TCP
   */
  protocol?: string;
  /**
   * @remarks
   * The health check response timeout period.
   * 
   * @example
   * 5
   */
  timeout?: number;
  /**
   * @remarks
   * The unhealthy threshold for the health check.
   * 
   * @example
   * 3
   */
  unhealthyThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      enable: 'enable',
      healthyThreshold: 'healthyThreshold',
      httpHost: 'httpHost',
      httpPath: 'httpPath',
      interval: 'interval',
      protocol: 'protocol',
      timeout: 'timeout',
      unhealthyThreshold: 'unhealthyThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      healthyThreshold: 'number',
      httpHost: 'string',
      httpPath: 'string',
      interval: 'number',
      protocol: 'string',
      timeout: 'number',
      unhealthyThreshold: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

