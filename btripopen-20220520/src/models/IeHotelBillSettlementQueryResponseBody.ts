// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IeHotelBillSettlementQueryResponseBodyModule } from "./IeHotelBillSettlementQueryResponseBodyModule";


export class IeHotelBillSettlementQueryResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  message?: string;
  /**
   * @remarks
   * module
   */
  module?: IeHotelBillSettlementQueryResponseBodyModule;
  /**
   * @example
   * 210e877f16763560074236874d5268
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  /**
   * @example
   * 2103a08a16861217249785276d5a87
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
      module: IeHotelBillSettlementQueryResponseBodyModule,
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

