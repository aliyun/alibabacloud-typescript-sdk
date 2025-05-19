// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAlertHistoryListResponseBodyAlarmHistoryList } from "./DescribeAlertHistoryListResponseBodyAlarmHistoryList";


export class DescribeAlertHistoryListResponseBody extends $dara.Model {
  alarmHistoryList?: DescribeAlertHistoryListResponseBodyAlarmHistoryList;
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  total?: string;
  static names(): { [key: string]: string } {
    return {
      alarmHistoryList: 'AlarmHistoryList',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmHistoryList: DescribeAlertHistoryListResponseBodyAlarmHistoryList,
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      total: 'string',
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

