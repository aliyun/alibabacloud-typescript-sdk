// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAvailableAdvicesResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The date when the advice was generated. The date is in the yyyyMMdd format. The time is in UTC.
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
   * - **Index**: index optimization.
   * 
   * - **Tiering**: hot and cold data optimization.
   * 
   * @example
   * Index
   */
  adviceType?: string;
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
   * The index fields.
   * 
   * @example
   * index
   */
  indexFields?: string;
  /**
   * @remarks
   * The page number. The value is greater than 0 and does not exceed the maximum value of the Integer data type. Default value: 1.
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
   * The reason why the optimization advice is generated.
   * 
   * @example
   * Unused for 15 days, historical usage less than 1%.
   */
  reason?: string;
  /**
   * @remarks
   * The SQL statement to apply the advice.
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
   * The total number of returned suggestions. The value is greater than or equal to 0 and does not exceed the maximum value of the Integer data type. Default value: 0.
   * 
   * @example
   * 30
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
   * The details.
   */
  items?: DescribeAvailableAdvicesResponseBodyItems[];
  /**
   * @remarks
   * The page number. The value is greater than 0 and does not exceed the maximum value of the Integer data type. Default value: 1.
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
   * 96A55627-28E9-5E47-B8F6-D786BE551349
   */
  requestId?: string;
  /**
   * @remarks
   * A list of concatenated strings of database and table names.
   */
  schemaTableNames?: string[];
  /**
   * @remarks
   * The total number of returned results. The value is greater than or equal to 0 and does not exceed the maximum value of the Integer data type. Default value: 0.
   * 
   * @example
   * 30
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

