// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQueryOptimizeShareUrlRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to sort the returned entries in ascending order. Default value: **true**. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  asc?: boolean;
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
   * *   **MySQL**: ApsaraDB RDS for MySQL
   * *   **PolarDBMySQL**: PolarDB for MySQL
   * *   **PostgreSQL**: ApsaraDB RDS for PostgreSQL
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
   * rm-2ze1jdv45i7l6****
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
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  onlyOptimizedSql?: boolean;
  /**
   * @remarks
   * The field by which to sort the returned entries. Default value: **count**. Valid values:
   * 
   * *   **count**: the number of executions.
   * *   **maxQueryTime**: the longest execution duration.
   * *   **avgQueryTime**: the average execution duration.
   * *   **maxLockTime**: the longest lock wait duration.
   * *   **avgLockTime**: the average lock wait duration.
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
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
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
   * >  If your instances reside in the regions in the Chinese mainland, set this parameter to **cn-china**.
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
   * The SQL template IDs. You can call the [GetQueryOptimizeExecErrorStats](https://help.aliyun.com/document_detail/405261.html) operation to obtain the SQL template IDs.
   * 
   * @example
   * 6068ce044e3dc9b903979672fb0b69df,d12515c015fc9f41a0778a9e1de0****
   */
  sqlIds?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * None
   */
  tagNames?: string;
  /**
   * @remarks
   * The date to query. Set this parameter to a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 1642953600000
   */
  time?: number;
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
      asc: 'boolean',
      dbNames: 'string',
      engine: 'string',
      instanceIds: 'string',
      keywords: 'string',
      logicalOperator: 'string',
      onlyOptimizedSql: 'boolean',
      orderBy: 'string',
      pageNo: 'number',
      pageSize: 'number',
      region: 'string',
      rules: 'string',
      sqlIds: 'string',
      tagNames: 'string',
      time: 'number',
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

