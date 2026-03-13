// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CustomHealthCheckConfig } from "./CustomHealthCheckConfig";


export class CustomRuntimeConfig extends $dara.Model {
  /**
   * @remarks
   * The arguments that are passed to the startup command.
   */
  args?: string[];
  /**
   * @remarks
   * The startup commands.
   */
  command?: string[];
  /**
   * @remarks
   * The custom health check configuration of the function.
   */
  healthCheckConfig?: CustomHealthCheckConfig;
  /**
   * @remarks
   * The port on which the HTTP server is listening.
   * 
   * @example
   * 9000
   */
  port?: number;
  static names(): { [key: string]: string } {
    return {
      args: 'args',
      command: 'command',
      healthCheckConfig: 'healthCheckConfig',
      port: 'port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      args: { 'type': 'array', 'itemType': 'string' },
      command: { 'type': 'array', 'itemType': 'string' },
      healthCheckConfig: CustomHealthCheckConfig,
      port: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.args)) {
      $dara.Model.validateArray(this.args);
    }
    if(Array.isArray(this.command)) {
      $dara.Model.validateArray(this.command);
    }
    if(this.healthCheckConfig && typeof (this.healthCheckConfig as any).validate === 'function') {
      (this.healthCheckConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

