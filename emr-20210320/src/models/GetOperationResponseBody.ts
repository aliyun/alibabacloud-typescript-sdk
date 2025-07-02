// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Operation } from "./Operation";


export class GetOperationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The operation that was performed.
   */
  operation?: Operation;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9E3A7161-EB7B-172B-8D18-FFB06BA3896A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      operation: 'Operation',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operation: Operation,
      requestId: 'string',
    };
  }

  validate() {
    if(this.operation && typeof (this.operation as any).validate === 'function') {
      (this.operation as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

