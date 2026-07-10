// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCompenInfosForOpResponseBodyModule extends $dara.Model {
  amount?: number;
  category?: number;
  compenId?: string;
  compensationType?: string;
  orderId?: string;
  settleTime?: string;
  settleType?: number;
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
  code?: string;
  message?: string;
  module?: QueryCompenInfosForOpResponseBodyModule[];
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

