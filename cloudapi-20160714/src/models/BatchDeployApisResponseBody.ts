// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchDeployApisResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the operation.
   * 
   * @example
   * 2a322599-8e38-428a-a306-9b21ea2129bf
   */
  operationId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E7FE7172-AA75-5880-B6F7-C00893E9BC06
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

