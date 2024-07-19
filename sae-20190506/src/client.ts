// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AclConfig extends $tea.Model {
  aclEntries?: AclEntryConfig[];
  static names(): { [key: string]: string } {
    return {
      aclEntries: 'aclEntries',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclEntries: { 'type': 'array', 'itemType': AclEntryConfig },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AclEntryConfig extends $tea.Model {
  entry?: string;
  static names(): { [key: string]: string } {
    return {
      entry: 'entry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entry: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppStackInstance extends $tea.Model {
  createTime?: number;
  endpoints?: AppStackInstanceEndpoints[];
  instanceId?: string;
  instanceName?: string;
  parameters?: AppStackInstanceParameters[];
  stackId?: string;
  status?: string;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      endpoints: 'Endpoints',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      parameters: 'Parameters',
      stackId: 'StackId',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      endpoints: { 'type': 'array', 'itemType': AppStackInstanceEndpoints },
      instanceId: 'string',
      instanceName: 'string',
      parameters: { 'type': 'array', 'itemType': AppStackInstanceParameters },
      stackId: 'string',
      status: 'string',
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppStackResource extends $tea.Model {
  createTime?: number;
  instanceId?: string;
  productCode?: string;
  resourceId?: string;
  resourceName?: string;
  resourceType?: string;
  stackId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      instanceId: 'InstanceId',
      productCode: 'ProductCode',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      resourceType: 'ResourceType',
      stackId: 'StackId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      instanceId: 'string',
      productCode: 'string',
      resourceId: 'string',
      resourceName: 'string',
      resourceType: 'string',
      stackId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppStackTask extends $tea.Model {
  createTime?: number;
  endTime?: number;
  instanceId?: string;
  stackId?: string;
  startTime?: number;
  status?: string;
  steps?: AppStackTaskSteps[];
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      stackId: 'StackId',
      startTime: 'StartTime',
      status: 'Status',
      steps: 'Steps',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      endTime: 'number',
      instanceId: 'string',
      stackId: 'string',
      startTime: 'number',
      status: 'string',
      steps: { 'type': 'array', 'itemType': AppStackTaskSteps },
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Application extends $tea.Model {
  requestId?: string;
  applicationId?: string;
  applicationName?: string;
  args?: string;
  caPort?: number;
  codeChecksum?: string;
  codeSize?: number;
  command?: string;
  cpu?: number;
  createdTime?: string;
  customDNS?: CustomDNS;
  customDomainName?: string;
  customHealthCheckConfig?: CustomHealthCheckConfig;
  customRuntimeConfig?: CustomRuntimeConfig;
  description?: string;
  diskSize?: number;
  enableAppMetric?: boolean;
  enableArmsAdvanced?: boolean;
  environmentVariables?: { [key: string]: string };
  gpuMemorySize?: number;
  handler?: string;
  httpTriggerConfig?: HTTPTriggerConfig;
  imageConfig?: ImageConfig;
  initializationTimeout?: number;
  initializer?: string;
  instanceConcurrency?: number;
  instanceLifecycleConfig?: InstanceLifecycleConfig;
  instanceSoftConcurrency?: number;
  instanceType?: string;
  internetAccess?: boolean;
  lastModifiedTime?: string;
  layers?: string[];
  layersArnV2?: string[];
  livenessProbe?: Probe;
  logConfig?: LogConfig;
  memorySize?: number;
  namespace?: string;
  namespaceID?: string;
  namespaceName?: string;
  nasConfig?: NASConfig;
  ossMountConfig?: OSSMountConfig;
  runtime?: string;
  scaleConfig?: ScaleConfig;
  slsConfig?: SLSConfig;
  startupProbe?: Probe;
  timeout?: number;
  tracingConfig?: TracingConfig;
  urlInternet?: string;
  urlIntranet?: string;
  version?: Version;
  vpcConfig?: VPCConfig;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      applicationId: 'applicationId',
      applicationName: 'applicationName',
      args: 'args',
      caPort: 'caPort',
      codeChecksum: 'codeChecksum',
      codeSize: 'codeSize',
      command: 'command',
      cpu: 'cpu',
      createdTime: 'createdTime',
      customDNS: 'customDNS',
      customDomainName: 'customDomainName',
      customHealthCheckConfig: 'customHealthCheckConfig',
      customRuntimeConfig: 'customRuntimeConfig',
      description: 'description',
      diskSize: 'diskSize',
      enableAppMetric: 'enableAppMetric',
      enableArmsAdvanced: 'enableArmsAdvanced',
      environmentVariables: 'environmentVariables',
      gpuMemorySize: 'gpuMemorySize',
      handler: 'handler',
      httpTriggerConfig: 'httpTriggerConfig',
      imageConfig: 'imageConfig',
      initializationTimeout: 'initializationTimeout',
      initializer: 'initializer',
      instanceConcurrency: 'instanceConcurrency',
      instanceLifecycleConfig: 'instanceLifecycleConfig',
      instanceSoftConcurrency: 'instanceSoftConcurrency',
      instanceType: 'instanceType',
      internetAccess: 'internetAccess',
      lastModifiedTime: 'lastModifiedTime',
      layers: 'layers',
      layersArnV2: 'layersArnV2',
      livenessProbe: 'livenessProbe',
      logConfig: 'logConfig',
      memorySize: 'memorySize',
      namespace: 'namespace',
      namespaceID: 'namespaceID',
      namespaceName: 'namespaceName',
      nasConfig: 'nasConfig',
      ossMountConfig: 'ossMountConfig',
      runtime: 'runtime',
      scaleConfig: 'scaleConfig',
      slsConfig: 'slsConfig',
      startupProbe: 'startupProbe',
      timeout: 'timeout',
      tracingConfig: 'tracingConfig',
      urlInternet: 'urlInternet',
      urlIntranet: 'urlIntranet',
      version: 'version',
      vpcConfig: 'vpcConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      applicationId: 'string',
      applicationName: 'string',
      args: 'string',
      caPort: 'number',
      codeChecksum: 'string',
      codeSize: 'number',
      command: 'string',
      cpu: 'number',
      createdTime: 'string',
      customDNS: CustomDNS,
      customDomainName: 'string',
      customHealthCheckConfig: CustomHealthCheckConfig,
      customRuntimeConfig: CustomRuntimeConfig,
      description: 'string',
      diskSize: 'number',
      enableAppMetric: 'boolean',
      enableArmsAdvanced: 'boolean',
      environmentVariables: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      gpuMemorySize: 'number',
      handler: 'string',
      httpTriggerConfig: HTTPTriggerConfig,
      imageConfig: ImageConfig,
      initializationTimeout: 'number',
      initializer: 'string',
      instanceConcurrency: 'number',
      instanceLifecycleConfig: InstanceLifecycleConfig,
      instanceSoftConcurrency: 'number',
      instanceType: 'string',
      internetAccess: 'boolean',
      lastModifiedTime: 'string',
      layers: { 'type': 'array', 'itemType': 'string' },
      layersArnV2: { 'type': 'array', 'itemType': 'string' },
      livenessProbe: Probe,
      logConfig: LogConfig,
      memorySize: 'number',
      namespace: 'string',
      namespaceID: 'string',
      namespaceName: 'string',
      nasConfig: NASConfig,
      ossMountConfig: OSSMountConfig,
      runtime: 'string',
      scaleConfig: ScaleConfig,
      slsConfig: SLSConfig,
      startupProbe: Probe,
      timeout: 'number',
      tracingConfig: TracingConfig,
      urlInternet: 'string',
      urlIntranet: 'string',
      version: Version,
      vpcConfig: VPCConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplicationStatus extends $tea.Model {
  instanceCount?: number;
  scaleConfig?: ScaleConfig;
  static names(): { [key: string]: string } {
    return {
      instanceCount: 'instanceCount',
      scaleConfig: 'scaleConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceCount: 'number',
      scaleConfig: ScaleConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplicationWithStatus extends $tea.Model {
  application?: Application;
  status?: ApplicationStatus;
  static names(): { [key: string]: string } {
    return {
      application: 'application',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      application: Application,
      status: ApplicationStatus,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ArmsConfig extends $tea.Model {
  agentVersion?: string;
  appId?: string;
  licenseKey?: string;
  static names(): { [key: string]: string } {
    return {
      agentVersion: 'agentVersion',
      appId: 'appId',
      licenseKey: 'licenseKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentVersion: 'string',
      appId: 'string',
      licenseKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BuildPipeline extends $tea.Model {
  applicationId?: string;
  applicationName?: string;
  buildConfig?: BuildPipelineBuildConfig;
  codeConfig?: BuildPipelineCodeConfig;
  deployConfig?: BuildPipelineDeployConfig;
  enabled?: boolean;
  imageConfig?: BuildPipelineImageConfig;
  packageConfig?: BuildPipelinePackageConfig;
  triggerConfig?: BuildPipelineTriggerConfig;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      applicationName: 'ApplicationName',
      buildConfig: 'BuildConfig',
      codeConfig: 'CodeConfig',
      deployConfig: 'DeployConfig',
      enabled: 'Enabled',
      imageConfig: 'ImageConfig',
      packageConfig: 'PackageConfig',
      triggerConfig: 'TriggerConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      applicationName: 'string',
      buildConfig: BuildPipelineBuildConfig,
      codeConfig: BuildPipelineCodeConfig,
      deployConfig: BuildPipelineDeployConfig,
      enabled: 'boolean',
      imageConfig: BuildPipelineImageConfig,
      packageConfig: BuildPipelinePackageConfig,
      triggerConfig: BuildPipelineTriggerConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BuildPipelineRun extends $tea.Model {
  buildConfig?: BuildPipelineRunBuildConfig;
  buildDuration?: number;
  codeConfig?: BuildPipelineRunCodeConfig;
  createTime?: number;
  deployConfig?: BuildPipelineRunDeployConfig;
  deployDuration?: number;
  endTime?: number;
  imageConfig?: BuildPipelineRunImageConfig;
  packageConfig?: BuildPipelineRunPackageConfig;
  pipelineId?: string;
  pipelineRunId?: string;
  startTime?: number;
  status?: string;
  steps?: BuildPipelineRunSteps[];
  triggerConfig?: BuildPipelineRunTriggerConfig;
  versionId?: string;
  waitDuration?: number;
  static names(): { [key: string]: string } {
    return {
      buildConfig: 'BuildConfig',
      buildDuration: 'BuildDuration',
      codeConfig: 'CodeConfig',
      createTime: 'CreateTime',
      deployConfig: 'DeployConfig',
      deployDuration: 'DeployDuration',
      endTime: 'EndTime',
      imageConfig: 'ImageConfig',
      packageConfig: 'PackageConfig',
      pipelineId: 'PipelineId',
      pipelineRunId: 'PipelineRunId',
      startTime: 'StartTime',
      status: 'Status',
      steps: 'Steps',
      triggerConfig: 'TriggerConfig',
      versionId: 'VersionId',
      waitDuration: 'WaitDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildConfig: BuildPipelineRunBuildConfig,
      buildDuration: 'number',
      codeConfig: BuildPipelineRunCodeConfig,
      createTime: 'number',
      deployConfig: BuildPipelineRunDeployConfig,
      deployDuration: 'number',
      endTime: 'number',
      imageConfig: BuildPipelineRunImageConfig,
      packageConfig: BuildPipelineRunPackageConfig,
      pipelineId: 'string',
      pipelineRunId: 'string',
      startTime: 'number',
      status: 'string',
      steps: { 'type': 'array', 'itemType': BuildPipelineRunSteps },
      triggerConfig: BuildPipelineRunTriggerConfig,
      versionId: 'string',
      waitDuration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BuildPipelineRunLogLine extends $tea.Model {
  content?: string;
  offset?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      offset: 'Offset',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      offset: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CertConfig extends $tea.Model {
  certName?: string;
  certificate?: string;
  privateKey?: string;
  static names(): { [key: string]: string } {
    return {
      certName: 'certName',
      certificate: 'certificate',
      privateKey: 'privateKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certName: 'string',
      certificate: 'string',
      privateKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Container extends $tea.Model {
  args?: string;
  command?: string;
  environmentVariables?: { [key: string]: string };
  image?: string;
  metricsCollectConfig?: MetricsCollectConfig;
  port?: number;
  requestConcurrency?: number;
  requestTimeout?: number;
  resources?: ContainerResources;
  SLSCollectConfigs?: SLSCollectConfigs;
  startupProbe?: StartupProbe;
  webNASConfig?: WebNASConfig;
  webOSSConfig?: WebOSSConfig;
  static names(): { [key: string]: string } {
    return {
      args: 'Args',
      command: 'Command',
      environmentVariables: 'EnvironmentVariables',
      image: 'Image',
      metricsCollectConfig: 'MetricsCollectConfig',
      port: 'Port',
      requestConcurrency: 'RequestConcurrency',
      requestTimeout: 'RequestTimeout',
      resources: 'Resources',
      SLSCollectConfigs: 'SLSCollectConfigs',
      startupProbe: 'StartupProbe',
      webNASConfig: 'WebNASConfig',
      webOSSConfig: 'WebOSSConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      args: 'string',
      command: 'string',
      environmentVariables: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      image: 'string',
      metricsCollectConfig: MetricsCollectConfig,
      port: 'number',
      requestConcurrency: 'number',
      requestTimeout: 'number',
      resources: ContainerResources,
      SLSCollectConfigs: SLSCollectConfigs,
      startupProbe: StartupProbe,
      webNASConfig: WebNASConfig,
      webOSSConfig: WebOSSConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContainerResources extends $tea.Model {
  cpu?: number;
  memory?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      memory: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationInput extends $tea.Model {
  applicationName?: string;
  args?: string;
  caPort?: number;
  code?: InputCodeLocation;
  command?: string;
  cpu?: number;
  customDNS?: CustomDNS;
  customHealthCheckConfig?: CustomHealthCheckConfig;
  customRuntimeConfig?: CustomRuntimeConfig;
  description?: string;
  diskSize?: number;
  environmentVariables?: { [key: string]: string };
  gpuMemorySize?: number;
  handler?: string;
  httpTriggerConfig?: HTTPTriggerConfig;
  imageConfig?: ImageConfig;
  initializationTimeout?: number;
  initializer?: string;
  instanceConcurrency?: number;
  instanceLifecycleConfig?: InstanceLifecycleConfig;
  instanceSoftConcurrency?: number;
  instanceType?: string;
  internetAccess?: boolean;
  layers?: string[];
  livenessProbe?: Probe;
  logConfig?: LogConfig;
  memorySize?: number;
  namespaceID?: string;
  nasConfig?: NASConfig;
  ossMountConfig?: OSSMountConfig;
  runtime?: string;
  scaleConfig?: ScaleConfig;
  slsConfig?: SLSConfig;
  startupProbe?: Probe;
  timeout?: number;
  tracingConfig?: TracingConfig;
  vpcConfig?: VPCConfig;
  static names(): { [key: string]: string } {
    return {
      applicationName: 'applicationName',
      args: 'args',
      caPort: 'caPort',
      code: 'code',
      command: 'command',
      cpu: 'cpu',
      customDNS: 'customDNS',
      customHealthCheckConfig: 'customHealthCheckConfig',
      customRuntimeConfig: 'customRuntimeConfig',
      description: 'description',
      diskSize: 'diskSize',
      environmentVariables: 'environmentVariables',
      gpuMemorySize: 'gpuMemorySize',
      handler: 'handler',
      httpTriggerConfig: 'httpTriggerConfig',
      imageConfig: 'imageConfig',
      initializationTimeout: 'initializationTimeout',
      initializer: 'initializer',
      instanceConcurrency: 'instanceConcurrency',
      instanceLifecycleConfig: 'instanceLifecycleConfig',
      instanceSoftConcurrency: 'instanceSoftConcurrency',
      instanceType: 'instanceType',
      internetAccess: 'internetAccess',
      layers: 'layers',
      livenessProbe: 'livenessProbe',
      logConfig: 'logConfig',
      memorySize: 'memorySize',
      namespaceID: 'namespaceID',
      nasConfig: 'nasConfig',
      ossMountConfig: 'ossMountConfig',
      runtime: 'runtime',
      scaleConfig: 'scaleConfig',
      slsConfig: 'slsConfig',
      startupProbe: 'startupProbe',
      timeout: 'timeout',
      tracingConfig: 'tracingConfig',
      vpcConfig: 'vpcConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
      args: 'string',
      caPort: 'number',
      code: InputCodeLocation,
      command: 'string',
      cpu: 'number',
      customDNS: CustomDNS,
      customHealthCheckConfig: CustomHealthCheckConfig,
      customRuntimeConfig: CustomRuntimeConfig,
      description: 'string',
      diskSize: 'number',
      environmentVariables: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      gpuMemorySize: 'number',
      handler: 'string',
      httpTriggerConfig: HTTPTriggerConfig,
      imageConfig: ImageConfig,
      initializationTimeout: 'number',
      initializer: 'string',
      instanceConcurrency: 'number',
      instanceLifecycleConfig: InstanceLifecycleConfig,
      instanceSoftConcurrency: 'number',
      instanceType: 'string',
      internetAccess: 'boolean',
      layers: { 'type': 'array', 'itemType': 'string' },
      livenessProbe: Probe,
      logConfig: LogConfig,
      memorySize: 'number',
      namespaceID: 'string',
      nasConfig: NASConfig,
      ossMountConfig: OSSMountConfig,
      runtime: 'string',
      scaleConfig: ScaleConfig,
      slsConfig: SLSConfig,
      startupProbe: Probe,
      timeout: 'number',
      tracingConfig: TracingConfig,
      vpcConfig: VPCConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomDomainInput extends $tea.Model {
  applicationName?: string;
  certConfig?: CertConfig;
  domainName?: string;
  keepFullPath?: boolean;
  namespaceID?: string;
  protocol?: string;
  tlsConfig?: TLSConfig;
  wafConfig?: WAFConfig;
  static names(): { [key: string]: string } {
    return {
      applicationName: 'applicationName',
      certConfig: 'certConfig',
      domainName: 'domainName',
      keepFullPath: 'keepFullPath',
      namespaceID: 'namespaceID',
      protocol: 'protocol',
      tlsConfig: 'tlsConfig',
      wafConfig: 'wafConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
      certConfig: CertConfig,
      domainName: 'string',
      keepFullPath: 'boolean',
      namespaceID: 'string',
      protocol: 'string',
      tlsConfig: TLSConfig,
      wafConfig: WAFConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSlsIndexRequest extends $tea.Model {
  logstore?: string;
  project?: string;
  static names(): { [key: string]: string } {
    return {
      logstore: 'logstore',
      project: 'project',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logstore: 'string',
      project: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSlsIndexResponse extends $tea.Model {
  requestId?: string;
  logStore?: string;
  project?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      logStore: 'logStore',
      project: 'project',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      logStore: 'string',
      project: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSlsResourceResponse extends $tea.Model {
  logStore?: string;
  project?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      logStore: 'logStore',
      project: 'project',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logStore: 'string',
      project: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWebApplicationInput extends $tea.Model {
  applicationName?: string;
  description?: string;
  revisionConfig?: RevisionConfig;
  webNetworkConfig?: WebNetworkConfig;
  webScalingConfig?: WebScalingConfig;
  webTrafficConfig?: WebTrafficConfig;
  static names(): { [key: string]: string } {
    return {
      applicationName: 'ApplicationName',
      description: 'Description',
      revisionConfig: 'RevisionConfig',
      webNetworkConfig: 'WebNetworkConfig',
      webScalingConfig: 'WebScalingConfig',
      webTrafficConfig: 'WebTrafficConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
      description: 'string',
      revisionConfig: RevisionConfig,
      webNetworkConfig: WebNetworkConfig,
      webScalingConfig: WebScalingConfig,
      webTrafficConfig: WebTrafficConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWebCustomDomainInput extends $tea.Model {
  defaultForwardingAppName?: string;
  domainName?: string;
  protocol?: string;
  webCertConfig?: WebCertConfig;
  webTLSConfig?: WebTLSConfig;
  webWAFConfig?: WebWAFConfig;
  static names(): { [key: string]: string } {
    return {
      defaultForwardingAppName: 'DefaultForwardingAppName',
      domainName: 'DomainName',
      protocol: 'Protocol',
      webCertConfig: 'WebCertConfig',
      webTLSConfig: 'WebTLSConfig',
      webWAFConfig: 'WebWAFConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultForwardingAppName: 'string',
      domainName: 'string',
      protocol: 'string',
      webCertConfig: WebCertConfig,
      webTLSConfig: WebTLSConfig,
      webWAFConfig: WebWAFConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CustomDNS extends $tea.Model {
  dnsOptions?: DNSOption[];
  nameServers?: string[];
  searches?: string[];
  static names(): { [key: string]: string } {
    return {
      dnsOptions: 'dnsOptions',
      nameServers: 'nameServers',
      searches: 'searches',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnsOptions: { 'type': 'array', 'itemType': DNSOption },
      nameServers: { 'type': 'array', 'itemType': 'string' },
      searches: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CustomDomain extends $tea.Model {
  accountId?: string;
  apiVersion?: string;
  certConfig?: CertConfig;
  createdTime?: string;
  domainName?: string;
  keepFullPath?: boolean;
  lastModifiedTime?: string;
  namespaceID?: string;
  protocol?: string;
  requestId?: string;
  routeConfig?: RouteConfig;
  subdomainCount?: string;
  tlsConfig?: TLSConfig;
  wafConfig?: WAFConfig;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      apiVersion: 'apiVersion',
      certConfig: 'certConfig',
      createdTime: 'createdTime',
      domainName: 'domainName',
      keepFullPath: 'keepFullPath',
      lastModifiedTime: 'lastModifiedTime',
      namespaceID: 'namespaceID',
      protocol: 'protocol',
      requestId: 'requestId',
      routeConfig: 'routeConfig',
      subdomainCount: 'subdomainCount',
      tlsConfig: 'tlsConfig',
      wafConfig: 'wafConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      apiVersion: 'string',
      certConfig: CertConfig,
      createdTime: 'string',
      domainName: 'string',
      keepFullPath: 'boolean',
      lastModifiedTime: 'string',
      namespaceID: 'string',
      protocol: 'string',
      requestId: 'string',
      routeConfig: RouteConfig,
      subdomainCount: 'string',
      tlsConfig: TLSConfig,
      wafConfig: WAFConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CustomHealthCheckConfig extends $tea.Model {
  failureThreshold?: number;
  httpGetUrl?: string;
  initialDelaySeconds?: number;
  periodSeconds?: number;
  successThreshold?: number;
  timeoutSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      failureThreshold: 'failureThreshold',
      httpGetUrl: 'httpGetUrl',
      initialDelaySeconds: 'initialDelaySeconds',
      periodSeconds: 'periodSeconds',
      successThreshold: 'successThreshold',
      timeoutSeconds: 'timeoutSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failureThreshold: 'number',
      httpGetUrl: 'string',
      initialDelaySeconds: 'number',
      periodSeconds: 'number',
      successThreshold: 'number',
      timeoutSeconds: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CustomRuntimeConfig extends $tea.Model {
  args?: string[];
  command?: string[];
  static names(): { [key: string]: string } {
    return {
      args: 'args',
      command: 'command',
    };
  }

  static types(): { [key: string]: any } {
    return {
      args: { 'type': 'array', 'itemType': 'string' },
      command: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DNSOption extends $tea.Model {
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceLogsOutput extends $tea.Model {
  webLogEntrys?: WebLogEntry[];
  static names(): { [key: string]: string } {
    return {
      webLogEntrys: 'WebLogEntrys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      webLogEntrys: { 'type': 'array', 'itemType': WebLogEntry },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebAppStaticsOutput extends $tea.Model {
  length?: number;
  webAppStatics?: WebStaticsInfo[];
  static names(): { [key: string]: string } {
    return {
      length: 'Length',
      webAppStatics: 'WebAppStatics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      length: 'number',
      webAppStatics: { 'type': 'array', 'itemType': WebStaticsInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebStaticsQueryOutput extends $tea.Model {
  length?: number;
  webStatics?: WebStaticsInfo[];
  static names(): { [key: string]: string } {
    return {
      length: 'Length',
      webStatics: 'WebStatics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      length: 'number',
      webStatics: { 'type': 'array', 'itemType': WebStaticsInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecAction extends $tea.Model {
  command?: string[];
  static names(): { [key: string]: string } {
    return {
      command: 'command',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExternalErrorSAEWeb extends $tea.Model {
  code?: number;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      errorCode: 'errorCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GRPCAction extends $tea.Model {
  port?: number;
  service?: string;
  static names(): { [key: string]: string } {
    return {
      port: 'port',
      service: 'service',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'number',
      service: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationLogsInput extends $tea.Model {
  backwardLine?: number;
  endTime?: number;
  forwardLine?: number;
  instanceID?: string;
  isTail?: boolean;
  match?: string;
  message?: string;
  offset?: number;
  packID?: string;
  packMeta?: string;
  startTime?: number;
  timestamp?: string;
  versionID?: string;
  static names(): { [key: string]: string } {
    return {
      backwardLine: 'backwardLine',
      endTime: 'endTime',
      forwardLine: 'forwardLine',
      instanceID: 'instanceID',
      isTail: 'isTail',
      match: 'match',
      message: 'message',
      offset: 'offset',
      packID: 'packID',
      packMeta: 'packMeta',
      startTime: 'startTime',
      timestamp: 'timestamp',
      versionID: 'versionID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backwardLine: 'number',
      endTime: 'number',
      forwardLine: 'number',
      instanceID: 'string',
      isTail: 'boolean',
      match: 'string',
      message: 'string',
      offset: 'number',
      packID: 'string',
      packMeta: 'string',
      startTime: 'number',
      timestamp: 'string',
      versionID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationLogsOutput extends $tea.Model {
  logEntrys?: LogEntry[];
  nextOffset?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      logEntrys: 'logEntrys',
      nextOffset: 'nextOffset',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logEntrys: { 'type': 'array', 'itemType': LogEntry },
      nextOffset: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceLogsInput extends $tea.Model {
  backwardLine?: number;
  endTime?: number;
  forwardLine?: number;
  isTail?: boolean;
  match?: string;
  message?: string;
  offset?: number;
  packID?: string;
  packMeta?: string;
  startTime?: number;
  timestamp?: string;
  versionID?: string;
  static names(): { [key: string]: string } {
    return {
      backwardLine: 'backwardLine',
      endTime: 'endTime',
      forwardLine: 'forwardLine',
      isTail: 'isTail',
      match: 'match',
      message: 'message',
      offset: 'offset',
      packID: 'packID',
      packMeta: 'packMeta',
      startTime: 'startTime',
      timestamp: 'timestamp',
      versionID: 'versionID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backwardLine: 'number',
      endTime: 'number',
      forwardLine: 'number',
      isTail: 'boolean',
      match: 'string',
      message: 'string',
      offset: 'number',
      packID: 'string',
      packMeta: 'string',
      startTime: 'number',
      timestamp: 'string',
      versionID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceLogsOutput extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPerRequestLogsInput extends $tea.Model {
  endTime?: number;
  errorType?: string;
  forwardLine?: number;
  instanceID?: string;
  isColdStart?: boolean;
  requestID?: string;
  startTime?: number;
  timestamp?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      errorType: 'errorType',
      forwardLine: 'forwardLine',
      instanceID: 'instanceID',
      isColdStart: 'isColdStart',
      requestID: 'requestID',
      startTime: 'startTime',
      timestamp: 'timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      errorType: 'string',
      forwardLine: 'number',
      instanceID: 'string',
      isColdStart: 'boolean',
      requestID: 'string',
      startTime: 'number',
      timestamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPerRequestLogsOutput extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaOutput extends $tea.Model {
  requestId?: string;
  instanceLimit?: number;
  instanceUsed?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instanceLimit: 'instanceLimit',
      instanceUsed: 'instanceUsed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instanceLimit: 'number',
      instanceUsed: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HTTPGetAction extends $tea.Model {
  host?: string;
  httpHeaders?: HTTPHeader[];
  path?: string;
  port?: number;
  scheme?: string;
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
      httpHeaders: 'HttpHeaders',
      path: 'Path',
      port: 'Port',
      scheme: 'Scheme',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      httpHeaders: { 'type': 'array', 'itemType': HTTPHeader },
      path: 'string',
      port: 'number',
      scheme: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HTTPHeader extends $tea.Model {
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HTTPTriggerConfig extends $tea.Model {
  aclConfig?: AclConfig;
  authConfig?: any;
  authType?: string;
  disableURLInternet?: boolean;
  safeMode?: boolean;
  static names(): { [key: string]: string } {
    return {
      aclConfig: 'aclConfig',
      authConfig: 'authConfig',
      authType: 'authType',
      disableURLInternet: 'disableURLInternet',
      safeMode: 'safeMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclConfig: AclConfig,
      authConfig: 'any',
      authType: 'string',
      disableURLInternet: 'boolean',
      safeMode: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageConfig extends $tea.Model {
  accelerationType?: string;
  image?: string;
  instanceID?: string;
  static names(): { [key: string]: string } {
    return {
      accelerationType: 'accelerationType',
      image: 'image',
      instanceID: 'instanceID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerationType: 'string',
      image: 'string',
      instanceID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InputCodeLocation extends $tea.Model {
  ossBucketName?: string;
  ossObjectName?: string;
  zipFile?: string;
  static names(): { [key: string]: string } {
    return {
      ossBucketName: 'ossBucketName',
      ossObjectName: 'ossObjectName',
      zipFile: 'zipFile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ossBucketName: 'string',
      ossObjectName: 'string',
      zipFile: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstanceExecAuthorizationInput extends $tea.Model {
  options?: InstanceExecAuthorizationInputOptions;
  static names(): { [key: string]: string } {
    return {
      options: 'options',
    };
  }

  static types(): { [key: string]: any } {
    return {
      options: InstanceExecAuthorizationInputOptions,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstanceExecAuthorizationInputOptions extends $tea.Model {
  command?: string[];
  stderr?: boolean;
  stdin?: boolean;
  stdout?: boolean;
  tty?: boolean;
  static names(): { [key: string]: string } {
    return {
      command: 'command',
      stderr: 'stderr',
      stdin: 'stdin',
      stdout: 'stdout',
      tty: 'tty',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: { 'type': 'array', 'itemType': 'string' },
      stderr: 'boolean',
      stdin: 'boolean',
      stdout: 'boolean',
      tty: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstanceExecAuthorizationOutput extends $tea.Model {
  accessKeyId?: string;
  accountId?: string;
  authorization?: string;
  date?: string;
  endpoint?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'accessKeyId',
      accountId: 'accountId',
      authorization: 'authorization',
      date: 'date',
      endpoint: 'endpoint',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      accountId: 'string',
      authorization: 'string',
      date: 'string',
      endpoint: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstanceInfo extends $tea.Model {
  imageUrl?: string;
  instanceId?: string;
  status?: string;
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      imageUrl: 'imageUrl',
      instanceId: 'instanceId',
      status: 'status',
      versionId: 'versionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrl: 'string',
      instanceId: 'string',
      status: 'string',
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstanceLifecycleConfig extends $tea.Model {
  preFreeze?: LifecycleHook;
  preStop?: LifecycleHook;
  static names(): { [key: string]: string } {
    return {
      preFreeze: 'preFreeze',
      preStop: 'preStop',
    };
  }

  static types(): { [key: string]: any } {
    return {
      preFreeze: LifecycleHook,
      preStop: LifecycleHook,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstanceMetricInfo extends $tea.Model {
  applicationID?: string;
  cpuPercent?: number;
  cpuQuotaPercent?: number;
  instanceID?: string;
  memoryLimitMB?: number;
  memoryUsageMB?: number;
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      applicationID: 'applicationID',
      cpuPercent: 'cpuPercent',
      cpuQuotaPercent: 'cpuQuotaPercent',
      instanceID: 'instanceID',
      memoryLimitMB: 'memoryLimitMB',
      memoryUsageMB: 'memoryUsageMB',
      timestamp: 'timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationID: 'string',
      cpuPercent: 'number',
      cpuQuotaPercent: 'number',
      instanceID: 'string',
      memoryLimitMB: 'number',
      memoryUsageMB: 'number',
      timestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JaegerConfig extends $tea.Model {
  endpoint?: string;
  static names(): { [key: string]: string } {
    return {
      endpoint: 'endpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoint: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LifecycleHook extends $tea.Model {
  handler?: string;
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      handler: 'handler',
      timeout: 'timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      handler: 'string',
      timeout: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationVersionsOutput extends $tea.Model {
  direction?: string;
  nextToken?: string;
  requestId?: string;
  versions?: Version[];
  static names(): { [key: string]: string } {
    return {
      direction: 'direction',
      nextToken: 'nextToken',
      requestId: 'requestId',
      versions: 'versions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      nextToken: 'string',
      requestId: 'string',
      versions: { 'type': 'array', 'itemType': Version },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsOutput extends $tea.Model {
  applications?: Application[];
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applications: 'applications',
      nextToken: 'nextToken',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applications: { 'type': 'array', 'itemType': Application },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsWithStatusOutput extends $tea.Model {
  applications?: ApplicationWithStatus[];
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applications: 'applications',
      nextToken: 'nextToken',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applications: { 'type': 'array', 'itemType': ApplicationWithStatus },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomDomainOutput extends $tea.Model {
  customDomains?: CustomDomain[];
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      customDomains: 'customDomains',
      nextToken: 'nextToken',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customDomains: { 'type': 'array', 'itemType': CustomDomain },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesMetricsOutput extends $tea.Model {
  requestId?: string;
  metricsList?: InstanceMetricInfo[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      metricsList: 'metricsList',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      metricsList: { 'type': 'array', 'itemType': InstanceMetricInfo },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesOutput extends $tea.Model {
  currentError?: string;
  instances?: InstanceInfo[];
  requestId?: string;
  versionStatus?: { [key: string]: VersionStatus };
  static names(): { [key: string]: string } {
    return {
      currentError: 'currentError',
      instances: 'instances',
      requestId: 'requestId',
      versionStatus: 'versionStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentError: 'string',
      instances: { 'type': 'array', 'itemType': InstanceInfo },
      requestId: 'string',
      versionStatus: { 'type': 'map', 'keyType': 'string', 'valueType': VersionStatus },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMetricsOutput extends $tea.Model {
  requestId?: string;
  metrics?: { [key: string]: MetricInfo[] };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      metrics: 'metrics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      metrics: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': MetricInfo } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStaticsQueryResponse extends $tea.Model {
  length?: number;
  sort?: string;
  statics?: StaticsInfo[];
  static names(): { [key: string]: string } {
    return {
      length: 'length',
      sort: 'sort',
      statics: 'statics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      length: 'number',
      sort: 'string',
      statics: { 'type': 'array', 'itemType': StaticsInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWebApplicationInstancesBody extends $tea.Model {
  code?: number;
  data?: ListWebInstancesOutput;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ListWebInstancesOutput,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWebApplicationRevisionsBody extends $tea.Model {
  code?: number;
  data?: ListWebApplicationRevisionsOutput;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ListWebApplicationRevisionsOutput,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWebApplicationRevisionsOutput extends $tea.Model {
  nextToken?: string;
  revisions?: Revision[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      revisions: 'Revisions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      revisions: { 'type': 'array', 'itemType': Revision },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWebApplicationsBody extends $tea.Model {
  code?: number;
  data?: ListWebApplicationsOutput;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ListWebApplicationsOutput,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWebApplicationsOutput extends $tea.Model {
  nextToken?: string;
  webApplicationWithInstanceCount?: WebApplicationWithInstanceCount[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      webApplicationWithInstanceCount: 'WebApplicationWithInstanceCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      webApplicationWithInstanceCount: { 'type': 'array', 'itemType': WebApplicationWithInstanceCount },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWebCustomDomainBody extends $tea.Model {
  code?: number;
  data?: ListWebCustomDomainOutput;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ListWebCustomDomainOutput,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWebCustomDomainOutput extends $tea.Model {
  nextToken?: string;
  webCustomDomains?: WebCustomDomain[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      webCustomDomains: 'WebCustomDomains',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      webCustomDomains: { 'type': 'array', 'itemType': WebCustomDomain },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWebInstancesOutput extends $tea.Model {
  currentError?: string;
  webInstances?: WebInstanceInfo[];
  webVersionStatus?: { [key: string]: WebVersionStatus };
  static names(): { [key: string]: string } {
    return {
      currentError: 'CurrentError',
      webInstances: 'WebInstances',
      webVersionStatus: 'WebVersionStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentError: 'string',
      webInstances: { 'type': 'array', 'itemType': WebInstanceInfo },
      webVersionStatus: { 'type': 'map', 'keyType': 'string', 'valueType': WebVersionStatus },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LogConfig extends $tea.Model {
  enableInstanceMetrics?: boolean;
  enableRequestMetrics?: boolean;
  logBeginRule?: string;
  logstore?: string;
  project?: string;
  pushToUserSLS?: boolean;
  static names(): { [key: string]: string } {
    return {
      enableInstanceMetrics: 'enableInstanceMetrics',
      enableRequestMetrics: 'enableRequestMetrics',
      logBeginRule: 'logBeginRule',
      logstore: 'logstore',
      project: 'project',
      pushToUserSLS: 'pushToUserSLS',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableInstanceMetrics: 'boolean',
      enableRequestMetrics: 'boolean',
      logBeginRule: 'string',
      logstore: 'string',
      project: 'string',
      pushToUserSLS: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LogEntry extends $tea.Model {
  instanceID?: string;
  message?: string;
  offset?: number;
  packID?: string;
  packMeta?: string;
  qualifier?: string;
  timestamp?: number;
  versionID?: string;
  static names(): { [key: string]: string } {
    return {
      instanceID: 'instanceID',
      message: 'message',
      offset: 'offset',
      packID: 'packID',
      packMeta: 'packMeta',
      qualifier: 'qualifier',
      timestamp: 'timestamp',
      versionID: 'versionID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceID: 'string',
      message: 'string',
      offset: 'number',
      packID: 'string',
      packMeta: 'string',
      qualifier: 'string',
      timestamp: 'number',
      versionID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MetricInfo extends $tea.Model {
  average?: number;
  count?: number;
  maximum?: number;
  minimum?: number;
  sum?: number;
  timestamp?: number;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      average: 'Average',
      count: 'Count',
      maximum: 'Maximum',
      minimum: 'Minimum',
      sum: 'Sum',
      timestamp: 'timestamp',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      average: 'number',
      count: 'number',
      maximum: 'number',
      minimum: 'number',
      sum: 'number',
      timestamp: 'number',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MetricsCollectConfig extends $tea.Model {
  enablePushToUserSLS?: boolean;
  logstoreName?: string;
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      enablePushToUserSLS: 'EnablePushToUserSLS',
      logstoreName: 'LogstoreName',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enablePushToUserSLS: 'boolean',
      logstoreName: 'string',
      projectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NASConfig extends $tea.Model {
  mountPoints?: NASMountConfig[];
  static names(): { [key: string]: string } {
    return {
      mountPoints: 'mountPoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountPoints: { 'type': 'array', 'itemType': NASMountConfig },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NASMountConfig extends $tea.Model {
  enableTLS?: boolean;
  mountDir?: string;
  serverAddr?: string;
  static names(): { [key: string]: string } {
    return {
      enableTLS: 'enableTLS',
      mountDir: 'mountDir',
      serverAddr: 'serverAddr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableTLS: 'boolean',
      mountDir: 'string',
      serverAddr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OSSMountConfig extends $tea.Model {
  mountPoints?: OSSMountPoint[];
  static names(): { [key: string]: string } {
    return {
      mountPoints: 'mountPoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountPoints: { 'type': 'array', 'itemType': OSSMountPoint },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OSSMountPoint extends $tea.Model {
  bucketName?: string;
  bucketPath?: string;
  mountDir?: string;
  readOnly?: boolean;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'bucketName',
      bucketPath: 'bucketPath',
      mountDir: 'mountDir',
      readOnly: 'readOnly',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      bucketPath: 'string',
      mountDir: 'string',
      readOnly: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PathConfig extends $tea.Model {
  applicationName?: string;
  path?: string;
  static names(): { [key: string]: string } {
    return {
      applicationName: 'applicationName',
      path: 'path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
      path: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PermissionAssistantApi extends $tea.Model {
  createTime?: string;
  id?: number;
  name?: string;
  resourceType?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      id: 'id',
      name: 'name',
      resourceType: 'resourceType',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      id: 'number',
      name: 'string',
      resourceType: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PolicyItem extends $tea.Model {
  key?: string;
  operator?: string;
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      operator: 'operator',
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      operator: 'string',
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PriceEstimateFeature extends $tea.Model {
  appType?: string;
  cpuCore?: number;
  cpuStrategy?: string;
  envType?: string;
  highLoadInstanceCount?: number;
  highLoadQps?: number;
  highLoadSeconds?: number;
  instanceQps?: number;
  internetOutboundGiB?: number;
  lowLoadInstanceCount?: number;
  lowLoadQps?: number;
  lowLoadSeconds?: number;
  maxInstanceCount?: number;
  memoryGiB?: number;
  minInstanceCount?: number;
  noneLoadInstanceCount?: number;
  noneLoadSeconds?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      appType: 'AppType',
      cpuCore: 'CpuCore',
      cpuStrategy: 'CpuStrategy',
      envType: 'EnvType',
      highLoadInstanceCount: 'HighLoadInstanceCount',
      highLoadQps: 'HighLoadQps',
      highLoadSeconds: 'HighLoadSeconds',
      instanceQps: 'InstanceQps',
      internetOutboundGiB: 'InternetOutboundGiB',
      lowLoadInstanceCount: 'LowLoadInstanceCount',
      lowLoadQps: 'LowLoadQps',
      lowLoadSeconds: 'LowLoadSeconds',
      maxInstanceCount: 'MaxInstanceCount',
      memoryGiB: 'MemoryGiB',
      minInstanceCount: 'MinInstanceCount',
      noneLoadInstanceCount: 'NoneLoadInstanceCount',
      noneLoadSeconds: 'NoneLoadSeconds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appType: 'string',
      cpuCore: 'number',
      cpuStrategy: 'string',
      envType: 'string',
      highLoadInstanceCount: 'number',
      highLoadQps: 'number',
      highLoadSeconds: 'number',
      instanceQps: 'number',
      internetOutboundGiB: 'number',
      lowLoadInstanceCount: 'number',
      lowLoadQps: 'number',
      lowLoadSeconds: 'number',
      maxInstanceCount: 'number',
      memoryGiB: 'number',
      minInstanceCount: 'number',
      noneLoadInstanceCount: 'number',
      noneLoadSeconds: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PriceEstimateOutput extends $tea.Model {
  apps?: PriceEstimateOutputApps[];
  items?: PriceEstimateOutputItems[];
  totalPrice?: number;
  static names(): { [key: string]: string } {
    return {
      apps: 'Apps',
      items: 'Items',
      totalPrice: 'TotalPrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apps: { 'type': 'array', 'itemType': PriceEstimateOutputApps },
      items: { 'type': 'array', 'itemType': PriceEstimateOutputItems },
      totalPrice: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Probe extends $tea.Model {
  failureThreshold?: number;
  initialDelaySeconds?: number;
  periodSeconds?: number;
  probeHandler?: ProbeProbeHandler;
  timeoutSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      failureThreshold: 'failureThreshold',
      initialDelaySeconds: 'initialDelaySeconds',
      periodSeconds: 'periodSeconds',
      probeHandler: 'probeHandler',
      timeoutSeconds: 'timeoutSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failureThreshold: 'number',
      initialDelaySeconds: 'number',
      periodSeconds: 'number',
      probeHandler: ProbeProbeHandler,
      timeoutSeconds: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProbeHandler extends $tea.Model {
  httpGet?: HTTPGetAction;
  tcpSocket?: TCPSocketAction;
  static names(): { [key: string]: string } {
    return {
      httpGet: 'HttpGet',
      tcpSocket: 'TcpSocket',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpGet: HTTPGetAction,
      tcpSocket: TCPSocketAction,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishApplicationVersionInput extends $tea.Model {
  description?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishWebApplicationRevisionInput extends $tea.Model {
  containers?: Container[];
  description?: string;
  enableArmsMetrics?: boolean;
  takeEffect?: boolean;
  static names(): { [key: string]: string } {
    return {
      containers: 'Containers',
      description: 'Description',
      enableArmsMetrics: 'EnableArmsMetrics',
      takeEffect: 'TakeEffect',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containers: { 'type': 'array', 'itemType': Container },
      description: 'string',
      enableArmsMetrics: 'boolean',
      takeEffect: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Revision extends $tea.Model {
  createdTime?: string;
  description?: string;
  revisionConfig?: RevisionConfig;
  revisionId?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      description: 'Description',
      revisionConfig: 'RevisionConfig',
      revisionId: 'RevisionId',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      description: 'string',
      revisionConfig: RevisionConfig,
      revisionId: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevisionConfig extends $tea.Model {
  containers?: Container[];
  enableArmsMetrics?: boolean;
  webNetworkConfig?: WebNetworkConfig;
  static names(): { [key: string]: string } {
    return {
      containers: 'Containers',
      enableArmsMetrics: 'EnableArmsMetrics',
      webNetworkConfig: 'WebNetworkConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containers: { 'type': 'array', 'itemType': Container },
      enableArmsMetrics: 'boolean',
      webNetworkConfig: WebNetworkConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RouteConfig extends $tea.Model {
  routes?: PathConfig[];
  static names(): { [key: string]: string } {
    return {
      routes: 'routes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routes: { 'type': 'array', 'itemType': PathConfig },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RoutePolicy extends $tea.Model {
  condition?: string;
  policyItems?: PolicyItem[];
  static names(): { [key: string]: string } {
    return {
      condition: 'condition',
      policyItems: 'policyItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: 'string',
      policyItems: { 'type': 'array', 'itemType': PolicyItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SLSCollectConfig extends $tea.Model {
  logPath?: string;
  logType?: string;
  logstoreName?: string;
  logtailName?: string;
  machineGroup?: string;
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      logPath: 'LogPath',
      logType: 'LogType',
      logstoreName: 'LogstoreName',
      logtailName: 'LogtailName',
      machineGroup: 'MachineGroup',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logPath: 'string',
      logType: 'string',
      logstoreName: 'string',
      logtailName: 'string',
      machineGroup: 'string',
      projectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SLSCollectConfigs extends $tea.Model {
  collectConfigs?: SLSCollectConfig[];
  static names(): { [key: string]: string } {
    return {
      collectConfigs: 'CollectConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collectConfigs: { 'type': 'array', 'itemType': SLSCollectConfig },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SLSConfig extends $tea.Model {
  collectConfigs?: SLSConfigCollectConfigs[];
  static names(): { [key: string]: string } {
    return {
      collectConfigs: 'collectConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collectConfigs: { 'type': 'array', 'itemType': SLSConfigCollectConfigs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScaleConfig extends $tea.Model {
  alwaysAllocateCPU?: boolean;
  maximumInstanceCount?: number;
  minimumInstanceCount?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      alwaysAllocateCPU: 'alwaysAllocateCPU',
      maximumInstanceCount: 'maximumInstanceCount',
      minimumInstanceCount: 'minimumInstanceCount',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alwaysAllocateCPU: 'boolean',
      maximumInstanceCount: 'number',
      minimumInstanceCount: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SourceCodeAccount extends $tea.Model {
  avatarUrl?: string;
  id?: string;
  name?: string;
  organizations?: SourceCodeAccountOrganizations[];
  static names(): { [key: string]: string } {
    return {
      avatarUrl: 'AvatarUrl',
      id: 'Id',
      name: 'Name',
      organizations: 'Organizations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarUrl: 'string',
      id: 'string',
      name: 'string',
      organizations: { 'type': 'array', 'itemType': SourceCodeAccountOrganizations },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SourceCodeRepo extends $tea.Model {
  fullName?: string;
  id?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      fullName: 'FullName',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fullName: 'string',
      id: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SourceCodeRepoBranch extends $tea.Model {
  commitId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      commitId: 'CommitId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commitId: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartupProbe extends $tea.Model {
  failureThreshold?: number;
  initialDelaySeconds?: number;
  periodSeconds?: number;
  probeHandler?: ProbeHandler;
  timeoutSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      failureThreshold: 'FailureThreshold',
      initialDelaySeconds: 'InitialDelaySeconds',
      periodSeconds: 'PeriodSeconds',
      probeHandler: 'ProbeHandler',
      timeoutSeconds: 'TimeoutSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failureThreshold: 'number',
      initialDelaySeconds: 'number',
      periodSeconds: 'number',
      probeHandler: ProbeHandler,
      timeoutSeconds: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StaticsInfo extends $tea.Model {
  activeCPUUsage?: number;
  cost?: number;
  diskUsage?: number;
  functionName?: string;
  gpuUsage?: number;
  idleCPUUsage?: number;
  instanceTrafficOut?: number;
  invocations?: number;
  invokeCDNOut?: number;
  invokeInternetOut?: number;
  memoryUsage?: number;
  region?: string;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      activeCPUUsage: 'activeCPUUsage',
      cost: 'cost',
      diskUsage: 'diskUsage',
      functionName: 'functionName',
      gpuUsage: 'gpuUsage',
      idleCPUUsage: 'idleCPUUsage',
      instanceTrafficOut: 'instanceTrafficOut',
      invocations: 'invocations',
      invokeCDNOut: 'invokeCDNOut',
      invokeInternetOut: 'invokeInternetOut',
      memoryUsage: 'memoryUsage',
      region: 'region',
      serviceName: 'serviceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeCPUUsage: 'number',
      cost: 'number',
      diskUsage: 'number',
      functionName: 'string',
      gpuUsage: 'number',
      idleCPUUsage: 'number',
      instanceTrafficOut: 'number',
      invocations: 'number',
      invokeCDNOut: 'number',
      invokeInternetOut: 'number',
      memoryUsage: 'number',
      region: 'string',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Submenu extends $tea.Model {
  items?: SubmenuItems[];
  submenuDesc?: string;
  submenuType?: string;
  submenus?: Submenu[];
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      submenuDesc: 'SubmenuDesc',
      submenuType: 'SubmenuType',
      submenus: 'Submenus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': SubmenuItems },
      submenuDesc: 'string',
      submenuType: 'string',
      submenus: { 'type': 'array', 'itemType': Submenu },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TCPSocketAction extends $tea.Model {
  host?: string;
  port?: number;
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      port: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TLSConfig extends $tea.Model {
  cipherSuites?: string[];
  maxVersion?: string;
  minVersion?: string;
  static names(): { [key: string]: string } {
    return {
      cipherSuites: 'cipherSuites',
      maxVersion: 'maxVersion',
      minVersion: 'minVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cipherSuites: { 'type': 'array', 'itemType': 'string' },
      maxVersion: 'string',
      minVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TomcatConfig extends $tea.Model {
  contextPath?: string;
  maxThreads?: number;
  port?: number;
  uriEncoding?: string;
  useBodyEncodingForUri?: boolean;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      contextPath: 'ContextPath',
      maxThreads: 'MaxThreads',
      port: 'Port',
      uriEncoding: 'UriEncoding',
      useBodyEncodingForUri: 'UseBodyEncodingForUri',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contextPath: 'string',
      maxThreads: 'number',
      port: 'number',
      uriEncoding: 'string',
      useBodyEncodingForUri: 'boolean',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TracingConfig extends $tea.Model {
  jaegerConfig?: JaegerConfig;
  params?: any;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      jaegerConfig: 'jaegerConfig',
      params: 'params',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jaegerConfig: JaegerConfig,
      params: 'any',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrafficConfig extends $tea.Model {
  additionalVersionWeight?: { [key: string]: number };
  createdTime?: string;
  lastModifiedTime?: string;
  requestId?: string;
  resolvePolicy?: string;
  routePolicy?: RoutePolicy;
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      additionalVersionWeight: 'additionalVersionWeight',
      createdTime: 'createdTime',
      lastModifiedTime: 'lastModifiedTime',
      requestId: 'requestId',
      resolvePolicy: 'resolvePolicy',
      routePolicy: 'routePolicy',
      versionId: 'versionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalVersionWeight: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
      createdTime: 'string',
      lastModifiedTime: 'string',
      requestId: 'string',
      resolvePolicy: 'string',
      routePolicy: RoutePolicy,
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationInput extends $tea.Model {
  args?: string;
  caPort?: number;
  code?: InputCodeLocation;
  command?: string;
  cpu?: number;
  customDNS?: CustomDNS;
  customHealthCheckConfig?: CustomHealthCheckConfig;
  customRuntimeConfig?: CustomRuntimeConfig;
  description?: string;
  diskSize?: number;
  effectiveImmediately?: boolean;
  enableAppMetric?: boolean;
  environmentVariables?: { [key: string]: string };
  gpuMemorySize?: number;
  handler?: string;
  httpTriggerConfig?: HTTPTriggerConfig;
  imageConfig?: ImageConfig;
  initializationTimeout?: number;
  initializer?: string;
  instanceConcurrency?: number;
  instanceLifecycleConfig?: InstanceLifecycleConfig;
  instanceSoftConcurrency?: number;
  instanceType?: string;
  internetAccess?: boolean;
  layers?: string[];
  livenessProbe?: Probe;
  logConfig?: LogConfig;
  memorySize?: number;
  nasConfig?: NASConfig;
  ossMountConfig?: OSSMountConfig;
  runtime?: string;
  scaleConfig?: ScaleConfig;
  slsConfig?: SLSConfig;
  startupProbe?: Probe;
  timeout?: number;
  tracingConfig?: TracingConfig;
  vpcConfig?: VPCConfig;
  static names(): { [key: string]: string } {
    return {
      args: 'args',
      caPort: 'caPort',
      code: 'code',
      command: 'command',
      cpu: 'cpu',
      customDNS: 'customDNS',
      customHealthCheckConfig: 'customHealthCheckConfig',
      customRuntimeConfig: 'customRuntimeConfig',
      description: 'description',
      diskSize: 'diskSize',
      effectiveImmediately: 'effectiveImmediately',
      enableAppMetric: 'enableAppMetric',
      environmentVariables: 'environmentVariables',
      gpuMemorySize: 'gpuMemorySize',
      handler: 'handler',
      httpTriggerConfig: 'httpTriggerConfig',
      imageConfig: 'imageConfig',
      initializationTimeout: 'initializationTimeout',
      initializer: 'initializer',
      instanceConcurrency: 'instanceConcurrency',
      instanceLifecycleConfig: 'instanceLifecycleConfig',
      instanceSoftConcurrency: 'instanceSoftConcurrency',
      instanceType: 'instanceType',
      internetAccess: 'internetAccess',
      layers: 'layers',
      livenessProbe: 'livenessProbe',
      logConfig: 'logConfig',
      memorySize: 'memorySize',
      nasConfig: 'nasConfig',
      ossMountConfig: 'ossMountConfig',
      runtime: 'runtime',
      scaleConfig: 'scaleConfig',
      slsConfig: 'slsConfig',
      startupProbe: 'startupProbe',
      timeout: 'timeout',
      tracingConfig: 'tracingConfig',
      vpcConfig: 'vpcConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      args: 'string',
      caPort: 'number',
      code: InputCodeLocation,
      command: 'string',
      cpu: 'number',
      customDNS: CustomDNS,
      customHealthCheckConfig: CustomHealthCheckConfig,
      customRuntimeConfig: CustomRuntimeConfig,
      description: 'string',
      diskSize: 'number',
      effectiveImmediately: 'boolean',
      enableAppMetric: 'boolean',
      environmentVariables: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      gpuMemorySize: 'number',
      handler: 'string',
      httpTriggerConfig: HTTPTriggerConfig,
      imageConfig: ImageConfig,
      initializationTimeout: 'number',
      initializer: 'string',
      instanceConcurrency: 'number',
      instanceLifecycleConfig: InstanceLifecycleConfig,
      instanceSoftConcurrency: 'number',
      instanceType: 'string',
      internetAccess: 'boolean',
      layers: { 'type': 'array', 'itemType': 'string' },
      livenessProbe: Probe,
      logConfig: LogConfig,
      memorySize: 'number',
      nasConfig: NASConfig,
      ossMountConfig: OSSMountConfig,
      runtime: 'string',
      scaleConfig: ScaleConfig,
      slsConfig: SLSConfig,
      startupProbe: Probe,
      timeout: 'number',
      tracingConfig: TracingConfig,
      vpcConfig: VPCConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationScaleConfigInput extends $tea.Model {
  alwaysAllocateCPU?: boolean;
  maximumInstanceCount?: number;
  minimumInstanceCount?: number;
  static names(): { [key: string]: string } {
    return {
      alwaysAllocateCPU: 'alwaysAllocateCPU',
      maximumInstanceCount: 'maximumInstanceCount',
      minimumInstanceCount: 'minimumInstanceCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alwaysAllocateCPU: 'boolean',
      maximumInstanceCount: 'number',
      minimumInstanceCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationTrafficConfigInput extends $tea.Model {
  additionalVersionWeight?: { [key: string]: number };
  resolvePolicy?: string;
  routePolicy?: RoutePolicy;
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      additionalVersionWeight: 'additionalVersionWeight',
      resolvePolicy: 'resolvePolicy',
      routePolicy: 'routePolicy',
      versionId: 'versionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalVersionWeight: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
      resolvePolicy: 'string',
      routePolicy: RoutePolicy,
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAttributesInput extends $tea.Model {
  description?: string;
  httpTriggerConfig?: HTTPTriggerConfig;
  versionID?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      httpTriggerConfig: 'httpTriggerConfig',
      versionID: 'versionID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      httpTriggerConfig: HTTPTriggerConfig,
      versionID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomDomainInput extends $tea.Model {
  applicationID?: string;
  applicationName?: string;
  certConfig?: CertConfig;
  keepFullPath?: boolean;
  namespaceID?: string;
  protocol?: string;
  tlsConfig?: TLSConfig;
  wafConfig?: WAFConfig;
  static names(): { [key: string]: string } {
    return {
      applicationID: 'applicationID',
      applicationName: 'applicationName',
      certConfig: 'certConfig',
      keepFullPath: 'keepFullPath',
      namespaceID: 'namespaceID',
      protocol: 'protocol',
      tlsConfig: 'tlsConfig',
      wafConfig: 'wafConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationID: 'string',
      applicationName: 'string',
      certConfig: CertConfig,
      keepFullPath: 'boolean',
      namespaceID: 'string',
      protocol: 'string',
      tlsConfig: TLSConfig,
      wafConfig: WAFConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWebApplicationInput extends $tea.Model {
  description?: string;
  webNetworkConfig?: WebNetworkConfig;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      webNetworkConfig: 'WebNetworkConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      webNetworkConfig: WebNetworkConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWebApplicationScalingConfigInput extends $tea.Model {
  maximumInstanceCount?: number;
  minimumInstanceCount?: number;
  static names(): { [key: string]: string } {
    return {
      maximumInstanceCount: 'MaximumInstanceCount',
      minimumInstanceCount: 'MinimumInstanceCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maximumInstanceCount: 'number',
      minimumInstanceCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWebApplicationTrafficConfigInput extends $tea.Model {
  authType?: string;
  disableURLInternet?: boolean;
  revisionsTrafficWeight?: { [key: string]: number };
  webAclConfig?: WebAclConfig;
  static names(): { [key: string]: string } {
    return {
      authType: 'AuthType',
      disableURLInternet: 'DisableURLInternet',
      revisionsTrafficWeight: 'RevisionsTrafficWeight',
      webAclConfig: 'WebAclConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authType: 'string',
      disableURLInternet: 'boolean',
      revisionsTrafficWeight: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
      webAclConfig: WebAclConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWebCustomDomainInput extends $tea.Model {
  defaultForwardingAppName?: string;
  protocol?: string;
  webCertConfig?: WebCertConfig;
  webTLSConfig?: WebTLSConfig;
  webWAFConfig?: WebWAFConfig;
  static names(): { [key: string]: string } {
    return {
      defaultForwardingAppName: 'DefaultForwardingAppName',
      protocol: 'Protocol',
      webCertConfig: 'WebCertConfig',
      webTLSConfig: 'WebTLSConfig',
      webWAFConfig: 'WebWAFConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultForwardingAppName: 'string',
      protocol: 'string',
      webCertConfig: WebCertConfig,
      webTLSConfig: WebTLSConfig,
      webWAFConfig: WebWAFConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VPCConfig extends $tea.Model {
  anytunnelViaENI?: boolean;
  role?: string;
  securityGroupId?: string;
  vSwitchIds?: string[];
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      anytunnelViaENI: 'anytunnelViaENI',
      role: 'role',
      securityGroupId: 'securityGroupId',
      vSwitchIds: 'vSwitchIds',
      vpcId: 'vpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anytunnelViaENI: 'boolean',
      role: 'string',
      securityGroupId: 'string',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Version extends $tea.Model {
  createdTime?: string;
  description?: string;
  image?: string;
  lastModifiedTime?: string;
  requestId?: string;
  versionId?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'createdTime',
      description: 'description',
      image: 'image',
      lastModifiedTime: 'lastModifiedTime',
      requestId: 'requestId',
      versionId: 'versionId',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      description: 'string',
      image: 'string',
      lastModifiedTime: 'string',
      requestId: 'string',
      versionId: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VersionStatus extends $tea.Model {
  errorMessage?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'errorMessage',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WAFConfig extends $tea.Model {
  enableWAF?: boolean;
  static names(): { [key: string]: string } {
    return {
      enableWAF: 'enableWAF',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableWAF: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WebAclConfig extends $tea.Model {
  webAclEntries?: WebAclEntryConfig[];
  static names(): { [key: string]: string } {
    return {
      webAclEntries: 'WebAclEntries',
    };
  }

  static types(): { [key: string]: any } {
    return {
      webAclEntries: { 'type': 'array', 'itemType': WebAclEntryConfig },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WebAclEntryConfig extends $tea.Model {
  entry?: string;
  static names(): { [key: string]: string } {
    return {
      entry: 'Entry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entry: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WebApplication extends $tea.Model {
  applicationId?: string;
  applicationName?: string;
  createdTime?: string;
  description?: string;
  internetURL?: string;
  intranetURL?: string;
  lastModifiedTime?: string;
  namespaceId?: string;
  revisionConfig?: RevisionConfig;
  vpcId?: string;
  webScalingConfig?: WebScalingConfig;
  webTrafficConfig?: WebTrafficConfig;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      applicationName: 'ApplicationName',
      createdTime: 'CreatedTime',
      description: 'Description',
      internetURL: 'InternetURL',
      intranetURL: 'IntranetURL',
      lastModifiedTime: 'LastModifiedTime',
      namespaceId: 'NamespaceId',
      revisionConfig: 'RevisionConfig',
      vpcId: 'VpcId',
      webScalingConfig: 'WebScalingConfig',
      webTrafficConfig: 'WebTrafficConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      applicationName: 'string',
      createdTime: 'string',
      description: 'string',
      internetURL: 'string',
      intranetURL: 'string',
      lastModifiedTime: 'string',
      namespaceId: 'string',
      revisionConfig: RevisionConfig,
      vpcId: 'string',
      webScalingConfig: WebScalingConfig,
      webTrafficConfig: WebTrafficConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WebApplicationBody extends $tea.Model {
  code?: number;
  data?: WebApplication;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: WebApplication,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WebApplicationInstanceLogsBody extends $tea.Model {
  code?: number;
  data?: DescribeInstanceLogsOutput;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: DescribeInstanceLogsOutput,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WebApplicationResourceStaticsBody extends $tea.Model {
  code?: number;
  data?: DescribeWebAppStaticsOutput;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: DescribeWebAppStaticsOutput,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WebApplicationRevisionBody extends $tea.Model {
  code?: number;
  data?: Revision;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: Revision,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WebApplicationScalingConfigBody extends $tea.Model {
  code?: number;
  data?: WebScalingConfig;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: WebScalingConfig,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WebApplicationStatus extends $tea.Model {
  instanceCount?: number;
  webScalingConfig?: WebScalingConfig;
  static names(): { [key: string]: string } {
    return {
      instanceCount: 'InstanceCount',
      webScalingConfig: 'WebScalingConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceCount: 'number',
      webScalingConfig: WebScalingConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WebApplicationTrafficConfigBody extends $tea.Model {
  code?: number;
  data?: WebTrafficConfig;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: WebTrafficConfig,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WebApplicationWithInstanceCount extends $tea.Model {
  instanceCount?: number;
  webApplication?: WebApplication;
  static names(): { [key: string]: string } {
    return {
      instanceCount: 'InstanceCount',
      webApplication: 'WebApplication',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceCount: 'number',
      webApplication: WebApplication,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WebApplicationWithStatus extends $tea.Model {
  status?: WebApplicationStatus;
  webApplication?: WebApplication;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      webApplication: 'WebApplication',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: WebApplicationStatus,
      webApplication: WebApplication,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WebCertConfig extends $tea.Model {
  certName?: string;
  certificate?: string;
  privateKey?: string;
  static names(): { [key: string]: string } {
    return {
      certName: 'CertName',
      certificate: 'Certificate',
      privateKey: 'PrivateKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certName: 'string',
      certificate: 'string',
      privateKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WebCustomDomain extends $tea.Model {
  accountId?: string;
  createdTime?: string;
  defaultForwardingAppName?: string;
  domainName?: string;
  lastModifiedTime?: string;
  namespaceId?: string;
  protocol?: string;
  webCertConfig?: WebCertConfig;
  webTLSConfig?: WebTLSConfig;
  webWAFConfig?: WebWAFConfig;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      createdTime: 'CreatedTime',
      defaultForwardingAppName: 'DefaultForwardingAppName',
      domainName: 'DomainName',
      lastModifiedTime: 'LastModifiedTime',
      namespaceId: 'NamespaceId',
      protocol: 'Protocol',
      webCertConfig: 'WebCertConfig',
      webTLSConfig: 'WebTLSConfig',
      webWAFConfig: 'WebWAFConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      createdTime: 'string',
      defaultForwardingAppName: 'string',
      domainName: 'string',
      lastModifiedTime: 'string',
      namespaceId: 'string',
      protocol: 'string',
      webCertConfig: WebCertConfig,
      webTLSConfig: WebTLSConfig,
      webWAFConfig: WebWAFConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WebCustomDomainBody extends $tea.Model {
  code?: number;
  data?: WebCustomDomain;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: WebCustomDomain,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WebInstanceInfo extends $tea.Model {
  imageUrl?: string;
  instanceId?: string;
  status?: string;
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      imageUrl: 'ImageUrl',
      instanceId: 'InstanceId',
      status: 'Status',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrl: 'string',
      instanceId: 'string',
      status: 'string',
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WebLogEntry extends $tea.Model {
  message?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WebNASConfig extends $tea.Model {
  mountPoints?: WebNASMountPoint[];
  static names(): { [key: string]: string } {
    return {
      mountPoints: 'MountPoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountPoints: { 'type': 'array', 'itemType': WebNASMountPoint },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WebNASMountPoint extends $tea.Model {
  mountDir?: string;
  nasAddr?: string;
  nasPath?: string;
  static names(): { [key: string]: string } {
    return {
      mountDir: 'MountDir',
      nasAddr: 'NasAddr',
      nasPath: 'NasPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountDir: 'string',
      nasAddr: 'string',
      nasPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WebNetworkConfig extends $tea.Model {
  internetAccess?: boolean;
  securityGroupId?: string;
  vSwitchIds?: string[];
  static names(): { [key: string]: string } {
    return {
      internetAccess: 'InternetAccess',
      securityGroupId: 'SecurityGroupId',
      vSwitchIds: 'VSwitchIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      internetAccess: 'boolean',
      securityGroupId: 'string',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WebOSSConfig extends $tea.Model {
  mountPoints?: WebOSSMountPoint[];
  static names(): { [key: string]: string } {
    return {
      mountPoints: 'MountPoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountPoints: { 'type': 'array', 'itemType': WebOSSMountPoint },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WebOSSMountPoint extends $tea.Model {
  bucketName?: string;
  bucketPath?: string;
  mountDir?: string;
  readOnly?: boolean;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      bucketPath: 'BucketPath',
      mountDir: 'MountDir',
      readOnly: 'ReadOnly',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      bucketPath: 'string',
      mountDir: 'string',
      readOnly: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WebScalingConfig extends $tea.Model {
  maximumInstanceCount?: number;
  minimumInstanceCount?: number;
  static names(): { [key: string]: string } {
    return {
      maximumInstanceCount: 'MaximumInstanceCount',
      minimumInstanceCount: 'MinimumInstanceCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maximumInstanceCount: 'number',
      minimumInstanceCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WebStaticsInfo extends $tea.Model {
  cpuUsage?: number;
  internetTrafficOut?: number;
  invocations?: number;
  memoryUsage?: number;
  static names(): { [key: string]: string } {
    return {
      cpuUsage: 'CpuUsage',
      internetTrafficOut: 'InternetTrafficOut',
      invocations: 'Invocations',
      memoryUsage: 'MemoryUsage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuUsage: 'number',
      internetTrafficOut: 'number',
      invocations: 'number',
      memoryUsage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WebTLSConfig extends $tea.Model {
  cipherSuites?: string[];
  maxVersion?: string;
  minVersion?: string;
  static names(): { [key: string]: string } {
    return {
      cipherSuites: 'CipherSuites',
      maxVersion: 'MaxVersion',
      minVersion: 'MinVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cipherSuites: { 'type': 'array', 'itemType': 'string' },
      maxVersion: 'string',
      minVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WebTrafficConfig extends $tea.Model {
  authType?: string;
  disableInternetURL?: boolean;
  revisionsTrafficWeight?: { [key: string]: number };
  webAclConfig?: WebAclConfig;
  static names(): { [key: string]: string } {
    return {
      authType: 'AuthType',
      disableInternetURL: 'DisableInternetURL',
      revisionsTrafficWeight: 'RevisionsTrafficWeight',
      webAclConfig: 'WebAclConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authType: 'string',
      disableInternetURL: 'boolean',
      revisionsTrafficWeight: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
      webAclConfig: WebAclConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WebVersionStatus extends $tea.Model {
  errorMessage?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WebWAFConfig extends $tea.Model {
  enableWAF?: boolean;
  static names(): { [key: string]: string } {
    return {
      enableWAF: 'EnableWAF',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableWAF: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbortAndRollbackChangeOrderRequest extends $tea.Model {
  changeOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'ChangeOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbortAndRollbackChangeOrderResponseBody extends $tea.Model {
  code?: string;
  data?: AbortAndRollbackChangeOrderResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: AbortAndRollbackChangeOrderResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbortAndRollbackChangeOrderResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AbortAndRollbackChangeOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AbortAndRollbackChangeOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbortChangeOrderRequest extends $tea.Model {
  changeOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'ChangeOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbortChangeOrderResponseBody extends $tea.Model {
  code?: string;
  data?: AbortChangeOrderResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: AbortChangeOrderResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbortChangeOrderResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AbortChangeOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AbortChangeOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchStartApplicationsRequest extends $tea.Model {
  appIds?: string;
  namespaceId?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      appIds: 'AppIds',
      namespaceId: 'NamespaceId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appIds: 'string',
      namespaceId: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchStartApplicationsResponseBody extends $tea.Model {
  code?: string;
  data?: BatchStartApplicationsResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: BatchStartApplicationsResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchStartApplicationsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchStartApplicationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BatchStartApplicationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchStopApplicationsRequest extends $tea.Model {
  appIds?: string;
  namespaceId?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      appIds: 'AppIds',
      namespaceId: 'NamespaceId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appIds: 'string',
      namespaceId: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchStopApplicationsResponseBody extends $tea.Model {
  code?: string;
  data?: BatchStopApplicationsResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: BatchStopApplicationsResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchStopApplicationsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchStopApplicationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BatchStopApplicationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindSlbRequest extends $tea.Model {
  appId?: string;
  internet?: string;
  internetSlbId?: string;
  intranet?: string;
  intranetSlbId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      internet: 'Internet',
      internetSlbId: 'InternetSlbId',
      intranet: 'Intranet',
      intranetSlbId: 'IntranetSlbId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      internet: 'string',
      internetSlbId: 'string',
      intranet: 'string',
      intranetSlbId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindSlbResponseBody extends $tea.Model {
  code?: string;
  data?: BindSlbResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: BindSlbResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindSlbResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BindSlbResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BindSlbResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfirmPipelineBatchRequest extends $tea.Model {
  confirm?: boolean;
  pipelineId?: string;
  static names(): { [key: string]: string } {
    return {
      confirm: 'Confirm',
      pipelineId: 'PipelineId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confirm: 'boolean',
      pipelineId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfirmPipelineBatchResponseBody extends $tea.Model {
  code?: string;
  data?: ConfirmPipelineBatchResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ConfirmPipelineBatchResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfirmPipelineBatchResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ConfirmPipelineBatchResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ConfirmPipelineBatchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationRequest extends $tea.Model {
  acrAssumeRoleArn?: string;
  acrInstanceId?: string;
  appDescription?: string;
  appName?: string;
  appSource?: string;
  associateEip?: boolean;
  autoConfig?: boolean;
  baseAppId?: string;
  command?: string;
  commandArgs?: string;
  configMapMountDesc?: string;
  cpu?: number;
  customHostAlias?: string;
  deploy?: boolean;
  edasContainerVersion?: string;
  enableEbpf?: string;
  envs?: string;
  imagePullSecrets?: string;
  imageUrl?: string;
  jarStartArgs?: string;
  jarStartOptions?: string;
  jdk?: string;
  kafkaConfigs?: string;
  liveness?: string;
  memory?: number;
  microRegistration?: string;
  microRegistrationConfig?: string;
  mountDesc?: string;
  mountHost?: string;
  namespaceId?: string;
  nasConfigs?: string;
  nasId?: string;
  ossAkId?: string;
  ossAkSecret?: string;
  ossMountDescs?: string;
  packageType?: string;
  packageUrl?: string;
  packageVersion?: string;
  php?: string;
  phpArmsConfigLocation?: string;
  phpConfig?: string;
  phpConfigLocation?: string;
  postStart?: string;
  preStop?: string;
  programmingLanguage?: string;
  pvtzDiscoverySvc?: string;
  python?: string;
  pythonModules?: string;
  readiness?: string;
  replicas?: number;
  saeVersion?: string;
  securityGroupId?: string;
  serviceTags?: string;
  slsConfigs?: string;
  terminationGracePeriodSeconds?: number;
  timezone?: string;
  tomcatConfig?: string;
  vSwitchId?: string;
  vpcId?: string;
  warStartOptions?: string;
  webContainer?: string;
  static names(): { [key: string]: string } {
    return {
      acrAssumeRoleArn: 'AcrAssumeRoleArn',
      acrInstanceId: 'AcrInstanceId',
      appDescription: 'AppDescription',
      appName: 'AppName',
      appSource: 'AppSource',
      associateEip: 'AssociateEip',
      autoConfig: 'AutoConfig',
      baseAppId: 'BaseAppId',
      command: 'Command',
      commandArgs: 'CommandArgs',
      configMapMountDesc: 'ConfigMapMountDesc',
      cpu: 'Cpu',
      customHostAlias: 'CustomHostAlias',
      deploy: 'Deploy',
      edasContainerVersion: 'EdasContainerVersion',
      enableEbpf: 'EnableEbpf',
      envs: 'Envs',
      imagePullSecrets: 'ImagePullSecrets',
      imageUrl: 'ImageUrl',
      jarStartArgs: 'JarStartArgs',
      jarStartOptions: 'JarStartOptions',
      jdk: 'Jdk',
      kafkaConfigs: 'KafkaConfigs',
      liveness: 'Liveness',
      memory: 'Memory',
      microRegistration: 'MicroRegistration',
      microRegistrationConfig: 'MicroRegistrationConfig',
      mountDesc: 'MountDesc',
      mountHost: 'MountHost',
      namespaceId: 'NamespaceId',
      nasConfigs: 'NasConfigs',
      nasId: 'NasId',
      ossAkId: 'OssAkId',
      ossAkSecret: 'OssAkSecret',
      ossMountDescs: 'OssMountDescs',
      packageType: 'PackageType',
      packageUrl: 'PackageUrl',
      packageVersion: 'PackageVersion',
      php: 'Php',
      phpArmsConfigLocation: 'PhpArmsConfigLocation',
      phpConfig: 'PhpConfig',
      phpConfigLocation: 'PhpConfigLocation',
      postStart: 'PostStart',
      preStop: 'PreStop',
      programmingLanguage: 'ProgrammingLanguage',
      pvtzDiscoverySvc: 'PvtzDiscoverySvc',
      python: 'Python',
      pythonModules: 'PythonModules',
      readiness: 'Readiness',
      replicas: 'Replicas',
      saeVersion: 'SaeVersion',
      securityGroupId: 'SecurityGroupId',
      serviceTags: 'ServiceTags',
      slsConfigs: 'SlsConfigs',
      terminationGracePeriodSeconds: 'TerminationGracePeriodSeconds',
      timezone: 'Timezone',
      tomcatConfig: 'TomcatConfig',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      warStartOptions: 'WarStartOptions',
      webContainer: 'WebContainer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acrAssumeRoleArn: 'string',
      acrInstanceId: 'string',
      appDescription: 'string',
      appName: 'string',
      appSource: 'string',
      associateEip: 'boolean',
      autoConfig: 'boolean',
      baseAppId: 'string',
      command: 'string',
      commandArgs: 'string',
      configMapMountDesc: 'string',
      cpu: 'number',
      customHostAlias: 'string',
      deploy: 'boolean',
      edasContainerVersion: 'string',
      enableEbpf: 'string',
      envs: 'string',
      imagePullSecrets: 'string',
      imageUrl: 'string',
      jarStartArgs: 'string',
      jarStartOptions: 'string',
      jdk: 'string',
      kafkaConfigs: 'string',
      liveness: 'string',
      memory: 'number',
      microRegistration: 'string',
      microRegistrationConfig: 'string',
      mountDesc: 'string',
      mountHost: 'string',
      namespaceId: 'string',
      nasConfigs: 'string',
      nasId: 'string',
      ossAkId: 'string',
      ossAkSecret: 'string',
      ossMountDescs: 'string',
      packageType: 'string',
      packageUrl: 'string',
      packageVersion: 'string',
      php: 'string',
      phpArmsConfigLocation: 'string',
      phpConfig: 'string',
      phpConfigLocation: 'string',
      postStart: 'string',
      preStop: 'string',
      programmingLanguage: 'string',
      pvtzDiscoverySvc: 'string',
      python: 'string',
      pythonModules: 'string',
      readiness: 'string',
      replicas: 'number',
      saeVersion: 'string',
      securityGroupId: 'string',
      serviceTags: 'string',
      slsConfigs: 'string',
      terminationGracePeriodSeconds: 'number',
      timezone: 'string',
      tomcatConfig: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
      warStartOptions: 'string',
      webContainer: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationResponseBody extends $tea.Model {
  code?: string;
  data?: CreateApplicationResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateApplicationResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationScalingRuleRequest extends $tea.Model {
  appId?: string;
  minReadyInstanceRatio?: number;
  minReadyInstances?: number;
  scalingRuleEnable?: boolean;
  scalingRuleMetric?: string;
  scalingRuleName?: string;
  scalingRuleTimer?: string;
  scalingRuleType?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      minReadyInstanceRatio: 'MinReadyInstanceRatio',
      minReadyInstances: 'MinReadyInstances',
      scalingRuleEnable: 'ScalingRuleEnable',
      scalingRuleMetric: 'ScalingRuleMetric',
      scalingRuleName: 'ScalingRuleName',
      scalingRuleTimer: 'ScalingRuleTimer',
      scalingRuleType: 'ScalingRuleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      minReadyInstanceRatio: 'number',
      minReadyInstances: 'number',
      scalingRuleEnable: 'boolean',
      scalingRuleMetric: 'string',
      scalingRuleName: 'string',
      scalingRuleTimer: 'string',
      scalingRuleType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationScalingRuleResponseBody extends $tea.Model {
  code?: string;
  data?: CreateApplicationScalingRuleResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateApplicationScalingRuleResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationScalingRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateApplicationScalingRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateApplicationScalingRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConfigMapRequest extends $tea.Model {
  data?: string;
  description?: string;
  name?: string;
  namespaceId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      description: 'Description',
      name: 'Name',
      namespaceId: 'NamespaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      description: 'string',
      name: 'string',
      namespaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConfigMapResponseBody extends $tea.Model {
  code?: string;
  data?: CreateConfigMapResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateConfigMapResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConfigMapResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateConfigMapResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateConfigMapResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGreyTagRouteRequest extends $tea.Model {
  albRules?: string;
  appId?: string;
  description?: string;
  dubboRules?: string;
  name?: string;
  scRules?: string;
  static names(): { [key: string]: string } {
    return {
      albRules: 'AlbRules',
      appId: 'AppId',
      description: 'Description',
      dubboRules: 'DubboRules',
      name: 'Name',
      scRules: 'ScRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      albRules: 'string',
      appId: 'string',
      description: 'string',
      dubboRules: 'string',
      name: 'string',
      scRules: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGreyTagRouteResponseBody extends $tea.Model {
  code?: string;
  data?: CreateGreyTagRouteResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateGreyTagRouteResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGreyTagRouteResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateGreyTagRouteResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateGreyTagRouteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIngressRequest extends $tea.Model {
  certId?: string;
  certIds?: string;
  defaultRule?: string;
  description?: string;
  listenerPort?: number;
  listenerProtocol?: string;
  loadBalanceType?: string;
  namespaceId?: string;
  rules?: string;
  slbId?: string;
  static names(): { [key: string]: string } {
    return {
      certId: 'CertId',
      certIds: 'CertIds',
      defaultRule: 'DefaultRule',
      description: 'Description',
      listenerPort: 'ListenerPort',
      listenerProtocol: 'ListenerProtocol',
      loadBalanceType: 'LoadBalanceType',
      namespaceId: 'NamespaceId',
      rules: 'Rules',
      slbId: 'SlbId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certId: 'string',
      certIds: 'string',
      defaultRule: 'string',
      description: 'string',
      listenerPort: 'number',
      listenerProtocol: 'string',
      loadBalanceType: 'string',
      namespaceId: 'string',
      rules: 'string',
      slbId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIngressResponseBody extends $tea.Model {
  code?: string;
  data?: CreateIngressResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateIngressResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIngressResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateIngressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateIngressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobRequest extends $tea.Model {
  acrAssumeRoleArn?: string;
  acrInstanceId?: string;
  appDescription?: string;
  appName?: string;
  autoConfig?: boolean;
  backoffLimit?: number;
  command?: string;
  commandArgs?: string;
  concurrencyPolicy?: string;
  configMapMountDesc?: string;
  cpu?: number;
  customHostAlias?: string;
  edasContainerVersion?: string;
  enableImageAccl?: boolean;
  envs?: string;
  imagePullSecrets?: string;
  imageUrl?: string;
  jarStartArgs?: string;
  jarStartOptions?: string;
  jdk?: string;
  memory?: number;
  mountDesc?: string;
  mountHost?: string;
  namespaceId?: string;
  nasId?: string;
  ossAkId?: string;
  ossAkSecret?: string;
  ossMountDescs?: string;
  packageType?: string;
  packageUrl?: string;
  packageVersion?: string;
  phpConfig?: string;
  phpConfigLocation?: string;
  postStart?: string;
  preStop?: string;
  programmingLanguage?: string;
  python?: string;
  pythonModules?: string;
  refAppId?: string;
  replicas?: number;
  securityGroupId?: string;
  slice?: boolean;
  sliceEnvs?: string;
  slsConfigs?: string;
  terminationGracePeriodSeconds?: number;
  timeout?: number;
  timezone?: string;
  tomcatConfig?: string;
  triggerConfig?: string;
  vSwitchId?: string;
  vpcId?: string;
  warStartOptions?: string;
  webContainer?: string;
  workload?: string;
  static names(): { [key: string]: string } {
    return {
      acrAssumeRoleArn: 'AcrAssumeRoleArn',
      acrInstanceId: 'AcrInstanceId',
      appDescription: 'AppDescription',
      appName: 'AppName',
      autoConfig: 'AutoConfig',
      backoffLimit: 'BackoffLimit',
      command: 'Command',
      commandArgs: 'CommandArgs',
      concurrencyPolicy: 'ConcurrencyPolicy',
      configMapMountDesc: 'ConfigMapMountDesc',
      cpu: 'Cpu',
      customHostAlias: 'CustomHostAlias',
      edasContainerVersion: 'EdasContainerVersion',
      enableImageAccl: 'EnableImageAccl',
      envs: 'Envs',
      imagePullSecrets: 'ImagePullSecrets',
      imageUrl: 'ImageUrl',
      jarStartArgs: 'JarStartArgs',
      jarStartOptions: 'JarStartOptions',
      jdk: 'Jdk',
      memory: 'Memory',
      mountDesc: 'MountDesc',
      mountHost: 'MountHost',
      namespaceId: 'NamespaceId',
      nasId: 'NasId',
      ossAkId: 'OssAkId',
      ossAkSecret: 'OssAkSecret',
      ossMountDescs: 'OssMountDescs',
      packageType: 'PackageType',
      packageUrl: 'PackageUrl',
      packageVersion: 'PackageVersion',
      phpConfig: 'PhpConfig',
      phpConfigLocation: 'PhpConfigLocation',
      postStart: 'PostStart',
      preStop: 'PreStop',
      programmingLanguage: 'ProgrammingLanguage',
      python: 'Python',
      pythonModules: 'PythonModules',
      refAppId: 'RefAppId',
      replicas: 'Replicas',
      securityGroupId: 'SecurityGroupId',
      slice: 'Slice',
      sliceEnvs: 'SliceEnvs',
      slsConfigs: 'SlsConfigs',
      terminationGracePeriodSeconds: 'TerminationGracePeriodSeconds',
      timeout: 'Timeout',
      timezone: 'Timezone',
      tomcatConfig: 'TomcatConfig',
      triggerConfig: 'TriggerConfig',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      warStartOptions: 'WarStartOptions',
      webContainer: 'WebContainer',
      workload: 'Workload',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acrAssumeRoleArn: 'string',
      acrInstanceId: 'string',
      appDescription: 'string',
      appName: 'string',
      autoConfig: 'boolean',
      backoffLimit: 'number',
      command: 'string',
      commandArgs: 'string',
      concurrencyPolicy: 'string',
      configMapMountDesc: 'string',
      cpu: 'number',
      customHostAlias: 'string',
      edasContainerVersion: 'string',
      enableImageAccl: 'boolean',
      envs: 'string',
      imagePullSecrets: 'string',
      imageUrl: 'string',
      jarStartArgs: 'string',
      jarStartOptions: 'string',
      jdk: 'string',
      memory: 'number',
      mountDesc: 'string',
      mountHost: 'string',
      namespaceId: 'string',
      nasId: 'string',
      ossAkId: 'string',
      ossAkSecret: 'string',
      ossMountDescs: 'string',
      packageType: 'string',
      packageUrl: 'string',
      packageVersion: 'string',
      phpConfig: 'string',
      phpConfigLocation: 'string',
      postStart: 'string',
      preStop: 'string',
      programmingLanguage: 'string',
      python: 'string',
      pythonModules: 'string',
      refAppId: 'string',
      replicas: 'number',
      securityGroupId: 'string',
      slice: 'boolean',
      sliceEnvs: 'string',
      slsConfigs: 'string',
      terminationGracePeriodSeconds: 'number',
      timeout: 'number',
      timezone: 'string',
      tomcatConfig: 'string',
      triggerConfig: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
      warStartOptions: 'string',
      webContainer: 'string',
      workload: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobResponseBody extends $tea.Model {
  code?: string;
  data?: CreateJobResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateJobResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNamespaceRequest extends $tea.Model {
  enableMicroRegistration?: boolean;
  nameSpaceShortId?: string;
  namespaceDescription?: string;
  namespaceId?: string;
  namespaceName?: string;
  static names(): { [key: string]: string } {
    return {
      enableMicroRegistration: 'EnableMicroRegistration',
      nameSpaceShortId: 'NameSpaceShortId',
      namespaceDescription: 'NamespaceDescription',
      namespaceId: 'NamespaceId',
      namespaceName: 'NamespaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableMicroRegistration: 'boolean',
      nameSpaceShortId: 'string',
      namespaceDescription: 'string',
      namespaceId: 'string',
      namespaceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNamespaceResponseBody extends $tea.Model {
  code?: string;
  data?: CreateNamespaceResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateNamespaceResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNamespaceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateNamespaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateNamespaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSecretRequest extends $tea.Model {
  namespaceId?: string;
  secretData?: CreateSecretRequestSecretData;
  secretName?: string;
  secretType?: string;
  static names(): { [key: string]: string } {
    return {
      namespaceId: 'NamespaceId',
      secretData: 'SecretData',
      secretName: 'SecretName',
      secretType: 'SecretType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceId: 'string',
      secretData: CreateSecretRequestSecretData,
      secretName: 'string',
      secretType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSecretShrinkRequest extends $tea.Model {
  namespaceId?: string;
  secretDataShrink?: string;
  secretName?: string;
  secretType?: string;
  static names(): { [key: string]: string } {
    return {
      namespaceId: 'NamespaceId',
      secretDataShrink: 'SecretData',
      secretName: 'SecretName',
      secretType: 'SecretType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceId: 'string',
      secretDataShrink: 'string',
      secretName: 'string',
      secretType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSecretResponseBody extends $tea.Model {
  code?: string;
  data?: CreateSecretResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateSecretResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSecretResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateSecretResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateSecretResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWebApplicationRequest extends $tea.Model {
  namespaceId?: string;
  body?: CreateWebApplicationInput;
  static names(): { [key: string]: string } {
    return {
      namespaceId: 'NamespaceId',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceId: 'string',
      body: CreateWebApplicationInput,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWebApplicationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: WebApplicationBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: WebApplicationBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWebCustomDomainRequest extends $tea.Model {
  namespaceId?: string;
  body?: CreateWebCustomDomainInput;
  static names(): { [key: string]: string } {
    return {
      namespaceId: 'NamespaceId',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceId: 'string',
      body: CreateWebCustomDomainInput,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWebCustomDomainResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: WebCustomDomainBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: WebCustomDomainBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApplicationRequest extends $tea.Model {
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApplicationResponseBody extends $tea.Model {
  code?: string;
  data?: DeleteApplicationResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DeleteApplicationResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApplicationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApplicationScalingRuleRequest extends $tea.Model {
  appId?: string;
  scalingRuleName?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      scalingRuleName: 'ScalingRuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      scalingRuleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApplicationScalingRuleResponseBody extends $tea.Model {
  code?: string;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApplicationScalingRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteApplicationScalingRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteApplicationScalingRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConfigMapRequest extends $tea.Model {
  configMapId?: number;
  static names(): { [key: string]: string } {
    return {
      configMapId: 'ConfigMapId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configMapId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConfigMapResponseBody extends $tea.Model {
  code?: string;
  data?: DeleteConfigMapResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DeleteConfigMapResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConfigMapResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteConfigMapResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteConfigMapResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGreyTagRouteRequest extends $tea.Model {
  greyTagRouteId?: number;
  static names(): { [key: string]: string } {
    return {
      greyTagRouteId: 'GreyTagRouteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      greyTagRouteId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGreyTagRouteResponseBody extends $tea.Model {
  code?: string;
  data?: DeleteGreyTagRouteResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DeleteGreyTagRouteResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGreyTagRouteResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteGreyTagRouteResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteGreyTagRouteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHistoryJobRequest extends $tea.Model {
  appId?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHistoryJobResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHistoryJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteHistoryJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteHistoryJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIngressRequest extends $tea.Model {
  ingressId?: number;
  static names(): { [key: string]: string } {
    return {
      ingressId: 'IngressId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ingressId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIngressResponseBody extends $tea.Model {
  code?: string;
  data?: DeleteIngressResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DeleteIngressResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIngressResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteIngressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteIngressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteJobRequest extends $tea.Model {
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteJobResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNamespaceRequest extends $tea.Model {
  nameSpaceShortId?: string;
  namespaceId?: string;
  static names(): { [key: string]: string } {
    return {
      nameSpaceShortId: 'NameSpaceShortId',
      namespaceId: 'NamespaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nameSpaceShortId: 'string',
      namespaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNamespaceResponseBody extends $tea.Model {
  code?: string;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNamespaceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteNamespaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteNamespaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSecretRequest extends $tea.Model {
  namespaceId?: string;
  secretId?: number;
  static names(): { [key: string]: string } {
    return {
      namespaceId: 'NamespaceId',
      secretId: 'SecretId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceId: 'string',
      secretId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSecretResponseBody extends $tea.Model {
  code?: string;
  data?: DeleteSecretResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DeleteSecretResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSecretResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteSecretResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteSecretResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWebApplicationRequest extends $tea.Model {
  namespaceId?: string;
  static names(): { [key: string]: string } {
    return {
      namespaceId: 'NamespaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWebApplicationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: WebApplicationBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: WebApplicationBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWebApplicationRevisionRequest extends $tea.Model {
  namespaceId?: string;
  static names(): { [key: string]: string } {
    return {
      namespaceId: 'NamespaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWebApplicationRevisionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: WebApplicationRevisionBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: WebApplicationRevisionBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWebCustomDomainRequest extends $tea.Model {
  namespaceId?: string;
  static names(): { [key: string]: string } {
    return {
      namespaceId: 'NamespaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWebCustomDomainResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: WebCustomDomainBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: WebCustomDomainBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployApplicationRequest extends $tea.Model {
  acrAssumeRoleArn?: string;
  acrInstanceId?: string;
  appId?: string;
  associateEip?: boolean;
  autoEnableApplicationScalingRule?: boolean;
  batchWaitTime?: number;
  changeOrderDesc?: string;
  command?: string;
  commandArgs?: string;
  configMapMountDesc?: string;
  cpu?: number;
  customHostAlias?: string;
  deploy?: string;
  edasContainerVersion?: string;
  enableAhas?: string;
  enableGreyTagRoute?: boolean;
  envs?: string;
  imagePullSecrets?: string;
  imageUrl?: string;
  jarStartArgs?: string;
  jarStartOptions?: string;
  jdk?: string;
  kafkaConfigs?: string;
  liveness?: string;
  memory?: number;
  microRegistration?: string;
  microRegistrationConfig?: string;
  minReadyInstanceRatio?: number;
  minReadyInstances?: number;
  mountDesc?: string;
  mountHost?: string;
  nasConfigs?: string;
  nasId?: string;
  ossAkId?: string;
  ossAkSecret?: string;
  ossMountDescs?: string;
  packageType?: string;
  packageUrl?: string;
  packageVersion?: string;
  php?: string;
  phpArmsConfigLocation?: string;
  phpConfig?: string;
  phpConfigLocation?: string;
  postStart?: string;
  preStop?: string;
  pvtzDiscoverySvc?: string;
  python?: string;
  pythonModules?: string;
  readiness?: string;
  replicas?: number;
  securityGroupId?: string;
  serviceTags?: string;
  slsConfigs?: string;
  terminationGracePeriodSeconds?: number;
  timezone?: string;
  tomcatConfig?: string;
  updateStrategy?: string;
  vSwitchId?: string;
  warStartOptions?: string;
  webContainer?: string;
  static names(): { [key: string]: string } {
    return {
      acrAssumeRoleArn: 'AcrAssumeRoleArn',
      acrInstanceId: 'AcrInstanceId',
      appId: 'AppId',
      associateEip: 'AssociateEip',
      autoEnableApplicationScalingRule: 'AutoEnableApplicationScalingRule',
      batchWaitTime: 'BatchWaitTime',
      changeOrderDesc: 'ChangeOrderDesc',
      command: 'Command',
      commandArgs: 'CommandArgs',
      configMapMountDesc: 'ConfigMapMountDesc',
      cpu: 'Cpu',
      customHostAlias: 'CustomHostAlias',
      deploy: 'Deploy',
      edasContainerVersion: 'EdasContainerVersion',
      enableAhas: 'EnableAhas',
      enableGreyTagRoute: 'EnableGreyTagRoute',
      envs: 'Envs',
      imagePullSecrets: 'ImagePullSecrets',
      imageUrl: 'ImageUrl',
      jarStartArgs: 'JarStartArgs',
      jarStartOptions: 'JarStartOptions',
      jdk: 'Jdk',
      kafkaConfigs: 'KafkaConfigs',
      liveness: 'Liveness',
      memory: 'Memory',
      microRegistration: 'MicroRegistration',
      microRegistrationConfig: 'MicroRegistrationConfig',
      minReadyInstanceRatio: 'MinReadyInstanceRatio',
      minReadyInstances: 'MinReadyInstances',
      mountDesc: 'MountDesc',
      mountHost: 'MountHost',
      nasConfigs: 'NasConfigs',
      nasId: 'NasId',
      ossAkId: 'OssAkId',
      ossAkSecret: 'OssAkSecret',
      ossMountDescs: 'OssMountDescs',
      packageType: 'PackageType',
      packageUrl: 'PackageUrl',
      packageVersion: 'PackageVersion',
      php: 'Php',
      phpArmsConfigLocation: 'PhpArmsConfigLocation',
      phpConfig: 'PhpConfig',
      phpConfigLocation: 'PhpConfigLocation',
      postStart: 'PostStart',
      preStop: 'PreStop',
      pvtzDiscoverySvc: 'PvtzDiscoverySvc',
      python: 'Python',
      pythonModules: 'PythonModules',
      readiness: 'Readiness',
      replicas: 'Replicas',
      securityGroupId: 'SecurityGroupId',
      serviceTags: 'ServiceTags',
      slsConfigs: 'SlsConfigs',
      terminationGracePeriodSeconds: 'TerminationGracePeriodSeconds',
      timezone: 'Timezone',
      tomcatConfig: 'TomcatConfig',
      updateStrategy: 'UpdateStrategy',
      vSwitchId: 'VSwitchId',
      warStartOptions: 'WarStartOptions',
      webContainer: 'WebContainer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acrAssumeRoleArn: 'string',
      acrInstanceId: 'string',
      appId: 'string',
      associateEip: 'boolean',
      autoEnableApplicationScalingRule: 'boolean',
      batchWaitTime: 'number',
      changeOrderDesc: 'string',
      command: 'string',
      commandArgs: 'string',
      configMapMountDesc: 'string',
      cpu: 'number',
      customHostAlias: 'string',
      deploy: 'string',
      edasContainerVersion: 'string',
      enableAhas: 'string',
      enableGreyTagRoute: 'boolean',
      envs: 'string',
      imagePullSecrets: 'string',
      imageUrl: 'string',
      jarStartArgs: 'string',
      jarStartOptions: 'string',
      jdk: 'string',
      kafkaConfigs: 'string',
      liveness: 'string',
      memory: 'number',
      microRegistration: 'string',
      microRegistrationConfig: 'string',
      minReadyInstanceRatio: 'number',
      minReadyInstances: 'number',
      mountDesc: 'string',
      mountHost: 'string',
      nasConfigs: 'string',
      nasId: 'string',
      ossAkId: 'string',
      ossAkSecret: 'string',
      ossMountDescs: 'string',
      packageType: 'string',
      packageUrl: 'string',
      packageVersion: 'string',
      php: 'string',
      phpArmsConfigLocation: 'string',
      phpConfig: 'string',
      phpConfigLocation: 'string',
      postStart: 'string',
      preStop: 'string',
      pvtzDiscoverySvc: 'string',
      python: 'string',
      pythonModules: 'string',
      readiness: 'string',
      replicas: 'number',
      securityGroupId: 'string',
      serviceTags: 'string',
      slsConfigs: 'string',
      terminationGracePeriodSeconds: 'number',
      timezone: 'string',
      tomcatConfig: 'string',
      updateStrategy: 'string',
      vSwitchId: 'string',
      warStartOptions: 'string',
      webContainer: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployApplicationResponseBody extends $tea.Model {
  code?: string;
  data?: DeployApplicationResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DeployApplicationResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployApplicationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeployApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeployApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppServiceDetailRequest extends $tea.Model {
  appId?: string;
  nacosInstanceId?: string;
  nacosNamespaceId?: string;
  serviceGroup?: string;
  serviceName?: string;
  serviceType?: string;
  serviceVersion?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      nacosInstanceId: 'NacosInstanceId',
      nacosNamespaceId: 'NacosNamespaceId',
      serviceGroup: 'ServiceGroup',
      serviceName: 'ServiceName',
      serviceType: 'ServiceType',
      serviceVersion: 'ServiceVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      nacosInstanceId: 'string',
      nacosNamespaceId: 'string',
      serviceGroup: 'string',
      serviceName: 'string',
      serviceType: 'string',
      serviceVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppServiceDetailResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeAppServiceDetailResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeAppServiceDetailResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppServiceDetailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAppServiceDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAppServiceDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationConfigRequest extends $tea.Model {
  appId?: string;
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationConfigResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeApplicationConfigResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeApplicationConfigResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeApplicationConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeApplicationConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationGroupsRequest extends $tea.Model {
  appId?: string;
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationGroupsResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeApplicationGroupsResponseBodyData[];
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': DescribeApplicationGroupsResponseBodyData },
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationGroupsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeApplicationGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeApplicationGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationImageRequest extends $tea.Model {
  appId?: string;
  imageUrl?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      imageUrl: 'ImageUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      imageUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationImageResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeApplicationImageResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeApplicationImageResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationImageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeApplicationImageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeApplicationImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationInstancesRequest extends $tea.Model {
  appId?: string;
  currentPage?: number;
  groupId?: string;
  pageSize?: number;
  reverse?: boolean;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      currentPage: 'CurrentPage',
      groupId: 'GroupId',
      pageSize: 'PageSize',
      reverse: 'Reverse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      currentPage: 'number',
      groupId: 'string',
      pageSize: 'number',
      reverse: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationInstancesResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeApplicationInstancesResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeApplicationInstancesResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationInstancesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeApplicationInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeApplicationInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationScalingRuleRequest extends $tea.Model {
  appId?: string;
  scalingRuleName?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      scalingRuleName: 'ScalingRuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      scalingRuleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationScalingRuleResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeApplicationScalingRuleResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeApplicationScalingRuleResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationScalingRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeApplicationScalingRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeApplicationScalingRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationScalingRulesRequest extends $tea.Model {
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationScalingRulesResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeApplicationScalingRulesResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeApplicationScalingRulesResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationScalingRulesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeApplicationScalingRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeApplicationScalingRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationSlbsRequest extends $tea.Model {
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationSlbsResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeApplicationSlbsResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeApplicationSlbsResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationSlbsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeApplicationSlbsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeApplicationSlbsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationStatusRequest extends $tea.Model {
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationStatusResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeApplicationStatusResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeApplicationStatusResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeApplicationStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeApplicationStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChangeOrderRequest extends $tea.Model {
  changeOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'ChangeOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChangeOrderResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeChangeOrderResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeChangeOrderResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChangeOrderResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeChangeOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeChangeOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeComponentsRequest extends $tea.Model {
  appId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeComponentsResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeComponentsResponseBodyData[];
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': DescribeComponentsResponseBodyData },
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeComponentsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeComponentsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeComponentsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigMapRequest extends $tea.Model {
  configMapId?: number;
  static names(): { [key: string]: string } {
    return {
      configMapId: 'ConfigMapId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configMapId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigMapResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeConfigMapResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeConfigMapResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigMapResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeConfigMapResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeConfigMapResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigurationPriceRequest extends $tea.Model {
  cpu?: number;
  memory?: number;
  workload?: string;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      memory: 'Memory',
      workload: 'Workload',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      memory: 'number',
      workload: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigurationPriceResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeConfigurationPriceResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeConfigurationPriceResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigurationPriceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeConfigurationPriceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeConfigurationPriceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEdasContainersResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeEdasContainersResponseBodyData[];
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': DescribeEdasContainersResponseBodyData },
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEdasContainersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeEdasContainersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeEdasContainersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGreyTagRouteRequest extends $tea.Model {
  greyTagRouteId?: number;
  static names(): { [key: string]: string } {
    return {
      greyTagRouteId: 'GreyTagRouteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      greyTagRouteId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGreyTagRouteResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeGreyTagRouteResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeGreyTagRouteResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGreyTagRouteResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeGreyTagRouteResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeGreyTagRouteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIngressRequest extends $tea.Model {
  ingressId?: number;
  static names(): { [key: string]: string } {
    return {
      ingressId: 'IngressId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ingressId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIngressResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeIngressResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeIngressResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIngressResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeIngressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeIngressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceLogRequest extends $tea.Model {
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceLogResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceLogResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeInstanceLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeInstanceLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSpecificationsResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeInstanceSpecificationsResponseBodyData[];
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': DescribeInstanceSpecificationsResponseBodyData },
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSpecificationsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeInstanceSpecificationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeInstanceSpecificationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobRequest extends $tea.Model {
  appId?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeJobResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeJobResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobHistoryRequest extends $tea.Model {
  appId?: string;
  currentPage?: number;
  pageSize?: number;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      currentPage: 'number',
      pageSize: 'number',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobHistoryResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeJobHistoryResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeJobHistoryResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobHistoryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeJobHistoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeJobHistoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobStatusRequest extends $tea.Model {
  appId?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobStatusResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeJobStatusResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeJobStatusResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeJobStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeJobStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNamespaceRequest extends $tea.Model {
  nameSpaceShortId?: string;
  namespaceId?: string;
  static names(): { [key: string]: string } {
    return {
      nameSpaceShortId: 'NameSpaceShortId',
      namespaceId: 'NamespaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nameSpaceShortId: 'string',
      namespaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNamespaceResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeNamespaceResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeNamespaceResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNamespaceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeNamespaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeNamespaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNamespaceListRequest extends $tea.Model {
  containCustom?: boolean;
  hybridCloudExclude?: boolean;
  static names(): { [key: string]: string } {
    return {
      containCustom: 'ContainCustom',
      hybridCloudExclude: 'HybridCloudExclude',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containCustom: 'boolean',
      hybridCloudExclude: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNamespaceListResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeNamespaceListResponseBodyData[];
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': DescribeNamespaceListResponseBodyData },
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNamespaceListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeNamespaceListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeNamespaceListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNamespaceResourcesRequest extends $tea.Model {
  nameSpaceShortId?: string;
  namespaceId?: string;
  static names(): { [key: string]: string } {
    return {
      nameSpaceShortId: 'NameSpaceShortId',
      namespaceId: 'NamespaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nameSpaceShortId: 'string',
      namespaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNamespaceResourcesResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeNamespaceResourcesResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeNamespaceResourcesResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNamespaceResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeNamespaceResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeNamespaceResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNamespacesRequest extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNamespacesResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeNamespacesResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeNamespacesResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNamespacesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeNamespacesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeNamespacesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePipelineRequest extends $tea.Model {
  pipelineId?: string;
  static names(): { [key: string]: string } {
    return {
      pipelineId: 'PipelineId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pipelineId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePipelineResponseBody extends $tea.Model {
  code?: string;
  data?: DescribePipelineResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribePipelineResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePipelineResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePipelineResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribePipelineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  regions?: DescribeRegionsResponseBodyRegions;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      regions: 'Regions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      regions: DescribeRegionsResponseBodyRegions,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecretRequest extends $tea.Model {
  namespaceId?: string;
  secretId?: number;
  static names(): { [key: string]: string } {
    return {
      namespaceId: 'NamespaceId',
      secretId: 'SecretId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceId: 'string',
      secretId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecretResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeSecretResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeSecretResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecretResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSecretResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeSecretResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebApplicationRequest extends $tea.Model {
  namespaceId?: string;
  static names(): { [key: string]: string } {
    return {
      namespaceId: 'NamespaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebApplicationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: WebApplicationBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: WebApplicationBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebApplicationResourceStaticsRequest extends $tea.Model {
  endTime?: number;
  namespaceId?: string;
  regionId?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      namespaceId: 'NamespaceId',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      namespaceId: 'string',
      regionId: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebApplicationResourceStaticsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: WebApplicationResourceStaticsBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: WebApplicationResourceStaticsBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebApplicationRevisionRequest extends $tea.Model {
  namespaceId?: string;
  static names(): { [key: string]: string } {
    return {
      namespaceId: 'NamespaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebApplicationRevisionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: WebApplicationRevisionBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: WebApplicationRevisionBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebApplicationScalingConfigRequest extends $tea.Model {
  namespaceId?: string;
  static names(): { [key: string]: string } {
    return {
      namespaceId: 'NamespaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebApplicationScalingConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: WebApplicationScalingConfigBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: WebApplicationScalingConfigBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebApplicationTrafficConfigRequest extends $tea.Model {
  namespaceId?: string;
  static names(): { [key: string]: string } {
    return {
      namespaceId: 'NamespaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebApplicationTrafficConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: WebApplicationTrafficConfigBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: WebApplicationTrafficConfigBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebCustomDomainRequest extends $tea.Model {
  namespaceId?: string;
  static names(): { [key: string]: string } {
    return {
      namespaceId: 'NamespaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebCustomDomainResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: WebCustomDomainBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: WebCustomDomainBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebInstanceLogsRequest extends $tea.Model {
  namespaceId?: string;
  static names(): { [key: string]: string } {
    return {
      namespaceId: 'NamespaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebInstanceLogsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: WebApplicationInstanceLogsBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: WebApplicationInstanceLogsBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableApplicationScalingRuleRequest extends $tea.Model {
  appId?: string;
  scalingRuleName?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      scalingRuleName: 'ScalingRuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      scalingRuleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableApplicationScalingRuleResponseBody extends $tea.Model {
  code?: string;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableApplicationScalingRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisableApplicationScalingRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DisableApplicationScalingRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableApplicationScalingRuleRequest extends $tea.Model {
  appId?: string;
  scalingRuleName?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      scalingRuleName: 'ScalingRuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      scalingRuleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableApplicationScalingRuleResponseBody extends $tea.Model {
  code?: string;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableApplicationScalingRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableApplicationScalingRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: EnableApplicationScalingRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecJobRequest extends $tea.Model {
  appId?: string;
  command?: string;
  commandArgs?: string;
  envs?: string;
  eventId?: string;
  jarStartArgs?: string;
  jarStartOptions?: string;
  replicas?: string;
  time?: string;
  warStartOptions?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      command: 'Command',
      commandArgs: 'CommandArgs',
      envs: 'Envs',
      eventId: 'EventId',
      jarStartArgs: 'JarStartArgs',
      jarStartOptions: 'JarStartOptions',
      replicas: 'Replicas',
      time: 'Time',
      warStartOptions: 'WarStartOptions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      command: 'string',
      commandArgs: 'string',
      envs: 'string',
      eventId: 'string',
      jarStartArgs: 'string',
      jarStartOptions: 'string',
      replicas: 'string',
      time: 'string',
      warStartOptions: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecJobResponseBody extends $tea.Model {
  code?: string;
  data?: ExecJobResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ExecJobResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExecJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ExecJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetArmsTopNMetricRequest extends $tea.Model {
  appSource?: string;
  cpuStrategy?: string;
  endTime?: number;
  limit?: number;
  orderBy?: string;
  regionId?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      appSource: 'AppSource',
      cpuStrategy: 'CpuStrategy',
      endTime: 'EndTime',
      limit: 'Limit',
      orderBy: 'OrderBy',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appSource: 'string',
      cpuStrategy: 'string',
      endTime: 'number',
      limit: 'number',
      orderBy: 'string',
      regionId: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetArmsTopNMetricResponseBody extends $tea.Model {
  code?: string;
  data?: GetArmsTopNMetricResponseBodyData[];
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetArmsTopNMetricResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetArmsTopNMetricResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetArmsTopNMetricResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetArmsTopNMetricResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAvailabilityMetricRequest extends $tea.Model {
  appSource?: string;
  cpuStrategy?: string;
  limit?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      appSource: 'AppSource',
      cpuStrategy: 'CpuStrategy',
      limit: 'Limit',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appSource: 'string',
      cpuStrategy: 'string',
      limit: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAvailabilityMetricResponseBody extends $tea.Model {
  code?: string;
  data?: GetAvailabilityMetricResponseBodyData[];
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetAvailabilityMetricResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAvailabilityMetricResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAvailabilityMetricResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAvailabilityMetricResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChangeOrderMetricRequest extends $tea.Model {
  appSource?: string;
  cpuStrategy?: string;
  createTime?: string;
  limit?: number;
  orderBy?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      appSource: 'AppSource',
      cpuStrategy: 'CpuStrategy',
      createTime: 'CreateTime',
      limit: 'Limit',
      orderBy: 'OrderBy',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appSource: 'string',
      cpuStrategy: 'string',
      createTime: 'string',
      limit: 'number',
      orderBy: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChangeOrderMetricResponseBody extends $tea.Model {
  code?: string;
  data?: GetChangeOrderMetricResponseBodyData[];
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetChangeOrderMetricResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChangeOrderMetricResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetChangeOrderMetricResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetChangeOrderMetricResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScaleAppMetricRequest extends $tea.Model {
  appSource?: string;
  cpuStrategy?: string;
  limit?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      appSource: 'AppSource',
      cpuStrategy: 'CpuStrategy',
      limit: 'Limit',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appSource: 'string',
      cpuStrategy: 'string',
      limit: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScaleAppMetricResponseBody extends $tea.Model {
  code?: string;
  data?: GetScaleAppMetricResponseBodyData[];
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetScaleAppMetricResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScaleAppMetricResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetScaleAppMetricResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetScaleAppMetricResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWarningEventMetricRequest extends $tea.Model {
  appSource?: string;
  cpuStrategy?: string;
  endTime?: number;
  limit?: number;
  regionId?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      appSource: 'AppSource',
      cpuStrategy: 'CpuStrategy',
      endTime: 'EndTime',
      limit: 'Limit',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appSource: 'string',
      cpuStrategy: 'string',
      endTime: 'number',
      limit: 'number',
      regionId: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWarningEventMetricResponseBody extends $tea.Model {
  code?: string;
  data?: GetWarningEventMetricResponseBodyData[];
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetWarningEventMetricResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWarningEventMetricResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetWarningEventMetricResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetWarningEventMetricResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppEventsRequest extends $tea.Model {
  appId?: string;
  currentPage?: number;
  eventType?: string;
  namespace?: string;
  objectKind?: string;
  objectName?: string;
  pageSize?: number;
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      currentPage: 'CurrentPage',
      eventType: 'EventType',
      namespace: 'Namespace',
      objectKind: 'ObjectKind',
      objectName: 'ObjectName',
      pageSize: 'PageSize',
      reason: 'Reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      currentPage: 'number',
      eventType: 'string',
      namespace: 'string',
      objectKind: 'string',
      objectName: 'string',
      pageSize: 'number',
      reason: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppEventsResponseBody extends $tea.Model {
  code?: string;
  data?: ListAppEventsResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListAppEventsResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppEventsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAppEventsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAppEventsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppServicesPageRequest extends $tea.Model {
  appId?: string;
  pageNumber?: number;
  pageSize?: number;
  serviceType?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      serviceType: 'ServiceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      serviceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppServicesPageResponseBody extends $tea.Model {
  code?: string;
  data?: ListAppServicesPageResponseBodyData[];
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListAppServicesPageResponseBodyData },
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppServicesPageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAppServicesPageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAppServicesPageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppVersionsRequest extends $tea.Model {
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppVersionsResponseBody extends $tea.Model {
  code?: string;
  data?: ListAppVersionsResponseBodyData[];
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListAppVersionsResponseBodyData },
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppVersionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAppVersionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAppVersionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsRequest extends $tea.Model {
  appName?: string;
  appSource?: string;
  currentPage?: number;
  fieldType?: string;
  fieldValue?: string;
  namespaceId?: string;
  orderBy?: string;
  pageSize?: number;
  reverse?: boolean;
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      appSource: 'AppSource',
      currentPage: 'CurrentPage',
      fieldType: 'FieldType',
      fieldValue: 'FieldValue',
      namespaceId: 'NamespaceId',
      orderBy: 'OrderBy',
      pageSize: 'PageSize',
      reverse: 'Reverse',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      appSource: 'string',
      currentPage: 'number',
      fieldType: 'string',
      fieldValue: 'string',
      namespaceId: 'string',
      orderBy: 'string',
      pageSize: 'number',
      reverse: 'boolean',
      tags: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsResponseBody extends $tea.Model {
  code?: string;
  currentPage?: number;
  data?: ListApplicationsResponseBodyData;
  errorCode?: string;
  message?: string;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      currentPage: 'CurrentPage',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      currentPage: 'number',
      data: ListApplicationsResponseBodyData,
      errorCode: 'string',
      message: 'string',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListApplicationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListApplicationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChangeOrdersRequest extends $tea.Model {
  appId?: string;
  coStatus?: string;
  coType?: string;
  currentPage?: number;
  key?: string;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      coStatus: 'CoStatus',
      coType: 'CoType',
      currentPage: 'CurrentPage',
      key: 'Key',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      coStatus: 'string',
      coType: 'string',
      currentPage: 'number',
      key: 'string',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChangeOrdersResponseBody extends $tea.Model {
  code?: string;
  data?: ListChangeOrdersResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListChangeOrdersResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChangeOrdersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListChangeOrdersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListChangeOrdersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConsumedServicesRequest extends $tea.Model {
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConsumedServicesResponseBody extends $tea.Model {
  code?: string;
  data?: ListConsumedServicesResponseBodyData[];
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListConsumedServicesResponseBodyData },
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConsumedServicesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListConsumedServicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListConsumedServicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGreyTagRouteRequest extends $tea.Model {
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGreyTagRouteResponseBody extends $tea.Model {
  code?: string;
  data?: ListGreyTagRouteResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListGreyTagRouteResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGreyTagRouteResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListGreyTagRouteResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListGreyTagRouteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIngressesRequest extends $tea.Model {
  appId?: string;
  namespaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      namespaceId: 'NamespaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      namespaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIngressesResponseBody extends $tea.Model {
  code?: string;
  data?: ListIngressesResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListIngressesResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIngressesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListIngressesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListIngressesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsRequest extends $tea.Model {
  appName?: string;
  currentPage?: number;
  fieldType?: string;
  fieldValue?: string;
  namespaceId?: string;
  orderBy?: string;
  pageSize?: number;
  reverse?: boolean;
  tags?: string;
  workload?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      currentPage: 'CurrentPage',
      fieldType: 'FieldType',
      fieldValue: 'FieldValue',
      namespaceId: 'NamespaceId',
      orderBy: 'OrderBy',
      pageSize: 'PageSize',
      reverse: 'Reverse',
      tags: 'Tags',
      workload: 'Workload',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      currentPage: 'number',
      fieldType: 'string',
      fieldValue: 'string',
      namespaceId: 'string',
      orderBy: 'string',
      pageSize: 'number',
      reverse: 'boolean',
      tags: 'string',
      workload: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBody extends $tea.Model {
  code?: string;
  currentPage?: number;
  data?: ListJobsResponseBodyData;
  errorCode?: string;
  message?: string;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      currentPage: 'CurrentPage',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      currentPage: 'number',
      data: ListJobsResponseBodyData,
      errorCode: 'string',
      message: 'string',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogConfigsRequest extends $tea.Model {
  appId?: string;
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogConfigsResponseBody extends $tea.Model {
  code?: string;
  data?: ListLogConfigsResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListLogConfigsResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogConfigsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListLogConfigsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListLogConfigsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNamespaceChangeOrdersRequest extends $tea.Model {
  coStatus?: string;
  coType?: string;
  currentPage?: number;
  key?: string;
  namespaceId?: string;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      coStatus: 'CoStatus',
      coType: 'CoType',
      currentPage: 'CurrentPage',
      key: 'Key',
      namespaceId: 'NamespaceId',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coStatus: 'string',
      coType: 'string',
      currentPage: 'number',
      key: 'string',
      namespaceId: 'string',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNamespaceChangeOrdersResponseBody extends $tea.Model {
  code?: string;
  data?: ListNamespaceChangeOrdersResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListNamespaceChangeOrdersResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNamespaceChangeOrdersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListNamespaceChangeOrdersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListNamespaceChangeOrdersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNamespacedConfigMapsRequest extends $tea.Model {
  namespaceId?: string;
  static names(): { [key: string]: string } {
    return {
      namespaceId: 'NamespaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNamespacedConfigMapsResponseBody extends $tea.Model {
  code?: string;
  data?: ListNamespacedConfigMapsResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListNamespacedConfigMapsResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNamespacedConfigMapsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListNamespacedConfigMapsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListNamespacedConfigMapsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublishedServicesRequest extends $tea.Model {
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublishedServicesResponseBody extends $tea.Model {
  code?: string;
  data?: ListPublishedServicesResponseBodyData[];
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListPublishedServicesResponseBodyData },
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublishedServicesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPublishedServicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListPublishedServicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecretsRequest extends $tea.Model {
  namespaceId?: string;
  static names(): { [key: string]: string } {
    return {
      namespaceId: 'NamespaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecretsResponseBody extends $tea.Model {
  code?: string;
  data?: ListSecretsResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListSecretsResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecretsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSecretsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListSecretsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $tea.Model {
  nextToken?: string;
  regionId?: string;
  resourceIds?: string;
  resourceType?: string;
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceIds: 'ResourceIds',
      resourceType: 'ResourceType',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      regionId: 'string',
      resourceIds: 'string',
      resourceType: 'string',
      tags: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBody extends $tea.Model {
  code?: string;
  data?: ListTagResourcesResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListTagResourcesResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWebApplicationInstancesRequest extends $tea.Model {
  endTime?: number;
  instanceIds?: string[];
  limit?: string;
  namespaceId?: string;
  startTime?: number;
  statuses?: string[];
  versionIds?: string[];
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceIds: 'InstanceIds',
      limit: 'Limit',
      namespaceId: 'NamespaceId',
      startTime: 'StartTime',
      statuses: 'Statuses',
      versionIds: 'VersionIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      limit: 'string',
      namespaceId: 'string',
      startTime: 'number',
      statuses: { 'type': 'array', 'itemType': 'string' },
      versionIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWebApplicationInstancesShrinkRequest extends $tea.Model {
  endTime?: number;
  instanceIdsShrink?: string;
  limit?: string;
  namespaceId?: string;
  startTime?: number;
  statusesShrink?: string;
  versionIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceIdsShrink: 'InstanceIds',
      limit: 'Limit',
      namespaceId: 'NamespaceId',
      startTime: 'StartTime',
      statusesShrink: 'Statuses',
      versionIdsShrink: 'VersionIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      instanceIdsShrink: 'string',
      limit: 'string',
      namespaceId: 'string',
      startTime: 'number',
      statusesShrink: 'string',
      versionIdsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWebApplicationInstancesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListWebApplicationInstancesBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListWebApplicationInstancesBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWebApplicationRevisionsRequest extends $tea.Model {
  limit?: number;
  namespaceId?: string;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      limit: 'Limit',
      namespaceId: 'NamespaceId',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      namespaceId: 'string',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWebApplicationRevisionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListWebApplicationRevisionsBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListWebApplicationRevisionsBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWebApplicationsRequest extends $tea.Model {
  limit?: number;
  namespaceId?: string;
  nextToken?: string;
  prefix?: string;
  static names(): { [key: string]: string } {
    return {
      limit: 'Limit',
      namespaceId: 'NamespaceId',
      nextToken: 'NextToken',
      prefix: 'Prefix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      namespaceId: 'string',
      nextToken: 'string',
      prefix: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWebApplicationsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListWebApplicationsBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListWebApplicationsBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWebCustomDomainsRequest extends $tea.Model {
  applicationId?: string;
  limit?: number;
  namespaceId?: string;
  nextToken?: string;
  prefix?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      limit: 'Limit',
      namespaceId: 'NamespaceId',
      nextToken: 'NextToken',
      prefix: 'Prefix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      limit: 'number',
      namespaceId: 'string',
      nextToken: 'string',
      prefix: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWebCustomDomainsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListWebCustomDomainBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListWebCustomDomainBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenSaeServiceResponseBody extends $tea.Model {
  orderId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenSaeServiceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OpenSaeServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: OpenSaeServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishWebApplicationRevisionRequest extends $tea.Model {
  namespaceId?: string;
  body?: PublishWebApplicationRevisionInput;
  static names(): { [key: string]: string } {
    return {
      namespaceId: 'NamespaceId',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceId: 'string',
      body: PublishWebApplicationRevisionInput,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishWebApplicationRevisionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: WebApplicationRevisionBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: WebApplicationRevisionBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryResourceStaticsRequest extends $tea.Model {
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryResourceStaticsResponseBody extends $tea.Model {
  code?: string;
  data?: QueryResourceStaticsResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryResourceStaticsResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryResourceStaticsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryResourceStaticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryResourceStaticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReduceApplicationCapacityByInstanceIdsRequest extends $tea.Model {
  appId?: string;
  instanceIds?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      instanceIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReduceApplicationCapacityByInstanceIdsResponseBody extends $tea.Model {
  code?: string;
  data?: ReduceApplicationCapacityByInstanceIdsResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ReduceApplicationCapacityByInstanceIdsResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReduceApplicationCapacityByInstanceIdsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReduceApplicationCapacityByInstanceIdsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ReduceApplicationCapacityByInstanceIdsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RescaleApplicationRequest extends $tea.Model {
  appId?: string;
  autoEnableApplicationScalingRule?: boolean;
  minReadyInstanceRatio?: number;
  minReadyInstances?: number;
  replicas?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      autoEnableApplicationScalingRule: 'AutoEnableApplicationScalingRule',
      minReadyInstanceRatio: 'MinReadyInstanceRatio',
      minReadyInstances: 'MinReadyInstances',
      replicas: 'Replicas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      autoEnableApplicationScalingRule: 'boolean',
      minReadyInstanceRatio: 'number',
      minReadyInstances: 'number',
      replicas: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RescaleApplicationResponseBody extends $tea.Model {
  code?: string;
  data?: RescaleApplicationResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: RescaleApplicationResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RescaleApplicationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RescaleApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RescaleApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RescaleApplicationVerticallyRequest extends $tea.Model {
  appId?: string;
  cpu?: string;
  memory?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      cpu: 'Cpu',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      cpu: 'string',
      memory: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RescaleApplicationVerticallyResponseBody extends $tea.Model {
  code?: string;
  data?: RescaleApplicationVerticallyResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: RescaleApplicationVerticallyResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RescaleApplicationVerticallyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RescaleApplicationVerticallyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RescaleApplicationVerticallyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartApplicationRequest extends $tea.Model {
  appId?: string;
  autoEnableApplicationScalingRule?: boolean;
  minReadyInstanceRatio?: number;
  minReadyInstances?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      autoEnableApplicationScalingRule: 'AutoEnableApplicationScalingRule',
      minReadyInstanceRatio: 'MinReadyInstanceRatio',
      minReadyInstances: 'MinReadyInstances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      autoEnableApplicationScalingRule: 'boolean',
      minReadyInstanceRatio: 'number',
      minReadyInstances: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartApplicationResponseBody extends $tea.Model {
  code?: string;
  data?: RestartApplicationResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: RestartApplicationResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartApplicationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RestartApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RestartApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartInstancesRequest extends $tea.Model {
  appId?: string;
  instanceIds?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      instanceIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartInstancesResponseBody extends $tea.Model {
  code?: string;
  data?: RestartInstancesResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: RestartInstancesResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartInstancesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RestartInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RestartInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RollbackApplicationRequest extends $tea.Model {
  appId?: string;
  autoEnableApplicationScalingRule?: string;
  batchWaitTime?: number;
  minReadyInstanceRatio?: number;
  minReadyInstances?: number;
  updateStrategy?: string;
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      autoEnableApplicationScalingRule: 'AutoEnableApplicationScalingRule',
      batchWaitTime: 'BatchWaitTime',
      minReadyInstanceRatio: 'MinReadyInstanceRatio',
      minReadyInstances: 'MinReadyInstances',
      updateStrategy: 'UpdateStrategy',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      autoEnableApplicationScalingRule: 'string',
      batchWaitTime: 'number',
      minReadyInstanceRatio: 'number',
      minReadyInstances: 'number',
      updateStrategy: 'string',
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RollbackApplicationResponseBody extends $tea.Model {
  code?: string;
  data?: RollbackApplicationResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: RollbackApplicationResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RollbackApplicationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RollbackApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RollbackApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartApplicationRequest extends $tea.Model {
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartApplicationResponseBody extends $tea.Model {
  code?: string;
  data?: StartApplicationResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: StartApplicationResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartApplicationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StartApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartWebApplicationRequest extends $tea.Model {
  namespaceId?: string;
  static names(): { [key: string]: string } {
    return {
      namespaceId: 'NamespaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartWebApplicationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: WebApplicationBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: WebApplicationBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopApplicationRequest extends $tea.Model {
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopApplicationResponseBody extends $tea.Model {
  code?: string;
  data?: StopApplicationResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: StopApplicationResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopApplicationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StopApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopWebApplicationRequest extends $tea.Model {
  namespaceId?: string;
  static names(): { [key: string]: string } {
    return {
      namespaceId: 'NamespaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopWebApplicationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: WebApplicationBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: WebApplicationBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuspendJobRequest extends $tea.Model {
  appId?: string;
  suspend?: boolean;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      suspend: 'Suspend',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      suspend: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuspendJobResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuspendJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SuspendJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SuspendJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $tea.Model {
  regionId?: string;
  resourceIds?: string;
  resourceType?: string;
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceIds: 'ResourceIds',
      resourceType: 'ResourceType',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceIds: 'string',
      resourceType: 'string',
      tags: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponseBody extends $tea.Model {
  code?: string;
  data?: boolean;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindSlbRequest extends $tea.Model {
  appId?: string;
  internet?: boolean;
  intranet?: boolean;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      internet: 'Internet',
      intranet: 'Intranet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      internet: 'boolean',
      intranet: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindSlbResponseBody extends $tea.Model {
  code?: string;
  data?: UnbindSlbResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: UnbindSlbResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindSlbResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UnbindSlbResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UnbindSlbResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesRequest extends $tea.Model {
  deleteAll?: boolean;
  regionId?: string;
  resourceIds?: string;
  resourceType?: string;
  tagKeys?: string;
  static names(): { [key: string]: string } {
    return {
      deleteAll: 'DeleteAll',
      regionId: 'RegionId',
      resourceIds: 'ResourceIds',
      resourceType: 'ResourceType',
      tagKeys: 'TagKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteAll: 'boolean',
      regionId: 'string',
      resourceIds: 'string',
      resourceType: 'string',
      tagKeys: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponseBody extends $tea.Model {
  code?: string;
  data?: boolean;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UntagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UntagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppSecurityGroupRequest extends $tea.Model {
  appId?: string;
  securityGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      securityGroupId: 'SecurityGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      securityGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppSecurityGroupResponseBody extends $tea.Model {
  code?: string;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppSecurityGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateAppSecurityGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateAppSecurityGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationDescriptionRequest extends $tea.Model {
  appDescription?: string;
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appDescription: 'AppDescription',
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appDescription: 'string',
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationDescriptionResponseBody extends $tea.Model {
  code?: string;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationDescriptionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateApplicationDescriptionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateApplicationDescriptionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationScalingRuleRequest extends $tea.Model {
  appId?: string;
  minReadyInstanceRatio?: number;
  minReadyInstances?: number;
  scalingRuleMetric?: string;
  scalingRuleName?: string;
  scalingRuleTimer?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      minReadyInstanceRatio: 'MinReadyInstanceRatio',
      minReadyInstances: 'MinReadyInstances',
      scalingRuleMetric: 'ScalingRuleMetric',
      scalingRuleName: 'ScalingRuleName',
      scalingRuleTimer: 'ScalingRuleTimer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      minReadyInstanceRatio: 'number',
      minReadyInstances: 'number',
      scalingRuleMetric: 'string',
      scalingRuleName: 'string',
      scalingRuleTimer: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationScalingRuleResponseBody extends $tea.Model {
  code?: string;
  data?: UpdateApplicationScalingRuleResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: UpdateApplicationScalingRuleResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationScalingRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateApplicationScalingRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateApplicationScalingRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationVswitchesRequest extends $tea.Model {
  appId?: string;
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      vSwitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationVswitchesResponseBody extends $tea.Model {
  code?: string;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationVswitchesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateApplicationVswitchesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateApplicationVswitchesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConfigMapRequest extends $tea.Model {
  configMapId?: number;
  data?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      configMapId: 'ConfigMapId',
      data: 'Data',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configMapId: 'number',
      data: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConfigMapResponseBody extends $tea.Model {
  code?: string;
  data?: UpdateConfigMapResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: UpdateConfigMapResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConfigMapResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateConfigMapResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateConfigMapResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGreyTagRouteRequest extends $tea.Model {
  albRules?: string;
  description?: string;
  dubboRules?: string;
  greyTagRouteId?: number;
  scRules?: string;
  static names(): { [key: string]: string } {
    return {
      albRules: 'AlbRules',
      description: 'Description',
      dubboRules: 'DubboRules',
      greyTagRouteId: 'GreyTagRouteId',
      scRules: 'ScRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      albRules: 'string',
      description: 'string',
      dubboRules: 'string',
      greyTagRouteId: 'number',
      scRules: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGreyTagRouteResponseBody extends $tea.Model {
  code?: string;
  data?: UpdateGreyTagRouteResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: UpdateGreyTagRouteResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGreyTagRouteResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateGreyTagRouteResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateGreyTagRouteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIngressRequest extends $tea.Model {
  certId?: string;
  certIds?: string;
  defaultRule?: string;
  description?: string;
  ingressId?: number;
  listenerPort?: string;
  listenerProtocol?: string;
  loadBalanceType?: string;
  rules?: string;
  static names(): { [key: string]: string } {
    return {
      certId: 'CertId',
      certIds: 'CertIds',
      defaultRule: 'DefaultRule',
      description: 'Description',
      ingressId: 'IngressId',
      listenerPort: 'ListenerPort',
      listenerProtocol: 'ListenerProtocol',
      loadBalanceType: 'LoadBalanceType',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certId: 'string',
      certIds: 'string',
      defaultRule: 'string',
      description: 'string',
      ingressId: 'number',
      listenerPort: 'string',
      listenerProtocol: 'string',
      loadBalanceType: 'string',
      rules: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIngressResponseBody extends $tea.Model {
  code?: string;
  data?: UpdateIngressResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: UpdateIngressResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIngressResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateIngressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateIngressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateJobRequest extends $tea.Model {
  acrAssumeRoleArn?: string;
  acrInstanceId?: string;
  appId?: string;
  backoffLimit?: number;
  command?: string;
  commandArgs?: string;
  concurrencyPolicy?: string;
  configMapMountDesc?: string;
  customHostAlias?: string;
  edasContainerVersion?: string;
  enableImageAccl?: boolean;
  envs?: string;
  imagePullSecrets?: string;
  imageUrl?: string;
  jarStartArgs?: string;
  jarStartOptions?: string;
  jdk?: string;
  mountDesc?: string;
  mountHost?: string;
  nasId?: string;
  ossAkId?: string;
  ossAkSecret?: string;
  ossMountDescs?: string;
  packageUrl?: string;
  packageVersion?: string;
  php?: string;
  phpConfig?: string;
  phpConfigLocation?: string;
  postStart?: string;
  preStop?: string;
  programmingLanguage?: string;
  python?: string;
  pythonModules?: string;
  refAppId?: string;
  replicas?: string;
  slice?: boolean;
  sliceEnvs?: string;
  slsConfigs?: string;
  terminationGracePeriodSeconds?: number;
  timeout?: number;
  timezone?: string;
  tomcatConfig?: string;
  triggerConfig?: string;
  warStartOptions?: string;
  webContainer?: string;
  static names(): { [key: string]: string } {
    return {
      acrAssumeRoleArn: 'AcrAssumeRoleArn',
      acrInstanceId: 'AcrInstanceId',
      appId: 'AppId',
      backoffLimit: 'BackoffLimit',
      command: 'Command',
      commandArgs: 'CommandArgs',
      concurrencyPolicy: 'ConcurrencyPolicy',
      configMapMountDesc: 'ConfigMapMountDesc',
      customHostAlias: 'CustomHostAlias',
      edasContainerVersion: 'EdasContainerVersion',
      enableImageAccl: 'EnableImageAccl',
      envs: 'Envs',
      imagePullSecrets: 'ImagePullSecrets',
      imageUrl: 'ImageUrl',
      jarStartArgs: 'JarStartArgs',
      jarStartOptions: 'JarStartOptions',
      jdk: 'Jdk',
      mountDesc: 'MountDesc',
      mountHost: 'MountHost',
      nasId: 'NasId',
      ossAkId: 'OssAkId',
      ossAkSecret: 'OssAkSecret',
      ossMountDescs: 'OssMountDescs',
      packageUrl: 'PackageUrl',
      packageVersion: 'PackageVersion',
      php: 'Php',
      phpConfig: 'PhpConfig',
      phpConfigLocation: 'PhpConfigLocation',
      postStart: 'PostStart',
      preStop: 'PreStop',
      programmingLanguage: 'ProgrammingLanguage',
      python: 'Python',
      pythonModules: 'PythonModules',
      refAppId: 'RefAppId',
      replicas: 'Replicas',
      slice: 'Slice',
      sliceEnvs: 'SliceEnvs',
      slsConfigs: 'SlsConfigs',
      terminationGracePeriodSeconds: 'TerminationGracePeriodSeconds',
      timeout: 'Timeout',
      timezone: 'Timezone',
      tomcatConfig: 'TomcatConfig',
      triggerConfig: 'TriggerConfig',
      warStartOptions: 'WarStartOptions',
      webContainer: 'WebContainer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acrAssumeRoleArn: 'string',
      acrInstanceId: 'string',
      appId: 'string',
      backoffLimit: 'number',
      command: 'string',
      commandArgs: 'string',
      concurrencyPolicy: 'string',
      configMapMountDesc: 'string',
      customHostAlias: 'string',
      edasContainerVersion: 'string',
      enableImageAccl: 'boolean',
      envs: 'string',
      imagePullSecrets: 'string',
      imageUrl: 'string',
      jarStartArgs: 'string',
      jarStartOptions: 'string',
      jdk: 'string',
      mountDesc: 'string',
      mountHost: 'string',
      nasId: 'string',
      ossAkId: 'string',
      ossAkSecret: 'string',
      ossMountDescs: 'string',
      packageUrl: 'string',
      packageVersion: 'string',
      php: 'string',
      phpConfig: 'string',
      phpConfigLocation: 'string',
      postStart: 'string',
      preStop: 'string',
      programmingLanguage: 'string',
      python: 'string',
      pythonModules: 'string',
      refAppId: 'string',
      replicas: 'string',
      slice: 'boolean',
      sliceEnvs: 'string',
      slsConfigs: 'string',
      terminationGracePeriodSeconds: 'number',
      timeout: 'number',
      timezone: 'string',
      tomcatConfig: 'string',
      triggerConfig: 'string',
      warStartOptions: 'string',
      webContainer: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateJobResponseBody extends $tea.Model {
  code?: string;
  data?: UpdateJobResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: UpdateJobResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNamespaceRequest extends $tea.Model {
  enableMicroRegistration?: boolean;
  nameSpaceShortId?: string;
  namespaceDescription?: string;
  namespaceId?: string;
  namespaceName?: string;
  static names(): { [key: string]: string } {
    return {
      enableMicroRegistration: 'EnableMicroRegistration',
      nameSpaceShortId: 'NameSpaceShortId',
      namespaceDescription: 'NamespaceDescription',
      namespaceId: 'NamespaceId',
      namespaceName: 'NamespaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableMicroRegistration: 'boolean',
      nameSpaceShortId: 'string',
      namespaceDescription: 'string',
      namespaceId: 'string',
      namespaceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNamespaceResponseBody extends $tea.Model {
  code?: string;
  data?: UpdateNamespaceResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: UpdateNamespaceResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNamespaceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateNamespaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateNamespaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNamespaceVpcRequest extends $tea.Model {
  nameSpaceShortId?: string;
  namespaceId?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      nameSpaceShortId: 'NameSpaceShortId',
      namespaceId: 'NamespaceId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nameSpaceShortId: 'string',
      namespaceId: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNamespaceVpcResponseBody extends $tea.Model {
  code?: string;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNamespaceVpcResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateNamespaceVpcResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateNamespaceVpcResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSecretRequest extends $tea.Model {
  namespaceId?: string;
  secretData?: UpdateSecretRequestSecretData;
  secretId?: number;
  static names(): { [key: string]: string } {
    return {
      namespaceId: 'NamespaceId',
      secretData: 'SecretData',
      secretId: 'SecretId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceId: 'string',
      secretData: UpdateSecretRequestSecretData,
      secretId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSecretShrinkRequest extends $tea.Model {
  namespaceId?: string;
  secretDataShrink?: string;
  secretId?: number;
  static names(): { [key: string]: string } {
    return {
      namespaceId: 'NamespaceId',
      secretDataShrink: 'SecretData',
      secretId: 'SecretId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceId: 'string',
      secretDataShrink: 'string',
      secretId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSecretResponseBody extends $tea.Model {
  code?: string;
  data?: UpdateSecretResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: UpdateSecretResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSecretResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateSecretResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateSecretResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWebApplicationRequest extends $tea.Model {
  namespaceId?: string;
  body?: UpdateWebApplicationInput;
  static names(): { [key: string]: string } {
    return {
      namespaceId: 'NamespaceId',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceId: 'string',
      body: UpdateWebApplicationInput,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWebApplicationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: WebApplicationBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: WebApplicationBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWebApplicationScalingConfigRequest extends $tea.Model {
  namespaceId?: string;
  body?: UpdateWebApplicationScalingConfigInput;
  static names(): { [key: string]: string } {
    return {
      namespaceId: 'NamespaceId',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceId: 'string',
      body: UpdateWebApplicationScalingConfigInput,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWebApplicationScalingConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: WebApplicationScalingConfigBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: WebApplicationScalingConfigBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWebApplicationTrafficConfigRequest extends $tea.Model {
  namespaceId?: string;
  body?: UpdateWebApplicationTrafficConfigInput;
  static names(): { [key: string]: string } {
    return {
      namespaceId: 'NamespaceId',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceId: 'string',
      body: UpdateWebApplicationTrafficConfigInput,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWebApplicationTrafficConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: WebApplicationTrafficConfigBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: WebApplicationTrafficConfigBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWebCustomDomainRequest extends $tea.Model {
  namespaceId?: string;
  body?: UpdateWebCustomDomainInput;
  static names(): { [key: string]: string } {
    return {
      namespaceId: 'NamespaceId',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceId: 'string',
      body: UpdateWebCustomDomainInput,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWebCustomDomainResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: WebCustomDomainBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: WebCustomDomainBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppStackInstanceEndpoints extends $tea.Model {
  address?: string;
  name?: string;
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      name: 'Name',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      name: 'string',
      protocol: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppStackInstanceParameters extends $tea.Model {
  name?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppStackTaskSteps extends $tea.Model {
  code?: string;
  duration?: number;
  endTime?: number;
  id?: string;
  message?: string;
  name?: string;
  startTime?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      duration: 'Duration',
      endTime: 'EndTime',
      id: 'Id',
      message: 'Message',
      name: 'Name',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      duration: 'number',
      endTime: 'number',
      id: 'string',
      message: 'string',
      name: 'string',
      startTime: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BuildPipelineBuildConfig extends $tea.Model {
  beforeBuildCommand?: string;
  buildType?: string;
  dockerfilePath?: string;
  runCommand?: string;
  runtimeType?: string;
  runtimeVersion?: string;
  tomcatConfig?: TomcatConfig;
  workingDir?: string;
  static names(): { [key: string]: string } {
    return {
      beforeBuildCommand: 'BeforeBuildCommand',
      buildType: 'BuildType',
      dockerfilePath: 'DockerfilePath',
      runCommand: 'RunCommand',
      runtimeType: 'RuntimeType',
      runtimeVersion: 'RuntimeVersion',
      tomcatConfig: 'TomcatConfig',
      workingDir: 'WorkingDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beforeBuildCommand: 'string',
      buildType: 'string',
      dockerfilePath: 'string',
      runCommand: 'string',
      runtimeType: 'string',
      runtimeVersion: 'string',
      tomcatConfig: TomcatConfig,
      workingDir: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BuildPipelineCodeConfig extends $tea.Model {
  accountId?: string;
  branchName?: string;
  commitId?: string;
  commitUrl?: string;
  organizationId?: string;
  provider?: string;
  repoFullName?: string;
  repoId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      branchName: 'BranchName',
      commitId: 'CommitId',
      commitUrl: 'CommitUrl',
      organizationId: 'OrganizationId',
      provider: 'Provider',
      repoFullName: 'RepoFullName',
      repoId: 'RepoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      branchName: 'string',
      commitId: 'string',
      commitUrl: 'string',
      organizationId: 'string',
      provider: 'string',
      repoFullName: 'string',
      repoId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BuildPipelineDeployConfig extends $tea.Model {
  alwaysAllocateCPU?: boolean;
  maximumInstanceCount?: number;
  minimumInstanceCount?: number;
  updateApplicationInput?: string;
  updateTraffic?: boolean;
  static names(): { [key: string]: string } {
    return {
      alwaysAllocateCPU: 'AlwaysAllocateCPU',
      maximumInstanceCount: 'MaximumInstanceCount',
      minimumInstanceCount: 'MinimumInstanceCount',
      updateApplicationInput: 'UpdateApplicationInput',
      updateTraffic: 'UpdateTraffic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alwaysAllocateCPU: 'boolean',
      maximumInstanceCount: 'number',
      minimumInstanceCount: 'number',
      updateApplicationInput: 'string',
      updateTraffic: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BuildPipelineImageConfig extends $tea.Model {
  instanceType?: string;
  namespace?: string;
  repository?: string;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
      namespace: 'Namespace',
      repository: 'Repository',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      namespace: 'string',
      repository: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BuildPipelinePackageConfig extends $tea.Model {
  packageName?: string;
  packageType?: string;
  packageUrl?: string;
  packageVersion?: string;
  static names(): { [key: string]: string } {
    return {
      packageName: 'PackageName',
      packageType: 'PackageType',
      packageUrl: 'PackageUrl',
      packageVersion: 'PackageVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      packageName: 'string',
      packageType: 'string',
      packageUrl: 'string',
      packageVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BuildPipelineTriggerConfig extends $tea.Model {
  branchName?: string;
  tagName?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      branchName: 'BranchName',
      tagName: 'TagName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branchName: 'string',
      tagName: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BuildPipelineRunBuildConfigTrigger extends $tea.Model {
  branchName?: string;
  tagName?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      branchName: 'BranchName',
      tagName: 'TagName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branchName: 'string',
      tagName: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BuildPipelineRunBuildConfig extends $tea.Model {
  beforeBuildCommand?: string;
  buildType?: string;
  dockerfilePath?: string;
  runCommand?: string;
  runtimeType?: string;
  runtimeVersion?: string;
  tomcatConfig?: TomcatConfig;
  trigger?: BuildPipelineRunBuildConfigTrigger;
  workingDir?: string;
  static names(): { [key: string]: string } {
    return {
      beforeBuildCommand: 'BeforeBuildCommand',
      buildType: 'BuildType',
      dockerfilePath: 'DockerfilePath',
      runCommand: 'RunCommand',
      runtimeType: 'RuntimeType',
      runtimeVersion: 'RuntimeVersion',
      tomcatConfig: 'TomcatConfig',
      trigger: 'Trigger',
      workingDir: 'WorkingDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beforeBuildCommand: 'string',
      buildType: 'string',
      dockerfilePath: 'string',
      runCommand: 'string',
      runtimeType: 'string',
      runtimeVersion: 'string',
      tomcatConfig: TomcatConfig,
      trigger: BuildPipelineRunBuildConfigTrigger,
      workingDir: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BuildPipelineRunCodeConfig extends $tea.Model {
  accountId?: string;
  branchName?: string;
  commitId?: string;
  commitUrl?: string;
  organizationId?: string;
  provider?: string;
  repoFullName?: string;
  repoId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      branchName: 'BranchName',
      commitId: 'CommitId',
      commitUrl: 'CommitUrl',
      organizationId: 'OrganizationId',
      provider: 'Provider',
      repoFullName: 'RepoFullName',
      repoId: 'RepoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      branchName: 'string',
      commitId: 'string',
      commitUrl: 'string',
      organizationId: 'string',
      provider: 'string',
      repoFullName: 'string',
      repoId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BuildPipelineRunDeployConfig extends $tea.Model {
  alwaysAllocateCPU?: boolean;
  maximumInstanceCount?: number;
  minimumInstanceCount?: number;
  updateApplicationInput?: string;
  updateTraffic?: boolean;
  static names(): { [key: string]: string } {
    return {
      alwaysAllocateCPU: 'AlwaysAllocateCPU',
      maximumInstanceCount: 'MaximumInstanceCount',
      minimumInstanceCount: 'MinimumInstanceCount',
      updateApplicationInput: 'UpdateApplicationInput',
      updateTraffic: 'UpdateTraffic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alwaysAllocateCPU: 'boolean',
      maximumInstanceCount: 'number',
      minimumInstanceCount: 'number',
      updateApplicationInput: 'string',
      updateTraffic: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BuildPipelineRunImageConfig extends $tea.Model {
  instanceType?: string;
  namespace?: string;
  repository?: string;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
      namespace: 'Namespace',
      repository: 'Repository',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      namespace: 'string',
      repository: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BuildPipelineRunPackageConfig extends $tea.Model {
  packageName?: string;
  packageType?: string;
  packageUrl?: string;
  packageVersion?: string;
  static names(): { [key: string]: string } {
    return {
      packageName: 'PackageName',
      packageType: 'PackageType',
      packageUrl: 'PackageUrl',
      packageVersion: 'PackageVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      packageName: 'string',
      packageType: 'string',
      packageUrl: 'string',
      packageVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BuildPipelineRunSteps extends $tea.Model {
  description?: string;
  duration?: number;
  endTime?: number;
  id?: string;
  name?: string;
  result?: string;
  startTime?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      duration: 'Duration',
      endTime: 'EndTime',
      id: 'Id',
      name: 'Name',
      result: 'Result',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      duration: 'number',
      endTime: 'number',
      id: 'string',
      name: 'string',
      result: 'string',
      startTime: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BuildPipelineRunTriggerConfig extends $tea.Model {
  branchName?: string;
  tagName?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      branchName: 'BranchName',
      tagName: 'TagName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branchName: 'string',
      tagName: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PriceEstimateOutputAppsUsages extends $tea.Model {
  amount?: number;
  id?: string;
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      id: 'Id',
      unit: 'Unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      id: 'string',
      unit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PriceEstimateOutputApps extends $tea.Model {
  feature?: PriceEstimateFeature;
  id?: number;
  usages?: PriceEstimateOutputAppsUsages[];
  static names(): { [key: string]: string } {
    return {
      feature: 'Feature',
      id: 'Id',
      usages: 'Usages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      feature: PriceEstimateFeature,
      id: 'number',
      usages: { 'type': 'array', 'itemType': PriceEstimateOutputAppsUsages },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PriceEstimateOutputItemsSteps extends $tea.Model {
  begin?: number;
  end?: number;
  price?: number;
  regionIds?: string[];
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      begin: 'Begin',
      end: 'End',
      price: 'Price',
      regionIds: 'RegionIds',
      unit: 'Unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'number',
      end: 'number',
      price: 'number',
      regionIds: { 'type': 'array', 'itemType': 'string' },
      unit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PriceEstimateOutputItems extends $tea.Model {
  amount?: number;
  count?: number;
  id?: string;
  price?: number;
  steps?: PriceEstimateOutputItemsSteps[];
  type?: string;
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      count: 'Count',
      id: 'Id',
      price: 'Price',
      steps: 'Steps',
      type: 'Type',
      unit: 'Unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      count: 'number',
      id: 'string',
      price: 'number',
      steps: { 'type': 'array', 'itemType': PriceEstimateOutputItemsSteps },
      type: 'string',
      unit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProbeProbeHandlerHttpGetHttpHeaders extends $tea.Model {
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProbeProbeHandlerHttpGet extends $tea.Model {
  httpHeaders?: ProbeProbeHandlerHttpGetHttpHeaders[];
  path?: string;
  port?: number;
  static names(): { [key: string]: string } {
    return {
      httpHeaders: 'httpHeaders',
      path: 'path',
      port: 'port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpHeaders: { 'type': 'array', 'itemType': ProbeProbeHandlerHttpGetHttpHeaders },
      path: 'string',
      port: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProbeProbeHandlerTcpSocket extends $tea.Model {
  port?: number;
  static names(): { [key: string]: string } {
    return {
      port: 'port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProbeProbeHandler extends $tea.Model {
  httpGet?: ProbeProbeHandlerHttpGet;
  tcpSocket?: ProbeProbeHandlerTcpSocket;
  static names(): { [key: string]: string } {
    return {
      httpGet: 'httpGet',
      tcpSocket: 'tcpSocket',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpGet: ProbeProbeHandlerHttpGet,
      tcpSocket: ProbeProbeHandlerTcpSocket,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SLSConfigCollectConfigs extends $tea.Model {
  logPath?: string;
  logType?: string;
  logstoreName?: string;
  logtailName?: string;
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      logPath: 'logPath',
      logType: 'logType',
      logstoreName: 'logstoreName',
      logtailName: 'logtailName',
      projectName: 'projectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logPath: 'string',
      logType: 'string',
      logstoreName: 'string',
      logtailName: 'string',
      projectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SourceCodeAccountOrganizations extends $tea.Model {
  avatarUrl?: string;
  id?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      avatarUrl: 'AvatarUrl',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarUrl: 'string',
      id: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmenuItems extends $tea.Model {
  defaultSelected?: boolean;
  itemDesc?: string;
  itemType?: string;
  relatingItems?: string[];
  static names(): { [key: string]: string } {
    return {
      defaultSelected: 'DefaultSelected',
      itemDesc: 'ItemDesc',
      itemType: 'ItemType',
      relatingItems: 'RelatingItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultSelected: 'boolean',
      itemDesc: 'string',
      itemType: 'string',
      relatingItems: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbortAndRollbackChangeOrderResponseBodyData extends $tea.Model {
  changeOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'ChangeOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbortChangeOrderResponseBodyData extends $tea.Model {
  changeOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'ChangeOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchStartApplicationsResponseBodyData extends $tea.Model {
  changeOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'ChangeOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchStopApplicationsResponseBodyData extends $tea.Model {
  changeOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'ChangeOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindSlbResponseBodyData extends $tea.Model {
  changeOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'ChangeOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfirmPipelineBatchResponseBodyData extends $tea.Model {
  pipelineId?: string;
  static names(): { [key: string]: string } {
    return {
      pipelineId: 'PipelineId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pipelineId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationResponseBodyData extends $tea.Model {
  appId?: string;
  changeOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      changeOrderId: 'ChangeOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      changeOrderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationScalingRuleResponseBodyDataMetricMetrics extends $tea.Model {
  metricTargetAverageUtilization?: number;
  metricType?: string;
  slbId?: string;
  slbLogstore?: string;
  slbProject?: string;
  vport?: string;
  static names(): { [key: string]: string } {
    return {
      metricTargetAverageUtilization: 'MetricTargetAverageUtilization',
      metricType: 'MetricType',
      slbId: 'SlbId',
      slbLogstore: 'SlbLogstore',
      slbProject: 'SlbProject',
      vport: 'Vport',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricTargetAverageUtilization: 'number',
      metricType: 'string',
      slbId: 'string',
      slbLogstore: 'string',
      slbProject: 'string',
      vport: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationScalingRuleResponseBodyDataMetric extends $tea.Model {
  maxReplicas?: number;
  metrics?: CreateApplicationScalingRuleResponseBodyDataMetricMetrics[];
  minReplicas?: number;
  static names(): { [key: string]: string } {
    return {
      maxReplicas: 'MaxReplicas',
      metrics: 'Metrics',
      minReplicas: 'MinReplicas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxReplicas: 'number',
      metrics: { 'type': 'array', 'itemType': CreateApplicationScalingRuleResponseBodyDataMetricMetrics },
      minReplicas: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationScalingRuleResponseBodyDataTimerSchedules extends $tea.Model {
  atTime?: string;
  maxReplicas?: number;
  minReplicas?: number;
  targetReplicas?: number;
  static names(): { [key: string]: string } {
    return {
      atTime: 'AtTime',
      maxReplicas: 'MaxReplicas',
      minReplicas: 'MinReplicas',
      targetReplicas: 'TargetReplicas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      atTime: 'string',
      maxReplicas: 'number',
      minReplicas: 'number',
      targetReplicas: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationScalingRuleResponseBodyDataTimer extends $tea.Model {
  beginDate?: string;
  endDate?: string;
  period?: string;
  schedules?: CreateApplicationScalingRuleResponseBodyDataTimerSchedules[];
  static names(): { [key: string]: string } {
    return {
      beginDate: 'BeginDate',
      endDate: 'EndDate',
      period: 'Period',
      schedules: 'Schedules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginDate: 'string',
      endDate: 'string',
      period: 'string',
      schedules: { 'type': 'array', 'itemType': CreateApplicationScalingRuleResponseBodyDataTimerSchedules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationScalingRuleResponseBodyData extends $tea.Model {
  appId?: string;
  createTime?: number;
  lastDisableTime?: number;
  metric?: CreateApplicationScalingRuleResponseBodyDataMetric;
  scaleRuleEnabled?: boolean;
  scaleRuleName?: string;
  scaleRuleType?: string;
  timer?: CreateApplicationScalingRuleResponseBodyDataTimer;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      createTime: 'CreateTime',
      lastDisableTime: 'LastDisableTime',
      metric: 'Metric',
      scaleRuleEnabled: 'ScaleRuleEnabled',
      scaleRuleName: 'ScaleRuleName',
      scaleRuleType: 'ScaleRuleType',
      timer: 'Timer',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      createTime: 'number',
      lastDisableTime: 'number',
      metric: CreateApplicationScalingRuleResponseBodyDataMetric,
      scaleRuleEnabled: 'boolean',
      scaleRuleName: 'string',
      scaleRuleType: 'string',
      timer: CreateApplicationScalingRuleResponseBodyDataTimer,
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConfigMapResponseBodyData extends $tea.Model {
  configMapId?: number;
  static names(): { [key: string]: string } {
    return {
      configMapId: 'ConfigMapId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configMapId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGreyTagRouteResponseBodyData extends $tea.Model {
  greyTagRouteId?: number;
  static names(): { [key: string]: string } {
    return {
      greyTagRouteId: 'GreyTagRouteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      greyTagRouteId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIngressResponseBodyData extends $tea.Model {
  ingressId?: number;
  static names(): { [key: string]: string } {
    return {
      ingressId: 'IngressId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ingressId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobResponseBodyData extends $tea.Model {
  appId?: string;
  changeOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      changeOrderId: 'ChangeOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      changeOrderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNamespaceResponseBodyData extends $tea.Model {
  enableMicroRegistration?: boolean;
  nameSpaceShortId?: string;
  namespaceDescription?: string;
  namespaceId?: string;
  namespaceName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      enableMicroRegistration: 'EnableMicroRegistration',
      nameSpaceShortId: 'NameSpaceShortId',
      namespaceDescription: 'NamespaceDescription',
      namespaceId: 'NamespaceId',
      namespaceName: 'NamespaceName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableMicroRegistration: 'boolean',
      nameSpaceShortId: 'string',
      namespaceDescription: 'string',
      namespaceId: 'string',
      namespaceName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSecretRequestSecretData extends $tea.Model {
  secretData?: string;
  static names(): { [key: string]: string } {
    return {
      secretData: 'SecretData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secretData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSecretResponseBodyData extends $tea.Model {
  secretId?: number;
  static names(): { [key: string]: string } {
    return {
      secretId: 'SecretId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secretId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApplicationResponseBodyData extends $tea.Model {
  changeOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'ChangeOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConfigMapResponseBodyData extends $tea.Model {
  configMapId?: number;
  static names(): { [key: string]: string } {
    return {
      configMapId: 'ConfigMapId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configMapId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGreyTagRouteResponseBodyData extends $tea.Model {
  greyTagRouteId?: number;
  static names(): { [key: string]: string } {
    return {
      greyTagRouteId: 'GreyTagRouteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      greyTagRouteId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIngressResponseBodyData extends $tea.Model {
  ingressId?: number;
  static names(): { [key: string]: string } {
    return {
      ingressId: 'IngressId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ingressId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSecretResponseBodyData extends $tea.Model {
  secretId?: number;
  static names(): { [key: string]: string } {
    return {
      secretId: 'SecretId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secretId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployApplicationResponseBodyData extends $tea.Model {
  appId?: string;
  changeOrderId?: string;
  isNeedApproval?: boolean;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      changeOrderId: 'ChangeOrderId',
      isNeedApproval: 'IsNeedApproval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      changeOrderId: 'string',
      isNeedApproval: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppServiceDetailResponseBodyDataMethodsParameterDefinitions extends $tea.Model {
  description?: string;
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppServiceDetailResponseBodyDataMethods extends $tea.Model {
  methodController?: string;
  name?: string;
  nameDetail?: string;
  parameterDefinitions?: DescribeAppServiceDetailResponseBodyDataMethodsParameterDefinitions[];
  parameterDetails?: string[];
  parameterTypes?: string[];
  paths?: string[];
  requestMethods?: string[];
  returnDetails?: string;
  returnType?: string;
  static names(): { [key: string]: string } {
    return {
      methodController: 'MethodController',
      name: 'Name',
      nameDetail: 'NameDetail',
      parameterDefinitions: 'ParameterDefinitions',
      parameterDetails: 'ParameterDetails',
      parameterTypes: 'ParameterTypes',
      paths: 'Paths',
      requestMethods: 'RequestMethods',
      returnDetails: 'ReturnDetails',
      returnType: 'ReturnType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      methodController: 'string',
      name: 'string',
      nameDetail: 'string',
      parameterDefinitions: { 'type': 'array', 'itemType': DescribeAppServiceDetailResponseBodyDataMethodsParameterDefinitions },
      parameterDetails: { 'type': 'array', 'itemType': 'string' },
      parameterTypes: { 'type': 'array', 'itemType': 'string' },
      paths: { 'type': 'array', 'itemType': 'string' },
      requestMethods: { 'type': 'array', 'itemType': 'string' },
      returnDetails: 'string',
      returnType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppServiceDetailResponseBodyData extends $tea.Model {
  dubboApplicationName?: string;
  edasAppName?: string;
  group?: string;
  metadata?: { [key: string]: any };
  methods?: DescribeAppServiceDetailResponseBodyDataMethods[];
  serviceName?: string;
  servicePorts?: number[];
  serviceProtocol?: string;
  serviceTags?: string[];
  serviceType?: string;
  springApplicationName?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      dubboApplicationName: 'DubboApplicationName',
      edasAppName: 'EdasAppName',
      group: 'Group',
      metadata: 'Metadata',
      methods: 'Methods',
      serviceName: 'ServiceName',
      servicePorts: 'ServicePorts',
      serviceProtocol: 'ServiceProtocol',
      serviceTags: 'ServiceTags',
      serviceType: 'ServiceType',
      springApplicationName: 'SpringApplicationName',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dubboApplicationName: 'string',
      edasAppName: 'string',
      group: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      methods: { 'type': 'array', 'itemType': DescribeAppServiceDetailResponseBodyDataMethods },
      serviceName: 'string',
      servicePorts: { 'type': 'array', 'itemType': 'number' },
      serviceProtocol: 'string',
      serviceTags: { 'type': 'array', 'itemType': 'string' },
      serviceType: 'string',
      springApplicationName: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationConfigResponseBodyDataConfigMapMountDesc extends $tea.Model {
  configMapId?: number;
  configMapName?: string;
  key?: string;
  mountPath?: string;
  static names(): { [key: string]: string } {
    return {
      configMapId: 'ConfigMapId',
      configMapName: 'ConfigMapName',
      key: 'Key',
      mountPath: 'MountPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configMapId: 'number',
      configMapName: 'string',
      key: 'string',
      mountPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationConfigResponseBodyDataMountDesc extends $tea.Model {
  mountPath?: string;
  nasPath?: string;
  static names(): { [key: string]: string } {
    return {
      mountPath: 'MountPath',
      nasPath: 'NasPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountPath: 'string',
      nasPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationConfigResponseBodyDataOssMountDescs extends $tea.Model {
  bucketName?: string;
  bucketPath?: string;
  mountPath?: string;
  readOnly?: boolean;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'bucketName',
      bucketPath: 'bucketPath',
      mountPath: 'mountPath',
      readOnly: 'readOnly',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      bucketPath: 'string',
      mountPath: 'string',
      readOnly: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationConfigResponseBodyDataTags extends $tea.Model {
  key?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationConfigResponseBodyData extends $tea.Model {
  acrAssumeRoleArn?: string;
  acrInstanceId?: string;
  appDescription?: string;
  appId?: string;
  appName?: string;
  appSource?: string;
  associateEip?: boolean;
  batchWaitTime?: number;
  command?: string;
  commandArgs?: string;
  configMapMountDesc?: DescribeApplicationConfigResponseBodyDataConfigMapMountDesc[];
  cpu?: number;
  customHostAlias?: string;
  edasContainerVersion?: string;
  enableAhas?: string;
  enableGreyTagRoute?: boolean;
  envs?: string;
  imagePullSecrets?: string;
  imageUrl?: string;
  jarStartArgs?: string;
  jarStartOptions?: string;
  jdk?: string;
  kafkaConfigs?: string;
  liveness?: string;
  memory?: number;
  microRegistration?: string;
  minReadyInstanceRatio?: number;
  minReadyInstances?: number;
  mountDesc?: DescribeApplicationConfigResponseBodyDataMountDesc[];
  mountHost?: string;
  mseApplicationId?: string;
  mseApplicationName?: string;
  namespaceId?: string;
  nasConfigs?: string;
  nasId?: string;
  ossAkId?: string;
  ossAkSecret?: string;
  ossMountDescs?: DescribeApplicationConfigResponseBodyDataOssMountDescs[];
  packageType?: string;
  packageUrl?: string;
  packageVersion?: string;
  php?: string;
  phpArmsConfigLocation?: string;
  phpConfig?: string;
  phpConfigLocation?: string;
  postStart?: string;
  preStop?: string;
  programmingLanguage?: string;
  pvtzDiscovery?: string;
  python?: string;
  pythonModules?: string;
  readiness?: string;
  regionId?: string;
  replicas?: number;
  securityGroupId?: string;
  serviceTags?: { [key: string]: string };
  slsConfigs?: string;
  tags?: DescribeApplicationConfigResponseBodyDataTags[];
  terminationGracePeriodSeconds?: number;
  timezone?: string;
  tomcatConfig?: string;
  updateStrategy?: string;
  vSwitchId?: string;
  vpcId?: string;
  warStartOptions?: string;
  webContainer?: string;
  static names(): { [key: string]: string } {
    return {
      acrAssumeRoleArn: 'AcrAssumeRoleArn',
      acrInstanceId: 'AcrInstanceId',
      appDescription: 'AppDescription',
      appId: 'AppId',
      appName: 'AppName',
      appSource: 'AppSource',
      associateEip: 'AssociateEip',
      batchWaitTime: 'BatchWaitTime',
      command: 'Command',
      commandArgs: 'CommandArgs',
      configMapMountDesc: 'ConfigMapMountDesc',
      cpu: 'Cpu',
      customHostAlias: 'CustomHostAlias',
      edasContainerVersion: 'EdasContainerVersion',
      enableAhas: 'EnableAhas',
      enableGreyTagRoute: 'EnableGreyTagRoute',
      envs: 'Envs',
      imagePullSecrets: 'ImagePullSecrets',
      imageUrl: 'ImageUrl',
      jarStartArgs: 'JarStartArgs',
      jarStartOptions: 'JarStartOptions',
      jdk: 'Jdk',
      kafkaConfigs: 'KafkaConfigs',
      liveness: 'Liveness',
      memory: 'Memory',
      microRegistration: 'MicroRegistration',
      minReadyInstanceRatio: 'MinReadyInstanceRatio',
      minReadyInstances: 'MinReadyInstances',
      mountDesc: 'MountDesc',
      mountHost: 'MountHost',
      mseApplicationId: 'MseApplicationId',
      mseApplicationName: 'MseApplicationName',
      namespaceId: 'NamespaceId',
      nasConfigs: 'NasConfigs',
      nasId: 'NasId',
      ossAkId: 'OssAkId',
      ossAkSecret: 'OssAkSecret',
      ossMountDescs: 'OssMountDescs',
      packageType: 'PackageType',
      packageUrl: 'PackageUrl',
      packageVersion: 'PackageVersion',
      php: 'Php',
      phpArmsConfigLocation: 'PhpArmsConfigLocation',
      phpConfig: 'PhpConfig',
      phpConfigLocation: 'PhpConfigLocation',
      postStart: 'PostStart',
      preStop: 'PreStop',
      programmingLanguage: 'ProgrammingLanguage',
      pvtzDiscovery: 'PvtzDiscovery',
      python: 'Python',
      pythonModules: 'PythonModules',
      readiness: 'Readiness',
      regionId: 'RegionId',
      replicas: 'Replicas',
      securityGroupId: 'SecurityGroupId',
      serviceTags: 'ServiceTags',
      slsConfigs: 'SlsConfigs',
      tags: 'Tags',
      terminationGracePeriodSeconds: 'TerminationGracePeriodSeconds',
      timezone: 'Timezone',
      tomcatConfig: 'TomcatConfig',
      updateStrategy: 'UpdateStrategy',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      warStartOptions: 'WarStartOptions',
      webContainer: 'WebContainer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acrAssumeRoleArn: 'string',
      acrInstanceId: 'string',
      appDescription: 'string',
      appId: 'string',
      appName: 'string',
      appSource: 'string',
      associateEip: 'boolean',
      batchWaitTime: 'number',
      command: 'string',
      commandArgs: 'string',
      configMapMountDesc: { 'type': 'array', 'itemType': DescribeApplicationConfigResponseBodyDataConfigMapMountDesc },
      cpu: 'number',
      customHostAlias: 'string',
      edasContainerVersion: 'string',
      enableAhas: 'string',
      enableGreyTagRoute: 'boolean',
      envs: 'string',
      imagePullSecrets: 'string',
      imageUrl: 'string',
      jarStartArgs: 'string',
      jarStartOptions: 'string',
      jdk: 'string',
      kafkaConfigs: 'string',
      liveness: 'string',
      memory: 'number',
      microRegistration: 'string',
      minReadyInstanceRatio: 'number',
      minReadyInstances: 'number',
      mountDesc: { 'type': 'array', 'itemType': DescribeApplicationConfigResponseBodyDataMountDesc },
      mountHost: 'string',
      mseApplicationId: 'string',
      mseApplicationName: 'string',
      namespaceId: 'string',
      nasConfigs: 'string',
      nasId: 'string',
      ossAkId: 'string',
      ossAkSecret: 'string',
      ossMountDescs: { 'type': 'array', 'itemType': DescribeApplicationConfigResponseBodyDataOssMountDescs },
      packageType: 'string',
      packageUrl: 'string',
      packageVersion: 'string',
      php: 'string',
      phpArmsConfigLocation: 'string',
      phpConfig: 'string',
      phpConfigLocation: 'string',
      postStart: 'string',
      preStop: 'string',
      programmingLanguage: 'string',
      pvtzDiscovery: 'string',
      python: 'string',
      pythonModules: 'string',
      readiness: 'string',
      regionId: 'string',
      replicas: 'number',
      securityGroupId: 'string',
      serviceTags: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      slsConfigs: 'string',
      tags: { 'type': 'array', 'itemType': DescribeApplicationConfigResponseBodyDataTags },
      terminationGracePeriodSeconds: 'number',
      timezone: 'string',
      tomcatConfig: 'string',
      updateStrategy: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
      warStartOptions: 'string',
      webContainer: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationGroupsResponseBodyData extends $tea.Model {
  edasContainerVersion?: string;
  groupId?: string;
  groupName?: string;
  groupType?: number;
  imageUrl?: string;
  jdk?: string;
  packageType?: string;
  packageUrl?: string;
  packageVersion?: string;
  replicas?: number;
  runningInstances?: number;
  webContainer?: string;
  static names(): { [key: string]: string } {
    return {
      edasContainerVersion: 'EdasContainerVersion',
      groupId: 'GroupId',
      groupName: 'GroupName',
      groupType: 'GroupType',
      imageUrl: 'ImageUrl',
      jdk: 'Jdk',
      packageType: 'PackageType',
      packageUrl: 'PackageUrl',
      packageVersion: 'PackageVersion',
      replicas: 'Replicas',
      runningInstances: 'RunningInstances',
      webContainer: 'WebContainer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edasContainerVersion: 'string',
      groupId: 'string',
      groupName: 'string',
      groupType: 'number',
      imageUrl: 'string',
      jdk: 'string',
      packageType: 'string',
      packageUrl: 'string',
      packageVersion: 'string',
      replicas: 'number',
      runningInstances: 'number',
      webContainer: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationImageResponseBodyData extends $tea.Model {
  crUrl?: string;
  logo?: string;
  regionId?: string;
  repoName?: string;
  repoNamespace?: string;
  repoOriginType?: string;
  repoTag?: string;
  repoType?: string;
  static names(): { [key: string]: string } {
    return {
      crUrl: 'CrUrl',
      logo: 'Logo',
      regionId: 'RegionId',
      repoName: 'RepoName',
      repoNamespace: 'RepoNamespace',
      repoOriginType: 'RepoOriginType',
      repoTag: 'RepoTag',
      repoType: 'RepoType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crUrl: 'string',
      logo: 'string',
      regionId: 'string',
      repoName: 'string',
      repoNamespace: 'string',
      repoOriginType: 'string',
      repoTag: 'string',
      repoType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationInstancesResponseBodyDataInstances extends $tea.Model {
  createTimeStamp?: number;
  debugStatus?: boolean;
  eip?: string;
  finishTimeStamp?: number;
  groupId?: string;
  imageUrl?: string;
  instanceContainerIp?: string;
  instanceContainerRestarts?: number;
  instanceContainerStatus?: string;
  instanceHealthStatus?: string;
  instanceId?: string;
  packageVersion?: string;
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      createTimeStamp: 'CreateTimeStamp',
      debugStatus: 'DebugStatus',
      eip: 'Eip',
      finishTimeStamp: 'FinishTimeStamp',
      groupId: 'GroupId',
      imageUrl: 'ImageUrl',
      instanceContainerIp: 'InstanceContainerIp',
      instanceContainerRestarts: 'InstanceContainerRestarts',
      instanceContainerStatus: 'InstanceContainerStatus',
      instanceHealthStatus: 'InstanceHealthStatus',
      instanceId: 'InstanceId',
      packageVersion: 'PackageVersion',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTimeStamp: 'number',
      debugStatus: 'boolean',
      eip: 'string',
      finishTimeStamp: 'number',
      groupId: 'string',
      imageUrl: 'string',
      instanceContainerIp: 'string',
      instanceContainerRestarts: 'number',
      instanceContainerStatus: 'string',
      instanceHealthStatus: 'string',
      instanceId: 'string',
      packageVersion: 'string',
      vSwitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationInstancesResponseBodyData extends $tea.Model {
  currentPage?: number;
  instances?: DescribeApplicationInstancesResponseBodyDataInstances[];
  pageSize?: number;
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      instances: 'Instances',
      pageSize: 'PageSize',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      instances: { 'type': 'array', 'itemType': DescribeApplicationInstancesResponseBodyDataInstances },
      pageSize: 'number',
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationScalingRuleResponseBodyDataMetricMetrics extends $tea.Model {
  metricTargetAverageUtilization?: number;
  metricType?: string;
  slbId?: string;
  slbLogstore?: string;
  slbProject?: string;
  vport?: string;
  static names(): { [key: string]: string } {
    return {
      metricTargetAverageUtilization: 'MetricTargetAverageUtilization',
      metricType: 'MetricType',
      slbId: 'SlbId',
      slbLogstore: 'SlbLogstore',
      slbProject: 'SlbProject',
      vport: 'Vport',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricTargetAverageUtilization: 'number',
      metricType: 'string',
      slbId: 'string',
      slbLogstore: 'string',
      slbProject: 'string',
      vport: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationScalingRuleResponseBodyDataMetricMetricsStatusCurrentMetrics extends $tea.Model {
  currentValue?: number;
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      currentValue: 'CurrentValue',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentValue: 'number',
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationScalingRuleResponseBodyDataMetricMetricsStatusNextScaleMetrics extends $tea.Model {
  name?: string;
  nextScaleInAverageUtilization?: number;
  nextScaleOutAverageUtilization?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      nextScaleInAverageUtilization: 'NextScaleInAverageUtilization',
      nextScaleOutAverageUtilization: 'NextScaleOutAverageUtilization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      nextScaleInAverageUtilization: 'number',
      nextScaleOutAverageUtilization: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationScalingRuleResponseBodyDataMetricMetricsStatus extends $tea.Model {
  currentMetrics?: DescribeApplicationScalingRuleResponseBodyDataMetricMetricsStatusCurrentMetrics[];
  currentReplicas?: number;
  desiredReplicas?: number;
  lastScaleTime?: string;
  nextScaleMetrics?: DescribeApplicationScalingRuleResponseBodyDataMetricMetricsStatusNextScaleMetrics[];
  nextScaleTimePeriod?: number;
  static names(): { [key: string]: string } {
    return {
      currentMetrics: 'CurrentMetrics',
      currentReplicas: 'CurrentReplicas',
      desiredReplicas: 'DesiredReplicas',
      lastScaleTime: 'LastScaleTime',
      nextScaleMetrics: 'NextScaleMetrics',
      nextScaleTimePeriod: 'NextScaleTimePeriod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentMetrics: { 'type': 'array', 'itemType': DescribeApplicationScalingRuleResponseBodyDataMetricMetricsStatusCurrentMetrics },
      currentReplicas: 'number',
      desiredReplicas: 'number',
      lastScaleTime: 'string',
      nextScaleMetrics: { 'type': 'array', 'itemType': DescribeApplicationScalingRuleResponseBodyDataMetricMetricsStatusNextScaleMetrics },
      nextScaleTimePeriod: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationScalingRuleResponseBodyDataMetricScaleDownRules extends $tea.Model {
  disabled?: boolean;
  stabilizationWindowSeconds?: number;
  step?: number;
  static names(): { [key: string]: string } {
    return {
      disabled: 'Disabled',
      stabilizationWindowSeconds: 'StabilizationWindowSeconds',
      step: 'Step',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disabled: 'boolean',
      stabilizationWindowSeconds: 'number',
      step: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationScalingRuleResponseBodyDataMetricScaleUpRules extends $tea.Model {
  disabled?: boolean;
  stabilizationWindowSeconds?: number;
  step?: number;
  static names(): { [key: string]: string } {
    return {
      disabled: 'Disabled',
      stabilizationWindowSeconds: 'StabilizationWindowSeconds',
      step: 'Step',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disabled: 'boolean',
      stabilizationWindowSeconds: 'number',
      step: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationScalingRuleResponseBodyDataMetric extends $tea.Model {
  maxReplicas?: number;
  metrics?: DescribeApplicationScalingRuleResponseBodyDataMetricMetrics[];
  metricsStatus?: DescribeApplicationScalingRuleResponseBodyDataMetricMetricsStatus;
  minReplicas?: number;
  scaleDownRules?: DescribeApplicationScalingRuleResponseBodyDataMetricScaleDownRules;
  scaleUpRules?: DescribeApplicationScalingRuleResponseBodyDataMetricScaleUpRules;
  static names(): { [key: string]: string } {
    return {
      maxReplicas: 'MaxReplicas',
      metrics: 'Metrics',
      metricsStatus: 'MetricsStatus',
      minReplicas: 'MinReplicas',
      scaleDownRules: 'ScaleDownRules',
      scaleUpRules: 'ScaleUpRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxReplicas: 'number',
      metrics: { 'type': 'array', 'itemType': DescribeApplicationScalingRuleResponseBodyDataMetricMetrics },
      metricsStatus: DescribeApplicationScalingRuleResponseBodyDataMetricMetricsStatus,
      minReplicas: 'number',
      scaleDownRules: DescribeApplicationScalingRuleResponseBodyDataMetricScaleDownRules,
      scaleUpRules: DescribeApplicationScalingRuleResponseBodyDataMetricScaleUpRules,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationScalingRuleResponseBodyDataTimerSchedules extends $tea.Model {
  atTime?: string;
  maxReplicas?: number;
  minReplicas?: number;
  targetReplicas?: number;
  static names(): { [key: string]: string } {
    return {
      atTime: 'AtTime',
      maxReplicas: 'MaxReplicas',
      minReplicas: 'MinReplicas',
      targetReplicas: 'TargetReplicas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      atTime: 'string',
      maxReplicas: 'number',
      minReplicas: 'number',
      targetReplicas: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationScalingRuleResponseBodyDataTimer extends $tea.Model {
  beginDate?: string;
  endDate?: string;
  period?: string;
  schedules?: DescribeApplicationScalingRuleResponseBodyDataTimerSchedules[];
  static names(): { [key: string]: string } {
    return {
      beginDate: 'BeginDate',
      endDate: 'EndDate',
      period: 'Period',
      schedules: 'Schedules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginDate: 'string',
      endDate: 'string',
      period: 'string',
      schedules: { 'type': 'array', 'itemType': DescribeApplicationScalingRuleResponseBodyDataTimerSchedules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationScalingRuleResponseBodyData extends $tea.Model {
  appId?: string;
  createTime?: number;
  lastDisableTime?: number;
  metric?: DescribeApplicationScalingRuleResponseBodyDataMetric;
  minReadyInstanceRatio?: number;
  minReadyInstances?: number;
  scaleRuleEnabled?: boolean;
  scaleRuleName?: string;
  scaleRuleType?: string;
  timer?: DescribeApplicationScalingRuleResponseBodyDataTimer;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      createTime: 'CreateTime',
      lastDisableTime: 'LastDisableTime',
      metric: 'Metric',
      minReadyInstanceRatio: 'MinReadyInstanceRatio',
      minReadyInstances: 'MinReadyInstances',
      scaleRuleEnabled: 'ScaleRuleEnabled',
      scaleRuleName: 'ScaleRuleName',
      scaleRuleType: 'ScaleRuleType',
      timer: 'Timer',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      createTime: 'number',
      lastDisableTime: 'number',
      metric: DescribeApplicationScalingRuleResponseBodyDataMetric,
      minReadyInstanceRatio: 'number',
      minReadyInstances: 'number',
      scaleRuleEnabled: 'boolean',
      scaleRuleName: 'string',
      scaleRuleType: 'string',
      timer: DescribeApplicationScalingRuleResponseBodyDataTimer,
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetricMetrics extends $tea.Model {
  metricTargetAverageUtilization?: number;
  metricType?: string;
  slbId?: string;
  slbLogstore?: string;
  slbProject?: string;
  vport?: string;
  static names(): { [key: string]: string } {
    return {
      metricTargetAverageUtilization: 'MetricTargetAverageUtilization',
      metricType: 'MetricType',
      slbId: 'SlbId',
      slbLogstore: 'SlbLogstore',
      slbProject: 'SlbProject',
      vport: 'Vport',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricTargetAverageUtilization: 'number',
      metricType: 'string',
      slbId: 'string',
      slbLogstore: 'string',
      slbProject: 'string',
      vport: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetricMetricsStatusCurrentMetrics extends $tea.Model {
  currentValue?: number;
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      currentValue: 'CurrentValue',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentValue: 'number',
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetricMetricsStatusNextScaleMetrics extends $tea.Model {
  name?: string;
  nextScaleInAverageUtilization?: number;
  nextScaleOutAverageUtilization?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      nextScaleInAverageUtilization: 'NextScaleInAverageUtilization',
      nextScaleOutAverageUtilization: 'NextScaleOutAverageUtilization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      nextScaleInAverageUtilization: 'number',
      nextScaleOutAverageUtilization: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetricMetricsStatus extends $tea.Model {
  currentMetrics?: DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetricMetricsStatusCurrentMetrics[];
  currentReplicas?: number;
  desiredReplicas?: number;
  lastScaleTime?: string;
  maxReplicas?: number;
  minReplicas?: number;
  nextScaleMetrics?: DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetricMetricsStatusNextScaleMetrics[];
  nextScaleTimePeriod?: number;
  static names(): { [key: string]: string } {
    return {
      currentMetrics: 'CurrentMetrics',
      currentReplicas: 'CurrentReplicas',
      desiredReplicas: 'DesiredReplicas',
      lastScaleTime: 'LastScaleTime',
      maxReplicas: 'MaxReplicas',
      minReplicas: 'MinReplicas',
      nextScaleMetrics: 'NextScaleMetrics',
      nextScaleTimePeriod: 'NextScaleTimePeriod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentMetrics: { 'type': 'array', 'itemType': DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetricMetricsStatusCurrentMetrics },
      currentReplicas: 'number',
      desiredReplicas: 'number',
      lastScaleTime: 'string',
      maxReplicas: 'number',
      minReplicas: 'number',
      nextScaleMetrics: { 'type': 'array', 'itemType': DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetricMetricsStatusNextScaleMetrics },
      nextScaleTimePeriod: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetricScaleDownRules extends $tea.Model {
  disabled?: boolean;
  stabilizationWindowSeconds?: number;
  step?: number;
  static names(): { [key: string]: string } {
    return {
      disabled: 'Disabled',
      stabilizationWindowSeconds: 'StabilizationWindowSeconds',
      step: 'Step',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disabled: 'boolean',
      stabilizationWindowSeconds: 'number',
      step: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetricScaleUpRules extends $tea.Model {
  disabled?: boolean;
  stabilizationWindowSeconds?: number;
  step?: number;
  static names(): { [key: string]: string } {
    return {
      disabled: 'Disabled',
      stabilizationWindowSeconds: 'StabilizationWindowSeconds',
      step: 'Step',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disabled: 'boolean',
      stabilizationWindowSeconds: 'number',
      step: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetric extends $tea.Model {
  maxReplicas?: number;
  metrics?: DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetricMetrics[];
  metricsStatus?: DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetricMetricsStatus;
  minReplicas?: number;
  scaleDownRules?: DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetricScaleDownRules;
  scaleUpRules?: DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetricScaleUpRules;
  static names(): { [key: string]: string } {
    return {
      maxReplicas: 'MaxReplicas',
      metrics: 'Metrics',
      metricsStatus: 'MetricsStatus',
      minReplicas: 'MinReplicas',
      scaleDownRules: 'ScaleDownRules',
      scaleUpRules: 'ScaleUpRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxReplicas: 'number',
      metrics: { 'type': 'array', 'itemType': DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetricMetrics },
      metricsStatus: DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetricMetricsStatus,
      minReplicas: 'number',
      scaleDownRules: DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetricScaleDownRules,
      scaleUpRules: DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetricScaleUpRules,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesTimerSchedules extends $tea.Model {
  atTime?: string;
  maxReplicas?: number;
  minReplicas?: number;
  targetReplicas?: number;
  static names(): { [key: string]: string } {
    return {
      atTime: 'AtTime',
      maxReplicas: 'MaxReplicas',
      minReplicas: 'MinReplicas',
      targetReplicas: 'TargetReplicas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      atTime: 'string',
      maxReplicas: 'number',
      minReplicas: 'number',
      targetReplicas: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesTimer extends $tea.Model {
  beginDate?: string;
  endDate?: string;
  period?: string;
  schedules?: DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesTimerSchedules[];
  static names(): { [key: string]: string } {
    return {
      beginDate: 'BeginDate',
      endDate: 'EndDate',
      period: 'Period',
      schedules: 'Schedules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginDate: 'string',
      endDate: 'string',
      period: 'string',
      schedules: { 'type': 'array', 'itemType': DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesTimerSchedules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRules extends $tea.Model {
  appId?: string;
  createTime?: number;
  lastDisableTime?: number;
  metric?: DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetric;
  minReadyInstanceRatio?: number;
  minReadyInstances?: number;
  scaleRuleEnabled?: boolean;
  scaleRuleName?: string;
  scaleRuleType?: string;
  timer?: DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesTimer;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      createTime: 'CreateTime',
      lastDisableTime: 'LastDisableTime',
      metric: 'Metric',
      minReadyInstanceRatio: 'MinReadyInstanceRatio',
      minReadyInstances: 'MinReadyInstances',
      scaleRuleEnabled: 'ScaleRuleEnabled',
      scaleRuleName: 'ScaleRuleName',
      scaleRuleType: 'ScaleRuleType',
      timer: 'Timer',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      createTime: 'number',
      lastDisableTime: 'number',
      metric: DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetric,
      minReadyInstanceRatio: 'number',
      minReadyInstances: 'number',
      scaleRuleEnabled: 'boolean',
      scaleRuleName: 'string',
      scaleRuleType: 'string',
      timer: DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesTimer,
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationScalingRulesResponseBodyData extends $tea.Model {
  applicationScalingRules?: DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRules[];
  currentPage?: number;
  pageSize?: number;
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      applicationScalingRules: 'ApplicationScalingRules',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationScalingRules: { 'type': 'array', 'itemType': DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRules },
      currentPage: 'number',
      pageSize: 'number',
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationSlbsResponseBodyDataInternet extends $tea.Model {
  cookie?: string;
  cookieTimeout?: number;
  httpsCaCertId?: string;
  httpsCertId?: string;
  port?: number;
  protocol?: string;
  stickySession?: boolean;
  stickySessionType?: string;
  targetPort?: number;
  static names(): { [key: string]: string } {
    return {
      cookie: 'Cookie',
      cookieTimeout: 'CookieTimeout',
      httpsCaCertId: 'HttpsCaCertId',
      httpsCertId: 'HttpsCertId',
      port: 'Port',
      protocol: 'Protocol',
      stickySession: 'StickySession',
      stickySessionType: 'StickySessionType',
      targetPort: 'TargetPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cookie: 'string',
      cookieTimeout: 'number',
      httpsCaCertId: 'string',
      httpsCertId: 'string',
      port: 'number',
      protocol: 'string',
      stickySession: 'boolean',
      stickySessionType: 'string',
      targetPort: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationSlbsResponseBodyDataIntranet extends $tea.Model {
  cookie?: string;
  cookieTimeout?: number;
  httpsCaCertId?: string;
  httpsCertId?: string;
  port?: number;
  protocol?: string;
  stickySession?: boolean;
  stickySessionType?: string;
  targetPort?: number;
  static names(): { [key: string]: string } {
    return {
      cookie: 'Cookie',
      cookieTimeout: 'CookieTimeout',
      httpsCaCertId: 'HttpsCaCertId',
      httpsCertId: 'HttpsCertId',
      port: 'Port',
      protocol: 'Protocol',
      stickySession: 'StickySession',
      stickySessionType: 'StickySessionType',
      targetPort: 'TargetPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cookie: 'string',
      cookieTimeout: 'number',
      httpsCaCertId: 'string',
      httpsCertId: 'string',
      port: 'number',
      protocol: 'string',
      stickySession: 'boolean',
      stickySessionType: 'string',
      targetPort: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationSlbsResponseBodyData extends $tea.Model {
  internet?: DescribeApplicationSlbsResponseBodyDataInternet[];
  internetIp?: string;
  internetSlbExpired?: boolean;
  internetSlbId?: string;
  intranet?: DescribeApplicationSlbsResponseBodyDataIntranet[];
  intranetIp?: string;
  intranetSlbExpired?: boolean;
  intranetSlbId?: string;
  static names(): { [key: string]: string } {
    return {
      internet: 'Internet',
      internetIp: 'InternetIp',
      internetSlbExpired: 'InternetSlbExpired',
      internetSlbId: 'InternetSlbId',
      intranet: 'Intranet',
      intranetIp: 'IntranetIp',
      intranetSlbExpired: 'IntranetSlbExpired',
      intranetSlbId: 'IntranetSlbId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      internet: { 'type': 'array', 'itemType': DescribeApplicationSlbsResponseBodyDataInternet },
      internetIp: 'string',
      internetSlbExpired: 'boolean',
      internetSlbId: 'string',
      intranet: { 'type': 'array', 'itemType': DescribeApplicationSlbsResponseBodyDataIntranet },
      intranetIp: 'string',
      intranetSlbExpired: 'boolean',
      intranetSlbId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationStatusResponseBodyData extends $tea.Model {
  appId?: string;
  armsAdvancedEnabled?: string;
  armsApmInfo?: string;
  createTime?: string;
  currentStatus?: string;
  enableAgent?: boolean;
  fileSizeLimit?: number;
  lastChangeOrderId?: string;
  lastChangeOrderRunning?: boolean;
  lastChangeOrderStatus?: string;
  runningInstances?: number;
  subStatus?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      armsAdvancedEnabled: 'ArmsAdvancedEnabled',
      armsApmInfo: 'ArmsApmInfo',
      createTime: 'CreateTime',
      currentStatus: 'CurrentStatus',
      enableAgent: 'EnableAgent',
      fileSizeLimit: 'FileSizeLimit',
      lastChangeOrderId: 'LastChangeOrderId',
      lastChangeOrderRunning: 'LastChangeOrderRunning',
      lastChangeOrderStatus: 'LastChangeOrderStatus',
      runningInstances: 'RunningInstances',
      subStatus: 'SubStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      armsAdvancedEnabled: 'string',
      armsApmInfo: 'string',
      createTime: 'string',
      currentStatus: 'string',
      enableAgent: 'boolean',
      fileSizeLimit: 'number',
      lastChangeOrderId: 'string',
      lastChangeOrderRunning: 'boolean',
      lastChangeOrderStatus: 'string',
      runningInstances: 'number',
      subStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChangeOrderResponseBodyDataPipelines extends $tea.Model {
  batchType?: number;
  parallelCount?: number;
  pipelineId?: string;
  pipelineName?: string;
  startTime?: number;
  status?: number;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      batchType: 'BatchType',
      parallelCount: 'ParallelCount',
      pipelineId: 'PipelineId',
      pipelineName: 'PipelineName',
      startTime: 'StartTime',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchType: 'number',
      parallelCount: 'number',
      pipelineId: 'string',
      pipelineName: 'string',
      startTime: 'number',
      status: 'number',
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChangeOrderResponseBodyData extends $tea.Model {
  appId?: string;
  appName?: string;
  approvalId?: string;
  auto?: boolean;
  batchCount?: number;
  batchType?: string;
  batchWaitTime?: number;
  changeOrderId?: string;
  coType?: string;
  coTypeCode?: string;
  createTime?: string;
  currentPipelineId?: string;
  description?: string;
  errorMessage?: string;
  pipelines?: DescribeChangeOrderResponseBodyDataPipelines[];
  status?: number;
  subStatus?: number;
  supportRollback?: boolean;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      approvalId: 'ApprovalId',
      auto: 'Auto',
      batchCount: 'BatchCount',
      batchType: 'BatchType',
      batchWaitTime: 'BatchWaitTime',
      changeOrderId: 'ChangeOrderId',
      coType: 'CoType',
      coTypeCode: 'CoTypeCode',
      createTime: 'CreateTime',
      currentPipelineId: 'CurrentPipelineId',
      description: 'Description',
      errorMessage: 'ErrorMessage',
      pipelines: 'Pipelines',
      status: 'Status',
      subStatus: 'SubStatus',
      supportRollback: 'SupportRollback',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      approvalId: 'string',
      auto: 'boolean',
      batchCount: 'number',
      batchType: 'string',
      batchWaitTime: 'number',
      changeOrderId: 'string',
      coType: 'string',
      coTypeCode: 'string',
      createTime: 'string',
      currentPipelineId: 'string',
      description: 'string',
      errorMessage: 'string',
      pipelines: { 'type': 'array', 'itemType': DescribeChangeOrderResponseBodyDataPipelines },
      status: 'number',
      subStatus: 'number',
      supportRollback: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeComponentsResponseBodyData extends $tea.Model {
  componentDescription?: string;
  componentKey?: string;
  expired?: boolean;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      componentDescription: 'ComponentDescription',
      componentKey: 'ComponentKey',
      expired: 'Expired',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentDescription: 'string',
      componentKey: 'string',
      expired: 'boolean',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigMapResponseBodyDataRelateApps extends $tea.Model {
  appId?: string;
  appName?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigMapResponseBodyData extends $tea.Model {
  configMapId?: number;
  createTime?: number;
  data?: { [key: string]: any };
  description?: string;
  name?: string;
  namespaceId?: string;
  relateApps?: DescribeConfigMapResponseBodyDataRelateApps[];
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      configMapId: 'ConfigMapId',
      createTime: 'CreateTime',
      data: 'Data',
      description: 'Description',
      name: 'Name',
      namespaceId: 'NamespaceId',
      relateApps: 'RelateApps',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configMapId: 'number',
      createTime: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      description: 'string',
      name: 'string',
      namespaceId: 'string',
      relateApps: { 'type': 'array', 'itemType': DescribeConfigMapResponseBodyDataRelateApps },
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigurationPriceResponseBodyDataBagUsage extends $tea.Model {
  cpu?: number;
  mem?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      mem: 'Mem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      mem: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigurationPriceResponseBodyDataCpuMemPriceOrder extends $tea.Model {
  discountAmount?: number;
  originalAmount?: number;
  ruleIds?: string[];
  tradeAmount?: number;
  static names(): { [key: string]: string } {
    return {
      discountAmount: 'DiscountAmount',
      originalAmount: 'OriginalAmount',
      ruleIds: 'RuleIds',
      tradeAmount: 'TradeAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      discountAmount: 'number',
      originalAmount: 'number',
      ruleIds: { 'type': 'array', 'itemType': 'string' },
      tradeAmount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigurationPriceResponseBodyDataCpuMemPriceRules extends $tea.Model {
  name?: string;
  ruleDescId?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      ruleDescId: 'RuleDescId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      ruleDescId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigurationPriceResponseBodyDataCpuMemPrice extends $tea.Model {
  order?: DescribeConfigurationPriceResponseBodyDataCpuMemPriceOrder;
  rules?: DescribeConfigurationPriceResponseBodyDataCpuMemPriceRules[];
  static names(): { [key: string]: string } {
    return {
      order: 'Order',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      order: DescribeConfigurationPriceResponseBodyDataCpuMemPriceOrder,
      rules: { 'type': 'array', 'itemType': DescribeConfigurationPriceResponseBodyDataCpuMemPriceRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigurationPriceResponseBodyDataOrder extends $tea.Model {
  discountAmount?: number;
  originalAmount?: number;
  ruleIds?: string[];
  tradeAmount?: number;
  static names(): { [key: string]: string } {
    return {
      discountAmount: 'DiscountAmount',
      originalAmount: 'OriginalAmount',
      ruleIds: 'RuleIds',
      tradeAmount: 'TradeAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      discountAmount: 'number',
      originalAmount: 'number',
      ruleIds: { 'type': 'array', 'itemType': 'string' },
      tradeAmount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigurationPriceResponseBodyDataRequestPriceOrder extends $tea.Model {
  discountAmount?: number;
  originalAmount?: number;
  ruleIds?: string[];
  tradeAmount?: number;
  static names(): { [key: string]: string } {
    return {
      discountAmount: 'DiscountAmount',
      originalAmount: 'OriginalAmount',
      ruleIds: 'RuleIds',
      tradeAmount: 'TradeAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      discountAmount: 'number',
      originalAmount: 'number',
      ruleIds: { 'type': 'array', 'itemType': 'string' },
      tradeAmount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigurationPriceResponseBodyDataRequestPriceRules extends $tea.Model {
  name?: string;
  ruleDescId?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      ruleDescId: 'RuleDescId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      ruleDescId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigurationPriceResponseBodyDataRequestPrice extends $tea.Model {
  order?: DescribeConfigurationPriceResponseBodyDataRequestPriceOrder;
  rules?: DescribeConfigurationPriceResponseBodyDataRequestPriceRules[];
  static names(): { [key: string]: string } {
    return {
      order: 'Order',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      order: DescribeConfigurationPriceResponseBodyDataRequestPriceOrder,
      rules: { 'type': 'array', 'itemType': DescribeConfigurationPriceResponseBodyDataRequestPriceRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigurationPriceResponseBodyDataRules extends $tea.Model {
  name?: string;
  ruleDescId?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      ruleDescId: 'RuleDescId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      ruleDescId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigurationPriceResponseBodyDataTrafficPriceOrder extends $tea.Model {
  discountAmount?: number;
  originalAmount?: number;
  ruleIds?: string[];
  tradeAmount?: number;
  static names(): { [key: string]: string } {
    return {
      discountAmount: 'DiscountAmount',
      originalAmount: 'OriginalAmount',
      ruleIds: 'RuleIds',
      tradeAmount: 'TradeAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      discountAmount: 'number',
      originalAmount: 'number',
      ruleIds: { 'type': 'array', 'itemType': 'string' },
      tradeAmount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigurationPriceResponseBodyDataTrafficPriceRules extends $tea.Model {
  name?: string;
  ruleDescId?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      ruleDescId: 'RuleDescId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      ruleDescId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigurationPriceResponseBodyDataTrafficPrice extends $tea.Model {
  order?: DescribeConfigurationPriceResponseBodyDataTrafficPriceOrder;
  rules?: DescribeConfigurationPriceResponseBodyDataTrafficPriceRules[];
  static names(): { [key: string]: string } {
    return {
      order: 'Order',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      order: DescribeConfigurationPriceResponseBodyDataTrafficPriceOrder,
      rules: { 'type': 'array', 'itemType': DescribeConfigurationPriceResponseBodyDataTrafficPriceRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigurationPriceResponseBodyData extends $tea.Model {
  bagUsage?: DescribeConfigurationPriceResponseBodyDataBagUsage;
  cpuMemPrice?: DescribeConfigurationPriceResponseBodyDataCpuMemPrice;
  order?: DescribeConfigurationPriceResponseBodyDataOrder;
  requestPrice?: DescribeConfigurationPriceResponseBodyDataRequestPrice;
  rules?: DescribeConfigurationPriceResponseBodyDataRules[];
  trafficPrice?: DescribeConfigurationPriceResponseBodyDataTrafficPrice;
  static names(): { [key: string]: string } {
    return {
      bagUsage: 'BagUsage',
      cpuMemPrice: 'CpuMemPrice',
      order: 'Order',
      requestPrice: 'RequestPrice',
      rules: 'Rules',
      trafficPrice: 'TrafficPrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bagUsage: DescribeConfigurationPriceResponseBodyDataBagUsage,
      cpuMemPrice: DescribeConfigurationPriceResponseBodyDataCpuMemPrice,
      order: DescribeConfigurationPriceResponseBodyDataOrder,
      requestPrice: DescribeConfigurationPriceResponseBodyDataRequestPrice,
      rules: { 'type': 'array', 'itemType': DescribeConfigurationPriceResponseBodyDataRules },
      trafficPrice: DescribeConfigurationPriceResponseBodyDataTrafficPrice,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEdasContainersResponseBodyData extends $tea.Model {
  disabled?: boolean;
  edasContainerVersion?: string;
  static names(): { [key: string]: string } {
    return {
      disabled: 'Disabled',
      edasContainerVersion: 'EdasContainerVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disabled: 'boolean',
      edasContainerVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGreyTagRouteResponseBodyDataAlbRulesItems extends $tea.Model {
  cond?: string;
  expr?: string;
  index?: number;
  name?: string;
  operator?: string;
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      cond: 'cond',
      expr: 'expr',
      index: 'index',
      name: 'name',
      operator: 'operator',
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cond: 'string',
      expr: 'string',
      index: 'number',
      name: 'string',
      operator: 'string',
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGreyTagRouteResponseBodyDataAlbRules extends $tea.Model {
  condition?: string;
  ingressId?: string;
  items?: DescribeGreyTagRouteResponseBodyDataAlbRulesItems[];
  serviceId?: string;
  static names(): { [key: string]: string } {
    return {
      condition: 'condition',
      ingressId: 'ingressId',
      items: 'items',
      serviceId: 'serviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: 'string',
      ingressId: 'string',
      items: { 'type': 'array', 'itemType': DescribeGreyTagRouteResponseBodyDataAlbRulesItems },
      serviceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGreyTagRouteResponseBodyDataDubboRulesItems extends $tea.Model {
  cond?: string;
  expr?: string;
  index?: number;
  name?: string;
  operator?: string;
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      cond: 'cond',
      expr: 'expr',
      index: 'index',
      name: 'name',
      operator: 'operator',
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cond: 'string',
      expr: 'string',
      index: 'number',
      name: 'string',
      operator: 'string',
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGreyTagRouteResponseBodyDataDubboRules extends $tea.Model {
  condition?: string;
  group?: string;
  items?: DescribeGreyTagRouteResponseBodyDataDubboRulesItems[];
  methodName?: string;
  serviceName?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      condition: 'condition',
      group: 'group',
      items: 'items',
      methodName: 'methodName',
      serviceName: 'serviceName',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: 'string',
      group: 'string',
      items: { 'type': 'array', 'itemType': DescribeGreyTagRouteResponseBodyDataDubboRulesItems },
      methodName: 'string',
      serviceName: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGreyTagRouteResponseBodyDataScRulesItems extends $tea.Model {
  cond?: string;
  expr?: string;
  index?: number;
  name?: string;
  operator?: string;
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      cond: 'cond',
      expr: 'expr',
      index: 'index',
      name: 'name',
      operator: 'operator',
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cond: 'string',
      expr: 'string',
      index: 'number',
      name: 'string',
      operator: 'string',
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGreyTagRouteResponseBodyDataScRules extends $tea.Model {
  condition?: string;
  items?: DescribeGreyTagRouteResponseBodyDataScRulesItems[];
  path?: string;
  static names(): { [key: string]: string } {
    return {
      condition: 'condition',
      items: 'items',
      path: 'path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: 'string',
      items: { 'type': 'array', 'itemType': DescribeGreyTagRouteResponseBodyDataScRulesItems },
      path: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGreyTagRouteResponseBodyData extends $tea.Model {
  albRules?: DescribeGreyTagRouteResponseBodyDataAlbRules[];
  appId?: string;
  createTime?: number;
  description?: string;
  dubboRules?: DescribeGreyTagRouteResponseBodyDataDubboRules[];
  greyTagRouteId?: number;
  name?: string;
  scRules?: DescribeGreyTagRouteResponseBodyDataScRules[];
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      albRules: 'AlbRules',
      appId: 'AppId',
      createTime: 'CreateTime',
      description: 'Description',
      dubboRules: 'DubboRules',
      greyTagRouteId: 'GreyTagRouteId',
      name: 'Name',
      scRules: 'ScRules',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      albRules: { 'type': 'array', 'itemType': DescribeGreyTagRouteResponseBodyDataAlbRules },
      appId: 'string',
      createTime: 'number',
      description: 'string',
      dubboRules: { 'type': 'array', 'itemType': DescribeGreyTagRouteResponseBodyDataDubboRules },
      greyTagRouteId: 'number',
      name: 'string',
      scRules: { 'type': 'array', 'itemType': DescribeGreyTagRouteResponseBodyDataScRules },
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIngressResponseBodyDataDefaultRule extends $tea.Model {
  appId?: string;
  appName?: string;
  backendProtocol?: string;
  containerPort?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      backendProtocol: 'BackendProtocol',
      containerPort: 'ContainerPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      backendProtocol: 'string',
      containerPort: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIngressResponseBodyDataRules extends $tea.Model {
  appId?: string;
  appName?: string;
  backendProtocol?: string;
  containerPort?: number;
  domain?: string;
  path?: string;
  rewritePath?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      backendProtocol: 'BackendProtocol',
      containerPort: 'ContainerPort',
      domain: 'Domain',
      path: 'Path',
      rewritePath: 'RewritePath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      backendProtocol: 'string',
      containerPort: 'number',
      domain: 'string',
      path: 'string',
      rewritePath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIngressResponseBodyData extends $tea.Model {
  certId?: string;
  certIds?: string;
  defaultRule?: DescribeIngressResponseBodyDataDefaultRule;
  description?: string;
  id?: number;
  listenerPort?: number;
  listenerProtocol?: string;
  loadBalanceType?: string;
  name?: string;
  namespaceId?: string;
  rules?: DescribeIngressResponseBodyDataRules[];
  slbId?: string;
  slbType?: string;
  static names(): { [key: string]: string } {
    return {
      certId: 'CertId',
      certIds: 'CertIds',
      defaultRule: 'DefaultRule',
      description: 'Description',
      id: 'Id',
      listenerPort: 'ListenerPort',
      listenerProtocol: 'ListenerProtocol',
      loadBalanceType: 'LoadBalanceType',
      name: 'Name',
      namespaceId: 'NamespaceId',
      rules: 'Rules',
      slbId: 'SlbId',
      slbType: 'SlbType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certId: 'string',
      certIds: 'string',
      defaultRule: DescribeIngressResponseBodyDataDefaultRule,
      description: 'string',
      id: 'number',
      listenerPort: 'number',
      listenerProtocol: 'string',
      loadBalanceType: 'string',
      name: 'string',
      namespaceId: 'string',
      rules: { 'type': 'array', 'itemType': DescribeIngressResponseBodyDataRules },
      slbId: 'string',
      slbType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSpecificationsResponseBodyData extends $tea.Model {
  cpu?: number;
  enable?: boolean;
  id?: number;
  memory?: number;
  specInfo?: string;
  version?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      enable: 'Enable',
      id: 'Id',
      memory: 'Memory',
      specInfo: 'SpecInfo',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      enable: 'boolean',
      id: 'number',
      memory: 'number',
      specInfo: 'string',
      version: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobResponseBodyDataConfigMapMountDesc extends $tea.Model {
  configMapId?: number;
  configMapName?: string;
  key?: string;
  mountPath?: string;
  static names(): { [key: string]: string } {
    return {
      configMapId: 'ConfigMapId',
      configMapName: 'ConfigMapName',
      key: 'Key',
      mountPath: 'MountPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configMapId: 'number',
      configMapName: 'string',
      key: 'string',
      mountPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobResponseBodyDataMountDesc extends $tea.Model {
  mountPath?: string;
  nasPath?: string;
  static names(): { [key: string]: string } {
    return {
      mountPath: 'MountPath',
      nasPath: 'NasPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountPath: 'string',
      nasPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobResponseBodyDataOssMountDescs extends $tea.Model {
  bucketName?: string;
  bucketPath?: string;
  mountPath?: string;
  readOnly?: boolean;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'bucketName',
      bucketPath: 'bucketPath',
      mountPath: 'mountPath',
      readOnly: 'readOnly',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      bucketPath: 'string',
      mountPath: 'string',
      readOnly: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobResponseBodyDataTags extends $tea.Model {
  key?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobResponseBodyData extends $tea.Model {
  acrAssumeRoleArn?: string;
  acrInstanceId?: string;
  appDescription?: string;
  appId?: string;
  appName?: string;
  backoffLimit?: number;
  command?: string;
  commandArgs?: string;
  concurrencyPolicy?: string;
  configMapMountDesc?: DescribeJobResponseBodyDataConfigMapMountDesc[];
  cpu?: number;
  customHostAlias?: string;
  edasContainerVersion?: string;
  envs?: string;
  imagePullSecrets?: string;
  imageUrl?: string;
  jarStartArgs?: string;
  jarStartOptions?: string;
  jdk?: string;
  memory?: number;
  mountDesc?: DescribeJobResponseBodyDataMountDesc[];
  mountHost?: string;
  namespaceId?: string;
  nasConfigs?: string;
  nasId?: string;
  ossAkId?: string;
  ossAkSecret?: string;
  ossMountDescs?: DescribeJobResponseBodyDataOssMountDescs[];
  packageType?: string;
  packageUrl?: string;
  packageVersion?: string;
  phpConfig?: string;
  phpConfigLocation?: string;
  postStart?: string;
  preStop?: string;
  programmingLanguage?: string;
  publicWebHookUrls?: string[];
  python?: string;
  pythonModules?: string;
  refAppId?: string;
  refedAppIds?: string[];
  regionId?: string;
  replicas?: number;
  securityGroupId?: string;
  slice?: boolean;
  sliceEnvs?: string;
  slsConfigs?: string;
  suspend?: boolean;
  tags?: DescribeJobResponseBodyDataTags[];
  terminationGracePeriodSeconds?: number;
  timeout?: number;
  timezone?: string;
  tomcatConfig?: string;
  triggerConfig?: string;
  vSwitchId?: string;
  vpcId?: string;
  vpcWebHookUrls?: string[];
  warStartOptions?: string;
  webContainer?: string;
  static names(): { [key: string]: string } {
    return {
      acrAssumeRoleArn: 'AcrAssumeRoleArn',
      acrInstanceId: 'AcrInstanceId',
      appDescription: 'AppDescription',
      appId: 'AppId',
      appName: 'AppName',
      backoffLimit: 'BackoffLimit',
      command: 'Command',
      commandArgs: 'CommandArgs',
      concurrencyPolicy: 'ConcurrencyPolicy',
      configMapMountDesc: 'ConfigMapMountDesc',
      cpu: 'Cpu',
      customHostAlias: 'CustomHostAlias',
      edasContainerVersion: 'EdasContainerVersion',
      envs: 'Envs',
      imagePullSecrets: 'ImagePullSecrets',
      imageUrl: 'ImageUrl',
      jarStartArgs: 'JarStartArgs',
      jarStartOptions: 'JarStartOptions',
      jdk: 'Jdk',
      memory: 'Memory',
      mountDesc: 'MountDesc',
      mountHost: 'MountHost',
      namespaceId: 'NamespaceId',
      nasConfigs: 'NasConfigs',
      nasId: 'NasId',
      ossAkId: 'OssAkId',
      ossAkSecret: 'OssAkSecret',
      ossMountDescs: 'OssMountDescs',
      packageType: 'PackageType',
      packageUrl: 'PackageUrl',
      packageVersion: 'PackageVersion',
      phpConfig: 'PhpConfig',
      phpConfigLocation: 'PhpConfigLocation',
      postStart: 'PostStart',
      preStop: 'PreStop',
      programmingLanguage: 'ProgrammingLanguage',
      publicWebHookUrls: 'PublicWebHookUrls',
      python: 'Python',
      pythonModules: 'PythonModules',
      refAppId: 'RefAppId',
      refedAppIds: 'RefedAppIds',
      regionId: 'RegionId',
      replicas: 'Replicas',
      securityGroupId: 'SecurityGroupId',
      slice: 'Slice',
      sliceEnvs: 'SliceEnvs',
      slsConfigs: 'SlsConfigs',
      suspend: 'Suspend',
      tags: 'Tags',
      terminationGracePeriodSeconds: 'TerminationGracePeriodSeconds',
      timeout: 'Timeout',
      timezone: 'Timezone',
      tomcatConfig: 'TomcatConfig',
      triggerConfig: 'TriggerConfig',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      vpcWebHookUrls: 'VpcWebHookUrls',
      warStartOptions: 'WarStartOptions',
      webContainer: 'WebContainer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acrAssumeRoleArn: 'string',
      acrInstanceId: 'string',
      appDescription: 'string',
      appId: 'string',
      appName: 'string',
      backoffLimit: 'number',
      command: 'string',
      commandArgs: 'string',
      concurrencyPolicy: 'string',
      configMapMountDesc: { 'type': 'array', 'itemType': DescribeJobResponseBodyDataConfigMapMountDesc },
      cpu: 'number',
      customHostAlias: 'string',
      edasContainerVersion: 'string',
      envs: 'string',
      imagePullSecrets: 'string',
      imageUrl: 'string',
      jarStartArgs: 'string',
      jarStartOptions: 'string',
      jdk: 'string',
      memory: 'number',
      mountDesc: { 'type': 'array', 'itemType': DescribeJobResponseBodyDataMountDesc },
      mountHost: 'string',
      namespaceId: 'string',
      nasConfigs: 'string',
      nasId: 'string',
      ossAkId: 'string',
      ossAkSecret: 'string',
      ossMountDescs: { 'type': 'array', 'itemType': DescribeJobResponseBodyDataOssMountDescs },
      packageType: 'string',
      packageUrl: 'string',
      packageVersion: 'string',
      phpConfig: 'string',
      phpConfigLocation: 'string',
      postStart: 'string',
      preStop: 'string',
      programmingLanguage: 'string',
      publicWebHookUrls: { 'type': 'array', 'itemType': 'string' },
      python: 'string',
      pythonModules: 'string',
      refAppId: 'string',
      refedAppIds: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      replicas: 'number',
      securityGroupId: 'string',
      slice: 'boolean',
      sliceEnvs: 'string',
      slsConfigs: 'string',
      suspend: 'boolean',
      tags: { 'type': 'array', 'itemType': DescribeJobResponseBodyDataTags },
      terminationGracePeriodSeconds: 'number',
      timeout: 'number',
      timezone: 'string',
      tomcatConfig: 'string',
      triggerConfig: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
      vpcWebHookUrls: { 'type': 'array', 'itemType': 'string' },
      warStartOptions: 'string',
      webContainer: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobHistoryResponseBodyDataJobs extends $tea.Model {
  active?: number;
  completionTime?: number;
  failed?: number;
  jobId?: string;
  message?: string;
  startTime?: number;
  state?: string;
  succeeded?: number;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      completionTime: 'CompletionTime',
      failed: 'Failed',
      jobId: 'JobId',
      message: 'Message',
      startTime: 'StartTime',
      state: 'State',
      succeeded: 'Succeeded',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'number',
      completionTime: 'number',
      failed: 'number',
      jobId: 'string',
      message: 'string',
      startTime: 'number',
      state: 'string',
      succeeded: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobHistoryResponseBodyData extends $tea.Model {
  currentPage?: number;
  jobs?: DescribeJobHistoryResponseBodyDataJobs[];
  pageSize?: number;
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      jobs: 'Jobs',
      pageSize: 'PageSize',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      jobs: { 'type': 'array', 'itemType': DescribeJobHistoryResponseBodyDataJobs },
      pageSize: 'number',
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobStatusResponseBodyData extends $tea.Model {
  active?: number;
  completionTime?: number;
  failed?: number;
  jobId?: string;
  message?: string;
  startTime?: number;
  state?: string;
  succeeded?: number;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      completionTime: 'CompletionTime',
      failed: 'Failed',
      jobId: 'JobId',
      message: 'Message',
      startTime: 'StartTime',
      state: 'State',
      succeeded: 'Succeeded',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'number',
      completionTime: 'number',
      failed: 'number',
      jobId: 'string',
      message: 'string',
      startTime: 'number',
      state: 'string',
      succeeded: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNamespaceResponseBodyData extends $tea.Model {
  enableMicroRegistration?: boolean;
  nameSpaceShortId?: string;
  namespaceDescription?: string;
  namespaceId?: string;
  namespaceName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      enableMicroRegistration: 'EnableMicroRegistration',
      nameSpaceShortId: 'NameSpaceShortId',
      namespaceDescription: 'NamespaceDescription',
      namespaceId: 'NamespaceId',
      namespaceName: 'NamespaceName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableMicroRegistration: 'boolean',
      nameSpaceShortId: 'string',
      namespaceDescription: 'string',
      namespaceId: 'string',
      namespaceName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNamespaceListResponseBodyData extends $tea.Model {
  agentInstall?: string;
  current?: boolean;
  custom?: boolean;
  hybridCloudEnable?: boolean;
  nameSpaceShortId?: string;
  namespaceId?: string;
  namespaceName?: string;
  regionId?: string;
  securityGroupId?: string;
  vSwitchId?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      agentInstall: 'AgentInstall',
      current: 'Current',
      custom: 'Custom',
      hybridCloudEnable: 'HybridCloudEnable',
      nameSpaceShortId: 'NameSpaceShortId',
      namespaceId: 'NamespaceId',
      namespaceName: 'NamespaceName',
      regionId: 'RegionId',
      securityGroupId: 'SecurityGroupId',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentInstall: 'string',
      current: 'boolean',
      custom: 'boolean',
      hybridCloudEnable: 'boolean',
      nameSpaceShortId: 'string',
      namespaceId: 'string',
      namespaceName: 'string',
      regionId: 'string',
      securityGroupId: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNamespaceResourcesResponseBodyData extends $tea.Model {
  appCount?: number;
  belongRegion?: string;
  description?: string;
  jumpServerAppId?: string;
  jumpServerIp?: string;
  lastChangeOrderId?: string;
  lastChangeOrderRunning?: boolean;
  lastChangeOrderStatus?: string;
  nameSpaceShortId?: string;
  namespaceId?: string;
  namespaceName?: string;
  notificationExpired?: boolean;
  securityGroupId?: string;
  tenantId?: string;
  userId?: string;
  vSwitchId?: string;
  vSwitchName?: string;
  vpcId?: string;
  vpcName?: string;
  static names(): { [key: string]: string } {
    return {
      appCount: 'AppCount',
      belongRegion: 'BelongRegion',
      description: 'Description',
      jumpServerAppId: 'JumpServerAppId',
      jumpServerIp: 'JumpServerIp',
      lastChangeOrderId: 'LastChangeOrderId',
      lastChangeOrderRunning: 'LastChangeOrderRunning',
      lastChangeOrderStatus: 'LastChangeOrderStatus',
      nameSpaceShortId: 'NameSpaceShortId',
      namespaceId: 'NamespaceId',
      namespaceName: 'NamespaceName',
      notificationExpired: 'NotificationExpired',
      securityGroupId: 'SecurityGroupId',
      tenantId: 'TenantId',
      userId: 'UserId',
      vSwitchId: 'VSwitchId',
      vSwitchName: 'VSwitchName',
      vpcId: 'VpcId',
      vpcName: 'VpcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCount: 'number',
      belongRegion: 'string',
      description: 'string',
      jumpServerAppId: 'string',
      jumpServerIp: 'string',
      lastChangeOrderId: 'string',
      lastChangeOrderRunning: 'boolean',
      lastChangeOrderStatus: 'string',
      nameSpaceShortId: 'string',
      namespaceId: 'string',
      namespaceName: 'string',
      notificationExpired: 'boolean',
      securityGroupId: 'string',
      tenantId: 'string',
      userId: 'string',
      vSwitchId: 'string',
      vSwitchName: 'string',
      vpcId: 'string',
      vpcName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNamespacesResponseBodyDataNamespaces extends $tea.Model {
  accessKey?: string;
  addressServerHost?: string;
  nameSpaceShortId?: string;
  namespaceDescription?: string;
  namespaceId?: string;
  namespaceName?: string;
  regionId?: string;
  secretKey?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'AccessKey',
      addressServerHost: 'AddressServerHost',
      nameSpaceShortId: 'NameSpaceShortId',
      namespaceDescription: 'NamespaceDescription',
      namespaceId: 'NamespaceId',
      namespaceName: 'NamespaceName',
      regionId: 'RegionId',
      secretKey: 'SecretKey',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      addressServerHost: 'string',
      nameSpaceShortId: 'string',
      namespaceDescription: 'string',
      namespaceId: 'string',
      namespaceName: 'string',
      regionId: 'string',
      secretKey: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNamespacesResponseBodyData extends $tea.Model {
  currentPage?: number;
  namespaces?: DescribeNamespacesResponseBodyDataNamespaces[];
  pageSize?: number;
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      namespaces: 'Namespaces',
      pageSize: 'PageSize',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      namespaces: { 'type': 'array', 'itemType': DescribeNamespacesResponseBodyDataNamespaces },
      pageSize: 'number',
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePipelineResponseBodyDataStageListTaskList extends $tea.Model {
  errorCode?: string;
  errorIgnore?: number;
  errorMessage?: string;
  message?: string;
  showManualIgnore?: boolean;
  stageId?: string;
  status?: number;
  taskId?: string;
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorIgnore: 'ErrorIgnore',
      errorMessage: 'ErrorMessage',
      message: 'Message',
      showManualIgnore: 'ShowManualIgnore',
      stageId: 'StageId',
      status: 'Status',
      taskId: 'TaskId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorIgnore: 'number',
      errorMessage: 'string',
      message: 'string',
      showManualIgnore: 'boolean',
      stageId: 'string',
      status: 'number',
      taskId: 'string',
      taskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePipelineResponseBodyDataStageList extends $tea.Model {
  executorType?: number;
  stageId?: string;
  stageName?: string;
  status?: number;
  taskList?: DescribePipelineResponseBodyDataStageListTaskList[];
  static names(): { [key: string]: string } {
    return {
      executorType: 'ExecutorType',
      stageId: 'StageId',
      stageName: 'StageName',
      status: 'Status',
      taskList: 'TaskList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executorType: 'number',
      stageId: 'string',
      stageName: 'string',
      status: 'number',
      taskList: { 'type': 'array', 'itemType': DescribePipelineResponseBodyDataStageListTaskList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePipelineResponseBodyData extends $tea.Model {
  coStatus?: string;
  currentStageId?: string;
  nextPipelineId?: string;
  pipelineId?: string;
  pipelineName?: string;
  pipelineStatus?: number;
  showBatch?: boolean;
  stageList?: DescribePipelineResponseBodyDataStageList[];
  static names(): { [key: string]: string } {
    return {
      coStatus: 'CoStatus',
      currentStageId: 'CurrentStageId',
      nextPipelineId: 'NextPipelineId',
      pipelineId: 'PipelineId',
      pipelineName: 'PipelineName',
      pipelineStatus: 'PipelineStatus',
      showBatch: 'ShowBatch',
      stageList: 'StageList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coStatus: 'string',
      currentStageId: 'string',
      nextPipelineId: 'string',
      pipelineId: 'string',
      pipelineName: 'string',
      pipelineStatus: 'number',
      showBatch: 'boolean',
      stageList: { 'type': 'array', 'itemType': DescribePipelineResponseBodyDataStageList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegionsRegionRecommendZones extends $tea.Model {
  recommendZone?: string[];
  static names(): { [key: string]: string } {
    return {
      recommendZone: 'RecommendZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recommendZone: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegionsRegion extends $tea.Model {
  localName?: string;
  recommendZones?: DescribeRegionsResponseBodyRegionsRegionRecommendZones;
  regionEndpoint?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      recommendZones: 'RecommendZones',
      regionEndpoint: 'RegionEndpoint',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      recommendZones: DescribeRegionsResponseBodyRegionsRegionRecommendZones,
      regionEndpoint: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegions extends $tea.Model {
  region?: DescribeRegionsResponseBodyRegionsRegion[];
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegionsRegion },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecretResponseBodyDataRelateApps extends $tea.Model {
  appId?: string;
  appName?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecretResponseBodyData extends $tea.Model {
  createTime?: number;
  namespaceId?: string;
  relateApps?: DescribeSecretResponseBodyDataRelateApps[];
  secretData?: { [key: string]: string };
  secretId?: number;
  secretName?: string;
  secretType?: string;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      namespaceId: 'NamespaceId',
      relateApps: 'RelateApps',
      secretData: 'SecretData',
      secretId: 'SecretId',
      secretName: 'SecretName',
      secretType: 'SecretType',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      namespaceId: 'string',
      relateApps: { 'type': 'array', 'itemType': DescribeSecretResponseBodyDataRelateApps },
      secretData: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      secretId: 'number',
      secretName: 'string',
      secretType: 'string',
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecJobResponseBodyData extends $tea.Model {
  code?: string;
  data?: string;
  msg?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      msg: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetArmsTopNMetricResponseBodyData extends $tea.Model {
  appId?: string;
  count?: number;
  error?: number;
  name?: string;
  regionId?: string;
  rt?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      count: 'Count',
      error: 'Error',
      name: 'Name',
      regionId: 'RegionId',
      rt: 'Rt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      count: 'number',
      error: 'number',
      name: 'string',
      regionId: 'string',
      rt: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAvailabilityMetricResponseBodyData extends $tea.Model {
  appId?: string;
  enableAutoscale?: number;
  errorInstances?: number;
  instances?: number;
  name?: string;
  regionId?: string;
  runnings?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      enableAutoscale: 'EnableAutoscale',
      errorInstances: 'ErrorInstances',
      instances: 'Instances',
      name: 'Name',
      regionId: 'RegionId',
      runnings: 'Runnings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      enableAutoscale: 'number',
      errorInstances: 'number',
      instances: 'number',
      name: 'string',
      regionId: 'string',
      runnings: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChangeOrderMetricResponseBodyData extends $tea.Model {
  appId?: string;
  error?: number;
  errorPercent?: number;
  name?: string;
  regionId?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      error: 'Error',
      errorPercent: 'ErrorPercent',
      name: 'Name',
      regionId: 'RegionId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      error: 'number',
      errorPercent: 'number',
      name: 'string',
      regionId: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScaleAppMetricResponseBodyData extends $tea.Model {
  appId?: string;
  maxReplicas?: number;
  name?: string;
  regionId?: string;
  runnings?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      maxReplicas: 'MaxReplicas',
      name: 'Name',
      regionId: 'RegionId',
      runnings: 'Runnings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      maxReplicas: 'number',
      name: 'string',
      regionId: 'string',
      runnings: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWarningEventMetricResponseBodyData extends $tea.Model {
  appId?: string;
  name?: string;
  regionId?: string;
  warningCount?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      name: 'Name',
      regionId: 'RegionId',
      warningCount: 'WarningCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      name: 'string',
      regionId: 'string',
      warningCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppEventsResponseBodyDataAppEventEntity extends $tea.Model {
  eventType?: string;
  firstTimestamp?: string;
  lastTimestamp?: string;
  message?: string;
  objectKind?: string;
  objectName?: string;
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      eventType: 'EventType',
      firstTimestamp: 'FirstTimestamp',
      lastTimestamp: 'LastTimestamp',
      message: 'Message',
      objectKind: 'ObjectKind',
      objectName: 'ObjectName',
      reason: 'Reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventType: 'string',
      firstTimestamp: 'string',
      lastTimestamp: 'string',
      message: 'string',
      objectKind: 'string',
      objectName: 'string',
      reason: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppEventsResponseBodyData extends $tea.Model {
  appEventEntity?: ListAppEventsResponseBodyDataAppEventEntity[];
  currentPage?: number;
  pageSize?: number;
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      appEventEntity: 'AppEventEntity',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appEventEntity: { 'type': 'array', 'itemType': ListAppEventsResponseBodyDataAppEventEntity },
      currentPage: 'number',
      pageSize: 'number',
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppServicesPageResponseBodyDataResult extends $tea.Model {
  edasAppId?: string;
  edasAppName?: string;
  group?: string;
  instanceNum?: number;
  serviceName?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      edasAppId: 'EdasAppId',
      edasAppName: 'EdasAppName',
      group: 'Group',
      instanceNum: 'InstanceNum',
      serviceName: 'ServiceName',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edasAppId: 'string',
      edasAppName: 'string',
      group: 'string',
      instanceNum: 'number',
      serviceName: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppServicesPageResponseBodyData extends $tea.Model {
  currentPage?: string;
  pageNumber?: string;
  pageSize?: string;
  result?: ListAppServicesPageResponseBodyDataResult[];
  totalSize?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      result: 'Result',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      result: { 'type': 'array', 'itemType': ListAppServicesPageResponseBodyDataResult },
      totalSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppVersionsResponseBodyData extends $tea.Model {
  buildPackageUrl?: string;
  createTime?: string;
  id?: string;
  type?: string;
  warUrl?: string;
  static names(): { [key: string]: string } {
    return {
      buildPackageUrl: 'BuildPackageUrl',
      createTime: 'CreateTime',
      id: 'Id',
      type: 'Type',
      warUrl: 'WarUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildPackageUrl: 'string',
      createTime: 'string',
      id: 'string',
      type: 'string',
      warUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsResponseBodyDataApplicationsChildrenTags extends $tea.Model {
  key?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsResponseBodyDataApplicationsChildren extends $tea.Model {
  appDeletingStatus?: boolean;
  appDescription?: string;
  appId?: string;
  appName?: string;
  baseAppId?: string;
  cpu?: number;
  instances?: number;
  mem?: number;
  mseEnabled?: boolean;
  namespaceId?: string;
  programmingLanguage?: string;
  regionId?: string;
  runningInstances?: number;
  scaleRuleEnabled?: boolean;
  scaleRuleType?: string;
  tags?: ListApplicationsResponseBodyDataApplicationsChildrenTags[];
  static names(): { [key: string]: string } {
    return {
      appDeletingStatus: 'AppDeletingStatus',
      appDescription: 'AppDescription',
      appId: 'AppId',
      appName: 'AppName',
      baseAppId: 'BaseAppId',
      cpu: 'Cpu',
      instances: 'Instances',
      mem: 'Mem',
      mseEnabled: 'MseEnabled',
      namespaceId: 'NamespaceId',
      programmingLanguage: 'ProgrammingLanguage',
      regionId: 'RegionId',
      runningInstances: 'RunningInstances',
      scaleRuleEnabled: 'ScaleRuleEnabled',
      scaleRuleType: 'ScaleRuleType',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appDeletingStatus: 'boolean',
      appDescription: 'string',
      appId: 'string',
      appName: 'string',
      baseAppId: 'string',
      cpu: 'number',
      instances: 'number',
      mem: 'number',
      mseEnabled: 'boolean',
      namespaceId: 'string',
      programmingLanguage: 'string',
      regionId: 'string',
      runningInstances: 'number',
      scaleRuleEnabled: 'boolean',
      scaleRuleType: 'string',
      tags: { 'type': 'array', 'itemType': ListApplicationsResponseBodyDataApplicationsChildrenTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsResponseBodyDataApplicationsTags extends $tea.Model {
  key?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsResponseBodyDataApplications extends $tea.Model {
  appDeletingStatus?: boolean;
  appDescription?: string;
  appId?: string;
  appName?: string;
  baseAppId?: string;
  children?: ListApplicationsResponseBodyDataApplicationsChildren[];
  cpu?: number;
  instances?: number;
  mem?: number;
  mseEnabled?: boolean;
  mseNamespaceId?: string;
  namespaceId?: string;
  programmingLanguage?: string;
  regionId?: string;
  runningInstances?: number;
  tags?: ListApplicationsResponseBodyDataApplicationsTags[];
  static names(): { [key: string]: string } {
    return {
      appDeletingStatus: 'AppDeletingStatus',
      appDescription: 'AppDescription',
      appId: 'AppId',
      appName: 'AppName',
      baseAppId: 'BaseAppId',
      children: 'Children',
      cpu: 'Cpu',
      instances: 'Instances',
      mem: 'Mem',
      mseEnabled: 'MseEnabled',
      mseNamespaceId: 'MseNamespaceId',
      namespaceId: 'NamespaceId',
      programmingLanguage: 'ProgrammingLanguage',
      regionId: 'RegionId',
      runningInstances: 'RunningInstances',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appDeletingStatus: 'boolean',
      appDescription: 'string',
      appId: 'string',
      appName: 'string',
      baseAppId: 'string',
      children: { 'type': 'array', 'itemType': ListApplicationsResponseBodyDataApplicationsChildren },
      cpu: 'number',
      instances: 'number',
      mem: 'number',
      mseEnabled: 'boolean',
      mseNamespaceId: 'string',
      namespaceId: 'string',
      programmingLanguage: 'string',
      regionId: 'string',
      runningInstances: 'number',
      tags: { 'type': 'array', 'itemType': ListApplicationsResponseBodyDataApplicationsTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsResponseBodyData extends $tea.Model {
  applications?: ListApplicationsResponseBodyDataApplications[];
  currentPage?: number;
  pageSize?: number;
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      applications: 'Applications',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applications: { 'type': 'array', 'itemType': ListApplicationsResponseBodyDataApplications },
      currentPage: 'number',
      pageSize: 'number',
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChangeOrdersResponseBodyDataChangeOrderList extends $tea.Model {
  appId?: string;
  batchCount?: number;
  batchType?: string;
  changeOrderId?: string;
  coType?: string;
  coTypeCode?: string;
  createTime?: string;
  createUserId?: string;
  description?: string;
  finishTime?: string;
  groupId?: string;
  source?: string;
  status?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      batchCount: 'BatchCount',
      batchType: 'BatchType',
      changeOrderId: 'ChangeOrderId',
      coType: 'CoType',
      coTypeCode: 'CoTypeCode',
      createTime: 'CreateTime',
      createUserId: 'CreateUserId',
      description: 'Description',
      finishTime: 'FinishTime',
      groupId: 'GroupId',
      source: 'Source',
      status: 'Status',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      batchCount: 'number',
      batchType: 'string',
      changeOrderId: 'string',
      coType: 'string',
      coTypeCode: 'string',
      createTime: 'string',
      createUserId: 'string',
      description: 'string',
      finishTime: 'string',
      groupId: 'string',
      source: 'string',
      status: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChangeOrdersResponseBodyData extends $tea.Model {
  changeOrderList?: ListChangeOrdersResponseBodyDataChangeOrderList[];
  currentPage?: number;
  pageSize?: number;
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      changeOrderList: 'ChangeOrderList',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderList: { 'type': 'array', 'itemType': ListChangeOrdersResponseBodyDataChangeOrderList },
      currentPage: 'number',
      pageSize: 'number',
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConsumedServicesResponseBodyData extends $tea.Model {
  appId?: string;
  group2Ip?: string;
  groups?: string[];
  ips?: string[];
  name?: string;
  type?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      group2Ip: 'Group2Ip',
      groups: 'Groups',
      ips: 'Ips',
      name: 'Name',
      type: 'Type',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      group2Ip: 'string',
      groups: { 'type': 'array', 'itemType': 'string' },
      ips: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      type: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGreyTagRouteResponseBodyDataResultAlbRulesItems extends $tea.Model {
  cond?: string;
  expr?: string;
  index?: number;
  name?: string;
  operator?: string;
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      cond: 'cond',
      expr: 'expr',
      index: 'index',
      name: 'name',
      operator: 'operator',
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cond: 'string',
      expr: 'string',
      index: 'number',
      name: 'string',
      operator: 'string',
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGreyTagRouteResponseBodyDataResultAlbRules extends $tea.Model {
  condition?: string;
  ingressId?: string;
  items?: ListGreyTagRouteResponseBodyDataResultAlbRulesItems[];
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      condition: 'condition',
      ingressId: 'ingressId',
      items: 'items',
      serviceName: 'serviceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: 'string',
      ingressId: 'string',
      items: { 'type': 'array', 'itemType': ListGreyTagRouteResponseBodyDataResultAlbRulesItems },
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGreyTagRouteResponseBodyDataResultDubboRulesItems extends $tea.Model {
  cond?: string;
  expr?: string;
  index?: number;
  name?: string;
  operator?: string;
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      cond: 'cond',
      expr: 'expr',
      index: 'index',
      name: 'name',
      operator: 'operator',
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cond: 'string',
      expr: 'string',
      index: 'number',
      name: 'string',
      operator: 'string',
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGreyTagRouteResponseBodyDataResultDubboRules extends $tea.Model {
  condition?: string;
  group?: string;
  items?: ListGreyTagRouteResponseBodyDataResultDubboRulesItems[];
  methodName?: string;
  serviceName?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      condition: 'condition',
      group: 'group',
      items: 'items',
      methodName: 'methodName',
      serviceName: 'serviceName',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: 'string',
      group: 'string',
      items: { 'type': 'array', 'itemType': ListGreyTagRouteResponseBodyDataResultDubboRulesItems },
      methodName: 'string',
      serviceName: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGreyTagRouteResponseBodyDataResultScRulesItems extends $tea.Model {
  cond?: string;
  expr?: string;
  index?: number;
  name?: string;
  operator?: string;
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      cond: 'cond',
      expr: 'expr',
      index: 'index',
      name: 'name',
      operator: 'operator',
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cond: 'string',
      expr: 'string',
      index: 'number',
      name: 'string',
      operator: 'string',
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGreyTagRouteResponseBodyDataResultScRules extends $tea.Model {
  condition?: string;
  items?: ListGreyTagRouteResponseBodyDataResultScRulesItems[];
  path?: string;
  static names(): { [key: string]: string } {
    return {
      condition: 'condition',
      items: 'items',
      path: 'path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: 'string',
      items: { 'type': 'array', 'itemType': ListGreyTagRouteResponseBodyDataResultScRulesItems },
      path: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGreyTagRouteResponseBodyDataResult extends $tea.Model {
  albRules?: ListGreyTagRouteResponseBodyDataResultAlbRules[];
  createTime?: number;
  description?: string;
  dubboRules?: ListGreyTagRouteResponseBodyDataResultDubboRules[];
  greyTagRouteId?: number;
  name?: string;
  scRules?: ListGreyTagRouteResponseBodyDataResultScRules[];
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      albRules: 'AlbRules',
      createTime: 'CreateTime',
      description: 'Description',
      dubboRules: 'DubboRules',
      greyTagRouteId: 'GreyTagRouteId',
      name: 'Name',
      scRules: 'ScRules',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      albRules: { 'type': 'array', 'itemType': ListGreyTagRouteResponseBodyDataResultAlbRules },
      createTime: 'number',
      description: 'string',
      dubboRules: { 'type': 'array', 'itemType': ListGreyTagRouteResponseBodyDataResultDubboRules },
      greyTagRouteId: 'number',
      name: 'string',
      scRules: { 'type': 'array', 'itemType': ListGreyTagRouteResponseBodyDataResultScRules },
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGreyTagRouteResponseBodyData extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  result?: ListGreyTagRouteResponseBodyDataResult[];
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      result: 'Result',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      result: { 'type': 'array', 'itemType': ListGreyTagRouteResponseBodyDataResult },
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIngressesResponseBodyDataIngressList extends $tea.Model {
  certId?: string;
  certIds?: string;
  description?: string;
  id?: number;
  listenerPort?: string;
  listenerProtocol?: string;
  loadBalanceType?: string;
  mseGatewayId?: string;
  mseGatewayPort?: string;
  mseGatewayProtocol?: string;
  name?: string;
  namespaceId?: string;
  slbId?: string;
  slbType?: string;
  static names(): { [key: string]: string } {
    return {
      certId: 'CertId',
      certIds: 'CertIds',
      description: 'Description',
      id: 'Id',
      listenerPort: 'ListenerPort',
      listenerProtocol: 'ListenerProtocol',
      loadBalanceType: 'LoadBalanceType',
      mseGatewayId: 'MseGatewayId',
      mseGatewayPort: 'MseGatewayPort',
      mseGatewayProtocol: 'MseGatewayProtocol',
      name: 'Name',
      namespaceId: 'NamespaceId',
      slbId: 'SlbId',
      slbType: 'SlbType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certId: 'string',
      certIds: 'string',
      description: 'string',
      id: 'number',
      listenerPort: 'string',
      listenerProtocol: 'string',
      loadBalanceType: 'string',
      mseGatewayId: 'string',
      mseGatewayPort: 'string',
      mseGatewayProtocol: 'string',
      name: 'string',
      namespaceId: 'string',
      slbId: 'string',
      slbType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIngressesResponseBodyData extends $tea.Model {
  ingressList?: ListIngressesResponseBodyDataIngressList[];
  static names(): { [key: string]: string } {
    return {
      ingressList: 'IngressList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ingressList: { 'type': 'array', 'itemType': ListIngressesResponseBodyDataIngressList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBodyDataApplicationsTags extends $tea.Model {
  key?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBodyDataApplications extends $tea.Model {
  active?: number;
  appDescription?: string;
  appId?: string;
  appName?: string;
  completionTime?: number;
  cpu?: number;
  failed?: number;
  lastChangeorderState?: string;
  lastJobState?: string;
  lastStartTime?: number;
  mem?: number;
  message?: string;
  namespaceId?: string;
  regionId?: string;
  succeeded?: number;
  suspend?: boolean;
  tags?: ListJobsResponseBodyDataApplicationsTags[];
  triggerConfig?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      appDescription: 'AppDescription',
      appId: 'AppId',
      appName: 'AppName',
      completionTime: 'CompletionTime',
      cpu: 'Cpu',
      failed: 'Failed',
      lastChangeorderState: 'LastChangeorderState',
      lastJobState: 'LastJobState',
      lastStartTime: 'LastStartTime',
      mem: 'Mem',
      message: 'Message',
      namespaceId: 'NamespaceId',
      regionId: 'RegionId',
      succeeded: 'Succeeded',
      suspend: 'Suspend',
      tags: 'Tags',
      triggerConfig: 'TriggerConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'number',
      appDescription: 'string',
      appId: 'string',
      appName: 'string',
      completionTime: 'number',
      cpu: 'number',
      failed: 'number',
      lastChangeorderState: 'string',
      lastJobState: 'string',
      lastStartTime: 'number',
      mem: 'number',
      message: 'string',
      namespaceId: 'string',
      regionId: 'string',
      succeeded: 'number',
      suspend: 'boolean',
      tags: { 'type': 'array', 'itemType': ListJobsResponseBodyDataApplicationsTags },
      triggerConfig: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBodyData extends $tea.Model {
  applications?: ListJobsResponseBodyDataApplications[];
  currentPage?: number;
  pageSize?: number;
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      applications: 'Applications',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applications: { 'type': 'array', 'itemType': ListJobsResponseBodyDataApplications },
      currentPage: 'number',
      pageSize: 'number',
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogConfigsResponseBodyDataLogConfigs extends $tea.Model {
  configName?: string;
  createTime?: string;
  logDir?: string;
  logType?: string;
  regionId?: string;
  slsLogStore?: string;
  slsProject?: string;
  storeType?: string;
  static names(): { [key: string]: string } {
    return {
      configName: 'ConfigName',
      createTime: 'CreateTime',
      logDir: 'LogDir',
      logType: 'LogType',
      regionId: 'RegionId',
      slsLogStore: 'SlsLogStore',
      slsProject: 'SlsProject',
      storeType: 'StoreType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configName: 'string',
      createTime: 'string',
      logDir: 'string',
      logType: 'string',
      regionId: 'string',
      slsLogStore: 'string',
      slsProject: 'string',
      storeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogConfigsResponseBodyData extends $tea.Model {
  currentPage?: number;
  logConfigs?: ListLogConfigsResponseBodyDataLogConfigs[];
  pageSize?: number;
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      logConfigs: 'LogConfigs',
      pageSize: 'PageSize',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      logConfigs: { 'type': 'array', 'itemType': ListLogConfigsResponseBodyDataLogConfigs },
      pageSize: 'number',
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNamespaceChangeOrdersResponseBodyDataChangeOrderList extends $tea.Model {
  batchCount?: number;
  batchType?: string;
  changeOrderId?: string;
  coType?: string;
  coTypeCode?: string;
  createTime?: string;
  createUserId?: string;
  description?: string;
  finishTime?: string;
  groupId?: string;
  namespaceId?: string;
  pipelines?: string;
  source?: string;
  status?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      batchCount: 'BatchCount',
      batchType: 'BatchType',
      changeOrderId: 'ChangeOrderId',
      coType: 'CoType',
      coTypeCode: 'CoTypeCode',
      createTime: 'CreateTime',
      createUserId: 'CreateUserId',
      description: 'Description',
      finishTime: 'FinishTime',
      groupId: 'GroupId',
      namespaceId: 'NamespaceId',
      pipelines: 'Pipelines',
      source: 'Source',
      status: 'Status',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchCount: 'number',
      batchType: 'string',
      changeOrderId: 'string',
      coType: 'string',
      coTypeCode: 'string',
      createTime: 'string',
      createUserId: 'string',
      description: 'string',
      finishTime: 'string',
      groupId: 'string',
      namespaceId: 'string',
      pipelines: 'string',
      source: 'string',
      status: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNamespaceChangeOrdersResponseBodyData extends $tea.Model {
  changeOrderList?: ListNamespaceChangeOrdersResponseBodyDataChangeOrderList[];
  currentPage?: number;
  pageSize?: number;
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      changeOrderList: 'ChangeOrderList',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderList: { 'type': 'array', 'itemType': ListNamespaceChangeOrdersResponseBodyDataChangeOrderList },
      currentPage: 'number',
      pageSize: 'number',
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNamespacedConfigMapsResponseBodyDataConfigMapsRelateApps extends $tea.Model {
  appId?: string;
  appName?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNamespacedConfigMapsResponseBodyDataConfigMaps extends $tea.Model {
  configMapId?: number;
  createTime?: number;
  data?: { [key: string]: any };
  description?: string;
  name?: string;
  namespaceId?: string;
  relateApps?: ListNamespacedConfigMapsResponseBodyDataConfigMapsRelateApps[];
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      configMapId: 'ConfigMapId',
      createTime: 'CreateTime',
      data: 'Data',
      description: 'Description',
      name: 'Name',
      namespaceId: 'NamespaceId',
      relateApps: 'RelateApps',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configMapId: 'number',
      createTime: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      description: 'string',
      name: 'string',
      namespaceId: 'string',
      relateApps: { 'type': 'array', 'itemType': ListNamespacedConfigMapsResponseBodyDataConfigMapsRelateApps },
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNamespacedConfigMapsResponseBodyData extends $tea.Model {
  configMaps?: ListNamespacedConfigMapsResponseBodyDataConfigMaps[];
  static names(): { [key: string]: string } {
    return {
      configMaps: 'ConfigMaps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configMaps: { 'type': 'array', 'itemType': ListNamespacedConfigMapsResponseBodyDataConfigMaps },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublishedServicesResponseBodyData extends $tea.Model {
  appId?: string;
  group2Ip?: string;
  groups?: string[];
  ips?: string[];
  name?: string;
  type?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      group2Ip: 'Group2Ip',
      groups: 'Groups',
      ips: 'Ips',
      name: 'Name',
      type: 'Type',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      group2Ip: 'string',
      groups: { 'type': 'array', 'itemType': 'string' },
      ips: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      type: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecretsResponseBodyDataSecretsRelateApps extends $tea.Model {
  appId?: string;
  appName?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecretsResponseBodyDataSecrets extends $tea.Model {
  createTime?: number;
  namespaceId?: string;
  relateApps?: ListSecretsResponseBodyDataSecretsRelateApps[];
  secretId?: number;
  secretName?: string;
  secretType?: string;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      namespaceId: 'NamespaceId',
      relateApps: 'RelateApps',
      secretId: 'SecretId',
      secretName: 'SecretName',
      secretType: 'SecretType',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      namespaceId: 'string',
      relateApps: { 'type': 'array', 'itemType': ListSecretsResponseBodyDataSecretsRelateApps },
      secretId: 'number',
      secretName: 'string',
      secretType: 'string',
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecretsResponseBodyData extends $tea.Model {
  secrets?: ListSecretsResponseBodyDataSecrets[];
  static names(): { [key: string]: string } {
    return {
      secrets: 'Secrets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secrets: { 'type': 'array', 'itemType': ListSecretsResponseBodyDataSecrets },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBodyDataTagResources extends $tea.Model {
  resourceId?: string;
  resourceType?: string;
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBodyData extends $tea.Model {
  nextToken?: string;
  tagResources?: ListTagResourcesResponseBodyDataTagResources[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      tagResources: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyDataTagResources },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryResourceStaticsResponseBodyDataRealTimeRes extends $tea.Model {
  cpu?: number;
  memory?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      memory: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryResourceStaticsResponseBodyDataSummary extends $tea.Model {
  cpu?: number;
  memory?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      memory: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryResourceStaticsResponseBodyData extends $tea.Model {
  realTimeRes?: QueryResourceStaticsResponseBodyDataRealTimeRes;
  summary?: QueryResourceStaticsResponseBodyDataSummary;
  static names(): { [key: string]: string } {
    return {
      realTimeRes: 'RealTimeRes',
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      realTimeRes: QueryResourceStaticsResponseBodyDataRealTimeRes,
      summary: QueryResourceStaticsResponseBodyDataSummary,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReduceApplicationCapacityByInstanceIdsResponseBodyData extends $tea.Model {
  changeOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'ChangeOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RescaleApplicationResponseBodyData extends $tea.Model {
  changeOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'ChangeOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RescaleApplicationVerticallyResponseBodyData extends $tea.Model {
  changeOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'ChangeOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartApplicationResponseBodyData extends $tea.Model {
  changeOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'ChangeOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartInstancesResponseBodyData extends $tea.Model {
  changeOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'ChangeOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RollbackApplicationResponseBodyData extends $tea.Model {
  changeOrderId?: string;
  isNeedApproval?: boolean;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'ChangeOrderId',
      isNeedApproval: 'IsNeedApproval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
      isNeedApproval: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartApplicationResponseBodyData extends $tea.Model {
  changeOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'ChangeOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopApplicationResponseBodyData extends $tea.Model {
  changeOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'ChangeOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindSlbResponseBodyData extends $tea.Model {
  changeOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'ChangeOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationScalingRuleResponseBodyDataMetricMetrics extends $tea.Model {
  metricTargetAverageUtilization?: number;
  metricType?: string;
  slbId?: string;
  slbLogstore?: string;
  slbProject?: string;
  vport?: string;
  static names(): { [key: string]: string } {
    return {
      metricTargetAverageUtilization: 'MetricTargetAverageUtilization',
      metricType: 'MetricType',
      slbId: 'SlbId',
      slbLogstore: 'SlbLogstore',
      slbProject: 'SlbProject',
      vport: 'Vport',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricTargetAverageUtilization: 'number',
      metricType: 'string',
      slbId: 'string',
      slbLogstore: 'string',
      slbProject: 'string',
      vport: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationScalingRuleResponseBodyDataMetric extends $tea.Model {
  maxReplicas?: number;
  metrics?: UpdateApplicationScalingRuleResponseBodyDataMetricMetrics[];
  minReplicas?: number;
  static names(): { [key: string]: string } {
    return {
      maxReplicas: 'MaxReplicas',
      metrics: 'Metrics',
      minReplicas: 'MinReplicas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxReplicas: 'number',
      metrics: { 'type': 'array', 'itemType': UpdateApplicationScalingRuleResponseBodyDataMetricMetrics },
      minReplicas: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationScalingRuleResponseBodyDataTimerSchedules extends $tea.Model {
  atTime?: string;
  maxReplicas?: number;
  minReplicas?: number;
  targetReplicas?: number;
  static names(): { [key: string]: string } {
    return {
      atTime: 'AtTime',
      maxReplicas: 'MaxReplicas',
      minReplicas: 'MinReplicas',
      targetReplicas: 'TargetReplicas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      atTime: 'string',
      maxReplicas: 'number',
      minReplicas: 'number',
      targetReplicas: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationScalingRuleResponseBodyDataTimer extends $tea.Model {
  beginDate?: string;
  endDate?: string;
  period?: string;
  schedules?: UpdateApplicationScalingRuleResponseBodyDataTimerSchedules[];
  static names(): { [key: string]: string } {
    return {
      beginDate: 'BeginDate',
      endDate: 'EndDate',
      period: 'Period',
      schedules: 'Schedules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginDate: 'string',
      endDate: 'string',
      period: 'string',
      schedules: { 'type': 'array', 'itemType': UpdateApplicationScalingRuleResponseBodyDataTimerSchedules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationScalingRuleResponseBodyData extends $tea.Model {
  appId?: string;
  createTime?: number;
  lastDisableTime?: number;
  metric?: UpdateApplicationScalingRuleResponseBodyDataMetric;
  scaleRuleEnabled?: boolean;
  scaleRuleName?: string;
  scaleRuleType?: string;
  timer?: UpdateApplicationScalingRuleResponseBodyDataTimer;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      createTime: 'CreateTime',
      lastDisableTime: 'LastDisableTime',
      metric: 'Metric',
      scaleRuleEnabled: 'ScaleRuleEnabled',
      scaleRuleName: 'ScaleRuleName',
      scaleRuleType: 'ScaleRuleType',
      timer: 'Timer',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      createTime: 'number',
      lastDisableTime: 'number',
      metric: UpdateApplicationScalingRuleResponseBodyDataMetric,
      scaleRuleEnabled: 'boolean',
      scaleRuleName: 'string',
      scaleRuleType: 'string',
      timer: UpdateApplicationScalingRuleResponseBodyDataTimer,
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConfigMapResponseBodyData extends $tea.Model {
  configMapId?: string;
  static names(): { [key: string]: string } {
    return {
      configMapId: 'ConfigMapId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configMapId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGreyTagRouteResponseBodyData extends $tea.Model {
  greyTagRouteId?: number;
  static names(): { [key: string]: string } {
    return {
      greyTagRouteId: 'GreyTagRouteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      greyTagRouteId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIngressResponseBodyData extends $tea.Model {
  ingressId?: number;
  static names(): { [key: string]: string } {
    return {
      ingressId: 'IngressId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ingressId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateJobResponseBodyData extends $tea.Model {
  appId?: string;
  changeOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      changeOrderId: 'ChangeOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      changeOrderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNamespaceResponseBodyData extends $tea.Model {
  enableMicroRegistration?: boolean;
  nameSpaceShortId?: string;
  namespaceDescription?: string;
  namespaceId?: string;
  namespaceName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      enableMicroRegistration: 'EnableMicroRegistration',
      nameSpaceShortId: 'NameSpaceShortId',
      namespaceDescription: 'NamespaceDescription',
      namespaceId: 'NamespaceId',
      namespaceName: 'NamespaceName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableMicroRegistration: 'boolean',
      nameSpaceShortId: 'string',
      namespaceDescription: 'string',
      namespaceId: 'string',
      namespaceName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSecretRequestSecretData extends $tea.Model {
  secretData?: string;
  static names(): { [key: string]: string } {
    return {
      secretData: 'SecretData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secretData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSecretResponseBodyData extends $tea.Model {
  secretId?: number;
  static names(): { [key: string]: string } {
    return {
      secretId: 'SecretId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secretId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "regional";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("sae", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!Util.empty(endpoint)) {
      return endpoint;
    }

    if (!Util.isUnset(endpointMap) && !Util.empty(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return EndpointUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * @summary ba386059-69b1-4e65-b1e5-0682d9fa\\*\\*\\*\\*
   *
   * @param request AbortAndRollbackChangeOrderRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return AbortAndRollbackChangeOrderResponse
   */
  async abortAndRollbackChangeOrderWithOptions(request: AbortAndRollbackChangeOrderRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AbortAndRollbackChangeOrderResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.changeOrderId)) {
      query["ChangeOrderId"] = request.changeOrderId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AbortAndRollbackChangeOrder",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/changeorder/AbortAndRollbackChangeOrder`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<AbortAndRollbackChangeOrderResponse>(await this.callApi(params, req, runtime), new AbortAndRollbackChangeOrderResponse({}));
  }

  /**
   * @summary ba386059-69b1-4e65-b1e5-0682d9fa\\*\\*\\*\\*
   *
   * @param request AbortAndRollbackChangeOrderRequest
   * @return AbortAndRollbackChangeOrderResponse
   */
  async abortAndRollbackChangeOrder(request: AbortAndRollbackChangeOrderRequest): Promise<AbortAndRollbackChangeOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.abortAndRollbackChangeOrderWithOptions(request, headers, runtime);
  }

  /**
   * @param request AbortChangeOrderRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return AbortChangeOrderResponse
   */
  async abortChangeOrderWithOptions(request: AbortChangeOrderRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AbortChangeOrderResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.changeOrderId)) {
      query["ChangeOrderId"] = request.changeOrderId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AbortChangeOrder",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/changeorder/AbortChangeOrder`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<AbortChangeOrderResponse>(await this.callApi(params, req, runtime), new AbortChangeOrderResponse({}));
  }

  /**
   * @param request AbortChangeOrderRequest
   * @return AbortChangeOrderResponse
   */
  async abortChangeOrder(request: AbortChangeOrderRequest): Promise<AbortChangeOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.abortChangeOrderWithOptions(request, headers, runtime);
  }

  /**
   * @summary cn-shanghai
   *
   * @param request BatchStartApplicationsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return BatchStartApplicationsResponse
   */
  async batchStartApplicationsWithOptions(request: BatchStartApplicationsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<BatchStartApplicationsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appIds)) {
      query["AppIds"] = request.appIds;
    }

    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!Util.isUnset(request.version)) {
      query["Version"] = request.version;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BatchStartApplications",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/app/batchStartApplications`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<BatchStartApplicationsResponse>(await this.callApi(params, req, runtime), new BatchStartApplicationsResponse({}));
  }

  /**
   * @summary cn-shanghai
   *
   * @param request BatchStartApplicationsRequest
   * @return BatchStartApplicationsResponse
   */
  async batchStartApplications(request: BatchStartApplicationsRequest): Promise<BatchStartApplicationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.batchStartApplicationsWithOptions(request, headers, runtime);
  }

  /**
   * @param request BatchStopApplicationsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return BatchStopApplicationsResponse
   */
  async batchStopApplicationsWithOptions(request: BatchStopApplicationsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<BatchStopApplicationsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appIds)) {
      query["AppIds"] = request.appIds;
    }

    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!Util.isUnset(request.version)) {
      query["Version"] = request.version;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BatchStopApplications",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/app/batchStopApplications`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<BatchStopApplicationsResponse>(await this.callApi(params, req, runtime), new BatchStopApplicationsResponse({}));
  }

  /**
   * @param request BatchStopApplicationsRequest
   * @return BatchStopApplicationsResponse
   */
  async batchStopApplications(request: BatchStopApplicationsRequest): Promise<BatchStopApplicationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.batchStopApplicationsWithOptions(request, headers, runtime);
  }

  /**
   * @param request BindSlbRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return BindSlbResponse
   */
  async bindSlbWithOptions(request: BindSlbRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<BindSlbResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.internet)) {
      query["Internet"] = request.internet;
    }

    if (!Util.isUnset(request.internetSlbId)) {
      query["InternetSlbId"] = request.internetSlbId;
    }

    if (!Util.isUnset(request.intranet)) {
      query["Intranet"] = request.intranet;
    }

    if (!Util.isUnset(request.intranetSlbId)) {
      query["IntranetSlbId"] = request.intranetSlbId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BindSlb",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/app/slb`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<BindSlbResponse>(await this.callApi(params, req, runtime), new BindSlbResponse({}));
  }

  /**
   * @param request BindSlbRequest
   * @return BindSlbResponse
   */
  async bindSlb(request: BindSlbRequest): Promise<BindSlbResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.bindSlbWithOptions(request, headers, runtime);
  }

  /**
   * @param request ConfirmPipelineBatchRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ConfirmPipelineBatchResponse
   */
  async confirmPipelineBatchWithOptions(request: ConfirmPipelineBatchRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ConfirmPipelineBatchResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.confirm)) {
      query["Confirm"] = request.confirm;
    }

    if (!Util.isUnset(request.pipelineId)) {
      query["PipelineId"] = request.pipelineId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ConfirmPipelineBatch",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/changeorder/ConfirmPipelineBatch`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ConfirmPipelineBatchResponse>(await this.callApi(params, req, runtime), new ConfirmPipelineBatchResponse({}));
  }

  /**
   * @param request ConfirmPipelineBatchRequest
   * @return ConfirmPipelineBatchResponse
   */
  async confirmPipelineBatch(request: ConfirmPipelineBatchRequest): Promise<ConfirmPipelineBatchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.confirmPipelineBatchWithOptions(request, headers, runtime);
  }

  /**
   * @param request CreateApplicationRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateApplicationResponse
   */
  async createApplicationWithOptions(request: CreateApplicationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateApplicationResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.acrAssumeRoleArn)) {
      query["AcrAssumeRoleArn"] = request.acrAssumeRoleArn;
    }

    if (!Util.isUnset(request.appDescription)) {
      query["AppDescription"] = request.appDescription;
    }

    if (!Util.isUnset(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.appSource)) {
      query["AppSource"] = request.appSource;
    }

    if (!Util.isUnset(request.autoConfig)) {
      query["AutoConfig"] = request.autoConfig;
    }

    if (!Util.isUnset(request.command)) {
      query["Command"] = request.command;
    }

    if (!Util.isUnset(request.commandArgs)) {
      query["CommandArgs"] = request.commandArgs;
    }

    if (!Util.isUnset(request.cpu)) {
      query["Cpu"] = request.cpu;
    }

    if (!Util.isUnset(request.customHostAlias)) {
      query["CustomHostAlias"] = request.customHostAlias;
    }

    if (!Util.isUnset(request.deploy)) {
      query["Deploy"] = request.deploy;
    }

    if (!Util.isUnset(request.edasContainerVersion)) {
      query["EdasContainerVersion"] = request.edasContainerVersion;
    }

    if (!Util.isUnset(request.enableEbpf)) {
      query["EnableEbpf"] = request.enableEbpf;
    }

    if (!Util.isUnset(request.envs)) {
      query["Envs"] = request.envs;
    }

    if (!Util.isUnset(request.imagePullSecrets)) {
      query["ImagePullSecrets"] = request.imagePullSecrets;
    }

    if (!Util.isUnset(request.imageUrl)) {
      query["ImageUrl"] = request.imageUrl;
    }

    if (!Util.isUnset(request.jarStartArgs)) {
      query["JarStartArgs"] = request.jarStartArgs;
    }

    if (!Util.isUnset(request.jarStartOptions)) {
      query["JarStartOptions"] = request.jarStartOptions;
    }

    if (!Util.isUnset(request.jdk)) {
      query["Jdk"] = request.jdk;
    }

    if (!Util.isUnset(request.kafkaConfigs)) {
      query["KafkaConfigs"] = request.kafkaConfigs;
    }

    if (!Util.isUnset(request.liveness)) {
      query["Liveness"] = request.liveness;
    }

    if (!Util.isUnset(request.memory)) {
      query["Memory"] = request.memory;
    }

    if (!Util.isUnset(request.microRegistration)) {
      query["MicroRegistration"] = request.microRegistration;
    }

    if (!Util.isUnset(request.mountDesc)) {
      query["MountDesc"] = request.mountDesc;
    }

    if (!Util.isUnset(request.mountHost)) {
      query["MountHost"] = request.mountHost;
    }

    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!Util.isUnset(request.nasConfigs)) {
      query["NasConfigs"] = request.nasConfigs;
    }

    if (!Util.isUnset(request.nasId)) {
      query["NasId"] = request.nasId;
    }

    if (!Util.isUnset(request.packageType)) {
      query["PackageType"] = request.packageType;
    }

    if (!Util.isUnset(request.packageUrl)) {
      query["PackageUrl"] = request.packageUrl;
    }

    if (!Util.isUnset(request.packageVersion)) {
      query["PackageVersion"] = request.packageVersion;
    }

    if (!Util.isUnset(request.phpArmsConfigLocation)) {
      query["PhpArmsConfigLocation"] = request.phpArmsConfigLocation;
    }

    if (!Util.isUnset(request.phpConfigLocation)) {
      query["PhpConfigLocation"] = request.phpConfigLocation;
    }

    if (!Util.isUnset(request.postStart)) {
      query["PostStart"] = request.postStart;
    }

    if (!Util.isUnset(request.preStop)) {
      query["PreStop"] = request.preStop;
    }

    if (!Util.isUnset(request.programmingLanguage)) {
      query["ProgrammingLanguage"] = request.programmingLanguage;
    }

    if (!Util.isUnset(request.pvtzDiscoverySvc)) {
      query["PvtzDiscoverySvc"] = request.pvtzDiscoverySvc;
    }

    if (!Util.isUnset(request.python)) {
      query["Python"] = request.python;
    }

    if (!Util.isUnset(request.pythonModules)) {
      query["PythonModules"] = request.pythonModules;
    }

    if (!Util.isUnset(request.readiness)) {
      query["Readiness"] = request.readiness;
    }

    if (!Util.isUnset(request.replicas)) {
      query["Replicas"] = request.replicas;
    }

    if (!Util.isUnset(request.saeVersion)) {
      query["SaeVersion"] = request.saeVersion;
    }

    if (!Util.isUnset(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!Util.isUnset(request.slsConfigs)) {
      query["SlsConfigs"] = request.slsConfigs;
    }

    if (!Util.isUnset(request.terminationGracePeriodSeconds)) {
      query["TerminationGracePeriodSeconds"] = request.terminationGracePeriodSeconds;
    }

    if (!Util.isUnset(request.timezone)) {
      query["Timezone"] = request.timezone;
    }

    if (!Util.isUnset(request.tomcatConfig)) {
      query["TomcatConfig"] = request.tomcatConfig;
    }

    if (!Util.isUnset(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!Util.isUnset(request.warStartOptions)) {
      query["WarStartOptions"] = request.warStartOptions;
    }

    if (!Util.isUnset(request.webContainer)) {
      query["WebContainer"] = request.webContainer;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.acrInstanceId)) {
      body["AcrInstanceId"] = request.acrInstanceId;
    }

    if (!Util.isUnset(request.associateEip)) {
      body["AssociateEip"] = request.associateEip;
    }

    if (!Util.isUnset(request.baseAppId)) {
      body["BaseAppId"] = request.baseAppId;
    }

    if (!Util.isUnset(request.configMapMountDesc)) {
      body["ConfigMapMountDesc"] = request.configMapMountDesc;
    }

    if (!Util.isUnset(request.microRegistrationConfig)) {
      body["MicroRegistrationConfig"] = request.microRegistrationConfig;
    }

    if (!Util.isUnset(request.ossAkId)) {
      body["OssAkId"] = request.ossAkId;
    }

    if (!Util.isUnset(request.ossAkSecret)) {
      body["OssAkSecret"] = request.ossAkSecret;
    }

    if (!Util.isUnset(request.ossMountDescs)) {
      body["OssMountDescs"] = request.ossMountDescs;
    }

    if (!Util.isUnset(request.php)) {
      body["Php"] = request.php;
    }

    if (!Util.isUnset(request.phpConfig)) {
      body["PhpConfig"] = request.phpConfig;
    }

    if (!Util.isUnset(request.serviceTags)) {
      body["ServiceTags"] = request.serviceTags;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateApplication",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/app/createApplication`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateApplicationResponse>(await this.callApi(params, req, runtime), new CreateApplicationResponse({}));
  }

  /**
   * @param request CreateApplicationRequest
   * @return CreateApplicationResponse
   */
  async createApplication(request: CreateApplicationRequest): Promise<CreateApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createApplicationWithOptions(request, headers, runtime);
  }

  /**
   * @summary Null
   *
   * @description The HTTP status code. Take note of the following rules:
   * *   **2xx**: The call was successful.
   * *   **3xx**: The call was redirected.
   * *   **4xx**: The call failed.
   * *   **5xx**: A server error occurred.
   *
   * @param request CreateApplicationScalingRuleRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateApplicationScalingRuleResponse
   */
  async createApplicationScalingRuleWithOptions(request: CreateApplicationScalingRuleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateApplicationScalingRuleResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.minReadyInstanceRatio)) {
      query["MinReadyInstanceRatio"] = request.minReadyInstanceRatio;
    }

    if (!Util.isUnset(request.minReadyInstances)) {
      query["MinReadyInstances"] = request.minReadyInstances;
    }

    if (!Util.isUnset(request.scalingRuleEnable)) {
      query["ScalingRuleEnable"] = request.scalingRuleEnable;
    }

    if (!Util.isUnset(request.scalingRuleMetric)) {
      query["ScalingRuleMetric"] = request.scalingRuleMetric;
    }

    if (!Util.isUnset(request.scalingRuleName)) {
      query["ScalingRuleName"] = request.scalingRuleName;
    }

    if (!Util.isUnset(request.scalingRuleTimer)) {
      query["ScalingRuleTimer"] = request.scalingRuleTimer;
    }

    if (!Util.isUnset(request.scalingRuleType)) {
      query["ScalingRuleType"] = request.scalingRuleType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateApplicationScalingRule",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/scale/applicationScalingRule`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateApplicationScalingRuleResponse>(await this.callApi(params, req, runtime), new CreateApplicationScalingRuleResponse({}));
  }

  /**
   * @summary Null
   *
   * @description The HTTP status code. Take note of the following rules:
   * *   **2xx**: The call was successful.
   * *   **3xx**: The call was redirected.
   * *   **4xx**: The call failed.
   * *   **5xx**: A server error occurred.
   *
   * @param request CreateApplicationScalingRuleRequest
   * @return CreateApplicationScalingRuleResponse
   */
  async createApplicationScalingRule(request: CreateApplicationScalingRuleRequest): Promise<CreateApplicationScalingRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createApplicationScalingRuleWithOptions(request, headers, runtime);
  }

  /**
   * @summary name
   *
   * @param request CreateConfigMapRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateConfigMapResponse
   */
  async createConfigMapWithOptions(request: CreateConfigMapRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateConfigMapResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.data)) {
      body["Data"] = request.data;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateConfigMap",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/configmap/configMap`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateConfigMapResponse>(await this.callApi(params, req, runtime), new CreateConfigMapResponse({}));
  }

  /**
   * @summary name
   *
   * @param request CreateConfigMapRequest
   * @return CreateConfigMapResponse
   */
  async createConfigMap(request: CreateConfigMapRequest): Promise<CreateConfigMapResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createConfigMapWithOptions(request, headers, runtime);
  }

  /**
   * @summary Creates a canary release rule for a Spring Cloud or Dubbo application.
   *
   * @description >  You can configure only one canary release rule for each application.
   *
   * @param request CreateGreyTagRouteRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateGreyTagRouteResponse
   */
  async createGreyTagRouteWithOptions(request: CreateGreyTagRouteRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateGreyTagRouteResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.albRules)) {
      query["AlbRules"] = request.albRules;
    }

    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.dubboRules)) {
      query["DubboRules"] = request.dubboRules;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.scRules)) {
      query["ScRules"] = request.scRules;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateGreyTagRoute",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/tagroute/greyTagRoute`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateGreyTagRouteResponse>(await this.callApi(params, req, runtime), new CreateGreyTagRouteResponse({}));
  }

  /**
   * @summary Creates a canary release rule for a Spring Cloud or Dubbo application.
   *
   * @description >  You can configure only one canary release rule for each application.
   *
   * @param request CreateGreyTagRouteRequest
   * @return CreateGreyTagRouteResponse
   */
  async createGreyTagRoute(request: CreateGreyTagRouteRequest): Promise<CreateGreyTagRouteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createGreyTagRouteWithOptions(request, headers, runtime);
  }

  /**
   * @summary {"appId":"395b60e4-0550-458d-9c54-a265d036\\*\\*\\*\\*","containerPort":8080}
   *
   * @param request CreateIngressRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateIngressResponse
   */
  async createIngressWithOptions(request: CreateIngressRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateIngressResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.certId)) {
      query["CertId"] = request.certId;
    }

    if (!Util.isUnset(request.certIds)) {
      query["CertIds"] = request.certIds;
    }

    if (!Util.isUnset(request.defaultRule)) {
      query["DefaultRule"] = request.defaultRule;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!Util.isUnset(request.listenerProtocol)) {
      query["ListenerProtocol"] = request.listenerProtocol;
    }

    if (!Util.isUnset(request.loadBalanceType)) {
      query["LoadBalanceType"] = request.loadBalanceType;
    }

    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!Util.isUnset(request.slbId)) {
      query["SlbId"] = request.slbId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.rules)) {
      body["Rules"] = request.rules;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateIngress",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/ingress/Ingress`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateIngressResponse>(await this.callApi(params, req, runtime), new CreateIngressResponse({}));
  }

  /**
   * @summary {"appId":"395b60e4-0550-458d-9c54-a265d036\\*\\*\\*\\*","containerPort":8080}
   *
   * @param request CreateIngressRequest
   * @return CreateIngressResponse
   */
  async createIngress(request: CreateIngressRequest): Promise<CreateIngressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createIngressWithOptions(request, headers, runtime);
  }

  /**
   * @summary Updates a job template.
   *
   * @param request CreateJobRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateJobResponse
   */
  async createJobWithOptions(request: CreateJobRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateJobResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.acrAssumeRoleArn)) {
      query["AcrAssumeRoleArn"] = request.acrAssumeRoleArn;
    }

    if (!Util.isUnset(request.appDescription)) {
      query["AppDescription"] = request.appDescription;
    }

    if (!Util.isUnset(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.autoConfig)) {
      query["AutoConfig"] = request.autoConfig;
    }

    if (!Util.isUnset(request.backoffLimit)) {
      query["BackoffLimit"] = request.backoffLimit;
    }

    if (!Util.isUnset(request.command)) {
      query["Command"] = request.command;
    }

    if (!Util.isUnset(request.commandArgs)) {
      query["CommandArgs"] = request.commandArgs;
    }

    if (!Util.isUnset(request.concurrencyPolicy)) {
      query["ConcurrencyPolicy"] = request.concurrencyPolicy;
    }

    if (!Util.isUnset(request.cpu)) {
      query["Cpu"] = request.cpu;
    }

    if (!Util.isUnset(request.customHostAlias)) {
      query["CustomHostAlias"] = request.customHostAlias;
    }

    if (!Util.isUnset(request.edasContainerVersion)) {
      query["EdasContainerVersion"] = request.edasContainerVersion;
    }

    if (!Util.isUnset(request.envs)) {
      query["Envs"] = request.envs;
    }

    if (!Util.isUnset(request.imagePullSecrets)) {
      query["ImagePullSecrets"] = request.imagePullSecrets;
    }

    if (!Util.isUnset(request.imageUrl)) {
      query["ImageUrl"] = request.imageUrl;
    }

    if (!Util.isUnset(request.jarStartArgs)) {
      query["JarStartArgs"] = request.jarStartArgs;
    }

    if (!Util.isUnset(request.jarStartOptions)) {
      query["JarStartOptions"] = request.jarStartOptions;
    }

    if (!Util.isUnset(request.jdk)) {
      query["Jdk"] = request.jdk;
    }

    if (!Util.isUnset(request.memory)) {
      query["Memory"] = request.memory;
    }

    if (!Util.isUnset(request.mountDesc)) {
      query["MountDesc"] = request.mountDesc;
    }

    if (!Util.isUnset(request.mountHost)) {
      query["MountHost"] = request.mountHost;
    }

    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!Util.isUnset(request.nasId)) {
      query["NasId"] = request.nasId;
    }

    if (!Util.isUnset(request.packageType)) {
      query["PackageType"] = request.packageType;
    }

    if (!Util.isUnset(request.packageUrl)) {
      query["PackageUrl"] = request.packageUrl;
    }

    if (!Util.isUnset(request.packageVersion)) {
      query["PackageVersion"] = request.packageVersion;
    }

    if (!Util.isUnset(request.phpConfigLocation)) {
      query["PhpConfigLocation"] = request.phpConfigLocation;
    }

    if (!Util.isUnset(request.postStart)) {
      query["PostStart"] = request.postStart;
    }

    if (!Util.isUnset(request.preStop)) {
      query["PreStop"] = request.preStop;
    }

    if (!Util.isUnset(request.programmingLanguage)) {
      query["ProgrammingLanguage"] = request.programmingLanguage;
    }

    if (!Util.isUnset(request.python)) {
      query["Python"] = request.python;
    }

    if (!Util.isUnset(request.pythonModules)) {
      query["PythonModules"] = request.pythonModules;
    }

    if (!Util.isUnset(request.refAppId)) {
      query["RefAppId"] = request.refAppId;
    }

    if (!Util.isUnset(request.replicas)) {
      query["Replicas"] = request.replicas;
    }

    if (!Util.isUnset(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!Util.isUnset(request.slice)) {
      query["Slice"] = request.slice;
    }

    if (!Util.isUnset(request.sliceEnvs)) {
      query["SliceEnvs"] = request.sliceEnvs;
    }

    if (!Util.isUnset(request.slsConfigs)) {
      query["SlsConfigs"] = request.slsConfigs;
    }

    if (!Util.isUnset(request.terminationGracePeriodSeconds)) {
      query["TerminationGracePeriodSeconds"] = request.terminationGracePeriodSeconds;
    }

    if (!Util.isUnset(request.timeout)) {
      query["Timeout"] = request.timeout;
    }

    if (!Util.isUnset(request.timezone)) {
      query["Timezone"] = request.timezone;
    }

    if (!Util.isUnset(request.tomcatConfig)) {
      query["TomcatConfig"] = request.tomcatConfig;
    }

    if (!Util.isUnset(request.triggerConfig)) {
      query["TriggerConfig"] = request.triggerConfig;
    }

    if (!Util.isUnset(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!Util.isUnset(request.warStartOptions)) {
      query["WarStartOptions"] = request.warStartOptions;
    }

    if (!Util.isUnset(request.webContainer)) {
      query["WebContainer"] = request.webContainer;
    }

    if (!Util.isUnset(request.workload)) {
      query["Workload"] = request.workload;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.acrInstanceId)) {
      body["AcrInstanceId"] = request.acrInstanceId;
    }

    if (!Util.isUnset(request.configMapMountDesc)) {
      body["ConfigMapMountDesc"] = request.configMapMountDesc;
    }

    if (!Util.isUnset(request.enableImageAccl)) {
      body["EnableImageAccl"] = request.enableImageAccl;
    }

    if (!Util.isUnset(request.ossAkId)) {
      body["OssAkId"] = request.ossAkId;
    }

    if (!Util.isUnset(request.ossAkSecret)) {
      body["OssAkSecret"] = request.ossAkSecret;
    }

    if (!Util.isUnset(request.ossMountDescs)) {
      body["OssMountDescs"] = request.ossMountDescs;
    }

    if (!Util.isUnset(request.phpConfig)) {
      body["PhpConfig"] = request.phpConfig;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateJob",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/job/createJob`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateJobResponse>(await this.callApi(params, req, runtime), new CreateJobResponse({}));
  }

  /**
   * @summary Updates a job template.
   *
   * @param request CreateJobRequest
   * @return CreateJobResponse
   */
  async createJob(request: CreateJobRequest): Promise<CreateJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createJobWithOptions(request, headers, runtime);
  }

  /**
   * @summary desc
   *
   * @param request CreateNamespaceRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateNamespaceResponse
   */
  async createNamespaceWithOptions(request: CreateNamespaceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateNamespaceResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.enableMicroRegistration)) {
      query["EnableMicroRegistration"] = request.enableMicroRegistration;
    }

    if (!Util.isUnset(request.nameSpaceShortId)) {
      query["NameSpaceShortId"] = request.nameSpaceShortId;
    }

    if (!Util.isUnset(request.namespaceDescription)) {
      query["NamespaceDescription"] = request.namespaceDescription;
    }

    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!Util.isUnset(request.namespaceName)) {
      query["NamespaceName"] = request.namespaceName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateNamespace",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/paas/namespace`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateNamespaceResponse>(await this.callApi(params, req, runtime), new CreateNamespaceResponse({}));
  }

  /**
   * @summary desc
   *
   * @param request CreateNamespaceRequest
   * @return CreateNamespaceResponse
   */
  async createNamespace(request: CreateNamespaceRequest): Promise<CreateNamespaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createNamespaceWithOptions(request, headers, runtime);
  }

  /**
   * @summary Null
   *
   * @param tmpReq CreateSecretRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateSecretResponse
   */
  async createSecretWithOptions(tmpReq: CreateSecretRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateSecretResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateSecretShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.secretData)) {
      request.secretDataShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.secretData, "SecretData", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!Util.isUnset(request.secretDataShrink)) {
      query["SecretData"] = request.secretDataShrink;
    }

    if (!Util.isUnset(request.secretName)) {
      query["SecretName"] = request.secretName;
    }

    if (!Util.isUnset(request.secretType)) {
      query["SecretType"] = request.secretType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateSecret",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/secret/secret`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateSecretResponse>(await this.callApi(params, req, runtime), new CreateSecretResponse({}));
  }

  /**
   * @summary Null
   *
   * @param request CreateSecretRequest
   * @return CreateSecretResponse
   */
  async createSecret(request: CreateSecretRequest): Promise<CreateSecretResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createSecretWithOptions(request, headers, runtime);
  }

  /**
   * @summary 创建应用
   *
   * @param request CreateWebApplicationRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateWebApplicationResponse
   */
  async createWebApplicationWithOptions(request: CreateWebApplicationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateWebApplicationResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "CreateWebApplication",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v2/api/web/applications`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateWebApplicationResponse>(await this.callApi(params, req, runtime), new CreateWebApplicationResponse({}));
  }

  /**
   * @summary 创建应用
   *
   * @param request CreateWebApplicationRequest
   * @return CreateWebApplicationResponse
   */
  async createWebApplication(request: CreateWebApplicationRequest): Promise<CreateWebApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createWebApplicationWithOptions(request, headers, runtime);
  }

  /**
   * @summary 新建自定义域名
   *
   * @param request CreateWebCustomDomainRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateWebCustomDomainResponse
   */
  async createWebCustomDomainWithOptions(request: CreateWebCustomDomainRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateWebCustomDomainResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "CreateWebCustomDomain",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v2/api/web/custom-domains`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateWebCustomDomainResponse>(await this.callApi(params, req, runtime), new CreateWebCustomDomainResponse({}));
  }

  /**
   * @summary 新建自定义域名
   *
   * @param request CreateWebCustomDomainRequest
   * @return CreateWebCustomDomainResponse
   */
  async createWebCustomDomain(request: CreateWebCustomDomainRequest): Promise<CreateWebCustomDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createWebCustomDomainWithOptions(request, headers, runtime);
  }

  /**
   * @param request DeleteApplicationRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteApplicationResponse
   */
  async deleteApplicationWithOptions(request: DeleteApplicationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteApplicationResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteApplication",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/app/deleteApplication`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteApplicationResponse>(await this.callApi(params, req, runtime), new DeleteApplicationResponse({}));
  }

  /**
   * @param request DeleteApplicationRequest
   * @return DeleteApplicationResponse
   */
  async deleteApplication(request: DeleteApplicationRequest): Promise<DeleteApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteApplicationWithOptions(request, headers, runtime);
  }

  /**
   * @summary 7171a6ca-d1cd-4928-8642-7d5cfe69\\*\\*\\*\\*
   *
   * @param request DeleteApplicationScalingRuleRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteApplicationScalingRuleResponse
   */
  async deleteApplicationScalingRuleWithOptions(request: DeleteApplicationScalingRuleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteApplicationScalingRuleResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.scalingRuleName)) {
      query["ScalingRuleName"] = request.scalingRuleName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteApplicationScalingRule",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/scale/applicationScalingRule`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteApplicationScalingRuleResponse>(await this.callApi(params, req, runtime), new DeleteApplicationScalingRuleResponse({}));
  }

  /**
   * @summary 7171a6ca-d1cd-4928-8642-7d5cfe69\\*\\*\\*\\*
   *
   * @param request DeleteApplicationScalingRuleRequest
   * @return DeleteApplicationScalingRuleResponse
   */
  async deleteApplicationScalingRule(request: DeleteApplicationScalingRuleRequest): Promise<DeleteApplicationScalingRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteApplicationScalingRuleWithOptions(request, headers, runtime);
  }

  /**
   * @param request DeleteConfigMapRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteConfigMapResponse
   */
  async deleteConfigMapWithOptions(request: DeleteConfigMapRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteConfigMapResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.configMapId)) {
      query["ConfigMapId"] = request.configMapId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteConfigMap",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/configmap/configMap`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteConfigMapResponse>(await this.callApi(params, req, runtime), new DeleteConfigMapResponse({}));
  }

  /**
   * @param request DeleteConfigMapRequest
   * @return DeleteConfigMapResponse
   */
  async deleteConfigMap(request: DeleteConfigMapRequest): Promise<DeleteConfigMapResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteConfigMapWithOptions(request, headers, runtime);
  }

  /**
   * @summary 1
   *
   * @param request DeleteGreyTagRouteRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteGreyTagRouteResponse
   */
  async deleteGreyTagRouteWithOptions(request: DeleteGreyTagRouteRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteGreyTagRouteResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.greyTagRouteId)) {
      query["GreyTagRouteId"] = request.greyTagRouteId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteGreyTagRoute",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/tagroute/greyTagRoute`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteGreyTagRouteResponse>(await this.callApi(params, req, runtime), new DeleteGreyTagRouteResponse({}));
  }

  /**
   * @summary 1
   *
   * @param request DeleteGreyTagRouteRequest
   * @return DeleteGreyTagRouteResponse
   */
  async deleteGreyTagRoute(request: DeleteGreyTagRouteRequest): Promise<DeleteGreyTagRouteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteGreyTagRouteWithOptions(request, headers, runtime);
  }

  /**
   * @summary Deletes a job.
   *
   * @param request DeleteHistoryJobRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteHistoryJobResponse
   */
  async deleteHistoryJobWithOptions(request: DeleteHistoryJobRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteHistoryJobResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteHistoryJob",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/job/deleteHistoryJob`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteHistoryJobResponse>(await this.callApi(params, req, runtime), new DeleteHistoryJobResponse({}));
  }

  /**
   * @summary Deletes a job.
   *
   * @param request DeleteHistoryJobRequest
   * @return DeleteHistoryJobResponse
   */
  async deleteHistoryJob(request: DeleteHistoryJobRequest): Promise<DeleteHistoryJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteHistoryJobWithOptions(request, headers, runtime);
  }

  /**
   * @param request DeleteIngressRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteIngressResponse
   */
  async deleteIngressWithOptions(request: DeleteIngressRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteIngressResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.ingressId)) {
      query["IngressId"] = request.ingressId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteIngress",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/ingress/Ingress`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteIngressResponse>(await this.callApi(params, req, runtime), new DeleteIngressResponse({}));
  }

  /**
   * @param request DeleteIngressRequest
   * @return DeleteIngressResponse
   */
  async deleteIngress(request: DeleteIngressRequest): Promise<DeleteIngressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteIngressWithOptions(request, headers, runtime);
  }

  /**
   * @summary Deletes a job template.
   *
   * @param request DeleteJobRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteJobResponse
   */
  async deleteJobWithOptions(request: DeleteJobRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteJobResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteJob",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/job/deleteJob`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteJobResponse>(await this.callApi(params, req, runtime), new DeleteJobResponse({}));
  }

  /**
   * @summary Deletes a job template.
   *
   * @param request DeleteJobRequest
   * @return DeleteJobResponse
   */
  async deleteJob(request: DeleteJobRequest): Promise<DeleteJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteJobWithOptions(request, headers, runtime);
  }

  /**
   * @param request DeleteNamespaceRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteNamespaceResponse
   */
  async deleteNamespaceWithOptions(request: DeleteNamespaceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteNamespaceResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.nameSpaceShortId)) {
      query["NameSpaceShortId"] = request.nameSpaceShortId;
    }

    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteNamespace",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/paas/namespace`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteNamespaceResponse>(await this.callApi(params, req, runtime), new DeleteNamespaceResponse({}));
  }

  /**
   * @param request DeleteNamespaceRequest
   * @return DeleteNamespaceResponse
   */
  async deleteNamespace(request: DeleteNamespaceRequest): Promise<DeleteNamespaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteNamespaceWithOptions(request, headers, runtime);
  }

  /**
   * @summary Deletes a Secret.
   *
   * @param request DeleteSecretRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteSecretResponse
   */
  async deleteSecretWithOptions(request: DeleteSecretRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteSecretResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!Util.isUnset(request.secretId)) {
      query["SecretId"] = request.secretId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSecret",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/secret/secret`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteSecretResponse>(await this.callApi(params, req, runtime), new DeleteSecretResponse({}));
  }

  /**
   * @summary Deletes a Secret.
   *
   * @param request DeleteSecretRequest
   * @return DeleteSecretResponse
   */
  async deleteSecret(request: DeleteSecretRequest): Promise<DeleteSecretResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteSecretWithOptions(request, headers, runtime);
  }

  /**
   * @summary 删除应用
   *
   * @param request DeleteWebApplicationRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteWebApplicationResponse
   */
  async deleteWebApplicationWithOptions(ApplicationId: string, request: DeleteWebApplicationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteWebApplicationResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteWebApplication",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v2/api/web/applications/${OpenApiUtil.getEncodeParam(ApplicationId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteWebApplicationResponse>(await this.callApi(params, req, runtime), new DeleteWebApplicationResponse({}));
  }

  /**
   * @summary 删除应用
   *
   * @param request DeleteWebApplicationRequest
   * @return DeleteWebApplicationResponse
   */
  async deleteWebApplication(ApplicationId: string, request: DeleteWebApplicationRequest): Promise<DeleteWebApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteWebApplicationWithOptions(ApplicationId, request, headers, runtime);
  }

  /**
   * @summary 删除应用版本
   *
   * @param request DeleteWebApplicationRevisionRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteWebApplicationRevisionResponse
   */
  async deleteWebApplicationRevisionWithOptions(ApplicationId: string, RevisionId: string, request: DeleteWebApplicationRevisionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteWebApplicationRevisionResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteWebApplicationRevision",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v2/api/web/application-revisions/${OpenApiUtil.getEncodeParam(ApplicationId)}/revisions/${OpenApiUtil.getEncodeParam(RevisionId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteWebApplicationRevisionResponse>(await this.callApi(params, req, runtime), new DeleteWebApplicationRevisionResponse({}));
  }

  /**
   * @summary 删除应用版本
   *
   * @param request DeleteWebApplicationRevisionRequest
   * @return DeleteWebApplicationRevisionResponse
   */
  async deleteWebApplicationRevision(ApplicationId: string, RevisionId: string, request: DeleteWebApplicationRevisionRequest): Promise<DeleteWebApplicationRevisionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteWebApplicationRevisionWithOptions(ApplicationId, RevisionId, request, headers, runtime);
  }

  /**
   * @summary 删除自定义域名
   *
   * @param request DeleteWebCustomDomainRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteWebCustomDomainResponse
   */
  async deleteWebCustomDomainWithOptions(DomainName: string, request: DeleteWebCustomDomainRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteWebCustomDomainResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteWebCustomDomain",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v2/api/web/custom-domains/${OpenApiUtil.getEncodeParam(DomainName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteWebCustomDomainResponse>(await this.callApi(params, req, runtime), new DeleteWebCustomDomainResponse({}));
  }

  /**
   * @summary 删除自定义域名
   *
   * @param request DeleteWebCustomDomainRequest
   * @return DeleteWebCustomDomainResponse
   */
  async deleteWebCustomDomain(DomainName: string, request: DeleteWebCustomDomainRequest): Promise<DeleteWebCustomDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteWebCustomDomainWithOptions(DomainName, request, headers, runtime);
  }

  /**
   * @summary Deploys an application.
   *
   * @param request DeployApplicationRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeployApplicationResponse
   */
  async deployApplicationWithOptions(request: DeployApplicationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeployApplicationResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.acrAssumeRoleArn)) {
      query["AcrAssumeRoleArn"] = request.acrAssumeRoleArn;
    }

    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.autoEnableApplicationScalingRule)) {
      query["AutoEnableApplicationScalingRule"] = request.autoEnableApplicationScalingRule;
    }

    if (!Util.isUnset(request.batchWaitTime)) {
      query["BatchWaitTime"] = request.batchWaitTime;
    }

    if (!Util.isUnset(request.changeOrderDesc)) {
      query["ChangeOrderDesc"] = request.changeOrderDesc;
    }

    if (!Util.isUnset(request.command)) {
      query["Command"] = request.command;
    }

    if (!Util.isUnset(request.commandArgs)) {
      query["CommandArgs"] = request.commandArgs;
    }

    if (!Util.isUnset(request.cpu)) {
      query["Cpu"] = request.cpu;
    }

    if (!Util.isUnset(request.customHostAlias)) {
      query["CustomHostAlias"] = request.customHostAlias;
    }

    if (!Util.isUnset(request.deploy)) {
      query["Deploy"] = request.deploy;
    }

    if (!Util.isUnset(request.edasContainerVersion)) {
      query["EdasContainerVersion"] = request.edasContainerVersion;
    }

    if (!Util.isUnset(request.enableAhas)) {
      query["EnableAhas"] = request.enableAhas;
    }

    if (!Util.isUnset(request.enableGreyTagRoute)) {
      query["EnableGreyTagRoute"] = request.enableGreyTagRoute;
    }

    if (!Util.isUnset(request.envs)) {
      query["Envs"] = request.envs;
    }

    if (!Util.isUnset(request.imagePullSecrets)) {
      query["ImagePullSecrets"] = request.imagePullSecrets;
    }

    if (!Util.isUnset(request.imageUrl)) {
      query["ImageUrl"] = request.imageUrl;
    }

    if (!Util.isUnset(request.jarStartArgs)) {
      query["JarStartArgs"] = request.jarStartArgs;
    }

    if (!Util.isUnset(request.jarStartOptions)) {
      query["JarStartOptions"] = request.jarStartOptions;
    }

    if (!Util.isUnset(request.jdk)) {
      query["Jdk"] = request.jdk;
    }

    if (!Util.isUnset(request.kafkaConfigs)) {
      query["KafkaConfigs"] = request.kafkaConfigs;
    }

    if (!Util.isUnset(request.liveness)) {
      query["Liveness"] = request.liveness;
    }

    if (!Util.isUnset(request.memory)) {
      query["Memory"] = request.memory;
    }

    if (!Util.isUnset(request.microRegistration)) {
      query["MicroRegistration"] = request.microRegistration;
    }

    if (!Util.isUnset(request.minReadyInstanceRatio)) {
      query["MinReadyInstanceRatio"] = request.minReadyInstanceRatio;
    }

    if (!Util.isUnset(request.minReadyInstances)) {
      query["MinReadyInstances"] = request.minReadyInstances;
    }

    if (!Util.isUnset(request.mountDesc)) {
      query["MountDesc"] = request.mountDesc;
    }

    if (!Util.isUnset(request.mountHost)) {
      query["MountHost"] = request.mountHost;
    }

    if (!Util.isUnset(request.nasConfigs)) {
      query["NasConfigs"] = request.nasConfigs;
    }

    if (!Util.isUnset(request.nasId)) {
      query["NasId"] = request.nasId;
    }

    if (!Util.isUnset(request.packageType)) {
      query["PackageType"] = request.packageType;
    }

    if (!Util.isUnset(request.packageUrl)) {
      query["PackageUrl"] = request.packageUrl;
    }

    if (!Util.isUnset(request.packageVersion)) {
      query["PackageVersion"] = request.packageVersion;
    }

    if (!Util.isUnset(request.phpArmsConfigLocation)) {
      query["PhpArmsConfigLocation"] = request.phpArmsConfigLocation;
    }

    if (!Util.isUnset(request.phpConfigLocation)) {
      query["PhpConfigLocation"] = request.phpConfigLocation;
    }

    if (!Util.isUnset(request.postStart)) {
      query["PostStart"] = request.postStart;
    }

    if (!Util.isUnset(request.preStop)) {
      query["PreStop"] = request.preStop;
    }

    if (!Util.isUnset(request.pvtzDiscoverySvc)) {
      query["PvtzDiscoverySvc"] = request.pvtzDiscoverySvc;
    }

    if (!Util.isUnset(request.python)) {
      query["Python"] = request.python;
    }

    if (!Util.isUnset(request.pythonModules)) {
      query["PythonModules"] = request.pythonModules;
    }

    if (!Util.isUnset(request.readiness)) {
      query["Readiness"] = request.readiness;
    }

    if (!Util.isUnset(request.replicas)) {
      query["Replicas"] = request.replicas;
    }

    if (!Util.isUnset(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!Util.isUnset(request.slsConfigs)) {
      query["SlsConfigs"] = request.slsConfigs;
    }

    if (!Util.isUnset(request.terminationGracePeriodSeconds)) {
      query["TerminationGracePeriodSeconds"] = request.terminationGracePeriodSeconds;
    }

    if (!Util.isUnset(request.timezone)) {
      query["Timezone"] = request.timezone;
    }

    if (!Util.isUnset(request.tomcatConfig)) {
      query["TomcatConfig"] = request.tomcatConfig;
    }

    if (!Util.isUnset(request.updateStrategy)) {
      query["UpdateStrategy"] = request.updateStrategy;
    }

    if (!Util.isUnset(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!Util.isUnset(request.warStartOptions)) {
      query["WarStartOptions"] = request.warStartOptions;
    }

    if (!Util.isUnset(request.webContainer)) {
      query["WebContainer"] = request.webContainer;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.acrInstanceId)) {
      body["AcrInstanceId"] = request.acrInstanceId;
    }

    if (!Util.isUnset(request.associateEip)) {
      body["AssociateEip"] = request.associateEip;
    }

    if (!Util.isUnset(request.configMapMountDesc)) {
      body["ConfigMapMountDesc"] = request.configMapMountDesc;
    }

    if (!Util.isUnset(request.microRegistrationConfig)) {
      body["MicroRegistrationConfig"] = request.microRegistrationConfig;
    }

    if (!Util.isUnset(request.ossAkId)) {
      body["OssAkId"] = request.ossAkId;
    }

    if (!Util.isUnset(request.ossAkSecret)) {
      body["OssAkSecret"] = request.ossAkSecret;
    }

    if (!Util.isUnset(request.ossMountDescs)) {
      body["OssMountDescs"] = request.ossMountDescs;
    }

    if (!Util.isUnset(request.php)) {
      body["Php"] = request.php;
    }

    if (!Util.isUnset(request.phpConfig)) {
      body["PhpConfig"] = request.phpConfig;
    }

    if (!Util.isUnset(request.serviceTags)) {
      body["ServiceTags"] = request.serviceTags;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeployApplication",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/app/deployApplication`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeployApplicationResponse>(await this.callApi(params, req, runtime), new DeployApplicationResponse({}));
  }

  /**
   * @summary Deploys an application.
   *
   * @param request DeployApplicationRequest
   * @return DeployApplicationResponse
   */
  async deployApplication(request: DeployApplicationRequest): Promise<DeployApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deployApplicationWithOptions(request, headers, runtime);
  }

  /**
   * @summary Queries the metadata details of the service of an application.
   *
   * @param request DescribeAppServiceDetailRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeAppServiceDetailResponse
   */
  async describeAppServiceDetailWithOptions(request: DescribeAppServiceDetailRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeAppServiceDetailResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.nacosInstanceId)) {
      query["NacosInstanceId"] = request.nacosInstanceId;
    }

    if (!Util.isUnset(request.nacosNamespaceId)) {
      query["NacosNamespaceId"] = request.nacosNamespaceId;
    }

    if (!Util.isUnset(request.serviceGroup)) {
      query["ServiceGroup"] = request.serviceGroup;
    }

    if (!Util.isUnset(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    if (!Util.isUnset(request.serviceType)) {
      query["ServiceType"] = request.serviceType;
    }

    if (!Util.isUnset(request.serviceVersion)) {
      query["ServiceVersion"] = request.serviceVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAppServiceDetail",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/service/describeAppServiceDetail`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeAppServiceDetailResponse>(await this.callApi(params, req, runtime), new DescribeAppServiceDetailResponse({}));
  }

  /**
   * @summary Queries the metadata details of the service of an application.
   *
   * @param request DescribeAppServiceDetailRequest
   * @return DescribeAppServiceDetailResponse
   */
  async describeAppServiceDetail(request: DescribeAppServiceDetailRequest): Promise<DescribeAppServiceDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeAppServiceDetailWithOptions(request, headers, runtime);
  }

  /**
   * @param request DescribeApplicationConfigRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeApplicationConfigResponse
   */
  async describeApplicationConfigWithOptions(request: DescribeApplicationConfigRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeApplicationConfigResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.versionId)) {
      query["VersionId"] = request.versionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeApplicationConfig",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/app/describeApplicationConfig`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeApplicationConfigResponse>(await this.callApi(params, req, runtime), new DescribeApplicationConfigResponse({}));
  }

  /**
   * @param request DescribeApplicationConfigRequest
   * @return DescribeApplicationConfigResponse
   */
  async describeApplicationConfig(request: DescribeApplicationConfigRequest): Promise<DescribeApplicationConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeApplicationConfigWithOptions(request, headers, runtime);
  }

  /**
   * @param request DescribeApplicationGroupsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeApplicationGroupsResponse
   */
  async describeApplicationGroupsWithOptions(request: DescribeApplicationGroupsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeApplicationGroupsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeApplicationGroups",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/app/describeApplicationGroups`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeApplicationGroupsResponse>(await this.callApi(params, req, runtime), new DescribeApplicationGroupsResponse({}));
  }

  /**
   * @param request DescribeApplicationGroupsRequest
   * @return DescribeApplicationGroupsResponse
   */
  async describeApplicationGroups(request: DescribeApplicationGroupsRequest): Promise<DescribeApplicationGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeApplicationGroupsWithOptions(request, headers, runtime);
  }

  /**
   * @param request DescribeApplicationImageRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeApplicationImageResponse
   */
  async describeApplicationImageWithOptions(request: DescribeApplicationImageRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeApplicationImageResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.imageUrl)) {
      query["ImageUrl"] = request.imageUrl;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeApplicationImage",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/container/describeApplicationImage`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeApplicationImageResponse>(await this.callApi(params, req, runtime), new DescribeApplicationImageResponse({}));
  }

  /**
   * @param request DescribeApplicationImageRequest
   * @return DescribeApplicationImageResponse
   */
  async describeApplicationImage(request: DescribeApplicationImageRequest): Promise<DescribeApplicationImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeApplicationImageWithOptions(request, headers, runtime);
  }

  /**
   * @summary Queries application instances.
   *
   * @param request DescribeApplicationInstancesRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeApplicationInstancesResponse
   */
  async describeApplicationInstancesWithOptions(request: DescribeApplicationInstancesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeApplicationInstancesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.reverse)) {
      query["Reverse"] = request.reverse;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeApplicationInstances",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/app/describeApplicationInstances`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeApplicationInstancesResponse>(await this.callApi(params, req, runtime), new DescribeApplicationInstancesResponse({}));
  }

  /**
   * @summary Queries application instances.
   *
   * @param request DescribeApplicationInstancesRequest
   * @return DescribeApplicationInstancesResponse
   */
  async describeApplicationInstances(request: DescribeApplicationInstancesRequest): Promise<DescribeApplicationInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeApplicationInstancesWithOptions(request, headers, runtime);
  }

  /**
   * @summary Queries a specified auto scaling policy of an application.
   *
   * @param request DescribeApplicationScalingRuleRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeApplicationScalingRuleResponse
   */
  async describeApplicationScalingRuleWithOptions(request: DescribeApplicationScalingRuleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeApplicationScalingRuleResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.scalingRuleName)) {
      query["ScalingRuleName"] = request.scalingRuleName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeApplicationScalingRule",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/scale/applicationScalingRule`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeApplicationScalingRuleResponse>(await this.callApi(params, req, runtime), new DescribeApplicationScalingRuleResponse({}));
  }

  /**
   * @summary Queries a specified auto scaling policy of an application.
   *
   * @param request DescribeApplicationScalingRuleRequest
   * @return DescribeApplicationScalingRuleResponse
   */
  async describeApplicationScalingRule(request: DescribeApplicationScalingRuleRequest): Promise<DescribeApplicationScalingRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeApplicationScalingRuleWithOptions(request, headers, runtime);
  }

  /**
   * @summary Queries the auto scaling policies of an application.
   *
   * @param request DescribeApplicationScalingRulesRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeApplicationScalingRulesResponse
   */
  async describeApplicationScalingRulesWithOptions(request: DescribeApplicationScalingRulesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeApplicationScalingRulesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeApplicationScalingRules",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/scale/applicationScalingRules`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeApplicationScalingRulesResponse>(await this.callApi(params, req, runtime), new DescribeApplicationScalingRulesResponse({}));
  }

  /**
   * @summary Queries the auto scaling policies of an application.
   *
   * @param request DescribeApplicationScalingRulesRequest
   * @return DescribeApplicationScalingRulesResponse
   */
  async describeApplicationScalingRules(request: DescribeApplicationScalingRulesRequest): Promise<DescribeApplicationScalingRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeApplicationScalingRulesWithOptions(request, headers, runtime);
  }

  /**
   * @summary 017f39b8-dfa4-4e16-a84b-1dcee4b1\\*\\*\\*\\*
   *
   * @param request DescribeApplicationSlbsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeApplicationSlbsResponse
   */
  async describeApplicationSlbsWithOptions(request: DescribeApplicationSlbsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeApplicationSlbsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeApplicationSlbs",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/app/slb`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeApplicationSlbsResponse>(await this.callApi(params, req, runtime), new DescribeApplicationSlbsResponse({}));
  }

  /**
   * @summary 017f39b8-dfa4-4e16-a84b-1dcee4b1\\*\\*\\*\\*
   *
   * @param request DescribeApplicationSlbsRequest
   * @return DescribeApplicationSlbsResponse
   */
  async describeApplicationSlbs(request: DescribeApplicationSlbsRequest): Promise<DescribeApplicationSlbsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeApplicationSlbsWithOptions(request, headers, runtime);
  }

  /**
   * @param request DescribeApplicationStatusRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeApplicationStatusResponse
   */
  async describeApplicationStatusWithOptions(request: DescribeApplicationStatusRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeApplicationStatusResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeApplicationStatus",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/app/describeApplicationStatus`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeApplicationStatusResponse>(await this.callApi(params, req, runtime), new DescribeApplicationStatusResponse({}));
  }

  /**
   * @param request DescribeApplicationStatusRequest
   * @return DescribeApplicationStatusResponse
   */
  async describeApplicationStatus(request: DescribeApplicationStatusRequest): Promise<DescribeApplicationStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeApplicationStatusWithOptions(request, headers, runtime);
  }

  /**
   * @param request DescribeChangeOrderRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeChangeOrderResponse
   */
  async describeChangeOrderWithOptions(request: DescribeChangeOrderRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeChangeOrderResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.changeOrderId)) {
      query["ChangeOrderId"] = request.changeOrderId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeChangeOrder",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/changeorder/DescribeChangeOrder`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeChangeOrderResponse>(await this.callApi(params, req, runtime), new DescribeChangeOrderResponse({}));
  }

  /**
   * @param request DescribeChangeOrderRequest
   * @return DescribeChangeOrderResponse
   */
  async describeChangeOrder(request: DescribeChangeOrderRequest): Promise<DescribeChangeOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeChangeOrderWithOptions(request, headers, runtime);
  }

  /**
   * @param request DescribeComponentsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeComponentsResponse
   */
  async describeComponentsWithOptions(request: DescribeComponentsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeComponentsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeComponents",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/resource/components`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeComponentsResponse>(await this.callApi(params, req, runtime), new DescribeComponentsResponse({}));
  }

  /**
   * @param request DescribeComponentsRequest
   * @return DescribeComponentsResponse
   */
  async describeComponents(request: DescribeComponentsRequest): Promise<DescribeComponentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeComponentsWithOptions(request, headers, runtime);
  }

  /**
   * @param request DescribeConfigMapRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeConfigMapResponse
   */
  async describeConfigMapWithOptions(request: DescribeConfigMapRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeConfigMapResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.configMapId)) {
      query["ConfigMapId"] = request.configMapId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeConfigMap",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/configmap/configMap`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeConfigMapResponse>(await this.callApi(params, req, runtime), new DescribeConfigMapResponse({}));
  }

  /**
   * @param request DescribeConfigMapRequest
   * @return DescribeConfigMapResponse
   */
  async describeConfigMap(request: DescribeConfigMapRequest): Promise<DescribeConfigMapResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeConfigMapWithOptions(request, headers, runtime);
  }

  /**
   * @param request DescribeConfigurationPriceRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeConfigurationPriceResponse
   */
  async describeConfigurationPriceWithOptions(request: DescribeConfigurationPriceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeConfigurationPriceResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.cpu)) {
      query["Cpu"] = request.cpu;
    }

    if (!Util.isUnset(request.memory)) {
      query["Memory"] = request.memory;
    }

    if (!Util.isUnset(request.workload)) {
      query["Workload"] = request.workload;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeConfigurationPrice",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/paas/configurationPrice`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeConfigurationPriceResponse>(await this.callApi(params, req, runtime), new DescribeConfigurationPriceResponse({}));
  }

  /**
   * @param request DescribeConfigurationPriceRequest
   * @return DescribeConfigurationPriceResponse
   */
  async describeConfigurationPrice(request: DescribeConfigurationPriceRequest): Promise<DescribeConfigurationPriceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeConfigurationPriceWithOptions(request, headers, runtime);
  }

  /**
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeEdasContainersResponse
   */
  async describeEdasContainersWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeEdasContainersResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DescribeEdasContainers",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/resource/edasContainers`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeEdasContainersResponse>(await this.callApi(params, req, runtime), new DescribeEdasContainersResponse({}));
  }

  /**
   * @return DescribeEdasContainersResponse
   */
  async describeEdasContainers(): Promise<DescribeEdasContainersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeEdasContainersWithOptions(headers, runtime);
  }

  /**
   * @summary Queries the details of a canary release rule based on the specified rule ID.
   *
   * @param request DescribeGreyTagRouteRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeGreyTagRouteResponse
   */
  async describeGreyTagRouteWithOptions(request: DescribeGreyTagRouteRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeGreyTagRouteResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.greyTagRouteId)) {
      query["GreyTagRouteId"] = request.greyTagRouteId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeGreyTagRoute",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/tagroute/greyTagRoute`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeGreyTagRouteResponse>(await this.callApi(params, req, runtime), new DescribeGreyTagRouteResponse({}));
  }

  /**
   * @summary Queries the details of a canary release rule based on the specified rule ID.
   *
   * @param request DescribeGreyTagRouteRequest
   * @return DescribeGreyTagRouteResponse
   */
  async describeGreyTagRoute(request: DescribeGreyTagRouteRequest): Promise<DescribeGreyTagRouteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeGreyTagRouteWithOptions(request, headers, runtime);
  }

  /**
   * @param request DescribeIngressRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeIngressResponse
   */
  async describeIngressWithOptions(request: DescribeIngressRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeIngressResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.ingressId)) {
      query["IngressId"] = request.ingressId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeIngress",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/ingress/Ingress`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeIngressResponse>(await this.callApi(params, req, runtime), new DescribeIngressResponse({}));
  }

  /**
   * @param request DescribeIngressRequest
   * @return DescribeIngressResponse
   */
  async describeIngress(request: DescribeIngressRequest): Promise<DescribeIngressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeIngressWithOptions(request, headers, runtime);
  }

  /**
   * @param request DescribeInstanceLogRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeInstanceLogResponse
   */
  async describeInstanceLogWithOptions(request: DescribeInstanceLogRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceLogResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInstanceLog",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/instance/describeInstanceLog`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstanceLogResponse>(await this.callApi(params, req, runtime), new DescribeInstanceLogResponse({}));
  }

  /**
   * @param request DescribeInstanceLogRequest
   * @return DescribeInstanceLogResponse
   */
  async describeInstanceLog(request: DescribeInstanceLogRequest): Promise<DescribeInstanceLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeInstanceLogWithOptions(request, headers, runtime);
  }

  /**
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeInstanceSpecificationsResponse
   */
  async describeInstanceSpecificationsWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceSpecificationsResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DescribeInstanceSpecifications",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/paas/quota/instanceSpecifications`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstanceSpecificationsResponse>(await this.callApi(params, req, runtime), new DescribeInstanceSpecificationsResponse({}));
  }

  /**
   * @return DescribeInstanceSpecificationsResponse
   */
  async describeInstanceSpecifications(): Promise<DescribeInstanceSpecificationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeInstanceSpecificationsWithOptions(headers, runtime);
  }

  /**
   * @summary Queries the configurations of a job template.
   *
   * @param request DescribeJobRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeJobResponse
   */
  async describeJobWithOptions(request: DescribeJobRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeJobResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeJob",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/job/describeJob`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeJobResponse>(await this.callApi(params, req, runtime), new DescribeJobResponse({}));
  }

  /**
   * @summary Queries the configurations of a job template.
   *
   * @param request DescribeJobRequest
   * @return DescribeJobResponse
   */
  async describeJob(request: DescribeJobRequest): Promise<DescribeJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeJobWithOptions(request, headers, runtime);
  }

  /**
   * @summary Query the information about jobs.
   *
   * @param request DescribeJobHistoryRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeJobHistoryResponse
   */
  async describeJobHistoryWithOptions(request: DescribeJobHistoryRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeJobHistoryResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.state)) {
      query["State"] = request.state;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeJobHistory",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/job/describeJobHistory`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeJobHistoryResponse>(await this.callApi(params, req, runtime), new DescribeJobHistoryResponse({}));
  }

  /**
   * @summary Query the information about jobs.
   *
   * @param request DescribeJobHistoryRequest
   * @return DescribeJobHistoryResponse
   */
  async describeJobHistory(request: DescribeJobHistoryRequest): Promise<DescribeJobHistoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeJobHistoryWithOptions(request, headers, runtime);
  }

  /**
   * @summary Queries the status of a job.
   *
   * @param request DescribeJobStatusRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeJobStatusResponse
   */
  async describeJobStatusWithOptions(request: DescribeJobStatusRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeJobStatusResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeJobStatus",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/job/describeJobStatus`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeJobStatusResponse>(await this.callApi(params, req, runtime), new DescribeJobStatusResponse({}));
  }

  /**
   * @summary Queries the status of a job.
   *
   * @param request DescribeJobStatusRequest
   * @return DescribeJobStatusResponse
   */
  async describeJobStatus(request: DescribeJobStatusRequest): Promise<DescribeJobStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeJobStatusWithOptions(request, headers, runtime);
  }

  /**
   * @summary Queries the details of a namespace.
   *
   * @param request DescribeNamespaceRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeNamespaceResponse
   */
  async describeNamespaceWithOptions(request: DescribeNamespaceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeNamespaceResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.nameSpaceShortId)) {
      query["NameSpaceShortId"] = request.nameSpaceShortId;
    }

    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeNamespace",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/paas/namespace`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeNamespaceResponse>(await this.callApi(params, req, runtime), new DescribeNamespaceResponse({}));
  }

  /**
   * @summary Queries the details of a namespace.
   *
   * @param request DescribeNamespaceRequest
   * @return DescribeNamespaceResponse
   */
  async describeNamespace(request: DescribeNamespaceRequest): Promise<DescribeNamespaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeNamespaceWithOptions(request, headers, runtime);
  }

  /**
   * @param request DescribeNamespaceListRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeNamespaceListResponse
   */
  async describeNamespaceListWithOptions(request: DescribeNamespaceListRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeNamespaceListResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.containCustom)) {
      query["ContainCustom"] = request.containCustom;
    }

    if (!Util.isUnset(request.hybridCloudExclude)) {
      query["HybridCloudExclude"] = request.hybridCloudExclude;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeNamespaceList",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/namespace/describeNamespaceList`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeNamespaceListResponse>(await this.callApi(params, req, runtime), new DescribeNamespaceListResponse({}));
  }

  /**
   * @param request DescribeNamespaceListRequest
   * @return DescribeNamespaceListResponse
   */
  async describeNamespaceList(request: DescribeNamespaceListRequest): Promise<DescribeNamespaceListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeNamespaceListWithOptions(request, headers, runtime);
  }

  /**
   * @param request DescribeNamespaceResourcesRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeNamespaceResourcesResponse
   */
  async describeNamespaceResourcesWithOptions(request: DescribeNamespaceResourcesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeNamespaceResourcesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.nameSpaceShortId)) {
      query["NameSpaceShortId"] = request.nameSpaceShortId;
    }

    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeNamespaceResources",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/namespace/describeNamespaceResources`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeNamespaceResourcesResponse>(await this.callApi(params, req, runtime), new DescribeNamespaceResourcesResponse({}));
  }

  /**
   * @param request DescribeNamespaceResourcesRequest
   * @return DescribeNamespaceResourcesResponse
   */
  async describeNamespaceResources(request: DescribeNamespaceResourcesRequest): Promise<DescribeNamespaceResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeNamespaceResourcesWithOptions(request, headers, runtime);
  }

  /**
   * @summary Queries the details of namespaces.
   *
   * @param request DescribeNamespacesRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeNamespacesResponse
   */
  async describeNamespacesWithOptions(request: DescribeNamespacesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeNamespacesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeNamespaces",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/paas/namespaces`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeNamespacesResponse>(await this.callApi(params, req, runtime), new DescribeNamespacesResponse({}));
  }

  /**
   * @summary Queries the details of namespaces.
   *
   * @param request DescribeNamespacesRequest
   * @return DescribeNamespacesResponse
   */
  async describeNamespaces(request: DescribeNamespacesRequest): Promise<DescribeNamespacesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeNamespacesWithOptions(request, headers, runtime);
  }

  /**
   * @summary Queries the information of a batch.
   *
   * @param request DescribePipelineRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribePipelineResponse
   */
  async describePipelineWithOptions(request: DescribePipelineRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribePipelineResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pipelineId)) {
      query["PipelineId"] = request.pipelineId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePipeline",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/changeorder/DescribePipeline`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribePipelineResponse>(await this.callApi(params, req, runtime), new DescribePipelineResponse({}));
  }

  /**
   * @summary Queries the information of a batch.
   *
   * @param request DescribePipelineRequest
   * @return DescribePipelineResponse
   */
  async describePipeline(request: DescribePipelineRequest): Promise<DescribePipelineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describePipelineWithOptions(request, headers, runtime);
  }

  /**
   * @summary Queries available regions.
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeRegionsResponse
   */
  async describeRegionsWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DescribeRegions",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/paas/regionConfig`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeRegionsResponse>(await this.callApi(params, req, runtime), new DescribeRegionsResponse({}));
  }

  /**
   * @summary Queries available regions.
   *
   * @return DescribeRegionsResponse
   */
  async describeRegions(): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeRegionsWithOptions(headers, runtime);
  }

  /**
   * @summary Queries the details of a Secret instance.
   *
   * @param request DescribeSecretRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeSecretResponse
   */
  async describeSecretWithOptions(request: DescribeSecretRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeSecretResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!Util.isUnset(request.secretId)) {
      query["SecretId"] = request.secretId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSecret",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/secret/secret`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeSecretResponse>(await this.callApi(params, req, runtime), new DescribeSecretResponse({}));
  }

  /**
   * @summary Queries the details of a Secret instance.
   *
   * @param request DescribeSecretRequest
   * @return DescribeSecretResponse
   */
  async describeSecret(request: DescribeSecretRequest): Promise<DescribeSecretResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeSecretWithOptions(request, headers, runtime);
  }

  /**
   * @summary 获取应用信息
   *
   * @param request DescribeWebApplicationRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeWebApplicationResponse
   */
  async describeWebApplicationWithOptions(ApplicationId: string, request: DescribeWebApplicationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeWebApplicationResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeWebApplication",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v2/api/web/applications/${OpenApiUtil.getEncodeParam(ApplicationId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeWebApplicationResponse>(await this.callApi(params, req, runtime), new DescribeWebApplicationResponse({}));
  }

  /**
   * @summary 获取应用信息
   *
   * @param request DescribeWebApplicationRequest
   * @return DescribeWebApplicationResponse
   */
  async describeWebApplication(ApplicationId: string, request: DescribeWebApplicationRequest): Promise<DescribeWebApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeWebApplicationWithOptions(ApplicationId, request, headers, runtime);
  }

  /**
   * @summary 应用资源用量统计
   *
   * @param request DescribeWebApplicationResourceStaticsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeWebApplicationResourceStaticsResponse
   */
  async describeWebApplicationResourceStaticsWithOptions(ApplicationId: string, request: DescribeWebApplicationResourceStaticsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeWebApplicationResourceStaticsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeWebApplicationResourceStatics",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v2/api/web/applications-observability/${OpenApiUtil.getEncodeParam(ApplicationId)}/resource`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeWebApplicationResourceStaticsResponse>(await this.callApi(params, req, runtime), new DescribeWebApplicationResourceStaticsResponse({}));
  }

  /**
   * @summary 应用资源用量统计
   *
   * @param request DescribeWebApplicationResourceStaticsRequest
   * @return DescribeWebApplicationResourceStaticsResponse
   */
  async describeWebApplicationResourceStatics(ApplicationId: string, request: DescribeWebApplicationResourceStaticsRequest): Promise<DescribeWebApplicationResourceStaticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeWebApplicationResourceStaticsWithOptions(ApplicationId, request, headers, runtime);
  }

  /**
   * @summary 获取应用版本
   *
   * @param request DescribeWebApplicationRevisionRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeWebApplicationRevisionResponse
   */
  async describeWebApplicationRevisionWithOptions(ApplicationId: string, RevisionId: string, request: DescribeWebApplicationRevisionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeWebApplicationRevisionResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeWebApplicationRevision",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v2/api/web/application-revisions/${OpenApiUtil.getEncodeParam(ApplicationId)}/revisions/${OpenApiUtil.getEncodeParam(RevisionId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeWebApplicationRevisionResponse>(await this.callApi(params, req, runtime), new DescribeWebApplicationRevisionResponse({}));
  }

  /**
   * @summary 获取应用版本
   *
   * @param request DescribeWebApplicationRevisionRequest
   * @return DescribeWebApplicationRevisionResponse
   */
  async describeWebApplicationRevision(ApplicationId: string, RevisionId: string, request: DescribeWebApplicationRevisionRequest): Promise<DescribeWebApplicationRevisionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeWebApplicationRevisionWithOptions(ApplicationId, RevisionId, request, headers, runtime);
  }

  /**
   * @summary 弹性配置详情
   *
   * @param request DescribeWebApplicationScalingConfigRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeWebApplicationScalingConfigResponse
   */
  async describeWebApplicationScalingConfigWithOptions(ApplicationId: string, request: DescribeWebApplicationScalingConfigRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeWebApplicationScalingConfigResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeWebApplicationScalingConfig",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v2/api/web/application-scaling/${OpenApiUtil.getEncodeParam(ApplicationId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeWebApplicationScalingConfigResponse>(await this.callApi(params, req, runtime), new DescribeWebApplicationScalingConfigResponse({}));
  }

  /**
   * @summary 弹性配置详情
   *
   * @param request DescribeWebApplicationScalingConfigRequest
   * @return DescribeWebApplicationScalingConfigResponse
   */
  async describeWebApplicationScalingConfig(ApplicationId: string, request: DescribeWebApplicationScalingConfigRequest): Promise<DescribeWebApplicationScalingConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeWebApplicationScalingConfigWithOptions(ApplicationId, request, headers, runtime);
  }

  /**
   * @summary 流量配置详情
   *
   * @param request DescribeWebApplicationTrafficConfigRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeWebApplicationTrafficConfigResponse
   */
  async describeWebApplicationTrafficConfigWithOptions(ApplicationId: string, request: DescribeWebApplicationTrafficConfigRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeWebApplicationTrafficConfigResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeWebApplicationTrafficConfig",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v2/api/web/application-traffic/${OpenApiUtil.getEncodeParam(ApplicationId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeWebApplicationTrafficConfigResponse>(await this.callApi(params, req, runtime), new DescribeWebApplicationTrafficConfigResponse({}));
  }

  /**
   * @summary 流量配置详情
   *
   * @param request DescribeWebApplicationTrafficConfigRequest
   * @return DescribeWebApplicationTrafficConfigResponse
   */
  async describeWebApplicationTrafficConfig(ApplicationId: string, request: DescribeWebApplicationTrafficConfigRequest): Promise<DescribeWebApplicationTrafficConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeWebApplicationTrafficConfigWithOptions(ApplicationId, request, headers, runtime);
  }

  /**
   * @summary 获取域名.
   *
   * @param request DescribeWebCustomDomainRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeWebCustomDomainResponse
   */
  async describeWebCustomDomainWithOptions(DomainName: string, request: DescribeWebCustomDomainRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeWebCustomDomainResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeWebCustomDomain",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v2/api/web/custom-domains/${OpenApiUtil.getEncodeParam(DomainName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeWebCustomDomainResponse>(await this.callApi(params, req, runtime), new DescribeWebCustomDomainResponse({}));
  }

  /**
   * @summary 获取域名.
   *
   * @param request DescribeWebCustomDomainRequest
   * @return DescribeWebCustomDomainResponse
   */
  async describeWebCustomDomain(DomainName: string, request: DescribeWebCustomDomainRequest): Promise<DescribeWebCustomDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeWebCustomDomainWithOptions(DomainName, request, headers, runtime);
  }

  /**
   * @summary 应用实例日志
   *
   * @param request DescribeWebInstanceLogsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeWebInstanceLogsResponse
   */
  async describeWebInstanceLogsWithOptions(ApplicationId: string, InstanceId: string, request: DescribeWebInstanceLogsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeWebInstanceLogsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeWebInstanceLogs",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v2/api/web/applications-observability/${OpenApiUtil.getEncodeParam(ApplicationId)}/instances/${OpenApiUtil.getEncodeParam(InstanceId)}/logs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeWebInstanceLogsResponse>(await this.callApi(params, req, runtime), new DescribeWebInstanceLogsResponse({}));
  }

  /**
   * @summary 应用实例日志
   *
   * @param request DescribeWebInstanceLogsRequest
   * @return DescribeWebInstanceLogsResponse
   */
  async describeWebInstanceLogs(ApplicationId: string, InstanceId: string, request: DescribeWebInstanceLogsRequest): Promise<DescribeWebInstanceLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeWebInstanceLogsWithOptions(ApplicationId, InstanceId, request, headers, runtime);
  }

  /**
   * @param request DisableApplicationScalingRuleRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DisableApplicationScalingRuleResponse
   */
  async disableApplicationScalingRuleWithOptions(request: DisableApplicationScalingRuleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DisableApplicationScalingRuleResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.scalingRuleName)) {
      query["ScalingRuleName"] = request.scalingRuleName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DisableApplicationScalingRule",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/scale/disableApplicationScalingRule`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DisableApplicationScalingRuleResponse>(await this.callApi(params, req, runtime), new DisableApplicationScalingRuleResponse({}));
  }

  /**
   * @param request DisableApplicationScalingRuleRequest
   * @return DisableApplicationScalingRuleResponse
   */
  async disableApplicationScalingRule(request: DisableApplicationScalingRuleRequest): Promise<DisableApplicationScalingRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.disableApplicationScalingRuleWithOptions(request, headers, runtime);
  }

  /**
   * @summary Enables an auto scaling policy for an application.
   *
   * @param request EnableApplicationScalingRuleRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return EnableApplicationScalingRuleResponse
   */
  async enableApplicationScalingRuleWithOptions(request: EnableApplicationScalingRuleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<EnableApplicationScalingRuleResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.scalingRuleName)) {
      query["ScalingRuleName"] = request.scalingRuleName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EnableApplicationScalingRule",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/scale/enableApplicationScalingRule`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<EnableApplicationScalingRuleResponse>(await this.callApi(params, req, runtime), new EnableApplicationScalingRuleResponse({}));
  }

  /**
   * @summary Enables an auto scaling policy for an application.
   *
   * @param request EnableApplicationScalingRuleRequest
   * @return EnableApplicationScalingRuleResponse
   */
  async enableApplicationScalingRule(request: EnableApplicationScalingRuleRequest): Promise<EnableApplicationScalingRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.enableApplicationScalingRuleWithOptions(request, headers, runtime);
  }

  /**
   * @param request ExecJobRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ExecJobResponse
   */
  async execJobWithOptions(request: ExecJobRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ExecJobResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.command)) {
      query["Command"] = request.command;
    }

    if (!Util.isUnset(request.commandArgs)) {
      query["CommandArgs"] = request.commandArgs;
    }

    if (!Util.isUnset(request.envs)) {
      query["Envs"] = request.envs;
    }

    if (!Util.isUnset(request.eventId)) {
      query["EventId"] = request.eventId;
    }

    if (!Util.isUnset(request.jarStartArgs)) {
      query["JarStartArgs"] = request.jarStartArgs;
    }

    if (!Util.isUnset(request.jarStartOptions)) {
      query["JarStartOptions"] = request.jarStartOptions;
    }

    if (!Util.isUnset(request.replicas)) {
      query["Replicas"] = request.replicas;
    }

    if (!Util.isUnset(request.time)) {
      query["Time"] = request.time;
    }

    if (!Util.isUnset(request.warStartOptions)) {
      query["WarStartOptions"] = request.warStartOptions;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ExecJob",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/job/execJob`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ExecJobResponse>(await this.callApi(params, req, runtime), new ExecJobResponse({}));
  }

  /**
   * @param request ExecJobRequest
   * @return ExecJobResponse
   */
  async execJob(request: ExecJobRequest): Promise<ExecJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.execJobWithOptions(request, headers, runtime);
  }

  /**
   * @summary Queries the top N applications in Application Monitoring.
   *
   * @param request GetArmsTopNMetricRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetArmsTopNMetricResponse
   */
  async getArmsTopNMetricWithOptions(request: GetArmsTopNMetricRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetArmsTopNMetricResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appSource)) {
      query["AppSource"] = request.appSource;
    }

    if (!Util.isUnset(request.cpuStrategy)) {
      query["CpuStrategy"] = request.cpuStrategy;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!Util.isUnset(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetArmsTopNMetric",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/getArmsTopNMetric`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetArmsTopNMetricResponse>(await this.callApi(params, req, runtime), new GetArmsTopNMetricResponse({}));
  }

  /**
   * @summary Queries the top N applications in Application Monitoring.
   *
   * @param request GetArmsTopNMetricRequest
   * @return GetArmsTopNMetricResponse
   */
  async getArmsTopNMetric(request: GetArmsTopNMetricRequest): Promise<GetArmsTopNMetricResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getArmsTopNMetricWithOptions(request, headers, runtime);
  }

  /**
   * @summary Queries the top N applications in which abnormal instances exist. The applications are sorted by the total number of abnormal instances.
   *
   * @param request GetAvailabilityMetricRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetAvailabilityMetricResponse
   */
  async getAvailabilityMetricWithOptions(request: GetAvailabilityMetricRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetAvailabilityMetricResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appSource)) {
      query["AppSource"] = request.appSource;
    }

    if (!Util.isUnset(request.cpuStrategy)) {
      query["CpuStrategy"] = request.cpuStrategy;
    }

    if (!Util.isUnset(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAvailabilityMetric",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/getAvailabilityMetric`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetAvailabilityMetricResponse>(await this.callApi(params, req, runtime), new GetAvailabilityMetricResponse({}));
  }

  /**
   * @summary Queries the top N applications in which abnormal instances exist. The applications are sorted by the total number of abnormal instances.
   *
   * @param request GetAvailabilityMetricRequest
   * @return GetAvailabilityMetricResponse
   */
  async getAvailabilityMetric(request: GetAvailabilityMetricRequest): Promise<GetAvailabilityMetricResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAvailabilityMetricWithOptions(request, headers, runtime);
  }

  /**
   * @summary Queries top N applications in abnormal change orders.
   *
   * @param request GetChangeOrderMetricRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetChangeOrderMetricResponse
   */
  async getChangeOrderMetricWithOptions(request: GetChangeOrderMetricRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetChangeOrderMetricResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appSource)) {
      query["AppSource"] = request.appSource;
    }

    if (!Util.isUnset(request.cpuStrategy)) {
      query["CpuStrategy"] = request.cpuStrategy;
    }

    if (!Util.isUnset(request.createTime)) {
      query["CreateTime"] = request.createTime;
    }

    if (!Util.isUnset(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!Util.isUnset(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetChangeOrderMetric",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/getChangeOrderMetric`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetChangeOrderMetricResponse>(await this.callApi(params, req, runtime), new GetChangeOrderMetricResponse({}));
  }

  /**
   * @summary Queries top N applications in abnormal change orders.
   *
   * @param request GetChangeOrderMetricRequest
   * @return GetChangeOrderMetricResponse
   */
  async getChangeOrderMetric(request: GetChangeOrderMetricRequest): Promise<GetChangeOrderMetricResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getChangeOrderMetricWithOptions(request, headers, runtime);
  }

  /**
   * @summary Queries the top N applications in which auto scaling takes effect.
   *
   * @param request GetScaleAppMetricRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetScaleAppMetricResponse
   */
  async getScaleAppMetricWithOptions(request: GetScaleAppMetricRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetScaleAppMetricResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appSource)) {
      query["AppSource"] = request.appSource;
    }

    if (!Util.isUnset(request.cpuStrategy)) {
      query["CpuStrategy"] = request.cpuStrategy;
    }

    if (!Util.isUnset(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetScaleAppMetric",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/getScaleAppMetric`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetScaleAppMetricResponse>(await this.callApi(params, req, runtime), new GetScaleAppMetricResponse({}));
  }

  /**
   * @summary Queries the top N applications in which auto scaling takes effect.
   *
   * @param request GetScaleAppMetricRequest
   * @return GetScaleAppMetricResponse
   */
  async getScaleAppMetric(request: GetScaleAppMetricRequest): Promise<GetScaleAppMetricResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getScaleAppMetricWithOptions(request, headers, runtime);
  }

  /**
   * @summary Queries the top N applications in which Warning events occur.
   *
   * @param request GetWarningEventMetricRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetWarningEventMetricResponse
   */
  async getWarningEventMetricWithOptions(request: GetWarningEventMetricRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetWarningEventMetricResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appSource)) {
      query["AppSource"] = request.appSource;
    }

    if (!Util.isUnset(request.cpuStrategy)) {
      query["CpuStrategy"] = request.cpuStrategy;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetWarningEventMetric",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/getWarningEventMetric`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetWarningEventMetricResponse>(await this.callApi(params, req, runtime), new GetWarningEventMetricResponse({}));
  }

  /**
   * @summary Queries the top N applications in which Warning events occur.
   *
   * @param request GetWarningEventMetricRequest
   * @return GetWarningEventMetricResponse
   */
  async getWarningEventMetric(request: GetWarningEventMetricRequest): Promise<GetWarningEventMetricResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getWarningEventMetricWithOptions(request, headers, runtime);
  }

  /**
   * @summary Queries the events that occurred in an application.
   *
   * @param request ListAppEventsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListAppEventsResponse
   */
  async listAppEventsWithOptions(request: ListAppEventsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListAppEventsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.eventType)) {
      query["EventType"] = request.eventType;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.objectKind)) {
      query["ObjectKind"] = request.objectKind;
    }

    if (!Util.isUnset(request.objectName)) {
      query["ObjectName"] = request.objectName;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.reason)) {
      query["Reason"] = request.reason;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAppEvents",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/app/listAppEvents`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListAppEventsResponse>(await this.callApi(params, req, runtime), new ListAppEventsResponse({}));
  }

  /**
   * @summary Queries the events that occurred in an application.
   *
   * @param request ListAppEventsRequest
   * @return ListAppEventsResponse
   */
  async listAppEvents(request: ListAppEventsRequest): Promise<ListAppEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAppEventsWithOptions(request, headers, runtime);
  }

  /**
   * @summary 6dcc8c9e-d3da-478a-a066-86dcf820\\*\\*\\*\\*
   *
   * @param request ListAppServicesPageRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListAppServicesPageResponse
   */
  async listAppServicesPageWithOptions(request: ListAppServicesPageRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListAppServicesPageResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.serviceType)) {
      query["ServiceType"] = request.serviceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAppServicesPage",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/service/listAppServicesPage`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListAppServicesPageResponse>(await this.callApi(params, req, runtime), new ListAppServicesPageResponse({}));
  }

  /**
   * @summary 6dcc8c9e-d3da-478a-a066-86dcf820\\*\\*\\*\\*
   *
   * @param request ListAppServicesPageRequest
   * @return ListAppServicesPageResponse
   */
  async listAppServicesPage(request: ListAppServicesPageRequest): Promise<ListAppServicesPageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAppServicesPageWithOptions(request, headers, runtime);
  }

  /**
   * @summary 7171a6ca-d1cd-4928-8642-7d5cfe69\\*\\*\\*\\*
   *
   * @param request ListAppVersionsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListAppVersionsResponse
   */
  async listAppVersionsWithOptions(request: ListAppVersionsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListAppVersionsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAppVersions",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/app/listAppVersions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListAppVersionsResponse>(await this.callApi(params, req, runtime), new ListAppVersionsResponse({}));
  }

  /**
   * @summary 7171a6ca-d1cd-4928-8642-7d5cfe69\\*\\*\\*\\*
   *
   * @param request ListAppVersionsRequest
   * @return ListAppVersionsResponse
   */
  async listAppVersions(request: ListAppVersionsRequest): Promise<ListAppVersionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAppVersionsWithOptions(request, headers, runtime);
  }

  /**
   * @summary The ID of the namespace.
   *
   * @param request ListApplicationsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListApplicationsResponse
   */
  async listApplicationsWithOptions(request: ListApplicationsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListApplicationsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.appSource)) {
      query["AppSource"] = request.appSource;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.fieldType)) {
      query["FieldType"] = request.fieldType;
    }

    if (!Util.isUnset(request.fieldValue)) {
      query["FieldValue"] = request.fieldValue;
    }

    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!Util.isUnset(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.reverse)) {
      query["Reverse"] = request.reverse;
    }

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListApplications",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/app/listApplications`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListApplicationsResponse>(await this.callApi(params, req, runtime), new ListApplicationsResponse({}));
  }

  /**
   * @summary The ID of the namespace.
   *
   * @param request ListApplicationsRequest
   * @return ListApplicationsResponse
   */
  async listApplications(request: ListApplicationsRequest): Promise<ListApplicationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listApplicationsWithOptions(request, headers, runtime);
  }

  /**
   * @param request ListChangeOrdersRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListChangeOrdersResponse
   */
  async listChangeOrdersWithOptions(request: ListChangeOrdersRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListChangeOrdersResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.coStatus)) {
      query["CoStatus"] = request.coStatus;
    }

    if (!Util.isUnset(request.coType)) {
      query["CoType"] = request.coType;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.key)) {
      query["Key"] = request.key;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListChangeOrders",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/changeorder/ListChangeOrders`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListChangeOrdersResponse>(await this.callApi(params, req, runtime), new ListChangeOrdersResponse({}));
  }

  /**
   * @param request ListChangeOrdersRequest
   * @return ListChangeOrdersResponse
   */
  async listChangeOrders(request: ListChangeOrdersRequest): Promise<ListChangeOrdersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listChangeOrdersWithOptions(request, headers, runtime);
  }

  /**
   * @summary b2a8a925-477a-4ed7-b825-d5e22500\\*\\*\\*\\*
   *
   * @param request ListConsumedServicesRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListConsumedServicesResponse
   */
  async listConsumedServicesWithOptions(request: ListConsumedServicesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListConsumedServicesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListConsumedServices",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/service/listConsumedServices`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListConsumedServicesResponse>(await this.callApi(params, req, runtime), new ListConsumedServicesResponse({}));
  }

  /**
   * @summary b2a8a925-477a-4ed7-b825-d5e22500\\*\\*\\*\\*
   *
   * @param request ListConsumedServicesRequest
   * @return ListConsumedServicesResponse
   */
  async listConsumedServices(request: ListConsumedServicesRequest): Promise<ListConsumedServicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listConsumedServicesWithOptions(request, headers, runtime);
  }

  /**
   * @summary Queries the details of a canary release rule based on an application ID.
   *
   * @description >  You can configure only one canary release rule for each application.
   *
   * @param request ListGreyTagRouteRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListGreyTagRouteResponse
   */
  async listGreyTagRouteWithOptions(request: ListGreyTagRouteRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListGreyTagRouteResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListGreyTagRoute",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/tagroute/greyTagRouteList`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListGreyTagRouteResponse>(await this.callApi(params, req, runtime), new ListGreyTagRouteResponse({}));
  }

  /**
   * @summary Queries the details of a canary release rule based on an application ID.
   *
   * @description >  You can configure only one canary release rule for each application.
   *
   * @param request ListGreyTagRouteRequest
   * @return ListGreyTagRouteResponse
   */
  async listGreyTagRoute(request: ListGreyTagRouteRequest): Promise<ListGreyTagRouteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listGreyTagRouteWithOptions(request, headers, runtime);
  }

  /**
   * @summary The returned message.
   * *   **success** is returned when the request succeeds.
   * *   An error code is returned when the request fails.
   *
   * @param request ListIngressesRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListIngressesResponse
   */
  async listIngressesWithOptions(request: ListIngressesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListIngressesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListIngresses",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/ingress/IngressList`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListIngressesResponse>(await this.callApi(params, req, runtime), new ListIngressesResponse({}));
  }

  /**
   * @summary The returned message.
   * *   **success** is returned when the request succeeds.
   * *   An error code is returned when the request fails.
   *
   * @param request ListIngressesRequest
   * @return ListIngressesResponse
   */
  async listIngresses(request: ListIngressesRequest): Promise<ListIngressesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listIngressesWithOptions(request, headers, runtime);
  }

  /**
   * @summary Queries the information about job templates.
   *
   * @param request ListJobsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListJobsResponse
   */
  async listJobsWithOptions(request: ListJobsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListJobsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.fieldType)) {
      query["FieldType"] = request.fieldType;
    }

    if (!Util.isUnset(request.fieldValue)) {
      query["FieldValue"] = request.fieldValue;
    }

    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!Util.isUnset(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.reverse)) {
      query["Reverse"] = request.reverse;
    }

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!Util.isUnset(request.workload)) {
      query["Workload"] = request.workload;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListJobs",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/job/listJobs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListJobsResponse>(await this.callApi(params, req, runtime), new ListJobsResponse({}));
  }

  /**
   * @summary Queries the information about job templates.
   *
   * @param request ListJobsRequest
   * @return ListJobsResponse
   */
  async listJobs(request: ListJobsRequest): Promise<ListJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listJobsWithOptions(request, headers, runtime);
  }

  /**
   * @summary 56f77b65-788d-442a-9885-7f20d91f\\*\\*\\*\\*
   *
   * @param request ListLogConfigsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListLogConfigsResponse
   */
  async listLogConfigsWithOptions(request: ListLogConfigsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListLogConfigsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListLogConfigs",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/log/listLogConfigs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListLogConfigsResponse>(await this.callApi(params, req, runtime), new ListLogConfigsResponse({}));
  }

  /**
   * @summary 56f77b65-788d-442a-9885-7f20d91f\\*\\*\\*\\*
   *
   * @param request ListLogConfigsRequest
   * @return ListLogConfigsResponse
   */
  async listLogConfigs(request: ListLogConfigsRequest): Promise<ListLogConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listLogConfigsWithOptions(request, headers, runtime);
  }

  /**
   * @param request ListNamespaceChangeOrdersRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListNamespaceChangeOrdersResponse
   */
  async listNamespaceChangeOrdersWithOptions(request: ListNamespaceChangeOrdersRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListNamespaceChangeOrdersResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.coStatus)) {
      query["CoStatus"] = request.coStatus;
    }

    if (!Util.isUnset(request.coType)) {
      query["CoType"] = request.coType;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.key)) {
      query["Key"] = request.key;
    }

    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListNamespaceChangeOrders",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/changeorder/listNamespaceChangeOrders`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListNamespaceChangeOrdersResponse>(await this.callApi(params, req, runtime), new ListNamespaceChangeOrdersResponse({}));
  }

  /**
   * @param request ListNamespaceChangeOrdersRequest
   * @return ListNamespaceChangeOrdersResponse
   */
  async listNamespaceChangeOrders(request: ListNamespaceChangeOrdersRequest): Promise<ListNamespaceChangeOrdersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listNamespaceChangeOrdersWithOptions(request, headers, runtime);
  }

  /**
   * @summary Queries the ConfigMap instances in a namespace.
   *
   * @param request ListNamespacedConfigMapsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListNamespacedConfigMapsResponse
   */
  async listNamespacedConfigMapsWithOptions(request: ListNamespacedConfigMapsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListNamespacedConfigMapsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListNamespacedConfigMaps",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/configmap/listNamespacedConfigMaps`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListNamespacedConfigMapsResponse>(await this.callApi(params, req, runtime), new ListNamespacedConfigMapsResponse({}));
  }

  /**
   * @summary Queries the ConfigMap instances in a namespace.
   *
   * @param request ListNamespacedConfigMapsRequest
   * @return ListNamespacedConfigMapsResponse
   */
  async listNamespacedConfigMaps(request: ListNamespacedConfigMapsRequest): Promise<ListNamespacedConfigMapsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listNamespacedConfigMapsWithOptions(request, headers, runtime);
  }

  /**
   * @summary b2a8a925-477a-4ed7-b825-d5e22500\\*\\*\\*\\*
   *
   * @param request ListPublishedServicesRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListPublishedServicesResponse
   */
  async listPublishedServicesWithOptions(request: ListPublishedServicesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListPublishedServicesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListPublishedServices",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/service/listPublishedServices`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListPublishedServicesResponse>(await this.callApi(params, req, runtime), new ListPublishedServicesResponse({}));
  }

  /**
   * @summary b2a8a925-477a-4ed7-b825-d5e22500\\*\\*\\*\\*
   *
   * @param request ListPublishedServicesRequest
   * @return ListPublishedServicesResponse
   */
  async listPublishedServices(request: ListPublishedServicesRequest): Promise<ListPublishedServicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPublishedServicesWithOptions(request, headers, runtime);
  }

  /**
   * @summary Queries the information about Secrets in a namespace.
   *
   * @param request ListSecretsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListSecretsResponse
   */
  async listSecretsWithOptions(request: ListSecretsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListSecretsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSecrets",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/secret/secrets`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListSecretsResponse>(await this.callApi(params, req, runtime), new ListSecretsResponse({}));
  }

  /**
   * @summary Queries the information about Secrets in a namespace.
   *
   * @param request ListSecretsRequest
   * @return ListSecretsResponse
   */
  async listSecrets(request: ListSecretsRequest): Promise<ListSecretsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSecretsWithOptions(request, headers, runtime);
  }

  /**
   * @summary Queries the mapping relationships between applications and tags.
   *
   * @param request ListTagResourcesRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: ListTagResourcesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceIds)) {
      query["ResourceIds"] = request.resourceIds;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTagResources",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/tags`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListTagResourcesResponse>(await this.callApi(params, req, runtime), new ListTagResourcesResponse({}));
  }

  /**
   * @summary Queries the mapping relationships between applications and tags.
   *
   * @param request ListTagResourcesRequest
   * @return ListTagResourcesResponse
   */
  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTagResourcesWithOptions(request, headers, runtime);
  }

  /**
   * @summary 应用实例列表
   *
   * @param tmpReq ListWebApplicationInstancesRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListWebApplicationInstancesResponse
   */
  async listWebApplicationInstancesWithOptions(ApplicationId: string, tmpReq: ListWebApplicationInstancesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListWebApplicationInstancesResponse> {
    Util.validateModel(tmpReq);
    let request = new ListWebApplicationInstancesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.instanceIds)) {
      request.instanceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceIds, "InstanceIds", "json");
    }

    if (!Util.isUnset(tmpReq.statuses)) {
      request.statusesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.statuses, "Statuses", "json");
    }

    if (!Util.isUnset(tmpReq.versionIds)) {
      request.versionIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.versionIds, "VersionIds", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceIdsShrink)) {
      query["InstanceIds"] = request.instanceIdsShrink;
    }

    if (!Util.isUnset(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.statusesShrink)) {
      query["Statuses"] = request.statusesShrink;
    }

    if (!Util.isUnset(request.versionIdsShrink)) {
      query["VersionIds"] = request.versionIdsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListWebApplicationInstances",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v2/api/web/applications-observability/${OpenApiUtil.getEncodeParam(ApplicationId)}/instances`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListWebApplicationInstancesResponse>(await this.callApi(params, req, runtime), new ListWebApplicationInstancesResponse({}));
  }

  /**
   * @summary 应用实例列表
   *
   * @param request ListWebApplicationInstancesRequest
   * @return ListWebApplicationInstancesResponse
   */
  async listWebApplicationInstances(ApplicationId: string, request: ListWebApplicationInstancesRequest): Promise<ListWebApplicationInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listWebApplicationInstancesWithOptions(ApplicationId, request, headers, runtime);
  }

  /**
   * @summary 版本列表
   *
   * @param request ListWebApplicationRevisionsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListWebApplicationRevisionsResponse
   */
  async listWebApplicationRevisionsWithOptions(ApplicationId: string, request: ListWebApplicationRevisionsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListWebApplicationRevisionsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListWebApplicationRevisions",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v2/api/web/application-revisions/${OpenApiUtil.getEncodeParam(ApplicationId)}/revisions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListWebApplicationRevisionsResponse>(await this.callApi(params, req, runtime), new ListWebApplicationRevisionsResponse({}));
  }

  /**
   * @summary 版本列表
   *
   * @param request ListWebApplicationRevisionsRequest
   * @return ListWebApplicationRevisionsResponse
   */
  async listWebApplicationRevisions(ApplicationId: string, request: ListWebApplicationRevisionsRequest): Promise<ListWebApplicationRevisionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listWebApplicationRevisionsWithOptions(ApplicationId, request, headers, runtime);
  }

  /**
   * @summary 应用列表
   *
   * @param request ListWebApplicationsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListWebApplicationsResponse
   */
  async listWebApplicationsWithOptions(request: ListWebApplicationsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListWebApplicationsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.prefix)) {
      query["Prefix"] = request.prefix;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListWebApplications",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v2/api/web/applications`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListWebApplicationsResponse>(await this.callApi(params, req, runtime), new ListWebApplicationsResponse({}));
  }

  /**
   * @summary 应用列表
   *
   * @param request ListWebApplicationsRequest
   * @return ListWebApplicationsResponse
   */
  async listWebApplications(request: ListWebApplicationsRequest): Promise<ListWebApplicationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listWebApplicationsWithOptions(request, headers, runtime);
  }

  /**
   * @summary 自定义域名列表.
   *
   * @param request ListWebCustomDomainsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListWebCustomDomainsResponse
   */
  async listWebCustomDomainsWithOptions(request: ListWebCustomDomainsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListWebCustomDomainsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!Util.isUnset(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.prefix)) {
      query["Prefix"] = request.prefix;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListWebCustomDomains",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v2/api/web/custom-domains`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListWebCustomDomainsResponse>(await this.callApi(params, req, runtime), new ListWebCustomDomainsResponse({}));
  }

  /**
   * @summary 自定义域名列表.
   *
   * @param request ListWebCustomDomainsRequest
   * @return ListWebCustomDomainsResponse
   */
  async listWebCustomDomains(request: ListWebCustomDomainsRequest): Promise<ListWebCustomDomainsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listWebCustomDomainsWithOptions(request, headers, runtime);
  }

  /**
   * @summary Activates the Serverless App Engine (SAE) service for free.
   *
   * @description > Make sure that your account balance is greater than 0. Otherwise, the SAE service cannot be activated.
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return OpenSaeServiceResponse
   */
  async openSaeServiceWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<OpenSaeServiceResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "OpenSaeService",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/service/open`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<OpenSaeServiceResponse>(await this.callApi(params, req, runtime), new OpenSaeServiceResponse({}));
  }

  /**
   * @summary Activates the Serverless App Engine (SAE) service for free.
   *
   * @description > Make sure that your account balance is greater than 0. Otherwise, the SAE service cannot be activated.
   *
   * @return OpenSaeServiceResponse
   */
  async openSaeService(): Promise<OpenSaeServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.openSaeServiceWithOptions(headers, runtime);
  }

  /**
   * @summary 新建版本
   *
   * @param request PublishWebApplicationRevisionRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return PublishWebApplicationRevisionResponse
   */
  async publishWebApplicationRevisionWithOptions(ApplicationId: string, request: PublishWebApplicationRevisionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PublishWebApplicationRevisionResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "PublishWebApplicationRevision",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v2/api/web/application-revisions/${OpenApiUtil.getEncodeParam(ApplicationId)}/revisions`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<PublishWebApplicationRevisionResponse>(await this.callApi(params, req, runtime), new PublishWebApplicationRevisionResponse({}));
  }

  /**
   * @summary 新建版本
   *
   * @param request PublishWebApplicationRevisionRequest
   * @return PublishWebApplicationRevisionResponse
   */
  async publishWebApplicationRevision(ApplicationId: string, request: PublishWebApplicationRevisionRequest): Promise<PublishWebApplicationRevisionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.publishWebApplicationRevisionWithOptions(ApplicationId, request, headers, runtime);
  }

  /**
   * @summary Queries the resource usage of an application.
   *
   * @param request QueryResourceStaticsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return QueryResourceStaticsResponse
   */
  async queryResourceStaticsWithOptions(request: QueryResourceStaticsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<QueryResourceStaticsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryResourceStatics",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/paas/quota/queryResourceStatics`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<QueryResourceStaticsResponse>(await this.callApi(params, req, runtime), new QueryResourceStaticsResponse({}));
  }

  /**
   * @summary Queries the resource usage of an application.
   *
   * @param request QueryResourceStaticsRequest
   * @return QueryResourceStaticsResponse
   */
  async queryResourceStatics(request: QueryResourceStaticsRequest): Promise<QueryResourceStaticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryResourceStaticsWithOptions(request, headers, runtime);
  }

  /**
   * @summary Reduces capacity by instance IDs.
   *
   * @param request ReduceApplicationCapacityByInstanceIdsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ReduceApplicationCapacityByInstanceIdsResponse
   */
  async reduceApplicationCapacityByInstanceIdsWithOptions(request: ReduceApplicationCapacityByInstanceIdsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ReduceApplicationCapacityByInstanceIdsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ReduceApplicationCapacityByInstanceIds",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/app/ScaleInApplicationWithInstanceIds`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ReduceApplicationCapacityByInstanceIdsResponse>(await this.callApi(params, req, runtime), new ReduceApplicationCapacityByInstanceIdsResponse({}));
  }

  /**
   * @summary Reduces capacity by instance IDs.
   *
   * @param request ReduceApplicationCapacityByInstanceIdsRequest
   * @return ReduceApplicationCapacityByInstanceIdsResponse
   */
  async reduceApplicationCapacityByInstanceIds(request: ReduceApplicationCapacityByInstanceIdsRequest): Promise<ReduceApplicationCapacityByInstanceIdsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.reduceApplicationCapacityByInstanceIdsWithOptions(request, headers, runtime);
  }

  /**
   * @summary Scales an application.
   *
   * @param request RescaleApplicationRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return RescaleApplicationResponse
   */
  async rescaleApplicationWithOptions(request: RescaleApplicationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RescaleApplicationResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.autoEnableApplicationScalingRule)) {
      query["AutoEnableApplicationScalingRule"] = request.autoEnableApplicationScalingRule;
    }

    if (!Util.isUnset(request.minReadyInstanceRatio)) {
      query["MinReadyInstanceRatio"] = request.minReadyInstanceRatio;
    }

    if (!Util.isUnset(request.minReadyInstances)) {
      query["MinReadyInstances"] = request.minReadyInstances;
    }

    if (!Util.isUnset(request.replicas)) {
      query["Replicas"] = request.replicas;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RescaleApplication",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/app/rescaleApplication`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RescaleApplicationResponse>(await this.callApi(params, req, runtime), new RescaleApplicationResponse({}));
  }

  /**
   * @summary Scales an application.
   *
   * @param request RescaleApplicationRequest
   * @return RescaleApplicationResponse
   */
  async rescaleApplication(request: RescaleApplicationRequest): Promise<RescaleApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.rescaleApplicationWithOptions(request, headers, runtime);
  }

  /**
   * @summary Changes the instance specifications of an application.
   *
   * @param request RescaleApplicationVerticallyRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return RescaleApplicationVerticallyResponse
   */
  async rescaleApplicationVerticallyWithOptions(request: RescaleApplicationVerticallyRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RescaleApplicationVerticallyResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.cpu)) {
      query["Cpu"] = request.cpu;
    }

    if (!Util.isUnset(request.memory)) {
      query["Memory"] = request.memory;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RescaleApplicationVertically",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/app/rescaleApplicationVertically`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RescaleApplicationVerticallyResponse>(await this.callApi(params, req, runtime), new RescaleApplicationVerticallyResponse({}));
  }

  /**
   * @summary Changes the instance specifications of an application.
   *
   * @param request RescaleApplicationVerticallyRequest
   * @return RescaleApplicationVerticallyResponse
   */
  async rescaleApplicationVertically(request: RescaleApplicationVerticallyRequest): Promise<RescaleApplicationVerticallyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.rescaleApplicationVerticallyWithOptions(request, headers, runtime);
  }

  /**
   * @summary Restarts an application.
   *
   * @param request RestartApplicationRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return RestartApplicationResponse
   */
  async restartApplicationWithOptions(request: RestartApplicationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RestartApplicationResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.autoEnableApplicationScalingRule)) {
      query["AutoEnableApplicationScalingRule"] = request.autoEnableApplicationScalingRule;
    }

    if (!Util.isUnset(request.minReadyInstanceRatio)) {
      query["MinReadyInstanceRatio"] = request.minReadyInstanceRatio;
    }

    if (!Util.isUnset(request.minReadyInstances)) {
      query["MinReadyInstances"] = request.minReadyInstances;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RestartApplication",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/app/restartApplication`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RestartApplicationResponse>(await this.callApi(params, req, runtime), new RestartApplicationResponse({}));
  }

  /**
   * @summary Restarts an application.
   *
   * @param request RestartApplicationRequest
   * @return RestartApplicationResponse
   */
  async restartApplication(request: RestartApplicationRequest): Promise<RestartApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.restartApplicationWithOptions(request, headers, runtime);
  }

  /**
   * @summary Restarts one or more instances in an application.
   *
   * @param request RestartInstancesRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return RestartInstancesResponse
   */
  async restartInstancesWithOptions(request: RestartInstancesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RestartInstancesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RestartInstances",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/app/restartInstances`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RestartInstancesResponse>(await this.callApi(params, req, runtime), new RestartInstancesResponse({}));
  }

  /**
   * @summary Restarts one or more instances in an application.
   *
   * @param request RestartInstancesRequest
   * @return RestartInstancesResponse
   */
  async restartInstances(request: RestartInstancesRequest): Promise<RestartInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.restartInstancesWithOptions(request, headers, runtime);
  }

  /**
   * @summary Rolls back an application.
   *
   * @param request RollbackApplicationRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return RollbackApplicationResponse
   */
  async rollbackApplicationWithOptions(request: RollbackApplicationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RollbackApplicationResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.autoEnableApplicationScalingRule)) {
      query["AutoEnableApplicationScalingRule"] = request.autoEnableApplicationScalingRule;
    }

    if (!Util.isUnset(request.batchWaitTime)) {
      query["BatchWaitTime"] = request.batchWaitTime;
    }

    if (!Util.isUnset(request.minReadyInstanceRatio)) {
      query["MinReadyInstanceRatio"] = request.minReadyInstanceRatio;
    }

    if (!Util.isUnset(request.minReadyInstances)) {
      query["MinReadyInstances"] = request.minReadyInstances;
    }

    if (!Util.isUnset(request.updateStrategy)) {
      query["UpdateStrategy"] = request.updateStrategy;
    }

    if (!Util.isUnset(request.versionId)) {
      query["VersionId"] = request.versionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RollbackApplication",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/app/rollbackApplication`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RollbackApplicationResponse>(await this.callApi(params, req, runtime), new RollbackApplicationResponse({}));
  }

  /**
   * @summary Rolls back an application.
   *
   * @param request RollbackApplicationRequest
   * @return RollbackApplicationResponse
   */
  async rollbackApplication(request: RollbackApplicationRequest): Promise<RollbackApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.rollbackApplicationWithOptions(request, headers, runtime);
  }

  /**
   * @summary Starts an application.
   *
   * @param request StartApplicationRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return StartApplicationResponse
   */
  async startApplicationWithOptions(request: StartApplicationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StartApplicationResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StartApplication",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/app/startApplication`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<StartApplicationResponse>(await this.callApi(params, req, runtime), new StartApplicationResponse({}));
  }

  /**
   * @summary Starts an application.
   *
   * @param request StartApplicationRequest
   * @return StartApplicationResponse
   */
  async startApplication(request: StartApplicationRequest): Promise<StartApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startApplicationWithOptions(request, headers, runtime);
  }

  /**
   * @summary 启动应用
   *
   * @param request StartWebApplicationRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return StartWebApplicationResponse
   */
  async startWebApplicationWithOptions(ApplicationId: string, request: StartWebApplicationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StartWebApplicationResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StartWebApplication",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v2/api/web/application-ops/${OpenApiUtil.getEncodeParam(ApplicationId)}/start`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<StartWebApplicationResponse>(await this.callApi(params, req, runtime), new StartWebApplicationResponse({}));
  }

  /**
   * @summary 启动应用
   *
   * @param request StartWebApplicationRequest
   * @return StartWebApplicationResponse
   */
  async startWebApplication(ApplicationId: string, request: StartWebApplicationRequest): Promise<StartWebApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startWebApplicationWithOptions(ApplicationId, request, headers, runtime);
  }

  /**
   * @summary 0099b7be-5f5b-4512-a7fc-56049ef1\\*\\*\\*\\*
   *
   * @param request StopApplicationRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return StopApplicationResponse
   */
  async stopApplicationWithOptions(request: StopApplicationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StopApplicationResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StopApplication",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/app/stopApplication`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<StopApplicationResponse>(await this.callApi(params, req, runtime), new StopApplicationResponse({}));
  }

  /**
   * @summary 0099b7be-5f5b-4512-a7fc-56049ef1\\*\\*\\*\\*
   *
   * @param request StopApplicationRequest
   * @return StopApplicationResponse
   */
  async stopApplication(request: StopApplicationRequest): Promise<StopApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopApplicationWithOptions(request, headers, runtime);
  }

  /**
   * @summary 停止应用
   *
   * @param request StopWebApplicationRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return StopWebApplicationResponse
   */
  async stopWebApplicationWithOptions(ApplicationId: string, request: StopWebApplicationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StopWebApplicationResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StopWebApplication",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v2/api/web/application-ops/${OpenApiUtil.getEncodeParam(ApplicationId)}/stop`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<StopWebApplicationResponse>(await this.callApi(params, req, runtime), new StopWebApplicationResponse({}));
  }

  /**
   * @summary 停止应用
   *
   * @param request StopWebApplicationRequest
   * @return StopWebApplicationResponse
   */
  async stopWebApplication(ApplicationId: string, request: StopWebApplicationRequest): Promise<StopWebApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopWebApplicationWithOptions(ApplicationId, request, headers, runtime);
  }

  /**
   * @summary Suspends a job.
   *
   * @param request SuspendJobRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return SuspendJobResponse
   */
  async suspendJobWithOptions(request: SuspendJobRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<SuspendJobResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.suspend)) {
      query["Suspend"] = request.suspend;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SuspendJob",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/job/suspendJob`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<SuspendJobResponse>(await this.callApi(params, req, runtime), new SuspendJobResponse({}));
  }

  /**
   * @summary Suspends a job.
   *
   * @param request SuspendJobRequest
   * @return SuspendJobResponse
   */
  async suspendJob(request: SuspendJobRequest): Promise<SuspendJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.suspendJobWithOptions(request, headers, runtime);
  }

  /**
   * @summary cn-beijing
   *
   * @param request TagResourcesRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return TagResourcesResponse
   */
  async tagResourcesWithOptions(request: TagResourcesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceIds)) {
      body["ResourceIds"] = request.resourceIds;
    }

    if (!Util.isUnset(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tags)) {
      body["Tags"] = request.tags;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "TagResources",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/tags`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TagResourcesResponse>(await this.callApi(params, req, runtime), new TagResourcesResponse({}));
  }

  /**
   * @summary cn-beijing
   *
   * @param request TagResourcesRequest
   * @return TagResourcesResponse
   */
  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.tagResourcesWithOptions(request, headers, runtime);
  }

  /**
   * @summary 0099b7be-5f5b-4512-a7fc-56049ef1\\*\\*\\*\\*
   *
   * @param request UnbindSlbRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return UnbindSlbResponse
   */
  async unbindSlbWithOptions(request: UnbindSlbRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UnbindSlbResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.internet)) {
      query["Internet"] = request.internet;
    }

    if (!Util.isUnset(request.intranet)) {
      query["Intranet"] = request.intranet;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UnbindSlb",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/app/slb`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UnbindSlbResponse>(await this.callApi(params, req, runtime), new UnbindSlbResponse({}));
  }

  /**
   * @summary 0099b7be-5f5b-4512-a7fc-56049ef1\\*\\*\\*\\*
   *
   * @param request UnbindSlbRequest
   * @return UnbindSlbResponse
   */
  async unbindSlb(request: UnbindSlbRequest): Promise<UnbindSlbResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.unbindSlbWithOptions(request, headers, runtime);
  }

  /**
   * @param request UntagResourcesRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return UntagResourcesResponse
   */
  async untagResourcesWithOptions(request: UntagResourcesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deleteAll)) {
      query["DeleteAll"] = request.deleteAll;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceIds)) {
      query["ResourceIds"] = request.resourceIds;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tagKeys)) {
      query["TagKeys"] = request.tagKeys;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UntagResources",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/tags`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UntagResourcesResponse>(await this.callApi(params, req, runtime), new UntagResourcesResponse({}));
  }

  /**
   * @param request UntagResourcesRequest
   * @return UntagResourcesResponse
   */
  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.untagResourcesWithOptions(request, headers, runtime);
  }

  /**
   * @summary 017f39b8-dfa4-4e16-a84b-1dcee4b1\\*\\*\\*\\*
   *
   * @param request UpdateAppSecurityGroupRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateAppSecurityGroupResponse
   */
  async updateAppSecurityGroupWithOptions(request: UpdateAppSecurityGroupRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateAppSecurityGroupResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAppSecurityGroup",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/app/updateAppSecurityGroup`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateAppSecurityGroupResponse>(await this.callApi(params, req, runtime), new UpdateAppSecurityGroupResponse({}));
  }

  /**
   * @summary 017f39b8-dfa4-4e16-a84b-1dcee4b1\\*\\*\\*\\*
   *
   * @param request UpdateAppSecurityGroupRequest
   * @return UpdateAppSecurityGroupResponse
   */
  async updateAppSecurityGroup(request: UpdateAppSecurityGroupRequest): Promise<UpdateAppSecurityGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateAppSecurityGroupWithOptions(request, headers, runtime);
  }

  /**
   * @summary 更新应用描述信息
   *
   * @param request UpdateApplicationDescriptionRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateApplicationDescriptionResponse
   */
  async updateApplicationDescriptionWithOptions(request: UpdateApplicationDescriptionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateApplicationDescriptionResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appDescription)) {
      query["AppDescription"] = request.appDescription;
    }

    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateApplicationDescription",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/app/updateAppDescription`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateApplicationDescriptionResponse>(await this.callApi(params, req, runtime), new UpdateApplicationDescriptionResponse({}));
  }

  /**
   * @summary 更新应用描述信息
   *
   * @param request UpdateApplicationDescriptionRequest
   * @return UpdateApplicationDescriptionResponse
   */
  async updateApplicationDescription(request: UpdateApplicationDescriptionRequest): Promise<UpdateApplicationDescriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateApplicationDescriptionWithOptions(request, headers, runtime);
  }

  /**
   * @summary Updates the auto scaling policy of an application.
   *
   * @description ##
   * If you want to configure more than 50 instances for an application, you must submit a [ticket](https://workorder.console.aliyun.com/#/ticket/createIndex) to add your account to the whitelist.
   *
   * @param request UpdateApplicationScalingRuleRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateApplicationScalingRuleResponse
   */
  async updateApplicationScalingRuleWithOptions(request: UpdateApplicationScalingRuleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateApplicationScalingRuleResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.minReadyInstanceRatio)) {
      query["MinReadyInstanceRatio"] = request.minReadyInstanceRatio;
    }

    if (!Util.isUnset(request.minReadyInstances)) {
      query["MinReadyInstances"] = request.minReadyInstances;
    }

    if (!Util.isUnset(request.scalingRuleMetric)) {
      query["ScalingRuleMetric"] = request.scalingRuleMetric;
    }

    if (!Util.isUnset(request.scalingRuleName)) {
      query["ScalingRuleName"] = request.scalingRuleName;
    }

    if (!Util.isUnset(request.scalingRuleTimer)) {
      query["ScalingRuleTimer"] = request.scalingRuleTimer;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateApplicationScalingRule",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/scale/applicationScalingRule`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateApplicationScalingRuleResponse>(await this.callApi(params, req, runtime), new UpdateApplicationScalingRuleResponse({}));
  }

  /**
   * @summary Updates the auto scaling policy of an application.
   *
   * @description ##
   * If you want to configure more than 50 instances for an application, you must submit a [ticket](https://workorder.console.aliyun.com/#/ticket/createIndex) to add your account to the whitelist.
   *
   * @param request UpdateApplicationScalingRuleRequest
   * @return UpdateApplicationScalingRuleResponse
   */
  async updateApplicationScalingRule(request: UpdateApplicationScalingRuleRequest): Promise<UpdateApplicationScalingRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateApplicationScalingRuleWithOptions(request, headers, runtime);
  }

  /**
   * @param request UpdateApplicationVswitchesRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateApplicationVswitchesResponse
   */
  async updateApplicationVswitchesWithOptions(request: UpdateApplicationVswitchesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateApplicationVswitchesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateApplicationVswitches",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/app/updateAppVswitches`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateApplicationVswitchesResponse>(await this.callApi(params, req, runtime), new UpdateApplicationVswitchesResponse({}));
  }

  /**
   * @param request UpdateApplicationVswitchesRequest
   * @return UpdateApplicationVswitchesResponse
   */
  async updateApplicationVswitches(request: UpdateApplicationVswitchesRequest): Promise<UpdateApplicationVswitchesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateApplicationVswitchesWithOptions(request, headers, runtime);
  }

  /**
   * @summary 1
   *
   * @param request UpdateConfigMapRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateConfigMapResponse
   */
  async updateConfigMapWithOptions(request: UpdateConfigMapRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateConfigMapResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.configMapId)) {
      query["ConfigMapId"] = request.configMapId;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.data)) {
      body["Data"] = request.data;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateConfigMap",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/configmap/configMap`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateConfigMapResponse>(await this.callApi(params, req, runtime), new UpdateConfigMapResponse({}));
  }

  /**
   * @summary 1
   *
   * @param request UpdateConfigMapRequest
   * @return UpdateConfigMapResponse
   */
  async updateConfigMap(request: UpdateConfigMapRequest): Promise<UpdateConfigMapResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateConfigMapWithOptions(request, headers, runtime);
  }

  /**
   * @summary Updates a canary release rule.
   *
   * @param request UpdateGreyTagRouteRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateGreyTagRouteResponse
   */
  async updateGreyTagRouteWithOptions(request: UpdateGreyTagRouteRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateGreyTagRouteResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.albRules)) {
      query["AlbRules"] = request.albRules;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.dubboRules)) {
      query["DubboRules"] = request.dubboRules;
    }

    if (!Util.isUnset(request.greyTagRouteId)) {
      query["GreyTagRouteId"] = request.greyTagRouteId;
    }

    if (!Util.isUnset(request.scRules)) {
      query["ScRules"] = request.scRules;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateGreyTagRoute",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/tagroute/greyTagRoute`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateGreyTagRouteResponse>(await this.callApi(params, req, runtime), new UpdateGreyTagRouteResponse({}));
  }

  /**
   * @summary Updates a canary release rule.
   *
   * @param request UpdateGreyTagRouteRequest
   * @return UpdateGreyTagRouteResponse
   */
  async updateGreyTagRoute(request: UpdateGreyTagRouteRequest): Promise<UpdateGreyTagRouteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateGreyTagRouteWithOptions(request, headers, runtime);
  }

  /**
   * @param request UpdateIngressRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateIngressResponse
   */
  async updateIngressWithOptions(request: UpdateIngressRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateIngressResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.certId)) {
      query["CertId"] = request.certId;
    }

    if (!Util.isUnset(request.certIds)) {
      query["CertIds"] = request.certIds;
    }

    if (!Util.isUnset(request.defaultRule)) {
      query["DefaultRule"] = request.defaultRule;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.ingressId)) {
      query["IngressId"] = request.ingressId;
    }

    if (!Util.isUnset(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!Util.isUnset(request.listenerProtocol)) {
      query["ListenerProtocol"] = request.listenerProtocol;
    }

    if (!Util.isUnset(request.loadBalanceType)) {
      query["LoadBalanceType"] = request.loadBalanceType;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.rules)) {
      body["Rules"] = request.rules;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateIngress",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/ingress/Ingress`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateIngressResponse>(await this.callApi(params, req, runtime), new UpdateIngressResponse({}));
  }

  /**
   * @param request UpdateIngressRequest
   * @return UpdateIngressResponse
   */
  async updateIngress(request: UpdateIngressRequest): Promise<UpdateIngressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateIngressWithOptions(request, headers, runtime);
  }

  /**
   * @summary Updates a job template.
   *
   * @param request UpdateJobRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateJobResponse
   */
  async updateJobWithOptions(request: UpdateJobRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateJobResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.acrAssumeRoleArn)) {
      query["AcrAssumeRoleArn"] = request.acrAssumeRoleArn;
    }

    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.backoffLimit)) {
      query["BackoffLimit"] = request.backoffLimit;
    }

    if (!Util.isUnset(request.command)) {
      query["Command"] = request.command;
    }

    if (!Util.isUnset(request.commandArgs)) {
      query["CommandArgs"] = request.commandArgs;
    }

    if (!Util.isUnset(request.concurrencyPolicy)) {
      query["ConcurrencyPolicy"] = request.concurrencyPolicy;
    }

    if (!Util.isUnset(request.customHostAlias)) {
      query["CustomHostAlias"] = request.customHostAlias;
    }

    if (!Util.isUnset(request.edasContainerVersion)) {
      query["EdasContainerVersion"] = request.edasContainerVersion;
    }

    if (!Util.isUnset(request.envs)) {
      query["Envs"] = request.envs;
    }

    if (!Util.isUnset(request.imagePullSecrets)) {
      query["ImagePullSecrets"] = request.imagePullSecrets;
    }

    if (!Util.isUnset(request.imageUrl)) {
      query["ImageUrl"] = request.imageUrl;
    }

    if (!Util.isUnset(request.jarStartArgs)) {
      query["JarStartArgs"] = request.jarStartArgs;
    }

    if (!Util.isUnset(request.jarStartOptions)) {
      query["JarStartOptions"] = request.jarStartOptions;
    }

    if (!Util.isUnset(request.jdk)) {
      query["Jdk"] = request.jdk;
    }

    if (!Util.isUnset(request.mountDesc)) {
      query["MountDesc"] = request.mountDesc;
    }

    if (!Util.isUnset(request.mountHost)) {
      query["MountHost"] = request.mountHost;
    }

    if (!Util.isUnset(request.nasId)) {
      query["NasId"] = request.nasId;
    }

    if (!Util.isUnset(request.packageUrl)) {
      query["PackageUrl"] = request.packageUrl;
    }

    if (!Util.isUnset(request.packageVersion)) {
      query["PackageVersion"] = request.packageVersion;
    }

    if (!Util.isUnset(request.phpConfigLocation)) {
      query["PhpConfigLocation"] = request.phpConfigLocation;
    }

    if (!Util.isUnset(request.postStart)) {
      query["PostStart"] = request.postStart;
    }

    if (!Util.isUnset(request.preStop)) {
      query["PreStop"] = request.preStop;
    }

    if (!Util.isUnset(request.programmingLanguage)) {
      query["ProgrammingLanguage"] = request.programmingLanguage;
    }

    if (!Util.isUnset(request.python)) {
      query["Python"] = request.python;
    }

    if (!Util.isUnset(request.pythonModules)) {
      query["PythonModules"] = request.pythonModules;
    }

    if (!Util.isUnset(request.refAppId)) {
      query["RefAppId"] = request.refAppId;
    }

    if (!Util.isUnset(request.replicas)) {
      query["Replicas"] = request.replicas;
    }

    if (!Util.isUnset(request.slice)) {
      query["Slice"] = request.slice;
    }

    if (!Util.isUnset(request.sliceEnvs)) {
      query["SliceEnvs"] = request.sliceEnvs;
    }

    if (!Util.isUnset(request.slsConfigs)) {
      query["SlsConfigs"] = request.slsConfigs;
    }

    if (!Util.isUnset(request.terminationGracePeriodSeconds)) {
      query["TerminationGracePeriodSeconds"] = request.terminationGracePeriodSeconds;
    }

    if (!Util.isUnset(request.timeout)) {
      query["Timeout"] = request.timeout;
    }

    if (!Util.isUnset(request.timezone)) {
      query["Timezone"] = request.timezone;
    }

    if (!Util.isUnset(request.tomcatConfig)) {
      query["TomcatConfig"] = request.tomcatConfig;
    }

    if (!Util.isUnset(request.triggerConfig)) {
      query["TriggerConfig"] = request.triggerConfig;
    }

    if (!Util.isUnset(request.warStartOptions)) {
      query["WarStartOptions"] = request.warStartOptions;
    }

    if (!Util.isUnset(request.webContainer)) {
      query["WebContainer"] = request.webContainer;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.acrInstanceId)) {
      body["AcrInstanceId"] = request.acrInstanceId;
    }

    if (!Util.isUnset(request.configMapMountDesc)) {
      body["ConfigMapMountDesc"] = request.configMapMountDesc;
    }

    if (!Util.isUnset(request.enableImageAccl)) {
      body["EnableImageAccl"] = request.enableImageAccl;
    }

    if (!Util.isUnset(request.ossAkId)) {
      body["OssAkId"] = request.ossAkId;
    }

    if (!Util.isUnset(request.ossAkSecret)) {
      body["OssAkSecret"] = request.ossAkSecret;
    }

    if (!Util.isUnset(request.ossMountDescs)) {
      body["OssMountDescs"] = request.ossMountDescs;
    }

    if (!Util.isUnset(request.php)) {
      body["Php"] = request.php;
    }

    if (!Util.isUnset(request.phpConfig)) {
      body["PhpConfig"] = request.phpConfig;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateJob",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/job/updateJob`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateJobResponse>(await this.callApi(params, req, runtime), new UpdateJobResponse({}));
  }

  /**
   * @summary Updates a job template.
   *
   * @param request UpdateJobRequest
   * @return UpdateJobResponse
   */
  async updateJob(request: UpdateJobRequest): Promise<UpdateJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateJobWithOptions(request, headers, runtime);
  }

  /**
   * @summary Updates the information about a namespace.
   *
   * @param request UpdateNamespaceRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateNamespaceResponse
   */
  async updateNamespaceWithOptions(request: UpdateNamespaceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateNamespaceResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.enableMicroRegistration)) {
      query["EnableMicroRegistration"] = request.enableMicroRegistration;
    }

    if (!Util.isUnset(request.nameSpaceShortId)) {
      query["NameSpaceShortId"] = request.nameSpaceShortId;
    }

    if (!Util.isUnset(request.namespaceDescription)) {
      query["NamespaceDescription"] = request.namespaceDescription;
    }

    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!Util.isUnset(request.namespaceName)) {
      query["NamespaceName"] = request.namespaceName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateNamespace",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/paas/namespace`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateNamespaceResponse>(await this.callApi(params, req, runtime), new UpdateNamespaceResponse({}));
  }

  /**
   * @summary Updates the information about a namespace.
   *
   * @param request UpdateNamespaceRequest
   * @return UpdateNamespaceResponse
   */
  async updateNamespace(request: UpdateNamespaceRequest): Promise<UpdateNamespaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateNamespaceWithOptions(request, headers, runtime);
  }

  /**
   * @summary cn-beijing:test
   *
   * @param request UpdateNamespaceVpcRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateNamespaceVpcResponse
   */
  async updateNamespaceVpcWithOptions(request: UpdateNamespaceVpcRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateNamespaceVpcResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.nameSpaceShortId)) {
      query["NameSpaceShortId"] = request.nameSpaceShortId;
    }

    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateNamespaceVpc",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/namespace/updateNamespaceVpc`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateNamespaceVpcResponse>(await this.callApi(params, req, runtime), new UpdateNamespaceVpcResponse({}));
  }

  /**
   * @summary cn-beijing:test
   *
   * @param request UpdateNamespaceVpcRequest
   * @return UpdateNamespaceVpcResponse
   */
  async updateNamespaceVpc(request: UpdateNamespaceVpcRequest): Promise<UpdateNamespaceVpcResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateNamespaceVpcWithOptions(request, headers, runtime);
  }

  /**
   * @summary The HTTP status code. Valid values:
   * *   **2xx**: The call was successful.
   * *   **3xx**: The call was redirected.
   * *   **4xx**: The call failed.
   * *   **5xx**: A server error occurred.
   *
   * @param tmpReq UpdateSecretRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateSecretResponse
   */
  async updateSecretWithOptions(tmpReq: UpdateSecretRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateSecretResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateSecretShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.secretData)) {
      request.secretDataShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.secretData, "SecretData", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!Util.isUnset(request.secretDataShrink)) {
      query["SecretData"] = request.secretDataShrink;
    }

    if (!Util.isUnset(request.secretId)) {
      query["SecretId"] = request.secretId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateSecret",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/secret/secret`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateSecretResponse>(await this.callApi(params, req, runtime), new UpdateSecretResponse({}));
  }

  /**
   * @summary The HTTP status code. Valid values:
   * *   **2xx**: The call was successful.
   * *   **3xx**: The call was redirected.
   * *   **4xx**: The call failed.
   * *   **5xx**: A server error occurred.
   *
   * @param request UpdateSecretRequest
   * @return UpdateSecretResponse
   */
  async updateSecret(request: UpdateSecretRequest): Promise<UpdateSecretResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateSecretWithOptions(request, headers, runtime);
  }

  /**
   * @summary 更新应用
   *
   * @param request UpdateWebApplicationRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateWebApplicationResponse
   */
  async updateWebApplicationWithOptions(ApplicationId: string, request: UpdateWebApplicationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateWebApplicationResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateWebApplication",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v2/api/web/applications/${OpenApiUtil.getEncodeParam(ApplicationId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateWebApplicationResponse>(await this.callApi(params, req, runtime), new UpdateWebApplicationResponse({}));
  }

  /**
   * @summary 更新应用
   *
   * @param request UpdateWebApplicationRequest
   * @return UpdateWebApplicationResponse
   */
  async updateWebApplication(ApplicationId: string, request: UpdateWebApplicationRequest): Promise<UpdateWebApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateWebApplicationWithOptions(ApplicationId, request, headers, runtime);
  }

  /**
   * @summary 更新弹性配置
   *
   * @param request UpdateWebApplicationScalingConfigRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateWebApplicationScalingConfigResponse
   */
  async updateWebApplicationScalingConfigWithOptions(ApplicationId: string, request: UpdateWebApplicationScalingConfigRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateWebApplicationScalingConfigResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateWebApplicationScalingConfig",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v2/api/web/application-scaling/${OpenApiUtil.getEncodeParam(ApplicationId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateWebApplicationScalingConfigResponse>(await this.callApi(params, req, runtime), new UpdateWebApplicationScalingConfigResponse({}));
  }

  /**
   * @summary 更新弹性配置
   *
   * @param request UpdateWebApplicationScalingConfigRequest
   * @return UpdateWebApplicationScalingConfigResponse
   */
  async updateWebApplicationScalingConfig(ApplicationId: string, request: UpdateWebApplicationScalingConfigRequest): Promise<UpdateWebApplicationScalingConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateWebApplicationScalingConfigWithOptions(ApplicationId, request, headers, runtime);
  }

  /**
   * @summary 更新流量配置
   *
   * @param request UpdateWebApplicationTrafficConfigRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateWebApplicationTrafficConfigResponse
   */
  async updateWebApplicationTrafficConfigWithOptions(ApplicationId: string, request: UpdateWebApplicationTrafficConfigRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateWebApplicationTrafficConfigResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateWebApplicationTrafficConfig",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v2/api/web/application-traffic/${OpenApiUtil.getEncodeParam(ApplicationId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateWebApplicationTrafficConfigResponse>(await this.callApi(params, req, runtime), new UpdateWebApplicationTrafficConfigResponse({}));
  }

  /**
   * @summary 更新流量配置
   *
   * @param request UpdateWebApplicationTrafficConfigRequest
   * @return UpdateWebApplicationTrafficConfigResponse
   */
  async updateWebApplicationTrafficConfig(ApplicationId: string, request: UpdateWebApplicationTrafficConfigRequest): Promise<UpdateWebApplicationTrafficConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateWebApplicationTrafficConfigWithOptions(ApplicationId, request, headers, runtime);
  }

  /**
   * @summary 更新自定义域名.
   *
   * @param request UpdateWebCustomDomainRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateWebCustomDomainResponse
   */
  async updateWebCustomDomainWithOptions(DomainName: string, request: UpdateWebCustomDomainRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateWebCustomDomainResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateWebCustomDomain",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v2/api/web/custom-domains/${OpenApiUtil.getEncodeParam(DomainName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateWebCustomDomainResponse>(await this.callApi(params, req, runtime), new UpdateWebCustomDomainResponse({}));
  }

  /**
   * @summary 更新自定义域名.
   *
   * @param request UpdateWebCustomDomainRequest
   * @return UpdateWebCustomDomainResponse
   */
  async updateWebCustomDomain(DomainName: string, request: UpdateWebCustomDomainRequest): Promise<UpdateWebCustomDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateWebCustomDomainWithOptions(DomainName, request, headers, runtime);
  }

}
