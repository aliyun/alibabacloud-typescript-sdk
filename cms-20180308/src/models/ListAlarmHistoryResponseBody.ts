// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAlarmHistoryResponseBodyAlarmHistoryList } from "./ListAlarmHistoryResponseBodyAlarmHistoryList";


export class ListAlarmHistoryResponseBody extends $dara.Model {
  alarmHistoryList?: ListAlarmHistoryResponseBodyAlarmHistoryList;
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 1
   */
  cursor?: string;
  /**
   * @example
   * Success
   */
  message?: string;
  /**
   * @example
   * 1DBBCE29-0F69-435C-B65C-53D1011D1D72
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      alarmHistoryList: 'AlarmHistoryList',
      code: 'Code',
      cursor: 'Cursor',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmHistoryList: ListAlarmHistoryResponseBodyAlarmHistoryList,
      code: 'string',
      cursor: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.alarmHistoryList && typeof (this.alarmHistoryList as any).validate === 'function') {
      (this.alarmHistoryList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

