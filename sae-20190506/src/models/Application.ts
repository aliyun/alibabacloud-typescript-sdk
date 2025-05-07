// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CustomDNS } from "./CustomDns";
import { CustomHealthCheckConfig } from "./CustomHealthCheckConfig";
import { CustomHostAlias } from "./CustomHostAlias";
import { CustomRuntimeConfig } from "./CustomRuntimeConfig";
import { HTTPTriggerConfig } from "./HttptriggerConfig";
import { ImageConfig } from "./ImageConfig";
import { InstanceLifecycleConfig } from "./InstanceLifecycleConfig";
import { Probe } from "./Probe";
import { LogConfig } from "./LogConfig";
import { NASConfig } from "./Nasconfig";
import { OSSMountConfig } from "./OssmountConfig";
import { ScaleConfig } from "./ScaleConfig";
import { SLSConfig } from "./Slsconfig";
import { TracingConfig } from "./TracingConfig";
import { Version } from "./Version";
import { VPCConfig } from "./Vpcconfig";


export class Application extends $dara.Model {
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
  customHostAlias?: CustomHostAlias;
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
  programmingLanguage?: string;
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
      customHostAlias: 'customHostAlias',
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
      programmingLanguage: 'programmingLanguage',
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
      customHostAlias: CustomHostAlias,
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
      programmingLanguage: 'string',
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

  validate() {
    if(this.customDNS && typeof (this.customDNS as any).validate === 'function') {
      (this.customDNS as any).validate();
    }
    if(this.customHealthCheckConfig && typeof (this.customHealthCheckConfig as any).validate === 'function') {
      (this.customHealthCheckConfig as any).validate();
    }
    if(this.customHostAlias && typeof (this.customHostAlias as any).validate === 'function') {
      (this.customHostAlias as any).validate();
    }
    if(this.customRuntimeConfig && typeof (this.customRuntimeConfig as any).validate === 'function') {
      (this.customRuntimeConfig as any).validate();
    }
    if(this.environmentVariables) {
      $dara.Model.validateMap(this.environmentVariables);
    }
    if(this.httpTriggerConfig && typeof (this.httpTriggerConfig as any).validate === 'function') {
      (this.httpTriggerConfig as any).validate();
    }
    if(this.imageConfig && typeof (this.imageConfig as any).validate === 'function') {
      (this.imageConfig as any).validate();
    }
    if(this.instanceLifecycleConfig && typeof (this.instanceLifecycleConfig as any).validate === 'function') {
      (this.instanceLifecycleConfig as any).validate();
    }
    if(Array.isArray(this.layers)) {
      $dara.Model.validateArray(this.layers);
    }
    if(Array.isArray(this.layersArnV2)) {
      $dara.Model.validateArray(this.layersArnV2);
    }
    if(this.livenessProbe && typeof (this.livenessProbe as any).validate === 'function') {
      (this.livenessProbe as any).validate();
    }
    if(this.logConfig && typeof (this.logConfig as any).validate === 'function') {
      (this.logConfig as any).validate();
    }
    if(this.nasConfig && typeof (this.nasConfig as any).validate === 'function') {
      (this.nasConfig as any).validate();
    }
    if(this.ossMountConfig && typeof (this.ossMountConfig as any).validate === 'function') {
      (this.ossMountConfig as any).validate();
    }
    if(this.scaleConfig && typeof (this.scaleConfig as any).validate === 'function') {
      (this.scaleConfig as any).validate();
    }
    if(this.slsConfig && typeof (this.slsConfig as any).validate === 'function') {
      (this.slsConfig as any).validate();
    }
    if(this.startupProbe && typeof (this.startupProbe as any).validate === 'function') {
      (this.startupProbe as any).validate();
    }
    if(this.tracingConfig && typeof (this.tracingConfig as any).validate === 'function') {
      (this.tracingConfig as any).validate();
    }
    if(this.version && typeof (this.version as any).validate === 'function') {
      (this.version as any).validate();
    }
    if(this.vpcConfig && typeof (this.vpcConfig as any).validate === 'function') {
      (this.vpcConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

