// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDatabaseExportOrderDetailResponseBodyDatabaseExportOrderDetail } from "./GetDatabaseExportOrderDetailResponseBodyDatabaseExportOrderDetail";


export class GetDatabaseExportOrderDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the database export ticket.
   */
  databaseExportOrderDetail?: GetDatabaseExportOrderDetailResponseBodyDatabaseExportOrderDetail;
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
   * CFD8FE00-36D9-4C1B-940D-65A7B73D9066
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      databaseExportOrderDetail: 'DatabaseExportOrderDetail',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseExportOrderDetail: GetDatabaseExportOrderDetailResponseBodyDatabaseExportOrderDetail,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.databaseExportOrderDetail && typeof (this.databaseExportOrderDetail as any).validate === 'function') {
      (this.databaseExportOrderDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

