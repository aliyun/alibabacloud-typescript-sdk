// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TravelStandardListQueryResponseBodyModule } from "./TravelStandardListQueryResponseBodyModule";


export class TravelStandardListQueryResponseBody extends $dara.Model {
  /**
   * @example
   * 0
   */
  code?: number;
  message?: string;
  module?: TravelStandardListQueryResponseBodyModule;
  /**
   * @example
   * 05F9C201-1B53-5905-94AB-0D7444D8466A
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * traceId
   * 
   * @example
   * 21041aa317070996148671005d0a0b
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
      code: 'number',
      message: 'string',
      module: TravelStandardListQueryResponseBodyModule,
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

