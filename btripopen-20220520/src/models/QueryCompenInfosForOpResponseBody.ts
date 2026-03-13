// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCompenInfosForOpResponseBodyModule extends $dara.Model {
  /**
   * @example
   * 500
   */
  amount?: number;
  /**
   * @example
   * 1
   */
  category?: number;
  /**
   * @example
   * 82508250249123456
   */
  compenId?: string;
  /**
   * @example
   * 1
   */
  compensationType?: string;
  /**
   * @example
   * 1002086203277812345
   */
  orderId?: string;
  /**
   * @example
   * 2025-09-22 20:13:58
   */
  settleTime?: string;
  /**
   * @example
   * 8
   */
  settleType?: number;
  /**
   * @example
   * 999-12345678
   */
  ticketNo?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'amount',
      category: 'category',
      compenId: 'compen_id',
      compensationType: 'compensation_type',
      orderId: 'order_id',
      settleTime: 'settle_time',
      settleType: 'settle_type',
      ticketNo: 'ticket_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      category: 'number',
      compenId: 'string',
      compensationType: 'string',
      orderId: 'string',
      settleTime: 'string',
      settleType: 'number',
      ticketNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCompenInfosForOpResponseBody extends $dara.Model {
  /**
   * @example
   * SUCCESS
   */
  code?: string;
  message?: string;
  module?: QueryCompenInfosForOpResponseBodyModule[];
  /**
   * @example
   * 407543AF-2BD9-5890-BD92-9D1AB7218B27
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 210f079e16603757182131635d866a
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
      module: { 'type': 'array', 'itemType': QueryCompenInfosForOpResponseBodyModule },
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.module)) {
      $dara.Model.validateArray(this.module);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

