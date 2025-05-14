// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetScheduleResponseBodyScheduleInformationScheduleItemsEnd } from "./GetScheduleResponseBodyScheduleInformationScheduleItemsEnd";
import { GetScheduleResponseBodyScheduleInformationScheduleItemsStart } from "./GetScheduleResponseBodyScheduleInformationScheduleItemsStart";


export class GetScheduleResponseBodyScheduleInformationScheduleItems extends $dara.Model {
  end?: GetScheduleResponseBodyScheduleInformationScheduleItemsEnd;
  start?: GetScheduleResponseBodyScheduleInformationScheduleItemsStart;
  /**
   * @example
   * BUSY
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      end: 'End',
      start: 'Start',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: GetScheduleResponseBodyScheduleInformationScheduleItemsEnd,
      start: GetScheduleResponseBodyScheduleInformationScheduleItemsStart,
      status: 'string',
    };
  }

  validate() {
    if(this.end && typeof (this.end as any).validate === 'function') {
      (this.end as any).validate();
    }
    if(this.start && typeof (this.start as any).validate === 'function') {
      (this.start as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

