// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateDataExportOrderResponseBodyCreateOrderResult } from "./CreateDataExportOrderResponseBodyCreateOrderResult";


export class CreateDataExportOrderResponseBody extends $dara.Model {
  /**
   * @remarks
   * The content of the ticket.
   */
  createOrderResult?: CreateDataExportOrderResponseBodyCreateOrderResult;
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
   * The error message returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The request ID. You can use the ID to query logs and troubleshoot issues.
   * 
   * @example
   * 7FAD400F-7A5C-4193-8F9A-39D86C4F0231
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
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
      createOrderResult: CreateDataExportOrderResponseBodyCreateOrderResult,
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

