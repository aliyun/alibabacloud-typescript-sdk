// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyEciScalingConfigurationRequestInitContainersSecurityContext } from "./ModifyEciScalingConfigurationRequestInitContainersSecurityContext";
import { ModifyEciScalingConfigurationRequestInitContainersInitContainerEnvironmentVars } from "./ModifyEciScalingConfigurationRequestInitContainersInitContainerEnvironmentVars";
import { ModifyEciScalingConfigurationRequestInitContainersInitContainerPorts } from "./ModifyEciScalingConfigurationRequestInitContainersInitContainerPorts";
import { ModifyEciScalingConfigurationRequestInitContainersInitContainerVolumeMounts } from "./ModifyEciScalingConfigurationRequestInitContainersInitContainerVolumeMounts";


export class ModifyEciScalingConfigurationRequestInitContainers extends $dara.Model {
  securityContext?: ModifyEciScalingConfigurationRequestInitContainersSecurityContext;
  /**
   * @remarks
   * The container startup arguments.
   */
  args?: string[];
  /**
   * @remarks
   * The commands that you can run to start the init container.
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
   * The image pulling policy. Valid values:
   * 
   * *   Always: Image pulling is performed each time instances are created.
   * *   IfNotPresent: Image pulling is performed as needed. On-premises images are preferentially used. If no on-premises images are available, image pulling is performed.
   * *   Never: On-premises images are always used. Image pulling is not performed.
   * 
   * @example
   * Always
   */
  imagePullPolicy?: string;
  /**
   * @remarks
   * The environment variables of the init container.
   */
  initContainerEnvironmentVars?: ModifyEciScalingConfigurationRequestInitContainersInitContainerEnvironmentVars[];
  /**
   * @remarks
   * The ports of the init container.
   */
  initContainerPorts?: ModifyEciScalingConfigurationRequestInitContainersInitContainerPorts[];
  /**
   * @remarks
   * The volume mounts of the init container.
   */
  initContainerVolumeMounts?: ModifyEciScalingConfigurationRequestInitContainersInitContainerVolumeMounts[];
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
   * The working directory.
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
      securityContext: ModifyEciScalingConfigurationRequestInitContainersSecurityContext,
      args: { 'type': 'array', 'itemType': 'string' },
      commands: { 'type': 'array', 'itemType': 'string' },
      cpu: 'number',
      gpu: 'number',
      image: 'string',
      imagePullPolicy: 'string',
      initContainerEnvironmentVars: { 'type': 'array', 'itemType': ModifyEciScalingConfigurationRequestInitContainersInitContainerEnvironmentVars },
      initContainerPorts: { 'type': 'array', 'itemType': ModifyEciScalingConfigurationRequestInitContainersInitContainerPorts },
      initContainerVolumeMounts: { 'type': 'array', 'itemType': ModifyEciScalingConfigurationRequestInitContainersInitContainerVolumeMounts },
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

