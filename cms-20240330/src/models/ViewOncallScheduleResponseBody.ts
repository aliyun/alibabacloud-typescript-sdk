// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ScheduleValue } from "./ScheduleValue";


export class ViewOncallScheduleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8FDE2569-626B-5176-9844-28877A*****
   */
  requestId?: string;
  /**
   * @remarks
   * The on-call calendar. The key is the shift name, and the value is a list of on-call shifts for the shift within the queried date range.
   * 
   * @example
   * {"testName":[{"contactId":"testId","contactName":"Zhang San","start":"2024-10-10 09:00","end":"2024-10-15 18:00"}]}
   */
  schedule?: { [key: string]: ScheduleValue[] };
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      schedule: 'schedule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      schedule: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': ScheduleValue } },
    };
  }

  validate() {
    if(this.schedule) {
      $dara.Model.validateMap(this.schedule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

