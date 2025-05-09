// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetSQLReviewCheckResultStatusResponseBodyCheckResultStatusCheckStatusResult } from "./GetSqlreviewCheckResultStatusResponseBodyCheckResultStatusCheckStatusResult";
import { GetSQLReviewCheckResultStatusResponseBodyCheckResultStatusSQLReviewResult } from "./GetSqlreviewCheckResultStatusResponseBodyCheckResultStatusSqlreviewResult";


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

