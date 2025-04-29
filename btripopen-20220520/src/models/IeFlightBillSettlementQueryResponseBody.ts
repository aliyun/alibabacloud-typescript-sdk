// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IeFlightBillSettlementQueryResponseBodyModule } from "./IeFlightBillSettlementQueryResponseBodyModule";


export class IeFlightBillSettlementQueryResponseBody extends $dara.Model {
  /**
   * @example
   * SUCCESS
   */
  code?: string;
  message?: string;
  module?: IeFlightBillSettlementQueryResponseBodyModule;
  /**
   * @example
   * true
   */
  morePage?: boolean;
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
   * 210e842b16611337974412836dae27
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      morePage: 'more_page',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: IeFlightBillSettlementQueryResponseBodyModule,
      morePage: 'boolean',
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

