// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateDatabaseExportOrderResponseBodyCreateOrderResult } from "./CreateDatabaseExportOrderResponseBodyCreateOrderResult";


export class CreateDatabaseExportOrderResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the ticket.
   */
  createOrderResult?: CreateDatabaseExportOrderResponseBodyCreateOrderResult;
  /**
   * @remarks
   * The error code returned.
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
   * 0C1CB646-1DE4-4AD0-B4A4-7D47DD52E931
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
      createOrderResult: CreateDatabaseExportOrderResponseBodyCreateOrderResult,
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

