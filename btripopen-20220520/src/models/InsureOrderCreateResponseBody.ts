// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { InsureOrderCreateResponseBodyModule } from "./InsureOrderCreateResponseBodyModule";


export class InsureOrderCreateResponseBody extends $dara.Model {
  /**
   * @example
   * SUCCESS
   */
  code?: string;
  message?: string;
  module?: InsureOrderCreateResponseBodyModule;
  /**
   * @example
   * C6055EA5-C566-511D-9FC4-5E4D45182711
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 210f079916782711059363565d6be1
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
      module: InsureOrderCreateResponseBodyModule,
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

