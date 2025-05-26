// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAdbMySqlTableMetaResponseBodyTableMeta extends $dara.Model {
  /**
   * @example
   * 2025-03-14 02:18:08.0
   */
  createTime?: string;
  /**
   * @example
   * customer_id
   */
  distributeColumn?: string;
  /**
   * @example
   * hash
   */
  distributeType?: string;
  /**
   * @example
   * false
   */
  isAllIndex?: boolean;
  /**
   * @example
   * true
   */
  isDictEncode?: boolean;
  /**
   * @example
   * true
   */
  isFullTextDict?: boolean;
  /**
   * @example
   * true
   */
  isHidden?: boolean;
  /**
   * @example
   * DATE_FORMAT(login_time, \\"%Y%m%d\\")
   */
  partitionColumn?: string;
  /**
   * @example
   * value
   */
  partitionType?: string;
  /**
   * @example
   * login_time,customer_id,phone_num
   */
  primaryKeyColumn?: string;
  /**
   * @example
   * XUANWU
   */
  tableEngine?: string;
  /**
   * @example
   * external_supplier
   */
  tableName?: string;
  /**
   * @example
   * tpch
   */
  tableSchema?: string;
  /**
   * @example
   * fact_table
   */
  tableType?: string;
  /**
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

