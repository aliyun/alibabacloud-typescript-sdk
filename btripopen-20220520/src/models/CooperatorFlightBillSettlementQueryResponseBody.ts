// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CooperatorFlightBillSettlementQueryResponseBodyModule } from "./CooperatorFlightBillSettlementQueryResponseBodyModule";


export class CooperatorFlightBillSettlementQueryResponseBody extends $dara.Model {
  /**
   * @example
   * 0
   */
  code?: string;
  message?: string;
  module?: CooperatorFlightBillSettlementQueryResponseBodyModule;
  /**
   * @example
   * 2103ad1216872266815642815d7e03
   */
  requestId?: string;
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
   * 213e20c816937929648732715e16f1
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
      module: CooperatorFlightBillSettlementQueryResponseBodyModule,
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

