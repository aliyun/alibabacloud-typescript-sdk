// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IntlFlightSegmentAvailableCertResponseBodyModule } from "./IntlFlightSegmentAvailableCertResponseBodyModule";


export class IntlFlightSegmentAvailableCertResponseBody extends $dara.Model {
  module?: IntlFlightSegmentAvailableCertResponseBodyModule;
  /**
   * @example
   * 210bc81a17090871660176894d008c
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
   * 213e1ea516895592036143147e5864
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
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
      module: IntlFlightSegmentAvailableCertResponseBodyModule,
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

