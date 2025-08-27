// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightRefundApplyV2RequestPassengerSegmentRelations extends $dara.Model {
  /**
   * @example
   * 1075004
   */
  passengerId?: string;
  segmentIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      passengerId: 'passenger_id',
      segmentIdList: 'segment_id_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passengerId: 'string',
      segmentIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.segmentIdList)) {
      $dara.Model.validateArray(this.segmentIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightRefundApplyV2Request extends $dara.Model {
  /**
   * @example
   * cheshiapi
   */
  isvName?: string;
  /**
   * @example
   * 1683901850297448082
   */
  orderId?: string;
  /**
   * @example
   * 1017002195370467137
   */
  outOrderId?: string;
  /**
   * @example
   * 1019195836916039
   */
  outSubOrderId?: string;
  passengerSegmentRelations?: FlightRefundApplyV2RequestPassengerSegmentRelations[];
  /**
   * @example
   * 2
   */
  preCalType?: number;
  refundReason?: string;
  /**
   * @example
   * 2
   */
  refundReasonType?: number;
  ticketNos?: string[];
  /**
   * @example
   * 10000
   */
  totalRefundPrice?: number;
  uploadPictUrls?: string;
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
      outSubOrderId: 'out_sub_order_id',
      passengerSegmentRelations: 'passenger_segment_relations',
      preCalType: 'pre_cal_type',
      refundReason: 'refund_reason',
      refundReasonType: 'refund_reason_type',
      ticketNos: 'ticket_nos',
      totalRefundPrice: 'total_refund_price',
      uploadPictUrls: 'upload_pict_urls',
      voluntary: 'voluntary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isvName: 'string',
      orderId: 'string',
      outOrderId: 'string',
      outSubOrderId: 'string',
      passengerSegmentRelations: { 'type': 'array', 'itemType': FlightRefundApplyV2RequestPassengerSegmentRelations },
      preCalType: 'number',
      refundReason: 'string',
      refundReasonType: 'number',
      ticketNos: { 'type': 'array', 'itemType': 'string' },
      totalRefundPrice: 'number',
      uploadPictUrls: 'string',
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

