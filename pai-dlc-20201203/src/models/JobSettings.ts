// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class JobSettings extends $dara.Model {
  advancedSettings?: { [key: string]: any };
  /**
   * @example
   * 166924
   */
  businessUserId?: string;
  /**
   * @example
   * SilkFlow
   */
  caller?: string;
  /**
   * @example
   * false
   */
  disableEcsStockCheck?: boolean;
  /**
   * @example
   * 535.54.03
   */
  driver?: string;
  /**
   * @example
   * true
   */
  enableCPUAffinity?: boolean;
  /**
   * @example
   * false
   */
  enableErrorMonitoringInAIMaster?: boolean;
  /**
   * @example
   * true
   */
  enableOssAppend?: boolean;
  /**
   * @example
   * true
   */
  enableRDMA?: boolean;
  /**
   * @example
   * true
   */
  enableSanityCheck?: boolean;
  /**
   * @example
   * true
   */
  enableTideResource?: boolean;
  /**
   * @example
   * --enable-log-hang-detection true
   */
  errorMonitoringArgs?: string;
  /**
   * @example
   * 30
   */
  jobReservedMinutes?: number;
  /**
   * @example
   * Always
   */
  jobReservedPolicy?: string;
  /**
   * @example
   * AcceptQuotaOverSold
   */
  oversoldType?: string;
  /**
   * @example
   * pid-123456
   */
  pipelineId?: string;
  /**
   * @example
   * --sanity-check-timing=AfterJobFaultTolerant --sanity-check-timeout-ops=MarkJobFai
   */
  sanityCheckArgs?: string;
  tags?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      advancedSettings: 'AdvancedSettings',
      businessUserId: 'BusinessUserId',
      caller: 'Caller',
      disableEcsStockCheck: 'DisableEcsStockCheck',
      driver: 'Driver',
      enableCPUAffinity: 'EnableCPUAffinity',
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
      disableEcsStockCheck: 'boolean',
      driver: 'string',
      enableCPUAffinity: 'boolean',
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

