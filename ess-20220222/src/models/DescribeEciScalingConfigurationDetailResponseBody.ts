// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationAcrRegistryInfos extends $dara.Model {
  /**
   * @remarks
   * The domain names of the ACR Enterprise instance. By default, all domain names of the instance are used. You can specify specific domain names and separate multiple domain names with commas (,).
   */
  domains?: string[];
  /**
   * @remarks
   * The instance ID of the ACR Enterprise instance.
   * 
   * @example
   * cri-nwj395hgf6f3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the ACR Enterprise instance.
   * 
   * @example
   * acr-test
   */
  instanceName?: string;
  /**
   * @remarks
   * The region to which the ACR Enterprise instance belongs.
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

export class DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationContainersEnvironmentVars extends $dara.Model {
  /**
   * @remarks
   * >This parameter is not available.
   * 
   * @example
   * fieldPath
   */
  fieldRefFieldPath?: string;
  /**
   * @remarks
   * The name of the environment variable.
   * 
   * @example
   * PATH
   */
  key?: string;
  /**
   * @remarks
   * The value of the environment variable.
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

export class DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationContainersPorts extends $dara.Model {
  /**
   * @remarks
   * The port number. Valid values: 1 to 65535.
   * 
   * @example
   * 8083
   */
  port?: number;
  /**
   * @remarks
   * The protocol type. Valid values:
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

export class DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationContainersVolumeMounts extends $dara.Model {
  /**
   * @remarks
   * The directory where the data volume is mounted in the container.
   * >Notice: The content in the mount directory of the container is directly overwritten by the content of the volume. Use this parameter with caution.
   * 
   * @example
   * /pod/data
   */
  mountPath?: string;
  /**
   * @remarks
   * The mount propagation settings of the data volume. Mount propagation allows volumes mounted by a container to be shared with other containers in the same pod, or even with other pods on the same node. Valid values:
   * - None: the volume does not perceive any subsequent mount operations performed on the volume or its subdirectories.
   * - HostToCotainer: the volume perceives subsequent mount operations performed on the volume or its subdirectories.
   * - Bidirectional: similar to HostToCotainer, the volume perceives mount operations. Additionally, the volume is propagated back to the host and to all containers of all pods that use the same volume.
   * Default value: None.
   * 
   * @example
   * None
   */
  mountPropagation?: string;
  /**
   * @remarks
   * The name of the mounted data volume.
   * 
   * @example
   * default-volume1
   */
  name?: string;
  /**
   * @remarks
   * Specifies whether the data volume is read-only.
   * Default value: false.
   * 
   * @example
   * true
   */
  readOnly?: boolean;
  /**
   * @remarks
   * The subpath of the data volume.
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

export class DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationContainers extends $dara.Model {
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
   * The number of vCPUs.
   * 
   * @example
   * 2
   */
  cpu?: number;
  /**
   * @remarks
   * The environment variable information.
   */
  environmentVars?: DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationContainersEnvironmentVars[];
  /**
   * @remarks
   * The number of GPUs.
   * 
   * @example
   * 2
   */
  gpu?: number;
  /**
   * @remarks
   * The container image.
   * 
   * @example
   * registry-vpc.aliyuncs.com/eci_open/alpine:3.5
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
   * The commands executed in the container when the postStart callback function is configured by using the command line.
   */
  lifecyclePostStartHandlerExecs?: string[];
  /**
   * @remarks
   * The host address that receives HTTP GET requests when the postStart callback function is configured by using HTTP requests.
   * 
   * @example
   * 10.0.XX.XX
   */
  lifecyclePostStartHandlerHttpGetHost?: string;
  /**
   * @remarks
   * The path checked by HTTP GET requests when the postStart callback function is configured by using HTTP requests.
   * 
   * @example
   * /healthyz
   */
  lifecyclePostStartHandlerHttpGetPath?: string;
  /**
   * @remarks
   * The port number checked by HTTP GET requests when the postStart callback function is configured by using HTTP requests.
   * 
   * @example
   * 80
   */
  lifecyclePostStartHandlerHttpGetPort?: number;
  /**
   * @remarks
   * The protocol type used for HTTP GET requests when the postStart callback function is configured by using HTTP requests.
   * 
   * @example
   * HTTP
   */
  lifecyclePostStartHandlerHttpGetScheme?: string;
  /**
   * @remarks
   * The host address checked by TCP sockets when the postStart callback function is configured by using TCP sockets.
   * 
   * @example
   * 10.0.XX.XX
   */
  lifecyclePostStartHandlerTcpSocketHost?: string;
  /**
   * @remarks
   * The port checked by TCP sockets when the postStart callback function is configured by using TCP sockets.
   * 
   * @example
   * 80
   */
  lifecyclePostStartHandlerTcpSocketPort?: number;
  /**
   * @remarks
   * The commands executed in the container when the preStop callback function is configured by using the command line.
   */
  lifecyclePreStopHandlerExecs?: string[];
  /**
   * @remarks
   * The host address that receives HTTP GET requests when the preStop callback function is configured by using HTTP requests.
   * 
   * @example
   * 10.0.XX.XX
   */
  lifecyclePreStopHandlerHttpGetHost?: string;
  /**
   * @remarks
   * The path checked by HTTP GET requests when the preStop callback function is configured by using HTTP requests.
   * 
   * @example
   * /healthyz
   */
  lifecyclePreStopHandlerHttpGetPath?: string;
  /**
   * @remarks
   * The port number checked by HTTP GET requests when the preStop callback function is configured by using HTTP requests.
   * 
   * @example
   * 80
   */
  lifecyclePreStopHandlerHttpGetPort?: number;
  /**
   * @remarks
   * The protocol type used for HTTP GET requests when the preStop callback function is configured by using HTTP requests.
   * 
   * @example
   * HTTP
   */
  lifecyclePreStopHandlerHttpGetScheme?: string;
  /**
   * @remarks
   * The host address checked by TCP sockets when the preStop callback function is configured by using TCP sockets.
   * 
   * @example
   * 10.0.XX.XX
   */
  lifecyclePreStopHandlerTcpSocketHost?: string;
  /**
   * @remarks
   * The port checked by TCP sockets when the preStop callback function is configured by using TCP sockets.
   * 
   * @example
   * 80
   */
  lifecyclePreStopHandlerTcpSocketPort?: number;
  /**
   * @remarks
   * The commands executed in the container when command-line health checks are performed.
   */
  livenessProbeExecCommands?: string[];
  /**
   * @remarks
   * The minimum consecutive failures for the readiness probe to be considered failed after having succeeded.
   * Default value: 3.
   * 
   * @example
   * 3
   */
  livenessProbeFailureThreshold?: number;
  /**
   * @remarks
   * The path for the HTTP GET readiness probe.
   * 
   * @example
   * /usr/nginx/
   */
  livenessProbeHttpGetPath?: string;
  /**
   * @remarks
   * The port for the HTTP GET liveness probe.
   * 
   * @example
   * 8080
   */
  livenessProbeHttpGetPort?: number;
  /**
   * @remarks
   * The protocol type of the HTTP GET request when HTTP requests are used for health checks. Valid values:
   * - HTTP
   * - HTTPS
   * 
   * @example
   * HTTP
   */
  livenessProbeHttpGetScheme?: string;
  /**
   * @remarks
   * The delay before the readiness probe is initiated after the container starts.
   * 
   * @example
   * 10
   */
  livenessProbeInitialDelaySeconds?: number;
  /**
   * @remarks
   * The interval at which the liveness probe is performed. Default value: 10 seconds. Minimum value: 1 second.
   * 
   * @example
   * 5
   */
  livenessProbePeriodSeconds?: number;
  /**
   * @remarks
   * The minimum consecutive successes for the probe to be considered successful after having failed. Default value: 1. The current value must be 1.
   * 
   * @example
   * 1
   */
  livenessProbeSuccessThreshold?: number;
  /**
   * @remarks
   * The port number for the TCP socket liveness probe.
   * 
   * @example
   * 80
   */
  livenessProbeTcpSocketPort?: number;
  /**
   * @remarks
   * The timeout period for the liveness probe. Default value: 1 second. Minimum value: 1 second.
   * 
   * @example
   * 10
   */
  livenessProbeTimeoutSeconds?: number;
  /**
   * @remarks
   * The memory size.
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
   * The exposed ports and protocols.
   */
  ports?: DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationContainersPorts[];
  /**
   * @remarks
   * The commands executed in the container when command-line health checks are performed.
   */
  readinessProbeExecCommands?: string[];
  /**
   * @remarks
   * The minimum consecutive failures for the readiness probe to be considered failed after having succeeded.
   * Default value: 3.
   * 
   * @example
   * 3
   */
  readinessProbeFailureThreshold?: number;
  /**
   * @remarks
   * The path for the HTTP GET readiness probe.
   * 
   * @example
   * /usr/local
   */
  readinessProbeHttpGetPath?: string;
  /**
   * @remarks
   * The path for the HTTP GET readiness probe.
   * 
   * @example
   * 80
   */
  readinessProbeHttpGetPort?: number;
  /**
   * @remarks
   * The protocol type of the HTTP GET request when HTTP requests are used for health checks. Valid values:
   * - HTTP
   * - HTTPS
   * 
   * @example
   * HTTP
   */
  readinessProbeHttpGetScheme?: string;
  /**
   * @remarks
   * The delay before the readiness probe is initiated after the container starts.
   * 
   * @example
   * 5
   */
  readinessProbeInitialDelaySeconds?: number;
  /**
   * @remarks
   * The interval at which the readiness probe is performed. Default value: 10 seconds. Minimum value: 1 second.
   * 
   * @example
   * 5
   */
  readinessProbePeriodSeconds?: number;
  /**
   * @remarks
   * The minimum consecutive successes for the probe to be considered successful after having failed. Default value: 1. The current value must be 1.
   * 
   * @example
   * 1
   */
  readinessProbeSuccessThreshold?: number;
  /**
   * @remarks
   * The port number for the TCP socket liveness probe.
   * 
   * @example
   * 80
   */
  readinessProbeTcpSocketPort?: number;
  /**
   * @remarks
   * The timeout period for the readiness probe. Default value: 1 second. Minimum value: 1 second.
   * 
   * @example
   * 5
   */
  readinessProbeTimeoutSeconds?: number;
  /**
   * @remarks
   * Grants specific permissions to processes in the container. Currently, only NET_ADMIN and NET_RAW are supported.
   */
  securityContextCapabilityAdds?: string[];
  /**
   * @remarks
   * Specifies whether the root file system is read-only. Only true is supported.
   * 
   * @example
   * true
   */
  securityContextReadOnlyRootFilesystem?: boolean;
  /**
   * @remarks
   * The UID used to run the entrypoint of the container process.
   * 
   * @example
   * 1000
   */
  securityContextRunAsUser?: number;
  /**
   * @remarks
   * Specifies whether to allocate a buffer for standard input during container runtime. If this parameter is not set, reading from standard input in the container results in an EOF. Default value: false.
   * 
   * @example
   * true
   */
  stdin?: boolean;
  /**
   * @remarks
   * Specifies whether the standard input stream remains in the enabling status across multiple attached sessions when standard input is set to true.
   * 
   * If StdinOnce is set to true, standard input is opened when the container starts, remains empty until the first client attaches to it, and then stays in the enabling status to accept data until the client disconnects. After the client disconnects, standard input enters shutdown and remains in shutdown until the container is restarted.
   * 
   * @example
   * true
   */
  stdinOnce?: boolean;
  /**
   * @remarks
   * Specifies whether to enable interaction. Valid values:
   * - true: enabled.
   * - false: disabled.
   * For example, if Command is set to /bin/bash, set this parameter to true.
   * Default value: false.
   * 
   * @example
   * true
   */
  tty?: boolean;
  /**
   * @remarks
   * The volume mounts.
   */
  volumeMounts?: DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationContainersVolumeMounts[];
  /**
   * @remarks
   * The working directory in the container.
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
      environmentVars: { 'type': 'array', 'itemType': DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationContainersEnvironmentVars },
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
      ports: { 'type': 'array', 'itemType': DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationContainersPorts },
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
      volumeMounts: { 'type': 'array', 'itemType': DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationContainersVolumeMounts },
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

export class DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationDnsConfigOptions extends $dara.Model {
  /**
   * @remarks
   * The variable name of the object.
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * The variable value of the object.
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

export class DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationHostAliases extends $dara.Model {
  /**
   * @remarks
   * The hostnames to add.
   */
  hostnames?: string[];
  /**
   * @remarks
   * The IP address to add.
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

export class DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationImageRegistryCredentials extends $dara.Model {
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
   * The server address of the image registry.
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

export class DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationInitContainersInitContainerEnvironmentVars extends $dara.Model {
  /**
   * @remarks
   * >This parameter is not available.
   * 
   * @example
   * path
   */
  fieldRefFieldPath?: string;
  /**
   * @remarks
   * The name of the environment variable.
   * 
   * @example
   * PATH
   */
  key?: string;
  /**
   * @remarks
   * The value of the environment variable.
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

export class DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationInitContainersInitContainerPorts extends $dara.Model {
  /**
   * @remarks
   * The port number. Valid values: 1 to 65535.
   * 
   * @example
   * 1024
   */
  port?: number;
  /**
   * @remarks
   * The protocol type. Valid values:
   * - TCP
   * - UDP
   * 
   * @example
   * UDP
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

export class DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationInitContainersInitContainerVolumeMounts extends $dara.Model {
  /**
   * @remarks
   * The directory in the container where the volume is mounted.    
   * 
   * > The content in the mount directory of the container is directly overwritten by the content of the volume. Use this parameter with caution.
   * 
   * @example
   * /usr/share/
   */
  mountPath?: string;
  /**
   * @remarks
   * The mount propagation settings of the data volume. Mount propagation allows volumes mounted by a container to be shared with other containers in the same pod, or even with other pods on the same node. Valid values:
   * - None: the volume does not perceive any subsequent mount operations performed on the volume or its subdirectories.
   * - HostToCotainer: the volume perceives subsequent mount operations performed on the volume or its subdirectories.
   * - Bidirectional: similar to HostToCotainer, the volume perceives mount operations. Additionally, the volume is propagated back to the host and to all containers of all pods that use the same volume.
   * Default value: None.
   * 
   * @example
   * None
   */
  mountPropagation?: string;
  /**
   * @remarks
   * The name of the mounted data volume.
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
   * The subpath of the data volume.
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

export class DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationInitContainers extends $dara.Model {
  /**
   * @remarks
   * The number of CPU cores for the container.
   * 
   * @example
   * 0.5
   */
  cpu?: number;
  /**
   * @remarks
   * The number of GPUs used by the container.
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
   * registry-vpc.cn-hongkong.aliyuncs.com/eci_open/nginx:alpine
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
   * The startup arguments for the container.
   */
  initContainerArgs?: string[];
  /**
   * @remarks
   * The startup commands for the container.
   */
  initContainerCommands?: string[];
  /**
   * @remarks
   * The environment variables for the init container.
   */
  initContainerEnvironmentVars?: DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationInitContainersInitContainerEnvironmentVars[];
  /**
   * @remarks
   * The port information for the init container.
   */
  initContainerPorts?: DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationInitContainersInitContainerPorts[];
  /**
   * @remarks
   * The array of mount point information for the init container.
   */
  initContainerVolumeMounts?: DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationInitContainersInitContainerVolumeMounts[];
  /**
   * @remarks
   * The memory size.
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
   * Grants specific permissions to processes in the container. Currently, only NET_ADMIN and NET_RAW are supported.
   */
  securityContextCapabilityAdds?: string[];
  /**
   * @remarks
   * Specifies whether the root file system is read-only. Only true is supported.
   */
  securityContextReadOnlyRootFilesystem?: boolean;
  /**
   * @remarks
   * The user ID used to run the container.
   * 
   * @example
   * 1000
   */
  securityContextRunAsUser?: string;
  /**
   * @remarks
   * The working directory.
   * 
   * @example
   * /www
   */
  workingDir?: string;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      gpu: 'Gpu',
      image: 'Image',
      imagePullPolicy: 'ImagePullPolicy',
      initContainerArgs: 'InitContainerArgs',
      initContainerCommands: 'InitContainerCommands',
      initContainerEnvironmentVars: 'InitContainerEnvironmentVars',
      initContainerPorts: 'InitContainerPorts',
      initContainerVolumeMounts: 'InitContainerVolumeMounts',
      memory: 'Memory',
      name: 'Name',
      securityContextCapabilityAdds: 'SecurityContextCapabilityAdds',
      securityContextReadOnlyRootFilesystem: 'SecurityContextReadOnlyRootFilesystem',
      securityContextRunAsUser: 'SecurityContextRunAsUser',
      workingDir: 'WorkingDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      gpu: 'number',
      image: 'string',
      imagePullPolicy: 'string',
      initContainerArgs: { 'type': 'array', 'itemType': 'string' },
      initContainerCommands: { 'type': 'array', 'itemType': 'string' },
      initContainerEnvironmentVars: { 'type': 'array', 'itemType': DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationInitContainersInitContainerEnvironmentVars },
      initContainerPorts: { 'type': 'array', 'itemType': DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationInitContainersInitContainerPorts },
      initContainerVolumeMounts: { 'type': 'array', 'itemType': DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationInitContainersInitContainerVolumeMounts },
      memory: 'number',
      name: 'string',
      securityContextCapabilityAdds: { 'type': 'array', 'itemType': 'string' },
      securityContextReadOnlyRootFilesystem: 'boolean',
      securityContextRunAsUser: 'string',
      workingDir: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.initContainerArgs)) {
      $dara.Model.validateArray(this.initContainerArgs);
    }
    if(Array.isArray(this.initContainerCommands)) {
      $dara.Model.validateArray(this.initContainerCommands);
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
    if(Array.isArray(this.securityContextCapabilityAdds)) {
      $dara.Model.validateArray(this.securityContextCapabilityAdds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationSecurityContextSysCtls extends $dara.Model {
  /**
   * @remarks
   * The system control parameter name of the security context in which the instance runs.
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

export class DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationTags extends $dara.Model {
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

export class DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationVolumesConfigFileVolumeConfigFileToPaths extends $dara.Model {
  /**
   * @remarks
   * The content of the configuration file.
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
   * The path.
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

export class DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationVolumes extends $dara.Model {
  /**
   * @remarks
   * The list of configuration file paths.
   */
  configFileVolumeConfigFileToPaths?: DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationVolumesConfigFileVolumeConfigFileToPaths[];
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
   * The ID of the disk volume.
   * 
   * @example
   * d-xx
   */
  diskVolumeDiskId?: string;
  /**
   * @remarks
   * The size of the disk volume. Unit: GiB.
   * 
   * @example
   * 15
   */
  diskVolumeDiskSize?: number;
  /**
   * @remarks
   * The file system type of the disk volume.
   * 
   * @example
   * xfs
   */
  diskVolumeFsType?: string;
  /**
   * @remarks
   * The storage medium of the EmptyDirVolume. The default value is empty, which indicates that the node file system is used. If this parameter is set to memory, the memory is used.
   * 
   * @example
   * memory
   */
  emptyDirVolumeMedium?: string;
  /**
   * @remarks
   * The size of the EmptyDir volume.
   * 
   * @example
   * 256Mi
   */
  emptyDirVolumeSizeLimit?: string;
  /**
   * @remarks
   * The name of the driver used for the FlexVolume.
   * 
   * @example
   * flexvolume
   */
  flexVolumeDriver?: string;
  /**
   * @remarks
   * The mounted file system type. The default value depends on the script of the FlexVolume.
   * 
   * @example
   * ext4
   */
  flexVolumeFsType?: string;
  /**
   * @remarks
   * The list of options for the FlexVolume object.
   * 
   * @example
   * {"volumeId":"d-2zehdahrwoa7srg****","performanceLevel": "PL2"}
   */
  flexVolumeOptions?: string;
  /**
   * @remarks
   * The directory path of the HostPath volume on the host.
   * 
   * @example
   * /pod/data
   */
  hostPathVolumePath?: string;
  /**
   * @remarks
   * The type of the HostPath volume.
   * 
   * @example
   * Directory
   */
  hostPathVolumeType?: string;
  /**
   * @remarks
   * The path of the NFS volume.
   * 
   * @example
   * /share
   */
  NFSVolumePath?: string;
  /**
   * @remarks
   * Specifies whether the NFS volume is read-only.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  NFSVolumeReadOnly?: boolean;
  /**
   * @remarks
   * The address of the NFS server.
   * 
   * @example
   * 3f9cd4a596-naw76.cn-shanghai.nas.aliyuncs.com
   */
  NFSVolumeServer?: string;
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
   * - EmptyDirVolume.
   * - NFSVolume.
   * - ConfigFileVolume.
   * - FlexVolume.
   * 
   * @example
   * EmptyDirVolume
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      configFileVolumeConfigFileToPaths: 'ConfigFileVolumeConfigFileToPaths',
      configFileVolumeDefaultMode: 'ConfigFileVolumeDefaultMode',
      diskVolumeDiskId: 'DiskVolumeDiskId',
      diskVolumeDiskSize: 'DiskVolumeDiskSize',
      diskVolumeFsType: 'DiskVolumeFsType',
      emptyDirVolumeMedium: 'EmptyDirVolumeMedium',
      emptyDirVolumeSizeLimit: 'EmptyDirVolumeSizeLimit',
      flexVolumeDriver: 'FlexVolumeDriver',
      flexVolumeFsType: 'FlexVolumeFsType',
      flexVolumeOptions: 'FlexVolumeOptions',
      hostPathVolumePath: 'HostPathVolumePath',
      hostPathVolumeType: 'HostPathVolumeType',
      NFSVolumePath: 'NFSVolumePath',
      NFSVolumeReadOnly: 'NFSVolumeReadOnly',
      NFSVolumeServer: 'NFSVolumeServer',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configFileVolumeConfigFileToPaths: { 'type': 'array', 'itemType': DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationVolumesConfigFileVolumeConfigFileToPaths },
      configFileVolumeDefaultMode: 'number',
      diskVolumeDiskId: 'string',
      diskVolumeDiskSize: 'number',
      diskVolumeFsType: 'string',
      emptyDirVolumeMedium: 'string',
      emptyDirVolumeSizeLimit: 'string',
      flexVolumeDriver: 'string',
      flexVolumeFsType: 'string',
      flexVolumeOptions: 'string',
      hostPathVolumePath: 'string',
      hostPathVolumeType: 'string',
      NFSVolumePath: 'string',
      NFSVolumeReadOnly: 'boolean',
      NFSVolumeServer: 'string',
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.configFileVolumeConfigFileToPaths)) {
      $dara.Model.validateArray(this.configFileVolumeConfigFileToPaths);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEciScalingConfigurationDetailResponseBodyScalingConfiguration extends $dara.Model {
  /**
   * @remarks
   * The information about the ACR Enterprise instance.
   */
  acrRegistryInfos?: DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationAcrRegistryInfos[];
  /**
   * @remarks
   * The validity period. Unit: seconds.
   * 
   * @example
   * 60
   */
  activeDeadlineSeconds?: number;
  /**
   * @remarks
   * Specifies whether the automatic creation of an elastic IP address (EIP) is enabled in order to attach it to the ECI instance.
   * 
   * @example
   * true
   */
  autoCreateEip?: boolean;
  /**
   * @remarks
   * Specifies whether to automatically match an image cache.
   * Default value: false.
   * 
   * @example
   * true
   */
  autoMatchImageCache?: boolean;
  /**
   * @remarks
   * The computing power category. A value of economy indicates that instances of economy instance types are queried.
   */
  computeCategory?: string[];
  /**
   * @remarks
   * The name of the container group.
   * 
   * @example
   * test
   */
  containerGroupName?: string;
  /**
   * @remarks
   * The list of containers included in the instance.
   */
  containers?: DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationContainers[];
  /**
   * @remarks
   * Specifies whether to enable cost optimization. Valid values:
   * 
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
   * 2.0
   */
  cpu?: number;
  /**
   * @remarks
   * The number of physical CPU cores. Only specific instance types support custom settings.
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
   * The time when the scaling configuration was created. The time follows the ISO 8601 standard in the YYYY-MM-DDTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2023-05-10T02:39:15Z
   */
  creationTime?: string;
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
   * >For more information about ESSD AutoPL cloud disks, see [ESSD AutoPL cloud disks](https://help.aliyun.com/document_detail/122389.html).
   * 
   * @example
   * false
   */
  dataCacheBurstingEnabled?: boolean;
  /**
   * @remarks
   * The performance level (PL) of the cloud disk used for data caching. We recommend that you use standard SSDs. Valid values for the PL of a standard SSD:
   * 
   * - PL0: A single standard SSD can deliver up to 10,000 random read/write IOPS.
   * - PL1: A single standard SSD can deliver up to 50,000 random read/write IOPS.
   * - PL2: A single standard SSD can deliver up to 100,000 random read/write IOPS.
   * - PL3: A single standard SSD can deliver up to 1,000,000 random read/write IOPS.
   * 
   * >For more information about standard SSDs, see [standard SSDs](https://help.aliyun.com/document_detail/122389.html).
   * 
   * @example
   * PL1
   */
  dataCachePL?: string;
  /**
   * @remarks
   * The provisioned read/write IOPS of the ESSD AutoPL cloud disk used for data caching. Valid values: 0 to min{50000, 1000 × Capacity - Baseline performance}, where Baseline performance = min{1800 + 50 × Capacity, 50000}.
   * 
   * >For more information about ESSD AutoPL cloud disks, see [ESSD AutoPL cloud disks](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * 40000
   */
  dataCacheProvisionedIops?: number;
  /**
   * @remarks
   * >This parameter is not available.
   * 
   * @example
   * This is an example.
   */
  description?: string;
  /**
   * @remarks
   * The list of IP addresses of the DNS servers.
   */
  dnsConfigNameServers?: string[];
  /**
   * @remarks
   * The DNS configuration options.
   */
  dnsConfigOptions?: DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationDnsConfigOptions[];
  /**
   * @remarks
   * The list of DNS search domains.
   */
  dnsConfigSearches?: string[];
  /**
   * @remarks
   * The DNS policy.
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
   * 10485760
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
   * The existing Internet Shared Bandwidth instance to associate.
   * 
   * @example
   * cbwp-bp1rxai1z4b1an454xl8m
   */
  eipCommonBandwidthPackage?: string;
  /**
   * @remarks
   * The line type of the elastic IP address (EIP). Valid values:
   * 
   * - BGP: BGP (Multi-ISP) line. This is the default value.
   * - BGP_PRO: BGP (Multi-ISP) Pro line.
   * 
   * @example
   * BGP
   */
  eipISP?: string;
  /**
   * @remarks
   * The ID of the IP address pool.
   * 
   * @example
   * pippool-bp187arfugi543y1s****
   */
  eipPublicIpAddressPoolId?: string;
  /**
   * @remarks
   * The size of the ephemeral storage space. Unit: GiB.
   * 
   * @example
   * 20
   */
  ephemeralStorage?: number;
  /**
   * @remarks
   * The custom hostname mappings for a container in the instance.
   */
  hostAliases?: DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationHostAliases[];
  /**
   * @remarks
   * The hostname.
   * 
   * @example
   * hostname
   */
  hostName?: string;
  /**
   * @remarks
   * The image registry information.
   */
  imageRegistryCredentials?: DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationImageRegistryCredentials[];
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
  initContainers?: DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationInitContainers[];
  /**
   * @remarks
   * The instance family level, which is used to filter instance types that meet the requirements. This parameter takes effect only when CostOptimization is enabled. Valid values:
   * 
   * - EntryLevel: Entry-level, which refers to shared instance types. This level provides lower costs but cannot guarantee stable computing performance. It is suitable for business scenarios with low CPU utilization. For more information, see [Shared instance families](https://help.aliyun.com/document_detail/108489.html).
   * - EnterpriseLevel: Enterprise-level. This level provides stable performance and dedicated resources, and is suitable for business scenarios that require high stability. For more information, see [Instance families](https://help.aliyun.com/document_detail/25378.html).
   * - CreditEntryLevel: Credit-based entry-level, which refers to burstable instances. This level uses CPU credits to maintain computing performance and is suitable for business scenarios with low baseline CPU utilization and occasional CPU usage spikes. For more information, see [Overview of burstable instances](https://help.aliyun.com/document_detail/59977.html).
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
   * The state of the scaling configuration in the scaling group. Valid values:
   * 
   * - Active: Active. The scaling group uses active scaling configurations for the automatic creation of Elastic Container Instance (ECI) instances.
   * - Inacitve: Inactive. Inactive scaling configurations exist in the scaling group, but the scaling group does not use them for the automatic creation of ECI instances.
   * 
   * @example
   * Active
   */
  lifecycleState?: string;
  /**
   * @remarks
   * The weight of the ECI instance when it serves as a backend server for load balancing. Valid values: 1 to 100.
   * Default value: 50.
   * 
   * @example
   * 50
   */
  loadBalancerWeight?: number;
  /**
   * @remarks
   * The memory size. Unit: GiB.
   * You can specify both CPU and Memory to define a range of instance types. For example, CPU=2 and Memory=16 defines all instance types that have 2 vCPUs and 16 GiB of memory. Auto Scaling determines the available instance types based on factors such as I/O optimization and zones, and creates the instance with the lowest price.
   * >This configuration takes effect only in cost optimization mode and when no instance type is specified in the scaling configuration.
   * 
   * @example
   * 4
   */
  memory?: number;
  /**
   * @remarks
   * The NTP servers.
   */
  ntpServers?: string[];
  /**
   * @remarks
   * The name of the Resource Access Management (RAM) role for the instance. ECIs and Elastic Compute Service (ECS) instances share the same RAM role. For more information, see [Use an instance RAM role by calling API operations](https://help.aliyun.com/document_detail/61178.html).
   * 
   * @example
   * ram:PassRole
   */
  ramRoleName?: string;
  /**
   * @remarks
   * The region ID of the scaling group to which the scaling rule belongs.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmwozpmmksakq
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The restart policy of the pod. Valid values:
   * - Never: no restart.
   * - Always: always restart.
   * - OnFailure: restart on failure.
   * 
   * @example
   * Always
   */
  restartPolicy?: string;
  /**
   * @remarks
   * The ID of the scaling configuration.
   * 
   * @example
   * asc-2zec39vg84usxdocme6a
   */
  scalingConfigurationId?: string;
  /**
   * @remarks
   * The name of the scaling configuration.
   * 
   * @example
   * scalingconfi****
   */
  scalingConfigurationName?: string;
  /**
   * @remarks
   * The ID of the scaling group.
   * 
   * @example
   * asg-bp1frlu04fq4zv65b1bh
   */
  scalingGroupId?: string;
  /**
   * @remarks
   * The system info of the contextual security context in which the instance runs.
   */
  securityContextSysCtls?: DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationSecurityContextSysCtls[];
  /**
   * @remarks
   * The ID of the security group to which the Elastic Container Instance (ECI) belongs. ECIs in the same security group can access each other.
   * 
   * @example
   * sg-bp18kz60mefs****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * Specifies whether to enable user log collection. Default value: **false**.
   * 
   * @example
   * false
   */
  slsEnable?: boolean;
  /**
   * @remarks
   * The maximum hourly price of the spot instance.
   * This parameter is returned only when SpotStrategy is set to SpotWithPriceLimit.
   * 
   * @example
   * 0.025
   */
  spotPriceLimit?: number;
  /**
   * @remarks
   * The preemption policy of the instance. Valid values:
   * - NoSpot: regular pay-as-you-go instance.
   * - SpotWithPriceLimit: spot instance with a specified maximum price.
   * - SpotAsPriceGo: spot instance whose price is automatically offered by the system based on the current market price.
   * 
   * @example
   * NoSpot
   */
  spotStrategy?: string;
  /**
   * @remarks
   * The tag key-value pairs of the instance.
   */
  tags?: DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationTags[];
  /**
   * @remarks
   * The buffer time for the program to handle operations before shutdown.
   * 
   * @example
   * 60
   */
  terminationGracePeriodSeconds?: number;
  /**
   * @remarks
   * The volume information.
   */
  volumes?: DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationVolumes[];
  static names(): { [key: string]: string } {
    return {
      acrRegistryInfos: 'AcrRegistryInfos',
      activeDeadlineSeconds: 'ActiveDeadlineSeconds',
      autoCreateEip: 'AutoCreateEip',
      autoMatchImageCache: 'AutoMatchImageCache',
      computeCategory: 'ComputeCategory',
      containerGroupName: 'ContainerGroupName',
      containers: 'Containers',
      costOptimization: 'CostOptimization',
      cpu: 'Cpu',
      cpuOptionsCore: 'CpuOptionsCore',
      cpuOptionsThreadsPerCore: 'CpuOptionsThreadsPerCore',
      creationTime: 'CreationTime',
      dataCacheBucket: 'DataCacheBucket',
      dataCacheBurstingEnabled: 'DataCacheBurstingEnabled',
      dataCachePL: 'DataCachePL',
      dataCacheProvisionedIops: 'DataCacheProvisionedIops',
      description: 'Description',
      dnsConfigNameServers: 'DnsConfigNameServers',
      dnsConfigOptions: 'DnsConfigOptions',
      dnsConfigSearches: 'DnsConfigSearches',
      dnsPolicy: 'DnsPolicy',
      egressBandwidth: 'EgressBandwidth',
      eipBandwidth: 'EipBandwidth',
      eipCommonBandwidthPackage: 'EipCommonBandwidthPackage',
      eipISP: 'EipISP',
      eipPublicIpAddressPoolId: 'EipPublicIpAddressPoolId',
      ephemeralStorage: 'EphemeralStorage',
      hostAliases: 'HostAliases',
      hostName: 'HostName',
      imageRegistryCredentials: 'ImageRegistryCredentials',
      imageSnapshotId: 'ImageSnapshotId',
      ingressBandwidth: 'IngressBandwidth',
      initContainers: 'InitContainers',
      instanceFamilyLevel: 'InstanceFamilyLevel',
      instanceTypes: 'InstanceTypes',
      ipv6AddressCount: 'Ipv6AddressCount',
      lifecycleState: 'LifecycleState',
      loadBalancerWeight: 'LoadBalancerWeight',
      memory: 'Memory',
      ntpServers: 'NtpServers',
      ramRoleName: 'RamRoleName',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      restartPolicy: 'RestartPolicy',
      scalingConfigurationId: 'ScalingConfigurationId',
      scalingConfigurationName: 'ScalingConfigurationName',
      scalingGroupId: 'ScalingGroupId',
      securityContextSysCtls: 'SecurityContextSysCtls',
      securityGroupId: 'SecurityGroupId',
      slsEnable: 'SlsEnable',
      spotPriceLimit: 'SpotPriceLimit',
      spotStrategy: 'SpotStrategy',
      tags: 'Tags',
      terminationGracePeriodSeconds: 'TerminationGracePeriodSeconds',
      volumes: 'Volumes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acrRegistryInfos: { 'type': 'array', 'itemType': DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationAcrRegistryInfos },
      activeDeadlineSeconds: 'number',
      autoCreateEip: 'boolean',
      autoMatchImageCache: 'boolean',
      computeCategory: { 'type': 'array', 'itemType': 'string' },
      containerGroupName: 'string',
      containers: { 'type': 'array', 'itemType': DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationContainers },
      costOptimization: 'boolean',
      cpu: 'number',
      cpuOptionsCore: 'number',
      cpuOptionsThreadsPerCore: 'number',
      creationTime: 'string',
      dataCacheBucket: 'string',
      dataCacheBurstingEnabled: 'boolean',
      dataCachePL: 'string',
      dataCacheProvisionedIops: 'number',
      description: 'string',
      dnsConfigNameServers: { 'type': 'array', 'itemType': 'string' },
      dnsConfigOptions: { 'type': 'array', 'itemType': DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationDnsConfigOptions },
      dnsConfigSearches: { 'type': 'array', 'itemType': 'string' },
      dnsPolicy: 'string',
      egressBandwidth: 'number',
      eipBandwidth: 'number',
      eipCommonBandwidthPackage: 'string',
      eipISP: 'string',
      eipPublicIpAddressPoolId: 'string',
      ephemeralStorage: 'number',
      hostAliases: { 'type': 'array', 'itemType': DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationHostAliases },
      hostName: 'string',
      imageRegistryCredentials: { 'type': 'array', 'itemType': DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationImageRegistryCredentials },
      imageSnapshotId: 'string',
      ingressBandwidth: 'number',
      initContainers: { 'type': 'array', 'itemType': DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationInitContainers },
      instanceFamilyLevel: 'string',
      instanceTypes: { 'type': 'array', 'itemType': 'string' },
      ipv6AddressCount: 'number',
      lifecycleState: 'string',
      loadBalancerWeight: 'number',
      memory: 'number',
      ntpServers: { 'type': 'array', 'itemType': 'string' },
      ramRoleName: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      restartPolicy: 'string',
      scalingConfigurationId: 'string',
      scalingConfigurationName: 'string',
      scalingGroupId: 'string',
      securityContextSysCtls: { 'type': 'array', 'itemType': DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationSecurityContextSysCtls },
      securityGroupId: 'string',
      slsEnable: 'boolean',
      spotPriceLimit: 'number',
      spotStrategy: 'string',
      tags: { 'type': 'array', 'itemType': DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationTags },
      terminationGracePeriodSeconds: 'number',
      volumes: { 'type': 'array', 'itemType': DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationVolumes },
    };
  }

  validate() {
    if(Array.isArray(this.acrRegistryInfos)) {
      $dara.Model.validateArray(this.acrRegistryInfos);
    }
    if(Array.isArray(this.computeCategory)) {
      $dara.Model.validateArray(this.computeCategory);
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
    if(Array.isArray(this.dnsConfigSearches)) {
      $dara.Model.validateArray(this.dnsConfigSearches);
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

export class DescribeEciScalingConfigurationDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The YAML output content of the scaling configuration.
   * 
   * @example
   * apiVersion: apps/v1
   * kind: Deployment
   * metadata:
   *   name: nginx-deployment
   *   labels:
   *     app: nginx
   *   spec:
   *     replicas: 3
   *     selector:
   *        matchLabels:
   *         app: nginx
   *     template:
   *       metadata:
   *         labels:
   *           app: nginx
   *         annotations:
   *           k8s.aliyun.com/eip-bandwidth: 10
   *           k8s.aliyun.com/eci-with-eip: true
   *         spec:
   *           containers:
   *           - name: nginx
   *             image: nginx:1.14.2
   *             ports:
   *             - containerPort: 80
   */
  output?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6EF9BFEE-FE07-4627-B8FB-14326FB9****
   */
  requestId?: string;
  /**
   * @remarks
   * The scaling configuration information.
   */
  scalingConfiguration?: DescribeEciScalingConfigurationDetailResponseBodyScalingConfiguration;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      requestId: 'RequestId',
      scalingConfiguration: 'ScalingConfiguration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: 'string',
      requestId: 'string',
      scalingConfiguration: DescribeEciScalingConfigurationDetailResponseBodyScalingConfiguration,
    };
  }

  validate() {
    if(this.scalingConfiguration && typeof (this.scalingConfiguration as any).validate === 'function') {
      (this.scalingConfiguration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

