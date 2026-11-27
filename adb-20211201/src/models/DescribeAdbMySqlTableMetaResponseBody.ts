// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAdbMySqlTableMetaResponseBodyTableMeta extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2025-03-14 02:18:08.0
   */
  createTime?: string;
  /**
   * @remarks
   * The distribution key column.
   * 
   * @example
   * customer_id
   */
  distributeColumn?: string;
  /**
   * @remarks
   * The distribution type.
   * 
   * @example
   * hash
   */
  distributeType?: string;
  /**
   * @remarks
   * Indicates whether full indexing is enabled.
   * 
   * @example
   * false
   */
  isAllIndex?: boolean;
  /**
   * @remarks
   * Indicates whether dictionary encoding is enabled.
   * 
   * @example
   * true
   */
  isDictEncode?: boolean;
  /**
   * @remarks
   * Indicates whether full-text indexing is enabled.
   * 
   * @example
   * true
   */
  isFullTextDict?: boolean;
  /**
   * @remarks
   * Indicates whether the page is hidden. Valid values:
   * - **false**: The page is not hidden.
   * - **true**: The page is hidden.
   * 
   * @example
   * true
   */
  isHidden?: boolean;
  /**
   * @remarks
   * The partition column information.
   * 
   * @example
   * DATE_FORMAT(login_time, \"%Y%m%d\")
   */
  partitionColumn?: string;
  /**
   * @remarks
   * The partition type.
   * 
   * @example
   * value
   */
  partitionType?: string;
  /**
   * @remarks
   * The primary key column.
   * 
   * @example
   * login_time,customer_id,phone_num
   */
  primaryKeyColumn?: string;
  /**
   * @remarks
   * The table engine.
   * 
   * @example
   * XUANWU
   */
  tableEngine?: string;
  /**
   * @remarks
   * The name of the table.
   * > If this parameter is left empty, the usage frequency data of all tables in the specified cluster on the current day is returned.
   * 
   * @example
   * external_supplier
   */
  tableName?: string;
  /**
   * @remarks
   * The database to which the table belongs.
   * 
   * @example
   * tpch
   */
  tableSchema?: string;
  /**
   * @remarks
   * The type of the table.
   * 
   * @example
   * fact_table
   */
  tableType?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2024-07-25 02:07:23.0
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      distributeColumn: 'DistributeColumn',
      distributeType: 'DistributeType',
      isAllIndex: 'IsAllIndex',
      isDictEncode: 'IsDictEncode',
      isFullTextDict: 'IsFullTextDict',
      isHidden: 'IsHidden',
      partitionColumn: 'PartitionColumn',
      partitionType: 'PartitionType',
      primaryKeyColumn: 'PrimaryKeyColumn',
      tableEngine: 'TableEngine',
      tableName: 'TableName',
      tableSchema: 'TableSchema',
      tableType: 'TableType',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      distributeColumn: 'string',
      distributeType: 'string',
      isAllIndex: 'boolean',
      isDictEncode: 'boolean',
      isFullTextDict: 'boolean',
      isHidden: 'boolean',
      partitionColumn: 'string',
      partitionType: 'string',
      primaryKeyColumn: 'string',
      tableEngine: 'string',
      tableName: 'string',
      tableSchema: 'string',
      tableType: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAdbMySqlTableMetaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The additional information about the call result. Valid values:
   * - **Success**: The request is successful. 
   * - Specific error code: The request is abnormal.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2FED790E-FB61-4721-8C1C-07C627FA5A19
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * - **true**: The call was successful.
   * - **false**: The call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The table metadata.
   */
  tableMeta?: DescribeAdbMySqlTableMetaResponseBodyTableMeta;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      tableMeta: 'TableMeta',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      tableMeta: DescribeAdbMySqlTableMetaResponseBodyTableMeta,
    };
  }

  validate() {
    if(this.tableMeta && typeof (this.tableMeta as any).validate === 'function') {
      (this.tableMeta as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

