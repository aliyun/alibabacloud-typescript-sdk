// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationAcrRegistryInfos extends $dara.Model {
  /**
   * @remarks
   * The domain names of the Container Registry Enterprise Edition instance. By default, all domain names of the instance are displayed. Multiple domain names are separated by commas (,).
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
   * >  This parameter is not available for use.
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

export class DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationContainersVolumeMounts extends $dara.Model {
  /**
   * @remarks
   * The directory in which the container mounts the volume.
   * 
   * >  Data in this directory is overwritten by the data on the volume. Proceed with caution if you specify this parameter.
   * 
   * @example
   * /pod/data
   */
  mountPath?: string;
  /**
   * @remarks
   * The mount propagation setting of the volume. Mount propagation enables volumes mounted on one container to be shared among other containers within the same pod or across distinct pods residing on the same node. Valid values:
   * 
   * *   None: Subsequent mounts executed either on the volume itself or its subdirectories do not propagate to the already established volume mount.
   * *   HostToCotainer: Subsequent mounts executed either on the volume itself or its subdirectories propagate to the already established volume mount.
   * *   Bidirectional: This value is similar to HostToCotainer. Subsequent mounts executed either on the volume itself or its subdirectories propagate to the already established volume mount. In addition, any volume mounts executed on the container not only propagate back to the underlying host but also to all containers across every pod that uses the same volume.
   * 
   * Default value: None.
   * 
   * @example
   * None
   */
  mountPropagation?: string;
  /**
   * @remarks
   * The volume name.
   * 
   * @example
   * default-volume1
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether the volume is read-only.
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  readOnly?: boolean;
  /**
   * @remarks
   * The subdirectory of the volume.
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
   * The arguments that are passed to the container startup commands.
   */
  args?: string[];
  /**
   * @remarks
   * The container startup commands.
   */
  commands?: string[];
  /**
   * @remarks
   * The number of vCPUs that are allocated to the elastic container instance.
   * 
   * @example
   * 2
   */
  cpu?: number;
  /**
   * @remarks
   * The environment variables.
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
   * The image pulling policy.
   * 
   * @example
   * Always
   */
  imagePullPolicy?: string;
  /**
   * @remarks
   * The commands that are run by using a CLI for configuring the postStart callback function within the container.
   */
  lifecyclePostStartHandlerExecs?: string[];
  /**
   * @remarks
   * The IP address of the host to the HTTP GET requests for configuring the postStart callback function are sent.
   * 
   * @example
   * 10.0.XX.XX
   */
  lifecyclePostStartHandlerHttpGetHost?: string;
  /**
   * @remarks
   * The path to the HTTP GET requests for configuring the postStart callback function are sent.
   * 
   * @example
   * /healthyz
   */
  lifecyclePostStartHandlerHttpGetPath?: string;
  /**
   * @remarks
   * The port over which the HTTP GET requests for configuring the postStart callback function are sent.
   * 
   * @example
   * 80
   */
  lifecyclePostStartHandlerHttpGetPort?: number;
  /**
   * @remarks
   * The protocol type of the HTTP Get requests that are used for configuring the postStart callback function.
   * 
   * @example
   * HTTP
   */
  lifecyclePostStartHandlerHttpGetScheme?: string;
  /**
   * @remarks
   * The IP address of the host detected by the TCP sockets that are used for configuring the postStart callback function.
   * 
   * @example
   * 10.0.XX.XX
   */
  lifecyclePostStartHandlerTcpSocketHost?: string;
  /**
   * @remarks
   * The port detected by the TCP sockets that are used for configuring the postStart callback function.
   * 
   * @example
   * 80
   */
  lifecyclePostStartHandlerTcpSocketPort?: number;
  /**
   * @remarks
   * The commands that are run by using a CLI for configuring the preStop callback function within the container.
   */
  lifecyclePreStopHandlerExecs?: string[];
  /**
   * @remarks
   * The IP address of the host to which the HTTP GET requests for configuring the preStop callback function are sent.
   * 
   * @example
   * 10.0.XX.XX
   */
  lifecyclePreStopHandlerHttpGetHost?: string;
  /**
   * @remarks
   * The path to which the HTTP GET requests for configuring the preStop callback function are sent.
   * 
   * @example
   * /healthyz
   */
  lifecyclePreStopHandlerHttpGetPath?: string;
  /**
   * @remarks
   * The port over which the HTTP GET requests for configuring the preStop callback function are sent.
   * 
   * @example
   * 80
   */
  lifecyclePreStopHandlerHttpGetPort?: number;
  /**
   * @remarks
   * The protocol type of the HTTP Get requests that are used for configuring the preStop callback function.
   * 
   * @example
   * HTTP
   */
  lifecyclePreStopHandlerHttpGetScheme?: string;
  /**
   * @remarks
   * The IP address of the host detected by the TCP sockets that are used for configuring the preStop callback function.
   * 
   * @example
   * 10.0.XX.XX
   */
  lifecyclePreStopHandlerTcpSocketHost?: string;
  /**
   * @remarks
   * The port detected by the TCP sockets that are used for configuring the preStop callback function.
   * 
   * @example
   * 80
   */
  lifecyclePreStopHandlerTcpSocketPort?: number;
  /**
   * @remarks
   * The commands that are run in the container when you use a CLI to perform liveness probes.
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
   * The path to which HTTP Get requests are sent when you use the HTTP requests to perform liveness probes.
   * 
   * @example
   * /usr/nginx/
   */
  livenessProbeHttpGetPath?: string;
  /**
   * @remarks
   * The port detected by HTTP Get requests when you use the HTTP requests to perform liveness probes.
   * 
   * @example
   * 8080
   */
  livenessProbeHttpGetPort?: number;
  /**
   * @remarks
   * The protocol type of HTTP GET requests when you use the HTTP requests to perform liveness probes. Valid values:
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
   * The memory size.
   * 
   * @example
   * 2.0
   */
  memory?: number;
  /**
   * @remarks
   * The container name.
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
   * The commands that are run in the container when you use a CLI to perform readiness probes.
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
   * The path to which HTTP Get requests are sent when you use the HTTP requests to perform readiness probes.
   * 
   * @example
   * /usr/local
   */
  readinessProbeHttpGetPath?: string;
  /**
   * @remarks
   * The path to which HTTP Get requests are sent when you use the HTTP Get requests to perform readiness probes.
   * 
   * @example
   * 80
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
   * 5
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
   * 80
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
   * Specifies whether to enable the Interaction feature. Valid values:
   * 
   * *   true
   * *   false
   * 
   * If the command is a /bin/bash command, the value of this parameter is true.
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  tty?: boolean;
  /**
   * @remarks
   * The volumes that are mounted to the container.
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

export class DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationHostAliases extends $dara.Model {
  /**
   * @remarks
   * The added hostnames.
   */
  hostnames?: string[];
  /**
   * @remarks
   * The added IP address.
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
   * The password of the image repository.
   * 
   * @example
   * yourpaasword
   */
  password?: string;
  /**
   * @remarks
   * The domain name of the image repository.
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

export class DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationInitContainersInitContainerEnvironmentVars extends $dara.Model {
  /**
   * @remarks
   * >  This parameter is not available for use.
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
   * 
   * *   TCP
   * *   UDP
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
   * The directory to which the init container mounts the volume.
   * 
   * >  Data in this directory is overwritten by the data on the volume. Proceed with caution if you specify this parameter.
   * 
   * @example
   * /usr/share/
   */
  mountPath?: string;
  /**
   * @remarks
   * The mount propagation setting of the volume. Mount propagation enables volumes mounted on one container to be shared among other containers within the same pod or across distinct pods residing on the same node. Valid values:
   * 
   * *   None: Subsequent mounts executed either on the volume itself or its subdirectories do not propagate to the already established volume mount.
   * *   HostToCotainer: Subsequent mounts executed either on the volume itself or its subdirectories propagate to the already established volume mount.
   * *   Bidirectional: This value is similar to HostToCotainer. Subsequent mounts executed either on the volume itself or its subdirectories propagate to the already established volume mount. In addition, any volume mounts executed on the container not only propagate back to the underlying host but also to all containers across every pod that uses the same volume.
   * 
   * Default value: None.
   * 
   * @example
   * None
   */
  mountPropagation?: string;
  /**
   * @remarks
   * The volume name.
   * 
   * @example
   * test-empty
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether the mount directory is read-only.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  readOnly?: boolean;
  /**
   * @remarks
   * The subdirectory of the volume.
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
   * The number of vCPUs that are allocated to the init container.
   * 
   * @example
   * 0.5
   */
  cpu?: number;
  /**
   * @remarks
   * The number of GPUs that are allocated to the init container.
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
   * registry-vpc.cn-hongkong.aliyuncs.com/eci_open/nginx:alpine
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
   * The arguments that are passed to the startup commands of the init container.
   */
  initContainerArgs?: string[];
  /**
   * @remarks
   * The commands that are used to start the init container.
   */
  initContainerCommands?: string[];
  /**
   * @remarks
   * The environment variables of the init container.
   */
  initContainerEnvironmentVars?: DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationInitContainersInitContainerEnvironmentVars[];
  /**
   * @remarks
   * The ports of the init container.
   */
  initContainerPorts?: DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationInitContainersInitContainerPorts[];
  /**
   * @remarks
   * The volume mounts of the init container.
   */
  initContainerVolumeMounts?: DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationInitContainersInitContainerVolumeMounts[];
  /**
   * @remarks
   * The memory size of the init container.
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
   * The permissions that are granted to the processes in the init container. Valid values: NET_ADMIN and NET_RAW.
   */
  securityContextCapabilityAdds?: string[];
  /**
   * @remarks
   * Indicates whether the root file system on which the init container runs is read-only. Valid value: true.
   */
  securityContextReadOnlyRootFilesystem?: boolean;
  /**
   * @remarks
   * The ID of the user that runs the init container.
   * 
   * @example
   * 1000
   */
  securityContextRunAsUser?: string;
  /**
   * @remarks
   * The working directory of the init container.
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
   * The system name of the security context in which the elastic container instance runs.
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
   * The permissions on the ConfigFile volume.
   * 
   * @example
   * 0644
   */
  mode?: number;
  /**
   * @remarks
   * The path to the configuration file.
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
   * The paths to the configuration files.
   */
  configFileVolumeConfigFileToPaths?: DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationVolumesConfigFileVolumeConfigFileToPaths[];
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
   * The system type of the disk volume.
   * 
   * @example
   * xfs
   */
  diskVolumeFsType?: string;
  /**
   * @remarks
   * The storage medium of the emptyDir volume. If you do not specify a storage medium for the emptyDir volume, the volume stores data in the file system of the node by default. We recommend that you set this parameter to memory. In this case, the emptyDir volume stores data in the specified memory.
   * 
   * @example
   * memory
   */
  emptyDirVolumeMedium?: string;
  /**
   * @remarks
   * The storage size of the emptyDir volume.
   * 
   * @example
   * 256Mi
   */
  emptyDirVolumeSizeLimit?: string;
  /**
   * @remarks
   * The name of the FlexVolume driver.
   * 
   * @example
   * flexvolume
   */
  flexVolumeDriver?: string;
  /**
   * @remarks
   * The type of the mounted file system. The default value is determined by the script of FlexVolume.
   * 
   * @example
   * ext4
   */
  flexVolumeFsType?: string;
  /**
   * @remarks
   * The FlexVolume options.
   * 
   * @example
   * {"volumeId":"d-2zehdahrwoa7srg****","performanceLevel": "PL2"}
   */
  flexVolumeOptions?: string;
  /**
   * @remarks
   * The path to the HostPath volume on the host.
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
   * The path to the Network File System (NFS) volume.
   * 
   * @example
   * /share
   */
  NFSVolumePath?: string;
  /**
   * @remarks
   * Indicates whether the NFS volume is read-only.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  NFSVolumeReadOnly?: boolean;
  /**
   * @remarks
   * The endpoint of the NFS server.
   * 
   * @example
   * 3f9cd4a596-naw76.cn-shanghai.nas.aliyuncs.com
   */
  NFSVolumeServer?: string;
  /**
   * @remarks
   * The volume name.
   * 
   * @example
   * default-volume1
   */
  name?: string;
  /**
   * @remarks
   * The volume type. Valid values:
   * 
   * *   EmptyDirVolume
   * *   NFSVolume
   * *   ConfigFileVolume
   * *   FlexVolume
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
   * The information about the Container Registry Enterprise Edition instance.
   */
  acrRegistryInfos?: DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationAcrRegistryInfos[];
  /**
   * @remarks
   * The validity period of the scaling configuration. Unit: seconds.
   * 
   * @example
   * 60
   */
  activeDeadlineSeconds?: number;
  /**
   * @remarks
   * Indicates whether an elastic IP address (EIP) is automatically created and bound to the elastic container instance.
   * 
   * @example
   * true
   */
  autoCreateEip?: boolean;
  /**
   * @remarks
   * Indicates whether the image cache is automatically matched. Default value: false.
   * 
   * @example
   * true
   */
  autoMatchImageCache?: boolean;
  /**
   * @remarks
   * The computing power types. A value of economy indicates that economic instance types are returned.
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
   * The containers in the elastic container instance.
   */
  containers?: DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationContainers[];
  /**
   * @remarks
   * Indicates whether the Cost Optimization feature is enabled. Valid values:
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
   * The number of vCPUs that are allocated to the elastic container instance.
   * 
   * @example
   * 2.0
   */
  cpu?: number;
  /**
   * @remarks
   * The number of physical CPU cores. You can specify this parameter for only specific instance types.
   * 
   * @example
   * 2
   */
  cpuOptionsCore?: number;
  /**
   * @remarks
   * The number of threads per core. You can specify this parameter for only specific instance types. A value of 1 indicates that Hyper-Threading is disabled. For more information, see [Specify CPU options](https://help.aliyun.com/document_detail/197781.html).
   * 
   * @example
   * 2
   */
  cpuOptionsThreadsPerCore?: number;
  /**
   * @remarks
   * The time when the scaling configuration was created.
   * 
   * @example
   * 2023-05-10T02:39:15Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The bucket that caches data.
   * 
   * @example
   * default
   */
  dataCacheBucket?: string;
  /**
   * @remarks
   * Indicates whether the Performance Burst feature is enabled for the ESSD AutoPL disk that caches data. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: false.
   * 
   * >  For more information about ESSD AutoPL disks, see [ESSD AutoPL disks](https://help.aliyun.com/document_detail/122389.html).
   * 
   * @example
   * false
   */
  dataCacheBurstingEnabled?: boolean;
  /**
   * @remarks
   * The performance level (PL) of the cloud disk that caches data. We recommend that you use enhanced SSDs (ESSDs). Valid values:
   * 
   * *   PL0: An ESSD can provide up to 10,000 random read/write IOPS.
   * *   PL1: An ESSD can provide up to 50,000 random read/write IOPS.
   * *   PL2: An ESSD can provide up to 100,000 random read/write IOPS.
   * *   PL3: An ESSD can provide up to 1,000,000 random read/write IOPS.
   * 
   * >  For more information about ESSDs, see [ESSDs](https://help.aliyun.com/document_detail/122389.html).
   * 
   * @example
   * PL1
   */
  dataCachePL?: string;
  /**
   * @remarks
   * The provisioned read/write IOPS of the ESSD AutoPL disk that caches data. Valid values: 0 to min{50,000, 1,000 x *Capacity - Baseline IOPS}. Baseline IOPS = min{1,800 + 50* x Capacity, 50,000}.
   * 
   * >  For more information about ESSD AutoPL disks, see [ESSD AutoPL disks](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * 40000
   */
  dataCacheProvisionedIops?: number;
  /**
   * @remarks
   * >  This parameter is not available for use.
   * 
   * @example
   * This is an example.
   */
  description?: string;
  /**
   * @remarks
   * The IP addresses of DNS servers.
   */
  dnsConfigNameServers?: string[];
  /**
   * @remarks
   * The DNS options.
   */
  dnsConfigOptions?: DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationDnsConfigOptions[];
  /**
   * @remarks
   * The search domains of the DNS servers.
   */
  dnsConfigSearches?: string[];
  /**
   * @remarks
   * The Domain Name System (DNS) policy.
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
   * 10485760
   */
  egressBandwidth?: number;
  /**
   * @remarks
   * The bandwidth of the EIP. Default value: 5. Unit: Mbit/s.
   * 
   * @example
   * 5
   */
  eipBandwidth?: number;
  /**
   * @remarks
   * The bound EIP bandwidth plan.
   * 
   * @example
   * cbwp-bp1rxai1z4b1an454xl8m
   */
  eipCommonBandwidthPackage?: string;
  /**
   * @remarks
   * The line type of the EIP. Valid values:
   * 
   * *   BGP: BGP (Multi-ISP) lines
   * *   BGP_PRO: BGP (Multi-ISP) Pro
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
   * The size of the temporary storage space. Unit: GiB.
   * 
   * @example
   * 20
   */
  ephemeralStorage?: number;
  /**
   * @remarks
   * The custom hostname mappings of a container in the elastic container instance.
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
   * The image repositories.
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
  initContainers?: DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationInitContainers[];
  /**
   * @remarks
   * The level of the instance family, which is used to filter instance types that meet the specified criteria. This parameter takes effect only if `CostOptimization` is set to true. Valid values:
   * 
   * *   EntryLevel: entry level (shared instance types). Instance types of this level are the most cost-effective but may not provide stable computing performance in a consistent manner. Instance types of this level are suitable for business scenarios in which the CPU utilization is low. For more information, see [Shared instance families](https://help.aliyun.com/document_detail/108489.html).
   * *   EnterpriseLevel: enterprise level. Instance types of this level provide stable performance and dedicated resources and are suitable for business scenarios that require high stability. For more information, see [Overview of instance families](https://help.aliyun.com/document_detail/25378.html).
   * *   CreditEntryLevel: credit entry level (burstable instance types). CPU credits are used to ensure computing performance. Instance types of this level are suitable for scenarios in which the CPU utilization is low but may fluctuate in specific cases. For more information, see [Overview](https://help.aliyun.com/document_detail/59977.html) of burstable instances.
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
   * *   Active: The scaling configuration is active in the scaling group. Auto Scaling uses the active scaling configuration to automatically create elastic container instances.
   * *   Inactive: The scaling configuration is inactive in the scaling group. Inactive scaling configurations are retained in scaling groups. However, Auto Scaling does not use inactive scaling groups to create elastic container instances.
   * 
   * @example
   * Active
   */
  lifecycleState?: string;
  /**
   * @remarks
   * The weight of an elastic container instance as a Server Load Balancer (SLB) backend server. Valid values: 1 to 100.
   * 
   * Default value: 50.
   * 
   * @example
   * 50
   */
  loadBalancerWeight?: number;
  /**
   * @remarks
   * The memory size. Unit: GiB.
   * 
   * You can specify CPU and Memory to define the range of instance types. For example, if you set CPU to 2 and Memory to 16, the instance types that have 2 vCPUs and 16 GiB are returned. If you specify CPU and Memory, Auto Scaling determines the available instance types based on factors such as I/O optimization requirements and zones and preferentially creates instances by using the lowest-priced instance type.
   * 
   * >  You can specify CPU and Memory to define instance types only when you set Scaling Policy to Cost Optimization and no instance type is specified in the scaling configuration.
   * 
   * @example
   * 4
   */
  memory?: number;
  /**
   * @remarks
   * The endpoints of the Network Time Protocol (NTP) servers.
   */
  ntpServers?: string[];
  /**
   * @remarks
   * The Resource Access Management (RAM) role of the elastic container instance. Elastic container instances and Elastic Compute Service (ECS) instances can share the same RAM role. For more information, see [Use the instance RAM role by calling APIs](https://help.aliyun.com/document_detail/61178.html).
   * 
   * @example
   * ram:PassRole
   */
  ramRoleName?: string;
  /**
   * @remarks
   * The region ID of the scaling group to which the scaling configuration belongs.
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
   * The restart policy of the container group. Valid values:
   * 
   * *   Never: The container group is never restarted.
   * *   Always: The container group is always restarted.
   * *   OnFailure: The container group is restarted upon failures.
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
   * The system information of the security context in which the elastic container instance is run.
   */
  securityContextSysCtls?: DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationSecurityContextSysCtls[];
  /**
   * @remarks
   * The ID of the security group with which the elastic container instance is associated. Elastic container instances that are associated with the same security group can access each other.
   * 
   * @example
   * sg-bp18kz60mefs****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * Indicates whether user logs are collected. Default value: **false**.
   * 
   * @example
   * false
   */
  slsEnable?: boolean;
  /**
   * @remarks
   * The maximum hourly price for the preemptible instance.
   * 
   * This parameter is returned only when SpotStrategy is set to SpotWithPriceLimit.
   * 
   * @example
   * 0.025
   */
  spotPriceLimit?: number;
  /**
   * @remarks
   * The preemption policy of the instance. Valid values:
   * 
   * *   NoSpot: The instance is created as a regular pay-as-you-go instance.
   * *   SpotWithPriceLimit: The instance is a preemptible instance with a user-defined maximum hourly price.
   * *   SpotAsPriceGo: The instance is a preemptible instance for which the market price at the time of purchase is used as the bid price.
   * 
   * @example
   * NoSpot
   */
  spotStrategy?: string;
  /**
   * @remarks
   * The tags of the elastic container instance. Tags are specified in the key-value format.
   */
  tags?: DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationTags[];
  /**
   * @remarks
   * The buffer time during which a program handles operations before the program stops.
   * 
   * @example
   * 60
   */
  terminationGracePeriodSeconds?: number;
  /**
   * @remarks
   * The volumes.
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
   * The YAML output of the scaling configuration.
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
   * The information about the scaling configuration.
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

