// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataImportOrderResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the ticket.
   */
  createOrderResult?: number[];
  /**
   * @remarks
   * The error code returned if the request fails.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the request fails.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0C1CB646-1DE4-4AD0-B4A4-7D47DD52E931
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   **true**: The request is successful.
   * *   **false**: The request fails.
   * 
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

