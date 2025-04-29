// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IntlFlightOrderDetailResponseBodyModule } from "./IntlFlightOrderDetailResponseBodyModule";


export class IntlFlightOrderDetailResponseBody extends $dara.Model {
  module?: IntlFlightOrderDetailResponseBodyModule;
  /**
   * @example
   * A3F8DCAB-8301-5770-BD9F-71B0BF9E1A6E
   */
  requestId?: string;
  /**
   * @example
   * 0
   */
  resultCode?: string;
  resultMsg?: string;
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
      module: 'module',
      requestId: 'request_id',
      resultCode: 'result_code',
      resultMsg: 'result_msg',
      success: 'success',
      traceId: 'trace_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      module: IntlFlightOrderDetailResponseBodyModule,
      requestId: 'string',
      resultCode: 'string',
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

