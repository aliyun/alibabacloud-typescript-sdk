// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HotelOrderChangeApplyResponseBodyModule } from "./HotelOrderChangeApplyResponseBodyModule";


export class HotelOrderChangeApplyResponseBody extends $dara.Model {
  /**
   * @example
   * 0
   */
  code?: string;
  message?: string;
  /**
   * @remarks
   * module
   */
  module?: HotelOrderChangeApplyResponseBodyModule;
  /**
   * @example
   * 6E9ABA14-5135-58FB-9DFC-C751B5855605
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 215045ec17018285034106091e8ba9
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
      module: HotelOrderChangeApplyResponseBodyModule,
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

