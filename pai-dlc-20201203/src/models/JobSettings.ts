// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataJuicerConfig } from "./DataJuicerConfig";
import { ModelConfig } from "./ModelConfig";


export class JobSettings extends $dara.Model {
  /**
   * @remarks
   * The extra advanced parameter settings.
   */
  advancedSettings?: { [key: string]: any };
  /**
   * @remarks
   * Specifies whether to mount all RDMA network interfaces.
   */
  allocateAllRDMADevices?: boolean;
  allowUnschedulableNodes?: boolean;
  /**
   * @remarks
   * The user ID associated with the job.
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
  /**
   * @remarks
   * The DataJuicer task configuration.
   */
  dataJuicerConfig?: DataJuicerConfig;
  /**
   * @remarks
   * Specifies whether to skip inventory check. Valid values:
   * - true
   * - false
   * 
   * @example
   * false
   */
  disableEcsStockCheck?: boolean;
  /**
   * @remarks
   * The NVIDIA driver configuration.
   * 
   * @example
   * 535.54.03
   */
  driver?: string;
  /**
   * @remarks
   * The CPU affinity setting. This setting is effective only when using general computing subscription resources.
   * 
   * @example
   * true
   */
  enableCPUAffinity?: boolean;
  enableDSWDev?: boolean;
  /**
   * @remarks
   * Specifies whether to enable fault tolerance monitoring for the job. Valid values:
   * - true
   * - false
   * 
   * @example
   * false
   */
  enableErrorMonitoringInAIMaster?: boolean;
  /**
   * @remarks
   * Specifies whether to allow OSS append write. Valid values:
   * - true
   * - false
   * 
   * @example
   * true
   */
  enableOssAppend?: boolean;
  /**
   * @remarks
   * Specifies whether to allow the job to use RDMA. Valid values:
   * - true
   * - false
   * 
   * @example
   * true
   */
  enableRDMA?: boolean;
  /**
   * @remarks
   * Specifies whether to enable computing power health check for the job. Valid values:
   * - true
   * - false
   * 
   * @example
   * true
   */
  enableSanityCheck?: boolean;
  /**
   * @remarks
   * Specifies whether to allow the job to use tidal resources. Valid values:
   * - true
   * - false
   * 
   * @example
   * true
   */
  enableTideResource?: boolean;
  /**
   * @remarks
   * The configuration parameters for fault tolerance monitoring after it is enabled, such as whether to enable log hang-based detection.
   * 
   * @example
   * --enable-log-hang-detection true
   */
  errorMonitoringArgs?: string;
  /**
   * @remarks
   * The retention duration after job completion, in minutes.
   * 
   * @example
   * 30
   */
  jobReservedMinutes?: number;
  /**
   * @remarks
   * The retention policy after job completion.
   * 
   * @example
   * Always
   */
  jobReservedPolicy?: string;
  /**
   * @remarks
   * The output model configuration. This parameter is currently effective only in federated training scenarios.
   */
  modelConfig?: ModelConfig;
  /**
   * @remarks
   * The oversold resource usage mode for the job (reject/accept/only accept).
   * 
   * @example
   * AcceptQuotaOverSold
   */
  oversoldType?: string;
  /**
   * @remarks
   * The workflow ID.
   * 
   * @example
   * pid-12****
   */
  pipelineId?: string;
  /**
   * @remarks
   * The configuration parameters for computing power health check.
   * 
   * @example
   * --sanity-check-timing=AfterJobFaultTolerant --sanity-check-timeout-ops=MarkJobFail
   */
  sanityCheckArgs?: string;
  /**
   * @example
   * /bin/bash
   */
  shell?: string;
  /**
   * @remarks
   * The custom tags.
   */
  tags?: { [key: string]: string };
  terminationGracePeriodSeconds?: number;
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
      shell: 'Shell',
      tags: 'Tags',
      terminationGracePeriodSeconds: 'TerminationGracePeriodSeconds',
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
      shell: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      terminationGracePeriodSeconds: 'number',
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

