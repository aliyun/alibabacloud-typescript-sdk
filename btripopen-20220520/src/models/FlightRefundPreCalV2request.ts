// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FlightRefundPreCalV2RequestPassengerSegmentRelations } from "./FlightRefundPreCalV2requestPassengerSegmentRelations";


export class FlightRefundPreCalV2Request extends $dara.Model {
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
  passengerSegmentRelations?: FlightRefundPreCalV2RequestPassengerSegmentRelations[];
  /**
   * @example
   * 2
   */
  preCalType?: number;
  ticketNos?: string[];
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
      passengerSegmentRelations: 'passenger_segment_relations',
      preCalType: 'pre_cal_type',
      ticketNos: 'ticket_nos',
      voluntary: 'voluntary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isvName: 'string',
      orderId: 'string',
      outOrderId: 'string',
      passengerSegmentRelations: { 'type': 'array', 'itemType': FlightRefundPreCalV2RequestPassengerSegmentRelations },
      preCalType: 'number',
      ticketNos: { 'type': 'array', 'itemType': 'string' },
      voluntary: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.passengerSegmentRelations)) {
      $dara.Model.validateArray(this.passengerSegmentRelations);
    }
    if(Array.isArray(this.ticketNos)) {
      $dara.Model.validateArray(this.ticketNos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

