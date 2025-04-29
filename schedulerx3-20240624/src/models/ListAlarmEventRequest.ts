// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAlarmEventRequest extends $dara.Model {
  /**
   * @example
   * webhook
   */
  alarmChannel?: string;
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
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  /**
   * @example
   * 1731636011558
   */
  endTime?: number;
  /**
   * @example
   * test-job
   */
  jobName?: string;
  /**
   * @example
   * 1
   */
  pageNum?: string;
  /**
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @example
   * true
   */
  reverse?: boolean;
  /**
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

