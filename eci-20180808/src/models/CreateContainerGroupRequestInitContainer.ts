// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateContainerGroupRequestInitContainerSecurityContext } from "./CreateContainerGroupRequestInitContainerSecurityContext";
import { CreateContainerGroupRequestInitContainerEnvironmentVar } from "./CreateContainerGroupRequestInitContainerEnvironmentVar";
import { CreateContainerGroupRequestInitContainerPort } from "./CreateContainerGroupRequestInitContainerPort";
import { CreateContainerGroupRequestInitContainerVolumeMount } from "./CreateContainerGroupRequestInitContainerVolumeMount";


export class CreateContainerGroupRequestInitContainer extends $dara.Model {
  securityContext?: CreateContainerGroupRequestInitContainerSecurityContext;
  /**
   * @remarks
   * The arguments that are passed to the startup command of the init container.
   * 
   * @example
   * 10
   */
  arg?: string[];
  /**
   * @remarks
   * The startup commands of the init container.
   * 
   * @example
   * sleep
   */
  command?: string[];
  /**
   * @remarks
   * The number of vCPUs that you want to allocate to the init container.
   * 
   * @example
   * 0.5
   */
  cpu?: number;
  /**
   * @remarks
   * The environment variable of the init container.
   */
  environmentVar?: CreateContainerGroupRequestInitContainerEnvironmentVar[];
  /**
   * @remarks
   * The number of GPUs that you want to allocate to the init container.
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
   * The policy that you want to use to pull images. Valid values:
   * 
   * *   Always: Each time instances are created, image pulling is performed.
   * *   IfNotPresent: On-premises images are preferentially used. If no on-premises images are available, image pulling is performed.
   * *   Never: On-premises images are always used. Image pulling is not performed.
   * 
   * @example
   * Always
   */
  imagePullPolicy?: string;
  /**
   * @remarks
   * The memory size that you want to allocate to the init container. Unit: GiB.
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
   * The information about the port.
   */
  port?: CreateContainerGroupRequestInitContainerPort[];
  /**
   * @remarks
   * The path of the file from which the system retrieves termination messages of the init container when the init container exits.
   * 
   * @example
   * /tmp/termination-log
   */
  terminationMessagePath?: string;
  /**
   * @remarks
   * The message notification policy. This parameter is empty by default.
   * 
   * @example
   * *****
   */
  terminationMessagePolicy?: string;
  /**
   * @remarks
   * The information about the volumes that you want to mount to the init containers.
   */
  volumeMount?: CreateContainerGroupRequestInitContainerVolumeMount[];
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
      arg: 'Arg',
      command: 'Command',
      cpu: 'Cpu',
      environmentVar: 'EnvironmentVar',
      gpu: 'Gpu',
      image: 'Image',
      imagePullPolicy: 'ImagePullPolicy',
      memory: 'Memory',
      name: 'Name',
      port: 'Port',
      terminationMessagePath: 'TerminationMessagePath',
      terminationMessagePolicy: 'TerminationMessagePolicy',
      volumeMount: 'VolumeMount',
      workingDir: 'WorkingDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityContext: CreateContainerGroupRequestInitContainerSecurityContext,
      arg: { 'type': 'array', 'itemType': 'string' },
      command: { 'type': 'array', 'itemType': 'string' },
      cpu: 'number',
      environmentVar: { 'type': 'array', 'itemType': CreateContainerGroupRequestInitContainerEnvironmentVar },
      gpu: 'number',
      image: 'string',
      imagePullPolicy: 'string',
      memory: 'number',
      name: 'string',
      port: { 'type': 'array', 'itemType': CreateContainerGroupRequestInitContainerPort },
      terminationMessagePath: 'string',
      terminationMessagePolicy: 'string',
      volumeMount: { 'type': 'array', 'itemType': CreateContainerGroupRequestInitContainerVolumeMount },
      workingDir: 'string',
    };
  }

  validate() {
    if(this.securityContext && typeof (this.securityContext as any).validate === 'function') {
      (this.securityContext as any).validate();
    }
    if(Array.isArray(this.arg)) {
      $dara.Model.validateArray(this.arg);
    }
    if(Array.isArray(this.command)) {
      $dara.Model.validateArray(this.command);
    }
    if(Array.isArray(this.environmentVar)) {
      $dara.Model.validateArray(this.environmentVar);
    }
    if(Array.isArray(this.port)) {
      $dara.Model.validateArray(this.port);
    }
    if(Array.isArray(this.volumeMount)) {
      $dara.Model.validateArray(this.volumeMount);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

