// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightCancelOrderV2ResponseBodyModule extends $dara.Model {
  cancelTime?: string;
  static names(): { [key: string]: string } {
    return {
      cancelTime: 'cancel_time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cancelTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightCancelOrderV2ResponseBody extends $dara.Model {
  code?: string;
  message?: string;
  module?: FlightCancelOrderV2ResponseBodyModule;
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
      module: FlightCancelOrderV2ResponseBodyModule,
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

