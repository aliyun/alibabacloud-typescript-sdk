// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TicketChangingFlightListRequestTravelerInfoList extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  arrCity?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  depCity?: string;
  name?: string;
  type?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      arrCity: 'arr_city',
      depCity: 'dep_city',
      name: 'name',
      type: 'type',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrCity: 'string',
      depCity: 'string',
      name: 'string',
      type: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketChangingFlightListRequest extends $dara.Model {
  arrCity?: string;
  depCity?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  depDate?: string;
  /**
   * @remarks
   * This parameter is required.
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

