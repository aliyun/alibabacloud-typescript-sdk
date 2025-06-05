// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateContainerGroupRequestInitContainerSecurityContext } from "./UpdateContainerGroupRequestInitContainerSecurityContext";
import { UpdateContainerGroupRequestInitContainerEnvironmentVar } from "./UpdateContainerGroupRequestInitContainerEnvironmentVar";
import { UpdateContainerGroupRequestInitContainerPort } from "./UpdateContainerGroupRequestInitContainerPort";
import { UpdateContainerGroupRequestInitContainerVolumeMount } from "./UpdateContainerGroupRequestInitContainerVolumeMount";


export class UpdateContainerGroupRequestInitContainer extends $dara.Model {
  securityContext?: UpdateContainerGroupRequestInitContainerSecurityContext;
  /**
   * @remarks
   * The arguments that you want to pass to the startup command of the init container.
   * 
   * @example
   * 10
   */
  arg?: string[];
  /**
   * @remarks
   * The commands that are used to start the init container.
   * 
   * @example
   * /bin/sh sleep
   */
  command?: string[];
  /**
   * @remarks
   * The number of vCPUs that you want to allocate to the init container.
   * 
   * @example
   * 2.0
   */
  cpu?: number;
  /**
   * @remarks
   * The environment variable of the init container.
   */
  environmentVar?: UpdateContainerGroupRequestInitContainerEnvironmentVar[];
  /**
   * @remarks
   * The number of GPUs you want to allocate to the init container.
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
   * *   Always: Each time the instance is updated, image pulling is performed.
   * *   IfNotPresent: On-premises images are used first. If no on-premises images are available, image pulling is performed.
   * *   Never: On-premises images are always used. Image pulling is not performed.
   * 
   * @example
   * Onfailure
   */
  imagePullPolicy?: string;
  /**
   * @remarks
   * The memory size of the init container.
   * 
   * @example
   * 4.0
   */
  memory?: number;
  /**
   * @remarks
   * The name of the init container.
   * 
   * @example
   * init-nginx
   */
  name?: string;
  /**
   * @remarks
   * The port number. Valid values: 1 to 65535.
   */
  port?: UpdateContainerGroupRequestInitContainerPort[];
  /**
   * @remarks
   * Specifies whether the init container allocates buffer resources to standard input streams when the init container is running. If you do not specify this parameter, an EOF error may occur when standard input streams in the init container are read. Default value: false.
   * 
   * @example
   * false
   */
  stdin?: boolean;
  /**
   * @remarks
   * Specifies whether standard input streams are disconnected after a client is disconnected. If Stdin is set to true, standard input streams remain connected among multiple sessions. If StdinOnce is set to true, standard input streams are connected after the init container is started, and remain idle until a client is connected to receive data. After the client is disconnected, streams are also disconnected, and remain disconnected until the init container restarts.
   * 
   * @example
   * true
   */
  stdinOnce?: boolean;
  /**
   * @remarks
   * Specifies whether to enable interaction. Default value: false. If the command is a /bin/bash command, set the value to true.
   * 
   * @example
   * true
   */
  tty?: boolean;
  /**
   * @remarks
   * The information about the volume that you want to mount on the init container.
   */
  volumeMount?: UpdateContainerGroupRequestInitContainerVolumeMount[];
  /**
   * @remarks
   * The working directory of the init container.
   * 
   * @example
   * /bin/local/
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
      stdin: 'Stdin',
      stdinOnce: 'StdinOnce',
      tty: 'Tty',
      volumeMount: 'VolumeMount',
      workingDir: 'WorkingDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityContext: UpdateContainerGroupRequestInitContainerSecurityContext,
      arg: { 'type': 'array', 'itemType': 'string' },
      command: { 'type': 'array', 'itemType': 'string' },
      cpu: 'number',
      environmentVar: { 'type': 'array', 'itemType': UpdateContainerGroupRequestInitContainerEnvironmentVar },
      gpu: 'number',
      image: 'string',
      imagePullPolicy: 'string',
      memory: 'number',
      name: 'string',
      port: { 'type': 'array', 'itemType': UpdateContainerGroupRequestInitContainerPort },
      stdin: 'boolean',
      stdinOnce: 'boolean',
      tty: 'boolean',
      volumeMount: { 'type': 'array', 'itemType': UpdateContainerGroupRequestInitContainerVolumeMount },
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

