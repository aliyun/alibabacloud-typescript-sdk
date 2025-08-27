// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MealOrderListQueryResponseBodyModuleOrderList extends $dara.Model {
  /**
   * @example
   * 100
   */
  corpPayAmount?: number;
  merchantName?: string;
  /**
   * @example
   * 1034124198083211043
   */
  orderId?: string;
  /**
   * @example
   * 1
   */
  orderStatus?: number;
  orderType?: string;
  /**
   * @example
   * 100
   */
  payAmount?: number;
  /**
   * @example
   * 100
   */
  personPayAmount?: number;
  /**
   * @example
   * 1711705057
   */
  settleTime?: string;
  static names(): { [key: string]: string } {
    return {
      corpPayAmount: 'corp_pay_amount',
      merchantName: 'merchant_name',
      orderId: 'order_id',
      orderStatus: 'order_status',
      orderType: 'order_type',
      payAmount: 'pay_amount',
      personPayAmount: 'person_pay_amount',
      settleTime: 'settle_time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpPayAmount: 'number',
      merchantName: 'string',
      orderId: 'string',
      orderStatus: 'number',
      orderType: 'string',
      payAmount: 'number',
      personPayAmount: 'number',
      settleTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MealOrderListQueryResponseBodyModule extends $dara.Model {
  orderList?: MealOrderListQueryResponseBodyModuleOrderList[];
  static names(): { [key: string]: string } {
    return {
      orderList: 'order_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderList: { 'type': 'array', 'itemType': MealOrderListQueryResponseBodyModuleOrderList },
    };
  }

  validate() {
    if(Array.isArray(this.orderList)) {
      $dara.Model.validateArray(this.orderList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MealOrderListQueryResponseBody extends $dara.Model {
  /**
   * @example
   * 0
   */
  code?: string;
  /**
   * @example
   * noPermission
   */
  message?: string;
  module?: MealOrderListQueryResponseBodyModule;
  /**
   * @example
   * C61ECFF6-606B-5F66-B81D-D77369043A5F
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * traceId
   * 
   * @example
   * 21041ce316577904808056433edbb2
   */
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
      module: MealOrderListQueryResponseBodyModule,
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

