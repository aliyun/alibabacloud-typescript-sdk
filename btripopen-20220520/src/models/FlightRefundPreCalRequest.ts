// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FlightRefundPreCalRequestPassengerSegmentInfoList } from "./FlightRefundPreCalRequestPassengerSegmentInfoList";


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

