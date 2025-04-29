// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IntlFlightOrderPayResponseBodyModule } from "./IntlFlightOrderPayResponseBodyModule";


export class IntlFlightOrderPayResponseBody extends $dara.Model {
  module?: IntlFlightOrderPayResponseBodyModule;
  /**
   * @example
   * 9BCDD5DE-E6CB-5C25-93B9-9BE178A0AA56
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
      module: IntlFlightOrderPayResponseBodyModule,
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

