// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MealOrderDetailQueryResponseBodyModule extends $dara.Model {
  applyId?: number;
  corpCodeOrderId?: string;
  corpId?: string;
  corpPayAmount?: number;
  corpRefundAmount?: number;
  mealReason?: string;
  merchantName?: string;
  orderId?: string;
  orderStatus?: number;
  orderSubStatus?: number;
  orderType?: string;
  payAmount?: number;
  payType?: number;
  personPayAmount?: number;
  personRefundAmount?: number;
  receiptImageUrls?: string;
  refundAmount?: number;
  sceneName?: string;
  settleTime?: string;
  thirdPartApplyId?: string;
  userAlipayId?: string;
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
      receiptImageUrls: 'receipt_image_urls',
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
      receiptImageUrls: 'string',
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

export class MealOrderDetailQueryResponseBody extends $dara.Model {
  code?: string;
  message?: string;
  module?: MealOrderDetailQueryResponseBodyModule;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: MealOrderDetailQueryResponseBodyModule,
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  validate() {
    if(this.module && typeof (this.module as any).validate === 'function') {
      (this.module as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

