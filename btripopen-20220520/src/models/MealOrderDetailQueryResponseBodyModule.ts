// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MealOrderDetailQueryResponseBodyModule extends $dara.Model {
  applyId?: number;
  /**
   * @example
   * 2024032522001423601409393178
   */
  corpCodeOrderId?: string;
  /**
   * @example
   * dingaa15ca45cba9ee744a5
   */
  corpId?: string;
  /**
   * @example
   * 100
   */
  corpPayAmount?: number;
  /**
   * @example
   * 100
   */
  corpRefundAmount?: number;
  mealReason?: string;
  merchantName?: string;
  /**
   * @example
   * 1034088398073015303
   */
  orderId?: string;
  /**
   * @example
   * 1
   */
  orderStatus?: number;
  /**
   * @example
   * 1
   */
  orderSubStatus?: number;
  orderType?: string;
  /**
   * @example
   * 100
   */
  payAmount?: number;
  /**
   * @example
   * 1
   */
  payType?: number;
  /**
   * @example
   * 100
   */
  personPayAmount?: number;
  /**
   * @example
   * 100
   */
  personRefundAmount?: number;
  /**
   * @example
   * 100
   */
  refundAmount?: number;
  sceneName?: string;
  /**
   * @example
   * 1711702782
   */
  settleTime?: string;
  thirdPartApplyId?: string;
  /**
   * @example
   * 17509140000
   */
  userAlipayId?: string;
  /**
   * @example
   * 014134681304653773
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      applyId: 'apply_id',
      corpCodeOrderId: 'corp_code_order_id',
      corpId: 'corp_id',
      corpPayAmount: 'corp_pay_amount',
      corpRefundAmount: 'corp_refund_amount',
      mealReason: 'meal_reason',
      merchantName: 'merchant_name',
      orderId: 'order_id',
      orderStatus: 'order_status',
      orderSubStatus: 'order_sub_status',
      orderType: 'order_type',
      payAmount: 'pay_amount',
      payType: 'pay_type',
      personPayAmount: 'person_pay_amount',
      personRefundAmount: 'person_refund_amount',
      refundAmount: 'refund_amount',
      sceneName: 'scene_name',
      settleTime: 'settle_time',
      thirdPartApplyId: 'third_part_apply_id',
      userAlipayId: 'user_alipay_id',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyId: 'number',
      corpCodeOrderId: 'string',
      corpId: 'string',
      corpPayAmount: 'number',
      corpRefundAmount: 'number',
      mealReason: 'string',
      merchantName: 'string',
      orderId: 'string',
      orderStatus: 'number',
      orderSubStatus: 'number',
      orderType: 'string',
      payAmount: 'number',
      payType: 'number',
      personPayAmount: 'number',
      personRefundAmount: 'number',
      refundAmount: 'number',
      sceneName: 'string',
      settleTime: 'string',
      thirdPartApplyId: 'string',
      userAlipayId: 'string',
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

