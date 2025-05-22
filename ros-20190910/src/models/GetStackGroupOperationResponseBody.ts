// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetStackGroupOperationResponseBodyStackGroupOperation } from "./GetStackGroupOperationResponseBodyStackGroupOperation";


export class GetStackGroupOperationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 14A07460-EBE7-47CA-9757-12CC4761D47A
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the stack group operation.
   */
  stackGroupOperation?: GetStackGroupOperationResponseBodyStackGroupOperation;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      stackGroupOperation: 'StackGroupOperation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      stackGroupOperation: GetStackGroupOperationResponseBodyStackGroupOperation,
    };
  }

  validate() {
    if(this.stackGroupOperation && typeof (this.stackGroupOperation as any).validate === 'function') {
      (this.stackGroupOperation as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

