// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListSQLReviewOriginSQLRequestOrderActionDetailPage } from "./ListSqlreviewOriginSqlrequestOrderActionDetailPage";


export class ListSQLReviewOriginSQLRequestOrderActionDetail extends $dara.Model {
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
   * check_not_pass
   */
  checkStatusResult?: string;
  /**
   * @remarks
   * The ID of the file that contains the SQL statements to be reviewed.
   * 
   * @example
   * 123345
   */
  fileId?: number;
  /**
   * @remarks
   * The pagination information.
   */
  page?: ListSQLReviewOriginSQLRequestOrderActionDetailPage;
  /**
   * @remarks
   * The optimization suggestion for the SQL statement. Valid values:
   * 
   * *   **MUST_IMPROVE**: The SQL statement must be optimized.
   * *   **POTENTIAL_ISSUE**: The SQL statement contains potential issues.
   * *   **SUGGEST_IMPROVE**: We recommend that you optimize the SQL statement.
   * *   **USE_DMS_TOOLKIT**: We recommend that you change schemas without locking tables.
   * *   **USE_DMS_DML_UNLOCK**: We recommend that you change data without locking tables.
   * *   **TABLE_INDEX_SUGGEST**: We recommend that you optimize indexes for the SQL statement.
   * 
   * @example
   * MUST_IMPROVE
   */
  SQLReviewResult?: string;
  static names(): { [key: string]: string } {
    return {
      checkStatusResult: 'CheckStatusResult',
      fileId: 'FileId',
      page: 'Page',
      SQLReviewResult: 'SQLReviewResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkStatusResult: 'string',
      fileId: 'number',
      page: ListSQLReviewOriginSQLRequestOrderActionDetailPage,
      SQLReviewResult: 'string',
    };
  }

  validate() {
    if(this.page && typeof (this.page as any).validate === 'function') {
      (this.page as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

