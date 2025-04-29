// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IntlFlightOtaSearchResponseBodyModule } from "./IntlFlightOtaSearchResponseBodyModule";


export class IntlFlightOtaSearchResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  message?: string;
  /**
   * @remarks
   * module。
   */
  module?: IntlFlightOtaSearchResponseBodyModule;
  /**
   * @example
   * 407543AF-2BD9-5890-BD92-9D1AB7218B27
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 2150435016896473589786246e03e9
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
      module: IntlFlightOtaSearchResponseBodyModule,
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

