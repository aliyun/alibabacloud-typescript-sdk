// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightRefundApplyRequestPassengerSegmentInfoList extends $dara.Model {
  flightNo?: string;
  passengerName?: string;
  /**
   * @example
   * 1245
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      flightNo: 'flight_no',
      passengerName: 'passenger_name',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flightNo: 'string',
      passengerName: 'string',
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

