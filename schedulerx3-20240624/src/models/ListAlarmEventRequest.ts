// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAlarmEventRequest extends $dara.Model {
  /**
   * @remarks
   * The alert channel. Valid values:
   * - `sms`: SMS.
   * - `mail`: Email.
   * - `phone`: Phone call.
   * - `webhook`: Webhook.
   * 
   * @example
   * webhook
   */
  alarmChannel?: string;
  /**
   * @remarks
   * The alert status. Valid values:
   * 
   * - `true`: The alert message is sent successfully.
   * 
   * - `false`: The alert message fails to be sent.
   * 
   * @example
   * true
   */
  alarmStatus?: string;
  /**
   * @remarks
   * The alert type. Valid values:
   * - **`schedulerx3_no_designate_machine_alarm`**: Unavailable designated machine alert.
   * - **`schedulerx3_all_busy_alarm`**: All machines busy alert.
   * - **`schedulerx3_no_machine_alarm`**: No available machine alert.
   * - **`schedulerx3_timeout_alarm`**: Job timeout alert.
   * - **`schedulerx3_fail_alarm`**: Job execution failure alert.
   * - **`schedulerx3_job_success_notice`**: Job execution success notice.
   * 
   * @example
   * schedulerx3_fail_alarm
   */
  alarmType?: string;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * The end time of the retrieved events. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1731636011558
   */
  endTime?: number;
  /**
   * @remarks
   * The job name.
   * 
   * @example
   * test-job
   */
  jobName?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNum?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * Specifies whether to sort the results in descending order.
   * 
   * @example
   * true
   */
  reverse?: boolean;
  /**
   * @remarks
   * The start time of the retrieved events. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1690419316000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      alarmChannel: 'AlarmChannel',
      alarmStatus: 'AlarmStatus',
      alarmType: 'AlarmType',
      appName: 'AppName',
      clusterId: 'ClusterId',
      endTime: 'EndTime',
      jobName: 'JobName',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      reverse: 'Reverse',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmChannel: 'string',
      alarmStatus: 'string',
      alarmType: 'string',
      appName: 'string',
      clusterId: 'string',
      endTime: 'number',
      jobName: 'string',
      pageNum: 'string',
      pageSize: 'string',
      reverse: 'boolean',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

