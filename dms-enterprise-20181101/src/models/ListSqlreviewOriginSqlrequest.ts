// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSQLReviewOriginSQLRequestOrderActionDetailPage extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class ListSQLReviewOriginSQLRequest extends $dara.Model {
  /**
   * @remarks
   * The parameters that are used to filter SQL statements involved in the ticket.
   */
  orderActionDetail?: ListSQLReviewOriginSQLRequestOrderActionDetail;
  /**
   * @remarks
   * The ID of the SQL review ticket. You can call the [CreateSQLReviewOrder](https://help.aliyun.com/document_detail/257777.html) operation to query the ticket ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123321
   */
  orderId?: number;
  /**
   * @remarks
   * The tenant ID. You can call the [GetUserActiveTenant](https://help.aliyun.com/document_detail/198073.html) or [ListUserTenants](https://help.aliyun.com/document_detail/198074.html) operation to query the tenant ID.
   * 
   * @example
   * 1
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      orderActionDetail: 'OrderActionDetail',
      orderId: 'OrderId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderActionDetail: ListSQLReviewOriginSQLRequestOrderActionDetail,
      orderId: 'number',
      tid: 'number',
    };
  }

  validate() {
    if(this.orderActionDetail && typeof (this.orderActionDetail as any).validate === 'function') {
      (this.orderActionDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

