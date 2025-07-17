// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSQLReviewCheckResultStatusResponseBodyCheckResultStatusCheckStatusResult extends $dara.Model {
  /**
   * @remarks
   * The number of SQL statements that failed to pass the review.
   * 
   * @example
   * 1
   */
  checkNotPass?: number;
  /**
   * @remarks
   * The number of SQL statements that passed the review.
   * 
   * @example
   * 8
   */
  checkPass?: number;
  /**
   * @remarks
   * The number of SQL statements that failed to pass the manual review.
   * 
   * @example
   * 0
   */
  forceNotPass?: number;
  /**
   * @remarks
   * The number of SQL statements that passed the manual review.
   * 
   * @example
   * 1
   */
  forcePass?: number;
  /**
   * @remarks
   * The number of SQL statements to be reviewed.
   * 
   * @example
   * 0
   */
  new?: number;
  /**
   * @remarks
   * The number of abnormal SQL statements.
   * 
   * @example
   * 0
   */
  unknown?: number;
  static names(): { [key: string]: string } {
    return {
      checkNotPass: 'CheckNotPass',
      checkPass: 'CheckPass',
      forceNotPass: 'ForceNotPass',
      forcePass: 'ForcePass',
      new: 'New',
      unknown: 'Unknown',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkNotPass: 'number',
      checkPass: 'number',
      forceNotPass: 'number',
      forcePass: 'number',
      new: 'number',
      unknown: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSQLReviewCheckResultStatusResponseBodyCheckResultStatusSQLReviewResult extends $dara.Model {
  /**
   * @remarks
   * The number of SQL statements that must be modified.
   * 
   * @example
   * 1
   */
  mustImprove?: number;
  /**
   * @remarks
   * The number of SQL statements that have potential issues.
   * 
   * @example
   * 0
   */
  potentialIssue?: number;
  /**
   * @remarks
   * The number of SQL statements that can be modified.
   * 
   * @example
   * 3
   */
  suggestImprove?: number;
  /**
   * @remarks
   * The number of SQL statements that can use indexes.
   * 
   * @example
   * 2
   */
  tableIndexSuggest?: number;
  /**
   * @remarks
   * The number of SQL statements that can be used for lock-free data changes.
   * 
   * @example
   * 0
   */
  useDmsDmlUnlock?: number;
  /**
   * @remarks
   * The number of SQL statements that can be used for lock-free schema changes.
   * 
   * @example
   * 0
   */
  useDmsToolkit?: number;
  static names(): { [key: string]: string } {
    return {
      mustImprove: 'MustImprove',
      potentialIssue: 'PotentialIssue',
      suggestImprove: 'SuggestImprove',
      tableIndexSuggest: 'TableIndexSuggest',
      useDmsDmlUnlock: 'UseDmsDmlUnlock',
      useDmsToolkit: 'UseDmsToolkit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mustImprove: 'number',
      potentialIssue: 'number',
      suggestImprove: 'number',
      tableIndexSuggest: 'number',
      useDmsDmlUnlock: 'number',
      useDmsToolkit: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSQLReviewCheckResultStatusResponseBodyCheckResultStatus extends $dara.Model {
  /**
   * @remarks
   * The result of the SQL status check.
   */
  checkStatusResult?: GetSQLReviewCheckResultStatusResponseBodyCheckResultStatusCheckStatusResult;
  /**
   * @remarks
   * The number of SQL statements that were reviewed.
   * 
   * @example
   * 10
   */
  checkedCount?: number;
  /**
   * @remarks
   * The optimization suggestion for SQL statements.
   */
  SQLReviewResult?: GetSQLReviewCheckResultStatusResponseBodyCheckResultStatusSQLReviewResult;
  /**
   * @remarks
   * The total number of SQL statements.
   * 
   * @example
   * 10
   */
  totalSQLCount?: number;
  static names(): { [key: string]: string } {
    return {
      checkStatusResult: 'CheckStatusResult',
      checkedCount: 'CheckedCount',
      SQLReviewResult: 'SQLReviewResult',
      totalSQLCount: 'TotalSQLCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkStatusResult: GetSQLReviewCheckResultStatusResponseBodyCheckResultStatusCheckStatusResult,
      checkedCount: 'number',
      SQLReviewResult: GetSQLReviewCheckResultStatusResponseBodyCheckResultStatusSQLReviewResult,
      totalSQLCount: 'number',
    };
  }

  validate() {
    if(this.checkStatusResult && typeof (this.checkStatusResult as any).validate === 'function') {
      (this.checkStatusResult as any).validate();
    }
    if(this.SQLReviewResult && typeof (this.SQLReviewResult as any).validate === 'function') {
      (this.SQLReviewResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSQLReviewCheckResultStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result of the SQL review.
   */
  checkResultStatus?: GetSQLReviewCheckResultStatusResponseBodyCheckResultStatus;
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
   * 0C1CB646-1DE4-4AD0-B4A4-7D47DD52E931
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      checkResultStatus: 'CheckResultStatus',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkResultStatus: GetSQLReviewCheckResultStatusResponseBodyCheckResultStatus,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.checkResultStatus && typeof (this.checkResultStatus as any).validate === 'function') {
      (this.checkResultStatus as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

