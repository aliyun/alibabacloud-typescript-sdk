// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteBackendModelResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the operation.
   * 
   * @example
   * f7834d74be4e41aa8e607b0fafae9b33
   */
  operationId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D1B18FFE-4A81-59D8-AA02-1817098977CD
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

