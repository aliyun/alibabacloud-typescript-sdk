// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MealOrderDetailQueryResponseBodyModule } from "./MealOrderDetailQueryResponseBodyModule";


export class MealOrderDetailQueryResponseBody extends $dara.Model {
  /**
   * @example
   * 0
   */
  code?: string;
  /**
   * @example
   * None
   */
  message?: string;
  module?: MealOrderDetailQueryResponseBodyModule;
  /**
   * @example
   * 9BCDD5DE-E6CB-5C25-93B9-9BE178A0AA56
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
      module: MealOrderDetailQueryResponseBodyModule,
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

