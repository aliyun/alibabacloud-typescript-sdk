// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEciScalingConfigurationRequestAcrRegistryInfos extends $dara.Model {
  /**
   * @remarks
   * The domain names of the Container Registry Enterprise Edition instances. By default, all domain names are displayed. Separate multiple domain names with commas (,).
   */
  domains?: string[];
  /**
   * @remarks
   * The ID of the Container Registry Enterprise Edition instance.
   * 
   * @example
   * cri-nwj395hgf6f3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the Container Registry Enterprise Edition instance.
   * 
   * @example
   * acr-test
   */
  instanceName?: string;
  /**
   * @remarks
   * The region ID of the Container Registry Enterprise Edition instance.
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
  path?: string;
  port?: number;
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
  failureThreshold?: number;
  httpGet?: CreateEciScalingConfigurationRequestContainersLivenessProbeHttpGet;
  initialDelaySeconds?: number;
  periodSeconds?: number;
  successThreshold?: number;
  tcpSocket?: CreateEciScalingConfigurationRequestContainersLivenessProbeTcpSocket;
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
  path?: string;
  port?: number;
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
  failureThreshold?: number;
  httpGet?: CreateEciScalingConfigurationRequestContainersReadinessProbeHttpGet;
  initialDelaySeconds?: number;
  periodSeconds?: number;
  successThreshold?: number;
  tcpSocket?: CreateEciScalingConfigurationRequestContainersReadinessProbeTcpSocket;
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
  readOnlyRootFilesystem?: boolean;
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
   * >  This parameter is unavailable for use.
   * 
   * @example
   * fieldPath
   */
  fieldRefFieldPath?: string;
  /**
   * @remarks
   * The name of the environment variable. The name can be 1 to 128 characters in length and can contain letters, underscores (_), and digits. It cannot start with a digit. Specify the value in the [0-9a-zA-Z] format.
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
   * The port. Valid values: 1 to 65535.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * The type of the protocol. Valid values:
   * 
   * *   TCP.
   * *   UDP
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
   * The directory in which the container mounts the volume.
   * 
   * >  Data in this directory is overwritten by data on the volume. Specify this parameter with caution.
   * 
   * @example
   * /pod/data
   */
  mountPath?: string;
  /**
   * @remarks
   * The mount propagation setting. Mount propagation enables volume sharing from one container to other containers within the same pod or to containers across separate pods on the same node. Valid values:
   * 
   * *   None: Subsequent mounts executed on the volume or its subdirectories are not propagated to the volume.
   * *   HostToCotainer: Subsequent mounts executed on the volume or its subdirectories are propagated to the volume.
   * *   Bidirectional: This value is similar to HostToCotainer. Subsequent mounts executed on the volume or its subdirectories are propagated to the volume. All volume mounts executed on the container are not only propagate back to the underlying host but also to all containers across every pod that uses the same volume.
   * 
   * Default value: None.
   * 
   * @example
   * None
   */
  mountPropagation?: string;
  /**
   * @remarks
   * The volume name. The value of this parameter is the same as the value of Volumes.Name.
   * 
   * @example
   * default-volume1
   */
  name?: string;
  /**
   * @remarks
   * Specifies whether the volume is read-only. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  readOnly?: boolean;
  /**
   * @remarks
   * The volume subdirectory.
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
   * The startup arguments of the container. You can specify up to 10 arguments.
   */
  args?: string[];
  /**
   * @remarks
   * The commands that you want to run by using the CLI for liveness probing within the container.
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
  environmentVars?: CreateEciScalingConfigurationRequestContainersEnvironmentVars[];
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
   * The image in the container.
   * 
   * @example
   * registry-vpc.cn-hangzhou.aliyuncs.com/eci_open/nginx:latest
   */
  image?: string;
  /**
   * @remarks
   * The image pulling policy. Valid values:
   * 
   * *   Always: Each time instances are created, image pulling is performed.
   * *   IfNotPresent: Image pulling is performed based on your business requirements. On-premises images are used by default. If no on-premises images are available, images are pulled from remote sources.
   * *   Never: Image pulling is not performed. On-premises images are always used. Image pulling is not performed.
   * 
   * @example
   * Always
   */
  imagePullPolicy?: string;
  /**
   * @remarks
   * The commands that you want to run by using the CLI to configure the postStart callback function within the container.
   */
  lifecyclePostStartHandlerExecs?: string[];
  /**
   * @remarks
   * The IP address of the host to which you want to send HTTP GET requests to configure the postStart callback function.
   * 
   * @example
   * 10.0.XX.XX
   */
  lifecyclePostStartHandlerHttpGetHost?: string;
  /**
   * @remarks
   * The path to which you want to send HTTP GET requests to configure the postStart callback function.
   * 
   * @example
   * /healthyz
   */
  lifecyclePostStartHandlerHttpGetPath?: string;
  /**
   * @remarks
   * The port over which you want to send HTTP GET requests to configure the postStart callback function.
   * 
   * @example
   * 5050
   */
  lifecyclePostStartHandlerHttpGetPort?: number;
  /**
   * @remarks
   * The protocol type of HTTP GET requests that you want to send to configure the postStart callback function. Valid values:
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
   * The IP address of the host detected by the TCP sockets that you want to use to configure the postStart callback function.
   * 
   * @example
   * 10.0.XX.XX
   */
  lifecyclePostStartHandlerTcpSocketHost?: string;
  /**
   * @remarks
   * The port detected by the TCP sockets that you want to use to configure the postStart callback function.
   * 
   * @example
   * 80
   */
  lifecyclePostStartHandlerTcpSocketPort?: number;
  /**
   * @remarks
   * The commands that you want to run by using the CLI to configure the preStop callback function within the container.
   */
  lifecyclePreStopHandlerExecs?: string[];
  /**
   * @remarks
   * The IP address of the host to which you want to send HTTP GET requests to configure the preStop callback function.
   * 
   * @example
   * 10.0.XX.XX
   */
  lifecyclePreStopHandlerHttpGetHost?: string;
  /**
   * @remarks
   * The path to which you want to send HTTP GET requests to configure the preStop callback function.
   * 
   * @example
   * /healthyz
   */
  lifecyclePreStopHandlerHttpGetPath?: string;
  /**
   * @remarks
   * The port over which you want to send HTTP GET requests to configure the preStop callback function.
   * 
   * @example
   * 88
   */
  lifecyclePreStopHandlerHttpGetPort?: number;
  /**
   * @remarks
   * The protocol type of the HTTP GET requests that you want to send to configure the preStop callback function. Valid values:
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
   * The IP address of the host detected by the TCP sockets that you want to use to configure the preStop callback function.
   * 
   * @example
   * 10.0.XX.XX
   */
  lifecyclePreStopHandlerTcpSocketHost?: string;
  /**
   * @remarks
   * The port detected by the TCP sockets that you want to use to configure the preStop callback function.
   * 
   * @example
   * 90
   */
  lifecyclePreStopHandlerTcpSocketPort?: number;
  /**
   * @remarks
   * The memory size that you want to allocate to the container. Unit: GiB.
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
  ports?: CreateEciScalingConfigurationRequestContainersPorts[];
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
   * Specifies whether standard input streams remain connected during multiple sessions if Stdin is set to true.
   * 
   * If you set StdinOnce to true, standard input streams are connected after the container is started, and remain idle until a client is connected to receive data. After the client is disconnected, streams are also disconnected and remain disconnected until the container is restarted.
   * 
   * @example
   * false
   */
  stdinOnce?: boolean;
  /**
   * @remarks
   * Specifies whether to enable interaction. Valid values:
   * 
   * *   true
   * *   false
   * 
   * If the command is a /bin/bash command, set the value to true.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  tty?: boolean;
  /**
   * @remarks
   * The volume mounts of the container.
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
   * The variable name of the option.
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * The variable value of the option.
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
   * The hostnames of the containers that you want to add.
   */
  hostnames?: string[];
  /**
   * @remarks
   * The IP address of the container that you want to add.
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
   * The password of the image repository.
   * 
   * @example
   * yourpaasword
   */
  password?: string;
  /**
   * @remarks
   * The endpoint of the image repository.
   * 
   * @example
   * registry-vpc.cn-shanghai.aliyuncs.com
   */
  server?: string;
  /**
   * @remarks
   * The username of the image repository.
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
  readOnlyRootFilesystem?: boolean;
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
   * >  This parameter is unavailable for use.
   * 
   * @example
   * path
   */
  fieldRefFieldPath?: string;
  /**
   * @remarks
   * The name of the environment variable. The name can be 1 to 128 characters in length and can contain letters, underscores (_), and digits. It cannot start with a digit. Specify the value in the `[0-9a-zA-Z]` format.
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
   * *   TCP
   * *   UDP
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
   * The directory to which the init container mounts the volume. The data stored in this directory is overwritten by the data on the volume. Specify this parameter with caution.
   * 
   * @example
   * /usr/share/
   */
  mountPath?: string;
  /**
   * @remarks
   * The mount propagation settings of the volume. Mount propagation enables volume sharing from one container to other containers within the same pod or to containers across separate pods on the same node. Valid values:
   * 
   * *   None: Subsequent mounts executed on the volume or its subdirectories do not propagate to the volume.
   * *   HostToCotainer: Subsequent mounts executed on the volume or its subdirectories propagate to the volume.
   * *   Bidirectional: This value is similar to HostToCotainer. Subsequent mounts executed on the volume or its subdirectories propagate to the volume. All volume mounts executed on the container not only propagate back to the underlying host but also to all containers across every pod that uses the same volume.
   * 
   * @example
   * None
   */
  mountPropagation?: string;
  /**
   * @remarks
   * The name of the volume.
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
   * The subdirectory of the volume. The pod can mount different directories of the same volume to different subdirectories of init containers.
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
   * The startup arguments of the init container. You can specify up to 10 arguments.
   */
  args?: string[];
  /**
   * @remarks
   * The startup commands of the init container.
   */
  commands?: string[];
  /**
   * @remarks
   * The number of vCPUs per init container.
   * 
   * @example
   * 0.5
   */
  cpu?: number;
  /**
   * @remarks
   * The number of GPUs per init container.
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
   * The image pulling policy.
   * 
   * @example
   * Always
   */
  imagePullPolicy?: string;
  /**
   * @remarks
   * The environment variables of the init container.
   */
  initContainerEnvironmentVars?: CreateEciScalingConfigurationRequestInitContainersInitContainerEnvironmentVars[];
  /**
   * @remarks
   * The ports of init containers.
   */
  initContainerPorts?: CreateEciScalingConfigurationRequestInitContainersInitContainerPorts[];
  /**
   * @remarks
   * The volume mounts of the init container.
   */
  initContainerVolumeMounts?: CreateEciScalingConfigurationRequestInitContainersInitContainerVolumeMounts[];
  /**
   * @remarks
   * The memory size per init container. Unit: GiB.
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
   * The working directory of the init container.
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
   * The variable name of the security context in which the container group runs.
   * 
   * @example
   * kernel.msgmax
   */
  name?: string;
  /**
   * @remarks
   * The variable value of the security context in which the elastic container instance runs.
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
   * The tag key of the elastic container instance.
   * 
   * The tag key cannot be an empty string. The tag key can be up to 128 characters in length. It cannot start with `acs:` or `aliyun` or contain `http://` or `https://`.
   * 
   * @example
   * version
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the elastic container instance.
   * 
   * The tag value can be an empty string. The tag value can be up to 128 characters in length. It cannot start with `acs:` and cannot contain `http://` or `https://`.
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
  diskId?: string;
  diskSize?: number;
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
  medium?: string;
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
  driver?: string;
  fsType?: string;
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
  path?: string;
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
  path?: string;
  readOnly?: boolean;
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
   * The permissions on the configuration file.
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
   * The paths to the configuration files.
   */
  configFileVolumeConfigFileToPaths?: CreateEciScalingConfigurationRequestVolumesConfigFileVolumeConfigFileToPaths[];
  /**
   * @remarks
   * The default permissions on the ConfigFile volume.
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
   * The type of the Host directory. Examples: File, Directory, and Socket.
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
   * The Container Registry Enterprise Edition instances.
   */
  acrRegistryInfos?: CreateEciScalingConfigurationRequestAcrRegistryInfos[];
  /**
   * @remarks
   * The validity period of the scaling configuration. Unit: seconds.
   * 
   * @example
   * 1000
   */
  activeDeadlineSeconds?: number;
  /**
   * @remarks
   * Specifies whether to automatically create elastic IP addresses (EIPs) and bind the EIPs to elastic container instances.
   * 
   * @example
   * true
   */
  autoCreateEip?: boolean;
  /**
   * @remarks
   * Specifies whether to automatically match the image cache. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  autoMatchImageCache?: boolean;
  /**
   * @remarks
   * The name series of elastic container instances.
   * 
   * If you want to use an ordered instance name, specify the value for this parameter in the following format: name_prefix[begin_number,bits]name_suffix.
   * 
   * @example
   * nginx-test
   */
  containerGroupName?: string;
  /**
   * @remarks
   * The containers per elastic container instance.
   */
  containers?: CreateEciScalingConfigurationRequestContainers[];
  /**
   * @remarks
   * Specifies whether to enable the Cost Optimization feature. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  costOptimization?: boolean;
  /**
   * @remarks
   * The number of vCPUs per elastic container instance.
   * 
   * @example
   * 1.0
   */
  cpu?: number;
  /**
   * @remarks
   * The number of physical CPU cores. You can specify this parameter for specific instance types. For more information, see [Specify CPU options](https://help.aliyun.com/document_detail/197781.html).
   * 
   * @example
   * 2
   */
  cpuOptionsCore?: number;
  /**
   * @remarks
   * The number of threads per core. You can specify this parameter for specific instance types. A value of 1 specifies that Hyper-Threading is disabled. For more information, see [Specify CPU options](https://help.aliyun.com/document_detail/197781.html).
   * 
   * @example
   * 2
   */
  cpuOptionsThreadsPerCore?: number;
  /**
   * @remarks
   * The bucket that you want to use to store data caches.
   * 
   * @example
   * default
   */
  dataCacheBucket?: string;
  /**
   * @remarks
   * Specifies whether to enable the performance burst feature when ESSD AutoPL disks are used to store data caches. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: false.
   * 
   * >  For more information about ESSD AutoPL disks, see [ESSD AutoPL disks](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * false
   */
  dataCacheBurstingEnabled?: boolean;
  /**
   * @remarks
   * The PL of the cloud disk that you want to use to store data caches. We recommend that you use ESSDs. Valid values:
   * 
   * *   PL0: An ESSD can provide up to 10,000 random read/write IOPS.
   * *   PL1: An ESSD can provide up to 50,000 random read/write IOPS.
   * *   PL2: An ESSD can provide up to 100,000 random read/write IOPS.
   * *   PL3: An ESSD can provide up to 1,000,000 random read/write IOPS.
   * 
   * Default value: PL1.
   * 
   * >  For more information about ESSDs, see [ESSDs](https://help.aliyun.com/document_detail/122389.html).
   * 
   * @example
   * PL1
   */
  dataCachePL?: string;
  /**
   * @remarks
   * The provisioned IOPS of the ESSD AutoPL disk that you want to use to store data caches. Valid values: 0 to min{50,000, 1,000 × *Capacity - Baseline IOPS}. Baseline IOPS = min{1,800 + 50 × *Capacity, 50,000}.
   * 
   * >  For more information about ESSD AutoPL disks, see [ESSD AutoPL disks](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * 40000
   */
  dataCacheProvisionedIops?: number;
  /**
   * @remarks
   * >  This parameter is unavailable for use.
   * 
   * @example
   * desc
   */
  description?: string;
  /**
   * @remarks
   * The IP addresses of the DNS servers.
   */
  dnsConfigNameServers?: string[];
  /**
   * @remarks
   * The options. Each option is a name-value pair. The value in the name-value pair is optional.
   */
  dnsConfigOptions?: CreateEciScalingConfigurationRequestDnsConfigOptions[];
  /**
   * @remarks
   * The search domains of the DNS servers.
   */
  dnsConfigSearchs?: string[];
  /**
   * @remarks
   * The Domain Name System (DNS) policy. Valid values:
   * 
   * *   None: uses the DNS that is specified by DnsConfig.
   * *   Default: uses the DNS that is specified for the runtime environment.
   * 
   * @example
   * Default
   */
  dnsPolicy?: string;
  /**
   * @remarks
   * The maximum outbound bandwidth. Unit: bit/s.
   * 
   * @example
   * 1024000
   */
  egressBandwidth?: number;
  /**
   * @remarks
   * The EIP bandwidth. Default value: 5. Unit: Mbit/s.
   * 
   * @example
   * 5
   */
  eipBandwidth?: number;
  /**
   * @remarks
   * >  This parameter is unavailable for use.
   * 
   * @example
   * false
   */
  enableSls?: boolean;
  /**
   * @remarks
   * The size of the temporary storage space. By default, an Enterprise SSD (ESSD) of performance level 1 (PL1) is used. Unit: GiB.
   * 
   * @example
   * 20
   */
  ephemeralStorage?: number;
  /**
   * @remarks
   * The version of the GPU driver. Valid values:
   * 
   * *   tesla=470.82.01 (default)
   * *   tesla=525.85.12
   * 
   * >  You can switch the GPU driver version only for a few Elastic Compute Service (ECS) instance types. For more information, see [Specify GPU-accelerated ECS instance types to create an elastic container instance](https://help.aliyun.com/document_detail/2579486.html).
   * 
   * @example
   * tesla=525.85.12
   */
  gpuDriverVersion?: string;
  /**
   * @remarks
   * The custom hostnames of the containers.
   */
  hostAliases?: CreateEciScalingConfigurationRequestHostAliases[];
  /**
   * @remarks
   * The hostname series of elastic container instances.
   * 
   * @example
   * test
   */
  hostName?: string;
  /**
   * @remarks
   * The image repositories.
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
   * The maximum inbound bandwidth. Unit: bit/s.
   * 
   * @example
   * 1024000
   */
  ingressBandwidth?: number;
  /**
   * @remarks
   * The init containers.
   */
  initContainers?: CreateEciScalingConfigurationRequestInitContainers[];
  /**
   * @remarks
   * The level of the instance family. You can specify this parameter to match the available instance types. This parameter takes effect only if you set `CostOptimization` to true. Valid values:
   * 
   * *   EntryLevel: entry level (shared instance types). Instance types of this level are the most cost-effective, but may not ensure stable computing performance. Instance types of this level are suitable for scenarios in which the CPU utilization is low. For more information, see [Shared instance families](https://help.aliyun.com/document_detail/108489.html).
   * *   EnterpriseLevel: enterprise level. Instance types of this level provide stable performance and dedicated resources, and are suitable for business scenarios that require high stability. For more information, see [Overview of instance families](https://help.aliyun.com/document_detail/25378.html).
   * *   CreditEntryLevel: credit-based entry level (burstable instance types). CPU credits are used to ensure computing performance. Instance types of this level are suitable for scenarios in which the CPU utilization is low but may fluctuate in specific cases. For more information, see [Overview](https://help.aliyun.com/document_detail/59977.html) of burstable instances.
   * 
   * @example
   * EnterpriseLevel
   */
  instanceFamilyLevel?: string;
  /**
   * @remarks
   * The ECS instance types that you want to use to create elastic container instances. You can specify up to five ECS instance types.
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
   * The load balancing weight of each elastic container instance. Valid values: 1 to 100.
   * 
   * Default value: 50.
   * 
   * @example
   * 50
   */
  loadBalancerWeight?: number;
  /**
   * @remarks
   * The memory size per elastic container instance. Unit: GiB.
   * 
   * @example
   * 2.0
   */
  memory?: number;
  /**
   * @remarks
   * The endpoints of the Network Time Protocol (NTP) servers.
   */
  ntpServers?: string[];
  ownerId?: number;
  /**
   * @remarks
   * The name of the instance Resource Access Management (RAM) role. Elastic container instances and Elastic Compute Service (ECS) instances can share the same RAM role. For more information, see [RAM roles](https://help.aliyun.com/document_detail/61175.html).
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
   * The restart policy of elastic container instances. Valid values:
   * 
   * *   Always: always restarts elastic container instances.
   * *   Never: never restarts elastic container instances.
   * *   OnFailure: restarts elastic container instances upon failures.
   * 
   * Default value: Always.
   * 
   * @example
   * Always
   */
  restartPolicy?: string;
  /**
   * @remarks
   * The name of the scaling configuration. The name must be 2 to 64 characters in length and can contain letters, digits, underscores (_), hyphens (-), and periods (.). It must start with a letter or a digit.
   * 
   * The name of the scaling configuration must be unique in a scaling group within a region. If you do not specify this parameter, the value of ScalingConfigurationId is used.
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
   * The system information of the security context in which the elastic container instance runs.
   */
  securityContextSysctls?: CreateEciScalingConfigurationRequestSecurityContextSysctls[];
  /**
   * @remarks
   * The ID of the security group to which elastic container instances belong. Elastic container instances that belong to the same security group can communicate with each other.
   * 
   * If you do not specify a security group, the system uses the default security group in the region that you selected. Make sure that the inbound rules of the security group contain the protocols and port numbers of the containers that you want to expose. If you do not have a default security group in the region, the system creates a default security group, and then adds the container protocols and port numbers that you specified to the inbound rules of the security group.
   * 
   * @example
   * sg-uf66jeqopgqa9hdn****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The maximum hourly price of preemptible elastic container instances. The value can be accurate to three decimal places.
   * 
   * If you set SpotStrategy to SpotWithPriceLimit, you must specify SpotPriceLimit.
   * 
   * @example
   * 0.025
   */
  spotPriceLimit?: number;
  /**
   * @remarks
   * The instance bidding policy. Valid values:
   * 
   * *   NoSpot: The instances are created as pay-as-you-go instances.
   * *   SpotWithPriceLimit: The instances are preemptible instances for which you can specify the maximum hourly price.
   * *   SpotAsPriceGo: The instances are created as preemptible instances for which the market price at the time of purchase is used as the bid price.
   * 
   * Default value: NoSpot.
   * 
   * @example
   * SpotPriceLimit
   */
  spotStrategy?: string;
  /**
   * @remarks
   * The tags of elastic container instances. Tags must be specified as key-value pairs. You can specify up to 20 tags for each elastic container instance. When you specify Key and Value, take note of the following items:
   * 
   * *   A tag key can be up to 64 characters in length. The key cannot start with acs: or aliyun or contain `http://` or `https://`. You cannot specify an empty string as a tag key.
   * *   A tag value can be up to 128 characters in length. The value cannot start with acs: or aliyun or contain `http://` or `https://`. You can specify an empty string as a tag value.
   */
  tags?: CreateEciScalingConfigurationRequestTags[];
  /**
   * @remarks
   * The buffer time during which a program handles operations before the program stops. Unit: seconds.
   * 
   * @example
   * 60
   */
  terminationGracePeriodSeconds?: number;
  /**
   * @remarks
   * The volumes.
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

