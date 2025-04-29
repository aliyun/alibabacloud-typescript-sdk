// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateEciScalingConfigurationRequestInitContainersSecurityContext } from "./CreateEciScalingConfigurationRequestInitContainersSecurityContext";
import { CreateEciScalingConfigurationRequestInitContainersInitContainerEnvironmentVars } from "./CreateEciScalingConfigurationRequestInitContainersInitContainerEnvironmentVars";
import { CreateEciScalingConfigurationRequestInitContainersInitContainerPorts } from "./CreateEciScalingConfigurationRequestInitContainersInitContainerPorts";
import { CreateEciScalingConfigurationRequestInitContainersInitContainerVolumeMounts } from "./CreateEciScalingConfigurationRequestInitContainersInitContainerVolumeMounts";


export class CreateEciScalingConfigurationRequestInitContainers extends $dara.Model {
  securityContext?: CreateEciScalingConfigurationRequestInitContainersSecurityContext;
  /**
   * @remarks
   * The startup arguments of the init container. You can specify up to 10 arguments.
   */
  args?: string[];
  /**
   * @remarks
   * The startup commands of the init container.
   */
  commands?: string[];
  /**
   * @remarks
   * The number of vCPUs per init container.
   * 
   * @example
   * 0.5
   */
  cpu?: number;
  /**
   * @remarks
   * The number of GPUs per init container.
   * 
   * @example
   * 1
   */
  gpu?: number;
  /**
   * @remarks
   * The image of the init container.
   * 
   * @example
   * nginx
   */
  image?: string;
  /**
   * @remarks
   * The image pulling policy.
   * 
   * @example
   * Always
   */
  imagePullPolicy?: string;
  /**
   * @remarks
   * The environment variables of the init container.
   */
  initContainerEnvironmentVars?: CreateEciScalingConfigurationRequestInitContainersInitContainerEnvironmentVars[];
  /**
   * @remarks
   * The ports of init containers.
   */
  initContainerPorts?: CreateEciScalingConfigurationRequestInitContainersInitContainerPorts[];
  /**
   * @remarks
   * The volume mounts of the init container.
   */
  initContainerVolumeMounts?: CreateEciScalingConfigurationRequestInitContainersInitContainerVolumeMounts[];
  /**
   * @remarks
   * The memory size per init container. Unit: GiB.
   * 
   * @example
   * 1.0
   */
  memory?: number;
  /**
   * @remarks
   * The name of the init container.
   * 
   * @example
   * test-init
   */
  name?: string;
  /**
   * @remarks
   * The working directory of the init container.
   * 
   * @example
   * /usr/local
   */
  workingDir?: string;
  static names(): { [key: string]: string } {
    return {
      securityContext: 'SecurityContext',
      args: 'Args',
      commands: 'Commands',
      cpu: 'Cpu',
      gpu: 'Gpu',
      image: 'Image',
      imagePullPolicy: 'ImagePullPolicy',
      initContainerEnvironmentVars: 'InitContainerEnvironmentVars',
      initContainerPorts: 'InitContainerPorts',
      initContainerVolumeMounts: 'InitContainerVolumeMounts',
      memory: 'Memory',
      name: 'Name',
      workingDir: 'WorkingDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityContext: CreateEciScalingConfigurationRequestInitContainersSecurityContext,
      args: { 'type': 'array', 'itemType': 'string' },
      commands: { 'type': 'array', 'itemType': 'string' },
      cpu: 'number',
      gpu: 'number',
      image: 'string',
      imagePullPolicy: 'string',
      initContainerEnvironmentVars: { 'type': 'array', 'itemType': CreateEciScalingConfigurationRequestInitContainersInitContainerEnvironmentVars },
      initContainerPorts: { 'type': 'array', 'itemType': CreateEciScalingConfigurationRequestInitContainersInitContainerPorts },
      initContainerVolumeMounts: { 'type': 'array', 'itemType': CreateEciScalingConfigurationRequestInitContainersInitContainerVolumeMounts },
      memory: 'number',
      name: 'string',
      workingDir: 'string',
    };
  }

  validate() {
    if(this.securityContext && typeof (this.securityContext as any).validate === 'function') {
      (this.securityContext as any).validate();
    }
    if(Array.isArray(this.args)) {
      $dara.Model.validateArray(this.args);
    }
    if(Array.isArray(this.commands)) {
      $dara.Model.validateArray(this.commands);
    }
    if(Array.isArray(this.initContainerEnvironmentVars)) {
      $dara.Model.validateArray(this.initContainerEnvironmentVars);
    }
    if(Array.isArray(this.initContainerPorts)) {
      $dara.Model.validateArray(this.initContainerPorts);
    }
    if(Array.isArray(this.initContainerVolumeMounts)) {
      $dara.Model.validateArray(this.initContainerVolumeMounts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

