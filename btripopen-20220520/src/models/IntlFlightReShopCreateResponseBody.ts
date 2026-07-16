// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IntlFlightReShopCreateResponseBodyModule extends $dara.Model {
  asyncApplyKey?: string;
  needRetry?: boolean;
  nextRetryInterval?: number;
  outReShopApplyId?: string;
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
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @example
   * 成功
   */
  message?: string;
  module?: IntlFlightReShopCreateResponseBodyModule;
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

