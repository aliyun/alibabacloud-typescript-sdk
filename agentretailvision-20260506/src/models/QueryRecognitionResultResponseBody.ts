// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryRecognitionResultResponseBodyDataResultCheckoutInfo extends $dara.Model {
  /**
   * @remarks
   * Checkout status
   * 
   * @example
   * TRUSTED
   */
  checkoutStatus?: string;
  static names(): { [key: string]: string } {
    return {
      checkoutStatus: 'CheckoutStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkoutStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecognitionResultResponseBodyDataResultItems extends $dara.Model {
  /**
   * @remarks
   * Business Item ID
   * 
   * @example
   * 690234524880781
   */
  itemUniqueId?: string;
  /**
   * @remarks
   * Platform Item ID
   * 
   * @example
   * 535c3daaee3b4b5382db4913413419bc2d
   */
  platformItemId?: string;
  /**
   * @remarks
   * Item quantity
   * 
   * @example
   * 1
   */
  quantity?: number;
  static names(): { [key: string]: string } {
    return {
      itemUniqueId: 'ItemUniqueId',
      platformItemId: 'PlatformItemId',
      quantity: 'Quantity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemUniqueId: 'string',
      platformItemId: 'string',
      quantity: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecognitionResultResponseBodyDataResult extends $dara.Model {
  /**
   * @remarks
   * Checkout information
   */
  checkoutInfo?: QueryRecognitionResultResponseBodyDataResultCheckoutInfo;
  /**
   * @remarks
   * List of recognized items
   */
  items?: QueryRecognitionResultResponseBodyDataResultItems[];
  static names(): { [key: string]: string } {
    return {
      checkoutInfo: 'CheckoutInfo',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkoutInfo: QueryRecognitionResultResponseBodyDataResultCheckoutInfo,
      items: { 'type': 'array', 'itemType': QueryRecognitionResultResponseBodyDataResultItems },
    };
  }

  validate() {
    if(this.checkoutInfo && typeof (this.checkoutInfo as any).validate === 'function') {
      (this.checkoutInfo as any).validate();
    }
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecognitionResultResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Business unique idempotent ID
   * 
   * @example
   * ORDER_001
   */
  orderUniqueId?: string;
  /**
   * @remarks
   * Recognition result
   */
  result?: QueryRecognitionResultResponseBodyDataResult;
  /**
   * @remarks
   * Platform Task ID
   * 
   * @example
   * TASK_001
   */
  taskId?: string;
  /**
   * @remarks
   * Task status
   * 
   * @example
   * COMPLETED
   */
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      orderUniqueId: 'OrderUniqueId',
      result: 'Result',
      taskId: 'TaskId',
      taskStatus: 'TaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderUniqueId: 'string',
      result: QueryRecognitionResultResponseBodyDataResult,
      taskId: 'string',
      taskStatus: 'string',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecognitionResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * Error code. This parameter is not returned for a successful call.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Task details
   */
  data?: QueryRecognitionResultResponseBodyData;
  /**
   * @remarks
   * Error message. This parameter is not returned for a successful call.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * E1AD60F1-BAC7-546B-9533-E7AD02B16E3F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. true: The call was successful. false: The call failed.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryRecognitionResultResponseBodyData,
      message: 'string',
      requestId: 'string',
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

