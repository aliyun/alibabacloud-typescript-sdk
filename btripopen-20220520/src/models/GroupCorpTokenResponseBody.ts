// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GroupCorpTokenResponseBodyModule } from "./GroupCorpTokenResponseBodyModule";


export class GroupCorpTokenResponseBody extends $dara.Model {
  /**
   * @example
   * SUCCESS
   */
  code?: string;
  message?: string;
  module?: GroupCorpTokenResponseBodyModule;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * A5009956-1077-52FB-B520-EA8C7E91D722
   */
  requestId?: string;
  success?: string;
  /**
   * @remarks
   * traceId
   * 
   * @example
   * 210f079e16603757182131635d866a
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
      module: GroupCorpTokenResponseBodyModule,
      requestId: 'string',
      success: 'string',
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

