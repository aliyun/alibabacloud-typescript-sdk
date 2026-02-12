// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EnvVar } from "./EnvVar";
import { ResourceRequirements } from "./ResourceRequirements";


export class ContainerSpec extends $dara.Model {
  /**
   * @remarks
   * The command parameters.
   */
  args?: string[];
  /**
   * @remarks
   * The user command.
   */
  command?: string[];
  /**
   * @remarks
   * The environment variables.
   */
  env?: EnvVar[];
  /**
   * @remarks
   * The endpoint of the container image.
   * 
   * @example
   * registry.cn-hangzhou.aliyuncs.com/pai-dlc/curl:v1.0.0
   */
  image?: string;
  /**
   * @remarks
   * The name of the container.
   * 
   * @example
   * data-init
   */
  name?: string;
  /**
   * @remarks
   * The container resources.
   */
  resources?: ResourceRequirements;
  /**
   * @remarks
   * The working directory in the container.
   * 
   * @example
   * /root
   */
  workingDir?: string;
  static names(): { [key: string]: string } {
    return {
      args: 'Args',
      command: 'Command',
      env: 'Env',
      image: 'Image',
      name: 'Name',
      resources: 'Resources',
      workingDir: 'WorkingDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      args: { 'type': 'array', 'itemType': 'string' },
      command: { 'type': 'array', 'itemType': 'string' },
      env: { 'type': 'array', 'itemType': EnvVar },
      image: 'string',
      name: 'string',
      resources: ResourceRequirements,
      workingDir: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.args)) {
      $dara.Model.validateArray(this.args);
    }
    if(Array.isArray(this.command)) {
      $dara.Model.validateArray(this.command);
    }
    if(Array.isArray(this.env)) {
      $dara.Model.validateArray(this.env);
    }
    if(this.resources && typeof (this.resources as any).validate === 'function') {
      (this.resources as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

