// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAlarmEventRequest extends $dara.Model {
  /**
   * @remarks
   * The channel for sending alarm notifications. Valid values:
   * 
   * - `sms`: SMS
   * 
   * - `mail`: Email
   * 
   * - `phone`: Phone call
   * 
   * - `webhook`: Webhook
   * 
   * @example
   * webhook
   */
  alarmChannel?: string;
  /**
   * @remarks
   * The delivery status of the alarm notification. Valid values:
   * 
   * - `true`: The notification delivery succeeded.
   * 
   * - `false`: The notification delivery failed.
   * 
   * @example
   * true
   */
  alarmStatus?: string;
  /**
   * @remarks
   * The type of the alarm. Valid values:
   * 
   * - **`schedulerx3_no_designate_machine_alarm`**: The Designated Machine is unavailable.
   * 
   * - **`schedulerx3_all_busy_alarm`**: All available machines are busy.
   * 
   * - **`schedulerx3_no_machine_alarm`**: No machines are available to run the job.
   * 
   * - **`schedulerx3_timeout_alarm`**: The job timed out.
   * 
   * - **`schedulerx3_fail_alarm`**: The job failed to run.
   * 
   * - **`schedulerx3_job_success_notice`**: The job ran successfully.
   * 
   * @example
   * schedulerx3_fail_alarm
   */
  alarmType?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * The end of the time range for querying events. This value is a Unix timestamp in milliseconds.
   * 
   * @example
   * 1731636011558
   */
  endTime?: number;
  /**
   * @remarks
   * The name of the job.
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
   * Set to true to return results in descending order.
   * 
   * @example
   * true
   */
  reverse?: boolean;
  /**
   * @remarks
   * The start of the time range for querying events. This value is a Unix timestamp in milliseconds.
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

