// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class JobSettings extends $dara.Model {
  /**
   * @remarks
   * The additional advanced parameter settings.
   */
  advancedSettings?: { [key: string]: any };
  /**
   * @remarks
   * The ID of the user associated with the job.
   * 
   * @example
   * 166924
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
   * The NVIDIA driver configuration.
   * 
   * @example
   * 535.54.03
   */
  driver?: string;
  /**
   * @remarks
   * Specifies whether to enable fault tolerance monitoring for the job.
   * 
   * @example
   * false
   */
  enableErrorMonitoringInAIMaster?: boolean;
  /**
   * @remarks
   * Specifies whether to enable OSS append writing.
   * 
   * @example
   * true
   */
  enableOssAppend?: boolean;
  /**
   * @remarks
   * Specifies whether to allow the job to use RDMA.
   * 
   * @example
   * true
   */
  enableRDMA?: boolean;
  /**
   * @remarks
   * Specifies whether to enable computing power health checks for the job.
   * 
   * @example
   * true
   */
  enableSanityCheck?: boolean;
  /**
   * @remarks
   * Specifies whether to allow the job to use tide resources.
   * 
   * @example
   * true
   */
  enableTideResource?: boolean;
  /**
   * @remarks
   * The user-specified configuration parameters for fault tolerance monitoring, such as whether to enable log hang-based detection.
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
   * The oversold resource usage type for the job, which can be not accepted, accepted, or only accepted.
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
   * The configuration parameters for computing power health checks.
   * 
   * @example
   * --sanity-check-timing=AfterJobFaultTolerant --sanity-check-timeout-ops=MarkJobFai
   */
  sanityCheckArgs?: string;
  /**
   * @remarks
   * The custom labels.
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

