// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDataImportSQLPreCheckDetailResponseBodyPreCheckSQLDetailList } from "./ListDataImportSqlpreCheckDetailResponseBodyPreCheckSqldetailList";


export class ListDataImportSQLPreCheckDetailResponseBody extends $dara.Model {
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
   * The precheck information of SQL statements.
   */
  preCheckSQLDetailList?: ListDataImportSQLPreCheckDetailResponseBodyPreCheckSQLDetailList[];
  /**
   * @remarks
   * The request ID. You can use the ID to locate logs and troubleshoot issues.
   * 
   * @example
   * 31853A2B-DC9D-5B39-8492-D2AC8BCF550E
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
  /**
   * @remarks
   * The number of SQL statements.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      preCheckSQLDetailList: 'PreCheckSQLDetailList',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      preCheckSQLDetailList: { 'type': 'array', 'itemType': ListDataImportSQLPreCheckDetailResponseBodyPreCheckSQLDetailList },
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.preCheckSQLDetailList)) {
      $dara.Model.validateArray(this.preCheckSQLDetailList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

