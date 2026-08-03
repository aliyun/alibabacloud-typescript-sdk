// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInspectionScheduleRequest extends $dara.Model {
  /**
   * @example
   * 0 0 2 * * ?
   */
  cronExpression?: string;
  /**
   * @example
   * false
   */
  enabled?: number;
  /**
   * @example
   * HOTKEY
   */
  inspectionItems?: string;
  /**
   * @example
   * 1h
   */
  inspectionWindow?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * r-bp1zxszhcgatnx****
   */
  instanceId?: string;
  /**
   * @example
   * r-bp1zxszhcgatnx****
   */
  instanceIds?: string;
  /**
   * @example
   * zh-CN
   */
  reportLanguage?: string;
  /**
   * @example
   * sch-4dfb08ddf9f84855bacca35axxx
   */
  scheduleId?: string;
  /**
   * @example
   * test-sche
   */
  scheduleName?: string;
  /**
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

