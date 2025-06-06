// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeployCustomContainerInputCustomContainerConfigHealthCheckConfig } from "./DeployCustomContainerInputCustomContainerConfigHealthCheckConfig";
import { DeployCustomContainerInputCustomContainerConfigInstanceLifecycleConfig } from "./DeployCustomContainerInputCustomContainerConfigInstanceLifecycleConfig";


export class DeployCustomContainerInputCustomContainerConfig extends $dara.Model {
  command?: string[];
  entrypoint?: string[];
  healthCheckConfig?: DeployCustomContainerInputCustomContainerConfigHealthCheckConfig;
  image?: string;
  instanceConcurrency?: number;
  instanceLifecycleConfig?: DeployCustomContainerInputCustomContainerConfigInstanceLifecycleConfig;
  port?: number;
  role?: string;
  static names(): { [key: string]: string } {
    return {
      command: 'command',
      entrypoint: 'entrypoint',
      healthCheckConfig: 'healthCheckConfig',
      image: 'image',
      instanceConcurrency: 'instanceConcurrency',
      instanceLifecycleConfig: 'instanceLifecycleConfig',
      port: 'port',
      role: 'role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: { 'type': 'array', 'itemType': 'string' },
      entrypoint: { 'type': 'array', 'itemType': 'string' },
      healthCheckConfig: DeployCustomContainerInputCustomContainerConfigHealthCheckConfig,
      image: 'string',
      instanceConcurrency: 'number',
      instanceLifecycleConfig: DeployCustomContainerInputCustomContainerConfigInstanceLifecycleConfig,
      port: 'number',
      role: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.command)) {
      $dara.Model.validateArray(this.command);
    }
    if(Array.isArray(this.entrypoint)) {
      $dara.Model.validateArray(this.entrypoint);
    }
    if(this.healthCheckConfig && typeof (this.healthCheckConfig as any).validate === 'function') {
      (this.healthCheckConfig as any).validate();
    }
    if(this.instanceLifecycleConfig && typeof (this.instanceLifecycleConfig as any).validate === 'function') {
      (this.instanceLifecycleConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

