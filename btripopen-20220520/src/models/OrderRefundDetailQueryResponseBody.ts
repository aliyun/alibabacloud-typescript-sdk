// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OrderRefundDetailQueryResponseBodyModuleRefundDetails extends $dara.Model {
  /**
   * @example
   * ALIPAY
   */
  personPayChannel?: string;
  /**
   * @example
   * 2025010223001423691442474885
   */
  personRefundId?: string;
  /**
   * @example
   * 5000
   */
  refundAmount?: number;
  /**
   * @example
   * 4800
   */
  refundAmountCorp?: number;
  /**
   * @example
   * 200
   */
  refundAmountPerson?: number;
  /**
   * @example
   * ZLJD12241231000002
   */
  supplierRefundId?: string;
  static names(): { [key: string]: string } {
    return {
      personPayChannel: 'person_pay_channel',
      personRefundId: 'person_refund_id',
      refundAmount: 'refund_amount',
      refundAmountCorp: 'refund_amount_corp',
      refundAmountPerson: 'refund_amount_person',
      supplierRefundId: 'supplier_refund_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      personPayChannel: 'string',
      personRefundId: 'string',
      refundAmount: 'number',
      refundAmountCorp: 'number',
      refundAmountPerson: 'number',
      supplierRefundId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OrderRefundDetailQueryResponseBodyModule extends $dara.Model {
  /**
   * @example
   * 1017002195370467138
   */
  orderId?: string;
  refundDetails?: OrderRefundDetailQueryResponseBodyModuleRefundDetails[];
  /**
   * @example
   * 10000
   */
  totalAmount?: number;
  static names(): { [key: string]: string } {
    return {
      orderId: 'order_id',
      refundDetails: 'refund_details',
      totalAmount: 'total_amount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      refundDetails: { 'type': 'array', 'itemType': OrderRefundDetailQueryResponseBodyModuleRefundDetails },
      totalAmount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.refundDetails)) {
      $dara.Model.validateArray(this.refundDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OrderRefundDetailQueryResponseBody extends $dara.Model {
  /**
   * @example
   * 8CA36096-1FEE-5756-86DD-D195FEDE080E
   */
  requestId?: string;
  /**
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @example
   * true
   */
  message?: string;
  module?: OrderRefundDetailQueryResponseBodyModule;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      message: 'message',
      module: 'module',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      message: 'string',
      module: OrderRefundDetailQueryResponseBodyModule,
      success: 'boolean',
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

