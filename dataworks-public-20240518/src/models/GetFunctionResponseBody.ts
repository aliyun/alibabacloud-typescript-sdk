// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetFunctionResponseBodyFunction } from "./GetFunctionResponseBodyFunction";


export class GetFunctionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the UDF.
   */
  function?: GetFunctionResponseBodyFunction;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6CF95929-6D12-5A88-8CC3-4B2F4C2EXXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      function: 'Function',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      function: GetFunctionResponseBodyFunction,
      requestId: 'string',
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

