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
  /**
   * @remarks
   * The ACS-related configuration.
   */
  ACS?: ACS;
  /**
   * @remarks
   * The ID of the cluster where the quota resides.
   * 
   * @example
   * ceeb3724255364***
   */
  clusterId?: string;
  /**
   * @remarks
   * The ID of the control plane cluster.
   */
  controlPlaneClusterId?: string;
  /**
   * @remarks
   * The default driver version of the resource quota.
   * 
   * @example
   * 470.199.02
   */
  defaultGPUDriver?: string;
  /**
   * @remarks
   * Specifies whether GPU sharing is enabled.
   */
  enableGPUShare?: boolean;
  /**
   * @remarks
   * Specifies whether sub-quota resources can be preempted.
   * 
   * @example
   * false
   */
  enablePreemptSubquotaWorkloads?: boolean;
  /**
   * @remarks
   * Specifies whether guaranteed resource preemption for the current quota is enabled.
   */
  enableSelfQuotaPreemption?: boolean;
  /**
   * @remarks
   * Specifies whether sub-quota resources can be preempted.
   */
  enableSubQuotaPreemption?: boolean;
  /**
   * @remarks
   * The elastic network interface controller (NIC) cache configuration.
   */
  eniCacheConfig?: EniCacheConfig;
  /**
   * @remarks
   * Specifies whether the resource is encrypted.
   */
  isEncryptedResource?: boolean;
  /**
   * @remarks
   * The off-peak resource usage configuration.
   */
  oversoldUsageConfig?: OversoldUsageConfig;
  /**
   * @remarks
   * The resource specification template.
   */
  resourceSpecs?: WorkspaceSpecs[];
  /**
   * @remarks
   * The sandbox cache configuration.
   */
  sandboxCacheConfig?: SandboxCacheConfig;
  /**
   * @remarks
   * The self-quota preemption configuration.
   */
  selfQuotaPreemptionConfig?: SelfQuotaPreemptionConfig;
  /**
   * @remarks
   * The sub-quota task preemption configuration.
   */
  subQuotaPreemptionConfig?: SubQuotaPreemptionConfig;
  /**
   * @remarks
   * The driver versions supported by the resource quota.
   */
  supportGPUDrivers?: string[];
  /**
   * @remarks
   * Specifies whether RDMA is supported.
   * 
   * @example
   * false
   */
  supportRDMA?: boolean;
  /**
   * @remarks
   * The scenarios of the resource quota.
   */
  useCase?: string;
  /**
   * @remarks
   * The user VPC information.
   */
  userVpc?: UserVpc;
  /**
   * @remarks
   * The workload types supported by the quota.
   */
  workloadTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      ACS: 'ACS',
      clusterId: 'ClusterId',
      controlPlaneClusterId: 'ControlPlaneClusterId',
      defaultGPUDriver: 'DefaultGPUDriver',
      enableGPUShare: 'EnableGPUShare',
      enablePreemptSubquotaWorkloads: 'EnablePreemptSubquotaWorkloads',
      enableSelfQuotaPreemption: 'EnableSelfQuotaPreemption',
      enableSubQuotaPreemption: 'EnableSubQuotaPreemption',
      eniCacheConfig: 'EniCacheConfig',
      isEncryptedResource: 'IsEncryptedResource',
      oversoldUsageConfig: 'OversoldUsageConfig',
      resourceSpecs: 'ResourceSpecs',
      sandboxCacheConfig: 'SandboxCacheConfig',
      selfQuotaPreemptionConfig: 'SelfQuotaPreemptionConfig',
      subQuotaPreemptionConfig: 'SubQuotaPreemptionConfig',
      supportGPUDrivers: 'SupportGPUDrivers',
      supportRDMA: 'SupportRDMA',
      useCase: 'UseCase',
      userVpc: 'UserVpc',
      workloadTypes: 'WorkloadTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ACS: ACS,
      clusterId: 'string',
      controlPlaneClusterId: 'string',
      defaultGPUDriver: 'string',
      enableGPUShare: 'boolean',
      enablePreemptSubquotaWorkloads: 'boolean',
      enableSelfQuotaPreemption: 'boolean',
      enableSubQuotaPreemption: 'boolean',
      eniCacheConfig: EniCacheConfig,
      isEncryptedResource: 'boolean',
      oversoldUsageConfig: OversoldUsageConfig,
      resourceSpecs: { 'type': 'array', 'itemType': WorkspaceSpecs },
      sandboxCacheConfig: SandboxCacheConfig,
      selfQuotaPreemptionConfig: SelfQuotaPreemptionConfig,
      subQuotaPreemptionConfig: SubQuotaPreemptionConfig,
      supportGPUDrivers: { 'type': 'array', 'itemType': 'string' },
      supportRDMA: 'boolean',
      useCase: 'string',
      userVpc: UserVpc,
      workloadTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.ACS && typeof (this.ACS as any).validate === 'function') {
      (this.ACS as any).validate();
    }
    if(this.eniCacheConfig && typeof (this.eniCacheConfig as any).validate === 'function') {
      (this.eniCacheConfig as any).validate();
    }
    if(this.oversoldUsageConfig && typeof (this.oversoldUsageConfig as any).validate === 'function') {
      (this.oversoldUsageConfig as any).validate();
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
    if(Array.isArray(this.workloadTypes)) {
      $dara.Model.validateArray(this.workloadTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

