// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateOrderResponseBodyCreateOrderResult } from "./CreateOrderResponseBodyCreateOrderResult";


export class CreateOrderResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the ticket.
   */
  createOrderResult?: CreateOrderResponseBodyCreateOrderResult;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
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
   * 427688B8-ADFB-4C4E-9D45-EF5C1FD6****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**: The request was successful.
   * *   **false**: The request failed.
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
      createOrderResult: CreateOrderResponseBodyCreateOrderResult,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.createOrderResult && typeof (this.createOrderResult as any).validate === 'function') {
      (this.createOrderResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

