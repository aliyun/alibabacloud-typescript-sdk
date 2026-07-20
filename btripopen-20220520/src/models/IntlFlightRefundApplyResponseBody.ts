// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IntlFlightRefundApplyResponseBodyModule extends $dara.Model {
  /**
   * @example
   * 2025011317110900006
   */
  outRefundApplyId?: string;
  /**
   * @example
   * 1000000005186043
   */
  refundApplyId?: string;
  static names(): { [key: string]: string } {
    return {
      outRefundApplyId: 'out_refund_apply_id',
      refundApplyId: 'refund_apply_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outRefundApplyId: 'string',
      refundApplyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightRefundApplyResponseBody extends $dara.Model {
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
  module?: IntlFlightRefundApplyResponseBodyModule;
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
      module: IntlFlightRefundApplyResponseBodyModule,
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

