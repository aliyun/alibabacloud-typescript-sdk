// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightRefundApplyShrinkRequest extends $dara.Model {
  /**
   * @example
   * 100
   */
  corpRefundPrice?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dis123
   */
  disOrderId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * refu123
   */
  disSubOrderId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 100
   */
  displayRefundMoney?: string;
  extraShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  isVoluntary?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * FlightItem_9966772382
   */
  itemUnitIds?: string;
  passengerSegmentInfoListShrink?: string;
  /**
   * @example
   * 100
   */
  personalRefundPrice?: number;
  reasonDetail?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  reasonType?: number;
  refundVoucherInfoShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0f9418cd2ce34af49ab0de16fea166d1
   */
  sessionId?: string;
  /**
   * @example
   * 100
   */
  totalRefundPrice?: number;
  static names(): { [key: string]: string } {
    return {
      corpRefundPrice: 'corp_refund_price',
      disOrderId: 'dis_order_id',
      disSubOrderId: 'dis_sub_order_id',
      displayRefundMoney: 'display_refund_money',
      extraShrink: 'extra',
      isVoluntary: 'is_voluntary',
      itemUnitIds: 'item_unit_ids',
      passengerSegmentInfoListShrink: 'passenger_segment_info_list',
      personalRefundPrice: 'personal_refund_price',
      reasonDetail: 'reason_detail',
      reasonType: 'reason_type',
      refundVoucherInfoShrink: 'refund_voucher_info',
      sessionId: 'session_id',
      totalRefundPrice: 'total_refund_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpRefundPrice: 'number',
      disOrderId: 'string',
      disSubOrderId: 'string',
      displayRefundMoney: 'string',
      extraShrink: 'string',
      isVoluntary: 'number',
      itemUnitIds: 'string',
      passengerSegmentInfoListShrink: 'string',
      personalRefundPrice: 'number',
      reasonDetail: 'string',
      reasonType: 'number',
      refundVoucherInfoShrink: 'string',
      sessionId: 'string',
      totalRefundPrice: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

