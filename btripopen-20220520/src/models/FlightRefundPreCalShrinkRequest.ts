// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightRefundPreCalShrinkRequest extends $dara.Model {
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
  passengerSegmentInfoListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      disOrderId: 'dis_order_id',
      isVoluntary: 'is_voluntary',
      passengerSegmentInfoListShrink: 'passenger_segment_info_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disOrderId: 'string',
      isVoluntary: 'string',
      passengerSegmentInfoListShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

