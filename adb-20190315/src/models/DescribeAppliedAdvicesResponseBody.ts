// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAppliedAdvicesResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The advice ID.
   * 
   * @example
   * 7417db9c-914d-43f3-a123-4d0e448f****
   */
  adviceId?: string;
  /**
   * @remarks
   * The benefit of the advice.
   * 
   * @example
   * Save 0.4 GB of storage space.
   */
  benefit?: string;
  /**
   * @remarks
   * The SQL statement that is used to run the build task.
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
   * index
   */
  indexFields?: string;
  /**
   * @remarks
   * The state of the task that is run to apply the advice. Valid values:
   * 
   * - **SUCCEED**: The task is successful.
   * 
   * - **FAILED**: The task fails.
   * 
   * @example
   * SUCCEED
   */
  jobStatus?: string;
  /**
   * @remarks
   * The page number. The value is an integer that is greater than 0. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * 
   * - **30** (default)
   * 
   * - **50**
   * 
   * - **100**
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The SQL statement that is used to roll back the advice.
   * 
   * @example
   * alter table `schema1`.`table1` add key col1_1_idx(col1)
   */
  rollbackSQL?: string;
  /**
   * @remarks
   * The SQL statement that is used to apply the advice.
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
   * The submission status. Valid values:
   * 
   * - **SUCCEED**: The submission is successful.
   * 
   * - **FAILED**: The submission fails.
   * 
   * @example
   * SUCCEED
   */
  submitStatus?: string;
  /**
   * @remarks
   * The submission time. This value is a UTC time that is formatted as `yyMMddHHmm`.
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
   * The total number of returned suggestions. The value is an integer that is greater than or equal to 0. Default value: 0.
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
   * The page number. The value is an integer that is greater than 0. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * 
   * - **30** (default)
   * 
   * - **50**
   * 
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
   * A list of concatenated strings of database and table names.
   */
  schemaTableNames?: string[];
  /**
   * @remarks
   * The total number of returned results. The value is an integer that is greater than or equal to 0. Default value: 0.
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

