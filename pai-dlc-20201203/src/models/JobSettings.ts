// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataJuicerConfig } from "./DataJuicerConfig";
import { ModelConfig } from "./ModelConfig";


export class JobSettings extends $dara.Model {
  /**
   * @remarks
   * The additional advanced parameter configurations.
   */
  advancedSettings?: { [key: string]: any };
  /**
   * @remarks
   * Whether to mount all RDMA network interface controllers
   */
  allocateAllRDMADevices?: boolean;
  allowUnschedulableNodes?: boolean;
  /**
   * @remarks
   * The ID of the user associated with the job.
   * 
   * @example
   * 16****
   */
  businessUserId?: string;
  /**
   * @remarks
   * The caller.
   * 
   * @example
   * SilkFlow
   */
  caller?: string;
  dataJuicerConfig?: DataJuicerConfig;
  /**
   * @remarks
   * Whether inventory check is skipped. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  disableEcsStockCheck?: boolean;
  /**
   * @remarks
   * The NVIDIA driver configurations.
   * 
   * @example
   * 535.54.03
   */
  driver?: string;
  /**
   * @remarks
   * Whether the CPU affinity is enabled. This parameter takes effect only when you use subscription general computing resources.
   * 
   * @example
   * true
   */
  enableCPUAffinity?: boolean;
  enableDSWDev?: boolean;
  /**
   * @remarks
   * Whether fault tolerance monitoring is enabled for the job. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  enableErrorMonitoringInAIMaster?: boolean;
  /**
   * @remarks
   * Whether data is written to Object Storage Service (OSS) in append mode. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  enableOssAppend?: boolean;
  /**
   * @remarks
   * Whether RDMA is enabled for the job. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  enableRDMA?: boolean;
  /**
   * @remarks
   * Whether sanity check is enabled for the job. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  enableSanityCheck?: boolean;
  /**
   * @remarks
   * Whether tidal resources are allowed for the job. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  enableTideResource?: boolean;
  /**
   * @remarks
   * The configuration parameters after you enable fault tolerance monitoring. For example, you can specify whether to enable log hang-based detection.
   * 
   * @example
   * --enable-log-hang-detection true
   */
  errorMonitoringArgs?: string;
  /**
   * @remarks
   * The retention period after the job ends. Unit: minutes.
   * 
   * @example
   * 30
   */
  jobReservedMinutes?: number;
  /**
   * @remarks
   * The retention policy after the job ends.
   * 
   * @example
   * Always
   */
  jobReservedPolicy?: string;
  modelConfig?: ModelConfig;
  /**
   * @remarks
   * Whether the job accepts oversold resources. Valid values: ForbiddenQuotaOverSold, AcceptQuotaOverSold, and ForceQuotaOverSold.
   * 
   * @example
   * AcceptQuotaOverSold
   */
  oversoldType?: string;
  /**
   * @remarks
   * The pipeline ID.
   * 
   * @example
   * pid-123456
   */
  pipelineId?: string;
  /**
   * @remarks
   * The configuration parameters for sanity check.
   * 
   * @example
   * --sanity-check-timing=AfterJobFaultTolerant --sanity-check-timeout-ops=MarkJobFail
   */
  sanityCheckArgs?: string;
  /**
   * @remarks
   * The custom tag.
   */
  tags?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      advancedSettings: 'AdvancedSettings',
      allocateAllRDMADevices: 'AllocateAllRDMADevices',
      allowUnschedulableNodes: 'AllowUnschedulableNodes',
      businessUserId: 'BusinessUserId',
      caller: 'Caller',
      dataJuicerConfig: 'DataJuicerConfig',
      disableEcsStockCheck: 'DisableEcsStockCheck',
      driver: 'Driver',
      enableCPUAffinity: 'EnableCPUAffinity',
      enableDSWDev: 'EnableDSWDev',
      enableErrorMonitoringInAIMaster: 'EnableErrorMonitoringInAIMaster',
      enableOssAppend: 'EnableOssAppend',
      enableRDMA: 'EnableRDMA',
      enableSanityCheck: 'EnableSanityCheck',
      enableTideResource: 'EnableTideResource',
      errorMonitoringArgs: 'ErrorMonitoringArgs',
      jobReservedMinutes: 'JobReservedMinutes',
      jobReservedPolicy: 'JobReservedPolicy',
      modelConfig: 'ModelConfig',
      oversoldType: 'OversoldType',
      pipelineId: 'PipelineId',
      sanityCheckArgs: 'SanityCheckArgs',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advancedSettings: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      allocateAllRDMADevices: 'boolean',
      allowUnschedulableNodes: 'boolean',
      businessUserId: 'string',
      caller: 'string',
      dataJuicerConfig: DataJuicerConfig,
      disableEcsStockCheck: 'boolean',
      driver: 'string',
      enableCPUAffinity: 'boolean',
      enableDSWDev: 'boolean',
      enableErrorMonitoringInAIMaster: 'boolean',
      enableOssAppend: 'boolean',
      enableRDMA: 'boolean',
      enableSanityCheck: 'boolean',
      enableTideResource: 'boolean',
      errorMonitoringArgs: 'string',
      jobReservedMinutes: 'number',
      jobReservedPolicy: 'string',
      modelConfig: ModelConfig,
      oversoldType: 'string',
      pipelineId: 'string',
      sanityCheckArgs: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(this.advancedSettings) {
      $dara.Model.validateMap(this.advancedSettings);
    }
    if(this.dataJuicerConfig && typeof (this.dataJuicerConfig as any).validate === 'function') {
      (this.dataJuicerConfig as any).validate();
    }
    if(this.modelConfig && typeof (this.modelConfig as any).validate === 'function') {
      (this.modelConfig as any).validate();
    }
    if(this.tags) {
      $dara.Model.validateMap(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

