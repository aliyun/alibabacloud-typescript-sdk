// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAppliedAdvicesResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The suggestion ID.
   * 
   * @example
   * 7417db9c-914d-43f3-a123-4d0e448f****
   */
  adviceId?: string;
  /**
   * @remarks
   * The benefit of the suggestion.
   * 
   * @example
   * Saves 0.4 GB of storage space
   */
  benefit?: string;
  /**
   * @remarks
   * The SQL statement used to execute the build task.
   * 
   * @example
   * build table `schema1`.`table1`
   */
  buildSQL?: string;
  /**
   * @remarks
   * The index fields.
   * 
   * @example
   * message
   */
  indexFields?: string;
  /**
   * @remarks
   * The status of the task that executes the suggestion. Valid values:
   * - **SUCCEED**: Succeeded.
   * - **FAILED**: Failed.
   * 
   * @example
   * SUCCEED
   */
  jobStatus?: string;
  /**
   * @remarks
   * The page number. The value must be greater than 0 and no more than the maximum value of the Integer data type. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * - **30** (default)
   * - **50**
   * - **100**
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The rollback SQL statement for the suggestion.
   * 
   * @example
   * alter table `schema1`.`table1` add key col1_1_idx(col1)
   */
  rollbackSQL?: string;
  /**
   * @remarks
   * The SQL statement used to apply the suggestion.
   * 
   * @example
   * alter table `schema1`.`table1` drop key col1_1_idx
   */
  SQL?: string;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * adb_demo
   */
  schemaName?: string;
  /**
   * @remarks
   * The delivery status of the suggestion. Valid values:
   * - **SUCCEED**: Succeeded.
   * - **FAILED**: Failed.
   * 
   * @example
   * SUCCEED
   */
  submitStatus?: string;
  /**
   * @remarks
   * The time when the suggestion was issued. Format: yyMMddHHmm (UTC).
   * 
   * @example
   * 2208131600
   */
  submitTime?: string;
  /**
   * @remarks
   * The table name.
   * 
   * @example
   * test
   */
  tableName?: string;
  /**
   * @remarks
   * The total number of returned results. The value must be greater than or equal to 0 and no more than the maximum value of the Integer data type. Default value: 0.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      adviceId: 'AdviceId',
      benefit: 'Benefit',
      buildSQL: 'BuildSQL',
      indexFields: 'IndexFields',
      jobStatus: 'JobStatus',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      rollbackSQL: 'RollbackSQL',
      SQL: 'SQL',
      schemaName: 'SchemaName',
      submitStatus: 'SubmitStatus',
      submitTime: 'SubmitTime',
      tableName: 'TableName',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adviceId: 'string',
      benefit: 'string',
      buildSQL: 'string',
      indexFields: 'string',
      jobStatus: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      rollbackSQL: 'string',
      SQL: 'string',
      schemaName: 'string',
      submitStatus: 'string',
      submitTime: 'string',
      tableName: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppliedAdvicesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details.
   */
  items?: DescribeAppliedAdvicesResponseBodyItems[];
  /**
   * @remarks
   * The page number. The value must be greater than 0 and no more than the maximum value of the Integer data type. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * - **30** (default)
   * - **50**
   * - **100**
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 84489769-3065-5A28-A4CB-977CD426F1C3
   */
  requestId?: string;
  /**
   * @remarks
   * The concatenated string of the database name and table name.
   */
  schemaTableNames?: string[];
  /**
   * @remarks
   * The total number of returned results. The value must be greater than or equal to 0 and no more than the maximum value of the Integer data type. Default value: 0.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      schemaTableNames: 'SchemaTableNames',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeAppliedAdvicesResponseBodyItems },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      schemaTableNames: { 'type': 'array', 'itemType': 'string' },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    if(Array.isArray(this.schemaTableNames)) {
      $dara.Model.validateArray(this.schemaTableNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

