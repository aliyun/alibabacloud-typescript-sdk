// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ACS } from "./Acs";
import { OversoldUsageConfig } from "./OversoldUsageConfig";
import { WorkspaceSpecs } from "./WorkspaceSpecs";
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
  enableSubQuotaPreemption?: boolean;
  oversoldUsageInfo?: OversoldUsageConfig;
  resourceSpecs?: WorkspaceSpecs[];
  selfQuotaPreemptionConfig?: SelfQuotaPreemptionConfig;
  subQuotaPreemptionConfig?: SubQuotaPreemptionConfig;
  supportGPUDrivers?: string[];
  /**
   * @example
   * false
   */
  supportRDMA?: boolean;
  userVpc?: UserVpc;
  static names(): { [key: string]: string } {
    return {
      ACS: 'ACS',
      clusterId: 'ClusterId',
      defaultGPUDriver: 'DefaultGPUDriver',
      enableGPUShare: 'EnableGPUShare',
      enablePreemptSubquotaWorkloads: 'EnablePreemptSubquotaWorkloads',
      enableSubQuotaPreemption: 'EnableSubQuotaPreemption',
      oversoldUsageInfo: 'OversoldUsageInfo',
      resourceSpecs: 'ResourceSpecs',
      selfQuotaPreemptionConfig: 'SelfQuotaPreemptionConfig',
      subQuotaPreemptionConfig: 'SubQuotaPreemptionConfig',
      supportGPUDrivers: 'SupportGPUDrivers',
      supportRDMA: 'SupportRDMA',
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
      enableSubQuotaPreemption: 'boolean',
      oversoldUsageInfo: OversoldUsageConfig,
      resourceSpecs: { 'type': 'array', 'itemType': WorkspaceSpecs },
      selfQuotaPreemptionConfig: SelfQuotaPreemptionConfig,
      subQuotaPreemptionConfig: SubQuotaPreemptionConfig,
      supportGPUDrivers: { 'type': 'array', 'itemType': 'string' },
      supportRDMA: 'boolean',
      userVpc: UserVpc,
    };
  }

  validate() {
    if(this.ACS && typeof (this.ACS as any).validate === 'function') {
      (this.ACS as any).validate();
    }
    if(this.oversoldUsageInfo && typeof (this.oversoldUsageInfo as any).validate === 'function') {
      (this.oversoldUsageInfo as any).validate();
    }
    if(Array.isArray(this.resourceSpecs)) {
      $dara.Model.validateArray(this.resourceSpecs);
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

