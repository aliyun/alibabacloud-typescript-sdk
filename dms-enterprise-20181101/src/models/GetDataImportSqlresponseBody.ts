// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDataImportSQLResponseBodySQLDetail } from "./GetDataImportSqlresponseBodySqldetail";


export class GetDataImportSQLResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the request failed.
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
   * The request ID. You can use the ID to locate logs and troubleshoot issues.
   * 
   * @example
   * B43AD641-49C2-5299-9E06-1B37EC1B****
   */
  requestId?: string;
  /**
   * @remarks
   * The details of SQL statements.
   */
  SQLDetail?: GetDataImportSQLResponseBodySQLDetail;
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
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      SQLDetail: 'SQLDetail',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      SQLDetail: GetDataImportSQLResponseBodySQLDetail,
      success: 'boolean',
    };
  }

  validate() {
    if(this.SQLDetail && typeof (this.SQLDetail as any).validate === 'function') {
      (this.SQLDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

