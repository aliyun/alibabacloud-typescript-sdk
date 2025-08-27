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

export class FlightRefundPreCalRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dis123
   */
  disOrderId?: string;
  /**
   * @example
   * 1
   */
  isVoluntary?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  passengerSegmentInfoList?: FlightRefundPreCalRequestPassengerSegmentInfoList[];
  static names(): { [key: string]: string } {
    return {
      disOrderId: 'dis_order_id',
      isVoluntary: 'is_voluntary',
      passengerSegmentInfoList: 'passenger_segment_info_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disOrderId: 'string',
      isVoluntary: 'string',
      passengerSegmentInfoList: { 'type': 'array', 'itemType': FlightRefundPreCalRequestPassengerSegmentInfoList },
    };
  }

  validate() {
    if(Array.isArray(this.passengerSegmentInfoList)) {
      $dara.Model.validateArray(this.passengerSegmentInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

