// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeContainerGroupsResponseBodyContainerGroupsContainersCurrentState } from "./DescribeContainerGroupsResponseBodyContainerGroupsContainersCurrentState";
import { DescribeContainerGroupsResponseBodyContainerGroupsContainersEnvironmentVars } from "./DescribeContainerGroupsResponseBodyContainerGroupsContainersEnvironmentVars";
import { DescribeContainerGroupsResponseBodyContainerGroupsContainersLivenessProbe } from "./DescribeContainerGroupsResponseBodyContainerGroupsContainersLivenessProbe";
import { DescribeContainerGroupsResponseBodyContainerGroupsContainersPorts } from "./DescribeContainerGroupsResponseBodyContainerGroupsContainersPorts";
import { DescribeContainerGroupsResponseBodyContainerGroupsContainersPreviousState } from "./DescribeContainerGroupsResponseBodyContainerGroupsContainersPreviousState";
import { DescribeContainerGroupsResponseBodyContainerGroupsContainersReadinessProbe } from "./DescribeContainerGroupsResponseBodyContainerGroupsContainersReadinessProbe";
import { DescribeContainerGroupsResponseBodyContainerGroupsContainersSecurityContext } from "./DescribeContainerGroupsResponseBodyContainerGroupsContainersSecurityContext";
import { DescribeContainerGroupsResponseBodyContainerGroupsContainersVolumeMounts } from "./DescribeContainerGroupsResponseBodyContainerGroupsContainersVolumeMounts";


export class DescribeContainerGroupsResponseBodyContainerGroupsContainers extends $dara.Model {
  /**
   * @remarks
   * The arguments that are passed to the startup commands of the container.
   */
  args?: string[];
  /**
   * @remarks
   * The startup commands of the container.
   */
  commands?: string[];
  /**
   * @remarks
   * The number of vCPUs that are allocated to the container.
   * 
   * @example
   * 2.0
   */
  cpu?: number;
  /**
   * @remarks
   * The current container status.
   */
  currentState?: DescribeContainerGroupsResponseBodyContainerGroupsContainersCurrentState;
  /**
   * @remarks
   * The environment variables of the container.
   */
  environmentVars?: DescribeContainerGroupsResponseBodyContainerGroupsContainersEnvironmentVars[];
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
   * The image in the container.
   * 
   * @example
   * mysql
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
   * The liveness probe of the container.
   */
  livenessProbe?: DescribeContainerGroupsResponseBodyContainerGroupsContainersLivenessProbe;
  /**
   * @remarks
   * The memory size of the container. Unit: GiB.
   * 
   * @example
   * 2.0
   */
  memory?: number;
  /**
   * @remarks
   * The name of the container.
   * 
   * @example
   * nginx
   */
  name?: string;
  /**
   * @remarks
   * The exposed port and protocol of the container.
   */
  ports?: DescribeContainerGroupsResponseBodyContainerGroupsContainersPorts[];
  /**
   * @remarks
   * The previous state of the container.
   */
  previousState?: DescribeContainerGroupsResponseBodyContainerGroupsContainersPreviousState;
  /**
   * @remarks
   * The readiness probe that is used to check whether the container is ready to serve a request.
   */
  readinessProbe?: DescribeContainerGroupsResponseBodyContainerGroupsContainersReadinessProbe;
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
   * 0
   */
  restartCount?: number;
  /**
   * @remarks
   * The security context of the elastic container instance.
   */
  securityContext?: DescribeContainerGroupsResponseBodyContainerGroupsContainersSecurityContext;
  /**
   * @remarks
   * Indicates whether the container allocates buffer resources to standard input streams when the container is running. If you do not specify this parameter, an end-of-file (EOF) error may occur when standard input streams in the container are read. Default value: false.
   * 
   * @example
   * true
   */
  stdin?: boolean;
  /**
   * @remarks
   * Indicates whether standard input streams are disconnected after a client is disconnected. If Stdin is set to true, standard input streams remain connected among multiple sessions. If StdinOnce is set to true, standard input streams are connected after the container is started, and remain idle until a client is connected to receive data. After the client is disconnected, streams are also disconnected, and remain disconnected until the container restarts.
   * 
   * @example
   * true
   */
  stdinOnce?: boolean;
  /**
   * @remarks
   * Indicates whether interaction is enabled. Default value: false. If the value of the Command parameter is `/bin/bash`, the value of this parameter is true.
   * 
   * @example
   * false
   */
  tty?: boolean;
  /**
   * @remarks
   * Information about the mounted volumes.
   */
  volumeMounts?: DescribeContainerGroupsResponseBodyContainerGroupsContainersVolumeMounts[];
  /**
   * @remarks
   * The working directory of the container.
   * 
   * @example
   * /usr/local/nginx
   */
  workingDir?: string;
  static names(): { [key: string]: string } {
    return {
      args: 'Args',
      commands: 'Commands',
      cpu: 'Cpu',
      currentState: 'CurrentState',
      environmentVars: 'EnvironmentVars',
      gpu: 'Gpu',
      image: 'Image',
      imagePullPolicy: 'ImagePullPolicy',
      livenessProbe: 'LivenessProbe',
      memory: 'Memory',
      name: 'Name',
      ports: 'Ports',
      previousState: 'PreviousState',
      readinessProbe: 'ReadinessProbe',
      ready: 'Ready',
      restartCount: 'RestartCount',
      securityContext: 'SecurityContext',
      stdin: 'Stdin',
      stdinOnce: 'StdinOnce',
      tty: 'Tty',
      volumeMounts: 'VolumeMounts',
      workingDir: 'WorkingDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      args: { 'type': 'array', 'itemType': 'string' },
      commands: { 'type': 'array', 'itemType': 'string' },
      cpu: 'number',
      currentState: DescribeContainerGroupsResponseBodyContainerGroupsContainersCurrentState,
      environmentVars: { 'type': 'array', 'itemType': DescribeContainerGroupsResponseBodyContainerGroupsContainersEnvironmentVars },
      gpu: 'number',
      image: 'string',
      imagePullPolicy: 'string',
      livenessProbe: DescribeContainerGroupsResponseBodyContainerGroupsContainersLivenessProbe,
      memory: 'number',
      name: 'string',
      ports: { 'type': 'array', 'itemType': DescribeContainerGroupsResponseBodyContainerGroupsContainersPorts },
      previousState: DescribeContainerGroupsResponseBodyContainerGroupsContainersPreviousState,
      readinessProbe: DescribeContainerGroupsResponseBodyContainerGroupsContainersReadinessProbe,
      ready: 'boolean',
      restartCount: 'number',
      securityContext: DescribeContainerGroupsResponseBodyContainerGroupsContainersSecurityContext,
      stdin: 'boolean',
      stdinOnce: 'boolean',
      tty: 'boolean',
      volumeMounts: { 'type': 'array', 'itemType': DescribeContainerGroupsResponseBodyContainerGroupsContainersVolumeMounts },
      workingDir: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.args)) {
      $dara.Model.validateArray(this.args);
    }
    if(Array.isArray(this.commands)) {
      $dara.Model.validateArray(this.commands);
    }
    if(this.currentState && typeof (this.currentState as any).validate === 'function') {
      (this.currentState as any).validate();
    }
    if(Array.isArray(this.environmentVars)) {
      $dara.Model.validateArray(this.environmentVars);
    }
    if(this.livenessProbe && typeof (this.livenessProbe as any).validate === 'function') {
      (this.livenessProbe as any).validate();
    }
    if(Array.isArray(this.ports)) {
      $dara.Model.validateArray(this.ports);
    }
    if(this.previousState && typeof (this.previousState as any).validate === 'function') {
      (this.previousState as any).validate();
    }
    if(this.readinessProbe && typeof (this.readinessProbe as any).validate === 'function') {
      (this.readinessProbe as any).validate();
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

