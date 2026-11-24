// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyEciScalingConfigurationRequestAcrRegistryInfos extends $dara.Model {
  /**
   * @remarks
   * The domain names of the ACR Enterprise Edition instance. By default, all domain names of the instance are used. You can specify individual domain names and separate multiple domain names with commas (,).
   */
  domains?: string[];
  /**
   * @remarks
   * The ID of the ACR Enterprise Edition instance.
   * 
   * @example
   * cri-nwj395hgf6f3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the ACR Enterprise Edition instance.
   * 
   * @example
   * acr-test
   */
  instanceName?: string;
  /**
   * @remarks
   * The region ID of the ACR Enterprise Edition instance.
   * 
   * @example
   * cn-hangzhou
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

export class ModifyEciScalingConfigurationRequestContainersLivenessProbeExec extends $dara.Model {
  /**
   * @remarks
   * The command executed in the container when the exec action is used for health checks.
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

export class ModifyEciScalingConfigurationRequestContainersLivenessProbeHttpGet extends $dara.Model {
  /**
   * @remarks
   * The path to which the HTTP GET request is sent when HTTP GET is used for health checks.
   * 
   * @example
   * /healthyz
   */
  path?: string;
  /**
   * @remarks
   * The port number to which the HTTP GET request is sent when HTTP GET is used for health checks.
   * 
   * @example
   * 8888
   */
  port?: number;
  /**
   * @remarks
   * The protocol type of the HTTP GET request when HTTP GET is used for health checks. Valid values:
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

export class ModifyEciScalingConfigurationRequestContainersLivenessProbeTcpSocket extends $dara.Model {
  /**
   * @remarks
   * The port number on which the TCP socket check is performed when TCP socket is used for health checks.
   * 
   * @example
   * 1
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

export class ModifyEciScalingConfigurationRequestContainersLivenessProbe extends $dara.Model {
  exec?: ModifyEciScalingConfigurationRequestContainersLivenessProbeExec;
  /**
   * @remarks
   * The minimum consecutive failures for the liveness check to be considered failed after having succeeded.
   * 
   * Default value: 3.
   * 
   * @example
   * 3
   */
  failureThreshold?: number;
  httpGet?: ModifyEciScalingConfigurationRequestContainersLivenessProbeHttpGet;
  /**
   * @remarks
   * The number of seconds after the container has started before the readiness check is initiated.
   * 
   * @example
   * 5
   */
  initialDelaySeconds?: number;
  /**
   * @remarks
   * The period for executing the liveness check, in seconds. Default value: 10. Minimum value: 1.
   * 
   * @example
   * 5
   */
  periodSeconds?: number;
  /**
   * @remarks
   * The minimum consecutive successes for the liveness check to be considered successful after having failed. Default value: 1. The value must be 1.
   * 
   * @example
   * 1
   */
  successThreshold?: number;
  tcpSocket?: ModifyEciScalingConfigurationRequestContainersLivenessProbeTcpSocket;
  /**
   * @remarks
   * The timeout period for the readiness check, in seconds. Default value: 1. Minimum value: 1.
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
      exec: ModifyEciScalingConfigurationRequestContainersLivenessProbeExec,
      failureThreshold: 'number',
      httpGet: ModifyEciScalingConfigurationRequestContainersLivenessProbeHttpGet,
      initialDelaySeconds: 'number',
      periodSeconds: 'number',
      successThreshold: 'number',
      tcpSocket: ModifyEciScalingConfigurationRequestContainersLivenessProbeTcpSocket,
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

export class ModifyEciScalingConfigurationRequestContainersReadinessProbeExec extends $dara.Model {
  /**
   * @remarks
   * The command executed in the container when the exec action is used for health checks.
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

export class ModifyEciScalingConfigurationRequestContainersReadinessProbeHttpGet extends $dara.Model {
  /**
   * @remarks
   * The path to which the HTTP GET request is sent when HTTP GET is used for health checks.
   * 
   * @example
   * /healthz
   */
  path?: string;
  /**
   * @remarks
   * The port number to which the HTTP GET request is sent when HTTP GET is used for health checks.
   * 
   * @example
   * 8080
   */
  port?: number;
  /**
   * @remarks
   * The protocol type of the HTTP GET request when HTTP GET is used for health checks. Valid values:
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

export class ModifyEciScalingConfigurationRequestContainersReadinessProbeTcpSocket extends $dara.Model {
  /**
   * @remarks
   * The port number on which the TCP socket check is performed when TCP socket is used for health checks.
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

export class ModifyEciScalingConfigurationRequestContainersReadinessProbe extends $dara.Model {
  exec?: ModifyEciScalingConfigurationRequestContainersReadinessProbeExec;
  /**
   * @remarks
   * The minimum consecutive failures for the liveness check to be considered failed after having succeeded.
   * 
   * Default value: 3.
   * 
   * @example
   * 3
   */
  failureThreshold?: number;
  httpGet?: ModifyEciScalingConfigurationRequestContainersReadinessProbeHttpGet;
  /**
   * @remarks
   * The number of seconds after the container has started before the readiness check is initiated.
   * 
   * @example
   * 3
   */
  initialDelaySeconds?: number;
  /**
   * @remarks
   * The period for executing the liveness check, in seconds. Default value: 10. Minimum value: 1.
   * 
   * @example
   * 3
   */
  periodSeconds?: number;
  /**
   * @remarks
   * The minimum consecutive successes for the readiness check to be considered successful after having failed. Default value: 1. The value must be 1.
   * 
   * @example
   * 1
   */
  successThreshold?: number;
  tcpSocket?: ModifyEciScalingConfigurationRequestContainersReadinessProbeTcpSocket;
  /**
   * @remarks
   * The timeout period for the readiness check, in seconds. Default value: 1. Minimum value: 1.
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
      exec: ModifyEciScalingConfigurationRequestContainersReadinessProbeExec,
      failureThreshold: 'number',
      httpGet: ModifyEciScalingConfigurationRequestContainersReadinessProbeHttpGet,
      initialDelaySeconds: 'number',
      periodSeconds: 'number',
      successThreshold: 'number',
      tcpSocket: ModifyEciScalingConfigurationRequestContainersReadinessProbeTcpSocket,
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

export class ModifyEciScalingConfigurationRequestContainersSecurityContextCapability extends $dara.Model {
  /**
   * @remarks
   * Grants specific privileges to processes in the container. Valid values: NET_ADMIN and NET_RAW.
   * 
   * > NET_RAW is not supported by default. To use NET_RAW, submit a ticket.
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

export class ModifyEciScalingConfigurationRequestContainersSecurityContext extends $dara.Model {
  capability?: ModifyEciScalingConfigurationRequestContainersSecurityContextCapability;
  /**
   * @remarks
   * Specifies whether the root file system of the container is read-only. Only true is supported.
   * 
   * @example
   * true
   */
  readOnlyRootFilesystem?: boolean;
  /**
   * @remarks
   * The user ID to run the container.
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
      capability: ModifyEciScalingConfigurationRequestContainersSecurityContextCapability,
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

export class ModifyEciScalingConfigurationRequestContainersEnvironmentVarsFieldRef extends $dara.Model {
  /**
   * @remarks
   * > This parameter is not available.
   * 
   * @example
   * path
   */
  fieldPath?: string;
  static names(): { [key: string]: string } {
    return {
      fieldPath: 'FieldPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldPath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyEciScalingConfigurationRequestContainersEnvironmentVars extends $dara.Model {
  fieldRef?: ModifyEciScalingConfigurationRequestContainersEnvironmentVarsFieldRef;
  /**
   * @remarks
   * The name of the environment variable. The name must be 1 to 128 characters in length, match the `[0-9a-zA-Z]` format, and can contain underscores (_). It cannot start with a digit.
   * 
   * @example
   * PATH
   */
  key?: string;
  /**
   * @remarks
   * The value of the environment variable. The value can be up to 256 characters in length.
   * 
   * @example
   * /usr/local/bin
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      fieldRef: 'FieldRef',
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldRef: ModifyEciScalingConfigurationRequestContainersEnvironmentVarsFieldRef,
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    if(this.fieldRef && typeof (this.fieldRef as any).validate === 'function') {
      (this.fieldRef as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyEciScalingConfigurationRequestContainersPorts extends $dara.Model {
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

export class ModifyEciScalingConfigurationRequestContainersVolumeMounts extends $dara.Model {
  /**
   * @remarks
   * The directory where the volume is mounted in the container.
   * 
   * > The contents of the mount path in the container are directly overwritten by the contents of the volume. Use this parameter with caution.
   * 
   * @example
   * /pod/data
   */
  mountPath?: string;
  /**
   * @remarks
   * The mount propagation settings for the volume. Mount propagation allows volumes mounted by a container to be shared with other containers in the same pod, or even with other pods on the same node. Valid values:
   * 
   * - None: The volume does not receive any subsequent mounts that are performed on the volume or its subdirectories.
   * - HostToCotainer: The volume receives all subsequent mounts that are performed on the volume or its subdirectories.
   * - Bidirectional: Similar to HostToContainer, the volume receives all subsequent mounts. In addition, all mounts created by the container are propagated back to the host and to all containers of all pods that use the same volume.
   * 
   * @example
   * None
   */
  mountPropagation?: string;
  /**
   * @remarks
   * The name of the volume. The value must be the same as the Name parameter in Volume.
   * 
   * @example
   * default-volume1
   */
  name?: string;
  /**
   * @remarks
   * Specifies whether the volume is read-only.
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

export class ModifyEciScalingConfigurationRequestContainers extends $dara.Model {
  livenessProbe?: ModifyEciScalingConfigurationRequestContainersLivenessProbe;
  readinessProbe?: ModifyEciScalingConfigurationRequestContainersReadinessProbe;
  securityContext?: ModifyEciScalingConfigurationRequestContainersSecurityContext;
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
   * The number of vCPUs allocated to the container.
   * 
   * @example
   * 0.25
   */
  cpu?: number;
  /**
   * @remarks
   * The environment variable information.
   */
  environmentVars?: ModifyEciScalingConfigurationRequestContainersEnvironmentVars[];
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
   * The container image.
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
   * @example
   * Always
   */
  imagePullPolicy?: string;
  /**
   * @remarks
   * The command executed in the container when the command line is used for the postStart callback function Settings.
   */
  lifecyclePostStartHandlerExecs?: string[];
  /**
   * @remarks
   * The host address that accepts the HTTP GET request when the HTTP request method is used for the postStart callback function Settings.
   * 
   * @example
   * 10.0.XX.XX
   */
  lifecyclePostStartHandlerHttpGetHost?: string;
  /**
   * @remarks
   * The path to which the HTTP GET request is sent when the HTTP request method is used for the postStart callback function Settings.
   * 
   * @example
   * /healthyz
   */
  lifecyclePostStartHandlerHttpGetPath?: string;
  /**
   * @remarks
   * The port number to which the HTTP GET request is sent when the HTTP request method is used for the postStart callback function Settings.
   * 
   * @example
   * 5050
   */
  lifecyclePostStartHandlerHttpGetPort?: number;
  /**
   * @remarks
   * The protocol type of the HTTP GET request when the HTTP request method is used for the postStart callback function Settings. Valid values:
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
   * The host address on which the TCP socket check is performed when the TCP socket method is used for the postStart callback function Settings.
   * 
   * @example
   * 10.0.XX.XX
   */
  lifecyclePostStartHandlerTcpSocketHost?: string;
  /**
   * @remarks
   * The port number on which the TCP socket check is performed when the TCP socket method is used for the postStart callback function Settings.
   * 
   * @example
   * 80
   */
  lifecyclePostStartHandlerTcpSocketPort?: number;
  /**
   * @remarks
   * The command executed in the container when the command line is used for the preStop callback function Settings.
   */
  lifecyclePreStopHandlerExecs?: string[];
  /**
   * @remarks
   * The host address that accepts the HTTP GET request when the HTTP request method is used for the preStop callback function Settings.
   * 
   * @example
   * 10.0.XX.XX
   */
  lifecyclePreStopHandlerHttpGetHost?: string;
  /**
   * @remarks
   * The path to which the HTTP GET request is sent when the HTTP request method is used for the preStop callback function Settings.
   * 
   * @example
   * /healthyz
   */
  lifecyclePreStopHandlerHttpGetPath?: string;
  /**
   * @remarks
   * The port number to which the HTTP GET request is sent when the HTTP request method is used for the preStop callback function Settings.
   * 
   * @example
   * 80
   */
  lifecyclePreStopHandlerHttpGetPort?: number;
  /**
   * @remarks
   * The protocol type of the HTTP GET request when the HTTP request method is used for the preStop callback function Settings. Valid values:
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
   * The host address on which the TCP socket check is performed when the TCP socket method is used for the preStop callback function Settings.
   * 
   * @example
   * 10.0.XX.XX
   */
  lifecyclePreStopHandlerTcpSocketHost?: string;
  /**
   * @remarks
   * The port number on which the TCP socket check is performed when the TCP socket method is used for the preStop callback function Settings.
   * 
   * @example
   * 80
   */
  lifecyclePreStopHandlerTcpSocketPort?: number;
  /**
   * @remarks
   * The memory size of the container, in GiB.
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
   * The port information.
   */
  ports?: ModifyEciScalingConfigurationRequestContainersPorts[];
  /**
   * @remarks
   * Specifies whether to allocate a buffer for standard input while the container is running. If this parameter is not set, a read from standard input results in an EOF.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  stdin?: boolean;
  /**
   * @remarks
   * Specifies whether the standard input stream maintains the enabling status across multiple attached sessions when standard input is true.
   * 
   * If StdinOnce is set to true, standard input is opened when the container starts, remains empty until the first client attaches to it, and then maintains the enabling status to accept data until the client disconnects. After the client disconnects, standard input enters shutdown and remains in shutdown until the container is restarted.
   * 
   * @example
   * false
   */
  stdinOnce?: boolean;
  /**
   * @remarks
   * Specifies whether to allocate a TTY for the container. Default value: false.
   * 
   * Set this parameter to true when the Command parameter is set to /bin/bash.
   * 
   * @example
   * false
   */
  tty?: boolean;
  /**
   * @remarks
   * The volume mount information for the container.
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

export class ModifyEciScalingConfigurationRequestDnsConfigOptions extends $dara.Model {
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

export class ModifyEciScalingConfigurationRequestHostAliases extends $dara.Model {
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
   * 192.0.XX.XX
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

export class ModifyEciScalingConfigurationRequestImageRegistryCredentials extends $dara.Model {
  /**
   * @remarks
   * The password for the image registry.
   * 
   * @example
   * yourpaasword
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
   * The username for the image registry.
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

export class ModifyEciScalingConfigurationRequestInitContainersSecurityContextCapability extends $dara.Model {
  /**
   * @remarks
   * Grants specific privileges to processes in the container. Valid values: NET_ADMIN and NET_RAW.
   * 
   * > NET_RAW is not supported by default. To use NET_RAW, submit a ticket.
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

export class ModifyEciScalingConfigurationRequestInitContainersSecurityContext extends $dara.Model {
  capability?: ModifyEciScalingConfigurationRequestInitContainersSecurityContextCapability;
  /**
   * @remarks
   * > This parameter is not available.
   * 
   * @example
   * false
   */
  readOnlyRootFilesystem?: boolean;
  /**
   * @remarks
   * The user ID to run the container.
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
      capability: ModifyEciScalingConfigurationRequestInitContainersSecurityContextCapability,
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

export class ModifyEciScalingConfigurationRequestInitContainersInitContainerEnvironmentVarsFieldRef extends $dara.Model {
  /**
   * @remarks
   * > This parameter is not available.
   * 
   * @example
   * path
   */
  fieldPath?: string;
  static names(): { [key: string]: string } {
    return {
      fieldPath: 'FieldPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldPath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyEciScalingConfigurationRequestInitContainersInitContainerEnvironmentVars extends $dara.Model {
  fieldRef?: ModifyEciScalingConfigurationRequestInitContainersInitContainerEnvironmentVarsFieldRef;
  /**
   * @remarks
   * The name of the environment variable. The name must be 1 to 128 characters in length. It can contain letters, digits, and underscores (_), and cannot start with a digit.
   * 
   * @example
   * Path
   */
  key?: string;
  /**
   * @remarks
   * The value of the environment variable. The value can be up to 256 characters in length.
   * 
   * @example
   * /usr/bin/
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      fieldRef: 'FieldRef',
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldRef: ModifyEciScalingConfigurationRequestInitContainersInitContainerEnvironmentVarsFieldRef,
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    if(this.fieldRef && typeof (this.fieldRef as any).validate === 'function') {
      (this.fieldRef as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyEciScalingConfigurationRequestInitContainersInitContainerPorts extends $dara.Model {
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

export class ModifyEciScalingConfigurationRequestInitContainersInitContainerVolumeMounts extends $dara.Model {
  /**
   * @remarks
   * The directory where the volume is mounted in the container.
   * 
   * > The contents of the mount path in the container are directly overwritten by the contents of the volume. Use this parameter with caution.
   * 
   * @example
   * /usr/share/
   */
  mountPath?: string;
  /**
   * @remarks
   * The mount propagation settings for the volume. Mount propagation allows a volume mounted to a container to be shared with other containers in the same pod, or even with other pods on the same node. Valid values:
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
   * The name of the mounted volume.
   * 
   * @example
   * test-empty
   */
  name?: string;
  /**
   * @remarks
   * Specifies whether the mount path is read-only.
   * 
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
   * Always
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

export class ModifyEciScalingConfigurationRequestInitContainers extends $dara.Model {
  securityContext?: ModifyEciScalingConfigurationRequestInitContainersSecurityContext;
  /**
   * @remarks
   * The startup arguments for the container.
   */
  args?: string[];
  /**
   * @remarks
   * The startup commands for the container.
   */
  commands?: string[];
  /**
   * @remarks
   * The number of vCPUs allocated to the container.
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
   * The image pull policy for the container. Valid values:
   * 
   * - Always: Always pulls the image.
   * - IfNotPresent: Pulls the image only if it is not present locally.
   * - Never: Never pulls the image. Only local images are used.
   * 
   * @example
   * Always
   */
  imagePullPolicy?: string;
  /**
   * @remarks
   * The environment variable information of the init container.
   */
  initContainerEnvironmentVars?: ModifyEciScalingConfigurationRequestInitContainersInitContainerEnvironmentVars[];
  /**
   * @remarks
   * The port information of the init container.
   */
  initContainerPorts?: ModifyEciScalingConfigurationRequestInitContainersInitContainerPorts[];
  /**
   * @remarks
   * The array of mount point information for the init container.
   */
  initContainerVolumeMounts?: ModifyEciScalingConfigurationRequestInitContainersInitContainerVolumeMounts[];
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

export class ModifyEciScalingConfigurationRequestSecurityContextSysCtls extends $dara.Model {
  /**
   * @remarks
   * The system name of the security context in which the instance runs.
   * 
   * @example
   * kernel.msgmax
   */
  name?: string;
  /**
   * @remarks
   * The variable value of the contextual security context in which the instance runs.
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

export class ModifyEciScalingConfigurationRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * version
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
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

export class ModifyEciScalingConfigurationRequestVolumesDiskVolume extends $dara.Model {
  /**
   * @remarks
   * The ID of the disk volume.
   * 
   * @example
   * d-xx
   */
  diskId?: string;
  /**
   * @remarks
   * The size of the disk volume. Unit: GiB.
   * 
   * @example
   * 15
   */
  diskSize?: number;
  /**
   * @remarks
   * This file system type is deprecated. Use the FlexVolume.FsType parameter.
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

export class ModifyEciScalingConfigurationRequestVolumesEmptyDirVolume extends $dara.Model {
  /**
   * @remarks
   * The storage medium of the EmptyDirVolume. The default value is empty, which indicates that the node file system is used. If this parameter is set to memory, the memory is used.
   * 
   * @example
   * memory
   */
  medium?: string;
  /**
   * @remarks
   * The size of the EmptyDir volume. Specify a unit for the value, such as Gi or Mi.
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

export class ModifyEciScalingConfigurationRequestVolumesFlexVolume extends $dara.Model {
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
   * The list of options for the FlexVolume object. The options are passed as key-value pairs in JSON format.
   * 
   * Example: When you mount a cloud disk by using FlexVolume, the format of Options is `{"volumeId":"d-2zehdahrwoa7srg****","performanceLevel": "PL2"}`.
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

export class ModifyEciScalingConfigurationRequestVolumesHostPathVolume extends $dara.Model {
  /**
   * @remarks
   * The absolute path on the host.
   * 
   * @example
   * /xx/xx/name
   */
  path?: string;
  /**
   * @remarks
   * The type of the host directory, such as File, Directory, or Socket.
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

export class ModifyEciScalingConfigurationRequestVolumesNFSVolume extends $dara.Model {
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
   * Specifies whether the NFS volume is read-only.
   * 
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
   * 3f9cd4a596-n****.cn-shanghai.nas.aliyuncs.com
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

export class ModifyEciScalingConfigurationRequestVolumesConfigFileVolumeConfigFileToPath extends $dara.Model {
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
   * The directory permissions for the ConfigFileVolume.
   * 
   * @example
   * 0644
   */
  mode?: number;
  /**
   * @remarks
   * The relative file path.
   * 
   * @example
   * /usr/bin/
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

export class ModifyEciScalingConfigurationRequestVolumes extends $dara.Model {
  diskVolume?: ModifyEciScalingConfigurationRequestVolumesDiskVolume;
  emptyDirVolume?: ModifyEciScalingConfigurationRequestVolumesEmptyDirVolume;
  flexVolume?: ModifyEciScalingConfigurationRequestVolumesFlexVolume;
  hostPathVolume?: ModifyEciScalingConfigurationRequestVolumesHostPathVolume;
  NFSVolume?: ModifyEciScalingConfigurationRequestVolumesNFSVolume;
  /**
   * @remarks
   * The list of configuration file paths.
   */
  configFileVolumeConfigFileToPath?: ModifyEciScalingConfigurationRequestVolumesConfigFileVolumeConfigFileToPath[];
  /**
   * @remarks
   * The default permissions for the ConfigFileVolume.
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
   * - EmptyDirVolume
   * - NFSVolume
   * - ConfigFileVolume
   * - FlexVolume
   * 
   * @example
   * EmptyDirVolume
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      diskVolume: 'DiskVolume',
      emptyDirVolume: 'EmptyDirVolume',
      flexVolume: 'FlexVolume',
      hostPathVolume: 'HostPathVolume',
      NFSVolume: 'NFSVolume',
      configFileVolumeConfigFileToPath: 'ConfigFileVolumeConfigFileToPath',
      configFileVolumeDefaultMode: 'ConfigFileVolumeDefaultMode',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskVolume: ModifyEciScalingConfigurationRequestVolumesDiskVolume,
      emptyDirVolume: ModifyEciScalingConfigurationRequestVolumesEmptyDirVolume,
      flexVolume: ModifyEciScalingConfigurationRequestVolumesFlexVolume,
      hostPathVolume: ModifyEciScalingConfigurationRequestVolumesHostPathVolume,
      NFSVolume: ModifyEciScalingConfigurationRequestVolumesNFSVolume,
      configFileVolumeConfigFileToPath: { 'type': 'array', 'itemType': ModifyEciScalingConfigurationRequestVolumesConfigFileVolumeConfigFileToPath },
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
    if(Array.isArray(this.configFileVolumeConfigFileToPath)) {
      $dara.Model.validateArray(this.configFileVolumeConfigFileToPath);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyEciScalingConfigurationRequest extends $dara.Model {
  /**
   * @remarks
   * The information about ACR Enterprise Edition instances.
   */
  acrRegistryInfos?: ModifyEciScalingConfigurationRequestAcrRegistryInfos[];
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
   * Specifies whether automatic creation of an elastic IP address (EIP) is enabled and the EIP is attached to the ECI instance.
   * 
   * @example
   * true
   */
  autoCreateEip?: boolean;
  /**
   * @remarks
   * Specifies whether to automatically match an image cache.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  autoMatchImageCache?: boolean;
  /**
   * @remarks
   * The name of the ECI, which is the name of the container group. The name must meet the following requirements:
   * 
   * - The name must be 2 to 128 characters in length.
   * - The name can contain lowercase letters, digits, and hyphens (-), and cannot start or end with a hyphen (-).
   * 
   * @example
   * nginx-test
   */
  containerGroupName?: string;
  /**
   * @remarks
   * The list of containers.
   */
  containers?: ModifyEciScalingConfigurationRequestContainers[];
  /**
   * @remarks
   * The control parameter for the update method of the Containers parameter. Valid values:
   * 
   * - RenewUpdate: full update. The Containers parameter in the update request prevails and overwrites the original Containers parameter configuration.
   * - IncrementalUpdate: incremental update. Containers are matched based on Container.name, and only the parameters specified in the request are updated.
   * 
   * Default value: RenewUpdate.
   * 
   * @example
   * RenewUpdate
   */
  containersUpdateType?: string;
  /**
   * @remarks
   * Specifies whether to enable cost optimization. Valid values:
   * 
   * - true: Enabled.
   * - false: Disabled.
   * 
   * Default value: false.
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
   * 
   * > For more information about ESSD AutoPL cloud disks, see [ESSD AutoPL cloud disks](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * false
   */
  dataCacheBurstingEnabled?: boolean;
  /**
   * @remarks
   * The performance level of the cloud disk used for data caching. Use ESSDs. Valid values for the performance level of an ESSD:
   * 
   * - PL0: A single ESSD can deliver up to 10,000 random read/write IOPS.
   * - PL1: A single ESSD can deliver up to 50,000 random read/write IOPS.
   * - PL2: A single ESSD can deliver up to 100,000 random read/write IOPS.
   * - PL3: A single ESSD can deliver up to 1,000,000 random read/write IOPS.
   * 
   * Default value: PL1.
   * 
   * > For more information about ESSDs, see [ESSDs](https://help.aliyun.com/document_detail/122389.html).
   * 
   * @example
   * PL1
   */
  dataCachePL?: string;
  /**
   * @remarks
   * The provisioned read and write IOPS of the ESSD AutoPL cloud disk used for data caching. Valid values: 0 to min{50000, 1000 × capacity - baseline performance}, where baseline performance = min{1800 + 50 × capacity, 50000}.
   * 
   * > For more information about ESSD AutoPL cloud disks, see [ESSD AutoPL cloud disks](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * 40000
   */
  dataCacheProvisionedIops?: number;
  /**
   * @remarks
   * > This parameter is not available.
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
  dnsConfigOptions?: ModifyEciScalingConfigurationRequestDnsConfigOptions[];
  /**
   * @remarks
   * The list of DNS search domains.
   */
  dnsConfigSearchs?: string[];
  /**
   * @remarks
   * The DNS policy. Valid values:
   * 
   * - None: uses the DNS settings specified in the DnsConfig field.
   * 
   * - Default: inherits the DNS settings from the runtime environment.
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
   * The bandwidth of the EIP.
   * 
   * Default value: 5 Mbit/s.
   * 
   * @example
   * 5
   */
  eipBandwidth?: number;
  /**
   * @remarks
   * > This parameter is not available.
   * 
   * @example
   * false
   */
  enableSls?: boolean;
  /**
   * @remarks
   * The size of the temporary storage space. By default, PL1 ESSDs are used. Unit: GiB.
   * 
   * @example
   * 20
   */
  ephemeralStorage?: number;
  /**
   * @remarks
   * The specified GPU driver version. Valid values:
   * - tesla=470.82.01 (default)
   * - tesla=525.85.12
   * 
   * > Only specific instance types support switching the GPU driver version. For more information, see [Create an instance by specifying a GPU instance type](https://help.aliyun.com/document_detail/2579486.html).
   * 
   * @example
   * tesla=525.85.12
   */
  gpuDriverVersion?: string;
  /**
   * @remarks
   * The host-related information.
   */
  hostAliases?: ModifyEciScalingConfigurationRequestHostAliases[];
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
  imageRegistryCredentials?: ModifyEciScalingConfigurationRequestImageRegistryCredentials[];
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
  initContainers?: ModifyEciScalingConfigurationRequestInitContainers[];
  /**
   * @remarks
   * The level of the instance family. This parameter is used to filter instance types that meet your requirements and takes effect only when CostOptimization is set to true. Valid values:
   * 
   * - EntryLevel: shared instance types. Shared instance types are more cost-effective but cannot guarantee stable computing performance. They are suitable for business scenarios with low CPU utilization. For more information, see [Shared instance families](https://help.aliyun.com/document_detail/108489.html).
   * - EnterpriseLevel: enterprise-level instance types. Enterprise-level instance types provide stable performance and dedicated resources. They are suitable for business scenarios that require high stability. For more information, see [Instance families](https://help.aliyun.com/document_detail/25378.html).
   * - CreditEntryLevel: burstable instance types. Burstable instance types use CPU credits to ensure computing performance. They are suitable for business scenarios with low CPU utilization but occasional CPU usage spikes. For more information, see [Overview of burstable instances](https://help.aliyun.com/document_detail/59977.html).
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
   * The weight of the backend server. Valid values: 1 to 100.
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
  /**
   * @remarks
   * Specifies whether to overwrite. Valid values:
   * 
   * - true: Overwrite.
   * - false: Do not overwrite.
   * 
   * @example
   * false
   */
  override?: boolean;
  ownerId?: number;
  /**
   * @remarks
   * The name of the RAM role for the instance. ECIs and ECS instances share the same instance RAM roles. For more information, see [Use an instance RAM role by calling API operations](https://help.aliyun.com/document_detail/61178.html).
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
   * The restart policy of the instance. Valid values:
   * - Always: always restarts the instance.
   * - Never: never restarts the instance.
   * - OnFailure: restarts the instance when it fails.
   * 
   * Default value: Always.
   * 
   * @example
   * Always
   */
  restartPolicy?: string;
  /**
   * @remarks
   * The ID of the scaling configuration to be modified.
   * 
   * This parameter is required.
   * 
   * @example
   * asc-bp16har3jpj6fjbx****
   */
  scalingConfigurationId?: string;
  /**
   * @remarks
   * The name of the scaling configuration. The name must be 2 to 64 characters in length, and can contain digits, letters, and Chinese characters. It must start with a digit, a letter, or a Chinese character, and can contain digits, underscores (_), hyphens (-), and periods (.).
   * 
   * The name of a scaling configuration must be unique within a scaling group in a region. If you do not specify this parameter, the ID of the scaling configuration is used by default.
   * 
   * @example
   * test-modify
   */
  scalingConfigurationName?: string;
  /**
   * @remarks
   * The system information of the contextual security context in which the instance runs.
   */
  securityContextSysCtls?: ModifyEciScalingConfigurationRequestSecurityContextSysCtls[];
  /**
   * @remarks
   * The ID of the security group to which the ECI instance belongs. ECI instances in the same security group can access each other.
   * 
   * If you do not specify a security group, the system automatically uses the default security group in the selected region. You must ensure that the inbound rules of the security group include the protocols and ports that the containers need to expose. If no default security group exists in the region, the system performs automatic creation of a default security group and adds the declared container protocols and ports to the inbound rules of the security group.
   * 
   * @example
   * sg-uf66jeqopgqa9hdn****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The maximum hourly price for the spot instance. The value can be accurate to three decimal places.
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
   * - NoSpot: applies to regular pay-as-you-go instances.
   * - SpotWithPriceLimit: applies to spot instances that have maximum hourly prices.
   * - SpotAsPriceGo: applies to spot instances whose prices are automatically set by the system based on the current market price.
   * 
   * Default value: NoSpot.
   * 
   * @example
   * SpotPriceLimit
   */
  spotStrategy?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: ModifyEciScalingConfigurationRequestTags[];
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
  volumes?: ModifyEciScalingConfigurationRequestVolumes[];
  static names(): { [key: string]: string } {
    return {
      acrRegistryInfos: 'AcrRegistryInfos',
      activeDeadlineSeconds: 'ActiveDeadlineSeconds',
      autoCreateEip: 'AutoCreateEip',
      autoMatchImageCache: 'AutoMatchImageCache',
      containerGroupName: 'ContainerGroupName',
      containers: 'Containers',
      containersUpdateType: 'ContainersUpdateType',
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
      override: 'Override',
      ownerId: 'OwnerId',
      ramRoleName: 'RamRoleName',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      restartPolicy: 'RestartPolicy',
      scalingConfigurationId: 'ScalingConfigurationId',
      scalingConfigurationName: 'ScalingConfigurationName',
      securityContextSysCtls: 'SecurityContextSysCtls',
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
      acrRegistryInfos: { 'type': 'array', 'itemType': ModifyEciScalingConfigurationRequestAcrRegistryInfos },
      activeDeadlineSeconds: 'number',
      autoCreateEip: 'boolean',
      autoMatchImageCache: 'boolean',
      containerGroupName: 'string',
      containers: { 'type': 'array', 'itemType': ModifyEciScalingConfigurationRequestContainers },
      containersUpdateType: 'string',
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
      dnsConfigOptions: { 'type': 'array', 'itemType': ModifyEciScalingConfigurationRequestDnsConfigOptions },
      dnsConfigSearchs: { 'type': 'array', 'itemType': 'string' },
      dnsPolicy: 'string',
      egressBandwidth: 'number',
      eipBandwidth: 'number',
      enableSls: 'boolean',
      ephemeralStorage: 'number',
      gpuDriverVersion: 'string',
      hostAliases: { 'type': 'array', 'itemType': ModifyEciScalingConfigurationRequestHostAliases },
      hostName: 'string',
      imageRegistryCredentials: { 'type': 'array', 'itemType': ModifyEciScalingConfigurationRequestImageRegistryCredentials },
      imageSnapshotId: 'string',
      ingressBandwidth: 'number',
      initContainers: { 'type': 'array', 'itemType': ModifyEciScalingConfigurationRequestInitContainers },
      instanceFamilyLevel: 'string',
      instanceTypes: { 'type': 'array', 'itemType': 'string' },
      ipv6AddressCount: 'number',
      loadBalancerWeight: 'number',
      memory: 'number',
      ntpServers: { 'type': 'array', 'itemType': 'string' },
      override: 'boolean',
      ownerId: 'number',
      ramRoleName: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      restartPolicy: 'string',
      scalingConfigurationId: 'string',
      scalingConfigurationName: 'string',
      securityContextSysCtls: { 'type': 'array', 'itemType': ModifyEciScalingConfigurationRequestSecurityContextSysCtls },
      securityGroupId: 'string',
      spotPriceLimit: 'number',
      spotStrategy: 'string',
      tags: { 'type': 'array', 'itemType': ModifyEciScalingConfigurationRequestTags },
      terminationGracePeriodSeconds: 'number',
      volumes: { 'type': 'array', 'itemType': ModifyEciScalingConfigurationRequestVolumes },
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
    if(Array.isArray(this.securityContextSysCtls)) {
      $dara.Model.validateArray(this.securityContextSysCtls);
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

