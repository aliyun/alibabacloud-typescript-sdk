// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyEciScalingConfigurationRequestContainersLivenessProbe } from "./ModifyEciScalingConfigurationRequestContainersLivenessProbe";
import { ModifyEciScalingConfigurationRequestContainersReadinessProbe } from "./ModifyEciScalingConfigurationRequestContainersReadinessProbe";
import { ModifyEciScalingConfigurationRequestContainersSecurityContext } from "./ModifyEciScalingConfigurationRequestContainersSecurityContext";
import { ModifyEciScalingConfigurationRequestContainersEnvironmentVars } from "./ModifyEciScalingConfigurationRequestContainersEnvironmentVars";
import { ModifyEciScalingConfigurationRequestContainersPorts } from "./ModifyEciScalingConfigurationRequestContainersPorts";
import { ModifyEciScalingConfigurationRequestContainersVolumeMounts } from "./ModifyEciScalingConfigurationRequestContainersVolumeMounts";


export class ModifyEciScalingConfigurationRequestContainers extends $dara.Model {
  livenessProbe?: ModifyEciScalingConfigurationRequestContainersLivenessProbe;
  readinessProbe?: ModifyEciScalingConfigurationRequestContainersReadinessProbe;
  securityContext?: ModifyEciScalingConfigurationRequestContainersSecurityContext;
  /**
   * @remarks
   * The container startup arguments. You can specify up to 10 arguments.
   */
  args?: string[];
  /**
   * @remarks
   * The commands that you can run in the container when you use the CLI to perform a liveness probe.
   */
  commands?: string[];
  /**
   * @remarks
   * The number of vCPUs per container.
   * 
   * @example
   * 0.25
   */
  cpu?: number;
  /**
   * @remarks
   * The environment variables.
   */
  environmentVars?: ModifyEciScalingConfigurationRequestContainersEnvironmentVars[];
  /**
   * @remarks
   * The number of GPUs per container.
   * 
   * @example
   * 1
   */
  gpu?: number;
  /**
   * @remarks
   * The container image.
   * 
   * @example
   * registry-vpc.cn-hangzhou.aliyuncs.com/eci_open/nginx:latest
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
   * The commands that you can run within the container to configure the postStart callback function.
   */
  lifecyclePostStartHandlerExecs?: string[];
  /**
   * @remarks
   * The IP address of the host to which you want to send the HTTP GET request to configure the postStart callback function.
   * 
   * @example
   * 10.0.XX.XX
   */
  lifecyclePostStartHandlerHttpGetHost?: string;
  /**
   * @remarks
   * The path to which you want to send the HTTP GET request to configure the postStart callback function.
   * 
   * @example
   * /healthyz
   */
  lifecyclePostStartHandlerHttpGetPath?: string;
  /**
   * @remarks
   * The port over which you want to send the HTTP GET request to configure the postStart callback function.
   * 
   * @example
   * 5050
   */
  lifecyclePostStartHandlerHttpGetPort?: number;
  /**
   * @remarks
   * The protocol type of the HTTP GET request that you want to send to configure the postStart callback function. Valid values:
   * 
   * *   HTTP
   * *   HTTPS
   * 
   * @example
   * HTTPS
   */
  lifecyclePostStartHandlerHttpGetScheme?: string;
  /**
   * @remarks
   * The IP address of the host detected by the TCP socket that you want to use to configure the postStart callback function.
   * 
   * @example
   * 10.0.XX.XX
   */
  lifecyclePostStartHandlerTcpSocketHost?: string;
  /**
   * @remarks
   * The port detected by the TCP socket that you want to use to configure the postStart callback function.
   * 
   * @example
   * 80
   */
  lifecyclePostStartHandlerTcpSocketPort?: number;
  /**
   * @remarks
   * The commands that you can run within the container to configure the preStop callback function.
   */
  lifecyclePreStopHandlerExecs?: string[];
  /**
   * @remarks
   * The IP address of the host to which you want to send the HTTP GET request to configure the preStop callback function.
   * 
   * @example
   * 10.0.XX.XX
   */
  lifecyclePreStopHandlerHttpGetHost?: string;
  /**
   * @remarks
   * The path to which you want to send the HTTP GET request to configure the preStop callback function.
   * 
   * @example
   * /healthyz
   */
  lifecyclePreStopHandlerHttpGetPath?: string;
  /**
   * @remarks
   * The port over which you want to send the HTTP GET request to configure the preStop callback function.
   * 
   * @example
   * 80
   */
  lifecyclePreStopHandlerHttpGetPort?: number;
  /**
   * @remarks
   * The protocol type of the HTTP GET request that you want to send to configure the preStop callback function. Valid values:
   * 
   * *   HTTP
   * *   HTTPS
   * 
   * @example
   * HTTP
   */
  lifecyclePreStopHandlerHttpGetScheme?: string;
  /**
   * @remarks
   * The IP address of the host detected by the TCP socket that you want to use to configure the preStop callback function.
   * 
   * @example
   * 10.0.XX.XX
   */
  lifecyclePreStopHandlerTcpSocketHost?: string;
  /**
   * @remarks
   * The port detected by the TCP socket that you want to use to configure the preStop callback function.
   * 
   * @example
   * 80
   */
  lifecyclePreStopHandlerTcpSocketPort?: number;
  /**
   * @remarks
   * The memory size per container. Unit: GiB.
   * 
   * @example
   * 0.5
   */
  memory?: number;
  /**
   * @remarks
   * The name of the container image.
   * 
   * @example
   * nginx
   */
  name?: string;
  /**
   * @remarks
   * The ports.
   */
  ports?: ModifyEciScalingConfigurationRequestContainersPorts[];
  /**
   * @remarks
   * Specifies whether the container allocates buffer resources to standard input streams during its active runtime. If you do not specify this parameter, an end-of-file (EOF) error occurs when standard input streams in the container are read.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  stdin?: boolean;
  /**
   * @remarks
   * Specifies whether standard input streams remain connected during multiple sessions when StdinOnce is set to true.
   * 
   * If you set StdinOnce to true, standard input streams are connected after the container is started, and remain idle until a client is connected to receive data. After the client is disconnected, streams are also disconnected and remain disconnected until the container is restarted.
   * 
   * @example
   * false
   */
  stdinOnce?: boolean;
  /**
   * @remarks
   * Specifies whether to enable Interaction. Default value: false.
   * 
   * If the command is a /bin/bash command, set this parameter to true.
   * 
   * @example
   * false
   */
  tty?: boolean;
  /**
   * @remarks
   * The volume mounts of the container.
   */
  volumeMounts?: ModifyEciScalingConfigurationRequestContainersVolumeMounts[];
  /**
   * @remarks
   * The working directory of the container.
   * 
   * @example
   * /usr/local/
   */
  workingDir?: string;
  static names(): { [key: string]: string } {
    return {
      livenessProbe: 'LivenessProbe',
      readinessProbe: 'ReadinessProbe',
      securityContext: 'SecurityContext',
      args: 'Args',
      commands: 'Commands',
      cpu: 'Cpu',
      environmentVars: 'EnvironmentVars',
      gpu: 'Gpu',
      image: 'Image',
      imagePullPolicy: 'ImagePullPolicy',
      lifecyclePostStartHandlerExecs: 'LifecyclePostStartHandlerExecs',
      lifecyclePostStartHandlerHttpGetHost: 'LifecyclePostStartHandlerHttpGetHost',
      lifecyclePostStartHandlerHttpGetPath: 'LifecyclePostStartHandlerHttpGetPath',
      lifecyclePostStartHandlerHttpGetPort: 'LifecyclePostStartHandlerHttpGetPort',
      lifecyclePostStartHandlerHttpGetScheme: 'LifecyclePostStartHandlerHttpGetScheme',
      lifecyclePostStartHandlerTcpSocketHost: 'LifecyclePostStartHandlerTcpSocketHost',
      lifecyclePostStartHandlerTcpSocketPort: 'LifecyclePostStartHandlerTcpSocketPort',
      lifecyclePreStopHandlerExecs: 'LifecyclePreStopHandlerExecs',
      lifecyclePreStopHandlerHttpGetHost: 'LifecyclePreStopHandlerHttpGetHost',
      lifecyclePreStopHandlerHttpGetPath: 'LifecyclePreStopHandlerHttpGetPath',
      lifecyclePreStopHandlerHttpGetPort: 'LifecyclePreStopHandlerHttpGetPort',
      lifecyclePreStopHandlerHttpGetScheme: 'LifecyclePreStopHandlerHttpGetScheme',
      lifecyclePreStopHandlerTcpSocketHost: 'LifecyclePreStopHandlerTcpSocketHost',
      lifecyclePreStopHandlerTcpSocketPort: 'LifecyclePreStopHandlerTcpSocketPort',
      memory: 'Memory',
      name: 'Name',
      ports: 'Ports',
      stdin: 'Stdin',
      stdinOnce: 'StdinOnce',
      tty: 'Tty',
      volumeMounts: 'VolumeMounts',
      workingDir: 'WorkingDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      livenessProbe: ModifyEciScalingConfigurationRequestContainersLivenessProbe,
      readinessProbe: ModifyEciScalingConfigurationRequestContainersReadinessProbe,
      securityContext: ModifyEciScalingConfigurationRequestContainersSecurityContext,
      args: { 'type': 'array', 'itemType': 'string' },
      commands: { 'type': 'array', 'itemType': 'string' },
      cpu: 'number',
      environmentVars: { 'type': 'array', 'itemType': ModifyEciScalingConfigurationRequestContainersEnvironmentVars },
      gpu: 'number',
      image: 'string',
      imagePullPolicy: 'string',
      lifecyclePostStartHandlerExecs: { 'type': 'array', 'itemType': 'string' },
      lifecyclePostStartHandlerHttpGetHost: 'string',
      lifecyclePostStartHandlerHttpGetPath: 'string',
      lifecyclePostStartHandlerHttpGetPort: 'number',
      lifecyclePostStartHandlerHttpGetScheme: 'string',
      lifecyclePostStartHandlerTcpSocketHost: 'string',
      lifecyclePostStartHandlerTcpSocketPort: 'number',
      lifecyclePreStopHandlerExecs: { 'type': 'array', 'itemType': 'string' },
      lifecyclePreStopHandlerHttpGetHost: 'string',
      lifecyclePreStopHandlerHttpGetPath: 'string',
      lifecyclePreStopHandlerHttpGetPort: 'number',
      lifecyclePreStopHandlerHttpGetScheme: 'string',
      lifecyclePreStopHandlerTcpSocketHost: 'string',
      lifecyclePreStopHandlerTcpSocketPort: 'number',
      memory: 'number',
      name: 'string',
      ports: { 'type': 'array', 'itemType': ModifyEciScalingConfigurationRequestContainersPorts },
      stdin: 'boolean',
      stdinOnce: 'boolean',
      tty: 'boolean',
      volumeMounts: { 'type': 'array', 'itemType': ModifyEciScalingConfigurationRequestContainersVolumeMounts },
      workingDir: 'string',
    };
  }

  validate() {
    if(this.livenessProbe && typeof (this.livenessProbe as any).validate === 'function') {
      (this.livenessProbe as any).validate();
    }
    if(this.readinessProbe && typeof (this.readinessProbe as any).validate === 'function') {
      (this.readinessProbe as any).validate();
    }
    if(this.securityContext && typeof (this.securityContext as any).validate === 'function') {
      (this.securityContext as any).validate();
    }
    if(Array.isArray(this.args)) {
      $dara.Model.validateArray(this.args);
    }
    if(Array.isArray(this.commands)) {
      $dara.Model.validateArray(this.commands);
    }
    if(Array.isArray(this.environmentVars)) {
      $dara.Model.validateArray(this.environmentVars);
    }
    if(Array.isArray(this.lifecyclePostStartHandlerExecs)) {
      $dara.Model.validateArray(this.lifecyclePostStartHandlerExecs);
    }
    if(Array.isArray(this.lifecyclePreStopHandlerExecs)) {
      $dara.Model.validateArray(this.lifecyclePreStopHandlerExecs);
    }
    if(Array.isArray(this.ports)) {
      $dara.Model.validateArray(this.ports);
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

