// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IntlFlightInventoryPriceCheckResponseBodyModule } from "./IntlFlightInventoryPriceCheckResponseBodyModule";


export class IntlFlightInventoryPriceCheckResponseBody extends $dara.Model {
  module?: IntlFlightInventoryPriceCheckResponseBodyModule;
  /**
   * @example
   * 92359A00-85D8-16C4-AED0-249618DEEC17
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
   * 2103ad1516839612078738332dea5c
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
      module: IntlFlightInventoryPriceCheckResponseBodyModule,
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

