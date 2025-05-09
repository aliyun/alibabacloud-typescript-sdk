// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DLFunction } from "./Dlfunction";


export class GetDataLakeFunctionResponseBody extends $dara.Model {
  /**
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @example
   * UnknownError
   */
  errorMessage?: string;
  function?: DLFunction;
  /**
   * @example
   * D911009F-3E95-5AFD-8CF1-73F7B4F15D6E
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      function: 'Function',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      function: DLFunction,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.function && typeof (this.function as any).validate === 'function') {
      (this.function as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

