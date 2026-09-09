// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUpdateTaskResultRequest extends $dara.Model {
  /**
   * @remarks
   * The operation ID, which is used to query the result of the asynchronous node update. You can obtain this ID from the UpdateTaskAsync operation.
   * 
   * This parameter is required.
   * 
   * @example
   * e15ad21c-b0e9-4792-8f55-b037xxxxxxxx
   */
  operationId?: string;
  static names(): { [key: string]: string } {
    return {
      operationId: 'OperationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

