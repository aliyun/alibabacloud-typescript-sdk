// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAlarmsResponseBodyDatapointsAlarm } from "./DescribeAlarmsResponseBodyDatapointsAlarm";


export class DescribeAlarmsResponseBodyDatapoints extends $dara.Model {
  alarm?: DescribeAlarmsResponseBodyDatapointsAlarm[];
  static names(): { [key: string]: string } {
    return {
      alarm: 'Alarm',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarm: { 'type': 'array', 'itemType': DescribeAlarmsResponseBodyDatapointsAlarm },
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

