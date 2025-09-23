// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { InputCodeLocation } from "./InputCodeLocation";
import { CustomContainerConfig } from "./CustomContainerConfig";
import { CustomDNS } from "./CustomDns";
import { CustomRuntimeConfig } from "./CustomRuntimeConfig";
import { GPUConfig } from "./Gpuconfig";
import { InstanceLifecycleConfig } from "./InstanceLifecycleConfig";
import { LogConfig } from "./LogConfig";
import { NASConfig } from "./Nasconfig";
import { OSSMountConfig } from "./OssmountConfig";
import { TracingConfig } from "./TracingConfig";
import { VPCConfig } from "./Vpcconfig";


export class UpdateFunctionInput extends $dara.Model {
  code?: InputCodeLocation;
  /**
   * @example
   * 1
   */
  cpu?: number;
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
  layers?: string[];
  logConfig?: LogConfig;
  /**
   * @example
   * 512
   */
  memorySize?: number;
  nasConfig?: NASConfig;
  ossMountConfig?: OSSMountConfig;
  /**
   * @example
   * acs:ram::188077086902****:role/fc-test
   */
  role?: string;
  runtime?: string;
  /**
   * @example
   * MCP_SSE
   */
  sessionAffinity?: string;
  sessionAffinityConfig?: string;
  /**
   * @example
   * 60
   */
  timeout?: number;
  tracingConfig?: TracingConfig;
  vpcConfig?: VPCConfig;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      cpu: 'cpu',
      customContainerConfig: 'customContainerConfig',
      customDNS: 'customDNS',
      customRuntimeConfig: 'customRuntimeConfig',
      description: 'description',
      disableOndemand: 'disableOndemand',
      diskSize: 'diskSize',
      enableLongLiving: 'enableLongLiving',
      environmentVariables: 'environmentVariables',
      gpuConfig: 'gpuConfig',
      handler: 'handler',
      idleTimeout: 'idleTimeout',
      instanceConcurrency: 'instanceConcurrency',
      instanceIsolationMode: 'instanceIsolationMode',
      instanceLifecycleConfig: 'instanceLifecycleConfig',
      internetAccess: 'internetAccess',
      layers: 'layers',
      logConfig: 'logConfig',
      memorySize: 'memorySize',
      nasConfig: 'nasConfig',
      ossMountConfig: 'ossMountConfig',
      role: 'role',
      runtime: 'runtime',
      sessionAffinity: 'sessionAffinity',
      sessionAffinityConfig: 'sessionAffinityConfig',
      timeout: 'timeout',
      tracingConfig: 'tracingConfig',
      vpcConfig: 'vpcConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: InputCodeLocation,
      cpu: 'number',
      customContainerConfig: CustomContainerConfig,
      customDNS: CustomDNS,
      customRuntimeConfig: CustomRuntimeConfig,
      description: 'string',
      disableOndemand: 'boolean',
      diskSize: 'number',
      enableLongLiving: 'boolean',
      environmentVariables: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      gpuConfig: GPUConfig,
      handler: 'string',
      idleTimeout: 'number',
      instanceConcurrency: 'number',
      instanceIsolationMode: 'string',
      instanceLifecycleConfig: InstanceLifecycleConfig,
      internetAccess: 'boolean',
      layers: { 'type': 'array', 'itemType': 'string' },
      logConfig: LogConfig,
      memorySize: 'number',
      nasConfig: NASConfig,
      ossMountConfig: OSSMountConfig,
      role: 'string',
      runtime: 'string',
      sessionAffinity: 'string',
      sessionAffinityConfig: 'string',
      timeout: 'number',
      tracingConfig: TracingConfig,
      vpcConfig: VPCConfig,
    };
  }

  validate() {
    if(this.code && typeof (this.code as any).validate === 'function') {
      (this.code as any).validate();
    }
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

