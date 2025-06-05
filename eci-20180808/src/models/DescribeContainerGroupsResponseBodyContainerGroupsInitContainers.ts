// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeContainerGroupsResponseBodyContainerGroupsInitContainersCurrentState } from "./DescribeContainerGroupsResponseBodyContainerGroupsInitContainersCurrentState";
import { DescribeContainerGroupsResponseBodyContainerGroupsInitContainersEnvironmentVars } from "./DescribeContainerGroupsResponseBodyContainerGroupsInitContainersEnvironmentVars";
import { DescribeContainerGroupsResponseBodyContainerGroupsInitContainersPorts } from "./DescribeContainerGroupsResponseBodyContainerGroupsInitContainersPorts";
import { DescribeContainerGroupsResponseBodyContainerGroupsInitContainersPreviousState } from "./DescribeContainerGroupsResponseBodyContainerGroupsInitContainersPreviousState";
import { DescribeContainerGroupsResponseBodyContainerGroupsInitContainersSecurityContext } from "./DescribeContainerGroupsResponseBodyContainerGroupsInitContainersSecurityContext";
import { DescribeContainerGroupsResponseBodyContainerGroupsInitContainersVolumeMounts } from "./DescribeContainerGroupsResponseBodyContainerGroupsInitContainersVolumeMounts";


export class DescribeContainerGroupsResponseBodyContainerGroupsInitContainers extends $dara.Model {
  /**
   * @remarks
   * The arguments that are passed to the startup commands of the container.
   */
  args?: string[];
  /**
   * @remarks
   * The startup commands of the containers.
   */
  command?: string[];
  /**
   * @remarks
   * The number of vCPUs that are allocated to the container.
   * 
   * @example
   * 1.0
   */
  cpu?: number;
  /**
   * @remarks
   * The current container status.
   */
  currentState?: DescribeContainerGroupsResponseBodyContainerGroupsInitContainersCurrentState;
  /**
   * @remarks
   * The environment variables of the init container.
   */
  environmentVars?: DescribeContainerGroupsResponseBodyContainerGroupsInitContainersEnvironmentVars[];
  /**
   * @remarks
   * The number of GPUs.
   * 
   * @example
   * 1
   */
  gpu?: number;
  /**
   * @remarks
   * The image of the container.
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
   * *   IfNotPresent: On-premises images are preferentially used. If no on-premises images are available, image pulling is performed.
   * *   Never: On-premises images are always used. Image pulling is not performed.
   * 
   * @example
   * Always
   */
  imagePullPolicy?: string;
  /**
   * @remarks
   * The memory size of the init container. Unit: GiB.
   * 
   * @example
   * 2.0
   */
  memory?: number;
  /**
   * @remarks
   * The name of the init container.
   * 
   * @example
   * Init-xxx
   */
  name?: string;
  /**
   * @remarks
   * The exposed port and protocol of the container.
   */
  ports?: DescribeContainerGroupsResponseBodyContainerGroupsInitContainersPorts[];
  /**
   * @remarks
   * The previous state of the container.
   */
  previousState?: DescribeContainerGroupsResponseBodyContainerGroupsInitContainersPreviousState;
  /**
   * @remarks
   * Indicates whether the container passed the readiness probe.
   * 
   * @example
   * true
   */
  ready?: boolean;
  /**
   * @remarks
   * The number of times that the container restarted.
   * 
   * @example
   * 5
   */
  restartCount?: number;
  /**
   * @remarks
   * The security context of the container.
   */
  securityContext?: DescribeContainerGroupsResponseBodyContainerGroupsInitContainersSecurityContext;
  /**
   * @remarks
   * The information about the volumes that are mounted to the init container.
   */
  volumeMounts?: DescribeContainerGroupsResponseBodyContainerGroupsInitContainersVolumeMounts[];
  /**
   * @remarks
   * The working directory of the container.
   * 
   * @example
   * /usr/test
   */
  workingDir?: string;
  static names(): { [key: string]: string } {
    return {
      args: 'Args',
      command: 'Command',
      cpu: 'Cpu',
      currentState: 'CurrentState',
      environmentVars: 'EnvironmentVars',
      gpu: 'Gpu',
      image: 'Image',
      imagePullPolicy: 'ImagePullPolicy',
      memory: 'Memory',
      name: 'Name',
      ports: 'Ports',
      previousState: 'PreviousState',
      ready: 'Ready',
      restartCount: 'RestartCount',
      securityContext: 'SecurityContext',
      volumeMounts: 'VolumeMounts',
      workingDir: 'WorkingDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      args: { 'type': 'array', 'itemType': 'string' },
      command: { 'type': 'array', 'itemType': 'string' },
      cpu: 'number',
      currentState: DescribeContainerGroupsResponseBodyContainerGroupsInitContainersCurrentState,
      environmentVars: { 'type': 'array', 'itemType': DescribeContainerGroupsResponseBodyContainerGroupsInitContainersEnvironmentVars },
      gpu: 'number',
      image: 'string',
      imagePullPolicy: 'string',
      memory: 'number',
      name: 'string',
      ports: { 'type': 'array', 'itemType': DescribeContainerGroupsResponseBodyContainerGroupsInitContainersPorts },
      previousState: DescribeContainerGroupsResponseBodyContainerGroupsInitContainersPreviousState,
      ready: 'boolean',
      restartCount: 'number',
      securityContext: DescribeContainerGroupsResponseBodyContainerGroupsInitContainersSecurityContext,
      volumeMounts: { 'type': 'array', 'itemType': DescribeContainerGroupsResponseBodyContainerGroupsInitContainersVolumeMounts },
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
    if(this.currentState && typeof (this.currentState as any).validate === 'function') {
      (this.currentState as any).validate();
    }
    if(Array.isArray(this.environmentVars)) {
      $dara.Model.validateArray(this.environmentVars);
    }
    if(Array.isArray(this.ports)) {
      $dara.Model.validateArray(this.ports);
    }
    if(this.previousState && typeof (this.previousState as any).validate === 'function') {
      (this.previousState as any).validate();
    }
    if(this.securityContext && typeof (this.securityContext as any).validate === 'function') {
      (this.securityContext as any).validate();
    }
    if(Array.isArray(this.volumeMounts)) {
      $dara.Model.validateArray(this.volumeMounts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

