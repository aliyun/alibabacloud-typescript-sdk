// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSQLReviewOriginSQLResponseBodyOriginSQLList extends $dara.Model {
  /**
   * @remarks
   * The review status of the SQL statement. Valid values:
   * 
   * *   **new**: The SQL statement was waiting to be reviewed.
   * *   **unknown**: The SQL statement cannot be parsed.
   * *   **check_not_pass**: The SQL statement failed to pass the review.
   * *   **check_pass**: The SQL statement passed the review.
   * *   **force_pass**: The SQL statement passed the manual review.
   * *   **force_not_pass**: The SQL statement failed to pass the manual review.
   * 
   * @example
   * check_pass
   */
  checkStatus?: string;
  /**
   * @remarks
   * The time when the SQL statement was reviewed.
   * 
   * @example
   * 2021-06-09 21:07:00
   */
  checkedTime?: string;
  /**
   * @remarks
   * The file ID.
   * 
   * @example
   * 123321
   */
  fileId?: number;
  /**
   * @remarks
   * The name of the file.
   * 
   * @example
   * test.sql
   */
  fileName?: string;
  /**
   * @remarks
   * The statistics on the optimization suggestions for SQL statements. The value is a JSON string. Valid values:
   * 
   * *   **MUST_IMPROVE**: The SQL statements must be optimized.
   * *   **POTENTIAL_ISSUE**: The SQL statements contain potential issues.
   * *   **SUGGEST_IMPROVE**: We recommend that you optimize the SQL statements.
   * *   **USEDMSTOOLKIT**: We recommend that you change schemas without locking tables.
   * *   **USEDMSDML_UNLOCK**: We recommend that you change data without locking tables.
   * *   **TABLEINDEXSUGGEST**: We recommend that you optimize indexes for the SQL statements.
   * 
   * @example
   * {"POTENTIAL_ISSUE":1,"SUGGEST_IMPROVE":1}
   */
  reviewSummary?: string;
  /**
   * @remarks
   * The SQL statement in the file.
   * 
   * @example
   * select id from table_name
   */
  SQLContent?: string;
  /**
   * @remarks
   * The ID of the SQL statement.
   * 
   * @example
   * 1111
   */
  SQLId?: number;
  /**
   * @remarks
   * The name of the SQL statement.
   * 
   * @example
   * getByPk
   */
  SQLName?: string;
  /**
   * @remarks
   * The key that is used to query the information about optimization suggestions. You can call the [GetSQLReviewOptimizeDetail](https://help.aliyun.com/document_detail/465919.html) operation to query the details based on this key.
   * 
   * @example
   * a57e54ec5433475ea3082d882fdb89c5
   */
  SQLReviewQueryKey?: string;
  /**
   * @remarks
   * The MD5 hash value that is obtained after the SQL statement is calculated by using a hash algorithm.
   * 
   * @example
   * 95adb6e77a0884d9e50232cb8c5c969d
   */
  sqlHash?: string;
  /**
   * @remarks
   * The description of the review status.
   * 
   * @example
   * passed the test
   */
  statusDesc?: string;
  static names(): { [key: string]: string } {
    return {
      checkStatus: 'CheckStatus',
      checkedTime: 'CheckedTime',
      fileId: 'FileId',
      fileName: 'FileName',
      reviewSummary: 'ReviewSummary',
      SQLContent: 'SQLContent',
      SQLId: 'SQLId',
      SQLName: 'SQLName',
      SQLReviewQueryKey: 'SQLReviewQueryKey',
      sqlHash: 'SqlHash',
      statusDesc: 'StatusDesc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkStatus: 'string',
      checkedTime: 'string',
      fileId: 'number',
      fileName: 'string',
      reviewSummary: 'string',
      SQLContent: 'string',
      SQLId: 'number',
      SQLName: 'string',
      SQLReviewQueryKey: 'string',
      sqlHash: 'string',
      statusDesc: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

