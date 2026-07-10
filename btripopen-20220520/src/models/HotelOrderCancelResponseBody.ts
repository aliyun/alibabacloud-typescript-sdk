// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelOrderCancelResponseBodyModule extends $dara.Model {
  cancelSuccess?: boolean;
  code?: string;
  desc?: string;
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
  code?: string;
  message?: string;
  module?: HotelOrderCancelResponseBodyModule;
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

