// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTaskAsyncResponseBody extends $dara.Model {
  /**
   * @remarks
   * The operation ID, used to retrieve the result of the asynchronous node update. You can obtain this value from the `UpdateTaskAsync` operation.
   * 
   * @example
   * e15ad21c-b0e9-4792-8f55-b037xxxxxxxx
   */
  operationId?: string;
  /**
   * @remarks
   * The unique ID of this request. If an error occurs, you can use this ID to troubleshoot the issue.
   * 
   * @example
   * 10000001
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      operationId: 'OperationId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

