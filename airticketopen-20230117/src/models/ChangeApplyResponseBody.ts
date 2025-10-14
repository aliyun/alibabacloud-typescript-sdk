// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeApplyResponseBodyDataChangeOrdersPassengers extends $dara.Model {
  /**
   * @example
   * 411***********4411
   */
  document?: string;
  /**
   * @example
   * SAN
   */
  firstName?: string;
  /**
   * @example
   * ZHANG
   */
  lastName?: string;
  static names(): { [key: string]: string } {
    return {
      document: 'document',
      firstName: 'first_name',
      lastName: 'last_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      document: 'string',
      firstName: 'string',
      lastName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeApplyResponseBodyDataChangeOrders extends $dara.Model {
  /**
   * @example
   * 49884*****950
   */
  changeOrderNum?: number;
  /**
   * @example
   * 0
   */
  changeOrderStatus?: number;
  /**
   * @example
   * desc reason
   */
  failReason?: string;
  passengers?: ChangeApplyResponseBodyDataChangeOrdersPassengers[];
  static names(): { [key: string]: string } {
    return {
      changeOrderNum: 'change_order_num',
      changeOrderStatus: 'change_order_status',
      failReason: 'fail_reason',
      passengers: 'passengers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderNum: 'number',
      changeOrderStatus: 'number',
      failReason: 'string',
      passengers: { 'type': 'array', 'itemType': ChangeApplyResponseBodyDataChangeOrdersPassengers },
    };
  }

  validate() {
    if(Array.isArray(this.passengers)) {
      $dara.Model.validateArray(this.passengers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeApplyResponseBodyData extends $dara.Model {
  changeOrders?: ChangeApplyResponseBodyDataChangeOrders[];
  /**
   * @example
   * 4988430***950
   */
  orderNum?: number;
  static names(): { [key: string]: string } {
    return {
      changeOrders: 'change_orders',
      orderNum: 'order_num',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrders: { 'type': 'array', 'itemType': ChangeApplyResponseBodyDataChangeOrders },
      orderNum: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.changeOrders)) {
      $dara.Model.validateArray(this.changeOrders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeApplyResponseBody extends $dara.Model {
  /**
   * @example
   * 51593418-8C73-5E47-8BA8-3F1D4A00CC0B
   */
  requestId?: string;
  data?: ChangeApplyResponseBodyData;
  /**
   * @example
   * null
   */
  errorCode?: string;
  /**
   * @example
   * null
   */
  errorData?: any;
  /**
   * @example
   * null
   */
  errorMsg?: string;
  /**
   * @example
   * 200
   */
  status?: number;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'data',
      errorCode: 'error_code',
      errorData: 'error_data',
      errorMsg: 'error_msg',
      status: 'status',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: ChangeApplyResponseBodyData,
      errorCode: 'string',
      errorData: 'any',
      errorMsg: 'string',
      status: 'number',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

