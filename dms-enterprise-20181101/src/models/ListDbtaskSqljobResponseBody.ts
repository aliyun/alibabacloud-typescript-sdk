// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDBTaskSQLJobResponseBodyDBTaskSQLJobList } from "./ListDbtaskSqljobResponseBodyDbtaskSqljobList";


export class ListDBTaskSQLJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of the SQL tasks.
   */
  DBTaskSQLJobList?: ListDBTaskSQLJobResponseBodyDBTaskSQLJobList[];
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
   * The ID of the request.
   * 
   * @example
   * F6C47680-8D2D-43A4-8902-F2740D71A398
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of the SQL tasks.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      DBTaskSQLJobList: 'DBTaskSQLJobList',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBTaskSQLJobList: { 'type': 'array', 'itemType': ListDBTaskSQLJobResponseBodyDBTaskSQLJobList },
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.DBTaskSQLJobList)) {
      $dara.Model.validateArray(this.DBTaskSQLJobList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

