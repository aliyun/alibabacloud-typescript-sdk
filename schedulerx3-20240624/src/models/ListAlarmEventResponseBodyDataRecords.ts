// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAlarmEventResponseBodyDataRecords extends $dara.Model {
  /**
   * @example
   * webhook
   */
  alarmChannel?: string;
  /**
   * @example
   * zhangsan
   */
  alarmContacts?: string;
  alarmMessage?: string;
  /**
   * @example
   * true
   */
  alarmStatus?: string;
  /**
   * @example
   * schedulerx3_fail_alarm
   */
  alarmType?: string;
  /**
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @example
   * test-job
   */
  jobName?: string;
  /**
   * @example
   * 2024-10-31 16:43:51
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      alarmChannel: 'AlarmChannel',
      alarmContacts: 'AlarmContacts',
      alarmMessage: 'AlarmMessage',
      alarmStatus: 'AlarmStatus',
      alarmType: 'AlarmType',
      appName: 'AppName',
      jobName: 'JobName',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmChannel: 'string',
      alarmContacts: 'string',
      alarmMessage: 'string',
      alarmStatus: 'string',
      alarmType: 'string',
      appName: 'string',
      jobName: 'string',
      time: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

