// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInspectionScheduleRequest extends $dara.Model {
  /**
   * @remarks
   * The cron expression.
   * 
   * @example
   * 0 0 2 * * ?
   */
  cronExpression?: string;
  /**
   * @remarks
   * Specifies whether to start the scheduled task. Default value: true.
   * 
   * @example
   * false
   */
  enabled?: number;
  /**
   * @remarks
   * The specified inspection items. The following inspection items are supported:
   * - RESOURCE_USAGE
   * - BIGKEY
   * - HOTKEY
   * - PERFORMANCE_METRICS
   * - SLOWLOG
   * 
   * @example
   * HOTKEY
   */
  inspectionItems?: string;
  /**
   * @remarks
   * 1h
   * 
   * @example
   * 1h
   */
  inspectionWindow?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * r-bp1zxszhcgatnx****
   */
  instanceId?: string;
  /**
   * @remarks
   * The list of associated instance IDs.
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
   * The ID of the timed scheduling.
   * 
   * @example
   * sch-4dfb08ddf9f84855bacca35axxx
   */
  scheduleId?: string;
  /**
   * @remarks
   * The name of the timed scheduling.
   * 
   * @example
   * test-sche
   */
  scheduleName?: string;
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
      enabled: 'Enabled',
      inspectionItems: 'InspectionItems',
      inspectionWindow: 'InspectionWindow',
      instanceId: 'InstanceId',
      instanceIds: 'InstanceIds',
      reportLanguage: 'ReportLanguage',
      scheduleId: 'ScheduleId',
      scheduleName: 'ScheduleName',
      timezone: 'Timezone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cronExpression: 'string',
      enabled: 'number',
      inspectionItems: 'string',
      inspectionWindow: 'string',
      instanceId: 'string',
      instanceIds: 'string',
      reportLanguage: 'string',
      scheduleId: 'string',
      scheduleName: 'string',
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

