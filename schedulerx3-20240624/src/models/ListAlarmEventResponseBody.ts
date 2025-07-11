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

export class ListAlarmEventResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  records?: ListAlarmEventResponseBodyDataRecords[];
  /**
   * @example
   * 64
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      records: 'Records',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      records: { 'type': 'array', 'itemType': ListAlarmEventResponseBodyDataRecords },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlarmEventResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * -
   */
  data?: ListAlarmEventResponseBodyData;
  /**
   * @example
   * Parameter check error
   */
  message?: string;
  /**
   * @example
   * 27B1345D-5F71-5972-8E4C-AABA6C6232F0
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ListAlarmEventResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

