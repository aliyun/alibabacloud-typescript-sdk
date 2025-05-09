// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProcCorrectOrderResponseBody extends $dara.Model {
  createOrderResult?: number[];
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
  /**
   * @example
   * 427688B8-ADFB-4C4E-9D45-EF5C1FD6E23D
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      createOrderResult: 'CreateOrderResult',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createOrderResult: { 'type': 'array', 'itemType': 'number' },
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.createOrderResult)) {
      $dara.Model.validateArray(this.createOrderResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

