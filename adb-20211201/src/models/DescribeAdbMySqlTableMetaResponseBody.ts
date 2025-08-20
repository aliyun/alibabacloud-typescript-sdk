// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAdbMySqlTableMetaResponseBodyTableMeta extends $dara.Model {
  /**
   * @remarks
   * The time when the table was created.
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
   * Indicates whether full-column indexes are used.
   * 
   * @example
   * false
   */
  isAllIndex?: boolean;
  /**
   * @remarks
   * Indicates whether dictionary encoding is used.
   * 
   * @example
   * true
   */
  isDictEncode?: boolean;
  /**
   * @remarks
   * Indicates whether full-text indexes are used.
   * 
   * @example
   * true
   */
  isFullTextDict?: boolean;
  /**
   * @remarks
   * Indicates whether pages are hidden.
   * 
   * *   **false**
   * *   **true**
   * 
   * @example
   * true
   */
  isHidden?: boolean;
  /**
   * @remarks
   * The partition key column.
   * 
   * @example
   * DATE_FORMAT(login_time, \\"%Y%m%d\\")
   */
  partitionColumn?: string;
  /**
   * @remarks
   * The type of the partition.
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
   * 
   * **
   * 
   * ****
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
   * The time when the table was updated.
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
   * The returned message. Valid values:
   * 
   * *   If the request was successful, a success message is returned.****
   * *   If the request failed, an error message is returned.
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
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The queried table metadata.
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

