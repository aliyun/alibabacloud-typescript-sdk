// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TicketChangingFlightListShrinkRequest extends $dara.Model {
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
  travelerInfoListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      arrCity: 'arr_city',
      depCity: 'dep_city',
      depDate: 'dep_date',
      disOrderId: 'dis_order_id',
      isVoluntary: 'is_voluntary',
      travelerInfoListShrink: 'traveler_info_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrCity: 'string',
      depCity: 'string',
      depDate: 'string',
      disOrderId: 'string',
      isVoluntary: 'number',
      travelerInfoListShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

