// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CustomContainerConfig } from "./CustomContainerConfig";
import { CustomDNS } from "./CustomDns";
import { CustomRuntimeConfig } from "./CustomRuntimeConfig";
import { GPUConfig } from "./Gpuconfig";
import { InstanceLifecycleConfig } from "./InstanceLifecycleConfig";
import { FunctionRestriction } from "./FunctionRestriction";
import { FunctionLayer } from "./FunctionLayer";
import { LogConfig } from "./LogConfig";
import { NASConfig } from "./Nasconfig";
import { OSSMountConfig } from "./OssmountConfig";
import { Tag } from "./Tag";
import { TracingConfig } from "./TracingConfig";
import { VPCConfig } from "./Vpcconfig";


export class Function extends $dara.Model {
  /**
   * @example
   * 2825179536350****
   */
  codeChecksum?: string;
  /**
   * @example
   * 412
   */
  codeSize?: number;
  /**
   * @example
   * 1
   */
  cpu?: number;
  /**
   * @example
   * 2023-04-01T08:15:27Z
   */
  createdTime?: string;
  customContainerConfig?: CustomContainerConfig;
  customDNS?: CustomDNS;
  customRuntimeConfig?: CustomRuntimeConfig;
  /**
   * @example
   * my function
   */
  description?: string;
  disableOndemand?: boolean;
  /**
   * @example
   * 512
   */
  diskSize?: number;
  /**
   * @deprecated
   */
  enableLongLiving?: boolean;
  environmentVariables?: { [key: string]: string };
  /**
   * @example
   * acs:fc:cn-shanghai:123:functions/functionName
   */
  functionArn?: string;
  /**
   * @example
   * aa715851-1c20-4b89-a8fb-***
   */
  functionId?: string;
  /**
   * @example
   * my-function-1
   */
  functionName?: string;
  gpuConfig?: GPUConfig;
  /**
   * @example
   * index.handler
   */
  handler?: string;
  idleTimeout?: number;
  /**
   * @example
   * 1
   */
  instanceConcurrency?: number;
  instanceIsolationMode?: string;
  instanceLifecycleConfig?: InstanceLifecycleConfig;
  /**
   * @example
   * true
   */
  internetAccess?: boolean;
  invocationRestriction?: FunctionRestriction;
  /**
   * @example
   * 2023-05-01T08:15:27Z
   */
  lastModifiedTime?: string;
  /**
   * @example
   * InProgress
   */
  lastUpdateStatus?: string;
  /**
   * @example
   * The system is currently processing the acceleration optimization for the image.
   */
  lastUpdateStatusReason?: string;
  /**
   * @example
   * ImageOptimizing
   */
  lastUpdateStatusReasonCode?: string;
  layers?: FunctionLayer[];
  logConfig?: LogConfig;
  /**
   * @example
   * 512
   */
  memorySize?: number;
  nasConfig?: NASConfig;
  ossMountConfig?: OSSMountConfig;
  resourceGroupId?: string;
  /**
   * @example
   * acs:ram::188077086902****:role/fc-test
   */
  role?: string;
  /**
   * @example
   * python3.10
   */
  runtime?: string;
  sessionAffinity?: string;
  /**
   * @example
   * {\"sseEndpointPath\":\"/sse\", \"sessionConcurrencyPerInstance\":20}
   */
  sessionAffinityConfig?: string;
  /**
   * @example
   * Pending
   */
  state?: string;
  /**
   * @example
   * Function creating
   */
  stateReason?: string;
  /**
   * @example
   * Creating
   */
  stateReasonCode?: string;
  tags?: Tag[];
  /**
   * @example
   * 60
   */
  timeout?: number;
  tracingConfig?: TracingConfig;
  vpcConfig?: VPCConfig;
  static names(): { [key: string]: string } {
    return {
      codeChecksum: 'codeChecksum',
      codeSize: 'codeSize',
      cpu: 'cpu',
      createdTime: 'createdTime',
      customContainerConfig: 'customContainerConfig',
      customDNS: 'customDNS',
      customRuntimeConfig: 'customRuntimeConfig',
      description: 'description',
      disableOndemand: 'disableOndemand',
      diskSize: 'diskSize',
      enableLongLiving: 'enableLongLiving',
      environmentVariables: 'environmentVariables',
      functionArn: 'functionArn',
      functionId: 'functionId',
      functionName: 'functionName',
      gpuConfig: 'gpuConfig',
      handler: 'handler',
      idleTimeout: 'idleTimeout',
      instanceConcurrency: 'instanceConcurrency',
      instanceIsolationMode: 'instanceIsolationMode',
      instanceLifecycleConfig: 'instanceLifecycleConfig',
      internetAccess: 'internetAccess',
      invocationRestriction: 'invocationRestriction',
      lastModifiedTime: 'lastModifiedTime',
      lastUpdateStatus: 'lastUpdateStatus',
      lastUpdateStatusReason: 'lastUpdateStatusReason',
      lastUpdateStatusReasonCode: 'lastUpdateStatusReasonCode',
      layers: 'layers',
      logConfig: 'logConfig',
      memorySize: 'memorySize',
      nasConfig: 'nasConfig',
      ossMountConfig: 'ossMountConfig',
      resourceGroupId: 'resourceGroupId',
      role: 'role',
      runtime: 'runtime',
      sessionAffinity: 'sessionAffinity',
      sessionAffinityConfig: 'sessionAffinityConfig',
      state: 'state',
      stateReason: 'stateReason',
      stateReasonCode: 'stateReasonCode',
      tags: 'tags',
      timeout: 'timeout',
      tracingConfig: 'tracingConfig',
      vpcConfig: 'vpcConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeChecksum: 'string',
      codeSize: 'number',
      cpu: 'number',
      createdTime: 'string',
      customContainerConfig: CustomContainerConfig,
      customDNS: CustomDNS,
      customRuntimeConfig: CustomRuntimeConfig,
      description: 'string',
      disableOndemand: 'boolean',
      diskSize: 'number',
      enableLongLiving: 'boolean',
      environmentVariables: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      functionArn: 'string',
      functionId: 'string',
      functionName: 'string',
      gpuConfig: GPUConfig,
      handler: 'string',
      idleTimeout: 'number',
      instanceConcurrency: 'number',
      instanceIsolationMode: 'string',
      instanceLifecycleConfig: InstanceLifecycleConfig,
      internetAccess: 'boolean',
      invocationRestriction: FunctionRestriction,
      lastModifiedTime: 'string',
      lastUpdateStatus: 'string',
      lastUpdateStatusReason: 'string',
      lastUpdateStatusReasonCode: 'string',
      layers: { 'type': 'array', 'itemType': FunctionLayer },
      logConfig: LogConfig,
      memorySize: 'number',
      nasConfig: NASConfig,
      ossMountConfig: OSSMountConfig,
      resourceGroupId: 'string',
      role: 'string',
      runtime: 'string',
      sessionAffinity: 'string',
      sessionAffinityConfig: 'string',
      state: 'string',
      stateReason: 'string',
      stateReasonCode: 'string',
      tags: { 'type': 'array', 'itemType': Tag },
      timeout: 'number',
      tracingConfig: TracingConfig,
      vpcConfig: VPCConfig,
    };
  }

  validate() {
    if(this.customContainerConfig && typeof (this.customContainerConfig as any).validate === 'function') {
      (this.customContainerConfig as any).validate();
    }
    if(this.customDNS && typeof (this.customDNS as any).validate === 'function') {
      (this.customDNS as any).validate();
    }
    if(this.customRuntimeConfig && typeof (this.customRuntimeConfig as any).validate === 'function') {
      (this.customRuntimeConfig as any).validate();
    }
    if(this.environmentVariables) {
      $dara.Model.validateMap(this.environmentVariables);
    }
    if(this.gpuConfig && typeof (this.gpuConfig as any).validate === 'function') {
      (this.gpuConfig as any).validate();
    }
    if(this.instanceLifecycleConfig && typeof (this.instanceLifecycleConfig as any).validate === 'function') {
      (this.instanceLifecycleConfig as any).validate();
    }
    if(this.invocationRestriction && typeof (this.invocationRestriction as any).validate === 'function') {
      (this.invocationRestriction as any).validate();
    }
    if(Array.isArray(this.layers)) {
      $dara.Model.validateArray(this.layers);
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
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(this.tracingConfig && typeof (this.tracingConfig as any).validate === 'function') {
      (this.tracingConfig as any).validate();
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

