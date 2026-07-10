// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightRefundApplyShrinkRequest extends $dara.Model {
  corpRefundPrice?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  disOrderId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  disSubOrderId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  displayRefundMoney?: string;
  extraShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  isVoluntary?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  itemUnitIds?: string;
  passengerSegmentInfoListShrink?: string;
  personalRefundPrice?: number;
  reasonDetail?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  reasonType?: number;
  refundVoucherInfoShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sessionId?: string;
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

