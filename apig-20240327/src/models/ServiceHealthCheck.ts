// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ServiceHealthCheck extends $dara.Model {
  /**
   * @example
   * true
   */
  enable?: boolean;
  healthyThreshold?: number;
  httpHost?: string;
  httpPath?: string;
  interval?: number;
  /**
   * @example
   * TCP
   */
  protocol?: string;
  timeout?: number;
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

