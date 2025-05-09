// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListSQLReviewOriginSQLResponseBodyOriginSQLList } from "./ListSqlreviewOriginSqlresponseBodyOriginSqllist";


export class ListSQLReviewOriginSQLResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code that is returned.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message that is returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The information about the parsed SQL statements.
   */
  originSQLList?: ListSQLReviewOriginSQLResponseBodyOriginSQLList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0C1CB646-1DE4-4AD0-B4A4-7D47DD52E931
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values: Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The number of SQL statements in the file.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      originSQLList: 'OriginSQLList',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      originSQLList: { 'type': 'array', 'itemType': ListSQLReviewOriginSQLResponseBodyOriginSQLList },
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.originSQLList)) {
      $dara.Model.validateArray(this.originSQLList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

