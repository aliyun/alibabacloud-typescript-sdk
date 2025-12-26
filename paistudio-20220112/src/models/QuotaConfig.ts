// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ACS } from "./Acs";
import { EniCacheConfig } from "./EniCacheConfig";
import { OversoldUsageConfig } from "./OversoldUsageConfig";
import { WorkspaceSpecs } from "./WorkspaceSpecs";
import { SandboxCacheConfig } from "./SandboxCacheConfig";
import { SelfQuotaPreemptionConfig } from "./SelfQuotaPreemptionConfig";
import { SubQuotaPreemptionConfig } from "./SubQuotaPreemptionConfig";
import { UserVpc } from "./UserVpc";


export class QuotaConfig extends $dara.Model {
  ACS?: ACS;
  /**
   * @example
   * ceeb37xxxx
   */
  clusterId?: string;
  /**
   * @example
   * 470.199.02
   */
  defaultGPUDriver?: string;
  enableGPUShare?: boolean;
  enablePreemptSubquotaWorkloads?: boolean;
  enableSelfQuotaPreemption?: boolean;
  enableSubQuotaPreemption?: boolean;
  eniCacheConfig?: EniCacheConfig;
  oversoldUsageInfo?: OversoldUsageConfig;
  resourceSpecs?: WorkspaceSpecs[];
  sandboxCacheConfig?: SandboxCacheConfig;
  selfQuotaPreemptionConfig?: SelfQuotaPreemptionConfig;
  subQuotaPreemptionConfig?: SubQuotaPreemptionConfig;
  supportGPUDrivers?: string[];
  /**
   * @example
   * false
   */
  supportRDMA?: boolean;
  useCase?: string;
  userVpc?: UserVpc;
  static names(): { [key: string]: string } {
    return {
      ACS: 'ACS',
      clusterId: 'ClusterId',
      defaultGPUDriver: 'DefaultGPUDriver',
      enableGPUShare: 'EnableGPUShare',
      enablePreemptSubquotaWorkloads: 'EnablePreemptSubquotaWorkloads',
      enableSelfQuotaPreemption: 'EnableSelfQuotaPreemption',
      enableSubQuotaPreemption: 'EnableSubQuotaPreemption',
      eniCacheConfig: 'EniCacheConfig',
      oversoldUsageInfo: 'OversoldUsageInfo',
      resourceSpecs: 'ResourceSpecs',
      sandboxCacheConfig: 'SandboxCacheConfig',
      selfQuotaPreemptionConfig: 'SelfQuotaPreemptionConfig',
      subQuotaPreemptionConfig: 'SubQuotaPreemptionConfig',
      supportGPUDrivers: 'SupportGPUDrivers',
      supportRDMA: 'SupportRDMA',
      useCase: 'UseCase',
      userVpc: 'UserVpc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ACS: ACS,
      clusterId: 'string',
      defaultGPUDriver: 'string',
      enableGPUShare: 'boolean',
      enablePreemptSubquotaWorkloads: 'boolean',
      enableSelfQuotaPreemption: 'boolean',
      enableSubQuotaPreemption: 'boolean',
      eniCacheConfig: EniCacheConfig,
      oversoldUsageInfo: OversoldUsageConfig,
      resourceSpecs: { 'type': 'array', 'itemType': WorkspaceSpecs },
      sandboxCacheConfig: SandboxCacheConfig,
      selfQuotaPreemptionConfig: SelfQuotaPreemptionConfig,
      subQuotaPreemptionConfig: SubQuotaPreemptionConfig,
      supportGPUDrivers: { 'type': 'array', 'itemType': 'string' },
      supportRDMA: 'boolean',
      useCase: 'string',
      userVpc: UserVpc,
    };
  }

  validate() {
    if(this.ACS && typeof (this.ACS as any).validate === 'function') {
      (this.ACS as any).validate();
    }
    if(this.eniCacheConfig && typeof (this.eniCacheConfig as any).validate === 'function') {
      (this.eniCacheConfig as any).validate();
    }
    if(this.oversoldUsageInfo && typeof (this.oversoldUsageInfo as any).validate === 'function') {
      (this.oversoldUsageInfo as any).validate();
    }
    if(Array.isArray(this.resourceSpecs)) {
      $dara.Model.validateArray(this.resourceSpecs);
    }
    if(this.sandboxCacheConfig && typeof (this.sandboxCacheConfig as any).validate === 'function') {
      (this.sandboxCacheConfig as any).validate();
    }
    if(this.selfQuotaPreemptionConfig && typeof (this.selfQuotaPreemptionConfig as any).validate === 'function') {
      (this.selfQuotaPreemptionConfig as any).validate();
    }
    if(this.subQuotaPreemptionConfig && typeof (this.subQuotaPreemptionConfig as any).validate === 'function') {
      (this.subQuotaPreemptionConfig as any).validate();
    }
    if(Array.isArray(this.supportGPUDrivers)) {
      $dara.Model.validateArray(this.supportGPUDrivers);
    }
    if(this.userVpc && typeof (this.userVpc as any).validate === 'function') {
      (this.userVpc as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

