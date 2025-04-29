// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IntlFlightCreateOrderResponseBodyModule } from "./IntlFlightCreateOrderResponseBodyModule";


export class IntlFlightCreateOrderResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  module?: IntlFlightCreateOrderResponseBodyModule;
  /**
   * @example
   * C61ECFF6-606B-5F66-B81D-D77369043A5F
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
   * 2103ad1116826479016562032da98c
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'http_status_code',
      module: 'module',
      requestId: 'requestId',
      resultCode: 'result_code',
      resultMsg: 'result_msg',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      module: IntlFlightCreateOrderResponseBodyModule,
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

