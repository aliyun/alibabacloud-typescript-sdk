// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEciScalingConfigurationRequestAcrRegistryInfos extends $dara.Model {
  /**
   * @remarks
   * The domain names of the Container Registry Enterprise instance. By default, all domain names of the instance are used. You can specify one or more domain names. Separate multiple domain names with commas (,).
   */
  domains?: string[];
  /**
   * @remarks
   * The instance ID of the Container Registry Enterprise instance.
   * 
   * @example
   * cri-nwj395hgf6f3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the Container Registry Enterprise instance.
   * 
   * @example
   * acr-test
   */
  instanceName?: string;
  /**
   * @remarks
   * The region where the Container Registry Enterprise instance resides.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      domains: 'Domains',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      instanceName: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.domains)) {
      $dara.Model.validateArray(this.domains);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEciScalingConfigurationRequestContainersLivenessProbeExec extends $dara.Model {
  /**
   * @remarks
   * The command executed in the container when the exec probe is used for health checks.
   */
  commands?: string[];
  static names(): { [key: string]: string } {
    return {
      commands: 'Commands',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commands: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.commands)) {
      $dara.Model.validateArray(this.commands);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEciScalingConfigurationRequestContainersLivenessProbeHttpGet extends $dara.Model {
  /**
   * @remarks
   * The path accessed by the HTTP GET request when the HTTP probe is used for health checks.
   * 
   * @example
   * /healthyz
   */
  path?: string;
  /**
   * @remarks
   * The port number on which the HTTP GET probe performs health checks.
   * 
   * @example
   * 8888
   */
  port?: number;
  /**
   * @remarks
   * The protocol type used for the HTTP GET request when the HTTP probe is used for health checks. Valid values:
   * 
   * - HTTP
   * - HTTPS
   * 
   * @example
   * HTTP
   */
  scheme?: string;
  static names(): { [key: string]: string } {
    return {
      path: 'Path',
      port: 'Port',
      scheme: 'Scheme',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
      port: 'number',
      scheme: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEciScalingConfigurationRequestContainersLivenessProbeTcpSocket extends $dara.Model {
  /**
   * @remarks
   * The port number on which the TCP socket probe performs health checks.
   * 
   * @example
   * 8000
   */
  port?: number;
  static names(): { [key: string]: string } {
    return {
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEciScalingConfigurationRequestContainersLivenessProbe extends $dara.Model {
  exec?: CreateEciScalingConfigurationRequestContainersLivenessProbeExec;
  /**
   * @remarks
   * The minimum consecutive failures for the probe to be considered failed after having succeeded.
   * 
   * Default value: 3.
   * 
   * @example
   * 3
   */
  failureThreshold?: number;
  httpGet?: CreateEciScalingConfigurationRequestContainersLivenessProbeHttpGet;
  /**
   * @remarks
   * The number of seconds after the container has started before the probe is initiated.
   * 
   * @example
   * 5
   */
  initialDelaySeconds?: number;
  /**
   * @remarks
   * The interval at which the probe is performed in seconds. Default value: 10. Minimum value: 1.
   * 
   * @example
   * 5
   */
  periodSeconds?: number;
  /**
   * @remarks
   * The minimum consecutive successes for the probe to be considered successful after having failed. Default value: 1. The current value must be 1.
   * 
   * @example
   * 1
   */
  successThreshold?: number;
  tcpSocket?: CreateEciScalingConfigurationRequestContainersLivenessProbeTcpSocket;
  /**
   * @remarks
   * The timeout period for the probe in seconds. Default value: 1. Minimum value: 1.
   * 
   * @example
   * 1
   */
  timeoutSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      exec: 'Exec',
      failureThreshold: 'FailureThreshold',
      httpGet: 'HttpGet',
      initialDelaySeconds: 'InitialDelaySeconds',
      periodSeconds: 'PeriodSeconds',
      successThreshold: 'SuccessThreshold',
      tcpSocket: 'TcpSocket',
      timeoutSeconds: 'TimeoutSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exec: CreateEciScalingConfigurationRequestContainersLivenessProbeExec,
      failureThreshold: 'number',
      httpGet: CreateEciScalingConfigurationRequestContainersLivenessProbeHttpGet,
      initialDelaySeconds: 'number',
      periodSeconds: 'number',
      successThreshold: 'number',
      tcpSocket: CreateEciScalingConfigurationRequestContainersLivenessProbeTcpSocket,
      timeoutSeconds: 'number',
    };
  }

  validate() {
    if(this.exec && typeof (this.exec as any).validate === 'function') {
      (this.exec as any).validate();
    }
    if(this.httpGet && typeof (this.httpGet as any).validate === 'function') {
      (this.httpGet as any).validate();
    }
    if(this.tcpSocket && typeof (this.tcpSocket as any).validate === 'function') {
      (this.tcpSocket as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEciScalingConfigurationRequestContainersReadinessProbeExec extends $dara.Model {
  /**
   * @remarks
   * The command executed in the container when the exec probe is used for health checks.
   */
  commands?: string[];
  static names(): { [key: string]: string } {
    return {
      commands: 'Commands',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commands: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.commands)) {
      $dara.Model.validateArray(this.commands);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEciScalingConfigurationRequestContainersReadinessProbeHttpGet extends $dara.Model {
  /**
   * @remarks
   * The path accessed by the HTTP GET request when the HTTP probe is used for health checks.
   * 
   * @example
   * /healthz
   */
  path?: string;
  /**
   * @remarks
   * The port number on which the HTTP GET probe performs health checks.
   * 
   * @example
   * 8080
   */
  port?: number;
  /**
   * @remarks
   * The protocol type used for the HTTP GET request when the HTTP probe is used for health checks. Valid values:
   * 
   * - HTTP
   * - HTTPS
   * 
   * @example
   * HTTP
   */
  scheme?: string;
  static names(): { [key: string]: string } {
    return {
      path: 'Path',
      port: 'Port',
      scheme: 'Scheme',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
      port: 'number',
      scheme: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEciScalingConfigurationRequestContainersReadinessProbeTcpSocket extends $dara.Model {
  /**
   * @remarks
   * The port number on which the TCP socket probe performs health checks.
   * 
   * @example
   * 8000
   */
  port?: number;
  static names(): { [key: string]: string } {
    return {
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEciScalingConfigurationRequestContainersReadinessProbe extends $dara.Model {
  exec?: CreateEciScalingConfigurationRequestContainersReadinessProbeExec;
  /**
   * @remarks
   * The minimum consecutive failures for the probe to be considered failed after having succeeded. Default value: 3.
   * 
   * @example
   * 3
   */
  failureThreshold?: number;
  httpGet?: CreateEciScalingConfigurationRequestContainersReadinessProbeHttpGet;
  /**
   * @remarks
   * The number of seconds after the container has started before the probe is initiated.
   * 
   * @example
   * 3
   */
  initialDelaySeconds?: number;
  /**
   * @remarks
   * The interval at which the probe is performed in seconds. Default value: 10. Minimum value: 1.
   * 
   * @example
   * 3
   */
  periodSeconds?: number;
  /**
   * @remarks
   * The minimum consecutive successes for the probe to be considered successful after having failed. Default value: 1. The current value must be 1.
   * 
   * @example
   * 1
   */
  successThreshold?: number;
  tcpSocket?: CreateEciScalingConfigurationRequestContainersReadinessProbeTcpSocket;
  /**
   * @remarks
   * The timeout period for the probe in seconds. Default value: 1. Minimum value: 1.
   * 
   * @example
   * 5
   */
  timeoutSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      exec: 'Exec',
      failureThreshold: 'FailureThreshold',
      httpGet: 'HttpGet',
      initialDelaySeconds: 'InitialDelaySeconds',
      periodSeconds: 'PeriodSeconds',
      successThreshold: 'SuccessThreshold',
      tcpSocket: 'TcpSocket',
      timeoutSeconds: 'TimeoutSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exec: CreateEciScalingConfigurationRequestContainersReadinessProbeExec,
      failureThreshold: 'number',
      httpGet: CreateEciScalingConfigurationRequestContainersReadinessProbeHttpGet,
      initialDelaySeconds: 'number',
      periodSeconds: 'number',
      successThreshold: 'number',
      tcpSocket: CreateEciScalingConfigurationRequestContainersReadinessProbeTcpSocket,
      timeoutSeconds: 'number',
    };
  }

  validate() {
    if(this.exec && typeof (this.exec as any).validate === 'function') {
      (this.exec as any).validate();
    }
    if(this.httpGet && typeof (this.httpGet as any).validate === 'function') {
      (this.httpGet as any).validate();
    }
    if(this.tcpSocket && typeof (this.tcpSocket as any).validate === 'function') {
      (this.tcpSocket as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEciScalingConfigurationRequestContainersSecurityContextCapability extends $dara.Model {
  /**
   * @remarks
   * Grants specific privileges to processes in the container. Currently, only NET_ADMIN and NET_RAW are supported.
   * 
   * > NET_RAW is not supported by default. To use NET_RAW, submit a ticket.
   */
  add?: string[];
  static names(): { [key: string]: string } {
    return {
      add: 'Add',
    };
  }

  static types(): { [key: string]: any } {
    return {
      add: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.add)) {
      $dara.Model.validateArray(this.add);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEciScalingConfigurationRequestContainersSecurityContext extends $dara.Model {
  capability?: CreateEciScalingConfigurationRequestContainersSecurityContextCapability;
  /**
   * @remarks
   * Specifies whether the root file system of the container is read-only. Currently, only true is supported.
   * 
   * @example
   * true
   */
  readOnlyRootFilesystem?: boolean;
  /**
   * @remarks
   * The user ID used to run the container.
   * 
   * @example
   * 1000
   */
  runAsUser?: number;
  static names(): { [key: string]: string } {
    return {
      capability: 'Capability',
      readOnlyRootFilesystem: 'ReadOnlyRootFilesystem',
      runAsUser: 'RunAsUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capability: CreateEciScalingConfigurationRequestContainersSecurityContextCapability,
      readOnlyRootFilesystem: 'boolean',
      runAsUser: 'number',
    };
  }

  validate() {
    if(this.capability && typeof (this.capability as any).validate === 'function') {
      (this.capability as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEciScalingConfigurationRequestContainersEnvironmentVars extends $dara.Model {
  /**
   * @remarks
   * >This parameter is unavailable.
   * 
   * @example
   * fieldPath
   */
  fieldRefFieldPath?: string;
  /**
   * @remarks
   * The name of the environment variable. The name must be 1 to 128 characters in length and can contain letters, digits, and underscores (_). It cannot start with a digit.
   * 
   * @example
   * PATH
   */
  key?: string;
  /**
   * @remarks
   * The value of the environment variable. The value must be 0 to 256 characters in length.
   * 
   * @example
   * /usr/local/bin
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      fieldRefFieldPath: 'FieldRefFieldPath',
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldRefFieldPath: 'string',
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEciScalingConfigurationRequestContainersPorts extends $dara.Model {
  /**
   * @remarks
   * The port number. Valid values: 1 to 65535.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * The protocol type. Valid values:
   * 
   * - TCP
   * - UDP
   * 
   * @example
   * TCP
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      port: 'Port',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'number',
      protocol: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEciScalingConfigurationRequestContainersVolumeMounts extends $dara.Model {
  /**
   * @remarks
   * The directory where the volume is mounted in the container.
   * 
   * >Notice: The contents of the container mount directory are directly overwritten by the contents of the volume. Proceed with caution.
   * 
   * @example
   * /pod/data
   */
  mountPath?: string;
  /**
   * @remarks
   * The mount propagation settings for the volume. Mount propagation allows volumes mounted by a container to be shared with other containers in the same pod, or even with other pods on the same node. Valid values:
   * 
   * - None: The volume is not aware of any subsequent mount operations performed on the volume or its subdirectories.
   * - HostToCotainer: The volume is aware of subsequent mount operations performed on the volume or its subdirectories.
   * - Bidirectional: Similar to HostToCotainer, the volume is aware of mount operations. In addition, the volume is propagated back to the host and to all containers of all pods that use the same volume.
   * 
   * Default value: None.
   * 
   * @example
   * None
   */
  mountPropagation?: string;
  /**
   * @remarks
   * The name of the volume. The value must be the same as the Name value in Volumes.
   * 
   * @example
   * default-volume1
   */
  name?: string;
  /**
   * @remarks
   * Specifies whether the volume is read-only. Valid values:
   * 
   * - true: Yes.
   * 
   * - false: No.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  readOnly?: boolean;
  /**
   * @remarks
   * The subpath of the volume.
   * 
   * @example
   * data2/
   */
  subPath?: string;
  static names(): { [key: string]: string } {
    return {
      mountPath: 'MountPath',
      mountPropagation: 'MountPropagation',
      name: 'Name',
      readOnly: 'ReadOnly',
      subPath: 'SubPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountPath: 'string',
      mountPropagation: 'string',
      name: 'string',
      readOnly: 'boolean',
      subPath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEciScalingConfigurationRequestContainers extends $dara.Model {
  livenessProbe?: CreateEciScalingConfigurationRequestContainersLivenessProbe;
  readinessProbe?: CreateEciScalingConfigurationRequestContainersReadinessProbe;
  securityContext?: CreateEciScalingConfigurationRequestContainersSecurityContext;
  /**
   * @remarks
   * The arguments for the container startup command. A maximum of 10 arguments are supported.
   */
  args?: string[];
  /**
   * @remarks
   * The startup commands for the container. A maximum of 20 commands are supported. Each command can contain up to 256 characters.
   */
  commands?: string[];
  /**
   * @remarks
   * The number of CPU cores allocated to the container.
   * 
   * @example
   * 0.25
   */
  cpu?: number;
  /**
   * @remarks
   * The environment variable information.
   */
  environmentVars?: CreateEciScalingConfigurationRequestContainersEnvironmentVars[];
  /**
   * @remarks
   * The number of GPUs allocated to the container.
   * 
   * @example
   * 1
   */
  gpu?: number;
  /**
   * @remarks
   * The container image. You can pull images from an image repository such as Docker Hub and Alibaba Cloud Container Registry (ACR). When you pull an image over the Internet, if no NAT gateway is created in the VPC, you must associate the ECI instance with an EIP.
   * 
   * @example
   * registry-vpc.cn-hangzhou.aliyuncs.com/eci_open/nginx:latest
   */
  image?: string;
  /**
   * @remarks
   * The image pull policy for the container. Valid values:
   * 
   * - Always: Always pulls the image.
   * - IfNotPresent: Pulls the image only if it is not present locally.
   * - Never: Never pulls the image. Only local images are used.
   * 
   * > If image caching is enabled, ImagePullPolicy is overridden to Always when the container is created.
   * 
   * @example
   * Always
   */
  imagePullPolicy?: string;
  /**
   * @remarks
   * The command executed in the container when the command line method is used to configure the postStart callback function.
   */
  lifecyclePostStartHandlerExecs?: string[];
  /**
   * @remarks
   * The host address that receives the HTTP GET request when the HTTP request method is used to configure the postStart callback function.
   * 
   * @example
   * 10.0.XX.XX
   */
  lifecyclePostStartHandlerHttpGetHost?: string;
  /**
   * @remarks
   * The path accessed by the HTTP GET request when the HTTP request method is used to configure the postStart callback function.
   * 
   * @example
   * /healthyz
   */
  lifecyclePostStartHandlerHttpGetPath?: string;
  /**
   * @remarks
   * The port number checked by the HTTP GET request when the HTTP request method is used to configure the postStart callback function.
   * 
   * @example
   * 5050
   */
  lifecyclePostStartHandlerHttpGetPort?: number;
  /**
   * @remarks
   * The protocol type used for the HTTP GET request when the HTTP request method is used to configure the postStart callback function. Valid values:
   * 
   * - HTTP
   * - HTTPS
   * 
   * @example
   * HTTPS
   */
  lifecyclePostStartHandlerHttpGetScheme?: string;
  /**
   * @remarks
   * The host address checked by the TCP socket when the TCP socket method is used to configure the postStart callback function.
   * 
   * @example
   * 10.0.XX.XX
   */
  lifecyclePostStartHandlerTcpSocketHost?: string;
  /**
   * @remarks
   * The port checked by the TCP socket when the TCP socket method is used to configure the postStart callback function.
   * 
   * @example
   * 80
   */
  lifecyclePostStartHandlerTcpSocketPort?: number;
  /**
   * @remarks
   * The command executed in the container when the command line method is used to configure the preStop callback function.
   */
  lifecyclePreStopHandlerExecs?: string[];
  /**
   * @remarks
   * The host address that receives the HTTP GET request when the HTTP request method is used to configure the preStop callback function.
   * 
   * @example
   * 10.0.XX.XX
   */
  lifecyclePreStopHandlerHttpGetHost?: string;
  /**
   * @remarks
   * The path accessed by the HTTP GET request when the HTTP request method is used to configure the preStop callback function.
   * 
   * @example
   * /healthyz
   */
  lifecyclePreStopHandlerHttpGetPath?: string;
  /**
   * @remarks
   * The port number checked by the HTTP GET request when the HTTP request method is used to configure the preStop callback function.
   * 
   * @example
   * 88
   */
  lifecyclePreStopHandlerHttpGetPort?: number;
  /**
   * @remarks
   * The protocol type used for the HTTP GET request when the HTTP request method is used to configure the preStop callback function. Valid values:
   * 
   * - HTTP
   * - HTTPS
   * 
   * @example
   * HTTP
   */
  lifecyclePreStopHandlerHttpGetScheme?: string;
  /**
   * @remarks
   * The host address checked by the TCP socket when the TCP socket method is used to configure the preStop callback function.
   * 
   * @example
   * 10.0.XX.XX
   */
  lifecyclePreStopHandlerTcpSocketHost?: string;
  /**
   * @remarks
   * The port checked by the TCP socket when the TCP socket method is used to configure the preStop callback function.
   * 
   * @example
   * 90
   */
  lifecyclePreStopHandlerTcpSocketPort?: number;
  /**
   * @remarks
   * The memory size of the container. Unit: GiB.
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
   * The list of ports.
   */
  ports?: CreateEciScalingConfigurationRequestContainersPorts[];
  /**
   * @remarks
   * Specifies whether to allocate a buffer for standard input (stdin) during container runtime. If this parameter is not set, reads from stdin in the container result in an EOF.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  stdin?: boolean;
  /**
   * @remarks
   * Specifies whether the standard input stream maintains the enabling status across multiple attached sessions when stdin is set to true.
   * 
   * If StdinOnce is set to true, standard input is opened when the container starts and remains empty until the first client attaches to it. It then stays open to accept data until the client disconnects, at which point standard input is shutdown and remains shutdown until the container is restarted.
   * 
   * @example
   * false
   */
  stdinOnce?: boolean;
  /**
   * @remarks
   * Specifies whether to enable interactive mode. Valid values:
   * - true: Enabled.
   * - false: Disabled.
   * 
   * For example, if Command is set to /bin/bash, set this parameter to true.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  tty?: boolean;
  /**
   * @remarks
   * The volume mount information of the container.
   */
  volumeMounts?: CreateEciScalingConfigurationRequestContainersVolumeMounts[];
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
      livenessProbe: CreateEciScalingConfigurationRequestContainersLivenessProbe,
      readinessProbe: CreateEciScalingConfigurationRequestContainersReadinessProbe,
      securityContext: CreateEciScalingConfigurationRequestContainersSecurityContext,
      args: { 'type': 'array', 'itemType': 'string' },
      commands: { 'type': 'array', 'itemType': 'string' },
      cpu: 'number',
      environmentVars: { 'type': 'array', 'itemType': CreateEciScalingConfigurationRequestContainersEnvironmentVars },
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
      ports: { 'type': 'array', 'itemType': CreateEciScalingConfigurationRequestContainersPorts },
      stdin: 'boolean',
      stdinOnce: 'boolean',
      tty: 'boolean',
      volumeMounts: { 'type': 'array', 'itemType': CreateEciScalingConfigurationRequestContainersVolumeMounts },
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

export class CreateEciScalingConfigurationRequestDnsConfigOptions extends $dara.Model {
  /**
   * @remarks
   * The name of the object variable.
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * The value of the object variable.
   * 
   * @example
   * value
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEciScalingConfigurationRequestHostAliases extends $dara.Model {
  /**
   * @remarks
   * The hostname to be added.
   */
  hostnames?: string[];
  /**
   * @remarks
   * The IP address to be added.
   * 
   * @example
   * 1.1.1.1
   */
  ip?: string;
  static names(): { [key: string]: string } {
    return {
      hostnames: 'Hostnames',
      ip: 'Ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostnames: { 'type': 'array', 'itemType': 'string' },
      ip: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.hostnames)) {
      $dara.Model.validateArray(this.hostnames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEciScalingConfigurationRequestImageRegistryCredentials extends $dara.Model {
  /**
   * @remarks
   * The password of the image registry.
   * 
   * @example
   * yourpassword
   */
  password?: string;
  /**
   * @remarks
   * The address of the image registry.
   * 
   * @example
   * registry-vpc.cn-shanghai.aliyuncs.com
   */
  server?: string;
  /**
   * @remarks
   * The username of the image registry.
   * 
   * @example
   * yourusername
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      password: 'Password',
      server: 'Server',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      password: 'string',
      server: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEciScalingConfigurationRequestInitContainersSecurityContextCapability extends $dara.Model {
  /**
   * @remarks
   * Grants specific permissions to processes in the container. Only NET_ADMIN and NET_RAW are supported.
   * > NET_RAW is not supported by default. Submit a ticket to apply for this permission.
   */
  adds?: string[];
  static names(): { [key: string]: string } {
    return {
      adds: 'Adds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.adds)) {
      $dara.Model.validateArray(this.adds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEciScalingConfigurationRequestInitContainersSecurityContext extends $dara.Model {
  capability?: CreateEciScalingConfigurationRequestInitContainersSecurityContextCapability;
  /**
   * @remarks
   * Specifies whether the root file system where the container runs is read-only. Only true is supported.
   * 
   * @example
   * true
   */
  readOnlyRootFilesystem?: boolean;
  /**
   * @remarks
   * The user ID used to run the container.
   * 
   * @example
   * 587
   */
  runAsUser?: number;
  static names(): { [key: string]: string } {
    return {
      capability: 'Capability',
      readOnlyRootFilesystem: 'ReadOnlyRootFilesystem',
      runAsUser: 'RunAsUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capability: CreateEciScalingConfigurationRequestInitContainersSecurityContextCapability,
      readOnlyRootFilesystem: 'boolean',
      runAsUser: 'number',
    };
  }

  validate() {
    if(this.capability && typeof (this.capability as any).validate === 'function') {
      (this.capability as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEciScalingConfigurationRequestInitContainersInitContainerEnvironmentVars extends $dara.Model {
  /**
   * @remarks
   * >This parameter is unavailable.
   * 
   * @example
   * path
   */
  fieldRefFieldPath?: string;
  /**
   * @remarks
   * The name of the environment variable. The name must be 1 to 128 characters in length and can contain letters, digits, and underscores (_). It cannot start with a digit.
   * 
   * @example
   * Path
   */
  key?: string;
  /**
   * @remarks
   * The value of the environment variable. The value must be 0 to 256 characters in length.
   * 
   * @example
   * /usr/bin/
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      fieldRefFieldPath: 'FieldRefFieldPath',
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldRefFieldPath: 'string',
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEciScalingConfigurationRequestInitContainersInitContainerPorts extends $dara.Model {
  /**
   * @remarks
   * The port number. Valid values: 1 to 65535.
   * 
   * @example
   * 1
   */
  port?: number;
  /**
   * @remarks
   * The protocol type. Valid values:
   * 
   * - TCP
   * - UDP
   * 
   * @example
   * TCP
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      port: 'Port',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'number',
      protocol: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEciScalingConfigurationRequestInitContainersInitContainerVolumeMounts extends $dara.Model {
  /**
   * @remarks
   * The mount directory. The content in the mount directory of the container is directly overwritten by the content of the volume. Use this parameter with caution.
   * 
   * @example
   * /usr/share/
   */
  mountPath?: string;
  /**
   * @remarks
   * The mount propagation settings of the volume. Mount propagation allows a volume mounted by a container to be shared with other containers in the same pod, or even with other pods on the same node. Valid values:
   * - None: The volume is not aware of any subsequent mount operations performed on this volume or its subdirectories.
   * - HostToCotainer: The volume is aware of subsequent mount operations performed on this volume or its subdirectories.
   * - Bidirectional: Similar to HostToCotainer, the volume is aware of mount operations. In addition, the volume is propagated back to the host and to all containers of all pods that use the same volume.
   * 
   * @example
   * None
   */
  mountPropagation?: string;
  /**
   * @remarks
   * The name of the mounted volume.
   * 
   * @example
   * test-empty
   */
  name?: string;
  /**
   * @remarks
   * Specifies whether the mount path is read-only.
   * Default value: false.
   * 
   * @example
   * false
   */
  readOnly?: boolean;
  /**
   * @remarks
   * The subdirectory under the volume. This allows a pod to mount different directories under the same volume to different directories in the container.
   * 
   * @example
   * /usr/sub/
   */
  subPath?: string;
  static names(): { [key: string]: string } {
    return {
      mountPath: 'MountPath',
      mountPropagation: 'MountPropagation',
      name: 'Name',
      readOnly: 'ReadOnly',
      subPath: 'SubPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountPath: 'string',
      mountPropagation: 'string',
      name: 'string',
      readOnly: 'boolean',
      subPath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEciScalingConfigurationRequestInitContainers extends $dara.Model {
  securityContext?: CreateEciScalingConfigurationRequestInitContainersSecurityContext;
  /**
   * @remarks
   * The arguments for the container startup command. A maximum of 10 arguments are supported.
   */
  args?: string[];
  /**
   * @remarks
   * The startup commands of the container.
   */
  commands?: string[];
  /**
   * @remarks
   * The number of vCPUs for the container. Unit: cores.
   * 
   * @example
   * 0.5
   */
  cpu?: number;
  /**
   * @remarks
   * The number of GPUs allocated to the container.
   * 
   * @example
   * 1
   */
  gpu?: number;
  /**
   * @remarks
   * The image used by the container.
   * 
   * @example
   * nginx
   */
  image?: string;
  /**
   * @remarks
   * The image pull policy.
   * 
   * @example
   * Always
   */
  imagePullPolicy?: string;
  /**
   * @remarks
   * The environment variable information of the init container.
   */
  initContainerEnvironmentVars?: CreateEciScalingConfigurationRequestInitContainersInitContainerEnvironmentVars[];
  /**
   * @remarks
   * The list of port mappings for the init container.
   */
  initContainerPorts?: CreateEciScalingConfigurationRequestInitContainersInitContainerPorts[];
  /**
   * @remarks
   * The array of mount point information for the init container.
   */
  initContainerVolumeMounts?: CreateEciScalingConfigurationRequestInitContainersInitContainerVolumeMounts[];
  /**
   * @remarks
   * The memory size. Unit: GiB.
   * 
   * @example
   * 1.0
   */
  memory?: number;
  /**
   * @remarks
   * The name of the container.
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

export class CreateEciScalingConfigurationRequestSecurityContextSysctls extends $dara.Model {
  /**
   * @remarks
   * The system name of the security context for the instance.
   * 
   * @example
   * kernel.msgmax
   */
  name?: string;
  /**
   * @remarks
   * The contextual variable value of the security context for the instance.
   * 
   * @example
   * 65536
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEciScalingConfigurationRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key of the instance.
   * 
   * If you specify this parameter, it cannot be an empty string. It can be up to 128 characters in length, and cannot start with `aliyun` or `acs:`, or contain `http://` or `https://`.
   * 
   * @example
   * version
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the instance.
   * 
   * If you specify this parameter, it can be an empty string. It can be up to 128 characters in length, and cannot start with `acs:`, or contain `http://` or `https://`.
   * 
   * @example
   * 3
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEciScalingConfigurationRequestVolumesDiskVolume extends $dara.Model {
  /**
   * @remarks
   * The ID of the DiskVolume.
   * 
   * @example
   * d-xx
   */
  diskId?: string;
  /**
   * @remarks
   * The size of the DiskVolume. Unit: GiB.
   * 
   * @example
   * 15
   */
  diskSize?: number;
  /**
   * @remarks
   * This file system type is not recommended. Use the FlexVolume.FsType parameter instead.
   * 
   * @example
   * xfs
   */
  fsType?: string;
  static names(): { [key: string]: string } {
    return {
      diskId: 'DiskId',
      diskSize: 'DiskSize',
      fsType: 'FsType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskId: 'string',
      diskSize: 'number',
      fsType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEciScalingConfigurationRequestVolumesEmptyDirVolume extends $dara.Model {
  /**
   * @remarks
   * The storage medium of the EmptyDirVolume. The default value is empty, which indicates that the node file system is used. The value memory is supported, which indicates that memory is used.
   * 
   * @example
   * memory
   */
  medium?: string;
  /**
   * @remarks
   * The size of the EmptyDir volume. Specify a unit for the value. Use Gi or Mi.
   * 
   * @example
   * 256Mi
   */
  sizeLimit?: string;
  static names(): { [key: string]: string } {
    return {
      medium: 'Medium',
      sizeLimit: 'SizeLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      medium: 'string',
      sizeLimit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEciScalingConfigurationRequestVolumesFlexVolume extends $dara.Model {
  /**
   * @remarks
   * The name of the driver used for the FlexVolume.
   * 
   * @example
   * flexvolume
   */
  driver?: string;
  /**
   * @remarks
   * The type of the file system to be mounted. The default value depends on the script of the FlexVolume.
   * 
   * @example
   * ext4
   */
  fsType?: string;
  /**
   * @remarks
   * The list of FlexVolume object options. The options are in key-value pairs and passed in JSON format.
   * For example, when you mount a cloud disk by using FlexVolume, the format of Options is `{"volumeId":"d-2zehdahrwoa7srg****","performanceLevel": "PL2"}`.
   * 
   * @example
   * {"volumeId":"d-2zehdahrwoa7srg****","performanceLevel": "PL2"}
   */
  options?: string;
  static names(): { [key: string]: string } {
    return {
      driver: 'Driver',
      fsType: 'FsType',
      options: 'Options',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driver: 'string',
      fsType: 'string',
      options: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEciScalingConfigurationRequestVolumesHostPathVolume extends $dara.Model {
  /**
   * @remarks
   * The absolute path on the host.
   * 
   * @example
   * /xx/xx/path
   */
  path?: string;
  /**
   * @remarks
   * The type of the host directory. Examples: File, Directory, and Socket.
   * 
   * @example
   * Directory
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      path: 'Path',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEciScalingConfigurationRequestVolumesNFSVolume extends $dara.Model {
  /**
   * @remarks
   * The path of the NFS volume.
   * 
   * @example
   * /share
   */
  path?: string;
  /**
   * @remarks
   * Specifies whether the NFS volume is read-only. Valid values:
   * - true: Yes.
   * - false: No.
   * Default value: false.
   * 
   * @example
   * false
   */
  readOnly?: boolean;
  /**
   * @remarks
   * The address of the NFS server.
   * 
   * @example
   * 3f9cd4a596-naw76.cn-shanghai.nas.aliyuncs.com
   */
  server?: string;
  static names(): { [key: string]: string } {
    return {
      path: 'Path',
      readOnly: 'ReadOnly',
      server: 'Server',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
      readOnly: 'boolean',
      server: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEciScalingConfigurationRequestVolumesConfigFileVolumeConfigFileToPaths extends $dara.Model {
  /**
   * @remarks
   * The content of the configuration file (32 KB).
   * 
   * @example
   * bGl1bWk=
   */
  content?: string;
  /**
   * @remarks
   * The directory permissions of the ConfigFileVolume.
   * 
   * @example
   * 0644
   */
  mode?: number;
  /**
   * @remarks
   * The name of the environment variable.
   * 
   * @example
   * PATH
   */
  path?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      mode: 'Mode',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      mode: 'number',
      path: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEciScalingConfigurationRequestVolumes extends $dara.Model {
  diskVolume?: CreateEciScalingConfigurationRequestVolumesDiskVolume;
  emptyDirVolume?: CreateEciScalingConfigurationRequestVolumesEmptyDirVolume;
  flexVolume?: CreateEciScalingConfigurationRequestVolumesFlexVolume;
  hostPathVolume?: CreateEciScalingConfigurationRequestVolumesHostPathVolume;
  NFSVolume?: CreateEciScalingConfigurationRequestVolumesNFSVolume;
  /**
   * @remarks
   * The list of configuration file paths.
   */
  configFileVolumeConfigFileToPaths?: CreateEciScalingConfigurationRequestVolumesConfigFileVolumeConfigFileToPaths[];
  /**
   * @remarks
   * The default permissions of the ConfigFileVolume.
   * 
   * @example
   * 0644
   */
  configFileVolumeDefaultMode?: number;
  /**
   * @remarks
   * The name of the volume.
   * 
   * @example
   * default-volume1
   */
  name?: string;
  /**
   * @remarks
   * The volume type. Valid values:
   * - EmptyDirVolume: the EmptyDir volume, which represents an empty directory.
   * - NFSVolume: the NFS volume, which represents a network file system.
   * - ConfigFileVolume: the ConfigFile volume, which represents a configuration file.
   * - FlexVolume: uses the FlexVolume plug-in to extend storage types and supports mounting cloud disks.
   * - HostPathVolume: the HostPath volume, which represents a file or directory on the host node.
   * - DiskVolume (not recommended): the cloud disk volume. Use FlexVolume to mount cloud disks instead.
   * 
   * @example
   * ConfigFileVolume
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      diskVolume: 'DiskVolume',
      emptyDirVolume: 'EmptyDirVolume',
      flexVolume: 'FlexVolume',
      hostPathVolume: 'HostPathVolume',
      NFSVolume: 'NFSVolume',
      configFileVolumeConfigFileToPaths: 'ConfigFileVolumeConfigFileToPaths',
      configFileVolumeDefaultMode: 'ConfigFileVolumeDefaultMode',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskVolume: CreateEciScalingConfigurationRequestVolumesDiskVolume,
      emptyDirVolume: CreateEciScalingConfigurationRequestVolumesEmptyDirVolume,
      flexVolume: CreateEciScalingConfigurationRequestVolumesFlexVolume,
      hostPathVolume: CreateEciScalingConfigurationRequestVolumesHostPathVolume,
      NFSVolume: CreateEciScalingConfigurationRequestVolumesNFSVolume,
      configFileVolumeConfigFileToPaths: { 'type': 'array', 'itemType': CreateEciScalingConfigurationRequestVolumesConfigFileVolumeConfigFileToPaths },
      configFileVolumeDefaultMode: 'number',
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.diskVolume && typeof (this.diskVolume as any).validate === 'function') {
      (this.diskVolume as any).validate();
    }
    if(this.emptyDirVolume && typeof (this.emptyDirVolume as any).validate === 'function') {
      (this.emptyDirVolume as any).validate();
    }
    if(this.flexVolume && typeof (this.flexVolume as any).validate === 'function') {
      (this.flexVolume as any).validate();
    }
    if(this.hostPathVolume && typeof (this.hostPathVolume as any).validate === 'function') {
      (this.hostPathVolume as any).validate();
    }
    if(this.NFSVolume && typeof (this.NFSVolume as any).validate === 'function') {
      (this.NFSVolume as any).validate();
    }
    if(Array.isArray(this.configFileVolumeConfigFileToPaths)) {
      $dara.Model.validateArray(this.configFileVolumeConfigFileToPaths);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEciScalingConfigurationRequest extends $dara.Model {
  /**
   * @remarks
   * The information about the Container Registry Enterprise instances.
   */
  acrRegistryInfos?: CreateEciScalingConfigurationRequestAcrRegistryInfos[];
  /**
   * @remarks
   * The validity period. Unit: seconds.
   * 
   * @example
   * 1000
   */
  activeDeadlineSeconds?: number;
  /**
   * @remarks
   * Specifies whether automatic creation of an elastic IP address (EIP) is performed and the EIP is attached to the ECI instance.
   * 
   * @example
   * true
   */
  autoCreateEip?: boolean;
  /**
   * @remarks
   * Specifies whether to automatically match an image cache. Valid values:
   * - true: Yes.
   * - false: No.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  autoMatchImageCache?: boolean;
  /**
   * @remarks
   * The name of the ECI instance, which is the name of the container group.
   * 
   * To set a sequential instance name, use the following format: name_prefix(AUTO_INCREMENT)[begin_number,bits]name_suffix.
   * 
   * - **name_prefix**: the prefix of the hostname.
   * 
   * - **(AUTO_INCREMENT)**: a fixed value that identifies this sorting method.
   * 
   * - **begin_number**: the start value of the sequential number. Valid values: 0 to 999999.
   * 
   * - **bits**: the number of digits of the sequential number. Valid values: 1 to 6. If the number of digits of the specified begin_number is greater than the value of bits, bits defaults to 6.
   * <notice>We recommend that you set bits to at least 3. Otherwise, the upper limit of the sequential number is easily reached. After the upper limit is reached, if scale-out is still required, the scaling activity reports an error and stops. In this case, you must reset the rule for generating hostnames.</notice>
   * 
   * - **name_suffix** (optional): the suffix of the hostname.
   * 
   * <notice>No spaces are allowed in [begin_number,bits]. The system increments the number sequentially by default. However, if an ECI instance created during scale-out fails to start, the instance is removed from the scaling group and a new ECI instance is created. Therefore, the hostnames of ECI instances in the scaling group may be incremented discontinuously.</notice>
   * 
   * **Example:** If you set the value to nginx-test-(AUTO_INCREMENT)[0,3], the container group names are nginx-test-000, nginx-test-001, and nginx-test-002.
   * 
   * The rules for setting sequential ECI instance names are the same as those for setting sequential ECS instance names in a scaling group. For more information, see [Set a rule for sequential and unique instance names or hostnames](https://help.aliyun.com/document_detail/203831.html).
   * 
   * @example
   * nginx-test-(AUTO_INCREMENT)[0,3]
   */
  containerGroupName?: string;
  /**
   * @remarks
   * The list of containers included in the instance.
   */
  containers?: CreateEciScalingConfigurationRequestContainers[];
  /**
   * @remarks
   * Specifies whether to enable cost optimization. Valid values:
   * - true: Enabled.
   * - false: Disabled.
   * 
   * @example
   * false
   */
  costOptimization?: boolean;
  /**
   * @remarks
   * The number of vCPUs for the instance. Unit: cores.
   * 
   * @example
   * 1.0
   */
  cpu?: number;
  /**
   * @remarks
   * The number of physical CPU cores. Only specific instance types support custom settings. For more information, see [Customize CPU options](https://help.aliyun.com/document_detail/197781.html).
   * 
   * @example
   * 2
   */
  cpuOptionsCore?: number;
  /**
   * @remarks
   * The number of threads per core. Only specific instance types support custom settings. A value of 1 indicates that hyper-threading is disabled. For more information, see [Customize CPU options](https://help.aliyun.com/document_detail/197781.html).
   * 
   * @example
   * 2
   */
  cpuOptionsThreadsPerCore?: number;
  /**
   * @remarks
   * The data cache bucket.
   * 
   * @example
   * default
   */
  dataCacheBucket?: string;
  /**
   * @remarks
   * Specifies whether to enable the burst feature for the ESSD AutoPL cloud disk used for data caching. Valid values:
   * 
   * - true: Enabled.
   * - false: Disabled.
   * 
   * Default value: false.
   * > For more information about ESSD AutoPL cloud disks, see [ESSD AutoPL cloud disks](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * false
   */
  dataCacheBurstingEnabled?: boolean;
  /**
   * @remarks
   * The performance level of the cloud disk used for data caching. ESSDs are recommended. Valid values for the performance level of an ESSD:
   * 
   * - PL0: An ESSD at PL0 delivers up to 10,000 random read/write IOPS.
   * - PL1: An ESSD at PL1 delivers up to 50,000 random read/write IOPS.
   * - PL2: An ESSD at PL2 delivers up to 100,000 random read/write IOPS.
   * - PL3: An ESSD at PL3 delivers up to 1,000,000 random read/write IOPS.
   * 
   * Default value: PL1.
   * > For more information about ESSDs, see [ESSDs](https://help.aliyun.com/document_detail/122389.html).
   * 
   * @example
   * PL1
   */
  dataCachePL?: string;
  /**
   * @remarks
   * The provisioned read/write IOPS of the ESSD AutoPL cloud disk used for data caching. Valid values: 0 to min{50000, 1000 × capacity - baseline performance}, where baseline performance = min{1800 + 50 × capacity, 50000}.
   * 
   * > For more information about ESSD AutoPL cloud disks, see [ESSD AutoPL cloud disks](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * 40000
   */
  dataCacheProvisionedIops?: number;
  /**
   * @remarks
   * >This parameter is unavailable.
   * 
   * @example
   * desc
   */
  description?: string;
  /**
   * @remarks
   * The list of IP addresses of DNS servers.
   */
  dnsConfigNameServers?: string[];
  /**
   * @remarks
   * The list of object options. Each object consists of a Name and an optional Value.
   */
  dnsConfigOptions?: CreateEciScalingConfigurationRequestDnsConfigOptions[];
  /**
   * @remarks
   * The list of DNS search domains.
   */
  dnsConfigSearchs?: string[];
  /**
   * @remarks
   * The DNS policy. Valid values:
   * 
   * - None: Uses the DNS settings specified in the DnsConfig field.
   * 
   * - Default: Inherits the DNS settings of the runtime environment.
   * 
   * @example
   * Default
   */
  dnsPolicy?: string;
  /**
   * @remarks
   * The outbound bandwidth limit. Unit: bytes.
   * 
   * @example
   * 1024000
   */
  egressBandwidth?: number;
  /**
   * @remarks
   * The bandwidth of the EIP. Default value: 5 Mbit/s.
   * 
   * @example
   * 5
   */
  eipBandwidth?: number;
  /**
   * @remarks
   * >This parameter is unavailable.
   * 
   * @example
   * false
   */
  enableSls?: boolean;
  /**
   * @remarks
   * The size of the ephemeral storage space. By default, a PL1 ESSD cloud disk is used. Unit: GiB.
   * 
   * @example
   * 20
   */
  ephemeralStorage?: number;
  /**
   * @remarks
   * The GPU driver version. Valid values:
   * - tesla=470.82.01 (default)
   * - tesla=525.85.12
   * 
   * > Only specific instance types support switching the GPU driver version. For more information, see [Create a GPU-accelerated instance](https://help.aliyun.com/document_detail/2579486.html).
   * 
   * @example
   * tesla=525.85.12
   */
  gpuDriverVersion?: string;
  /**
   * @remarks
   * The custom hostname mappings for a container in the instance.
   */
  hostAliases?: CreateEciScalingConfigurationRequestHostAliases[];
  /**
   * @remarks
   * The hostname, which is the name of the container group.
   * 
   * @example
   * test
   */
  hostName?: string;
  /**
   * @remarks
   * The details of the image registry.
   */
  imageRegistryCredentials?: CreateEciScalingConfigurationRequestImageRegistryCredentials[];
  /**
   * @remarks
   * The ID of the image cache.
   * 
   * @example
   * imc-2zebxkiifuyzzlhl****
   */
  imageSnapshotId?: string;
  /**
   * @remarks
   * The inbound bandwidth limit. Unit: bytes.
   * 
   * @example
   * 1024000
   */
  ingressBandwidth?: number;
  /**
   * @remarks
   * The list of init containers.
   */
  initContainers?: CreateEciScalingConfigurationRequestInitContainers[];
  /**
   * @remarks
   * The instance family level, which is used to filter instance types that meet your requirements. This parameter takes effect only when CostOptimization is enabled. Valid values:
   * 
   * - EntryLevel: entry-level, which indicates shared instance types. Shared instance types are more cost-effective but cannot guarantee stable computing performance. They are suitable for business scenarios with low average CPU utilization. For more information, see [Shared instance families](https://help.aliyun.com/document_detail/108489.html).
   * - EnterpriseLevel: enterprise-level. Enterprise-level instance types provide stable performance and dedicated resources, and are suitable for business scenarios that require high stability. For more information, see [Instance families](https://help.aliyun.com/document_detail/25378.html).
   * - CreditEntryLevel: credit entry-level, which indicates burstable instances. Burstable instances use CPU credits to ensure computing performance and are suitable for business scenarios with low average CPU utilization but occasional CPU bursts. For more information, see [Overview of burstable instances](https://help.aliyun.com/document_detail/59977.html).
   * 
   * @example
   * EnterpriseLevel
   */
  instanceFamilyLevel?: string;
  /**
   * @remarks
   * The specified ECS instance types. You can specify up to five instance types.
   */
  instanceTypes?: string[];
  /**
   * @remarks
   * The number of IPv6 addresses.
   * 
   * @example
   * 1
   */
  ipv6AddressCount?: number;
  /**
   * @remarks
   * The weight of the ECI instance when it is used as a backend server for load balancing. Valid values: 1 to 100.
   * 
   * Default value: 50.
   * 
   * @example
   * 50
   */
  loadBalancerWeight?: number;
  /**
   * @remarks
   * The memory size for the instance. Unit: GiB.
   * 
   * @example
   * 2.0
   */
  memory?: number;
  /**
   * @remarks
   * The NTP server.
   */
  ntpServers?: string[];
  ownerId?: number;
  /**
   * @remarks
   * The name of the instance RAM role. ECI and ECS share instance RAM roles. For more information, see [Instance RAM roles](https://help.aliyun.com/document_detail/61175.html).
   * 
   * @example
   * RamTestRole
   */
  ramRoleName?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-uf66jeqopgqa9hdn****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The restart policy of the ECI instance. Valid values:
   * 
   * - Always: Always restarts the instance.
   * - Never: Never restarts the instance.
   * - OnFailure: Restarts the instance upon failure.
   * 
   * Default value: Always.
   * 
   * @example
   * Always
   */
  restartPolicy?: string;
  /**
   * @remarks
   * The name of the scaling configuration. The name must be 2 to 64 characters in length and start with a digit, letter, or Chinese character. It can contain digits, underscores (_), hyphens (-), and periods (.).
   * 
   * The name must be unique within a scaling group in a region. If you do not specify this parameter, the ID of the scaling configuration is used by default.
   * 
   * @example
   * scalingconfig****
   */
  scalingConfigurationName?: string;
  /**
   * @remarks
   * The ID of the scaling group to which the scaling configuration belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * asg-bp14wlu85wrpchm0****
   */
  scalingGroupId?: string;
  /**
   * @remarks
   * The security context system information for the instance.
   */
  securityContextSysctls?: CreateEciScalingConfigurationRequestSecurityContextSysctls[];
  /**
   * @remarks
   * The ID of the security group to which the ECI instance belongs. ECI instances in the same security group can access each other.
   * 
   * If you do not specify a security group, the system automatically uses the default security group in the selected region. You must ensure that the inbound rules of this security group include the protocols and ports that the containers need to expose. If no default security group exists in the region, the system performs automatic creation of a default security group and adds the declared container protocols and ports to the inbound rules of the security group.
   * 
   * @example
   * sg-uf66jeqopgqa9hdn****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The maximum hourly price for the spot instance. The value is accurate to three decimal places.
   * 
   * This parameter is required when SpotStrategy is set to SpotWithPriceLimit.
   * 
   * @example
   * 0.025
   */
  spotPriceLimit?: number;
  /**
   * @remarks
   * The preemption policy for the instance. Valid values:
   * 
   * - NoSpot: Regular pay-as-you-go instance.
   * - SpotWithPriceLimit: Spot instance with a maximum price limit.
   * - SpotAsPriceGo: Spot instance whose price automatically follows the current market price.
   * 
   * Default value: NoSpot.
   * 
   * @example
   * SpotWithPriceLimit
   */
  spotStrategy?: string;
  /**
   * @remarks
   * The tags of the ECI instance. Tags are passed as key-value pairs. You can use up to 20 tags. The requirements for keys and values are as follows:
   *          
   * - A key can be up to 64 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`. A key cannot be an empty string.
   * - A value can be up to 128 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`. A value can be an empty string.
   */
  tags?: CreateEciScalingConfigurationRequestTags[];
  /**
   * @remarks
   * The buffer time for the program to handle operations before shutdown. Unit: seconds.
   * 
   * @example
   * 60
   */
  terminationGracePeriodSeconds?: number;
  /**
   * @remarks
   * The volume information.
   */
  volumes?: CreateEciScalingConfigurationRequestVolumes[];
  static names(): { [key: string]: string } {
    return {
      acrRegistryInfos: 'AcrRegistryInfos',
      activeDeadlineSeconds: 'ActiveDeadlineSeconds',
      autoCreateEip: 'AutoCreateEip',
      autoMatchImageCache: 'AutoMatchImageCache',
      containerGroupName: 'ContainerGroupName',
      containers: 'Containers',
      costOptimization: 'CostOptimization',
      cpu: 'Cpu',
      cpuOptionsCore: 'CpuOptionsCore',
      cpuOptionsThreadsPerCore: 'CpuOptionsThreadsPerCore',
      dataCacheBucket: 'DataCacheBucket',
      dataCacheBurstingEnabled: 'DataCacheBurstingEnabled',
      dataCachePL: 'DataCachePL',
      dataCacheProvisionedIops: 'DataCacheProvisionedIops',
      description: 'Description',
      dnsConfigNameServers: 'DnsConfigNameServers',
      dnsConfigOptions: 'DnsConfigOptions',
      dnsConfigSearchs: 'DnsConfigSearchs',
      dnsPolicy: 'DnsPolicy',
      egressBandwidth: 'EgressBandwidth',
      eipBandwidth: 'EipBandwidth',
      enableSls: 'EnableSls',
      ephemeralStorage: 'EphemeralStorage',
      gpuDriverVersion: 'GpuDriverVersion',
      hostAliases: 'HostAliases',
      hostName: 'HostName',
      imageRegistryCredentials: 'ImageRegistryCredentials',
      imageSnapshotId: 'ImageSnapshotId',
      ingressBandwidth: 'IngressBandwidth',
      initContainers: 'InitContainers',
      instanceFamilyLevel: 'InstanceFamilyLevel',
      instanceTypes: 'InstanceTypes',
      ipv6AddressCount: 'Ipv6AddressCount',
      loadBalancerWeight: 'LoadBalancerWeight',
      memory: 'Memory',
      ntpServers: 'NtpServers',
      ownerId: 'OwnerId',
      ramRoleName: 'RamRoleName',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      restartPolicy: 'RestartPolicy',
      scalingConfigurationName: 'ScalingConfigurationName',
      scalingGroupId: 'ScalingGroupId',
      securityContextSysctls: 'SecurityContextSysctls',
      securityGroupId: 'SecurityGroupId',
      spotPriceLimit: 'SpotPriceLimit',
      spotStrategy: 'SpotStrategy',
      tags: 'Tags',
      terminationGracePeriodSeconds: 'TerminationGracePeriodSeconds',
      volumes: 'Volumes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acrRegistryInfos: { 'type': 'array', 'itemType': CreateEciScalingConfigurationRequestAcrRegistryInfos },
      activeDeadlineSeconds: 'number',
      autoCreateEip: 'boolean',
      autoMatchImageCache: 'boolean',
      containerGroupName: 'string',
      containers: { 'type': 'array', 'itemType': CreateEciScalingConfigurationRequestContainers },
      costOptimization: 'boolean',
      cpu: 'number',
      cpuOptionsCore: 'number',
      cpuOptionsThreadsPerCore: 'number',
      dataCacheBucket: 'string',
      dataCacheBurstingEnabled: 'boolean',
      dataCachePL: 'string',
      dataCacheProvisionedIops: 'number',
      description: 'string',
      dnsConfigNameServers: { 'type': 'array', 'itemType': 'string' },
      dnsConfigOptions: { 'type': 'array', 'itemType': CreateEciScalingConfigurationRequestDnsConfigOptions },
      dnsConfigSearchs: { 'type': 'array', 'itemType': 'string' },
      dnsPolicy: 'string',
      egressBandwidth: 'number',
      eipBandwidth: 'number',
      enableSls: 'boolean',
      ephemeralStorage: 'number',
      gpuDriverVersion: 'string',
      hostAliases: { 'type': 'array', 'itemType': CreateEciScalingConfigurationRequestHostAliases },
      hostName: 'string',
      imageRegistryCredentials: { 'type': 'array', 'itemType': CreateEciScalingConfigurationRequestImageRegistryCredentials },
      imageSnapshotId: 'string',
      ingressBandwidth: 'number',
      initContainers: { 'type': 'array', 'itemType': CreateEciScalingConfigurationRequestInitContainers },
      instanceFamilyLevel: 'string',
      instanceTypes: { 'type': 'array', 'itemType': 'string' },
      ipv6AddressCount: 'number',
      loadBalancerWeight: 'number',
      memory: 'number',
      ntpServers: { 'type': 'array', 'itemType': 'string' },
      ownerId: 'number',
      ramRoleName: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      restartPolicy: 'string',
      scalingConfigurationName: 'string',
      scalingGroupId: 'string',
      securityContextSysctls: { 'type': 'array', 'itemType': CreateEciScalingConfigurationRequestSecurityContextSysctls },
      securityGroupId: 'string',
      spotPriceLimit: 'number',
      spotStrategy: 'string',
      tags: { 'type': 'array', 'itemType': CreateEciScalingConfigurationRequestTags },
      terminationGracePeriodSeconds: 'number',
      volumes: { 'type': 'array', 'itemType': CreateEciScalingConfigurationRequestVolumes },
    };
  }

  validate() {
    if(Array.isArray(this.acrRegistryInfos)) {
      $dara.Model.validateArray(this.acrRegistryInfos);
    }
    if(Array.isArray(this.containers)) {
      $dara.Model.validateArray(this.containers);
    }
    if(Array.isArray(this.dnsConfigNameServers)) {
      $dara.Model.validateArray(this.dnsConfigNameServers);
    }
    if(Array.isArray(this.dnsConfigOptions)) {
      $dara.Model.validateArray(this.dnsConfigOptions);
    }
    if(Array.isArray(this.dnsConfigSearchs)) {
      $dara.Model.validateArray(this.dnsConfigSearchs);
    }
    if(Array.isArray(this.hostAliases)) {
      $dara.Model.validateArray(this.hostAliases);
    }
    if(Array.isArray(this.imageRegistryCredentials)) {
      $dara.Model.validateArray(this.imageRegistryCredentials);
    }
    if(Array.isArray(this.initContainers)) {
      $dara.Model.validateArray(this.initContainers);
    }
    if(Array.isArray(this.instanceTypes)) {
      $dara.Model.validateArray(this.instanceTypes);
    }
    if(Array.isArray(this.ntpServers)) {
      $dara.Model.validateArray(this.ntpServers);
    }
    if(Array.isArray(this.securityContextSysctls)) {
      $dara.Model.validateArray(this.securityContextSysctls);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(Array.isArray(this.volumes)) {
      $dara.Model.validateArray(this.volumes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

