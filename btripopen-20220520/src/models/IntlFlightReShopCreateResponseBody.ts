// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IntlFlightReShopCreateResponseBodyModule extends $dara.Model {
  /**
   * @remarks
   * The asynchronous application key, used in the asynchronous commit pattern.
   * 
   * @example
   * asyncKey_2390u230slgw023
   */
  asyncApplyKey?: string;
  /**
   * @remarks
   * Indicates whether a retry is required. This parameter is used in the asynchronous commit pattern.
   */
  needRetry?: boolean;
  /**
   * @remarks
   * The retry time interval, in milliseconds.
   * 
   * @example
   * 1000
   */
  nextRetryInterval?: number;
  /**
   * @remarks
   * The external rebooking application ID.
   * 
   * @example
   * JPM20241024354
   */
  outReShopApplyId?: string;
  /**
   * @remarks
   * The business travel rebooking application ID.
   * 
   * @example
   * 1017035199374643191
   */
  reShopApplyId?: string;
  static names(): { [key: string]: string } {
    return {
      asyncApplyKey: 'async_apply_key',
      needRetry: 'need_retry',
      nextRetryInterval: 'next_retry_interval',
      outReShopApplyId: 'out_re_shop_apply_id',
      reShopApplyId: 're_shop_apply_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncApplyKey: 'string',
      needRetry: 'boolean',
      nextRetryInterval: 'number',
      outReShopApplyId: 'string',
      reShopApplyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightReShopCreateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * 成功
   */
  message?: string;
  /**
   * @remarks
   * The response data.
   */
  module?: IntlFlightReShopCreateResponseBodyModule;
  /**
   * @remarks
   * The unique ID of the request.
   * 
   * @example
   * 407543AF-2BD9-5890-BD92-9D1AB7218B27
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The global trace ID of the request, typically used for troubleshooting.
   * 
   * @example
   * 210bc4b116835992457938931db4de
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
      module: IntlFlightReShopCreateResponseBodyModule,
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

