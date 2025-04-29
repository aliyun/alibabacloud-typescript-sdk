// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsContainersEnvironmentVars } from "./DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsContainersEnvironmentVars";
import { DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsContainersPorts } from "./DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsContainersPorts";
import { DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsContainersVolumeMounts } from "./DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsContainersVolumeMounts";


export class DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsContainers extends $dara.Model {
  /**
   * @remarks
   * The container startup arguments. You can specify up to 10 arguments.
   */
  args?: string[];
  /**
   * @remarks
   * The container startup commands. You can specify up to 20 commands. Each command can contain up to 256 characters.
   */
  commands?: string[];
  /**
   * @remarks
   * The number of vCPUs per container.
   * 
   * @example
   * 2.0
   */
  cpu?: number;
  /**
   * @remarks
   * The environment variables.
   */
  environmentVars?: DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsContainersEnvironmentVars[];
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
   * The container image.
   * 
   * @example
   * mysql
   */
  image?: string;
  /**
   * @remarks
   * The image pulling policy. Valid values:
   * 
   * *   Always: Each time image pulling is performed.
   * *   IfNotPresent: Image pulling is performed as needed. On-premises images are preferentially used. If no on-premises images are available, image pulling is performed.
   * *   Never: On-premises images are always used. Image pulling is not performed.
   * 
   * @example
   * Always
   */
  imagePullPolicy?: string;
  /**
   * @remarks
   * The commands that are run for configuring the postStart callback function by using the CLI within the container.
   */
  lifecyclePostStartHandlerExecs?: string[];
  /**
   * @remarks
   * The IP address of the host to which HTTP GET requests for configuring the postStart callback function are sent.
   * 
   * @example
   * 10.0.XX.XX
   */
  lifecyclePostStartHandlerHttpGetHost?: string;
  /**
   * @remarks
   * The path to which HTTP GET requests for configuring the postStart callback function are sent.
   * 
   * @example
   * /healthyz
   */
  lifecyclePostStartHandlerHttpGetPath?: string;
  /**
   * @remarks
   * The port over which HTTP GET requests for configuring the postStart callback function are sent.
   * 
   * @example
   * 80
   */
  lifecyclePostStartHandlerHttpGetPort?: number;
  /**
   * @remarks
   * The protocol type of the HTTP GET requests that are sent for configuring the postStart callback function.
   * 
   * @example
   * HTTP
   */
  lifecyclePostStartHandlerHttpGetScheme?: string;
  /**
   * @remarks
   * The IP address of the host detected by the TCP sockets used for configuring the postStart callback function.
   * 
   * @example
   * 10.0.XX.XX
   */
  lifecyclePostStartHandlerTcpSocketHost?: string;
  /**
   * @remarks
   * The port detected by the TCP sockets used for configuring the postStart callback function.
   * 
   * @example
   * 80
   */
  lifecyclePostStartHandlerTcpSocketPort?: number;
  /**
   * @remarks
   * The commands that are run for configuring the preStop callback function by using the CLI within the container.
   */
  lifecyclePreStopHandlerExecs?: string[];
  /**
   * @remarks
   * The IP address of the host to which HTTP GET requests for configuring the preStop callback function are sent.
   * 
   * @example
   * 10.0.XX.XX
   */
  lifecyclePreStopHandlerHttpGetHost?: string;
  /**
   * @remarks
   * The path to which HTTP GET requests for configuring the preStop callback function are sent.
   * 
   * @example
   * /healthyz
   */
  lifecyclePreStopHandlerHttpGetPath?: string;
  /**
   * @remarks
   * The port over which HTTP GET requests for configuring the preStop callback function are sent.
   * 
   * @example
   * 80
   */
  lifecyclePreStopHandlerHttpGetPort?: number;
  /**
   * @remarks
   * The protocol type of the HTTP Get requests that are sent for configuring the preStop callback function.
   * 
   * @example
   * HTTP
   */
  lifecyclePreStopHandlerHttpGetScheme?: string;
  /**
   * @remarks
   * The IP address of the host detected by the TCP sockets used for configuring the preStop callback function.
   * 
   * @example
   * 10.0.XX.XX
   */
  lifecyclePreStopHandlerTcpSocketHost?: string;
  /**
   * @remarks
   * The port detected by the TCP sockets used for configuring the preStop callback function.
   * 
   * @example
   * 80
   */
  lifecyclePreStopHandlerTcpSocketPort?: number;
  /**
   * @remarks
   * The commands that are run in the container when you use the CLI to perform liveness probes.
   */
  livenessProbeExecCommands?: string[];
  /**
   * @remarks
   * The minimum number of consecutive failures before a successful liveness probe is considered failed.
   * 
   * Default value: 3.
   * 
   * @example
   * 3
   */
  livenessProbeFailureThreshold?: number;
  /**
   * @remarks
   * The path to which HTTP GET requests are sent when you use the HTTP GET requests to perform liveness probes.
   * 
   * @example
   * /usr/nginx/
   */
  livenessProbeHttpGetPath?: string;
  /**
   * @remarks
   * The port to which HTTP GET requests are sent to perform liveness probes.
   * 
   * @example
   * 80
   */
  livenessProbeHttpGetPort?: number;
  /**
   * @remarks
   * The protocol type of HTTP GET requests when you use the HTTP GET requests to perform liveness probes. Valid values:
   * 
   * *   HTTP
   * *   HTTPS
   * 
   * @example
   * HTTP
   */
  livenessProbeHttpGetScheme?: string;
  /**
   * @remarks
   * The number of seconds that elapses from the startup of the container to the start time of a liveness probe.
   * 
   * @example
   * 10
   */
  livenessProbeInitialDelaySeconds?: number;
  /**
   * @remarks
   * The interval at which liveness probes are performed. Unit: seconds. Default value: 10. Minimum value: 1.
   * 
   * @example
   * 5
   */
  livenessProbePeriodSeconds?: number;
  /**
   * @remarks
   * The minimum number of consecutive successes before a failed liveness probe is considered successful. Default value: 1. Valid value: 1.
   * 
   * @example
   * 1
   */
  livenessProbeSuccessThreshold?: number;
  /**
   * @remarks
   * The port detected by TCP sockets when you use the TCP sockets to perform liveness probes.
   * 
   * @example
   * 80
   */
  livenessProbeTcpSocketPort?: number;
  /**
   * @remarks
   * The timeout period of a liveness probe. Default value: 1. Minimum value: 1. Unit: seconds.
   * 
   * @example
   * 10
   */
  livenessProbeTimeoutSeconds?: number;
  /**
   * @remarks
   * The memory size per container.
   * 
   * @example
   * 2.0
   */
  memory?: number;
  /**
   * @remarks
   * The custom name of the container.
   * 
   * @example
   * nginx
   */
  name?: string;
  /**
   * @remarks
   * The exposed ports and protocols.
   */
  ports?: DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsContainersPorts[];
  /**
   * @remarks
   * The commands that are run in the container when you use the CLI to perform readiness probes.
   */
  readinessProbeExecCommands?: string[];
  /**
   * @remarks
   * The minimum number of consecutive failures before a successful readiness probe is considered failed.
   * 
   * Default value: 3.
   * 
   * @example
   * 3
   */
  readinessProbeFailureThreshold?: number;
  /**
   * @remarks
   * The path to which HTTP GET requests are sent when you use the HTTP GET requests to perform readiness probes.
   * 
   * @example
   * /usr/local
   */
  readinessProbeHttpGetPath?: string;
  /**
   * @remarks
   * The path to which HTTP GET requests are sent when you use the HTTP GET requests to perform readiness probes.
   * 
   * @example
   * /usr/nginx/
   */
  readinessProbeHttpGetPort?: number;
  /**
   * @remarks
   * The protocol type of HTTP GET requests when you use the HTTP requests to perform readiness probes. Valid values:
   * 
   * *   HTTP
   * *   HTTPS
   * 
   * @example
   * HTTP
   */
  readinessProbeHttpGetScheme?: string;
  /**
   * @remarks
   * The number of seconds that elapses from the startup of the container to the start time of a readiness probe.
   * 
   * @example
   * 5
   */
  readinessProbeInitialDelaySeconds?: number;
  /**
   * @remarks
   * The interval at which readiness probes are performed. Unit: seconds. Default value: 10. Minimum value: 1.
   * 
   * @example
   * 1
   */
  readinessProbePeriodSeconds?: number;
  /**
   * @remarks
   * The minimum number of consecutive successes before a failed readiness probe is considered successful. Default value: 1. Valid value: 1.
   * 
   * @example
   * 1
   */
  readinessProbeSuccessThreshold?: number;
  /**
   * @remarks
   * The port detected by TCP sockets when you use the TCP sockets to perform readiness probes.
   * 
   * @example
   * 8888
   */
  readinessProbeTcpSocketPort?: number;
  /**
   * @remarks
   * The timeout period of a readiness probe. Default value: 1. Minimum value: 1. Unit: seconds.
   * 
   * @example
   * 5
   */
  readinessProbeTimeoutSeconds?: number;
  /**
   * @remarks
   * The permissions that are granted to the processes in the container. Valid values: NET_ADMIN and NET_RAW.
   * 
   * >  To use NET_RAW, you must submit a ticket.
   */
  securityContextCapabilityAdds?: string[];
  /**
   * @remarks
   * Indicates whether the root file system on which the container runs is read-only. Valid value: true.
   * 
   * @example
   * true
   */
  securityContextReadOnlyRootFilesystem?: boolean;
  /**
   * @remarks
   * The ID of the user that runs the entry point of the container process.
   * 
   * @example
   * 1000
   */
  securityContextRunAsUser?: number;
  /**
   * @remarks
   * Indicates whether the container allocates buffer resources to standard input streams when the container is running. If this parameter is not specified, an end-of-file (EOF) error may occur when standard input streams in the container are read. Default value: false.
   * 
   * @example
   * true
   */
  stdin?: boolean;
  /**
   * @remarks
   * Indicates whether standard input streams are disconnected after a client is disconnected. If Stdin is set to true, standard input streams remain connected among multiple sessions.
   * 
   * If StdinOnce is set to true, standard input streams are connected after the container is started, and remain idle until a client is connected to receive data. After the client is disconnected, streams are also disconnected, and remain disconnected until the container restarts.
   * 
   * @example
   * true
   */
  stdinOnce?: boolean;
  /**
   * @remarks
   * Indicates whether the Interaction feature is enabled. Valid values:
   * 
   * *   true
   * *   false
   * 
   * If the command is a /bin/bash command, the value of this parameter is true.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  tty?: boolean;
  /**
   * @remarks
   * The mounted volumes.
   */
  volumeMounts?: DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsContainersVolumeMounts[];
  /**
   * @remarks
   * The working directory.
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
      livenessProbeExecCommands: 'LivenessProbeExecCommands',
      livenessProbeFailureThreshold: 'LivenessProbeFailureThreshold',
      livenessProbeHttpGetPath: 'LivenessProbeHttpGetPath',
      livenessProbeHttpGetPort: 'LivenessProbeHttpGetPort',
      livenessProbeHttpGetScheme: 'LivenessProbeHttpGetScheme',
      livenessProbeInitialDelaySeconds: 'LivenessProbeInitialDelaySeconds',
      livenessProbePeriodSeconds: 'LivenessProbePeriodSeconds',
      livenessProbeSuccessThreshold: 'LivenessProbeSuccessThreshold',
      livenessProbeTcpSocketPort: 'LivenessProbeTcpSocketPort',
      livenessProbeTimeoutSeconds: 'LivenessProbeTimeoutSeconds',
      memory: 'Memory',
      name: 'Name',
      ports: 'Ports',
      readinessProbeExecCommands: 'ReadinessProbeExecCommands',
      readinessProbeFailureThreshold: 'ReadinessProbeFailureThreshold',
      readinessProbeHttpGetPath: 'ReadinessProbeHttpGetPath',
      readinessProbeHttpGetPort: 'ReadinessProbeHttpGetPort',
      readinessProbeHttpGetScheme: 'ReadinessProbeHttpGetScheme',
      readinessProbeInitialDelaySeconds: 'ReadinessProbeInitialDelaySeconds',
      readinessProbePeriodSeconds: 'ReadinessProbePeriodSeconds',
      readinessProbeSuccessThreshold: 'ReadinessProbeSuccessThreshold',
      readinessProbeTcpSocketPort: 'ReadinessProbeTcpSocketPort',
      readinessProbeTimeoutSeconds: 'ReadinessProbeTimeoutSeconds',
      securityContextCapabilityAdds: 'SecurityContextCapabilityAdds',
      securityContextReadOnlyRootFilesystem: 'SecurityContextReadOnlyRootFilesystem',
      securityContextRunAsUser: 'SecurityContextRunAsUser',
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
      environmentVars: { 'type': 'array', 'itemType': DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsContainersEnvironmentVars },
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
      livenessProbeExecCommands: { 'type': 'array', 'itemType': 'string' },
      livenessProbeFailureThreshold: 'number',
      livenessProbeHttpGetPath: 'string',
      livenessProbeHttpGetPort: 'number',
      livenessProbeHttpGetScheme: 'string',
      livenessProbeInitialDelaySeconds: 'number',
      livenessProbePeriodSeconds: 'number',
      livenessProbeSuccessThreshold: 'number',
      livenessProbeTcpSocketPort: 'number',
      livenessProbeTimeoutSeconds: 'number',
      memory: 'number',
      name: 'string',
      ports: { 'type': 'array', 'itemType': DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsContainersPorts },
      readinessProbeExecCommands: { 'type': 'array', 'itemType': 'string' },
      readinessProbeFailureThreshold: 'number',
      readinessProbeHttpGetPath: 'string',
      readinessProbeHttpGetPort: 'number',
      readinessProbeHttpGetScheme: 'string',
      readinessProbeInitialDelaySeconds: 'number',
      readinessProbePeriodSeconds: 'number',
      readinessProbeSuccessThreshold: 'number',
      readinessProbeTcpSocketPort: 'number',
      readinessProbeTimeoutSeconds: 'number',
      securityContextCapabilityAdds: { 'type': 'array', 'itemType': 'string' },
      securityContextReadOnlyRootFilesystem: 'boolean',
      securityContextRunAsUser: 'number',
      stdin: 'boolean',
      stdinOnce: 'boolean',
      tty: 'boolean',
      volumeMounts: { 'type': 'array', 'itemType': DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsContainersVolumeMounts },
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
    if(Array.isArray(this.environmentVars)) {
      $dara.Model.validateArray(this.environmentVars);
    }
    if(Array.isArray(this.lifecyclePostStartHandlerExecs)) {
      $dara.Model.validateArray(this.lifecyclePostStartHandlerExecs);
    }
    if(Array.isArray(this.lifecyclePreStopHandlerExecs)) {
      $dara.Model.validateArray(this.lifecyclePreStopHandlerExecs);
    }
    if(Array.isArray(this.livenessProbeExecCommands)) {
      $dara.Model.validateArray(this.livenessProbeExecCommands);
    }
    if(Array.isArray(this.ports)) {
      $dara.Model.validateArray(this.ports);
    }
    if(Array.isArray(this.readinessProbeExecCommands)) {
      $dara.Model.validateArray(this.readinessProbeExecCommands);
    }
    if(Array.isArray(this.securityContextCapabilityAdds)) {
      $dara.Model.validateArray(this.securityContextCapabilityAdds);
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

