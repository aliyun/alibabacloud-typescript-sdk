// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TicketChangingApplyRequestModifyFlightInfoListPassengerInfoList extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CA1703
   */
  originFlightNo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  outUserId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  passengerName?: string;
  static names(): { [key: string]: string } {
    return {
      originFlightNo: 'origin_flight_no',
      outUserId: 'out_user_id',
      passengerName: 'passenger_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      originFlightNo: 'string',
      outUserId: 'string',
      passengerName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

