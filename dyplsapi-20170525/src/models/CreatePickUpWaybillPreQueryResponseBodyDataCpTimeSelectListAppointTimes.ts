// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreatePickUpWaybillPreQueryResponseBodyDataCpTimeSelectListAppointTimesTimeList } from "./CreatePickUpWaybillPreQueryResponseBodyDataCpTimeSelectListAppointTimesTimeList";


export class CreatePickUpWaybillPreQueryResponseBodyDataCpTimeSelectListAppointTimes extends $dara.Model {
  /**
   * @remarks
   * The date in the YYYY-MM-DD format.
   * 
   * @example
   * 2022-04-28
   */
  date?: string;
  /**
   * @remarks
   * Indicates whether the date is selectable.
   * 
   * @example
   * true
   */
  dateSelectable?: boolean;
  /**
   * @remarks
   * The time range for the scheduled pickup for this date.
   */
  timeList?: CreatePickUpWaybillPreQueryResponseBodyDataCpTimeSelectListAppointTimesTimeList[];
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      dateSelectable: 'DateSelectable',
      timeList: 'TimeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      dateSelectable: 'boolean',
      timeList: { 'type': 'array', 'itemType': CreatePickUpWaybillPreQueryResponseBodyDataCpTimeSelectListAppointTimesTimeList },
    };
  }

  validate() {
    if(Array.isArray(this.timeList)) {
      $dara.Model.validateArray(this.timeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

