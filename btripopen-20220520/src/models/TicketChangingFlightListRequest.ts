// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TicketChangingFlightListRequestTravelerInfoList } from "./TicketChangingFlightListRequestTravelerInfoList";


export class TicketChangingFlightListRequest extends $dara.Model {
  /**
   * @example
   * BJS
   */
  arrCity?: string;
  /**
   * @example
   * HGH
   */
  depCity?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2000-00-00 00:00:00
   */
  depDate?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dis123
   */
  disOrderId?: string;
  isVoluntary?: number;
  travelerInfoList?: TicketChangingFlightListRequestTravelerInfoList[];
  static names(): { [key: string]: string } {
    return {
      arrCity: 'arr_city',
      depCity: 'dep_city',
      depDate: 'dep_date',
      disOrderId: 'dis_order_id',
      isVoluntary: 'is_voluntary',
      travelerInfoList: 'traveler_info_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrCity: 'string',
      depCity: 'string',
      depDate: 'string',
      disOrderId: 'string',
      isVoluntary: 'number',
      travelerInfoList: { 'type': 'array', 'itemType': TicketChangingFlightListRequestTravelerInfoList },
    };
  }

  validate() {
    if(Array.isArray(this.travelerInfoList)) {
      $dara.Model.validateArray(this.travelerInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

