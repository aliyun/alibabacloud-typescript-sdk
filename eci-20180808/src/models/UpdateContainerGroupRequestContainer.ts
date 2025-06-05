// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateContainerGroupRequestContainerLivenessProbe } from "./UpdateContainerGroupRequestContainerLivenessProbe";
import { UpdateContainerGroupRequestContainerReadinessProbe } from "./UpdateContainerGroupRequestContainerReadinessProbe";
import { UpdateContainerGroupRequestContainerSecurityContext } from "./UpdateContainerGroupRequestContainerSecurityContext";
import { UpdateContainerGroupRequestContainerEnvironmentVar } from "./UpdateContainerGroupRequestContainerEnvironmentVar";
import { UpdateContainerGroupRequestContainerLifecyclePostStartHandlerHttpGetHttpHeaders } from "./UpdateContainerGroupRequestContainerLifecyclePostStartHandlerHttpGetHttpHeaders";
import { UpdateContainerGroupRequestContainerLifecyclePreStopHandlerHttpGetHttpHeader } from "./UpdateContainerGroupRequestContainerLifecyclePreStopHandlerHttpGetHttpHeader";
import { UpdateContainerGroupRequestContainerPort } from "./UpdateContainerGroupRequestContainerPort";
import { UpdateContainerGroupRequestContainerVolumeMount } from "./UpdateContainerGroupRequestContainerVolumeMount";


export class UpdateContainerGroupRequestContainer extends $dara.Model {
  livenessProbe?: UpdateContainerGroupRequestContainerLivenessProbe;
  readinessProbe?: UpdateContainerGroupRequestContainerReadinessProbe;
  securityContext?: UpdateContainerGroupRequestContainerSecurityContext;
  /**
   * @remarks
   * The arguments that you want to pass to the startup command of the container. You can specify up to 10 arguments.
   * 
   * @example
   * hello
   */
  arg?: string[];
  /**
   * @remarks
   * The commands that you want to run to perform the health check.
   * 
   * @example
   * echo
   */
  command?: string[];
  /**
   * @remarks
   * The number of vCPUs that you want to allocate to the container
   * 
   * @example
   * 1.0
   */
  cpu?: number;
  /**
   * @remarks
   * The environment variables for the container.
   */
  environmentVar?: UpdateContainerGroupRequestContainerEnvironmentVar[];
  /**
   * @remarks
   * The number of GPUs that you want to allocate to the container.
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
   * jenkins
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
   * Never
   */
  imagePullPolicy?: string;
  /**
   * @remarks
   * The commands to be executed in the container when you use the CLI to specify the postStart callback function.
   * 
   * @example
   * hide
   */
  lifecyclePostStartHandlerExec?: string[];
  /**
   * @remarks
   * The IP address of the host that receives the HTTP GET request when you use an HTTP request to specify the postStart callback function.
   * 
   * @example
   * hide
   */
  lifecyclePostStartHandlerHttpGetHost?: string;
  /**
   * @remarks
   * The information about the valid HTTP request headers among the generated HTTP request headers.
   */
  lifecyclePostStartHandlerHttpGetHttpHeaders?: UpdateContainerGroupRequestContainerLifecyclePostStartHandlerHttpGetHttpHeaders[];
  /**
   * @remarks
   * The path to which the system sends an HTTP GET request for a health check when you use an HTTP request to specify the postStart callback function.
   * 
   * @example
   * /healthyz
   */
  lifecyclePostStartHandlerHttpGetPath?: string;
  /**
   * @remarks
   * The port to which the system sends the HTTP GET request when you use an HTTP request to specify the postStart callback function.
   * 
   * @example
   * 1
   */
  lifecyclePostStartHandlerHttpGetPort?: number;
  /**
   * @remarks
   * The path to which the system sends an HTTP GET request for a health check when you use an HTTP request to specify the postStart callback function.
   * 
   * @example
   * /healthyz
   */
  lifecyclePostStartHandlerHttpGetScheme?: string;
  /**
   * @remarks
   * The IP address of the host that receives the TCP socket request when you use a TCP socket request to specify the postStart callback function.
   * 
   * @example
   * 10.0.XX.XX
   */
  lifecyclePostStartHandlerTcpSocketHost?: string;
  /**
   * @remarks
   * The port to which the system sends a TCP socket request for a health check when you use TCP sockets to specify the postStart callback function.
   * 
   * @example
   * 1
   */
  lifecyclePostStartHandlerTcpSocketPort?: number;
  /**
   * @remarks
   * The commands to be executed in the container when you use the CLI to specify the preStop callback function.
   * 
   * @example
   * hide
   */
  lifecyclePreStopHandlerExec?: string[];
  /**
   * @remarks
   * The IP address of the host that receives the HTTP GET request when you use an HTTP request to specify the preStop callback function.
   * 
   * @example
   * 10.0.XX.XX
   */
  lifecyclePreStopHandlerHttpGetHost?: string;
  /**
   * @remarks
   * The information about the generated HTTP request header.
   */
  lifecyclePreStopHandlerHttpGetHttpHeader?: UpdateContainerGroupRequestContainerLifecyclePreStopHandlerHttpGetHttpHeader[];
  /**
   * @remarks
   * The path to which the system sends an HTTP GET request for a health check when you use an HTTP request to specify the preSop callback function.
   * 
   * @example
   * /healthyz
   */
  lifecyclePreStopHandlerHttpGetPath?: string;
  /**
   * @remarks
   * The port to which the system sends the HTTP GET request for a health check when you use an HTTP request to specify the preStop callback function.
   * 
   * @example
   * 1
   */
  lifecyclePreStopHandlerHttpGetPort?: number;
  /**
   * @remarks
   * The protocol type of the HTTP GET request when you use an HTTP request to specify the preStop callback function. Valid values:
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
   * The IP address of the host that receives the TCP socket request when you use a TCP socket request to specify the preStop callback function.
   * 
   * @example
   * 10.0.XX.XX
   */
  lifecyclePreStopHandlerTcpSocketHost?: string;
  /**
   * @remarks
   * The port to which the system sends a TCP socket request for a health check when you use TCP sockets to specify the preStop callback function.
   * 
   * @example
   * 80
   */
  lifecyclePreStopHandlerTcpSocketPort?: number;
  /**
   * @remarks
   * The memory size of the container.
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
   * jenkins
   */
  name?: string;
  /**
   * @remarks
   * The port to which the system sends an HTTP GET request for a health check.
   */
  port?: UpdateContainerGroupRequestContainerPort[];
  /**
   * @remarks
   * Specifies whether the container allocates buffer resources to standard input streams when the container is running. If you do not specify this parameter, an end-of-file (EOF) error may occur when standard input streams in the container are read. Default value: false.
   * 
   * @example
   * false
   */
  stdin?: boolean;
  /**
   * @remarks
   * Specifies whether standard input streams are disconnected after a client is disconnected. If Stdin is set to true, standard input streams remain connected among multiple sessions. If StdinOnce is set to true, standard input streams are connected after the container is started, and remain idle until a client is connected to receive data. After the client is disconnected, streams are also disconnected, and remain disconnected until the container restarts.
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
   * false
   */
  tty?: boolean;
  /**
   * @remarks
   * Pod volumes that you want to mount into the filesystem of the container.
   */
  volumeMount?: UpdateContainerGroupRequestContainerVolumeMount[];
  /**
   * @remarks
   * The working directory of the container.
   * 
   * @example
   * /usr/share/
   */
  workingDir?: string;
  static names(): { [key: string]: string } {
    return {
      livenessProbe: 'LivenessProbe',
      readinessProbe: 'ReadinessProbe',
      securityContext: 'SecurityContext',
      arg: 'Arg',
      command: 'Command',
      cpu: 'Cpu',
      environmentVar: 'EnvironmentVar',
      gpu: 'Gpu',
      image: 'Image',
      imagePullPolicy: 'ImagePullPolicy',
      lifecyclePostStartHandlerExec: 'LifecyclePostStartHandlerExec',
      lifecyclePostStartHandlerHttpGetHost: 'LifecyclePostStartHandlerHttpGetHost',
      lifecyclePostStartHandlerHttpGetHttpHeaders: 'LifecyclePostStartHandlerHttpGetHttpHeaders',
      lifecyclePostStartHandlerHttpGetPath: 'LifecyclePostStartHandlerHttpGetPath',
      lifecyclePostStartHandlerHttpGetPort: 'LifecyclePostStartHandlerHttpGetPort',
      lifecyclePostStartHandlerHttpGetScheme: 'LifecyclePostStartHandlerHttpGetScheme',
      lifecyclePostStartHandlerTcpSocketHost: 'LifecyclePostStartHandlerTcpSocketHost',
      lifecyclePostStartHandlerTcpSocketPort: 'LifecyclePostStartHandlerTcpSocketPort',
      lifecyclePreStopHandlerExec: 'LifecyclePreStopHandlerExec',
      lifecyclePreStopHandlerHttpGetHost: 'LifecyclePreStopHandlerHttpGetHost',
      lifecyclePreStopHandlerHttpGetHttpHeader: 'LifecyclePreStopHandlerHttpGetHttpHeader',
      lifecyclePreStopHandlerHttpGetPath: 'LifecyclePreStopHandlerHttpGetPath',
      lifecyclePreStopHandlerHttpGetPort: 'LifecyclePreStopHandlerHttpGetPort',
      lifecyclePreStopHandlerHttpGetScheme: 'LifecyclePreStopHandlerHttpGetScheme',
      lifecyclePreStopHandlerTcpSocketHost: 'LifecyclePreStopHandlerTcpSocketHost',
      lifecyclePreStopHandlerTcpSocketPort: 'LifecyclePreStopHandlerTcpSocketPort',
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
      livenessProbe: UpdateContainerGroupRequestContainerLivenessProbe,
      readinessProbe: UpdateContainerGroupRequestContainerReadinessProbe,
      securityContext: UpdateContainerGroupRequestContainerSecurityContext,
      arg: { 'type': 'array', 'itemType': 'string' },
      command: { 'type': 'array', 'itemType': 'string' },
      cpu: 'number',
      environmentVar: { 'type': 'array', 'itemType': UpdateContainerGroupRequestContainerEnvironmentVar },
      gpu: 'number',
      image: 'string',
      imagePullPolicy: 'string',
      lifecyclePostStartHandlerExec: { 'type': 'array', 'itemType': 'string' },
      lifecyclePostStartHandlerHttpGetHost: 'string',
      lifecyclePostStartHandlerHttpGetHttpHeaders: { 'type': 'array', 'itemType': UpdateContainerGroupRequestContainerLifecyclePostStartHandlerHttpGetHttpHeaders },
      lifecyclePostStartHandlerHttpGetPath: 'string',
      lifecyclePostStartHandlerHttpGetPort: 'number',
      lifecyclePostStartHandlerHttpGetScheme: 'string',
      lifecyclePostStartHandlerTcpSocketHost: 'string',
      lifecyclePostStartHandlerTcpSocketPort: 'number',
      lifecyclePreStopHandlerExec: { 'type': 'array', 'itemType': 'string' },
      lifecyclePreStopHandlerHttpGetHost: 'string',
      lifecyclePreStopHandlerHttpGetHttpHeader: { 'type': 'array', 'itemType': UpdateContainerGroupRequestContainerLifecyclePreStopHandlerHttpGetHttpHeader },
      lifecyclePreStopHandlerHttpGetPath: 'string',
      lifecyclePreStopHandlerHttpGetPort: 'number',
      lifecyclePreStopHandlerHttpGetScheme: 'string',
      lifecyclePreStopHandlerTcpSocketHost: 'string',
      lifecyclePreStopHandlerTcpSocketPort: 'number',
      memory: 'number',
      name: 'string',
      port: { 'type': 'array', 'itemType': UpdateContainerGroupRequestContainerPort },
      stdin: 'boolean',
      stdinOnce: 'boolean',
      tty: 'boolean',
      volumeMount: { 'type': 'array', 'itemType': UpdateContainerGroupRequestContainerVolumeMount },
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
    if(Array.isArray(this.arg)) {
      $dara.Model.validateArray(this.arg);
    }
    if(Array.isArray(this.command)) {
      $dara.Model.validateArray(this.command);
    }
    if(Array.isArray(this.environmentVar)) {
      $dara.Model.validateArray(this.environmentVar);
    }
    if(Array.isArray(this.lifecyclePostStartHandlerExec)) {
      $dara.Model.validateArray(this.lifecyclePostStartHandlerExec);
    }
    if(Array.isArray(this.lifecyclePostStartHandlerHttpGetHttpHeaders)) {
      $dara.Model.validateArray(this.lifecyclePostStartHandlerHttpGetHttpHeaders);
    }
    if(Array.isArray(this.lifecyclePreStopHandlerExec)) {
      $dara.Model.validateArray(this.lifecyclePreStopHandlerExec);
    }
    if(Array.isArray(this.lifecyclePreStopHandlerHttpGetHttpHeader)) {
      $dara.Model.validateArray(this.lifecyclePreStopHandlerHttpGetHttpHeader);
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

