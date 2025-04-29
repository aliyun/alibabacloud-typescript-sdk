// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightRefundPreCalV2ShrinkRequest extends $dara.Model {
  /**
   * @example
   * cheshiapi
   */
  isvName?: string;
  /**
   * @example
   * 3454043907950204159
   */
  orderId?: string;
  /**
   * @example
   * 1017002195370467137
   */
  outOrderId?: string;
  passengerSegmentRelationsShrink?: string;
  /**
   * @example
   * 2
   */
  preCalType?: number;
  ticketNosShrink?: string;
  /**
   * @example
   * true
   */
  voluntary?: boolean;
  static names(): { [key: string]: string } {
    return {
      isvName: 'isv_name',
      orderId: 'order_id',
      outOrderId: 'out_order_id',
      passengerSegmentRelationsShrink: 'passenger_segment_relations',
      preCalType: 'pre_cal_type',
      ticketNosShrink: 'ticket_nos',
      voluntary: 'voluntary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isvName: 'string',
      orderId: 'string',
      outOrderId: 'string',
      passengerSegmentRelationsShrink: 'string',
      preCalType: 'number',
      ticketNosShrink: 'string',
      voluntary: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

