// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IntlFlightReShopApplyResponseBodyModule extends $dara.Model {
  /**
   * @example
   * asyncKey_2390u230slgw023
   */
  asyncApplyKey?: string;
  /**
   * @example
   * JPM20241024354
   */
  outReShopApplyId?: string;
  /**
   * @example
   * 1009035199432
   */
  reShopApplyId?: string;
  static names(): { [key: string]: string } {
    return {
      asyncApplyKey: 'async_apply_key',
      outReShopApplyId: 'out_re_shop_apply_id',
      reShopApplyId: 're_shop_apply_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncApplyKey: 'string',
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

export class IntlFlightReShopApplyResponseBody extends $dara.Model {
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
  module?: IntlFlightReShopApplyResponseBodyModule;
  /**
   * @example
   * 88BA5020-561C-51F5-8E73-6659729913F0
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
      module: IntlFlightReShopApplyResponseBodyModule,
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

