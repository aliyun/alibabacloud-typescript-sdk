// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataCorrectPreCheckSQLResponseBodyPreCheckSQLList extends $dara.Model {
  /**
   * @remarks
   * The estimated number of affected rows.
   * 
   * @example
   * 0
   */
  affectRows?: number;
  /**
   * @remarks
   * The SQL statement.
   * 
   * @example
   * OPTIMIZE TABLE `Text_TableNames`
   */
  checkSQL?: string;
  /**
   * @remarks
   * The ID of the database.
   * 
   * @example
   * 1930****
   */
  dbId?: number;
  /**
   * @remarks
   * The key that is used to query the details of optimization suggestions. You can call the [GetSQLReviewOptimizeDetail](https://help.aliyun.com/document_detail/265977.html) operation to query the details of optimization suggestions based on the key.
   * 
   * @example
   * b9e771fc6ec247dea6d06a32c777****
   */
  SQLReviewQueryKey?: string;
  /**
   * @remarks
   * The review status of the SQL statement. Valid values:
   * 
   * *   **WAITING**: The SQL statement is pending for review.
   * *   **RUNNING**: The SQL statement is being reviewed.
   * *   **IGNORE**: The SQL statement review is skipped.
   * *   **PASS**: The SQL statement passed the review.
   * *   **BLOCK**: The SQL statement failed the review.
   * 
   * @example
   * WAITING
   */
  sqlReviewStatus?: string;
  /**
   * @remarks
   * The type of the SQL statement, such as DELETE, UPDATE, or ALTER_TABLE.
   * 
   * @example
   * OPTIMIZE
   */
  sqlType?: string;
  /**
   * @remarks
   * The name of the table whose data is changed.
   * 
   * @example
   * Text_TableNames
   */
  tableNames?: string;
  static names(): { [key: string]: string } {
    return {
      affectRows: 'AffectRows',
      checkSQL: 'CheckSQL',
      dbId: 'DbId',
      SQLReviewQueryKey: 'SQLReviewQueryKey',
      sqlReviewStatus: 'SqlReviewStatus',
      sqlType: 'SqlType',
      tableNames: 'TableNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      affectRows: 'number',
      checkSQL: 'string',
      dbId: 'number',
      SQLReviewQueryKey: 'string',
      sqlReviewStatus: 'string',
      sqlType: 'string',
      tableNames: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

