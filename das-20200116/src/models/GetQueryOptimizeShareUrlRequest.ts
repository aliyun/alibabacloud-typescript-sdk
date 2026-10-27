// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQueryOptimizeShareUrlRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to sort the results in ascending order. Default value: **true**. Valid values:
   * 
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * true
   */
  asc?: boolean;
  /**
   * @remarks
   * The names of the databases to be queried.
   * 
   * @example
   * testdb01
   */
  dbNames?: string;
  /**
   * @remarks
   * The database engine. Valid values:
   * 
   * - **MySQL**: RDS MySQL
   * - **PolarDBMySQL**: PolarDB for MySQL
   * - **PostgreSQL**: RDS PostgreSQL
   * 
   * This parameter is required.
   * 
   * @example
   * MySQL
   */
  engine?: string;
  /**
   * @remarks
   * The instance IDs. Separate multiple instance IDs with commas.
   * 
   * @example
   * rm-2ze1jdv45i7l6****
   */
  instanceIds?: string;
  /**
   * @remarks
   * The keywords in the SQL text. Separate multiple keywords with spaces.
   * 
   * @example
   * select update
   */
  keywords?: string;
  /**
   * @remarks
   * The logical relationship between multiple keywords in the SQL text. Valid values:
   * 
   * - **or**: The OR logical relationship.
   * - **and**: The AND logical relationship.
   * 
   * @example
   * or
   */
  logicalOperator?: string;
  /**
   * @remarks
   * Specifies whether to query only the SQL statements that need to be optimized. Default value: **false**. Valid values:
   * 
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * true
   */
  onlyOptimizedSql?: boolean;
  /**
   * @remarks
   * The field by which to sort the results. Default value: **count**. Valid values:
   * 
   * - **count**: The number of executions.
   * - **maxQueryTime**: The maximum execution time.
   * - **avgQueryTime**: The average execution time.
   * - **maxLockTime**: The maximum lock wait time.
   * - **avgLockTime**: The average lock wait time.
   * - **maxRowsExamined**: The maximum number of scanned rows.
   * - **avgRowsExamined**: The average number of scanned rows.
   * - **maxRowsSent**: The maximum number of returned rows.
   * - **avgRowsSent**: The average number of returned rows.
   * 
   * @example
   * count
   */
  orderBy?: string;
  /**
   * @remarks
   * The page number of the paging query. Pages start from 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The maximum number of records per page in a paging query. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region where the instance resides. Valid values:
   * 
   * - **cn-china**: The Chinese mainland.
   * - **cn-hongkong**: Hong Kong (China).
   * - **ap-southeast-1**: Singapore.
   * 
   * This parameter is valid only when the **InstanceIds** request parameter is empty. If the **InstanceIds** request parameter is empty, data is retrieved based on the region specified by the **Region** parameter, and the default region is **cn-china**. If the **InstanceIds** request parameter is not empty, data is retrieved based on the region of the first instance specified in **InstanceIds**, regardless of the value of the **Region** parameter.
   * 
   * > For instances created in regions in the Chinese mainland, set this parameter to **cn-china**.
   * 
   * @example
   * cn-china
   */
  region?: string;
  /**
   * @remarks
   * The rules to be filtered. Separate multiple rules with commas. For more information, see [Query Governance](https://help.aliyun.com/document_detail/290038.html).
   * 
   * @example
   * DAS_NOT_IMPORTANT
   */
  rules?: string;
  /**
   * @remarks
   * The SQL template IDs. You can call the [GetQueryOptimizeDataStats](https://help.aliyun.com/document_detail/405261.html) operation to query the SQL template IDs.
   * 
   * @example
   * 6068ce044e3dc9b903979672fb0b69df,d12515c015fc9f41a0778a9e1de0****
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
   * The date when the data is queried. The value is a UNIX timestamp in milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1642953600000
   */
  time?: number;
  /**
   * @remarks
   * The database account to be queried.
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

