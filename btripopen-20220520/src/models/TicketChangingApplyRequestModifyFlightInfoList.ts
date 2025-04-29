// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TicketChangingApplyRequestModifyFlightInfoListPassengerInfoList } from "./TicketChangingApplyRequestModifyFlightInfoListPassengerInfoList";


export class TicketChangingApplyRequestModifyFlightInfoList extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * BJS
   */
  arrCity?: string;
  /**
   * @example
   * Y
   */
  cabin?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * HGH
   */
  depCity?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0000-00-00 00:00:00
   */
  depDate?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CA1704
   */
  flightNo?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  passengerInfoList?: TicketChangingApplyRequestModifyFlightInfoListPassengerInfoList[];
  static names(): { [key: string]: string } {
    return {
      arrCity: 'arr_city',
      cabin: 'cabin',
      depCity: 'dep_city',
      depDate: 'dep_date',
      flightNo: 'flight_no',
      passengerInfoList: 'passenger_info_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrCity: 'string',
      cabin: 'string',
      depCity: 'string',
      depDate: 'string',
      flightNo: 'string',
      passengerInfoList: { 'type': 'array', 'itemType': TicketChangingApplyRequestModifyFlightInfoListPassengerInfoList },
    };
  }

  validate() {
    if(Array.isArray(this.passengerInfoList)) {
      $dara.Model.validateArray(this.passengerInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

