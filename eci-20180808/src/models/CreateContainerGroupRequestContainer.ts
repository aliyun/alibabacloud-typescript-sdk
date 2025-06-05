// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateContainerGroupRequestContainerLivenessProbe } from "./CreateContainerGroupRequestContainerLivenessProbe";
import { CreateContainerGroupRequestContainerReadinessProbe } from "./CreateContainerGroupRequestContainerReadinessProbe";
import { CreateContainerGroupRequestContainerSecurityContext } from "./CreateContainerGroupRequestContainerSecurityContext";
import { CreateContainerGroupRequestContainerEnvironmentVar } from "./CreateContainerGroupRequestContainerEnvironmentVar";
import { CreateContainerGroupRequestContainerLifecyclePostStartHandlerHttpGetHttpHeader } from "./CreateContainerGroupRequestContainerLifecyclePostStartHandlerHttpGetHttpHeader";
import { CreateContainerGroupRequestContainerLifecyclePreStopHandlerHttpGetHttpHeader } from "./CreateContainerGroupRequestContainerLifecyclePreStopHandlerHttpGetHttpHeader";
import { CreateContainerGroupRequestContainerPort } from "./CreateContainerGroupRequestContainerPort";
import { CreateContainerGroupRequestContainerVolumeMount } from "./CreateContainerGroupRequestContainerVolumeMount";


export class CreateContainerGroupRequestContainer extends $dara.Model {
  livenessProbe?: CreateContainerGroupRequestContainerLivenessProbe;
  readinessProbe?: CreateContainerGroupRequestContainerReadinessProbe;
  securityContext?: CreateContainerGroupRequestContainerSecurityContext;
  /**
   * @remarks
   * The arguments that are passed to the startup command of the container. You can specify up to 10 arguments.
   * 
   * @example
   * 100
   */
  arg?: string[];
  /**
   * @remarks
   * The commands to be executed in the container when you use a CLI to perform health checks.
   * 
   * >  When you configure ReadinessProbe-related parameters, you can select only one of the HttpGet, Exec, and TcpSocket check methods.
   * 
   * @example
   * sleep
   */
  command?: string[];
  /**
   * @remarks
   * The number of vCPUs that you want to allocate to the container.
   * 
   * @example
   * 0.25
   */
  cpu?: number;
  /**
   * @remarks
   * The environment variables of the container.
   */
  environmentVar?: CreateContainerGroupRequestContainerEnvironmentVar[];
  /**
   * @remarks
   * Specifies whether to hide the information about environment variables when you query the details of an elastic container instance. Default value: false. Valid values:
   * 
   * *   false
   * *   true If environment variables contain sensitive information, you can set this parameter to true to improve security of the information.
   * 
   * @example
   * false
   */
  environmentVarHide?: boolean;
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
   * This parameter is required.
   * 
   * @example
   * registry-vpc.cn-hangzhou.aliyuncs.com/eci_open/nginx:latest
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
   * The commands to be executed in containers when you use a CLI to specify a postStart hook.
   * 
   * @example
   * ["/bin/sh", "-c", "echo Hello from the postStart handler > /usr/share/message"]
   */
  lifecyclePostStartHandlerExec?: string[];
  /**
   * @remarks
   * The IP address of the host that receives the HTTP GET request when you use an HTTP request to specify a postStart hook.
   * 
   * @example
   * 10.0.XX.XX
   */
  lifecyclePostStartHandlerHttpGetHost?: string;
  /**
   * @remarks
   * The HTTP GET request header.
   */
  lifecyclePostStartHandlerHttpGetHttpHeader?: CreateContainerGroupRequestContainerLifecyclePostStartHandlerHttpGetHttpHeader[];
  /**
   * @remarks
   * The path to which the system sends an HTTP GET request for a health check when you use an HTTP request to specify a postStart hook.
   * 
   * @example
   * /healthyz
   */
  lifecyclePostStartHandlerHttpGetPath?: string;
  /**
   * @remarks
   * The port to which the system sends an HTTP GET request when you use an HTTP request to specify a postStart hook.
   * 
   * @example
   * 5050
   */
  lifecyclePostStartHandlerHttpGetPort?: number;
  /**
   * @remarks
   * The protocol type of HTTP GET requests when you use HTTP requests to specify a postStart hook. Valid values:
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
   * The IP address of the host that receives the TCP socket request when you use a TCP socket request to specify a postStart hook.
   * 
   * @example
   * 10.0.XX.XX
   */
  lifecyclePostStartHandlerTcpSocketHost?: string;
  /**
   * @remarks
   * The port to which the system sends a TCP socket request for a health check when you use TCP sockets to specify a postStart hook.
   * 
   * @example
   * 80
   */
  lifecyclePostStartHandlerTcpSocketPort?: number;
  /**
   * @remarks
   * The commands to be executed in containers when you use a CLI to specify a preStop hook.
   * 
   * @example
   * ["/bin/sh", "-c","echo Hello from the preStop handler > /usr/share/message"]
   */
  lifecyclePreStopHandlerExec?: string[];
  /**
   * @remarks
   * The IP address of the host that receives the HTTP GET request when you use an HTTP request to specify a preStop hook.
   * 
   * @example
   * 10.0.XX.XX
   */
  lifecyclePreStopHandlerHttpGetHost?: string;
  /**
   * @remarks
   * The HTTP GET request header.
   */
  lifecyclePreStopHandlerHttpGetHttpHeader?: CreateContainerGroupRequestContainerLifecyclePreStopHandlerHttpGetHttpHeader[];
  /**
   * @remarks
   * The path to which the system sends an HTTP GET request for a health check when you use an HTTP request to specify a preSop hook.
   * 
   * @example
   * /healthyz
   */
  lifecyclePreStopHandlerHttpGetPath?: string;
  /**
   * @remarks
   * The port to which the system sends an HTTP GET request for a health check when you use HTTP requests to specify a preStop hook.
   * 
   * @example
   * 88
   */
  lifecyclePreStopHandlerHttpGetPort?: number;
  /**
   * @remarks
   * The protocol type of the HTTP GET request when you use an HTTP request to specify a preStop hook. Valid values:
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
   * The IP address of the host that receives the TCP socket request when you use a TCP socket request to specify a preStop hook.
   * 
   * @example
   * 10.0.XX.XX
   */
  lifecyclePreStopHandlerTcpSocketHost?: string;
  /**
   * @remarks
   * The port to which the system sends a TCP socket request for a health check when you use TCP sockets to specify a preStop hook.
   * 
   * @example
   * 90
   */
  lifecyclePreStopHandlerTcpSocketPort?: number;
  /**
   * @remarks
   * The memory size of the container. Unit: GiB
   * 
   * @example
   * 0.5
   */
  memory?: number;
  /**
   * @remarks
   * The name of the container.
   * 
   * This parameter is required.
   * 
   * @example
   * nginx
   */
  name?: string;
  /**
   * @remarks
   * The port to which the system sends an HTTP GET request for a health check when you use HTTP requests to perform health checks.
   * 
   * >  When you configure LivenessProbe-related parameters, you can select only one of the HttpGet, Exec, and TcpSocket check methods.
   */
  port?: CreateContainerGroupRequestContainerPort[];
  /**
   * @remarks
   * Specifies whether to enable privileged mode for the container. That is, whether to run the container in privileged mode. Default value: false. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  securityContextPrivileged?: boolean;
  /**
   * @remarks
   * The user group that runs the container.
   * 
   * @example
   * 3000
   */
  securityContextRunAsGroup?: number;
  /**
   * @remarks
   * Specifies whether to run the container as a non-root user. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  securityContextRunAsNonRoot?: boolean;
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
   * Specifies whether standard input streams are disconnected from multiple sessions after a client is disconnected.\\
   * If StdinOnce is set to true, standard input streams are connected after the container is started, and remain idle until a client is connected to receive data. After the client is disconnected, standard input streams are also disconnected, and remain disconnected until the container restarts.
   * 
   * @example
   * false
   */
  stdinOnce?: boolean;
  /**
   * @remarks
   * The path of the file from which the system retrieves termination messages of the container when the container exits.
   * 
   * @example
   * /tmp/termination-log
   */
  terminationMessagePath?: string;
  /**
   * @remarks
   * The message notification policy. This parameter is empty by default. Only Message Service (MNS) queue message notifications can be sent.
   * 
   * @example
   * FallbackToLogsOnError
   */
  terminationMessagePolicy?: string;
  /**
   * @remarks
   * Specifies whether to enable interaction. Default value: false.
   * 
   * If the command is a /bin/bash command, set the value to true.
   * 
   * @example
   * false
   */
  tty?: boolean;
  /**
   * @remarks
   * The information about the volume that you want to mount on the container.
   */
  volumeMount?: CreateContainerGroupRequestContainerVolumeMount[];
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
      arg: 'Arg',
      command: 'Command',
      cpu: 'Cpu',
      environmentVar: 'EnvironmentVar',
      environmentVarHide: 'EnvironmentVarHide',
      gpu: 'Gpu',
      image: 'Image',
      imagePullPolicy: 'ImagePullPolicy',
      lifecyclePostStartHandlerExec: 'LifecyclePostStartHandlerExec',
      lifecyclePostStartHandlerHttpGetHost: 'LifecyclePostStartHandlerHttpGetHost',
      lifecyclePostStartHandlerHttpGetHttpHeader: 'LifecyclePostStartHandlerHttpGetHttpHeader',
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
      securityContextPrivileged: 'SecurityContextPrivileged',
      securityContextRunAsGroup: 'SecurityContextRunAsGroup',
      securityContextRunAsNonRoot: 'SecurityContextRunAsNonRoot',
      stdin: 'Stdin',
      stdinOnce: 'StdinOnce',
      terminationMessagePath: 'TerminationMessagePath',
      terminationMessagePolicy: 'TerminationMessagePolicy',
      tty: 'Tty',
      volumeMount: 'VolumeMount',
      workingDir: 'WorkingDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      livenessProbe: CreateContainerGroupRequestContainerLivenessProbe,
      readinessProbe: CreateContainerGroupRequestContainerReadinessProbe,
      securityContext: CreateContainerGroupRequestContainerSecurityContext,
      arg: { 'type': 'array', 'itemType': 'string' },
      command: { 'type': 'array', 'itemType': 'string' },
      cpu: 'number',
      environmentVar: { 'type': 'array', 'itemType': CreateContainerGroupRequestContainerEnvironmentVar },
      environmentVarHide: 'boolean',
      gpu: 'number',
      image: 'string',
      imagePullPolicy: 'string',
      lifecyclePostStartHandlerExec: { 'type': 'array', 'itemType': 'string' },
      lifecyclePostStartHandlerHttpGetHost: 'string',
      lifecyclePostStartHandlerHttpGetHttpHeader: { 'type': 'array', 'itemType': CreateContainerGroupRequestContainerLifecyclePostStartHandlerHttpGetHttpHeader },
      lifecyclePostStartHandlerHttpGetPath: 'string',
      lifecyclePostStartHandlerHttpGetPort: 'number',
      lifecyclePostStartHandlerHttpGetScheme: 'string',
      lifecyclePostStartHandlerTcpSocketHost: 'string',
      lifecyclePostStartHandlerTcpSocketPort: 'number',
      lifecyclePreStopHandlerExec: { 'type': 'array', 'itemType': 'string' },
      lifecyclePreStopHandlerHttpGetHost: 'string',
      lifecyclePreStopHandlerHttpGetHttpHeader: { 'type': 'array', 'itemType': CreateContainerGroupRequestContainerLifecyclePreStopHandlerHttpGetHttpHeader },
      lifecyclePreStopHandlerHttpGetPath: 'string',
      lifecyclePreStopHandlerHttpGetPort: 'number',
      lifecyclePreStopHandlerHttpGetScheme: 'string',
      lifecyclePreStopHandlerTcpSocketHost: 'string',
      lifecyclePreStopHandlerTcpSocketPort: 'number',
      memory: 'number',
      name: 'string',
      port: { 'type': 'array', 'itemType': CreateContainerGroupRequestContainerPort },
      securityContextPrivileged: 'boolean',
      securityContextRunAsGroup: 'number',
      securityContextRunAsNonRoot: 'boolean',
      stdin: 'boolean',
      stdinOnce: 'boolean',
      terminationMessagePath: 'string',
      terminationMessagePolicy: 'string',
      tty: 'boolean',
      volumeMount: { 'type': 'array', 'itemType': CreateContainerGroupRequestContainerVolumeMount },
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
    if(Array.isArray(this.lifecyclePostStartHandlerHttpGetHttpHeader)) {
      $dara.Model.validateArray(this.lifecyclePostStartHandlerHttpGetHttpHeader);
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

