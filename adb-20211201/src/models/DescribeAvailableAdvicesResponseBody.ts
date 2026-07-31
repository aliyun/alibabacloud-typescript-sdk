// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAvailableAdvicesResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The date when the advice was generated. The date is displayed in the yyyyMMdd format.
   * 
   * @example
   * 20221124
   */
  adviceDate?: string;
  /**
   * @remarks
   * The advice ID.
   * 
   * @example
   * dcd04135-0925-4aed-a5a7-e7d92cb1****
   */
  adviceId?: string;
  /**
   * @remarks
   * The type of the advice. Valid values:
   * 
   * - **INDEX**: index optimization.
   * 
   * - **TIERING**: hot and cold data optimization.
   * 
   * @example
   * INDEX
   */
  adviceType?: string;
  /**
   * @remarks
   * The benefits of the advice.
   * 
   * @example
   * 节省0.4 GB的存储空间。
   */
  benefit?: string;
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
   * The page number. The value is greater than 0 and less than or equal to the maximum value of the integer data type. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values:
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
   * The reason why the optimization advice is generated.
   * 
   * @example
   * 15天未使用，历史使用统计概率小于1%
   */
  reason?: string;
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
   * The table name.
   * 
   * @example
   * test_table
   */
  tableName?: string;
  /**
   * @remarks
   * The total number of entries returned. The value is greater than or equal to 0 and less than or equal to the maximum value of the integer data type. Default value: 0.
   * 
   * @example
   * 10192
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      adviceDate: 'AdviceDate',
      adviceId: 'AdviceId',
      adviceType: 'AdviceType',
      benefit: 'Benefit',
      indexFields: 'IndexFields',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      reason: 'Reason',
      SQL: 'SQL',
      schemaName: 'SchemaName',
      tableName: 'TableName',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adviceDate: 'string',
      adviceId: 'string',
      adviceType: 'string',
      benefit: 'string',
      indexFields: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      reason: 'string',
      SQL: 'string',
      schemaName: 'string',
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

export class DescribeAvailableAdvicesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The optimization advice items.
   */
  items?: DescribeAvailableAdvicesResponseBodyItems[];
  /**
   * @remarks
   * The page number. The value is greater than 0 and less than or equal to the maximum value of the integer data type. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values:
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
   * 96A55627-28E9-5E47-B8F6-D786BE551349
   */
  requestId?: string;
  /**
   * @remarks
   * The names of databases and tables.
   */
  schemaTableNames?: string[];
  /**
   * @remarks
   * The total number of entries returned. The value is greater than or equal to 0 and less than or equal to the maximum value of the integer data type. Default value: 0.
   * 
   * @example
   * 10192
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
      items: { 'type': 'array', 'itemType': DescribeAvailableAdvicesResponseBodyItems },
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

