// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TicketChangingCancelResponseBodyModule extends $dara.Model {
  /**
   * @example
   * 0000-00-00 00:00:00
   */
  cancelTime?: string;
  /**
   * @example
   * mid1243
   */
  disSubOrderId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      cancelTime: 'cancel_time',
      disSubOrderId: 'dis_sub_order_id',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cancelTime: 'string',
      disSubOrderId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketChangingCancelResponseBody extends $dara.Model {
  /**
   * @example
   * SUCCESS
   */
  code?: string;
  message?: string;
  module?: TicketChangingCancelResponseBodyModule;
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
      module: TicketChangingCancelResponseBodyModule,
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

