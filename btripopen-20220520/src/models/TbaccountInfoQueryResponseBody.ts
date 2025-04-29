// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TBAccountInfoQueryResponseBodyModule } from "./TbaccountInfoQueryResponseBodyModule";


export class TBAccountInfoQueryResponseBody extends $dara.Model {
  /**
   * @example
   * 0
   */
  code?: string;
  message?: string;
  module?: TBAccountInfoQueryResponseBodyModule;
  /**
   * @example
   * 456456575656757
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 210f07f316603757445272547d959f
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
      module: TBAccountInfoQueryResponseBodyModule,
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

