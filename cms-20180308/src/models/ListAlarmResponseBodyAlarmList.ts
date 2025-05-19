// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAlarmResponseBodyAlarmListAlarm } from "./ListAlarmResponseBodyAlarmListAlarm";


export class ListAlarmResponseBodyAlarmList extends $dara.Model {
  alarm?: ListAlarmResponseBodyAlarmListAlarm[];
  static names(): { [key: string]: string } {
    return {
      alarm: 'Alarm',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarm: { 'type': 'array', 'itemType': ListAlarmResponseBodyAlarmListAlarm },
    };
  }

  validate() {
    if(Array.isArray(this.alarm)) {
      $dara.Model.validateArray(this.alarm);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

