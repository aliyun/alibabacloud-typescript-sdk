// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MealApplyAddResponseBodyModule } from "./MealApplyAddResponseBodyModule";


export class MealApplyAddResponseBody extends $dara.Model {
  /**
   * @example
   * 0
   */
  code?: number;
  message?: string;
  module?: MealApplyAddResponseBodyModule;
  /**
   * @example
   * B72B39C8-32DE-558D-AD1C-D53F11F6ADFE
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
   * 210e842b16611337974412836dae27
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
      module: MealApplyAddResponseBodyModule,
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

