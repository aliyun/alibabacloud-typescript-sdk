// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightRefundPreCalRequestPassengerSegmentInfoList extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CA1982
   */
  flightNo?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  passengerName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 23112
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

