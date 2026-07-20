// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightRefundApplyV2ShrinkRequest extends $dara.Model {
  /**
   * @example
   * name
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
  passengerSegmentRelationsShrink?: string;
  /**
   * @example
   * 2
   */
  preCalType?: number;
  /**
   * @example
   * 我要改变行程计划、我不想飞
   */
  refundReason?: string;
  /**
   * @example
   * 2
   */
  refundReasonType?: number;
  ticketNosShrink?: string;
  /**
   * @example
   * 10000
   */
  totalRefundPrice?: number;
  /**
   * @example
   * 退票附件地址
   */
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
      passengerSegmentRelationsShrink: 'passenger_segment_relations',
      preCalType: 'pre_cal_type',
      refundReason: 'refund_reason',
      refundReasonType: 'refund_reason_type',
      ticketNosShrink: 'ticket_nos',
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
      passengerSegmentRelationsShrink: 'string',
      preCalType: 'number',
      refundReason: 'string',
      refundReasonType: 'number',
      ticketNosShrink: 'string',
      totalRefundPrice: 'number',
      uploadPictUrls: 'string',
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

