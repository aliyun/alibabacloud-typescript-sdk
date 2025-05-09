// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDBTaskSQLJobDetailResponseBodyDBTaskSQLJobDetailList } from "./ListDbtaskSqljobDetailResponseBodyDbtaskSqljobDetailList";


export class ListDBTaskSQLJobDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of SQL tasks.
   */
  DBTaskSQLJobDetailList?: ListDBTaskSQLJobDetailResponseBodyDBTaskSQLJobDetailList[];
  /**
   * @remarks
   * The error code that is returned.
   * 
   * @example
   * MissingJobId
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message that is returned.
   * 
   * @example
   * JobId is mandatory for this action.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 3F044E33-FE09-58F1-8C61-A0F612EC****
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
  /**
   * @remarks
   * The total number of SQL tasks.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      DBTaskSQLJobDetailList: 'DBTaskSQLJobDetailList',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBTaskSQLJobDetailList: { 'type': 'array', 'itemType': ListDBTaskSQLJobDetailResponseBodyDBTaskSQLJobDetailList },
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.DBTaskSQLJobDetailList)) {
      $dara.Model.validateArray(this.DBTaskSQLJobDetailList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

