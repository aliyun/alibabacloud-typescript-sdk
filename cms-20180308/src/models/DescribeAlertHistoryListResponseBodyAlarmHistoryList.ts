// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAlertHistoryListResponseBodyAlarmHistoryListAlarmHistory } from "./DescribeAlertHistoryListResponseBodyAlarmHistoryListAlarmHistory";


export class DescribeAlertHistoryListResponseBodyAlarmHistoryList extends $dara.Model {
  alarmHistory?: DescribeAlertHistoryListResponseBodyAlarmHistoryListAlarmHistory[];
  static names(): { [key: string]: string } {
    return {
      alarmHistory: 'AlarmHistory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmHistory: { 'type': 'array', 'itemType': DescribeAlertHistoryListResponseBodyAlarmHistoryListAlarmHistory },
    };
  }

  validate() {
    if(Array.isArray(this.alarmHistory)) {
      $dara.Model.validateArray(this.alarmHistory);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

