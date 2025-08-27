// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelOrderCancelResponseBodyModule extends $dara.Model {
  /**
   * @example
   * true
   */
  cancelSuccess?: boolean;
  code?: string;
  desc?: string;
  /**
   * @example
   * 100
   */
  forfeitFee?: number;
  static names(): { [key: string]: string } {
    return {
      cancelSuccess: 'cancel_success',
      code: 'code',
      desc: 'desc',
      forfeitFee: 'forfeit_fee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cancelSuccess: 'boolean',
      code: 'string',
      desc: 'string',
      forfeitFee: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelOrderCancelResponseBody extends $dara.Model {
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
  /**
   * @remarks
   * module。
   */
  module?: HotelOrderCancelResponseBodyModule;
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
      module: HotelOrderCancelResponseBodyModule,
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

