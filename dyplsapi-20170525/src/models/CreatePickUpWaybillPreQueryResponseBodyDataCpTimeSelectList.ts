// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreatePickUpWaybillPreQueryResponseBodyDataCpTimeSelectListAppointTimes } from "./CreatePickUpWaybillPreQueryResponseBodyDataCpTimeSelectListAppointTimes";
import { CreatePickUpWaybillPreQueryResponseBodyDataCpTimeSelectListRealTime } from "./CreatePickUpWaybillPreQueryResponseBodyDataCpTimeSelectListRealTime";


export class CreatePickUpWaybillPreQueryResponseBodyDataCpTimeSelectList extends $dara.Model {
  /**
   * @remarks
   * The available time for the scheduled pickup. If the current courier company cannot accept the scheduled pickup, this field is left empty.
   */
  appointTimes?: CreatePickUpWaybillPreQueryResponseBodyDataCpTimeSelectListAppointTimes[];
  /**
   * @remarks
   * The estimated price. Unit: CNY. The value is accurate to two decimal places. The value of this parameter is displayed if an estimated weight is specified.
   * 
   * @example
   * 12.50
   */
  prePrice?: string;
  /**
   * @remarks
   * The information about whether the real-time order can be selected.
   */
  realTime?: CreatePickUpWaybillPreQueryResponseBodyDataCpTimeSelectListRealTime;
  static names(): { [key: string]: string } {
    return {
      appointTimes: 'AppointTimes',
      prePrice: 'PrePrice',
      realTime: 'RealTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appointTimes: { 'type': 'array', 'itemType': CreatePickUpWaybillPreQueryResponseBodyDataCpTimeSelectListAppointTimes },
      prePrice: 'string',
      realTime: CreatePickUpWaybillPreQueryResponseBodyDataCpTimeSelectListRealTime,
    };
  }

  validate() {
    if(Array.isArray(this.appointTimes)) {
      $dara.Model.validateArray(this.appointTimes);
    }
    if(this.realTime && typeof (this.realTime as any).validate === 'function') {
      (this.realTime as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

