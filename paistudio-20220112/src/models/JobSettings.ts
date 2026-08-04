// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class JobSettings extends $dara.Model {
  /**
   * @remarks
   * Additional advanced parameter settings.
   */
  advancedSettings?: { [key: string]: any };
  /**
   * @remarks
   * User ID associated with the job.
   * 
   * @example
   * 166924
   */
  businessUserId?: string;
  /**
   * @remarks
   * Caller.
   * 
   * @example
   * SilkFlow
   */
  caller?: string;
  /**
   * @remarks
   * NVIDIA driver configuration.
   * 
   * @example
   * 535.54.03
   */
  driver?: string;
  /**
   * @remarks
   * Enable job fault tolerance monitoring.
   * 
   * @example
   * false
   */
  enableErrorMonitoringInAIMaster?: boolean;
  /**
   * @remarks
   * Enable OSS append writes.
   * 
   * @example
   * true
   */
  enableOssAppend?: boolean;
  /**
   * @remarks
   * Enable the job to use RDMA.
   * 
   * @example
   * true
   */
  enableRDMA?: boolean;
  /**
   * @remarks
   * Enable computing power health check for the job.
   * 
   * @example
   * true
   */
  enableSanityCheck?: boolean;
  /**
   * @remarks
   * Enable the job to use tide resources.
   * 
   * @example
   * true
   */
  enableTideResource?: boolean;
  /**
   * @remarks
   * Specify configuration parameters for fault tolerance monitoring, such as whether to enable log hang-based detection.
   * 
   * @example
   * --enable-log-hang-detection true
   */
  errorMonitoringArgs?: string;
  /**
   * @remarks
   * Duration in minutes to retain the job after completion.
   * 
   * @example
   * 30
   */
  jobReservedMinutes?: number;
  /**
   * @remarks
   * Policy for retaining the job after completion.
   * 
   * @example
   * Always
   */
  jobReservedPolicy?: string;
  /**
   * @remarks
   * Job\\"s oversold resource usage method (not accepted, accepted, or only accepted).
   * 
   * @example
   * AcceptQuotaOverSold
   */
  oversoldType?: string;
  /**
   * @remarks
   * Workflow ID.
   * 
   * @example
   * pid-123456
   */
  pipelineId?: string;
  /**
   * @remarks
   * Configuration parameters for computing power health check.
   * 
   * @example
   * --sanity-check-timing=AfterJobFaultTolerant --sanity-check-timeout-ops=MarkJobFai
   */
  sanityCheckArgs?: string;
  /**
   * @remarks
   * Custom tags.
   */
  tags?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      advancedSettings: 'AdvancedSettings',
      businessUserId: 'BusinessUserId',
      caller: 'Caller',
      driver: 'Driver',
      enableErrorMonitoringInAIMaster: 'EnableErrorMonitoringInAIMaster',
      enableOssAppend: 'EnableOssAppend',
      enableRDMA: 'EnableRDMA',
      enableSanityCheck: 'EnableSanityCheck',
      enableTideResource: 'EnableTideResource',
      errorMonitoringArgs: 'ErrorMonitoringArgs',
      jobReservedMinutes: 'JobReservedMinutes',
      jobReservedPolicy: 'JobReservedPolicy',
      oversoldType: 'OversoldType',
      pipelineId: 'PipelineId',
      sanityCheckArgs: 'SanityCheckArgs',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advancedSettings: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      businessUserId: 'string',
      caller: 'string',
      driver: 'string',
      enableErrorMonitoringInAIMaster: 'boolean',
      enableOssAppend: 'boolean',
      enableRDMA: 'boolean',
      enableSanityCheck: 'boolean',
      enableTideResource: 'boolean',
      errorMonitoringArgs: 'string',
      jobReservedMinutes: 'number',
      jobReservedPolicy: 'string',
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
    if(this.tags) {
      $dara.Model.validateMap(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

