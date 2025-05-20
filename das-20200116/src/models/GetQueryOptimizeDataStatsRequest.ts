// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQueryOptimizeDataStatsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to sort the returned entries in ascending order. Default value: **true**. Valid values:
   * 
   * *   **true**: sorts the returned entries in ascending order.
   * *   **false**: does not sort the returned entries in ascending order.
   * 
   * @example
   * true
   */
  asc?: string;
  /**
   * @remarks
   * The name of the database to be queried.
   * 
   * @example
   * testdb01
   */
  dbNames?: string;
  /**
   * @remarks
   * The database engine. Valid values:
   * 
   * *   **MySQL**
   * *   **PolarDBMySQL**
   * *   **PostgreSQL**
   * 
   * This parameter is required.
   * 
   * @example
   * MySQL
   */
  engine?: string;
  /**
   * @remarks
   * The instance IDs. Separate multiple IDs with commas (,).
   * 
   * @example
   * rm-2ze8g2am97624****
   */
  instanceIds?: string;
  /**
   * @remarks
   * The keywords of the SQL template. Separate multiple keywords with spaces.
   * 
   * @example
   * select update
   */
  keywords?: string;
  /**
   * @remarks
   * The logical relationship between multiple keywords. Valid values:
   * 
   * *   **or**
   * *   **and**
   * 
   * @example
   * or
   */
  logicalOperator?: string;
  /**
   * @remarks
   * Specifies whether to query only SQL templates that need to be optimized. Default value: **false**. Valid values:
   * 
   * *   **true**: queries only SQL templates that need to be optimized.
   * *   **false**: does not query only SQL statements that need to be optimized.
   * 
   * @example
   * false
   */
  onlyOptimizedSql?: string;
  /**
   * @remarks
   * The field by which to sort the returned entries. Default value: **count**. Valid values:
   * 
   * *   **count**: the number of executions.
   * *   **maxQueryTime**: the longest execution time.
   * *   **avgQueryTime**: the average execution time.
   * *   **maxLockTime**: the longest lock wait time.
   * *   **avgLockTime**: the longest lock wait time.
   * *   **maxRowsExamined**: the largest number of scanned rows.
   * *   **avgRowsExamined**: the average number of scanned rows.
   * *   **maxRowsSent**: the largest number of returned rows.
   * *   **avgRowsSent**: the average number of returned rows.
   * 
   * @example
   * count
   */
  orderBy?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The region in which the instance resides. Valid values:
   * 
   * *   **cn-china**: Chinese mainland
   * *   **cn-hongkong**: China (Hong Kong)
   * *   **ap-southeast-1**: Singapore
   * 
   * This parameter takes effect only if **InstanceIds** is left empty. If you leave **InstanceIds** empty, the system obtains data from the region set by **Region**. By default, Region is set to **cn-china**. If you specify **InstanceIds**, **Region** does not take effect and the system obtains data from the region in which the first specified instance resides.****
   * 
   * >  Set this parameter to **cn-china** for the instances that are created in the regions in the Chinese mainland.
   * 
   * @example
   * cn-china
   */
  region?: string;
  /**
   * @remarks
   * The tags that are used to filter SQL templates. Separate multiple tags with commas (,). For more information, see [Query governance](https://help.aliyun.com/document_detail/290038.html).
   * 
   * @example
   * DAS_NOT_IMPORTANT
   */
  rules?: string;
  /**
   * @remarks
   * The SQL template ID. You can query the ID of a template by calling the [GetQueryOptimizeExecErrorStats](https://help.aliyun.com/document_detail/405235.html) operation.
   * 
   * @example
   * 2e8147b5ca2dfc640dfd5e43d96a****
   */
  sqlIds?: string;
  /**
   * @remarks
   * The reserved parameter.
   * 
   * @example
   * None
   */
  tagNames?: string;
  /**
   * @remarks
   * The time range to query. Specify the time in the UNIX timestamp format. Unit: milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1642953600000
   */
  time?: string;
  /**
   * @remarks
   * The account of the database to be queried.
   * 
   * @example
   * testUser
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      asc: 'Asc',
      dbNames: 'DbNames',
      engine: 'Engine',
      instanceIds: 'InstanceIds',
      keywords: 'Keywords',
      logicalOperator: 'LogicalOperator',
      onlyOptimizedSql: 'OnlyOptimizedSql',
      orderBy: 'OrderBy',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      region: 'Region',
      rules: 'Rules',
      sqlIds: 'SqlIds',
      tagNames: 'TagNames',
      time: 'Time',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asc: 'string',
      dbNames: 'string',
      engine: 'string',
      instanceIds: 'string',
      keywords: 'string',
      logicalOperator: 'string',
      onlyOptimizedSql: 'string',
      orderBy: 'string',
      pageNo: 'string',
      pageSize: 'string',
      region: 'string',
      rules: 'string',
      sqlIds: 'string',
      tagNames: 'string',
      time: 'string',
      user: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

