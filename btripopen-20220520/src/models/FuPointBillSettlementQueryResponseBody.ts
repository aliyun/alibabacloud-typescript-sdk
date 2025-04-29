// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FuPointBillSettlementQueryResponseBodyModule } from "./FuPointBillSettlementQueryResponseBodyModule";


export class FuPointBillSettlementQueryResponseBody extends $dara.Model {
  /**
   * @example
   * SUCCESS
   */
  code?: number;
  /**
   * @remarks
   * module。
   */
  module?: FuPointBillSettlementQueryResponseBodyModule;
  /**
   * @example
   * true
   */
  morePage?: boolean;
  /**
   * @example
   * 210bc22017109867047728291dd406
   */
  requestId?: string;
  resultMsg?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * trace_id
   * 
   * @example
   * 213e382517240341253056547e41fc
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      module: 'module',
      morePage: 'more_page',
      requestId: 'requestId',
      resultMsg: 'result_msg',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      module: FuPointBillSettlementQueryResponseBodyModule,
      morePage: 'boolean',
      requestId: 'string',
      resultMsg: 'string',
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

