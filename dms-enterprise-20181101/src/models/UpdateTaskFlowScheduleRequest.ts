// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTaskFlowScheduleRequest extends $dara.Model {
  /**
   * @remarks
   * The start of the time range for scheduling.
   * 
   * @example
   * CronBeginDate_test
   */
  cronBeginDate?: string;
  /**
   * @remarks
   * The end of the time range for scheduling.
   * 
   * @example
   * CronEndDate_test
   */
  cronEndDate?: string;
  /**
   * @remarks
   * The cron expression for timed scheduling.
   * 
   * @example
   * CronStr_test
   */
  cronStr?: string;
  /**
   * @remarks
   * The type of the scheduling cycle. Valid values:
   * 
   * *   **MINUTE**: scheduling by minute
   * *   **HOUR**: scheduling by hour
   * *   **DAY**: scheduling by day
   * *   **WEEK**: scheduling by week
   * *   **MONTH**: scheduling by month
   * 
   * @example
   * HOUR
   */
  cronType?: string;
  /**
   * @remarks
   * The ID of the task flow.
   * 
   * This parameter is required.
   * 
   * @example
   * 7***
   */
  dagId?: number;
  /**
   * @remarks
   * The event scheduling configuration. The value of this parameter is a JSON string.
   * 
   * This parameter is required.
   * 
   * @example
   * ScheduleParam_test
   */
  scheduleParam?: string;
  /**
   * @remarks
   * Specifies whether to enable scheduling. Valid values:
   * 
   * *   **Enable**
   * *   **Disable**
   * 
   * This parameter is required.
   * 
   * @example
   * Disable
   */
  scheduleSwitch?: boolean;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * > : To view the ID of the tenant, go to the Data Management (DMS) console and move the pointer over the profile picture in the upper-right corner. For more information, see [View information about the current tenant](https://help.aliyun.com/document_detail/181330.html).
   * 
   * @example
   * 3***
   */
  tid?: number;
  /**
   * @remarks
   * The time zone. The default time zone is UTC+8 (Asia/Shanghai).
   * 
   * @example
   * Asia/Shanghai
   */
  timeZoneId?: string;
  /**
   * @remarks
   * The mode in which the task flow is triggered. Valid values:
   * 
   * *   **Cron**: The task flow is triggered based on timed scheduling.
   * *   **Event**: The task flow is triggered by events.
   * 
   * This parameter is required.
   * 
   * @example
   * Event
   */
  triggerType?: string;
  static names(): { [key: string]: string } {
    return {
      cronBeginDate: 'CronBeginDate',
      cronEndDate: 'CronEndDate',
      cronStr: 'CronStr',
      cronType: 'CronType',
      dagId: 'DagId',
      scheduleParam: 'ScheduleParam',
      scheduleSwitch: 'ScheduleSwitch',
      tid: 'Tid',
      timeZoneId: 'TimeZoneId',
      triggerType: 'TriggerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cronBeginDate: 'string',
      cronEndDate: 'string',
      cronStr: 'string',
      cronType: 'string',
      dagId: 'number',
      scheduleParam: 'string',
      scheduleSwitch: 'boolean',
      tid: 'number',
      timeZoneId: 'string',
      triggerType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

