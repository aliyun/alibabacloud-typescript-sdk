// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataJuicerConfig } from "./DataJuicerConfig";
import { ModelConfig } from "./ModelConfig";


export class JobSettings extends $dara.Model {
  /**
   * @remarks
   * The additional advanced parameter settings.
   */
  advancedSettings?: { [key: string]: any };
  /**
   * @remarks
   * Specifies whether to allocate all RDMA NICs.
   */
  allocateAllRDMADevices?: boolean;
  /**
   * @remarks
   * Specifies whether to allow jobs to be scheduled to nodes that are marked as unschedulable or are in the workspace blacklist. If enabled, node status checks are skipped and the corresponding bypass configurations are applied.
   */
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
  /**
   * @remarks
   * The DataJuicer job configuration.
   */
  dataJuicerConfig?: DataJuicerConfig;
  /**
   * @remarks
   * Specifies whether to skip the ECS inventory check. Valid values:
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
   * The maximum number of restarts for an elastic spot job.
   * 
   * @example
   * 5
   */
  elasticSpotJobMaxRestartTimes?: number;
  /**
   * @remarks
   * The CPU affinity settings. These settings take effect only when general-purpose computing subscription resources are used.
   * 
   * @example
   * true
   */
  enableCPUAffinity?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the DSW development mode for the job. If enabled, a sidecar container is injected into the pod.
   */
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
   * Specifies whether to allow OSS append writes. Valid values:
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
   * Specifies whether to enable computing power health checks for the job. Valid values:
   * - true
   * - false
   * 
   * @example
   * true
   */
  enableSanityCheck?: boolean;
  /**
   * @remarks
   * Specifies whether to allow the job to use tide resources. Valid values:
   * - true
   * - false
   * 
   * @example
   * true
   */
  enableTideResource?: boolean;
  /**
   * @remarks
   * The configuration parameters for fault tolerance monitoring when it is enabled, such as specifying whether to enable log hang-based detection.
   * 
   * @example
   * --enable-log-hang-detection true
   */
  errorMonitoringArgs?: string;
  /**
   * @remarks
   * The retention duration after the job ends, in minutes.
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
  /**
   * @remarks
   * The output model configuration. This parameter takes effect only in joint training scenarios.
   */
  modelConfig?: ModelConfig;
  /**
   * @remarks
   * The oversold resource usage mode for the job, which can be not accepted, accepted, or only accepted.
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
   * The configuration parameters for computing power health checks.
   * 
   * @example
   * --sanity-check-timing=AfterJobFaultTolerant --sanity-check-timeout-ops=MarkJobFail
   */
  sanityCheckArgs?: string;
  /**
   * @remarks
   * The shell used to execute job commands. Valid values: /bin/sh and /bin/bash.
   * 
   * @example
   * /bin/bash
   */
  shell?: string;
  /**
   * @remarks
   * The custom tags.
   */
  tags?: { [key: string]: string };
  /**
   * @remarks
   * The grace period to wait for the pod to exit when the job is terminated, in seconds.
   * 
   * @example
   * 60
   */
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
      elasticSpotJobMaxRestartTimes: 'ElasticSpotJobMaxRestartTimes',
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
      elasticSpotJobMaxRestartTimes: 'number',
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

