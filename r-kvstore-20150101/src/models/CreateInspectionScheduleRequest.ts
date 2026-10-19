// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInspectionScheduleRequest extends $dara.Model {
  /**
   * @remarks
   * The cron expression for the periodic scheduling.
   * 
   * @example
   * 0 0 2 * * ?
   */
  cronExpression?: string;
  /**
   * @remarks
   * The specified inspection items. The following inspection items are supported:
   * 
   * - RESOURCE_USAGE
   * - BIGKEY
   * - HOTKEY
   * - PERFORMANCE_METRICS
   * - SLOWLOG
   * 
   * @example
   * RESOURCE_USAGE
   */
  inspectionItems?: string;
  /**
   * @remarks
   * The time window.
   * 
   * @example
   * 1h
   */
  inspectionWindow?: string;
  /**
   * @remarks
   * The O&M Assistant instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ta-bp11iljddg37xxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The list of associated instance IDs.
   * > 
   * > - Separate multiple instances with commas (,).
   * 
   * @example
   * r-bp1zxszhcgatnx****
   */
  instanceIds?: string;
  /**
   * @remarks
   * The report language.
   * 
   * @example
   * zh-CN
   */
  reportLanguage?: string;
  /**
   * @remarks
   * The name of the timed scheduling.
   * 
   * @example
   * test-sche
   */
  scheduleName?: string;
  securityToken?: string;
  /**
   * @remarks
   * The time zone.
   * 
   * @example
   * Asia/Shanghai
   */
  timezone?: string;
  static names(): { [key: string]: string } {
    return {
      cronExpression: 'CronExpression',
      inspectionItems: 'InspectionItems',
      inspectionWindow: 'InspectionWindow',
      instanceId: 'InstanceId',
      instanceIds: 'InstanceIds',
      reportLanguage: 'ReportLanguage',
      scheduleName: 'ScheduleName',
      securityToken: 'SecurityToken',
      timezone: 'Timezone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cronExpression: 'string',
      inspectionItems: 'string',
      inspectionWindow: 'string',
      instanceId: 'string',
      instanceIds: 'string',
      reportLanguage: 'string',
      scheduleName: 'string',
      securityToken: 'string',
      timezone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

